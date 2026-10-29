import { reasons } from "@/content/why-us";
import { Picture } from "@/components/media/Picture";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

/** The three headline reasons to invest and work with NordRock, as alternating rows. */
export function Reasons() {
  return (
    <Section>
      <Container>
        <Reveal y={16}>
          <Eyebrow>Why invest and work with us</Eyebrow>
        </Reveal>
        <SplitReveal
          text="Three foundations that make NordRock a partner worth backing."
          className="font-display mt-5 max-w-4xl text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
        />

        <div className="mt-16 space-y-16 lg:mt-24 lg:space-y-24">
          {reasons.map((r, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={r.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <Reveal
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-ink",
                    flip && "lg:order-2",
                  )}
                >
                  <Parallax strength={14}>
                    <Picture
                      slug={r.image}
                      alt={r.alt}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                    />
                  </Parallax>
                </Reveal>
                <Reveal delay={0.15} className={cn(flip && "lg:order-1")}>
                  <span className="font-display text-5xl font-semibold text-royal sm:text-6xl">
                    0{i + 1}
                  </span>
                  <h2 className="font-display mt-4 text-2xl leading-tight font-semibold tracking-tight sm:text-4xl">
                    {r.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone-500">{r.text}</p>
                </Reveal>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
