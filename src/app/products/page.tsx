import type { Metadata } from "next";
import { PageTransition } from "@/components/motion/PageTransition";
import { InProgress } from "@/components/sections/InProgress";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = { title: "Products" };

export default function Page() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Products"
        title="Technology that makes every mineral traceable."
        intro="Proprietary traceability and trade technology built on blockchain and AI."
        media={{ image: "tech-hub", label: "Illustration of a digital mining technology hub" }}
      />
      <InProgress topic="Products" />
    </PageTransition>
  );
}
