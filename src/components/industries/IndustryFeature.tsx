import type { IndustryFeature as Feature } from "@/content/industries";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/** The one section that differs per industry: minerals, technology stack or energy pathways. */
export function IndustryFeature({ feature }: { feature: Feature }) {
  return (
    <Section tone="navy" className="overflow-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 size-[40rem] rounded-full bg-azure/20 blur-3xl"
      />
      <Container className="relative">
        {feature.type === "minerals" && <Minerals feature={feature} />}
        {feature.type === "stack" && <Stack feature={feature} />}
        {feature.type === "pathways" && <Pathways feature={feature} />}
      </Container>
    </Section>
  );
}

function Title({ title, body }: { title: string; body?: string }) {
  return (
    <>
      <Reveal y={16}>
        <Eyebrow>{title}</Eyebrow>
      </Reveal>
      {body && (
        <SplitReveal
          as="p"
          text={body}
          className="font-display mt-5 max-w-3xl text-2xl leading-snug font-medium tracking-tight sm:text-4xl sm:leading-tight"
        />
      )}
    </>
  );
}

function Minerals({ feature }: { feature: Extract<Feature, { type: "minerals" }> }) {
  return (
    <>
      <Title title={feature.title} />
      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-16">
        {feature.groups.map((g) => (
          <Reveal key={g.title}>
            <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {g.title}
            </h3>
            <p className="mt-3 max-w-xl leading-relaxed text-white/75">{g.text}</p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {g.minerals.map((m) => (
                <li
                  key={m}
                  className="font-display rounded-full bg-white/[0.06] px-5 py-2.5 text-base font-medium ring-1 ring-white/15 transition-colors duration-300 hover:bg-gold hover:text-ink"
                >
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </>
  );
}

function Stack({ feature }: { feature: Extract<Feature, { type: "stack" }> }) {
  return (
    <>
      <Title title={feature.title} body={feature.body} />
      <RevealGroup as="ol" className="mt-14 space-y-3" stagger={0.12}>
        {feature.layers.map((l, i) => (
          <div
            key={l.name}
            // Staircase offset (sm+ only) suggests layers building on each other.
            className="grid gap-2 rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10 sm:ms-[calc(var(--step)*1.5rem)] sm:grid-cols-[3rem_minmax(0,14rem)_minmax(0,1fr)] sm:items-center sm:gap-8 sm:p-7"
            style={{ "--step": i } as React.CSSProperties}
          >
            <span className="font-display text-sm font-semibold text-gold">0{i + 1}</span>
            <div>
              <h3 className="font-display text-xl font-semibold">{l.name}</h3>
              <p className="text-sm text-sky-300">{l.role}</p>
            </div>
            <p className="leading-relaxed text-white/75">{l.text}</p>
          </div>
        ))}
      </RevealGroup>
    </>
  );
}

function Pathways({ feature }: { feature: Extract<Feature, { type: "pathways" }> }) {
  return (
    <>
      <Title title={feature.title} body={feature.body} />
      <Reveal className="mt-14">
        <table className="w-full text-left">
          <thead className="hidden text-xs tracking-[0.22em] text-sky-300 uppercase md:table-header-group">
            <tr>
              <th scope="col" className="pb-4 font-semibold">
                Where
              </th>
              <th scope="col" className="pb-4 font-semibold">
                How
              </th>
              <th scope="col" className="pb-4 font-semibold">
                Impact
              </th>
            </tr>
          </thead>
          <tbody>
            {feature.rows.map((r) => (
              <tr
                key={r.area}
                className="grid gap-1 border-t border-white/15 py-5 md:table-row md:py-0"
              >
                <th scope="row" className="font-display text-lg font-semibold md:py-6 md:pr-8">
                  {r.area}
                </th>
                <td className="text-white/80 md:py-6 md:pr-8">{r.approach}</td>
                <td className="text-sky-300 md:py-6">{r.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </>
  );
}
