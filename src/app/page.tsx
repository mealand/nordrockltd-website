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
        eyebrow="NordRock Limited"
        title="Creating a legitimate mining ecosystem in Africa."
        intro={company.tagline}
        media={{
          video: "site-team-walk",
          label: "NordRock team walking a mine site in safety gear",
        }}
      >
        <Magnetic>
          <Button href="/what-we-do/">What we do</Button>
        </Magnetic>
        <Button href="/contact/" variant="outline" arrow={false}>
          Get in touch
        </Button>
      </PageHero>
      <HomeIntro />
      <Pillars />
      <IndustriesTeaser />
      <HubSection />
      <ProductsTeaser />
      <PartnersMarquee />
      <AudienceCta />
    </PageTransition>
  );
}
