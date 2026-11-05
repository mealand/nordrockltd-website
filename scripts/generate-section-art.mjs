#!/usr/bin/env node
// Draws the parallax section backgrounds, in the same style as the Platforms artwork.
// Seeded, so every run gives the same pictures. Writes to media-src/illustrations/;
// run `npm run media` after it.

import path from "node:path";
import sharp from "sharp";

const W = 2200;
const H = 1240;
const DIR = path.resolve(import.meta.dirname, "../media-src/illustrations");
const LINE = "#6fa8ff";
const PALE = "#bcd8ff";
const ROYAL = "#1e6fe0";

const rng = (start) => {
  let seed = start;
  return () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
};
const f = (n) => n.toFixed(1);
const dot = (x, y, r, fill = PALE, o = 1) =>
  `<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="${fill}" fill-opacity="${o}"/>`;
const glow = (x, y, rx, ry = rx, o = 0.45) =>
  `<ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(rx * 1.7)}" ry="${f(ry * 1.7)}" fill="url(#soft)" opacity="${o}"/>`;

function page(body, glowAt = [0.7, 0.3]) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0" stop-color="#0a1230"/><stop offset="0.55" stop-color="#14224f"/><stop offset="1" stop-color="#1b2a5c"/>
    </linearGradient>
    <radialGradient id="glow" cx="${glowAt[0]}" cy="${glowAt[1]}" r="0.6">
      <stop offset="0" stop-color="${ROYAL}" stop-opacity="0.55"/><stop offset="1" stop-color="${ROYAL}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="soft">
      <stop offset="0" stop-color="#3f8cff" stop-opacity="1"/><stop offset="0.45" stop-color="#3f8cff" stop-opacity="0.4"/><stop offset="1" stop-color="#3f8cff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${body}
</svg>`;
}

/** A honeycomb with lit cells: separate parts building one structure. */
function hexes() {
  const r = rng(11);
  const R = 74;
  const dx = Math.sqrt(3) * R;
  const out = [];
  for (let row = -1; row < 12; row++) {
    for (let col = -1; col < 17; col++) {
      const x = col * dx + (row % 2 ? dx / 2 : 0);
      const y = row * R * 1.5;
      const pts = Array.from({ length: 6 }, (_, i) => {
        const a = Math.PI / 6 + (i * Math.PI) / 3;
        return `${f(x + Math.cos(a) * R)},${f(y + Math.sin(a) * R)}`;
      }).join(" ");
      const lit = r();
      if (lit > 0.88) {
        out.push(glow(x, y, R, R, 0.5));
        out.push(`<polygon points="${pts}" fill="${ROYAL}" fill-opacity="0.75" stroke="${PALE}" stroke-width="2"/>`);
      } else if (lit > 0.7) {
        out.push(`<polygon points="${pts}" fill="${ROYAL}" fill-opacity="0.18" stroke="${LINE}" stroke-opacity="0.5" stroke-width="1.5"/>`);
      } else {
        out.push(`<polygon points="${pts}" fill="none" stroke="${LINE}" stroke-opacity="0.2" stroke-width="1.2"/>`);
      }
    }
  }
  return page(out.join(""));
}

/** A cross-section of rock layers with mineral seams. */
function strata() {
  const r = rng(23);
  const out = [];
  const bands = 11;
  for (let b = 0; b < bands; b++) {
    const base = 150 + b * 105;
    const a1 = 22 + r() * 34;
    const a2 = 10 + r() * 20;
    const p1 = r() * 6;
    const p2 = r() * 6;
    const y = (x) => base + Math.sin(x / 430 + p1) * a1 + Math.sin(x / 170 + p2) * a2;
    let d = `M0,${f(y(0))}`;
    for (let x = 20; x <= W; x += 20) d += `L${x},${f(y(x))}`;
    out.push(`<path d="${d}L${W},${H}L0,${H}Z" fill="#0d2a66" fill-opacity="${f(0.1 + b * 0.012)}"/>`);
    out.push(`<path d="${d}" fill="none" stroke="${b % 3 === 0 ? PALE : LINE}" stroke-width="${b % 3 === 0 ? 2.4 : 1.2}" stroke-opacity="${b % 3 === 0 ? 0.55 : 0.28}"/>`);
    for (let i = 0; i < 16; i++) {
      const x = r() * W;
      const yy = y(x) + 12 + r() * 70;
      const s = 3 + r() * 11;
      const pts = `${f(x)},${f(yy - s)} ${f(x + s)},${f(yy)} ${f(x)},${f(yy + s)} ${f(x - s)},${f(yy)}`;
      out.push(`<polygon points="${pts}" fill="${r() > 0.6 ? PALE : "#3f8cff"}" fill-opacity="${f(0.35 + r() * 0.5)}"/>`);
    }
  }
  return page(out.join(""), [0.3, 0.75]);
}

/** Arcs rising from a horizon: a long view. */
function arcs() {
  const r = rng(31);
  const cx = W * 0.68;
  const cy = H * 1.02;
  const out = [glow(cx, cy, 520, 300, 0.6)];
  for (let i = 0; i < 15; i++) {
    const rad = 190 + i * 95;
    const major = i % 3 === 0;
    out.push(`<circle cx="${f(cx)}" cy="${f(cy)}" r="${rad}" fill="none" stroke="${major ? PALE : LINE}" stroke-width="${major ? 2.2 : 1.1}" stroke-opacity="${major ? 0.5 : 0.25}"/>`);
    const n = 2 + Math.floor(r() * 5);
    for (let k = 0; k < n; k++) {
      const a = Math.PI + r() * Math.PI;
      out.push(dot(cx + Math.cos(a) * rad, cy + Math.sin(a) * rad, 3 + r() * 6));
    }
  }
  for (let i = 0; i < 26; i++) {
    const a = Math.PI + ((i + 0.5) / 26) * Math.PI;
    out.push(`<line x1="${f(cx + Math.cos(a) * 190)}" y1="${f(cy + Math.sin(a) * 190)}" x2="${f(cx + Math.cos(a) * 1600)}" y2="${f(cy + Math.sin(a) * 1600)}" stroke="${LINE}" stroke-opacity="0.09" stroke-width="1"/>`);
  }
  return page(out.join(""), [0.68, 0.9]);
}

/** Four orbits around one centre: four industries, one way of working. */
function orbits() {
  const r = rng(47);
  const cx = W * 0.62;
  const cy = H * 0.5;
  const out = [glow(cx, cy, 240, 240, 0.7)];
  [20, 65, 110, 155].forEach((deg, i) => {
    const rx = 860 - i * 60;
    const ry = 300 + i * 25;
    const rot = (deg * Math.PI) / 180;
    out.push(`<ellipse cx="${f(cx)}" cy="${f(cy)}" rx="${rx}" ry="${ry}" fill="none" stroke="${PALE}" stroke-opacity="0.42" stroke-width="2.2" transform="rotate(${deg} ${f(cx)} ${f(cy)})"/>`);
    out.push(`<ellipse cx="${f(cx)}" cy="${f(cy)}" rx="${rx + 34}" ry="${ry + 34}" fill="none" stroke="${LINE}" stroke-opacity="0.16" stroke-width="1" transform="rotate(${deg} ${f(cx)} ${f(cy)})"/>`);
    for (let k = 0; k < 7; k++) {
      const t = r() * Math.PI * 2;
      const px = Math.cos(t) * rx;
      const py = Math.sin(t) * ry;
      const x = cx + px * Math.cos(rot) - py * Math.sin(rot);
      const y = cy + px * Math.sin(rot) + py * Math.cos(rot);
      const big = k === 0;
      if (big) out.push(glow(x, y, 40, 40, 0.7));
      out.push(dot(x, y, big ? 15 : 4 + r() * 4));
    }
  });
  out.push(dot(cx, cy, 34, ROYAL), `<circle cx="${f(cx)}" cy="${f(cy)}" r="34" fill="none" stroke="${PALE}" stroke-width="3"/>`);
  return page(out.join(""), [0.62, 0.5]);
}

/** Crop rows running to a low sun, with marked plots. */
function rows() {
  const r = rng(53);
  const vx = W * 0.64;
  const vy = H * 0.3;
  const out = [glow(vx, vy, 340, 150, 0.8), dot(vx, vy - 6, 44, PALE, 0.85)];
  out.push(`<line x1="0" y1="${f(vy)}" x2="${W}" y2="${f(vy)}" stroke="${PALE}" stroke-opacity="0.5" stroke-width="2"/>`);
  for (let i = -30; i <= 30; i++) {
    const bx = vx + i * 150;
    const major = i % 4 === 0;
    out.push(`<line x1="${f(vx + i * 8)}" y1="${f(vy)}" x2="${f(bx)}" y2="${H}" stroke="${major ? PALE : LINE}" stroke-opacity="${major ? 0.42 : 0.2}" stroke-width="${major ? 2 : 1.1}"/>`);
    const steps = 9;
    for (let k = 1; k < steps; k++) {
      const t = (k / steps) ** 2;
      if (r() < 0.32) {
        out.push(dot(vx + i * 8 + (bx - vx - i * 8) * t, vy + (H - vy) * t, 2 + t * 9, r() > 0.7 ? PALE : "#3f8cff", 0.8));
      }
    }
  }
  for (let k = 1; k < 10; k++) {
    const y = vy + (H - vy) * (k / 10) ** 2;
    out.push(`<line x1="0" y1="${f(y)}" x2="${W}" y2="${f(y)}" stroke="${LINE}" stroke-opacity="0.13" stroke-width="1"/>`);
  }
  return page(out.join(""), [0.64, 0.3]);
}

/** A field of solar panels under a sun. */
function solar() {
  const out = [];
  const sx = W * 0.82;
  const sy = H * 0.14;
  out.push(glow(sx, sy, 300, 300, 0.75), dot(sx, sy, 60, PALE, 0.9));
  for (let i = 0; i < 32; i++) {
    const a = (i / 32) * Math.PI * 2;
    out.push(`<line x1="${f(sx + Math.cos(a) * 90)}" y1="${f(sy + Math.sin(a) * 90)}" x2="${f(sx + Math.cos(a) * (i % 2 ? 180 : 620))}" y2="${f(sy + Math.sin(a) * (i % 2 ? 180 : 620))}" stroke="${PALE}" stroke-opacity="0.16" stroke-width="1.5"/>`);
  }
  const u = 118;
  const v = 62;
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const x = 180 + (col - row) * (u + 18) + 480;
      const y = 470 + (col + row) * (v * 0.62 + 12);
      const a = [x, y];
      const b = [x + u, y + v * 0.62];
      const c = [x, y + v * 1.24];
      const d = [x - u, y + v * 0.62];
      const pts = [a, b, c, d].map((p) => p.map(f).join(",")).join(" ");
      const lift = 0.3 + ((col + row) / 16) * 0.55;
      let grid = "";
      for (let t = 1; t < 4; t++) {
        const m = t / 4;
        grid += `M${f(a[0] + (b[0] - a[0]) * m)},${f(a[1] + (b[1] - a[1]) * m)}L${f(d[0] + (c[0] - d[0]) * m)},${f(d[1] + (c[1] - d[1]) * m)}`;
        grid += `M${f(a[0] + (d[0] - a[0]) * m)},${f(a[1] + (d[1] - a[1]) * m)}L${f(b[0] + (c[0] - b[0]) * m)},${f(b[1] + (c[1] - b[1]) * m)}`;
      }
      out.push(`<polygon points="${pts}" fill="${ROYAL}" fill-opacity="${f(lift)}" stroke="${PALE}" stroke-opacity="0.75" stroke-width="1.6"/>`);
      out.push(`<path d="${grid}" fill="none" stroke="${PALE}" stroke-opacity="0.32" stroke-width="1"/>`);
    }
  }
  return page(out.join(""), [0.82, 0.14]);
}

/** Routed circuit traces between chips. */
function circuit() {
  const r = rng(71);
  const G = 44;
  const out = [];
  for (let i = 0; i < 74; i++) {
    let x = Math.round((r() * W) / G) * G;
    let y = Math.round((r() * H) / G) * G;
    let d = `M${x},${y}`;
    const start = [x, y];
    const segs = 3 + Math.floor(r() * 4);
    let dir = r() > 0.5 ? 0 : 1;
    for (let s = 0; s < segs; s++) {
      const len = (2 + Math.floor(r() * 7)) * G * (r() > 0.5 ? 1 : -1);
      if (dir === 0) x += len;
      else if (dir === 1) y += len;
      else {
        x += len / 2;
        y += (len / 2) * (r() > 0.5 ? 1 : -1);
      }
      d += `L${x},${y}`;
      dir = (dir + 1 + Math.floor(r() * 2)) % 3;
    }
    const bright = r() > 0.72;
    out.push(`<path d="${d}" fill="none" stroke="${bright ? PALE : LINE}" stroke-opacity="${bright ? 0.6 : 0.28}" stroke-width="${bright ? 2.4 : 1.4}" stroke-linejoin="round"/>`);
    out.push(`<circle cx="${start[0]}" cy="${start[1]}" r="6" fill="none" stroke="${PALE}" stroke-opacity="0.7" stroke-width="1.8"/>`);
    out.push(dot(x, y, bright ? 6 : 4));
  }
  for (const [x, y, w, h] of [
    [1320, 240, 260, 180],
    [420, 780, 220, 150],
    [1680, 820, 180, 180],
  ]) {
    out.push(glow(x + w / 2, y + h / 2, w * 0.75, h * 0.75, 0.55));
    out.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="#123a86" stroke="${PALE}" stroke-width="2.5"/>`);
    out.push(`<rect x="${x + 22}" y="${y + 22}" width="${w - 44}" height="${h - 44}" rx="8" fill="${ROYAL}" fill-opacity="0.6"/>`);
  }
  return page(out.join(""));
}

/** A city of ledger blocks at different heights. */
function blocks() {
  const r = rng(83);
  const u = 92;
  const v = u * 0.58;
  const items = [];
  for (let row = 0; row < 14; row++) {
    for (let col = 0; col < 14; col++) {
      const x = W * 0.52 + (col - row) * u;
      const y = 60 + (col + row) * v;
      if (r() < 0.32) continue;
      items.push({ x, y, h: 20 + r() * r() * 190, lit: r() > 0.86, order: col + row });
    }
  }
  const out = items
    .sort((a, b) => a.order - b.order)
    .map(({ x, y, h, lit }) => {
      const s = u - 8;
      const t = s * 0.58;
      const top = `${f(x)},${f(y - t - h)} ${f(x + s)},${f(y - h)} ${f(x)},${f(y + t - h)} ${f(x - s)},${f(y - h)}`;
      const left = `${f(x - s)},${f(y - h)} ${f(x)},${f(y + t - h)} ${f(x)},${f(y + t)} ${f(x - s)},${f(y)}`;
      const right = `${f(x + s)},${f(y - h)} ${f(x)},${f(y + t - h)} ${f(x)},${f(y + t)} ${f(x + s)},${f(y)}`;
      return `<polygon points="${left}" fill="#123a86" stroke="${LINE}" stroke-opacity="0.45"/>
        <polygon points="${right}" fill="#0d2a66" stroke="${LINE}" stroke-opacity="0.45"/>
        <polygon points="${top}" fill="${ROYAL}" fill-opacity="${lit ? 1 : 0.42}" stroke="${PALE}" stroke-opacity="${lit ? 1 : 0.5}" stroke-width="${lit ? 2 : 1.2}"/>`;
    });
  return page(out.join(""));
}

/** A dotted globe with routes between partners. */
function globe() {
  const r = rng(97);
  const cx = W * 0.68;
  const cy = H * 0.52;
  const R = 560;
  const tilt = 0.32;
  const out = [glow(cx, cy, R * 0.9, R * 0.9, 0.3)];
  const project = (lat, lon) => {
    const x = Math.cos(lat) * Math.sin(lon);
    const y0 = Math.sin(lat);
    const z0 = Math.cos(lat) * Math.cos(lon);
    const y = y0 * Math.cos(tilt) - z0 * Math.sin(tilt);
    const z = y0 * Math.sin(tilt) + z0 * Math.cos(tilt);
    return [cx + x * R, cy - y * R, z];
  };
  for (let lat = -80; lat <= 80; lat += 5) {
    const steps = Math.max(8, Math.round(72 * Math.cos((lat * Math.PI) / 180)));
    for (let k = 0; k < steps; k++) {
      const [x, y, z] = project((lat * Math.PI) / 180, (k / steps) * Math.PI * 2);
      if (z > 0) out.push(dot(x, y, 1.6 + z * 2.2, LINE, 0.25 + z * 0.55));
    }
  }
  out.push(`<circle cx="${f(cx)}" cy="${f(cy)}" r="${R}" fill="none" stroke="${PALE}" stroke-opacity="0.4" stroke-width="2"/>`);
  const hub = project(0.15, -0.25);
  for (let i = 0; i < 11; i++) {
    const p = project(-0.75 + r() * 1.7, -1.2 + r() * 2.4);
    if (p[2] < 0.1) continue;
    const mx = (hub[0] + p[0]) / 2;
    const my = (hub[1] + p[1]) / 2 - 90 - r() * 170;
    out.push(`<path d="M${f(hub[0])},${f(hub[1])}Q${f(mx)},${f(my)} ${f(p[0])},${f(p[1])}" fill="none" stroke="${PALE}" stroke-opacity="0.75" stroke-width="2.2"/>`);
    out.push(glow(p[0], p[1], 22, 22, 0.8), dot(p[0], p[1], 7));
  }
  out.push(glow(hub[0], hub[1], 56, 56, 0.9), dot(hub[0], hub[1], 13));
  return page(out.join(""), [0.68, 0.5]);
}

/** Calibrated rings around a checked seal. */
function seal() {
  const cx = W * 0.72;
  const cy = H * 0.5;
  const out = [glow(cx, cy, 280, 280, 0.65)];
  [230, 310, 400, 500, 620, 760, 920].forEach((rad, i) => {
    out.push(`<circle cx="${f(cx)}" cy="${f(cy)}" r="${rad}" fill="none" stroke="${i % 2 ? LINE : PALE}" stroke-opacity="${i % 2 ? 0.22 : 0.42}" stroke-width="${i % 2 ? 1.2 : 2}"/>`);
    const ticks = 36 + i * 24;
    let d = "";
    for (let k = 0; k < ticks; k++) {
      const a = (k / ticks) * Math.PI * 2;
      const len = k % 6 === 0 ? 22 : 9;
      d += `M${f(cx + Math.cos(a) * rad)},${f(cy + Math.sin(a) * rad)}L${f(cx + Math.cos(a) * (rad + len))},${f(cy + Math.sin(a) * (rad + len))}`;
    }
    out.push(`<path d="${d}" stroke="${PALE}" stroke-opacity="0.3" stroke-width="1.2" fill="none"/>`);
  });
  const hex = Array.from({ length: 6 }, (_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI) / 3;
    return `${f(cx + Math.cos(a) * 165)},${f(cy + Math.sin(a) * 165)}`;
  }).join(" ");
  out.push(`<polygon points="${hex}" fill="${ROYAL}" stroke="${PALE}" stroke-width="4"/>`);
  out.push(`<path d="M${f(cx - 72)},${f(cy + 4)}L${f(cx - 18)},${f(cy + 60)}L${f(cx + 82)},${f(cy - 58)}" fill="none" stroke="#ffffff" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>`);
  return page(out.join(""), [0.72, 0.5]);
}

const art = {
  "bg-hexes": hexes,
  "bg-strata": strata,
  "bg-arcs": arcs,
  "bg-orbits": orbits,
  "bg-rows": rows,
  "bg-solar": solar,
  "bg-circuit": circuit,
  "bg-blocks": blocks,
  "bg-globe": globe,
  "bg-seal": seal,
};

for (const [slug, draw] of Object.entries(art)) {
  await sharp(Buffer.from(draw()))
    .png({ compressionLevel: 9 })
    .toFile(path.join(DIR, `${slug}.png`));
  console.log(`Wrote ${slug}.png`);
}
