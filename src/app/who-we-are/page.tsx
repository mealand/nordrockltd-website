import type { Metadata } from "next";
import { PageTransition } from "@/components/motion/PageTransition";
import { PageHero } from "@/components/sections/PageHero";
import { Challenges } from "@/components/who-we-are/Challenges";
import { Governance } from "@/components/who-we-are/Governance";
import { Leadership } from "@/components/who-we-are/Leadership";
import { Milestones } from "@/components/who-we-are/Milestones";
import { Overview } from "@/components/who-we-are/Overview";
import { Purpose } from "@/components/who-we-are/Purpose";
import { Strategy } from "@/components/who-we-are/Strategy";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "NordRock Limited is a Nigerian-owned company working across four industries: our story, vision, mission, values and leadership.",
};

export default function Page() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Who we are"
        title="A Nigerian minerals company with its own technology."
        intro="NordRock Limited is a Nigerian-owned company working across four industries. We started in gold and critical minerals, and we bring the same mix of technology, field operations and finance to each new industry."
        media={{
          video: "artisanal-field-panorama",
          label: "Artisanal miners at work across a wide mining field",
        }}
      />
      <Overview />
      <Purpose />
      <Leadership />
      <Challenges />
      <Strategy />
      <Milestones />
      <Governance />
    </PageTransition>
  );
}
