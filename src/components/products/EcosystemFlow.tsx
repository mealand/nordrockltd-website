import Link from "next/link";
import { ecosystemFlow, getProductPage } from "@/content/products";
import { products } from "@/content/site";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/** The unified ecosystem: how each mining platform hands off to the next. */
export function EcosystemFlow() {
  const steps = ecosystemFlow.map((slug) => ({
    product: products.find((p) => p.href === `/products/${slug}/`)!,
    page: getProductPage(slug)!,
  }));

  return (
    <Section>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-20">
          <div>
            <Reveal y={16}>
              <Eyebrow>A unified ecosystem</Eyebrow>
            </Reveal>
            <SplitReveal
              text="Five platforms, one system view."
              className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
            />
          </div>
          <Reveal delay={0.2}>
            <p className="leading-relaxed text-stone-500">
              Each platform feeds the next — from finding minerals to proving they were produced
              responsibly — so every decision rests on verified data.
            </p>
          </Reveal>
        </div>

        <RevealGroup as="ol" className="mt-14 grid gap-4 md:grid-cols-5" stagger={0.1}>
          {steps.map(({ product, page }, i) => (
            <Link
              key={product.href}
              href={product.href}
              className="group relative flex h-full flex-col rounded-3xl bg-stone-50 p-6 ring-1 ring-navy/5 transition-colors duration-500 hover:bg-sky focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azure"
            >
              <span className="font-display text-sm font-semibold text-gold">0{i + 1}</span>
              <h3 className="font-display mt-4 text-xl font-semibold tracking-tight">
                {product.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">{page.role}</p>
              <span
                className={
                  product.status === "live"
                    ? "mt-auto self-start rounded-full bg-emerald-50 px-2.5 py-0.5 pt-0.5 text-[0.7rem] font-semibold text-emerald-800"
                    : "mt-auto self-start rounded-full bg-stone-200/70 px-2.5 py-0.5 text-[0.7rem] font-semibold text-stone-500"
                }
              >
                {product.status === "live" ? "Live" : "In development"}
              </span>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute top-1/2 -right-3 z-10 hidden size-6 -translate-y-1/2 place-items-center rounded-full bg-gold text-xs text-ink md:grid"
                >
                  →
                </span>
              )}
            </Link>
          ))}
        </RevealGroup>
        <Reveal className="mt-6 text-sm text-stone-500">
          Beyond minerals,{" "}
          <Link
            href="/products/agrotrace/"
            className="font-semibold text-azure-700 underline-offset-4 hover:underline"
          >
            AgroTrace
          </Link>{" "}
          applies the same traceability model to agricultural exports.
        </Reveal>
      </Container>
    </Section>
  );
}
