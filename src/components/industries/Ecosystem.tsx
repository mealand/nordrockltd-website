import { ecosystem } from "@/content/industries";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/** How the three industries reinforce each other. */
export function Ecosystem() {
  return (
    <Section tone="navy" className="overflow-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -bottom-40 size-[36rem] rounded-full bg-azure/20 blur-3xl"
      />
      <Container className="relative grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div>
          <Reveal y={16}>
            <Eyebrow>{ecosystem.eyebrow}</Eyebrow>
          </Reveal>
          <SplitReveal
            text={ecosystem.title}
            className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
          />
        </div>
        <RevealGroup as="ul" className="space-y-4" stagger={0.12}>
          {ecosystem.links.map((l) => (
            <div
              key={l.from + l.to}
              className="flex flex-col gap-3 rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10 sm:flex-row sm:items-center sm:gap-6 sm:p-7"
            >
              <span className="font-display shrink-0 text-lg font-semibold text-sky-300">
                {l.from}
              </span>
              <span
                aria-hidden
                className="hidden h-px flex-1 bg-gradient-to-r from-gold to-transparent sm:block"
              />
              <span className="text-white/85">
                {l.text} <span className="sr-only">for {l.to}</span>
              </span>
              <span aria-hidden className="font-display shrink-0 text-sm font-semibold text-gold">
                → {l.to}
              </span>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
