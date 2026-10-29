import type { Metadata } from "next";
import { PageTransition } from "@/components/motion/PageTransition";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { policies, standards } from "@/content/compliance";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "NordRock's responsible sourcing policies, the international standards they are aligned with, and how to raise a concern confidentially.",
};

export default function Page() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Compliance"
        title="How we source responsibly, in writing."
        intro="Our policies set out what we do, what we will not do and how we check."
        media={{ image: "gold-nuggets", label: "A handful of responsibly sourced gold nuggets" }}
      />

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-20">
            <div>
              <Reveal y={16}>
                <Eyebrow>Our policies</Eyebrow>
              </Reveal>
              <SplitReveal
                text="Eight policies, approved by our Board."
                className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
              />
            </div>
            <Reveal delay={0.2}>
              <p className="leading-relaxed text-stone-500">
                Each policy applies to our staff, and the Supplier Code of Conduct applies to every
                supplier and counterparty. Copies are available on request.
              </p>
            </Reveal>
          </div>

          <RevealGroup
            as="ul"
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            itemClassName="h-full"
            stagger={0.06}
          >
            {policies.map((p, i) => (
              <article
                key={p.name}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-stone-50 p-6 ring-1 ring-navy/5 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-2xl hover:shadow-navy/10"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-royal transition-transform duration-500 group-hover:scale-x-100"
                />
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl bg-sky text-azure-700 transition-colors duration-500 group-hover:bg-royal group-hover:text-white">
                    <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="none">
                      <path
                        d="M7 3h7l5 5v13H7V3Z M14 3v5h5 M10 13h6 M10 17h6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-display text-sm font-semibold text-stone-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display mt-6 text-lg leading-snug font-semibold tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-500">{p.summary}</p>
                <p className="mt-auto pt-6 text-xs font-semibold tracking-wide text-azure-700">
                  {p.approved.startsWith("Awaiting") ? p.approved : `Approved ${p.approved}`}
                </p>
              </article>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section tone="navy" className="overflow-clip">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -bottom-40 size-[36rem] rounded-full bg-royal/25 blur-3xl"
        />
        <Container className="relative grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div>
            <Reveal y={16}>
              <Eyebrow>Standards we align with</Eyebrow>
            </Reveal>
            <SplitReveal
              text="Designed to meet international expectations."
              className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
            />
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md leading-relaxed text-white/75">
                Our policies and procedures are aligned with these frameworks. Alignment is not
                certification.
              </p>
            </Reveal>
          </div>
          <RevealGroup as="ul" className="space-y-3" stagger={0.1}>
            {standards.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10 transition-colors duration-500 hover:bg-white/[0.1] sm:p-7"
              >
                <span className="font-display text-lg font-semibold">{s.name}</span>
                <span
                  aria-hidden
                  className="text-royal-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </a>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section tone="sky">
        <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20">
          <div>
            <Reveal y={16}>
              <Eyebrow>Raise a concern</Eyebrow>
            </Reveal>
            <SplitReveal
              text="Anyone can report a concern about our supply chain, confidentially."
              className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
            />
          </div>
          <Reveal delay={0.2} className="rounded-3xl bg-white p-8 shadow-xl shadow-navy/5 ring-1 ring-navy/5">
            <p className="text-sm text-stone-500">Email our compliance team</p>
            <a
              href={`mailto:${contact.reportEmail}`}
              className="font-display mt-2 block text-2xl font-semibold tracking-tight break-all text-azure-700 underline-offset-4 hover:underline"
            >
              {contact.reportEmail}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-stone-500">
              Reports go to our Compliance Officer and are handled in confidence.
            </p>
          </Reveal>
        </Container>
      </Section>
    </PageTransition>
  );
}
