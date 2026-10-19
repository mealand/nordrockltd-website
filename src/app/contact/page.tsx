import type { Metadata } from "next";
import { PageTransition } from "@/components/motion/PageTransition";
import { InProgress } from "@/components/sections/InProgress";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = { title: "Get In Touch" };

export default function Page() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Get in touch"
        title="Let's talk."
        intro="Investor, partnership, media and general enquiries — we'd like to hear from you."
        media={{ image: "field-team-meeting", label: "NordRock field team meeting outdoors" }}
      />
      <InProgress topic="Contact" />
    </PageTransition>
  );
}
