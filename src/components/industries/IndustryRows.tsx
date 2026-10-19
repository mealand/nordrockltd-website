import Link from "next/link";
import { industryPages } from "@/content/industries";
import { HeroMediaFill } from "@/components/media/HeroMediaFill";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

/** Industries overview: one alternating media/text row per industry. */
export function IndustryRows() {
  return (
    <Section>
      <Container className="space-y-24 lg:space-y-32">
        {industryPages.map((ind, i) => {
          const href = `/industries/${ind.slug}/`;
          const flip = i % 2 === 1;
          return (
            <article key={ind.slug} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <Reveal className={cn(flip && "lg:order-2")}>
                <Link
                  href={href}
                  aria-label={ind.label}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink sm:aspect-[4/3] lg:aspect-[4/5]"
                >
                  <Parallax strength={14}>
                    <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105">
                      <HeroMediaFill
                        media={ind.overview.media}
                        sizes="(min-width: 1024px) 45vw, 100vw"
                      />
                    </div>
                  </Parallax>
                  <span className="font-display absolute top-6 left-6 grid size-14 place-items-center rounded-full bg-white/90 text-lg font-semibold text-navy backdrop-blur-sm">
                    0{i + 1}
                  </span>
                </Link>
              </Reveal>
              <Reveal delay={0.15} className={cn(flip && "lg:order-1")}>
                <h2 className="font-display text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl">
                  {ind.label}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-stone-500">
                  {ind.overview.summary}
                </p>
                <ul className="mt-8 divide-y divide-stone-200 border-y border-stone-200">
                  {ind.overview.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-4 py-3.5 text-navy">
                      <span aria-hidden className="size-1.5 rounded-full bg-gold" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href={href} variant="secondary">
                    Explore {ind.label.toLowerCase()}
                  </Button>
                </div>
              </Reveal>
            </article>
          );
        })}
      </Container>
    </Section>
  );
}
