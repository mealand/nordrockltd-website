"use client";

import { Children, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Cross-fading slides with a slow Ken Burns zoom. Fills a positioned parent.
 * Pass pre-rendered <Picture> elements as children (they stay server-rendered).
 * Only advances while on screen; reduced motion shows the first slide, still.
 */
export function Slideshow({
  children,
  interval = 5000,
  offset = 0,
  className,
}: {
  children: React.ReactNode;
  interval?: number;
  /** Delay before the first change, so neighbouring slideshows don't switch in sync. */
  offset?: number;
  className?: string;
}) {
  const slides = Children.toArray(children);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), {
      rootMargin: "100px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduce || !visible || slides.length < 2) return;
    let timer: number;
    const start = window.setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
      timer = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    }, interval + offset);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(timer);
    };
  }, [reduce, visible, slides.length, interval, offset]);

  return (
    <div ref={ref} className={cn("absolute inset-0 overflow-hidden", className)}>
      {slides.map((slide, i) => (
        <div
          key={i}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1.4s] ease-in-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        >
          <div
            className={cn(
              "absolute inset-0",
              !reduce && i === index && "animate-[ken-burns_9s_ease-out_both]",
            )}
          >
            {slide}
          </div>
        </div>
      ))}
      {slides.length > 1 && (
        <div aria-hidden className="absolute top-5 right-5 z-10 flex gap-1.5">
          {slides.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-1 rounded-full bg-white transition-all duration-700",
                i === index ? "w-6 opacity-100" : "w-1.5 opacity-50",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
