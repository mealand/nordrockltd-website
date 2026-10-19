"use client";

import { motion, type Variants } from "motion/react";
import { Children } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds before the animation starts. */
  delay?: number;
  /** Starting vertical offset in px (negative = from above). */
  y?: number;
  as?: "div" | "li" | "span" | "p";
};

/** Fades and lifts its content in the first time it scrolls into view. */
export function Reveal({ children, className, delay = 0, y = 32, as = "div" }: RevealProps) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}

const group: Variants = {
  hidden: {},
  shown: (stagger: number) => ({ transition: { staggerChildren: stagger } }),
};
const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

/** Reveals each direct child in turn. Wrap grids and lists with this. */
export function RevealGroup({
  children,
  className,
  itemClassName,
  stagger = 0.1,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  stagger?: number;
  as?: "div" | "ul" | "ol";
}) {
  const Tag = motion[as];
  const Item = as === "div" ? motion.div : motion.li;
  return (
    <Tag
      className={className}
      variants={group}
      custom={stagger}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {Children.toArray(children).map((child, i) => (
        <Item key={i} variants={item} className={itemClassName}>
          {child}
        </Item>
      ))}
    </Tag>
  );
}
