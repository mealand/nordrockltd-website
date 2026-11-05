import type { Metadata } from "next";
import { AudienceCta } from "@/components/home/AudienceCta";
import { PageTransition } from "@/components/motion/PageTransition";
import { PageHero } from "@/components/sections/PageHero";
import { Commitments } from "@/components/why-us/Commitments";
import { Partnerships } from "@/components/why-us/Partnerships";
import { Reasons } from "@/components/why-us/Reasons";

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Strategic partnerships, our own technology and firm ESG standards: why investors, buyers and communities work with NordRock.",
};

export default function Page() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Why us"
        title="A partner built for legitimacy and long-term value."
        intro="Strategic partnerships, our own technology and firm ESG standards."
        media={{ image: "wash-plant-sluice", label: "Mineral wash plant at a NordRock-supported site" }}
      />
      <Reasons />
      <Partnerships />
      <Commitments />
      <AudienceCta exclude="/why-us/" />
    </PageTransition>
  );
}
