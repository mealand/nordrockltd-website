import Link from "next/link";
import type { ProductPage } from "@/content/products";
import { products, type Product } from "@/content/site";
import { Magnetic } from "@/components/motion/Magnetic";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

/** Who the product serves, the call to action, and links to the other products. */
export function ProductAudiences({ product, page }: { product: Product; page: ProductPage }) {
  const live = product.status === "live";
  const others = products.filter((p) => p.href !== product.href);

  return (
    <Section>
      <Container>
        <Reveal y={16}>
          <Eyebrow>Who it&apos;s for</Eyebrow>
        </Reveal>
        <RevealGroup className="mt-8 grid gap-5 md:grid-cols-3" stagger={0.1}>
          {page.audiences.map((a) => (
            <div key={a.title} className="h-full rounded-3xl bg-stone-50 p-7 ring-1 ring-navy/5">
              <h3 className="font-display text-xl font-semibold tracking-tight">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-500">{a.text}</p>
            </div>
          ))}
        </RevealGroup>

        <Reveal className="mt-16 flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-navy p-8 text-white sm:p-12 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-4xl">
              {live
                ? `See NordRock ${product.label} in action.`
                : `Interested in NordRock ${product.label}?`}
            </h2>
            <p className="mt-3 max-w-xl text-white/75">
              {live
                ? "Open the live platform, or talk to our team about onboarding and partnerships."
                : "Talk to our team about pilots, partnerships and early access."}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-4">
            {live && product.url && (
              <Magnetic>
                <Button href={product.url}>Open {product.label} ↗</Button>
              </Magnetic>
            )}
            <Button href="/contact/" variant={live ? "outline" : "primary"}>
              Contact us
            </Button>
          </div>
        </Reveal>

        <nav aria-label="Other products" className="mt-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-azure-700 uppercase">
            More from NordRock
          </p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {others.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-2 rounded-full bg-stone-50 px-5 py-2.5 text-sm font-semibold text-navy ring-1 ring-navy/10 transition-colors hover:bg-sky"
                >
                  {p.label}
                  <span
                    aria-hidden
                    className={cn(
                      "size-1.5 rounded-full",
                      p.status === "live" ? "bg-emerald-500" : "bg-stone-500/40",
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </Section>
  );
}
