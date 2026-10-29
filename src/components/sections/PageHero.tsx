import { getImage, getVideo, type ImageSlug, type VideoSlug } from "@/lib/media";
import { cn } from "@/lib/utils";
import { Picture } from "@/components/media/Picture";
import { VideoLoop } from "@/components/media/VideoLoop";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";

export type HeroMedia =
  { video: VideoSlug; loop?: number; label: string } | { image: ImageSlug; label: string };

/** Below this width a source is too soft to stretch across a desktop screen. */
const FULL_BLEED_MIN_WIDTH = 960;

/**
 * Dark hero with a video or photo. Every page opens with one so the transparent
 * header always sits on a dark backdrop.
 *
 * Most NordRock footage is portrait phone video/photos (360–540px wide). Those
 * render full-bleed on phones, but on desktop they sit sharp in a framed portrait
 * card over a blurred backdrop rather than being upscaled 3x. Wide sources
 * (≥960px, landscape) stay full-bleed at every size.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  media,
  size = "page",
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  media: HeroMedia;
  /** "home" fills the viewport; "page" is a shorter interior-page hero. */
  size?: "home" | "page";
  /** Extra content under the intro, e.g. buttons. */
  children?: React.ReactNode;
}) {
  const isVideo = "video" in media;
  const dims = isVideo ? getVideo(media.video) : getImage(media.image);
  const framed = dims.height > dims.width || dims.width < FULL_BLEED_MIN_WIDTH;
  const backdrop = isVideo
    ? getVideo(media.video).loops[media.loop ?? 0].poster.jpg
    : getImage(media.image).variants.jpg[0].src;

  const mediaEl = isVideo ? (
    <VideoLoop slug={media.video} loop={media.loop} label={media.label} priority />
  ) : (
    <Picture
      slug={media.image}
      alt={media.label}
      fill
      priority
      sizes={framed ? "(min-width: 1024px) 420px, 100vw" : "100vw"}
    />
  );

  return (
    <section
      className={cn(
        "relative isolate flex items-end overflow-hidden bg-ink text-white [--accent:var(--color-sky-300)]",
        size === "home" ? "min-h-[100svh]" : "min-h-[70svh] lg:min-h-[78svh]",
      )}
    >
      {framed ? (
        // Desktop backdrop: the same frame, heavily blurred, so colour carries without pixelation.
        <div
          aria-hidden
          className="absolute inset-0 -z-10 hidden scale-110 bg-cover bg-center blur-3xl lg:block"
          style={{ backgroundImage: `url(${backdrop})` }}
        />
      ) : (
        <Parallax className="-z-10" strength={14}>
          {mediaEl}
        </Parallax>
      )}
      {/* Legibility scrims. */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 -z-10",
          framed
            ? "lg:bg-gradient-to-r lg:from-ink lg:via-ink/85 lg:to-ink/50"
            : "bg-gradient-to-t from-ink via-ink/55 to-ink/30",
        )}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_100%,rgba(30,111,224,0.32),transparent_55%)]"
      />

      <Container
        wide
        className={cn(
          "pt-32 pb-16 sm:pb-20 lg:pb-24",
          framed && "lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16",
        )}
      >
        <div>
          {eyebrow && (
            <Reveal y={16}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <SplitReveal
            as="h1"
            text={title}
            immediate
            delay={0.15}
            className={cn(
              "font-display mt-5 max-w-5xl font-semibold tracking-tight text-balance",
              size === "home"
                ? "text-4xl leading-[1.02] sm:text-6xl lg:text-7xl xl:text-8xl"
                : "text-4xl leading-[1.05] sm:text-6xl lg:text-7xl",
            )}
          />
          {intro && (
            <Reveal delay={0.5} y={20}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                {intro}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.7} y={20} className="mt-9 flex flex-wrap gap-4">
              {children}
            </Reveal>
          )}
        </div>

        {framed && (
          // Phones: fills the hero behind the copy (with its own scrim).
          // Desktop: a framed portrait card beside the copy.
          <div
            className={cn(
              "absolute inset-0 -z-20 lg:relative lg:inset-auto lg:z-auto lg:aspect-[9/16] lg:overflow-hidden lg:rounded-[2rem] lg:shadow-2xl lg:ring-1 lg:shadow-ink/60 lg:ring-white/15",
              size === "home" ? "lg:h-[min(72svh,46rem)]" : "lg:h-[min(60svh,38rem)]",
            )}
          >
            <Parallax strength={10}>{mediaEl}</Parallax>
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/35 lg:hidden"
            />
          </div>
        )}
      </Container>
    </section>
  );
}
