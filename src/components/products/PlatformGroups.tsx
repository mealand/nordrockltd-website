import Link from "next/link";
import { getProductPage, platformGroups } from "@/content/products";
import { products, type Product } from "@/content/site";
import { Picture } from "@/components/media/Picture";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const slugOf = (p: Product) => p.href.split("/").filter(Boolean).at(-1)!;
const industryOf = (slug: string) => platformGroups.find((g) => g.products.includes(slug))?.industry;

/** One platform as a photo card with its status, industry and purpose. */
function PlatformCard({ product, large }: { product: Product; large?: boolean }) {
  const slug = slugOf(product);
  const page = getProductPage(slug)!;
  const live = product.status === "live";
  return (
    <Link
      href={product.href}
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-ink p-6 text-white transition-[translate,box-shadow] duration-500 ease-out-expo hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azure sm:p-8",
        large ? "aspect-[4/5] sm:aspect-[16/11]" : "aspect-[4/5] sm:aspect-[4/3] xl:aspect-[3/4]",
      )}
    >
      <Picture
        slug={page.card.image}
        alt={page.card.alt}
        fill
        sizes={large ? "(min-width: 1024px) 45vw, 100vw" : "(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"}
        imgClassName="transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/5" />
      <div className="relative">
        <p className="flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 ring-1 backdrop-blur-sm",
              live
                ? "bg-emerald-400/15 text-emerald-300 ring-emerald-300/30"
                : "bg-white/15 text-white ring-white/20",
            )}
          >
            {live && <span className="size-1.5 rounded-full bg-emerald-300" />}
            {live ? "Live" : "In development"}
          </span>
          <span className="text-white/80">{industryOf(slug)}</span>
        </p>
        <h3
          className={cn(
            "font-display mt-4 font-semibold tracking-tight",
            large ? "text-3xl sm:text-5xl" : "text-2xl sm:text-3xl",
          )}
        >
          {product.label}
        </h3>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/85">{product.description}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition-colors group-hover:text-white">
          Explore
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

/** Every platform as a photo card: the live two first, then the tools in development. */
export function PlatformGroups() {
  const live = products.filter((p) => p.status === "live");
  const pipeline = products.filter((p) => p.status !== "live");
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

        <RevealGroup className="mt-14 grid gap-5 lg:grid-cols-2" stagger={0.1}>
          {live.map((p) => (
            <PlatformCard key={p.href} product={p} large />
          ))}
        </RevealGroup>

        <Reveal className="mt-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-azure-700 uppercase">
            In development
          </p>
        </Reveal>
        <RevealGroup className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4" stagger={0.08}>
          {pipeline.map((p) => (
            <PlatformCard key={p.href} product={p} />
          ))}
        </RevealGroup>

        <Reveal className="mt-5">
          <Link
            href="/industries/real-estate-and-housing/"
            className="group relative flex min-h-48 flex-col justify-end overflow-hidden rounded-3xl bg-ink p-6 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azure sm:p-8"
          >
            <Picture
              slug="real-estate"
              alt="Aerial view of a planned housing estate"
              fill
              sizes="100vw"
              imgClassName="transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10" />
            <div className="relative">
              <p className="text-[0.7rem] font-semibold text-white/80">Coming soon</p>
              <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Real Estate and Housing
              </h3>
            </div>
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
