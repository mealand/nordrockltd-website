import type { Metadata } from "next";
import { Picture } from "@/components/media/Picture";
import { VideoLoop } from "@/components/media/VideoLoop";
import { Counter } from "@/components/motion/Counter";
import { Magnetic } from "@/components/motion/Magnetic";
import { Marquee } from "@/components/motion/Marquee";
import { PageTransition } from "@/components/motion/PageTransition";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { ValueChain } from "@/components/what-we-do/ValueChain";

// Internal reference page for the design system. Not linked from the menu.
export const metadata: Metadata = { title: "Styleguide", robots: { index: false, follow: false } };

const colors = [
  ["navy", "#1B2A5C", "bg-navy text-white"],
  ["ink", "#0C1D44", "bg-ink text-white"],
  ["sky", "#E8F2FC", "bg-sky text-navy"],
  ["sky-300", "#A9CDF6", "bg-sky-300 text-navy"],
  ["azure-700", "#1A5FC4", "bg-azure-700 text-white"],
  ["royal", "#1E6FE0", "bg-royal text-white"],
  ["stone-50", "#F5F8FC", "bg-stone-50 text-navy"],
  ["stone-500", "#5B6679", "bg-stone-500 text-white"],
];

export default function Styleguide() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Design system"
        title="NordRock styleguide"
        intro="Tokens, components and motion primitives used across the site."
        media={{ video: "site-survey-river", label: "Site survey along a river" }}
      />

      <Section>
        <Container>
          <Eyebrow>Colour</Eyebrow>
          <RevealGroup className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4" stagger={0.05}>
            {colors.map(([name, hex, cls]) => (
              <div key={name} className={`rounded-2xl p-5 ring-1 ring-navy/10 ${cls}`}>
                <p className="font-semibold">{name}</p>
                <p className="mt-6 font-mono text-xs opacity-80">{hex}</p>
              </div>
            ))}
          </RevealGroup>

          <Eyebrow className="mt-20">Typography</Eyebrow>
          <div className="mt-8 space-y-6">
            <Heading as="h2" size="xl">
              Display XL: Mulish
            </Heading>
            <Heading as="h3" size="lg">
              Display large heading
            </Heading>
            <Heading as="h4" size="md">
              Display medium heading
            </Heading>
            <p className="max-w-2xl text-lg leading-relaxed text-stone-500">
              Body copy is set in Roboto. NordRock is building Africa&apos;s first integrated mining
              ecosystem, connecting artisanal miners, logistics operators, processing facilities,
              government agencies and communities into one coordinated system.
            </p>
          </div>

          <Eyebrow className="mt-20">Buttons</Eyebrow>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Button href="/contact/">Primary</Button>
            </Magnetic>
            <Button href="/contact/" variant="secondary">
              Secondary
            </Button>
            <Button href="/contact/" variant="outline">
              Outline
            </Button>
            <Button href="/contact/" variant="ghost">
              Ghost link
            </Button>
          </div>
        </Container>
      </Section>

      <Section tone="navy">
        <Container>
          <Eyebrow>Counters &amp; split reveal</Eyebrow>
          <SplitReveal
            text="Every mineral traced from pit to buyer."
            className="font-display mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl"
          />
          <dl className="mt-14 grid gap-10 sm:grid-cols-3">
            {[
              { v: 10, s: "+", l: "Minerals supplied" },
              { v: 61, s: "", l: "Mineral titles via partnership" },
              { v: 10000, s: "+", l: "Artisans to onboard" },
            ].map((x) => (
              <div key={x.l} className="border-t border-white/15 pt-6">
                <dt className="text-sm text-white/70">{x.l}</dt>
                <dd className="font-display mt-2 text-5xl font-semibold text-royal-300">
                  <Counter value={x.v} suffix={x.s} />
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <section className="relative h-[70svh] overflow-hidden">
        <Parallax strength={20}>
          <Picture slug="wash-plant-sluice" alt="Artisans working a sluice at a wash plant" fill />
        </Parallax>
        <div className="absolute inset-0 bg-ink/40" />
        <Container className="relative flex h-full items-center">
          <Reveal>
            <Heading size="xl" className="max-w-3xl text-white">
              Parallax image band
            </Heading>
          </Reveal>
        </Container>
      </section>

      <ValueChain />

      <Section tone="muted">
        <Container>
          <Eyebrow>Video loop &amp; marquee</Eyebrow>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {(
              ["artisan-registration", "excavator-operations", "site-inspection-tour"] as const
            ).map((v) => (
              <div key={v} className="relative aspect-[9/14] overflow-hidden rounded-3xl bg-ink">
                <VideoLoop slug={v} label={v.replaceAll("-", " ")} />
              </div>
            ))}
          </div>
        </Container>
        <Marquee className="mt-16" duration={30}>
          {[
            "Traceability",
            "ESG compliance",
            "Artisan empowerment",
            "Critical minerals",
            "Blockchain",
            "Renewable energy",
          ].map((w) => (
            <span
              key={w}
              className="font-display mx-8 text-3xl font-semibold whitespace-nowrap text-navy/80 sm:text-5xl"
            >
              {w} <span className="text-royal-300">✦</span>
            </span>
          ))}
        </Marquee>
      </Section>
    </PageTransition>
  );
}
