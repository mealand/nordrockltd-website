import { hub } from "@/content/home";
import { Picture } from "@/components/media/Picture";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/** The concentration hub: copy and key facts beside a parallax photo collage. */
export function HubSection() {
  return (
    <Section tone="sky" className="overflow-clip">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal y={16}>
            <Eyebrow>{hub.eyebrow}</Eyebrow>
          </Reveal>
          <SplitReveal
            text={hub.title}
            className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 leading-relaxed text-navy/80">{hub.body}</p>
          </Reveal>
          <RevealGroup as="ul" className="mt-10 grid grid-cols-2 gap-4" stagger={0.08}>
            {hub.facts.map((f) => (
              <div key={f.title} className="h-full rounded-2xl bg-white/70 p-5 ring-1 ring-navy/5">
                <p className="font-display text-xl font-semibold text-navy sm:text-2xl">
                  {f.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-stone-500">{f.text}</p>
              </div>
            ))}
          </RevealGroup>
        </div>

        {/* Collage: one landscape frame over two portrait frames. */}
        <div className="grid grid-cols-2 gap-4">
          <Reveal className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-3xl">
            <Parallax strength={18}>
              <Picture
                slug="wash-plant"
                alt="Mineral wash plant processing ore on site"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </Parallax>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Parallax strength={22}>
              <Picture
                slug="wash-plant-sluice"
                alt="Artisans recovering concentrate from a sluice"
                fill
                sizes="(min-width: 1024px) 22vw, 50vw"
              />
            </Parallax>
          </Reveal>
          <Reveal delay={0.2} className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Parallax strength={22}>
              <Picture
                slug="ore-weighing"
                alt="Bagged ore being weighed for tagging"
                fill
                sizes="(min-width: 1024px) 22vw, 50vw"
              />
            </Parallax>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
