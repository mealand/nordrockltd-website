// Typed access to the media manifest written by scripts/optimize-media.mjs.
// Import only from server components: the manifest carries base64 blur
// placeholders and should not end up in client bundles.
import manifest from "@/content/media-manifest.json";

export type ImageSlug = keyof typeof manifest.images;
export type VideoSlug = keyof typeof manifest.videos;
export type LogoSlug = keyof typeof manifest.logos;

type Variant = { width: number; src: string };
export type ImageAsset = {
  slug: string;
  width: number;
  height: number;
  blurDataURL: string;
  variants: { avif: Variant[]; webp: Variant[]; jpg: Variant[] };
};
export type PosterSet = { avif: string; webp: string; jpg: string };
export type VideoLoopAsset = {
  name: string;
  duration: number;
  mp4: string;
  poster: PosterSet;
  blurDataURL: string;
};
export type VideoAsset = {
  slug: string;
  width: number;
  height: number;
  loops: VideoLoopAsset[];
  full: { duration: number; mp4: string; poster: PosterSet } | null;
};

export function getImage(slug: ImageSlug): ImageAsset {
  return manifest.images[slug] as ImageAsset;
}

export function getVideo(slug: VideoSlug): VideoAsset {
  return manifest.videos[slug] as VideoAsset;
}

export function getLogo(slug: LogoSlug) {
  return manifest.logos[slug];
}

export const srcSet = (variants: Variant[]) =>
  variants.map((v) => `${v.src} ${v.width}w`).join(", ");
