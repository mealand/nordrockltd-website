import type { HeroMedia } from "@/components/sections/PageHero";
import { HeroMediaFill } from "@/components/media/HeroMediaFill";
import { Magnetic } from "@/components/motion/Magnetic";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export type Closing = { title: string; button: string; href: string; media?: HeroMedia };

/** Closing call to action over a parallax photo or loop. Ends most interior pages. */
export function ClosingBanner({ title, button, href, media }: Closing) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white [--accent:var(--color-sky-300)]">
      {media && (
        <Parallax className="-z-20" strength={18}>
          <HeroMediaFill media={media} sizes="100vw" />
        </Parallax>
      )}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-20 -z-10 size-[34rem] rounded-full bg-royal/30 blur-3xl"
      />
      <Container className="flex flex-col items-start gap-10 py-24 sm:py-32 lg:flex-row lg:items-end lg:justify-between">
        <SplitReveal
          as="h2"
          text={title}
          className="font-display max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl"
        />
        <Reveal delay={0.3}>
          <Magnetic>
            <Button href={href}>{button}</Button>
          </Magnetic>
        </Reveal>
      </Container>
    </section>
  );
}
