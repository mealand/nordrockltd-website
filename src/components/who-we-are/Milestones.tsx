"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { milestones } from "@/content/who-we-are";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

/** Vertical timeline whose blue line fills as the visitor scrolls through it. */
export function Milestones() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <Section tone="sky">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal y={16}>
            <Eyebrow>Our journey</Eyebrow>
            <h2 className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl">
              Giant steps in our first months.
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-navy/75">
              From incorporation to international offtake and live technology platforms, and set up
              for even bigger milestones.
            </p>
          </Reveal>
        </div>

        <div ref={listRef} className="relative">
          {/* Track and scroll-linked fill */}
          <span aria-hidden className="absolute top-2 bottom-2 left-[7px] w-0.5 bg-navy/10" />
          <motion.span
            aria-hidden
            className="absolute top-2 bottom-2 left-[7px] w-0.5 origin-top bg-royal"
            style={{ scaleY: progress }}
          />
          <ol>
            {milestones.map((m) => (
              <li key={m.title} className="relative pb-12 pl-12 last:pb-0">
                <span
                  aria-hidden
                  className="absolute top-1.5 left-0 size-4 rounded-full border-2 border-royal bg-sky"
                />
                <Reveal y={20}>
                  <p className="text-xs font-semibold tracking-[0.22em] text-azure-700 uppercase">
                    {m.date}
                  </p>
                  <h3 className="font-display mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                    {m.title}
                  </h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-navy/75">{m.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
