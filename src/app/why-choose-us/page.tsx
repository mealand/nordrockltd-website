import type { Metadata } from "next";
import { PageTransition } from "@/components/motion/PageTransition";
import { InProgress } from "@/components/sections/InProgress";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = { title: "Why Choose Us" };

export default function Page() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Why choose us"
        title="A partner built for legitimacy and long-term value."
        intro="Strategic partnerships, proven technology and uncompromising ESG standards."
        media={{ image: "wash-plant", label: "Mineral wash plant at a NordRock-supported site" }}
      />
      <InProgress topic="Why Choose Us" />
    </PageTransition>
  );
}
