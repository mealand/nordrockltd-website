import { getVideo, type VideoSlug } from "@/lib/media";
import { VideoLoopPlayer } from "./VideoLoopPlayer";

type VideoLoopProps = {
  slug: VideoSlug;
  /** Which loop of the clip to use (index into the manifest's loops). */
  loop?: number;
  /** Describes the footage for screen readers; the video itself is decorative. */
  label: string;
  /** Start loading immediately (hero) instead of when scrolled near. */
  priority?: boolean;
  className?: string;
};

/**
 * Silent background loop. Resolves sources on the server so the manifest stays
 * out of the client bundle; the player handles lazy-loading and pausing.
 */
export function VideoLoop({ slug, loop = 0, label, priority, className }: VideoLoopProps) {
  const video = getVideo(slug);
  const clip = video.loops[loop] ?? video.loops[0];
  return (
    <VideoLoopPlayer
      src={clip.mp4}
      poster={clip.poster}
      blurDataURL={clip.blurDataURL}
      label={label}
      priority={priority}
      className={className}
    />
  );
}
