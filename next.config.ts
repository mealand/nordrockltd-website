import type { NextConfig } from "next";

// Static export for cPanel/Apache hosting: `next build` emits plain files to /out.
// Server-only features (cacheComponents, rewrites, headers, server actions) are
// intentionally not used — headers and redirects live in public/.htaccess instead.
const nextConfig: NextConfig = {
  output: "export",
  // /about -> /about/index.html, which Apache serves without rewrite rules.
  trailingSlash: true,
  // Images are pre-optimized by scripts/optimize-media.mjs (AVIF/WebP/JPG at
  // several widths), so Next's runtime optimizer is not needed.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
