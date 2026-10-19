import { advantages, commitments } from "@/content/why-choose-us";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

const Check = () => (
  <svg aria-hidden viewBox="0 0 12 12" className="mt-1.5 size-3 shrink-0 text-azure-700">
    <path d="M2.5 6.5 5 9l4.5-6" fill="none" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

/** ESG commitments and targets, followed by our competitive advantages. */
export function Commitments() {
  return (
    <>
      <Section tone="sky">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-20">
            <div>
              <Reveal y={16}>
                <Eyebrow>{commitments.eyebrow}</Eyebrow>
              </Reveal>
              <SplitReveal
                text={commitments.title}
                className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
              />
            </div>
            <Reveal delay={0.2}>
              <p className="leading-relaxed text-navy/75">{commitments.body}</p>
            </Reveal>
          </div>

          <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {commitments.groups.map((g, i) => (
              <div key={g.title} className="h-full rounded-3xl bg-white p-7 ring-1 ring-navy/5">
                <span className="font-display text-sm font-semibold text-gold">0{i + 1}</span>
                <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight">
                  {g.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-navy/80">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <Check />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </RevealGroup>

          <div className="mt-6 grid gap-4 md:grid-cols-[1fr_1fr_1.4fr]">
            {commitments.targets.map((t) => (
              <Reveal key={t.label} className="rounded-3xl bg-navy p-7 text-white">
                <p className="font-display text-4xl font-semibold text-gold">{t.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{t.label}</p>
              </Reveal>
            ))}
            <Reveal className="flex items-center rounded-3xl bg-white/60 p-7 text-sm leading-relaxed text-navy/80 ring-1 ring-navy/10">
              {commitments.memberships}
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal y={16}>
              <Eyebrow>Our edge</Eyebrow>
              <h2 className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl">
                What sets NordRock apart.
              </h2>
            </Reveal>
          </div>
          <RevealGroup as="ol" stagger={0.08}>
            {advantages.map((a, i) => (
              <div key={a.title} className="flex gap-6 border-t border-stone-200 py-7">
                <span className="font-display w-10 shrink-0 text-sm font-semibold text-gold">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                    {a.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-stone-500">{a.text}</p>
                </div>
              </div>
            ))}
          </RevealGroup>
        </Container>
      </Section>
    </>
  );
}
