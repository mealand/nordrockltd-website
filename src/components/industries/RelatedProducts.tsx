import Link from "next/link";
import { products } from "@/content/site";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/** Product cards for the given product hrefs, in the order given. */
export function RelatedProducts({ hrefs, title }: { hrefs: string[]; title: string }) {
  const list = hrefs
    .map((h) => products.find((p) => p.href === h))
    .filter((p): p is (typeof products)[number] => Boolean(p));

  return (
    <Section tone="muted">
      <Container>
        <Reveal y={16}>
          <Eyebrow>Related products</Eyebrow>
          <h2 className="font-display mt-5 max-w-2xl text-3xl leading-[1.1] font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
        </Reveal>
        <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {list.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-navy/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azure"
            >
              <span
                className={
                  p.status === "live"
                    ? "self-start rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800"
                    : "self-start rounded-full bg-stone-200/70 px-3 py-1 text-xs font-semibold text-stone-500"
                }
              >
                {p.status === "live" ? "Live" : "In development"}
              </span>
              <h3 className="font-display mt-5 text-2xl font-semibold tracking-tight">
                NordRock {p.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">{p.description}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-azure-700">
                Learn more
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
