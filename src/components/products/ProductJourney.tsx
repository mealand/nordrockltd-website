"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Stage pipeline (vertical on phones, horizontal from md) whose line draws in on scroll. */
export function ProductJourney({ title, stages }: { title: string; stages: string[] }) {
  return (
    <Section tone="sky">
      <Container>
        <Eyebrow>Traceability, step by step</Eyebrow>
        <h2 className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-5xl">
          {title}
        </h2>
        <motion.div
          className="relative mt-14"
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          variants={{ shown: { transition: { staggerChildren: 0.18 } } }}
        >
          <motion.span
            aria-hidden
            className="absolute top-3 bottom-3 left-[11px] w-0.5 origin-top bg-royal md:top-[11px] md:right-0 md:bottom-auto md:left-0 md:h-0.5 md:w-auto md:origin-left"
            variants={{ hidden: { scale: 0 }, shown: { scale: 1 } }}
            transition={{ duration: 0.4 + stages.length * 0.18, ease: EASE }}
          />
          <ol
            className="relative grid gap-6 md:grid-cols-[repeat(var(--stages),minmax(0,1fr))] md:gap-4"
            style={{ "--stages": stages.length } as React.CSSProperties}
          >
            {stages.map((s, i) => (
              <motion.li
                key={s}
                className="flex items-center gap-4 md:flex-col md:items-start md:gap-5"
                variants={{ hidden: { opacity: 0, y: 12 }, shown: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-full border-2 border-royal bg-sky">
                  <span className="size-2 rounded-full bg-navy" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-azure-700">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="font-display text-lg font-semibold">{s}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </Container>
    </Section>
  );
}
