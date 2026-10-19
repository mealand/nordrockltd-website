import Link from "next/link";
import { industryPages } from "@/content/industries";
import { HeroMediaFill } from "@/components/media/HeroMediaFill";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/** Three tall video cards, one per industry. */
export function IndustriesTeaser() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <Reveal y={16}>
              <Eyebrow>Industries</Eyebrow>
            </Reveal>
            <SplitReveal
              text="Minerals at our core. Technology and energy for what comes next."
              className="font-display mt-5 max-w-3xl text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
            />
          </div>
          <Reveal delay={0.2} className="shrink-0">
            <Button href="/industries/" variant="secondary">
              All industries
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3" stagger={0.12}>
          {industryPages.map((ind, i) => {
            const m = ind.overview;
            const href = `/industries/${ind.slug}/`;
            return (
              <Link
                key={ind.slug}
                href={href}
                className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-3xl bg-ink p-6 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azure sm:p-8 md:aspect-[9/14]"
              >
                <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105">
                  <HeroMediaFill media={m.media} sizes="(min-width: 768px) 33vw, 100vw" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="relative">
                  <span className="font-display text-sm font-semibold text-gold">0{i + 1}</span>
                  <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {ind.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{m.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {m.points.map((pt) => (
                      <li
                        key={pt}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90 ring-1 ring-white/15 backdrop-blur-sm"
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition-colors group-hover:text-gold">
                    Explore
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}
