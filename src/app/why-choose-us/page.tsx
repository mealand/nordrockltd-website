import type { Metadata } from "next";
import { AudienceCta } from "@/components/home/AudienceCta";
import { PageTransition } from "@/components/motion/PageTransition";
import { PageHero } from "@/components/sections/PageHero";
import { Commitments } from "@/components/why-choose-us/Commitments";
import { Partnerships } from "@/components/why-choose-us/Partnerships";
import { Reasons } from "@/components/why-choose-us/Reasons";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Strategic partnerships, proven technology and uncompromising ESG standards — why investors, buyers and communities work with NordRock.",
};

export default function Page() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Why choose us"
        title="A partner built for legitimacy and long-term value."
        intro="Strategic partnerships, proven technology and uncompromising ESG standards."
        media={{ image: "wash-plant", label: "Mineral wash plant at a NordRock-supported site" }}
      />
      <Reasons />
      <Partnerships />
      <Commitments />
      <AudienceCta exclude="/why-choose-us/" />
    </PageTransition>
  );
}
