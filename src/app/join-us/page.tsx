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
        title="Build traceable supply chains with us."
        intro="Whether you are looking for a career, a long-term supply partner, or a fair market for what you produce, there is a place for you in the NordRock network."
        media={{
          video: "aerial-pit-walls",
          label: "Aerial view over an artisanal mine site",
        }}
      />
      <JoinIndex />
      <JoinPaths />
    </PageTransition>
  );
}
