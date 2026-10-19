import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageTransition } from "@/components/motion/PageTransition";
import { InProgress } from "@/components/sections/InProgress";
import { PageHero } from "@/components/sections/PageHero";
import { industries } from "@/content/site";
import type { ImageSlug, VideoSlug } from "@/lib/media";

// Static export: only the listed industries exist.
export const dynamicParams = false;

const slugOf = (href: string) => href.split("/").filter(Boolean).at(-1)!;

const heroMedia: Record<
  string,
  { video: VideoSlug; label: string } | { image: ImageSlug; label: string }
> = {
  "mineral-operations": {
    video: "artisan-gemstone-finds",
    label: "Artisanal miner working a gemstone pit",
  },
  technology: { image: "tech-hub", label: "Illustration of a digital mining technology hub" },
  "renewable-energy": {
    image: "excavators-haul-road",
    label: "Open landscape at a NordRock mine site",
  },
};

export function generateStaticParams() {
  return industries.map((i) => ({ slug: slugOf(i.href) }));
}

export async function generateMetadata({
  params,
}: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => slugOf(i.href) === slug);
  return { title: industry?.label, description: industry?.description };
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const industry = industries.find((i) => slugOf(i.href) === slug);
  if (!industry) notFound();

  return (
    <PageTransition>
      <PageHero
        eyebrow="Industries"
        title={industry.label}
        intro={industry.description}
        media={heroMedia[slug]}
      />
      <InProgress topic={industry.label} />
    </PageTransition>
  );
}
