import { AudienceCta } from "@/components/home/AudienceCta";
import { HomeIntro } from "@/components/home/HomeIntro";
import { HubSection } from "@/components/home/HubSection";
import { IndustriesTeaser } from "@/components/home/IndustriesTeaser";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { Pillars } from "@/components/home/Pillars";
import { ProductsTeaser } from "@/components/home/ProductsTeaser";
import { Magnetic } from "@/components/motion/Magnetic";
import { PageTransition } from "@/components/motion/PageTransition";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { company } from "@/content/site";

export default function Home() {
  return (
    <PageTransition>
      <PageHero
        size="home"
        eyebrow={company.name}
        title={company.tagline}
        intro="We work in metals and mining, agriculture, renewable energy, and real estate & housing. In each, we run the operations, record them on our own platforms and help finance them. Mining is where we started: every batch we sell is traced from the pit to the buyer."
        media={{
          video: "aerial-exploration",
          label: "Aerial view over NordRock exploration ground",
        }}
      >
        <Magnetic>
          <Button href="/industries/">Explore our industries</Button>
        </Magnetic>
        <Button href="/contact/" variant="outline" arrow={false}>
          Talk to us
        </Button>
      </PageHero>
      <HomeIntro />
      <IndustriesTeaser />
      <Pillars />
      <HubSection />
      <ProductsTeaser />
      <PartnersMarquee />
      <AudienceCta />
    </PageTransition>
  );
}
