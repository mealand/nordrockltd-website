import { strategy } from "@/content/who-we-are";
import { FeatureVideo } from "@/components/media/FeatureVideo";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/** The operational excellence model, beside full site-inspection footage. */
export function Strategy() {
  return (
    <Section>
      <Container className="grid items-center gap-14 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-24">
        <Reveal className="order-2 mx-auto w-full max-w-sm lg:order-1 lg:w-[22rem]">
          <FeatureVideo
            slug="site-inspection-tour"
            title="On site: a NordRock inspection tour"
            className="aspect-[9/16] rounded-[2rem] shadow-2xl shadow-navy/20"
          />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal y={16}>
            <Eyebrow>{strategy.eyebrow}</Eyebrow>
          </Reveal>
          <SplitReveal
            text={strategy.title}
            className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
          />
          <RevealGroup as="ol" className="mt-10 space-y-2" stagger={0.1}>
            {strategy.items.map((s, i) => (
              <div key={s.title} className="flex gap-6 border-t border-stone-200 py-6">
                <span className="font-display text-3xl font-semibold text-gold sm:text-4xl">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-stone-500">{s.text}</p>
                </div>
              </div>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </Section>
  );
}
