import Link from "next/link";
import type { HeroMedia } from "@/components/sections/PageHero";
import { PageTransition } from "@/components/motion/PageTransition";
import { PageHero } from "@/components/sections/PageHero";
import { AnchorLink } from "@/components/ui/AnchorLink";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export type LegalSection = { title: string; body: React.ReactNode };

/** Numbered legal document (privacy, terms, cookies) with a sticky table of contents. */
export function LegalPage({
  title,
  intro,
  media,
  updated,
  sections,
  footnote,
}: {
  title: string;
  intro: string;
  media: HeroMedia;
  updated: string;
  sections: LegalSection[];
  footnote: string;
}) {
  return (
    <PageTransition>
      <PageHero eyebrow="Legal" title={title} intro={intro} media={media} />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-20">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm text-stone-500">Last updated {updated}</p>
            <nav aria-label="On this page" className="mt-6 hidden lg:block">
              <ul className="space-y-2 text-sm">
                {sections.map((s, i) => (
                  <li key={s.title}>
                    <AnchorLink href={`#s${i + 1}`} className="text-navy/70 hover:text-azure-700">
                      {s.title}
                    </AnchorLink>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <div className="max-w-3xl space-y-12 leading-relaxed text-navy/80 [&_a]:font-semibold [&_a]:text-azure-700 [&_a]:underline-offset-4 hover:[&_a]:underline [&_li]:mt-2 [&_p+p]:mt-4 [&_strong]:text-navy [&_ul]:list-disc [&_ul]:pl-5">
            {sections.map((s, i) => (
              <section key={s.title} id={`s${i + 1}`} className="scroll-mt-28">
                <h2 className="font-display mb-4 text-2xl font-semibold tracking-tight text-navy">
                  {i + 1}. {s.title}
                </h2>
                {s.body}
              </section>
            ))}
            <p className="border-t border-stone-200 pt-8 text-sm">
              {footnote} <Link href="/contact/">Get in touch</Link>.
            </p>
          </div>
        </Container>
      </Section>
    </PageTransition>
  );
}
