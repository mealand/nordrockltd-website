import type { ImageSlug } from "@/lib/media";
import { Parallax } from "@/components/motion/Parallax";
import { cn } from "@/lib/utils";
import { Picture } from "./Picture";

const scrims = {
  navy: "from-navy/75 via-navy/45 to-navy/85",
  ink: "from-ink/70 via-ink/35 to-ink/80",
};

/** Artwork behind a whole dark section, moving on scroll. Put a `relative` container after it. */
export function ParallaxBackdrop({
  slug,
  tone = "navy",
}: {
  slug: ImageSlug;
  /** The section's tone, so the legibility scrim blends into it. */
  tone?: keyof typeof scrims;
}) {
  return (
    <>
      <Parallax strength={24}>
        <Picture slug={slug} alt="" fill sizes="100vw" />
      </Parallax>
      <div
        aria-hidden
        className={cn("pointer-events-none absolute inset-0 bg-gradient-to-b", scrims[tone])}
      />
    </>
  );
}
