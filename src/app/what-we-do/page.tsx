import type { Metadata } from "next";
import { PageTransition } from "@/components/motion/PageTransition";
import { ClosingBanner } from "@/components/sections/ClosingBanner";
import { PageHero } from "@/components/sections/PageHero";
import { Approach } from "@/components/what-we-do/Approach";
import { OurModel } from "@/components/what-we-do/OurModel";
import { ServicesGrid } from "@/components/what-we-do/ServicesGrid";
import { ValueChain } from "@/components/what-we-do/ValueChain";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Technology, operations and finance together: how NordRock organises producers, handles the physical work and keeps records buyers and funders can check.",
};

export default function Page() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="What we do"
        title="From source to market, done right."
        intro="In every industry we work in, we organise the people producing, handle the physical work and keep a record that buyers and funders can check."
        media={{ video: "mine-field-pan", label: "Panning view across an open mining field" }}
      />
      <OurModel />
      <ServicesGrid />
      <ValueChain />
      <Approach />
      <ClosingBanner
        title="Need a specific mineral or grade?"
        button="Send us your specification"
        href="/contact/?enquiry=minerals"
        media={{ image: "wash-plant-sluice", label: "Wash plant sluice at a mine site" }}
      />
    </PageTransition>
  );
}
