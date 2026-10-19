import Link from "next/link";
import type { Industry } from "@/content/industries";
import { HeroMediaFill } from "@/components/media/HeroMediaFill";
import { Container } from "@/components/ui/Container";

/** Full-width link to the next industry, closing each detail page. */
export function NextIndustry({ industry }: { industry: Industry }) {
  return (
    <Link
      href={`/industries/${industry.slug}/`}
      className="group relative isolate block overflow-hidden bg-ink text-white focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-gold"
    >
      <div className="absolute inset-0 -z-10 opacity-40 transition-all duration-[1.2s] ease-out-expo group-hover:scale-105 group-hover:opacity-60">
        <HeroMediaFill media={industry.overview.media} sizes="100vw" />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/40"
      />
      <Container className="flex flex-col gap-6 py-20 sm:flex-row sm:items-end sm:justify-between sm:py-28">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-sky-300 uppercase">
            Next industry
          </p>
          <p className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            {industry.label}
          </p>
          <p className="mt-3 max-w-xl text-white/75">{industry.overview.summary}</p>
        </div>
        <span
          aria-hidden
          className="grid size-16 shrink-0 place-items-center rounded-full bg-gold text-2xl text-ink transition-transform duration-500 group-hover:translate-x-2"
        >
          →
        </span>
      </Container>
    </Link>
  );
}
