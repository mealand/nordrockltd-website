import { joinPaths } from "@/content/join-us";
import { HeroMediaFill } from "@/components/media/HeroMediaFill";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { AnchorLink } from "@/components/ui/AnchorLink";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section, type Tone } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const tones: Tone[] = ["light", "navy", "sky"];

/**
 * Quick links to the three paths, under the hero.
 */
export function JoinIndex() {
  return (
    <div className="border-b border-stone-200 bg-white">
      <Container>
        <nav aria-label="Ways to join" className="grid sm:grid-cols-3">
          {joinPaths.map((p, i) => (
            <AnchorLink
              key={p.id}
              href={`#${p.id}`}
              className="group flex items-center justify-between gap-4 border-stone-200 py-6 sm:border-l sm:px-6 sm:first:border-l-0 sm:first:pl-0"
            >
              <span>
                <span className="font-display block text-sm font-semibold text-royal">0{i + 1}</span>
                <span className="font-display text-lg font-semibold text-navy">{p.eyebrow}</span>
              </span>
              <span
                aria-hidden
                className="text-azure-700 transition-transform duration-300 group-hover:translate-y-1"
              >
                ↓
              </span>
            </AnchorLink>
          ))}
        </nav>
      </Container>
    </div>
  );
}

/** One full section per path: copy, media, benefits, optional onboarding steps, CTAs. */
export function JoinPaths() {
  return (
    <>
      {joinPaths.map((p, i) => {
        const tone = tones[i % tones.length];
        const dark = tone === "navy";
        const flip = i % 2 === 1;
        return (
          <Section key={p.id} id={p.id} tone={tone} className="scroll-mt-16 overflow-clip">
            <Container>
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <div className={cn(flip && "lg:order-2")}>
                  <Reveal y={16}>
                    <Eyebrow>{p.eyebrow}</Eyebrow>
                  </Reveal>
                  <SplitReveal
                    text={p.title}
                    className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl"
                  />
                  <Reveal delay={0.2}>
                    <p
                      className={cn(
                        "mt-6 leading-relaxed",
                        dark ? "text-white/75" : "text-navy/70",
                      )}
                    >
                      {p.body}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      {p.cta.map((c, ci) => (
                        <Button
                          key={c.href}
                          href={c.href}
                          variant={ci === 0 ? "primary" : dark ? "outline" : "secondary"}
                          arrow={!c.href.startsWith("http")}
                        >
                          {c.label}
                        </Button>
                      ))}
                    </div>
                  </Reveal>
                </div>
                <Reveal
                  delay={0.1}
                  className={cn(
                    "relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink sm:aspect-[4/3] lg:aspect-[4/5]",
                    flip && "lg:order-1",
                  )}
                >
                  <Parallax strength={14}>
                    <HeroMediaFill media={p.media} sizes="(min-width: 1024px) 45vw, 100vw" />
                  </Parallax>
                </Reveal>
              </div>

              <RevealGroup className="mt-14 grid gap-4 md:grid-cols-3" stagger={0.08}>
                {p.points.map((pt) => (
                  <div
                    key={pt.title}
                    className={cn(
                      "h-full rounded-3xl p-7",
                      dark
                        ? "bg-white/[0.05] ring-1 ring-white/10"
                        : "bg-white/70 ring-1 ring-navy/5",
                    )}
                  >
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {pt.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-3 text-sm leading-relaxed",
                        dark ? "text-white/75" : "text-stone-500",
                      )}
                    >
                      {pt.text}
                    </p>
                  </div>
                ))}
              </RevealGroup>

              {p.steps && (
                <div className="mt-14">
                  <p
                    className={cn(
                      "text-xs font-semibold tracking-[0.22em] uppercase",
                      dark ? "text-sky-300" : "text-azure-700",
                    )}
                  >
                    How onboarding works
                  </p>
                  <RevealGroup
                    as="ol"
                    className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                    stagger={0.1}
                  >
                    {p.steps.map((s, si) => (
                      <div
                        key={s}
                        className={cn(
                          "flex h-full gap-4 border-t pt-5",
                          dark ? "border-white/15" : "border-navy/15",
                        )}
                      >
                        <span className="font-display text-2xl font-semibold text-royal">
                          {si + 1}
                        </span>
                        <span className="leading-snug font-medium">{s}</span>
                      </div>
                    ))}
                  </RevealGroup>
                </div>
              )}
            </Container>
          </Section>
        );
      })}
    </>
  );
}
