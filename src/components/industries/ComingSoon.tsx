import { Magnetic } from "@/components/motion/Magnetic";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/** Placeholder body for an industry that has been announced but not launched. */
export function ComingSoon({ label }: { label: string }) {
  return (
    <Section tone="sky" className="overflow-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 size-[30rem] animate-pulse rounded-full bg-royal/15 blur-3xl motion-reduce:animate-none"
      />
      <Container className="relative text-center">
        <Reveal y={16} className="flex justify-center">
          <Eyebrow>Coming soon</Eyebrow>
        </Reveal>
        <SplitReveal
          as="h2"
          text={`${label} is our next industry.`}
          className="font-display mx-auto mt-5 max-w-3xl text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
        />
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-stone-500">
            We will bring the same mix of technology, operations and finance to it. Details will
            be shared here when we are ready.
          </p>
          <div className="mt-10 flex justify-center">
            <Magnetic>
              <Button href="/contact/" variant="secondary">
                Talk to us
              </Button>
            </Magnetic>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
