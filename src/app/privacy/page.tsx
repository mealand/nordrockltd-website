import type { Metadata } from "next";
import { PageTransition } from "@/components/motion/PageTransition";
import { InProgress } from "@/components/sections/InProgress";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = { title: "Privacy" };

export default function Page() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy."
        intro="How NordRock Limited handles information submitted through this website."
        media={{ image: "excavators-haul-road", label: "Excavators on a mine haul road" }}
      />
      <InProgress topic="Privacy Policy" />
    </PageTransition>
  );
}
