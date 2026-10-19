import Link from "next/link";
import { productDetails } from "@/content/home";
import { products } from "@/content/site";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/** Live products as feature cards, then the in-development pipeline. */
export function ProductsTeaser() {
  const live = products.filter((p) => p.status === "live");
  const pipeline = products.filter((p) => p.status === "in-development");

  return (
    <Section tone="ink" className="overflow-clip">
      {/* Faint ledger grid as a nod to the blockchain products. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] opacity-[0.07] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:56px_56px]"
      />
      <Container className="relative">
        <Reveal y={16}>
          <Eyebrow>Products</Eyebrow>
        </Reveal>
        <SplitReveal
          text="Not just a mining company — a mining technology ecosystem."
          className="font-display mt-5 max-w-4xl text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
        />
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl leading-relaxed text-white/75">
            Proprietary platforms built on blockchain and AI bring transparency to every
            transaction, from artisanal pits to international buyers — and beyond minerals.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-2" stagger={0.15}>
          {live.map((p) => {
            const d = productDetails[p.href];
            return (
              <article
                key={p.href}
                className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-700/60 p-8 ring-1 ring-white/10 sm:p-10"
              >
                <div
                  aria-hidden
                  className="absolute -top-24 -right-24 size-72 rounded-full bg-azure/25 blur-3xl"
                />
                <div className="relative flex items-center justify-between gap-4">
                  <h3 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                    {p.label}
                  </h3>
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-300/30">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60 motion-reduce:hidden" />
                      <span className="relative inline-flex size-2 rounded-full bg-emerald-300" />
                    </span>
                    Live
                  </span>
                </div>
                <p className="relative mt-5 leading-relaxed text-white/80">{d.tagline}</p>
                <ul className="relative mt-6 space-y-3 text-sm text-white/85">
                  {d.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="relative mt-auto flex flex-wrap gap-3 pt-10">
                  <Button href={p.href}>Learn more</Button>
                  {p.url && (
                    <Button href={p.url} variant="outline" arrow={false}>
                      Open {p.label} ↗
                    </Button>
                  )}
                </div>
              </article>
            );
          })}
        </RevealGroup>

        <Reveal className="mt-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-sky-300 uppercase">
            In development
          </p>
        </Reveal>
        <RevealGroup
          as="ul"
          className="mt-6 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
          itemClassName="bg-ink"
          stagger={0.08}
        >
          {pipeline.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group block h-full p-6 transition-colors hover:bg-white/[0.04] sm:p-8"
            >
              <h3 className="font-display text-xl font-semibold">
                NordRock <span className="text-sky-300">{p.label}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{p.description}</p>
              <span
                aria-hidden
                className="mt-5 inline-block text-gold transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
