import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComingSoon } from "@/components/industries/ComingSoon";
import { IndustryAreas } from "@/components/industries/IndustryAreas";
import { IndustryFeature } from "@/components/industries/IndustryFeature";
import { NextIndustry } from "@/components/industries/NextIndustry";
import { RelatedProducts } from "@/components/industries/RelatedProducts";
import { PageTransition } from "@/components/motion/PageTransition";
import { ClosingBanner } from "@/components/sections/ClosingBanner";
import { PageHero } from "@/components/sections/PageHero";
import { getIndustry, industryPages, statusLabels } from "@/content/industries";

// Static export: only the listed industries exist.
export const dynamicParams = false;

export function generateStaticParams() {
  return industryPages.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const industry = getIndustry((await params).slug);
  return { title: industry?.label, description: industry?.overview.summary };
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const industry = getIndustry((await params).slug);
  if (!industry) notFound();
  const index = industryPages.indexOf(industry);
  const next = industryPages[(index + 1) % industryPages.length];

  return (
    <PageTransition>
      <PageHero
        eyebrow={`Industries | ${industry.label} | ${statusLabels[industry.status]}`}
        title={industry.hero.title}
        intro={industry.hero.intro}
        media={industry.hero.media}
      />
      {industry.status === "coming-soon" ? (
        <ComingSoon label={industry.label} />
      ) : (
        <>
          <IndustryAreas industry={industry} />
          {industry.feature && <IndustryFeature feature={industry.feature} />}
          {industry.products.length > 0 && (
            <RelatedProducts
              hrefs={industry.products}
              title={`The platforms behind ${industry.label.toLowerCase()}.`}
            />
          )}
          {industry.closing && <ClosingBanner {...industry.closing} />}
        </>
      )}
      <NextIndustry industry={next} />
    </PageTransition>
  );
}
