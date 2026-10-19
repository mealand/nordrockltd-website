"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Pins the section and scrolls its panels sideways as the user scrolls down
 * (the "value chain" sequence). On small screens and for reduced-motion users
 * it falls back to a native, swipeable row with scroll snapping.
 */
export function PinnedScroll({
  intro,
  children,
  className,
  trackClassName,
}: {
  /** Heading content pinned above the panels so it stays on screen while they move. */
  intro?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const el = track.current!;
        const distance = () => el.scrollWidth - window.innerWidth;
        gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className={cn("overflow-hidden lg:flex lg:h-svh lg:flex-col lg:justify-center", className)}
    >
      {intro}
      <div
        ref={track}
        className={cn(
          // Mobile / reduced motion: native horizontal scroll with snap.
          "flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden",
          // Desktop: GSAP translates the track; no native scrolling.
          "lg:w-max lg:snap-none lg:overflow-visible lg:px-10 lg:pb-0",
          trackClassName,
        )}
        data-lenis-prevent-wheel
      >
        {children}
      </div>
    </div>
  );
}
