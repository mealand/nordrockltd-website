import { Magnetic } from "@/components/motion/Magnetic";
import { PageTransition } from "@/components/motion/PageTransition";
import { InProgress } from "@/components/sections/InProgress";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { company } from "@/content/site";

// Hero only for now; the remaining home sections arrive in phase 5.
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
      <InProgress topic="home" />
    </PageTransition>
  );
}
