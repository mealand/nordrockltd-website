import type { Metadata } from "next";
import { Ecosystem } from "@/components/industries/Ecosystem";
import { IndustryRows } from "@/components/industries/IndustryRows";
import { PageTransition } from "@/components/motion/PageTransition";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "NordRock works across mineral operations, technology and renewable energy — three industries that strengthen each other.",
};

export default function Page() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Industries"
        title="Minerals, technology and energy for Africa's future."
        intro="Mineral operations at our core, with technology and renewable energy powering what comes next."
        media={{ video: "artisan-pit-mining", label: "Artisanal miners working a mineral pit" }}
      />
      <IndustryRows />
      <Ecosystem />
    </PageTransition>
  );
}
