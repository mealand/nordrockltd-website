import type { HeroMedia } from "@/components/sections/PageHero";
import { Picture } from "./Picture";
import { VideoLoop } from "./VideoLoop";

/** Fills a positioned parent with either a video loop or a photo. */
export function HeroMediaFill({ media, sizes }: { media: HeroMedia; sizes?: string }) {
  return "video" in media ? (
    <VideoLoop slug={media.video} loop={media.loop} label={media.label} />
  ) : (
    <Picture slug={media.image} alt={media.label} fill sizes={sizes} />
  );
}
