import { intro, services } from "@/content/what-we-do";
import { Picture } from "@/components/media/Picture";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/** Intro statement followed by the six service cards. */
export function ServicesGrid() {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-20">
          <div>
            <Reveal y={16}>
              <Eyebrow>{intro.eyebrow}</Eyebrow>
            </Reveal>
            <SplitReveal
              text={intro.title}
              className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
            />
          </div>
          <Reveal delay={0.2}>
            <p className="leading-relaxed text-stone-500">{intro.body}</p>
          </Reveal>
        </div>

        <RevealGroup
          as="ol"
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3"
          stagger={0.08}
        >
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl bg-stone-50 ring-1 ring-navy/5 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-2xl hover:shadow-navy/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Picture
                  slug={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  imgClassName="transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
                />
                <span className="font-display absolute top-4 left-4 grid size-10 place-items-center rounded-full bg-white/90 text-sm font-semibold text-navy backdrop-blur-sm">
                  0{i + 1}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-500">{s.text}</p>
              </div>
            </article>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
