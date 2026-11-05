#!/usr/bin/env node
// Draws the home page Platforms artwork: a chain of ledger blocks crossing a contour
// map, from the ground to the buyer. Seeded, so every run gives the same picture.
// Writes media-src/illustrations/platforms-network.png; run `npm run media` after it.

import path from "node:path";
import sharp from "sharp";

const W = 2200;
const H = 1240;
const OUT = path.resolve(import.meta.dirname, "../media-src/illustrations/platforms-network.png");

let seed = 41;
const rand = () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};

// Height field: a few overlapping hills.
const hills = Array.from({ length: 16 }, () => ({
  x: rand() * W,
  y: rand() * H,
  r: 180 + rand() * 420,
  a: (rand() > 0.3 ? 1 : -0.7) * (0.5 + rand()),
}));
const height = (x, y) =>
  hills.reduce((sum, h) => sum + h.a * Math.exp(-((x - h.x) ** 2 + (y - h.y) ** 2) / h.r ** 2), 0);

// Marching squares over the field, one path per contour level.
function contour(level, cell = 14) {
  const segs = [];
  const cross = (x1, y1, v1, x2, y2, v2) => {
    const t = (level - v1) / (v2 - v1);
    return [x1 + (x2 - x1) * t, y1 + (y2 - y1) * t];
  };
  const line = (p, q) => `M${p.map((n) => n.toFixed(1))}L${q.map((n) => n.toFixed(1))}`;
  for (let y = 0; y < H; y += cell) {
    for (let x = 0; x < W; x += cell) {
      const a = height(x, y);
      const b = height(x + cell, y);
      const c = height(x + cell, y + cell);
      const d = height(x, y + cell);
      const pts = [];
      if (a < level !== b < level) pts.push(cross(x, y, a, x + cell, y, b));
      if (b < level !== c < level) pts.push(cross(x + cell, y, b, x + cell, y + cell, c));
      if (c < level !== d < level) pts.push(cross(x + cell, y + cell, c, x, y + cell, d));
      if (d < level !== a < level) pts.push(cross(x, y + cell, d, x, y, a));
      if (pts.length >= 2) segs.push(line(pts[0], pts[1]));
      if (pts.length === 4) segs.push(line(pts[2], pts[3]));
    }
  }
  return segs.join("");
}

const contours = Array.from({ length: 22 }, (_, i) => {
  const major = i % 4 === 0;
  return `<path d="${contour(-0.9 + i * 0.13)}" fill="none" stroke="#6fa8ff" stroke-width="${major ? 1.8 : 1}" stroke-opacity="${major ? 0.34 : 0.17}"/>`;
}).join("");

// The chain: isometric blocks along a rising curve.
const blocks = Array.from({ length: 7 }, (_, i) => {
  const t = i / 6;
  return {
    x: 230 + t * (W - 460),
    y: 900 - 520 * t ** 1.25 + Math.sin(t * Math.PI * 2.2) * 70,
    size: 58 + Math.sin(t * Math.PI) * 26,
  };
});

function cube({ x, y, size: s }, i) {
  const h = s * 0.58;
  const top = `${x},${y - h} ${x + s},${y} ${x},${y + h} ${x - s},${y}`;
  const left = `${x - s},${y} ${x},${y + h} ${x},${y + h + s} ${x - s},${y + s}`;
  const right = `${x + s},${y} ${x},${y + h} ${x},${y + h + s} ${x + s},${y + s}`;
  return `<g>
    <polygon points="${left}" fill="#123a86"/>
    <polygon points="${right}" fill="#0d2a66"/>
    <polygon points="${top}" fill="#1e6fe0" fill-opacity="${0.55 + (i / 6) * 0.45}"/>
    <polygon points="${top}" fill="none" stroke="#bcd8ff" stroke-width="2"/>
    <path d="M${x - s},${y}V${y + s}L${x},${y + h + s}L${x + s},${y + s}V${y}M${x},${y + h}V${y + h + s}" fill="none" stroke="#7fb2ff" stroke-width="1.6" stroke-opacity="0.8"/>
  </g>`;
}

const chain = blocks
  .slice(1)
  .map((b, i) => {
    const a = blocks[i];
    const mx = (a.x + b.x) / 2;
    return `M${a.x},${a.y + a.size * 0.3}C${mx},${a.y + a.size * 0.3} ${mx},${b.y + b.size * 0.3} ${b.x},${b.y + b.size * 0.3}`;
  })
  .join("");

// Participants: small nodes tied into a nearby block.
const nodes = Array.from({ length: 46 }, () => {
  const b = blocks[Math.floor(rand() * blocks.length)];
  const angle = rand() * Math.PI * 2;
  const dist = 130 + rand() * 230;
  return { b, x: b.x + Math.cos(angle) * dist, y: b.y + Math.sin(angle) * dist * 0.7, r: 3 + rand() * 5 };
}).filter((n) => n.x > 20 && n.x < W - 20 && n.y > 20 && n.y < H - 20);

const links = nodes.map((n) => `M${n.b.x},${n.b.y}L${n.x.toFixed(1)},${n.y.toFixed(1)}`).join("");
const dots = nodes
  .map((n) => `<circle cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="${n.r.toFixed(1)}" fill="#bcd8ff"/>`)
  .join("");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0" stop-color="#0a1230"/><stop offset="0.55" stop-color="#14224f"/><stop offset="1" stop-color="#1b2a5c"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.72" cy="0.32" r="0.6">
      <stop offset="0" stop-color="#1e6fe0" stop-opacity="0.55"/><stop offset="1" stop-color="#1e6fe0" stop-opacity="0"/>
    </radialGradient>
    <filter id="blur" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="14"/></filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  ${contours}
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <path d="${links}" fill="none" stroke="#7fb2ff" stroke-width="1.2" stroke-opacity="0.4"/>
  ${dots}
  <path d="${chain}" fill="none" stroke="#3f8cff" stroke-width="16" stroke-opacity="0.55" filter="url(#blur)"/>
  <path d="${chain}" fill="none" stroke="#bcd8ff" stroke-width="3.5"/>
  ${blocks.map((b) => `<ellipse cx="${b.x}" cy="${b.y + b.size * 0.5}" rx="${b.size * 1.5}" ry="${b.size}" fill="#3f8cff" fill-opacity="0.4" filter="url(#blur)"/>`).join("")}
  ${blocks.map(cube).join("")}
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(OUT);
console.log(`Wrote ${path.relative(process.cwd(), OUT)}`);
