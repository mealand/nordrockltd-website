import type { Metadata } from "next";
import { PageTransition } from "@/components/motion/PageTransition";
import { InProgress } from "@/components/sections/InProgress";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = { title: "Who We Are" };

export default function Page() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Who we are"
        title="Methodically unlocking the future of Africa's minerals sector."
        intro="A Nigerian indigenous minerals operations and trading company unlocking Nigeria's vast mineral endowment."
        media={{ image: "site-inspection-team", label: "NordRock team inspecting a mine site" }}
      />
      <InProgress topic="Who We Are" />
    </PageTransition>
  );
}
