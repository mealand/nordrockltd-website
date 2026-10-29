import { governance } from "@/content/who-we-are";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/**
 * Board remit and corporate structure. Leadership profiles can be added here
 * once names, titles and approved photos are supplied.
 */
export function Governance() {
  const [board, management] = governance.structure;
  return (
    <Section>
      <Container className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal y={16}>
            <Eyebrow>{governance.eyebrow}</Eyebrow>
            <h2 className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl">
              {governance.title}
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-stone-500">{governance.body}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-10 text-xs font-semibold tracking-[0.22em] text-azure-700 uppercase">
              The board oversees
            </p>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {governance.oversees.map((o) => (
                <li key={o} className="flex gap-3 text-navy">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-royal" />
                  {o}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Corporate structure diagram */}
        <div
          role="group"
          aria-label="Corporate structure"
          className="flex flex-col items-center justify-center"
        >
          <Reveal className="w-full max-w-xs rounded-2xl bg-navy px-6 py-5 text-center text-white shadow-xl shadow-navy/20">
            <p className="text-xs tracking-[0.22em] text-sky-300 uppercase">Oversight</p>
            <p className="font-display mt-1 text-xl font-semibold">{board.title}</p>
          </Reveal>
          <span aria-hidden className="h-10 w-px bg-navy/20" />
          <Reveal
            delay={0.1}
            className="w-full max-w-xs rounded-2xl bg-sky px-6 py-5 text-center text-navy"
          >
            <p className="text-xs tracking-[0.22em] text-azure-700 uppercase">Execution</p>
            <p className="font-display mt-1 text-xl font-semibold">{management.title}</p>
          </Reveal>
          <span aria-hidden className="h-10 w-px bg-navy/20" />
          {/* Connector spans between the centres of the two columns below (25%–75%). */}
          <div className="w-full max-w-md">
            <span aria-hidden className="mx-auto block h-px w-1/2 bg-navy/20" />
            <RevealGroup
              as="ul"
              className="grid grid-cols-2 gap-4"
              itemClassName="flex flex-col items-center"
              stagger={0.1}
            >
              {management.children.map((c) => (
                <div key={c} className="flex w-full flex-col items-center">
                  <span aria-hidden className="h-6 w-px bg-navy/20" />
                  <p className="w-full rounded-2xl bg-white px-4 py-4 text-center text-sm font-semibold text-navy ring-1 ring-navy/10">
                    {c}
                  </p>
                </div>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Container>
    </Section>
  );
}
