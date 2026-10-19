import { getProductPage } from "@/content/products";
import { products } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { ProductMock } from "./ProductMock";

/** Products overview: one feature row per live product, with its example record. */
export function LiveProducts() {
  const live = products.filter((p) => p.status === "live");
  return (
    <Section tone="ink" className="overflow-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] opacity-[0.07] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:56px_56px]"
      />
      <Container className="relative space-y-24 lg:space-y-32">
        {live.map((p, i) => {
          const page = getProductPage(p.href.split("/").filter(Boolean).at(-1)!)!;
          const flip = i % 2 === 1;
          return (
            <article key={p.href} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className={cn(flip && "lg:order-2")}>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-300/30">
                  <span className="size-2 rounded-full bg-emerald-300" />
                  Live
                </span>
                <Reveal>
                  <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                    {p.label}
                  </h2>
                  <p className="font-display mt-4 text-xl leading-snug text-sky-300 sm:text-2xl">
                    {page.hero.title}
                  </p>
                  <p className="mt-5 max-w-xl leading-relaxed text-white/75">{page.hero.intro}</p>
                  <ul className="mt-7 grid gap-3 text-sm text-white/85 sm:grid-cols-2">
                    {page.features.slice(0, 4).map((f) => (
                      <li key={f.title} className="flex gap-3">
                        <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                        {f.title}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <Button href={p.href}>Explore {p.label}</Button>
                    {p.url && (
                      <Button href={p.url} variant="outline" arrow={false}>
                        Open app ↗
                      </Button>
                    )}
                  </div>
                </Reveal>
              </div>
              <Reveal delay={0.15} className={cn("mx-auto w-full max-w-md", flip && "lg:order-1")}>
                <ProductMock slug={page.slug} />
              </Reveal>
            </article>
          );
        })}
      </Container>
    </Section>
  );
}
