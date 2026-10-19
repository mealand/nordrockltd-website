import type { Metadata } from "next";
import { PageTransition } from "@/components/motion/PageTransition";
import { InProgress } from "@/components/sections/InProgress";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = { title: "Join Us" };

export default function Page() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Join us"
        title="Build Africa's mineral future with us."
        intro="Careers, partnerships and artisan cooperative onboarding."
        media={{
          image: "artisan-briefing-1",
          label: "Artisanal miners at a NordRock engagement session",
        }}
      />
      <InProgress topic="Join Us" />
    </PageTransition>
  );
}
