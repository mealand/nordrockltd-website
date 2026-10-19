"use client";

import { motion } from "motion/react";

type SplitRevealProps = {
  /** Plain text to split into words. */
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  /** Animate on mount (hero) rather than when scrolled into view. */
  immediate?: boolean;
};

/**
 * Masked word-by-word rise for headlines. Screen readers get the whole string
 * once via aria-label; the animated spans are hidden from them.
 */
export function SplitReveal({
  text,
  as = "h2",
  className,
  delay = 0,
  immediate = false,
}: SplitRevealProps) {
  const Tag = motion[as];
  const words = text.split(" ");
  const trigger = immediate
    ? { animate: "shown" as const }
    : { whileInView: "shown" as const, viewport: { once: true, margin: "0px 0px -10% 0px" } };

  return (
    <Tag
      className={className}
      aria-label={text}
      initial="hidden"
      {...trigger}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{ hidden: { y: "110%" }, shown: { y: "0%" } }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
            {i < words.length - 1 && " "}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
