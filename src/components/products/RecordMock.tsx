"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Illustrative product record (not live data): an ID card whose journey stages
 * tick off one by one when it scrolls into view.
 */
export function RecordMock({
  idLabel,
  id,
  fields,
  stages,
  className,
}: {
  idLabel: string;
  id: string;
  fields: { label: string; value: string }[];
  stages: string[];
  className?: string;
}) {
  return (
    <motion.figure
      className={cn(
        "relative overflow-hidden rounded-3xl bg-white p-6 text-navy shadow-2xl shadow-ink/30 ring-1 ring-navy/5 sm:p-8",
        className,
      )}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-stone-500 uppercase">
            {idLabel}
          </p>
          <p className="mt-1 font-mono text-lg font-semibold tracking-tight sm:text-xl">{id}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
          <svg aria-hidden viewBox="0 0 12 12" className="size-3">
            <path d="M2.5 6.5 5 9l4.5-6" fill="none" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          Verified
        </span>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-stone-200 py-5 text-sm">
        {fields.map((f) => (
          <div key={f.label}>
            <dt className="text-xs text-stone-500">{f.label}</dt>
            <dd className="mt-0.5 font-semibold">{f.value}</dd>
          </div>
        ))}
      </dl>

      <motion.ol
        className="mt-6 space-y-3"
        variants={{ shown: { transition: { staggerChildren: 0.35, delayChildren: 0.3 } } }}
      >
        {stages.map((s, i) => (
          <motion.li
            key={s}
            className="flex items-center gap-3 text-sm"
            variants={{ hidden: { opacity: 0.35 }, shown: { opacity: 1 } }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <motion.span
              className="grid size-6 shrink-0 place-items-center rounded-full bg-stone-200 text-white"
              variants={{
                hidden: { backgroundColor: "#e3e6ec" },
                shown: { backgroundColor: i === stages.length - 1 ? "#c9a54c" : "#1767a0" },
              }}
              transition={{ duration: 0.4 }}
            >
              <svg aria-hidden viewBox="0 0 12 12" className="size-3">
                <path d="M2.5 6.5 5 9l4.5-6" fill="none" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </motion.span>
            <span className="font-medium">{s}</span>
            <span aria-hidden className="ml-auto font-mono text-[0.7rem] text-stone-500">
              {`0x${(0x3fa2c1 + i * 0x1b7e9).toString(16)}…`}
            </span>
          </motion.li>
        ))}
      </motion.ol>
      <figcaption className="mt-6 text-xs text-stone-500">Illustrative record</figcaption>
    </motion.figure>
  );
}
