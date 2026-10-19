import { getVideo, type VideoSlug } from "@/lib/media";
import { FeatureVideoPlayer } from "./FeatureVideoPlayer";

/**
 * Full-length site footage behind a poster and play button. Nothing loads until
 * the visitor presses play. Only clips with a `full: true` cut in
 * scripts/media.config.mjs can be used here.
 */
export function FeatureVideo({
  slug,
  title,
  className,
}: {
  slug: VideoSlug;
  /** Short description shown on the poster and used as the accessible name. */
  title: string;
  className?: string;
}) {
  const video = getVideo(slug);
  if (!video.full) throw new Error(`FeatureVideo: "${slug}" has no full-length cut`);
  const minutes = Math.floor(video.full.duration / 60);
  const seconds = Math.round(video.full.duration % 60)
    .toString()
    .padStart(2, "0");

  return (
    <FeatureVideoPlayer
      src={video.full.mp4}
      poster={video.full.poster}
      title={title}
      duration={`${minutes}:${seconds}`}
      className={className}
    />
  );
}
