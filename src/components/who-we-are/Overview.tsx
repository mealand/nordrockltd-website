import { overview } from "@/content/who-we-are";
import { Picture } from "@/components/media/Picture";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/** Company overview beside an offset photo pair, with the pull quote. */
export function Overview() {
  return (
    <Section className="overflow-clip">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal y={16}>
            <Eyebrow>{overview.eyebrow}</Eyebrow>
          </Reveal>
          <SplitReveal
            text={overview.title}
            className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
          />
          <Reveal delay={0.2} className="mt-6 space-y-4 leading-relaxed text-stone-500">
            {overview.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>

        <div className="relative">
          <div className="grid grid-cols-[3fr_2fr] items-start gap-4">
            <Reveal className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Parallax strength={16}>
                <Picture
                  slug="site-walk"
                  alt="NordRock team walking a mine site"
                  fill
                  sizes="(min-width: 1024px) 28vw, 60vw"
                />
              </Parallax>
            </Reveal>
            <Reveal
              delay={0.15}
              className="relative mt-16 aspect-[3/4] overflow-hidden rounded-3xl"
            >
              <Parallax strength={22}>
                <Picture
                  slug="site-inspection-pond"
                  alt="Engineers inspecting a mine site beside a settling pond"
                  fill
                  sizes="(min-width: 1024px) 18vw, 40vw"
                />
              </Parallax>
            </Reveal>
          </div>
          <Reveal
            delay={0.3}
            className="relative -mt-16 ml-auto max-w-sm rounded-3xl bg-navy p-7 text-white shadow-2xl shadow-navy/30 sm:-mt-20 sm:mr-6"
          >
            <span aria-hidden className="font-display block text-5xl leading-none text-gold">
              “
            </span>
            <p className="font-display mt-1 text-lg leading-snug font-medium">{overview.quote}</p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
