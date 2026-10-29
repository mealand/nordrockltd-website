#!/usr/bin/env node
// Optimizes raw media from /media-src into /public/media and writes a manifest
// (src/content/media-manifest.json) the site's <Picture>/<Video> components read.
//
//   npm run media            # process anything new or changed
//   npm run media -- --force # rebuild everything
//
// Folders under media-src/:
//   photos/         operational photos   -> AVIF + WebP + JPG at IMAGE_WIDTHS
//   illustrations/  AI artwork           -> same, watermark corner trimmed
//   portraits/      leadership headshots -> same, pre-cropped square; no denoise
//   logos/          brand marks (alpha)  -> trimmed PNG + WebP
//   videos/         phone clips          -> silent H.264 MP4 loops + posters

import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import ffmpegPath from "ffmpeg-static";
import ffprobe from "ffprobe-static";
import sharp from "sharp";
import {
  IMAGE_WIDTHS,
  ILLUSTRATION_TRIM,
  VIDEOS,
  VIDEO_ENCODE,
  VIDEO_FILTER,
  WIDE_FILTER,
  LIFT_FILTER,
} from "./media.config.mjs";

const run = promisify(execFile);
const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "media-src");
const OUT = path.join(ROOT, "public", "media");
const MANIFEST = path.join(ROOT, "src", "content", "media-manifest.json");
const FORCE = process.argv.includes("--force");

const rel = (p) => "/" + path.relative(path.join(ROOT, "public"), p).split(path.sep).join("/");

async function exists(p) {
  return fs.access(p).then(() => true, () => false);
}

/** True when `out` is missing or older than `src`. */
async function stale(src, out) {
  if (FORCE || !(await exists(out))) return true;
  const [s, o] = await Promise.all([fs.stat(src), fs.stat(out)]);
  return s.mtimeMs > o.mtimeMs;
}

async function listFiles(dir, exts) {
  if (!(await exists(dir))) return [];
  return (await fs.readdir(dir))
    .filter((f) => exts.includes(path.extname(f).toLowerCase()))
    .sort()
    .map((f) => path.join(dir, f));
}

async function blurDataURL(input) {
  const buf = await sharp(input).resize(16).webp({ quality: 40 }).toBuffer();
  return `data:image/webp;base64,${buf.toString("base64")}`;
}

// ---------------------------------------------------------------- images

async function processImage(file, kind, seen) {
  const slug = path.parse(file).name;
  const outDir = path.join(OUT, "images");
  await fs.mkdir(outDir, { recursive: true });

  const hash = createHash("sha1").update(await fs.readFile(file)).digest("hex");
  if (seen.has(hash)) {
    console.log(`  skip ${kind}/${slug} (duplicate of ${seen.get(hash)})`);
    return null;
  }
  seen.set(hash, slug);

  let base = sharp(file).rotate(); // honour EXIF orientation
  const meta = await base.metadata();
  let { width, height } = meta;
  if (kind === "illustrations") {
    width = Math.round(width * (1 - ILLUSTRATION_TRIM));
    height = Math.round(height * (1 - ILLUSTRATION_TRIM));
    base = base.extract({ left: 0, top: 0, width, height });
  }
  // Stretch levels slightly. The photos are WhatsApp-compressed, so a 3px median
  // removes JPEG block noise; sharpening them would amplify it and bloat every
  // encoded file. The AI illustrations are clean and only get a gentle sharpen.
  base = base.normalise({ lower: 1, upper: 99 });
  base = kind === "photos" ? base.median(3) : base.sharpen({ sigma: 0.5 });
  const enhanced = await base.toBuffer();

  const widths = IMAGE_WIDTHS.filter((w) => w < width).concat(Math.min(width, IMAGE_WIDTHS.at(-1)));
  const unique = [...new Set(widths)];
  const variants = { avif: [], webp: [], jpg: [] };

  for (const w of unique) {
    const targets = {
      avif: path.join(outDir, `${slug}-${w}.avif`),
      webp: path.join(outDir, `${slug}-${w}.webp`),
      jpg: path.join(outDir, `${slug}-${w}.jpg`),
    };
    if (await stale(file, targets.jpg)) {
      const resized = sharp(enhanced).resize({ width: w, withoutEnlargement: true });
      await Promise.all([
        resized.clone().avif({ quality: 45, effort: 6 }).toFile(targets.avif),
        resized.clone().webp({ quality: 65, effort: 6, smartSubsample: true }).toFile(targets.webp),
        resized.clone().flatten({ background: "#ffffff" }).jpeg({ quality: 72, mozjpeg: true }).toFile(targets.jpg),
      ]);
    }
    for (const fmt of Object.keys(variants)) variants[fmt].push({ width: w, src: rel(targets[fmt]) });
  }

  console.log(`  ${kind}/${slug} -> ${unique.join("/")}px`);
  return {
    slug,
    kind,
    width,
    height,
    blurDataURL: await blurDataURL(enhanced),
    variants,
  };
}

async function processLogo(file) {
  const slug = path.parse(file).name;
  const outDir = path.join(OUT, "logos");
  await fs.mkdir(outDir, { recursive: true });
  const png = path.join(outDir, `${slug}.png`);
  const webp = path.join(outDir, `${slug}.webp`);

  // Trim transparent padding; cap at 1200px wide which covers 2x retina headers.
  const trimmed = await sharp(file).trim().resize({ width: 1200, withoutEnlargement: true }).toBuffer();
  if (await stale(file, png)) {
    await sharp(trimmed).png({ compressionLevel: 9, palette: true }).toFile(png);
    await sharp(trimmed).webp({ quality: 90, alphaQuality: 100 }).toFile(webp);
  }
  const { width, height } = await sharp(trimmed).metadata();
  console.log(`  logos/${slug} -> ${width}x${height}`);
  return { slug, width, height, png: rel(png), webp: rel(webp) };
}

// ---------------------------------------------------------------- video

async function probe(file) {
  const { stdout } = await run(ffprobe.path, [
    "-v", "error", "-select_streams", "v:0",
    "-show_entries", "stream=width,height:format=duration", "-of", "json", file,
  ]);
  const j = JSON.parse(stdout);
  return { width: j.streams[0].width, height: j.streams[0].height, duration: Number(j.format.duration) };
}

async function encode(input, outFile, { start, duration, crf, maxrate, bufsize, filter = VIDEO_FILTER }) {
  const seek = start != null ? ["-ss", String(start)] : [];
  const len = duration != null ? ["-t", String(duration)] : [];
  await run(ffmpegPath, [
    "-y", "-v", "error", ...seek, "-i", input, ...len,
    "-an", // strip audio
    "-vf", filter,
    "-c:v", "libx264", "-preset", "slow", "-crf", String(crf),
    "-maxrate", maxrate, "-bufsize", bufsize, "-profile:v", "high",
    "-pix_fmt", "yuv420p", "-movflags", "+faststart", outFile,
  ]);
}

async function poster(input, at, outBase, filter = VIDEO_FILTER) {
  const frame = `${outBase}-poster.png`;
  await run(ffmpegPath, ["-y", "-v", "error", "-ss", String(at), "-i", input, "-frames:v", "1", "-vf", filter, frame]);
  const buf = await fs.readFile(frame);
  await fs.rm(frame);
  await Promise.all([
    sharp(buf).avif({ quality: 50 }).toFile(`${outBase}-poster.avif`),
    sharp(buf).webp({ quality: 72 }).toFile(`${outBase}-poster.webp`),
    sharp(buf).jpeg({ quality: 78, mozjpeg: true }).toFile(`${outBase}-poster.jpg`),
  ]);
  return { blurDataURL: await blurDataURL(buf) };
}

async function processVideo(cfg) {
  const input = path.join(SRC, "videos", cfg.src);
  if (!(await exists(input))) {
    console.warn(`  missing videos/${cfg.src}, skipped`);
    return null;
  }
  const outDir = path.join(OUT, "video");
  await fs.mkdir(outDir, { recursive: true });
  const info = await probe(input);
  const entry = { slug: cfg.slug, width: 0, height: 0, loops: [], full: null };
  const filter = cfg.lift ? LIFT_FILTER : cfg.wide ? WIDE_FILTER : VIDEO_FILTER;
  const loopEncode = cfg.wide ? VIDEO_ENCODE.wide : VIDEO_ENCODE.loop;

  for (const loop of cfg.loops) {
    const name = loop.suffix ? `${cfg.slug}-${loop.suffix}` : cfg.slug;
    const outBase = path.join(outDir, `${name}-loop`);
    const duration = Math.min(loop.duration, info.duration - loop.start);
    if (await stale(input, `${outBase}.mp4`)) {
      await encode(input, `${outBase}.mp4`, { start: loop.start, duration, filter, ...loopEncode });
    }
    // Read dimensions from the output so rotated phone clips report their displayed shape.
    if (!entry.width) {
      const { width, height } = await probe(`${outBase}.mp4`);
      Object.assign(entry, { width, height });
    }
    const { blurDataURL: blur } = await poster(input, loop.start + 0.5, outBase, filter);
    entry.loops.push({
      name,
      duration,
      mp4: rel(`${outBase}.mp4`),
      poster: { avif: rel(`${outBase}-poster.avif`), webp: rel(`${outBase}-poster.webp`), jpg: rel(`${outBase}-poster.jpg`) },
      blurDataURL: blur,
    });
  }

  if (cfg.full) {
    const outBase = path.join(outDir, `${cfg.slug}-full`);
    if (await stale(input, `${outBase}.mp4`)) {
      await encode(input, `${outBase}.mp4`, { ...VIDEO_ENCODE.full, filter });
    }
    await poster(input, Math.min(2, info.duration / 2), outBase, filter);
    entry.full = {
      duration: info.duration,
      mp4: rel(`${outBase}.mp4`),
      poster: { avif: rel(`${outBase}-poster.avif`), webp: rel(`${outBase}-poster.webp`), jpg: rel(`${outBase}-poster.jpg`) },
    };
  }
  console.log(`  videos/${cfg.slug} -> ${entry.loops.length} loop(s)${entry.full ? " + full" : ""}`);
  return entry;
}

// ---------------------------------------------------------------- main

const seen = new Map();
const manifest = { images: {}, logos: {}, videos: {} };

console.log("Images");
for (const kind of ["photos", "illustrations", "portraits"]) {
  for (const file of await listFiles(path.join(SRC, kind), [".jpg", ".jpeg", ".png", ".webp"])) {
    const img = await processImage(file, kind, seen);
    if (img) manifest.images[img.slug] = img;
  }
}

console.log("Logos");
for (const file of await listFiles(path.join(SRC, "logos"), [".png"])) {
  const logo = await processLogo(file);
  manifest.logos[logo.slug] = logo;
}

console.log("Videos");
for (const cfg of VIDEOS) {
  const vid = await processVideo(cfg);
  if (vid) manifest.videos[vid.slug] = vid;
}

await fs.mkdir(path.dirname(MANIFEST), { recursive: true });
await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
console.log(`\nManifest written to ${path.relative(ROOT, MANIFEST)}`);
