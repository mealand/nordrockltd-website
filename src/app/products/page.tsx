import type { Metadata } from "next";
import { PageTransition } from "@/components/motion/PageTransition";
import { LiveProducts } from "@/components/products/LiveProducts";
import { PlatformGroups } from "@/components/products/PlatformGroups";
import { ClosingBanner } from "@/components/sections/ClosingBanner";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Platforms",
  description:
    "TraceChain, ATiMS and the tools NordRock is building around them: the systems behind our four industries.",
};

export default function Page() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Platforms"
        title="The systems behind our four industries."
        intro="Remote sites and small producers need tools that work without signal, identify every person in the chain and produce records a buyer can check. We built our own, starting with what our mining business needed."
        media={{
          video: "processing-plant",
          label: "Processing plant machinery beside bagged concentrate",
        }}
      />
      <PlatformGroups />
      <LiveProducts />
      <ClosingBanner
        title="See TraceChain in action."
        button="Request a demo"
        href="/contact/?enquiry=demo"
        media={{ video: "artisanal-field-panorama", label: "Artisanal miners across a mining field" }}
      />
    </PageTransition>
  );
}
