import { mission, principles, values, vision } from "@/content/who-we-are";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/** Vision, mission and values: the four commitments, then the principles behind them. */
export function Purpose() {
  return (
    <Section tone="navy" className="overflow-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/3 size-[40rem] rounded-full bg-royal/20 blur-3xl"
      />
      <Container className="relative">
        <Reveal y={16}>
          <Eyebrow>Vision, mission and values</Eyebrow>
        </Reveal>

        <div className="mt-10 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-royal-300 uppercase">Vision</p>
            <SplitReveal
              as="p"
              text={vision}
              className="font-display mt-4 text-2xl leading-snug font-medium tracking-tight sm:text-4xl sm:leading-tight"
            />
          </div>
          <Reveal delay={0.15}>
            <p className="text-xs font-semibold tracking-[0.22em] text-royal-300 uppercase">Mission</p>
            <p className="font-display mt-4 text-xl leading-snug font-medium">
              {mission.statement}
            </p>
            <p className="mt-6 text-sm text-white/70">{mission.intro}</p>
            <ul className="mt-3 divide-y divide-white/10 border-y border-white/10">
              {mission.points.map((pt, i) => (
                <li key={pt} className="flex gap-5 py-3.5">
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
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          itemClassName="h-full"
          stagger={0.08}
        >
          {values.map((v, i) => (
            <div
              key={v.title}
              className="group relative h-full overflow-hidden rounded-3xl bg-white/[0.05] p-7 ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-1 hover:bg-royal"
            >
              <span
                aria-hidden
                className="font-display absolute -right-2 -bottom-6 text-8xl font-bold text-white/[0.06] transition-colors duration-500 group-hover:text-white/15"
              >
                {i + 1}
              </span>
              <span
                aria-hidden
                className="block h-1 w-8 rounded-full bg-royal transition-all duration-500 group-hover:w-14 group-hover:bg-white"
              />
              <h3 className="font-display mt-5 text-xl font-semibold">{v.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-white/75 group-hover:text-white">
                {v.text}
              </p>
            </div>
          ))}
        </RevealGroup>

        <Reveal className="mt-10 flex flex-wrap items-center gap-3">
          <span className="mr-2 text-xs font-semibold tracking-[0.22em] text-sky-300 uppercase">
            Guided by
          </span>
          {principles.map((p) => (
            <span
              key={p}
              className="rounded-full bg-white/[0.06] px-4 py-2 text-sm text-white/85 ring-1 ring-white/10"
            >
              {p}
            </span>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
