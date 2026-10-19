import { intro, stats } from "@/content/home";
import { Counter } from "@/components/motion/Counter";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/** Goal statement and headline numbers, directly under the hero. */
export function HomeIntro() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-20">
          <div>
            <Reveal y={16}>
              <Eyebrow>{intro.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-display mt-6 text-2xl leading-snug font-medium tracking-tight text-balance sm:text-4xl sm:leading-tight">
                {intro.statement}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.25} className="lg:self-end">
            <p className="leading-relaxed text-stone-500">{intro.body}</p>
          </Reveal>
        </div>

        <RevealGroup
          as="ul"
          className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-stone-200 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4"
          itemClassName="bg-white p-6 sm:p-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm leading-relaxed text-stone-500">{s.label}</p>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
