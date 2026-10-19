"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Moves its content against the scroll direction for depth. Put it inside an
 * `overflow-hidden` frame; the content is oversized by `strength` so no edge shows.
 */
export function Parallax({
  children,
  className,
  strength = 12,
}: {
  children: React.ReactNode;
  className?: string;
  /** Travel as a percentage of the element's height. */
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength / 2}%`, `${strength / 2}%`]);

  return (
    <div ref={ref} className={cn("absolute inset-0 overflow-hidden", className)}>
      <motion.div
        className="absolute inset-x-0"
        style={{
          top: `-${strength / 2}%`,
          bottom: `-${strength / 2}%`,
          y: reduce ? 0 : y,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
