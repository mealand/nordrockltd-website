import Link from "next/link";
import { getProductPage, platformGroups } from "@/content/products";
import { products } from "@/content/site";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const bySlug = (slug: string) => products.find((p) => p.href === `/products/${slug}/`)!;

/** Unified system view: every platform grouped by the industry it serves, with its status. */
export function PlatformGroups() {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-20">
          <div>
            <Reveal y={16}>
              <Eyebrow>Unified system view</Eyebrow>
            </Reveal>
            <SplitReveal
              text="Two traceability platforms, and the tools we are building around them."
              className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
            />
          </div>
          <Reveal delay={0.2}>
            <p className="leading-relaxed text-stone-500">
              TraceChain handles identity, site mapping, bag-and-tag and chain of custody for
              minerals. ATiMS does the same for farm produce. The other tools use that data for
              specific jobs: scoring trading partners, finding new deposits, financing projects and
              metering power.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4" stagger={0.1}>
          {platformGroups.map((g) => (
            <div
              key={g.industry}
              className="flex h-full flex-col rounded-3xl bg-stone-50 p-6 ring-1 ring-navy/5"
            >
              <Link
                href={g.href}
                className="font-display text-xs font-semibold tracking-[0.22em] text-azure-700 uppercase hover:underline"
              >
                {g.industry}
              </Link>
              {g.products.length === 0 ? (
                <p className="mt-6 rounded-2xl border border-dashed border-navy/15 p-5 text-sm text-stone-500">
                  Coming soon
                </p>
              ) : (
                <ul className="mt-5 space-y-3">
                  {g.products.map((slug) => {
                    const p = bySlug(slug);
                    const live = p.status === "live";
                    return (
                      <li key={slug}>
                        <Link
                          href={p.href}
                          className="group block rounded-2xl bg-white p-5 ring-1 ring-navy/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azure"
                        >
                          <span className="flex items-center justify-between gap-3">
                            <span className="font-display text-lg font-semibold tracking-tight">
                              {p.label}
                            </span>
                            <span
                              className={cn(
                                "inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[0.7rem] font-semibold",
                                live
                                  ? "bg-emerald-50 text-emerald-800"
                                  : "bg-stone-200/70 text-stone-500",
                              )}
                            >
                              {live && (
                                <span className="relative flex size-1.5">
                                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 motion-reduce:hidden" />
                                  <span className="relative size-1.5 rounded-full bg-emerald-500" />
                                </span>
                              )}
                              {live ? "Live" : "In development"}
                            </span>
                          </span>
                          <span className="mt-2 block text-sm leading-relaxed text-stone-500">
                            {getProductPage(slug)?.role}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
