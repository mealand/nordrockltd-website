import { leadership } from "@/content/who-we-are";
import { Picture } from "@/components/media/Picture";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/**
 * Leadership cards. Every portrait gets the same square crop, a soft navy tint
 * that lifts on hover, and the bio sliding up over the photo.
 */
export function Leadership() {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-20">
          <div>
            <Reveal y={16}>
              <Eyebrow>Leadership</Eyebrow>
            </Reveal>
            <SplitReveal
              text="The team accountable for each part of the chain."
              className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
            />
          </div>
          <Reveal delay={0.2}>
            <p className="leading-relaxed text-stone-500">
              Metallurgy, technology, finance, law, banking and geoscience, with a named lead for
              every workstream.
            </p>
          </Reveal>
        </div>

        <RevealGroup
          as="ul"
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          itemClassName="h-full"
          stagger={0.08}
        >
          {leadership.map((l) => (
            <article key={l.name} className="group flex h-full flex-col">
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-navy">
                <Picture
                  slug={l.photo}
                  alt={`Portrait of ${l.name}`}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  imgClassName="object-top saturate-[0.85] transition-[scale,filter] duration-[1.2s] ease-out-expo group-hover:scale-105 group-hover:saturate-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-navy/20 to-navy/10 mix-blend-multiply" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-6 text-sm leading-relaxed text-white transition-transform duration-500 ease-out-expo group-hover:translate-y-0 group-focus-within:translate-y-0">
                  <p className="rounded-2xl bg-ink/80 p-4 backdrop-blur-md">{l.bio}</p>
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">{l.name}</h3>
                  <p className="mt-1 text-sm text-azure-700">{l.role}</p>
                </div>
                {l.linkedin && (
                  <a
                    href={l.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${l.name} on LinkedIn`}
                    className="grid size-10 shrink-0 place-items-center rounded-full bg-sky text-navy transition-colors hover:bg-royal hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure"
                  >
                    <svg aria-hidden viewBox="0 0 24 24" className="size-4" fill="currentColor">
                      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.62 4.8 6.03V21h-4v-5.04c0-1.2-.02-2.75-1.68-2.75-1.68 0-1.94 1.31-1.94 2.66V21h-4V9.75Z" />
                    </svg>
                  </a>
                )}
              </div>
              {/* Touch screens have no hover, so the bio is also shown under the card there. */}
              <p className="mt-2 text-sm leading-relaxed text-stone-500 [@media(hover:hover)]:hidden">
                {l.bio}
              </p>
            </article>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
