// Media pipeline configuration. Raw originals live in /media-src (git-ignored);
// optimized outputs are written to /public/media and committed.

export const IMAGE_WIDTHS = [640, 1280, 1920];

// Gemini-generated illustrations carry a ✦ watermark in the bottom-right corner;
// trimming this fraction off the right and bottom edges removes it.
export const ILLUSTRATION_TRIM = 0.05;

// Each video yields one or more short, silent background loops. Clips listed with
// `full: true` also get a compressed full-length cut for click-to-play.
// Times are in seconds, chosen from frame strips of each source clip.
export const VIDEOS = [
  { src: "clip-1.mp4", slug: "artisan-pit-mining", loops: [{ start: 0, duration: 12 }], full: true },
  {
    src: "clip-2.mp4",
    slug: "artisan-gemstone-finds",
    loops: [
      { start: 0, duration: 12 },
      { start: 33, duration: 12, suffix: "gems" },
    ],
    full: true,
  },
  { src: "clip-3.mp4", slug: "excavator-operations", loops: [{ start: 17, duration: 12 }] },
  // clip-4 is a lower-resolution duplicate of clip-5 and is skipped.
  { src: "clip-5.mp4", slug: "site-survey-river", loops: [{ start: 0, duration: 13 }] },
  { src: "clip-6.mp4", slug: "artisan-registration", loops: [{ start: 0, duration: 12 }] },
  { src: "clip-7.mp4", slug: "site-team-walk", loops: [{ start: 0, duration: 15 }] },
  { src: "clip-8.mp4", slug: "site-inspection-tour", loops: [{ start: 100, duration: 12 }], full: true },
  { src: "clip-9.mp4", slug: "registration-documentation", loops: [{ start: 0, duration: 12 }] },
];

// The sources are noisy phone clips. Denoising (rather than sharpening) is what
// keeps them small: noise is the most expensive thing to encode. A touch of
// contrast/saturation; dimensions forced even for yuv420p; 24fps.
export const VIDEO_FILTER =
  "hqdn3d=4:3:6:4.5,eq=contrast=1.05:saturation=1.08,scale=trunc(iw/2)*2:trunc(ih/2)*2,fps=24";

// H.264 only — VP9/WebM came out larger on this footage and plays nowhere H.264 doesn't.
// The bitrate cap matters more than CRF here; 500k is visually identical to source at ~1MB/15s.
export const VIDEO_ENCODE = {
  loop: { crf: 30, maxrate: "500k", bufsize: "1000k" },
  full: { crf: 31, maxrate: "400k", bufsize: "800k" },
};
