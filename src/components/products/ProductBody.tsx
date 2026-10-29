import type { ProductPage } from "@/content/products";
import type { Product } from "@/content/site";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProductMock } from "./ProductMock";

/**
 * Problem statement (beside the example record for live products, or "how it works" for
 * products in development), any required notice, and the feature grid.
 */
export function ProductBody({ product, page }: { product: Product; page: ProductPage }) {
  const live = product.status === "live";
  return (
    <>
      <Section>
        <Container className="grid items-center gap-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20">
          <div>
            <Reveal y={16}>
              <Eyebrow>The problem</Eyebrow>
            </Reveal>
            <SplitReveal
              text={page.problem.title}
              className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
            />
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl leading-relaxed text-stone-500">{page.problem.body}</p>
            </Reveal>
          </div>
          {live ? (
            <div className="rounded-[2rem] bg-gradient-to-br from-navy to-ink p-6 sm:p-10">
              <ProductMock slug={page.slug} />
            </div>
          ) : (
            <Reveal delay={0.2} className="rounded-[2rem] bg-sky p-8 sm:p-10">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-azure-700">
                In development
              </span>
              <p className="mt-6 text-xs font-semibold tracking-[0.22em] text-azure-700 uppercase">
                How it works
              </p>
              <p className="font-display mt-3 text-xl leading-snug font-semibold tracking-tight sm:text-2xl">
                {page.howItWorks ?? page.role}
              </p>
              {page.cta.note && (
                <p className="mt-5 text-sm leading-relaxed text-navy/70">{page.cta.note}</p>
              )}
              <div className="mt-7">
                <Button href={page.cta.href} variant="secondary">
                  {page.cta.label}
                </Button>
              </div>
            </Reveal>
          )}
        </Container>
      </Section>

      {page.notice && (
        <div role="note" className="border-y border-royal/20 bg-sky">
          <Container className="flex items-start gap-4 py-6 text-sm leading-relaxed text-navy sm:items-center">
            <span
              aria-hidden
              className="grid size-7 shrink-0 place-items-center rounded-full bg-royal text-xs font-bold text-white"
            >
              !
            </span>
            <p>
              <strong className="font-semibold">Important: </strong>
              {page.notice}
            </p>
          </Container>
        </div>
      )}

      <Section tone="navy" className="overflow-clip">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-40 size-[36rem] rounded-full bg-azure/20 blur-3xl"
        />
        <Container className="relative">
          <Reveal y={16}>
            <Eyebrow>{live ? "What it does" : "Core functions"}</Eyebrow>
            <h2 className="font-display mt-5 max-w-3xl text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl">
              Inside NordRock {product.label}.
            </h2>
          </Reveal>
          <RevealGroup
            as="ol"
            className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
            itemClassName="bg-navy"
            stagger={0.07}
          >
            {page.features.map((f, i) => (
              <div key={f.title} className="h-full p-7 sm:p-8">
                <span className="font-display text-sm font-semibold text-royal-300">0{i + 1}</span>
                <h3 className="font-display mt-4 text-xl font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{f.text}</p>
              </div>
            ))}
          </RevealGroup>
        </Container>
      </Section>
    </>
  );
}
