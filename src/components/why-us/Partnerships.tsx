import { kmdc, partnerGroups } from "@/content/why-us";
import { Counter } from "@/components/motion/Counter";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/** Partner groups, then the KMDC partnership in focus. */
export function Partnerships() {
  return (
    <Section tone="navy" className="overflow-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 size-[40rem] rounded-full bg-azure/20 blur-3xl"
      />
      <Container className="relative">
        <Reveal y={16}>
          <Eyebrow>Strategic partnerships</Eyebrow>
        </Reveal>
        <SplitReveal
          text="Aligned with government, industry and international partners."
          className="font-display mt-5 max-w-4xl text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
        />

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3" stagger={0.1}>
          {partnerGroups.map((g) => (
            <div
              key={g.title}
              className="h-full rounded-3xl bg-white/[0.05] p-7 ring-1 ring-white/10"
            >
              <h3 className="text-xs font-semibold tracking-[0.22em] text-royal-300 uppercase">
                {g.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {g.partners.map((p) => (
                  <li key={p} className="font-display text-lg leading-snug font-medium">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </RevealGroup>

        <div className="mt-20 grid gap-12 rounded-[2rem] bg-white p-8 text-navy sm:p-12 lg:mt-28 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-azure-700 uppercase">
              {kmdc.eyebrow}
            </p>
            <h3 className="font-display mt-4 text-2xl leading-tight font-semibold tracking-tight sm:text-4xl">
              {kmdc.title}
            </h3>
            <p className="mt-5 leading-relaxed text-stone-500">{kmdc.body}</p>
            <ul className="mt-8 space-y-3">
              {kmdc.benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-royal" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <dl className="grid content-center gap-px overflow-hidden rounded-3xl bg-stone-200">
            {kmdc.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse bg-stone-50 p-7">
                <dt className="mt-2 text-sm text-stone-500">{s.label}</dt>
                <dd className="font-display text-5xl font-semibold tracking-tight text-navy">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
