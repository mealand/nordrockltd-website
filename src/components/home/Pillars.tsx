import { pillars } from "@/content/home";
import { Picture } from "@/components/media/Picture";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/**
 * The three strategic pillars. On desktop the heading stays pinned (CSS sticky)
 * while the pillar cards scroll past it.
 */
export function Pillars() {
  return (
    <Section tone="navy" className="overflow-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 size-[40rem] rounded-full bg-azure/20 blur-3xl"
      />
      <Container className="relative grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal y={16}>
            <Eyebrow>How we build the ecosystem</Eyebrow>
          </Reveal>
          <SplitReveal
            text="Three pillars for a resilient critical mineral supply."
            className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md leading-relaxed text-white/75">
              Technology, people and capital working together, so every mineral that leaves an
              artisanal site is legal, traceable and fairly valued.
            </p>
            <div className="mt-8">
              <Button href="/what-we-do/" variant="outline">
                Explore what we do
              </Button>
            </div>
          </Reveal>
        </div>

        <ol className="space-y-8 sm:space-y-10">
          {pillars.map((p, i) => (
            <li key={p.title}>
              <Reveal>
                <article className="group overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 transition-colors duration-500 hover:bg-white/[0.07]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Parallax strength={16}>
                      <Picture
                        slug={p.image}
                        alt={p.alt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        imgClassName="transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
                      />
                    </Parallax>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent" />
                    <span className="font-display absolute top-5 left-6 text-sm font-semibold text-royal-300">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-white/75">{p.summary}</p>
                    <ul className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm text-white/85">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex gap-3">
                          <span
                            aria-hidden
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-royal"
                          />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
