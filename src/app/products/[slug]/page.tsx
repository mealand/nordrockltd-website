import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTransition } from "@/components/motion/PageTransition";
import { ProductAudiences } from "@/components/products/ProductAudiences";
import { ProductBody } from "@/components/products/ProductBody";
import { ProductJourney } from "@/components/products/ProductJourney";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { getProductPage, productPages } from "@/content/products";
import { products } from "@/content/site";

// Static export: only the listed products exist.
export const dynamicParams = false;

export function generateStaticParams() {
  return productPages.map((p) => ({ slug: p.slug }));
}

function resolve(slug: string) {
  const page = getProductPage(slug);
  const product = products.find((p) => p.href === `/products/${slug}/`);
  return page && product ? { page, product } : null;
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const found = resolve((await params).slug);
  return found
    ? { title: `NordRock ${found.product.label}`, description: found.page.hero.intro }
    : {};
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const found = resolve((await params).slug);
  if (!found) notFound();
  const { page, product } = found;
  const live = product.status === "live";

  return (
    <PageTransition>
      <PageHero
        eyebrow={`NordRock ${product.label} · ${live ? "Live" : "In development"}`}
        title={page.hero.title}
        intro={page.hero.intro}
        media={page.hero.media}
      >
        {live && product.url ? (
          <Button href={product.url}>Open {product.label} ↗</Button>
        ) : (
          <Button href="/contact/">Talk to our team</Button>
        )}
      </PageHero>
      <ProductBody product={product} page={page} />
      {page.journey && <ProductJourney title={page.journey.title} stages={page.journey.stages} />}
      <ProductAudiences product={product} page={page} />
    </PageTransition>
  );
}
