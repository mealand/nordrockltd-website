import type { Metadata } from "next";
import { PageTransition } from "@/components/motion/PageTransition";
import { EcosystemFlow } from "@/components/products/EcosystemFlow";
import { LiveProducts } from "@/components/products/LiveProducts";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Products",
  description:
    "TraceChain, AgroTrace and NordRock's pipeline of blockchain and AI platforms for traceable minerals, agriculture and energy.",
};

export default function Page() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Products"
        title="Technology that makes every mineral traceable."
        intro="NordRock is not just a mining company but a mining technology ecosystem — proprietary platforms built on blockchain, AI and IoT."
        media={{
          image: "tech-hub",
          label: "Illustration of a digitally monitored mineral processing hub",
        }}
      />
      <LiveProducts />
      <EcosystemFlow />
    </PageTransition>
  );
}
