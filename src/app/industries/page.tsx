import type { Metadata } from "next";
import { PageTransition } from "@/components/motion/PageTransition";
import { InProgress } from "@/components/sections/InProgress";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = { title: "Industries" };

export default function Page() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Industries"
        title="Minerals, technology and energy for Africa's future."
        intro="Mineral operations at our core, with technology and renewable energy powering what comes next."
        media={{ video: "artisan-pit-mining", label: "Artisanal miners working a mineral pit" }}
      />
      <InProgress topic="Industries" />
    </PageTransition>
  );
}
