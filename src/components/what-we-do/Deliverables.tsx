import { deliverables } from "@/content/what-we-do";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/** "What exactly does NordRock deliver?" — four outcomes on navy. */
export function Deliverables() {
  return (
    <Section tone="navy" className="overflow-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 -left-40 size-[36rem] rounded-full bg-azure/20 blur-3xl"
      />
      <Container className="relative">
        <Reveal y={16}>
          <Eyebrow>What we deliver</Eyebrow>
        </Reveal>
        <SplitReveal
          text="What exactly does NordRock deliver?"
          className="font-display mt-5 max-w-3xl text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
        />
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl leading-relaxed text-white/75">
            Compliant supply chains, efficient trade, and commodities that move with transparency,
            reliability and value.
          </p>
        </Reveal>

        <RevealGroup as="ol" className="mt-14 grid gap-x-12 sm:grid-cols-2 lg:mt-20" stagger={0.1}>
          {deliverables.map((d, i) => (
            <div key={d.title} className="group border-t border-white/15 py-8 sm:py-10">
              <div className="flex items-baseline gap-5">
                <span className="font-display text-sm font-semibold text-gold">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-sky-300 sm:text-3xl">
                    {d.title}
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-white/75">{d.text}</p>
                </div>
              </div>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
