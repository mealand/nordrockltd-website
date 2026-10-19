import { mission, values, vision } from "@/content/who-we-are";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/** Vision, mission and values — "We start with why". */
export function Purpose() {
  return (
    <Section tone="navy" className="overflow-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/3 size-[40rem] rounded-full bg-azure/15 blur-3xl"
      />
      <Container className="relative">
        <Reveal y={16}>
          <Eyebrow>We start with why</Eyebrow>
        </Reveal>

        <div className="mt-10 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">Vision</p>
            <SplitReveal
              as="p"
              text={vision}
              className="font-display mt-4 text-2xl leading-snug font-medium tracking-tight sm:text-4xl sm:leading-tight"
            />
          </div>
          <Reveal delay={0.15}>
            <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">Mission</p>
            <p className="mt-4 leading-relaxed text-white/80">{mission.intro}</p>
            <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {mission.points.map((pt, i) => (
                <li key={pt} className="flex gap-5 py-4">
                  <span className="font-display text-sm font-semibold text-sky-300">0{i + 1}</span>
                  <span className="text-white/90">{pt}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <h2 className="font-display mt-24 text-2xl font-semibold tracking-tight sm:text-3xl">
          Our values
        </h2>
        <RevealGroup
          as="ul"
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          itemClassName="h-full"
          stagger={0.08}
        >
          {values.map((v) => (
            <div
              key={v.title}
              className="group h-full rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10 transition-colors duration-500 hover:bg-white/[0.09]"
            >
              <span
                aria-hidden
                className="block h-1 w-8 rounded-full bg-gold transition-all duration-500 group-hover:w-14"
              />
              <h3 className="font-display mt-5 text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{v.text}</p>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
