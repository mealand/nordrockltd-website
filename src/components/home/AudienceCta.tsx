import Link from "next/link";
import { audiences } from "@/content/home";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

/**
 * "Work with NordRock": one route in for each audience.
 * `exclude` drops the card that links to the current page.
 */
export function AudienceCta({ exclude }: { exclude?: string } = {}) {
  const list = audiences.filter((a) => a.href !== exclude);
  return (
    <Section tone="muted">
      <Container>
        <Reveal y={16}>
          <Eyebrow>Work with NordRock</Eyebrow>
          <h2 className="font-display mt-5 max-w-3xl text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl">
            However you connect to Africa&apos;s minerals, there&apos;s a place for you here.
          </h2>
        </Reveal>
        <RevealGroup
          className={cn(
            "mt-14 grid gap-5",
            list.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2",
          )}
          stagger={0.1}
        >
          {list.map((a) => (
            <Link
              key={a.title}
              href={a.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-navy/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azure"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-royal transition-transform duration-500 group-hover:scale-x-100"
              />
              <h3 className="font-display text-2xl font-semibold tracking-tight">{a.title}</h3>
              <p className="mt-3 leading-relaxed text-stone-500">{a.text}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-azure-700">
                {a.cta}
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
