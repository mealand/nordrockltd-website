import { challenges, focusAreas } from "@/content/who-we-are";
import { Picture } from "@/components/media/Picture";
import { VideoLoop } from "@/components/media/VideoLoop";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/** The sector challenges we address, and our three areas of focus. */
export function Challenges() {
  return (
    <Section tone="muted">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal y={16}>
              <Eyebrow>{challenges.eyebrow}</Eyebrow>
            </Reveal>
            <SplitReveal
              text={challenges.title}
              className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
            />
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg leading-relaxed text-stone-500">{challenges.body}</p>
            </Reveal>
          </div>
          <RevealGroup as="ul" className="flex flex-wrap content-end gap-3" stagger={0.05}>
            {challenges.items.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-sm font-medium text-navy ring-1 ring-navy/10"
              >
                <svg aria-hidden viewBox="0 0 12 12" className="size-3 text-azure-700">
                  <path
                    d="M2.5 6.5 5 9l4.5-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
                {item}
              </span>
            ))}
          </RevealGroup>
        </div>

        <RevealGroup className="mt-16 grid gap-5 md:grid-cols-3 lg:mt-24" stagger={0.12}>
          {focusAreas.map((f) => (
            <article
              key={f.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-navy/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105">
                  {"video" in f.media ? (
                    <VideoLoop slug={f.media.video} label={f.media.label} />
                  ) : (
                    <Picture
                      slug={f.media.image}
                      alt={f.media.alt}
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                    />
                  )}
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-500">{f.text}</p>
              </div>
            </article>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
