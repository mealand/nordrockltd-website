import { partners } from "@/content/home";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";

/**
 * Partner names as a scrolling typographic strip. Swap in logo files here once
 * they are supplied (see docs/DEVELOPMENT_PLAN.md §7).
 */
export function PartnersMarquee() {
  const half = Math.ceil(partners.length / 2);
  const rows = [partners.slice(0, half), partners.slice(half)];

  return (
    <section
      className="border-y border-stone-200 bg-white py-16 sm:py-20"
      aria-labelledby="partners-heading"
    >
      <Container>
        <Reveal y={16} className="flex flex-col items-center text-center">
          <Eyebrow>Partners & stakeholders</Eyebrow>
          <h2
            id="partners-heading"
            className="font-display mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-balance text-navy sm:text-3xl"
          >
            Working alongside government, development and industry partners.
          </h2>
        </Reveal>
      </Container>
      {/* Screen readers get the plain list; the animated rows are decorative. */}
      <ul className="sr-only">
        {partners.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <div aria-hidden className="mt-12 space-y-5">
        {rows.map((row, r) => (
          <Marquee key={r} duration={45} reverse={r === 1}>
            {row.map((name) => (
              <span
                key={name}
                className="font-display mx-6 flex items-center gap-12 text-xl font-semibold whitespace-nowrap text-navy/70 sm:text-3xl"
              >
                {name}
                <span className="text-base text-gold">✦</span>
              </span>
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}
