import { valueChain } from "@/content/what-we-do";
import { Picture } from "@/components/media/Picture";
import { PinnedScroll } from "@/components/motion/PinnedScroll";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/**
 * Pit-to-buyer sequence. Desktop pins the section and scrolls the steps sideways;
 * phones get a swipeable row (see PinnedScroll).
 */
export function ValueChain() {
  return (
    <Section tone="sky" className="py-0! sm:py-0! lg:py-0!">
      <PinnedScroll
        className="py-20 lg:py-0"
        intro={
          <Container wide className="pb-10 lg:pt-16">
            <Reveal y={16}>
              <Eyebrow>Metals and Mining | Seven stages</Eyebrow>
            </Reveal>
            <div className="mt-4 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <Heading className="max-w-2xl">One traceable value chain.</Heading>
              <p className="max-w-md text-sm leading-relaxed text-navy/70">
                Every stage is recorded, so producers are paid fairly and buyers know exactly where
                their minerals come from.
                <span className="hidden lg:inline"> Keep scrolling to follow the journey.</span>
              </p>
            </div>
          </Container>
        }
      >
        {valueChain.map((step, i) => (
          <article
            key={step.title}
            className="relative w-[80vw] shrink-0 snap-start overflow-hidden rounded-3xl bg-navy text-white sm:w-[26rem] lg:h-[56svh] lg:w-[28vw]"
          >
            <div className="relative aspect-[4/3] lg:absolute lg:inset-0 lg:aspect-auto">
              <Picture slug={step.image} alt="" fill sizes="(min-width: 1024px) 28vw, 80vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            </div>
            <div className="relative p-6 lg:absolute lg:inset-x-0 lg:bottom-0 lg:p-8">
              <p className="font-display text-sm font-semibold text-royal-300">
                {String(i + 1).padStart(2, "0")} / {String(valueChain.length).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-2 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{step.text}</p>
            </div>
          </article>
        ))}
      </PinnedScroll>
    </Section>
  );
}
