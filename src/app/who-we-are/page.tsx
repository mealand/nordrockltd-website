import type { Metadata } from "next";
import { PageTransition } from "@/components/motion/PageTransition";
import { PageHero } from "@/components/sections/PageHero";
import { Challenges } from "@/components/who-we-are/Challenges";
import { Governance } from "@/components/who-we-are/Governance";
import { Milestones } from "@/components/who-we-are/Milestones";
import { Overview } from "@/components/who-we-are/Overview";
import { Purpose } from "@/components/who-we-are/Purpose";
import { Strategy } from "@/components/who-we-are/Strategy";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "NordRock Limited is a Nigerian indigenous minerals operations and trading company — our vision, mission, values, strategy and journey so far.",
};

export default function Page() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Who we are"
        title="Methodically unlocking the future of Africa's minerals sector."
        intro="A Nigerian indigenous minerals operations and trading company unlocking Nigeria's vast mineral endowment."
        media={{ image: "site-inspection-team", label: "NordRock team inspecting a mine site" }}
      />
      <Overview />
      <Purpose />
      <Challenges />
      <Strategy />
      <Milestones />
      <Governance />
    </PageTransition>
  );
}
