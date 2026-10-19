import type { Metadata } from "next";
import { JoinIndex, JoinPaths } from "@/components/join-us/JoinPaths";
import { PageTransition } from "@/components/motion/PageTransition";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Careers at NordRock, partner and supplier onboarding, and support for artisanal miners and cooperatives.",
};

export default function Page() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Join us"
        title="Build Africa's mineral future with us."
        intro="Whether you're looking for a career, a long-term supply partner, or a fair market for your minerals — there's a place for you in the NordRock network."
        media={{
          image: "artisan-briefing-1",
          label: "Artisanal miners at a NordRock engagement session",
        }}
      />
      <JoinIndex />
      <JoinPaths />
    </PageTransition>
  );
}
