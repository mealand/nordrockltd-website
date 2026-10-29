import Link from "next/link";
import { industryPages, statusLabels } from "@/content/industries";
import { Picture } from "@/components/media/Picture";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Slideshow } from "@/components/motion/Slideshow";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/**
 * "Our industries": four tall cards, each a photo slideshow. On hover the card
 * lifts and its focus points slide up into view.
 */
export function IndustriesTeaser() {
  return (
    <Section tone="muted">
      <Container>
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <Reveal y={16}>
              <Eyebrow>Our industries</Eyebrow>
            </Reveal>
            <SplitReveal
              text="Four industries, one way of working."
              className="font-display mt-5 max-w-3xl text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
            />
          </div>
          <Reveal delay={0.2} className="shrink-0">
            <Button href="/industries/" variant="secondary">
              All industries
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4" stagger={0.1}>
          {industryPages.map((ind, i) => {
            const m = ind.overview;
            return (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}/`}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl bg-ink p-6 text-white transition-[translate,box-shadow] duration-500 ease-out-expo hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azure sm:p-7 xl:aspect-[3/5]"
              >
                <Slideshow offset={i * 1200}>
                  {m.slides.map((slug) => (
                    <Picture
                      key={slug}
                      slug={slug}
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                  ))}
                </Slideshow>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/5" />
                <div className="relative">
                  <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[0.7rem] font-semibold tracking-wide ring-1 ring-white/20 backdrop-blur-sm">
                    {statusLabels[ind.status]}
                  </span>
                  <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {ind.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{m.summary}</p>
                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out-expo group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
                    <ul className="flex flex-wrap gap-2 overflow-hidden">
                      {m.points.map((pt) => (
                        <li
                          key={pt}
                          className="mt-4 rounded-full bg-white/10 px-3 py-1 text-xs text-white/90 ring-1 ring-white/15 backdrop-blur-sm"
                        >
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition-colors group-hover:text-white">
                    Explore
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}
