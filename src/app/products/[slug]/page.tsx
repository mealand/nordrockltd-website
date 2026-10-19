import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTransition } from "@/components/motion/PageTransition";
import { InProgress } from "@/components/sections/InProgress";
import { PageHero } from "@/components/sections/PageHero";
import { products } from "@/content/site";

// Static export: only the listed products exist.
export const dynamicParams = false;

const slugOf = (href: string) => href.split("/").filter(Boolean).at(-1)!;

export function generateStaticParams() {
  return products.map((p) => ({ slug: slugOf(p.href) }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => slugOf(p.href) === slug);
  return {
    title: product ? `NordRock ${product.label}` : undefined,
    description: product?.description,
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = products.find((p) => slugOf(p.href) === slug);
  if (!product) notFound();

  return (
    <PageTransition>
      <PageHero
        eyebrow={product.status === "live" ? "Product · Live" : "Product · In development"}
        title={`NordRock ${product.label}`}
        intro={product.description}
        media={{ image: "tech-hub", label: "Illustration of a digital mining technology hub" }}
      />
      <InProgress topic={product.label} />
    </PageTransition>
  );
}
