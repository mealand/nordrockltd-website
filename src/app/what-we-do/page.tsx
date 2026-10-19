import type { Metadata } from "next";
import { PageTransition } from "@/components/motion/PageTransition";
import { InProgress } from "@/components/sections/InProgress";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = { title: "What We Do" };

export default function Page() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="What we do"
        title="From pit to market, done right."
        intro="Structured, technology-enabled solutions across the commodities value chain — from compliant sourcing to global market access."
        media={{ video: "excavator-operations", label: "Excavators working an open mineral pit" }}
      />
      <InProgress topic="What We Do" />
    </PageTransition>
  );
}
