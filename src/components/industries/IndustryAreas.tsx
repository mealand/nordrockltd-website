import type { Industry } from "@/content/industries";
import { Picture } from "@/components/media/Picture";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

/** The industry's opening statement and its focus areas (photo cards or numbered cards). */
export function IndustryAreas({ industry }: { industry: Industry }) {
  const { statement, areas } = industry;
  const withImages = areas.every((a) => a.image);
  return (
    <Section>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-20">
          <div>
            <Reveal y={16}>
              <Eyebrow>{statement.eyebrow}</Eyebrow>
            </Reveal>
            <SplitReveal
              text={statement.title}
              className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
            />
          </div>
          <Reveal delay={0.2}>
            <p className="leading-relaxed text-stone-500">{statement.body}</p>
          </Reveal>
        </div>

        <RevealGroup
          as="ol"
          className={cn(
            "mt-14 grid gap-5 lg:mt-20",
            areas.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3",
          )}
          stagger={0.08}
        >
          {areas.map((a, i) =>
            withImages ? (
              <article
                key={a.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-stone-50 ring-1 ring-navy/5"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Picture
                    slug={a.image!}
                    alt={a.alt ?? ""}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    imgClassName="transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                  <h3 className="font-display absolute inset-x-0 bottom-0 p-6 text-2xl font-semibold text-white">
                    <span className="block text-sm text-gold">0{i + 1}</span>
                    {a.title}
                  </h3>
                </div>
                <p className="p-6 text-sm leading-relaxed text-stone-500">{a.text}</p>
              </article>
            ) : (
              <article
                key={a.title}
                className="h-full rounded-3xl bg-stone-50 p-7 ring-1 ring-navy/5 transition-colors duration-500 hover:bg-sky"
              >
                <span className="font-display text-sm font-semibold text-gold">0{i + 1}</span>
                <h3 className="font-display mt-6 text-2xl font-semibold tracking-tight">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-500">{a.text}</p>
              </article>
            ),
          )}
        </RevealGroup>
      </Container>
    </Section>
  );
}
