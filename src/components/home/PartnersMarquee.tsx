import { partners } from "@/content/home";
import { getLogo } from "@/lib/media";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";

/** Partner logos as two scrolling strips, each with the organisation's name beneath. */
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
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
      <div aria-hidden className="mt-12 space-y-5">
        {rows.map((row, r) => (
          <Marquee key={r} duration={45} reverse={r === 1}>
            {/* Each row is listed twice so the strip stays full on very wide screens. */}
            {[...row, ...row].map((p, i) => {
              const logo = getLogo(p.logo);
              return (
                <span key={`${p.name}-${i}`} className="mx-5 flex w-44 flex-col items-center gap-3">
                  <span className="flex h-20 w-full items-center justify-center">
                    <picture className="contents">
                      <source type="image/webp" srcSet={logo.webp} />
                      <img
                        src={logo.png}
                        alt=""
                        width={logo.width}
                        height={logo.height}
                        loading="lazy"
                        className="max-h-full w-auto max-w-full object-contain"
                      />
                    </picture>
                  </span>
                  <span className="text-center text-xs leading-snug text-stone-500">{p.name}</span>
                </span>
              );
            })}
          </Marquee>
        ))}
      </div>
    </section>
  );
}
