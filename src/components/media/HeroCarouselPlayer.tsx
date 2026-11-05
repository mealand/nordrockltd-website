"use client";

import { useEffect, useRef, useState } from "react";
import type { PosterSet } from "@/lib/media";
import { cn } from "@/lib/utils";

export type HeroCarouselSlide = {
  label: string;
  portrait: boolean;
  ms: number;
  backdrop: string;
  video?: { src: string; poster: PosterSet; blurDataURL: string };
  picture?: React.ReactNode;
};

const fill = "absolute inset-0 h-full w-full object-cover";

/**
 * Cross-fading hero background of photos and muted videos. Fills a positioned parent.
 * Only the current and next videos load. Portrait slides fill the screen on phones; on
 * desktop they sit sharp in a frame over a blurred copy rather than being upscaled 4x.
 * Reduced motion and Save-Data stay on the first slide's still.
 */
export function HeroCarouselPlayer({ slides }: { slides: HeroCarouselSlide[] }) {
  const root = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [stillOnly, setStillOnly] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const saveData =
      (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData ===
      true;
    const update = () => setStillOnly(reduce.matches || saveData);
    update();
    reduce.addEventListener("change", update);
    return () => reduce.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (stillOnly || !visible) return;
    const timer = window.setTimeout(
      () => setIndex((i) => (i + 1) % slides.length),
      slides[index].ms,
    );
    return () => window.clearTimeout(timer);
  }, [stillOnly, visible, index, slides]);

  // Restart the slide coming up and play the current one; pause the rest.
  useEffect(() => {
    root.current?.querySelectorAll("video").forEach((video) => {
      const i = Number(video.dataset.slide);
      if (i === index && visible) {
        video.play().catch(() => {});
      } else {
        video.pause();
        if (i !== index) video.currentTime = 0;
      }
    });
  }, [index, visible]);

  const next = (index + 1) % slides.length;

  return (
    <div
      ref={root}
      className="absolute inset-0 overflow-hidden"
      role="img"
      aria-label={slides[index].label}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.label}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1.4s] ease-in-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        >
          {slide.portrait && (
            <div
              aria-hidden
              className="absolute inset-0 hidden scale-110 bg-cover bg-center blur-3xl lg:block"
              style={{ backgroundImage: `url(${slide.backdrop})` }}
            />
          )}
          <div
            className={cn(
              "absolute inset-0",
              slide.portrait &&
                "lg:inset-auto lg:top-[11%] lg:right-[6%] lg:aspect-[9/16] lg:h-[78%] lg:overflow-hidden lg:rounded-[2rem] lg:shadow-2xl lg:ring-1 lg:ring-white/15",
            )}
          >
            {slide.video ? (
              <>
                <picture>
                  <source type="image/avif" srcSet={slide.video.poster.avif} />
                  <source type="image/webp" srcSet={slide.video.poster.webp} />
                  <img
                    src={slide.video.poster.jpg}
                    alt=""
                    className={fill}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </picture>
                {!stillOnly && (
                  <video
                    data-slide={i}
                    className={fill}
                    muted
                    loop
                    playsInline
                    autoPlay={i === 0}
                    preload={i === index || i === next ? "auto" : "none"}
                    aria-hidden="true"
                    src={i === index || i === next ? slide.video.src : undefined}
                  />
                )}
              </>
            ) : (
              slide.picture
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
