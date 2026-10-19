import { approach } from "@/content/what-we-do";
import { FeatureVideo } from "@/components/media/FeatureVideo";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/** Our approach, beside full-length footage from an artisanal site. */
export function Approach() {
  return (
    <Section>
      <Container className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-24">
        <div>
          <Reveal y={16}>
            <Eyebrow>{approach.eyebrow}</Eyebrow>
          </Reveal>
          <SplitReveal
            text={approach.title}
            className="font-display mt-5 max-w-2xl text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl leading-relaxed text-stone-500">{approach.body}</p>
            <ul className="mt-8 max-w-xl space-y-4">
              {approach.points.map((pt) => (
                <li key={pt} className="flex gap-4">
                  <span
                    aria-hidden
                    className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-sky text-azure-700"
                  >
                    <svg viewBox="0 0 12 12" className="size-3">
                      <path
                        d="M2.5 6.5 5 9l4.5-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </span>
                  <span className="leading-relaxed text-navy">{pt}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/who-we-are/" variant="secondary">
                Who we are
              </Button>
              <Button href="/contact/" variant="ghost">
                Talk to our team
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mx-auto w-full max-w-sm lg:w-[22rem]">
          <FeatureVideo
            slug="artisan-pit-mining"
            title="Inside an artisanal mining pit"
            className="aspect-[9/16] rounded-[2rem] shadow-2xl shadow-navy/20"
          />
        </Reveal>
      </Container>
    </Section>
  );
}
