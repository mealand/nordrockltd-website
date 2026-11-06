import { cn } from "@/lib/utils";

const variants = {
  /** Text fills the lower half: heroes and tall cards. */
  bottom: "bg-gradient-to-t from-ink/95 via-ink/75 to-ink/40",
  /** Only a heading sits at the foot of the frame. */
  foot: "bg-gradient-to-t from-ink/95 via-ink/50 to-ink/10",
  /** Text starts at the left and can run the full width on phones: banners. */
  left: "bg-gradient-to-r from-ink/95 via-ink/80 to-ink/60",
  /** Added on top of `bottom` on desktop, where hero text sits at the left. */
  side: "bg-gradient-to-r from-ink/70 via-ink/30 to-transparent",
};

/**
 * The dark layer between a photo or video and the text on it. Every media
 * background with text uses one, so even a white frame keeps text readable.
 */
export function MediaOverlay({
  variant = "bottom",
  className,
}: {
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", variants[variant], className)}
    />
  );
}
