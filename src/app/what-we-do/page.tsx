import type { Metadata } from "next";
import { PageTransition } from "@/components/motion/PageTransition";
import { PageHero } from "@/components/sections/PageHero";
import { Approach } from "@/components/what-we-do/Approach";
import { Deliverables } from "@/components/what-we-do/Deliverables";
import { ServicesGrid } from "@/components/what-we-do/ServicesGrid";
import { ValueChain } from "@/components/what-we-do/ValueChain";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Supply and sourcing, logistics, processing, artisanal capacity building and consulting — NordRock's structured, traceable approach to the commodities value chain.",
};

export default function Page() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="What we do"
        title="From pit to market, done right."
        intro="Structured, technology-enabled solutions across the commodities value chain — from compliant sourcing to global market access."
        media={{ video: "excavator-operations", label: "Excavators working an open mineral pit" }}
      />
      <ServicesGrid />
      <ValueChain />
      <Deliverables />
      <Approach />
    </PageTransition>
  );
}
