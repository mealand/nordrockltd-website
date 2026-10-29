import Link from "next/link";
import { model } from "@/content/what-we-do";
import { industries } from "@/content/site";
import { statusLabels } from "@/content/industries";
import { Picture } from "@/components/media/Picture";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/**
 * Technology, operations and finance as expanding photo panels: on desktop the
 * hovered (or focused) panel widens and reveals its text. Then the industries
 * the model runs in, with their status.
 */
export function OurModel() {
  return (
    <Section tone="navy" className="overflow-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 size-[36rem] rounded-full bg-royal/25 blur-3xl"
      />
      <Container className="relative">
        <Reveal y={16}>
          <Eyebrow>{model.eyebrow}</Eyebrow>
        </Reveal>
        <SplitReveal
          text={model.title}
          className="font-display mt-5 max-w-3xl text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
        />

        <Reveal delay={0.15} className="mt-14 flex flex-col gap-4 lg:h-[30rem] lg:flex-row">
          {model.pillars.map((p, i) => (
            <article
              key={p.title}
              tabIndex={0}
              className="group relative isolate flex min-h-80 flex-col justify-end overflow-hidden rounded-3xl p-7 ring-1 ring-white/10 transition-[flex-grow] duration-700 ease-out-expo outline-none focus-visible:ring-2 focus-visible:ring-sky-300 lg:min-h-0 lg:flex-1 lg:hover:flex-[2.4] lg:focus-visible:flex-[2.4]"
            >
              <Picture
                slug={p.image}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="-z-10"
                imgClassName="transition-transform duration-[1.4s] ease-out-expo group-hover:scale-110"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
              <span className="font-display text-sm font-semibold text-royal-300">0{i + 1}</span>
              <h3 className="font-display mt-2 text-3xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-white/85 transition-[opacity,translate] duration-500 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100">
                {p.text}
              </p>
            </article>
          ))}
        </Reveal>

        <RevealGroup
          as="ul"
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
        >
          {industries.map((ind) => (
            <Link
              key={ind.href}
              href={ind.href}
              className="group flex h-full flex-col rounded-2xl bg-white/[0.05] p-5 ring-1 ring-white/10 transition-colors duration-500 hover:bg-white/[0.1]"
            >
              <span className="flex items-center justify-between gap-3">
                <span className="font-display font-semibold">{ind.label}</span>
                <span
                  aria-hidden
                  className="text-royal-300 transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
              <span className="mt-2 text-sm leading-relaxed text-white/70">
                {ind.status === "coming-soon" ? "Coming soon" : ind.description}
              </span>
              <span className="mt-auto pt-4 text-xs font-semibold tracking-wide text-sky-300">
                {statusLabels[ind.status]}
              </span>
            </Link>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
