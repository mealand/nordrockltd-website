# NordRock Limited — Corporate Website

Next.js (App Router, TypeScript, Tailwind CSS v4) built as a **static export** for cPanel hosting.
Live URL: `https://nordrockltd.com` · Plan: [docs/DEVELOPMENT_PLAN.md](docs/DEVELOPMENT_PLAN.md)

## Commands

| Command          | What it does                                                    |
| ---------------- | --------------------------------------------------------------- |
| `npm run dev`    | Local dev server at http://localhost:3000                       |
| `npm run build`  | Static export to `out/` (upload this folder)                    |
| `npm run media`  | Optimize `media-src/` → `public/media/` and update the manifest |
| `npm run lint`   | ESLint                                                          |
| `npm run format` | Prettier                                                        |

## Media pipeline

Raw originals go in `media-src/` (git-ignored — too large for the repo):

```
media-src/
├── photos/          operational photos (JPG/PNG)
├── illustrations/   AI artwork (watermark corner is trimmed automatically)
├── logos/           brand marks with transparency (PNG)
└── videos/          phone clips (MP4) — loop segments are set in scripts/media.config.mjs
```

`npm run media` produces, in `public/media/` (committed):

- **Images:** AVIF + WebP + JPG at 640/1280/1920 px (never upscaled), levels stretched; photos median-denoised (removes WhatsApp compression noise), illustrations lightly sharpened; blur placeholder.
- **Videos:** audio stripped, denoised with a slight colour lift, 24fps, short silent H.264 MP4 loops (bitrate-capped), AVIF/WebP/JPG posters; long clips also get a compressed full-length cut.
- **Manifest:** `src/content/media-manifest.json`, which components read for sources, sizes and placeholders.

Exact duplicates are detected by hash and skipped. Only changed sources are re-encoded; pass `-- --force` to rebuild all.
ffmpeg/ffprobe come from the `ffmpeg-static` / `ffprobe-static` packages, so no system install is needed.

## Deployment

Pushes to `main` build and deploy automatically to `https://nordrockltd.com` via GitHub
Actions over FTPS. One-time cPanel and GitHub secrets setup: [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Indexing

The deploy workflow builds with `NEXT_PUBLIC_ALLOW_INDEXING=true`, so `nordrockltd.com` is open to
search engines. Any other build is `noindex` (meta tag and `robots.txt`), and the `newsite.` host also
gets an `X-Robots-Tag` header. Set the repository variable to `false` to block a deployed build.
