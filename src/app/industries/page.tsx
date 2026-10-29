import type { Metadata } from "next";
import { Ecosystem } from "@/components/industries/Ecosystem";
import { IndustryRows } from "@/components/industries/IndustryRows";
import { PageTransition } from "@/components/motion/PageTransition";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "NordRock works in metals and mining, agriculture, renewable energy, and real estate and housing, with one way of working across all four.",
};

export default function Page() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Industries"
        title="Four industries, one way of working."
        intro="In each industry we run the operations, record them on our own platforms and help finance them. Mining is where we started."
        media={{ video: "aerial-exploration", label: "Aerial view over exploration ground" }}
      />
      <IndustryRows />
      <Ecosystem />
    </PageTransition>
  );
}
