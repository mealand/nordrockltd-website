"use client";

import { useEffect, useRef, useState } from "react";
import type { PosterSet } from "@/lib/media";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  poster: PosterSet;
  blurDataURL: string;
  label: string;
  priority?: boolean;
  className?: string;
};

/**
 * Fills its positioned parent with a muted, looping video.
 * - Loads only when near the viewport (unless `priority`).
 * - Pauses while off-screen to save battery and CPU.
 * - Shows the poster only for reduced-motion users or Save-Data connections.
 */
export function VideoLoopPlayer({ src, poster, blurDataURL, label, priority, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(Boolean(priority));
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
    const el = ref.current;
    if (!el || stillOnly) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // First entry attaches the source (autoPlay then starts it once it can
          // play); later entries resume a loop that was paused off-screen.
          setLoad(true);
          if (el.currentSrc) el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stillOnly]);

  const fill = "absolute inset-0 h-full w-full object-cover";

  return (
    <div
      className={cn("absolute inset-0 overflow-hidden", className)}
      role="img"
      aria-label={label}
      style={{ backgroundImage: `url(${blurDataURL})`, backgroundSize: "cover" }}
    >
      <picture>
        <source type="image/avif" srcSet={poster.avif} />
        <source type="image/webp" srcSet={poster.webp} />
        <img src={poster.jpg} alt="" className={fill} loading={priority ? "eager" : "lazy"} />
      </picture>
      {!stillOnly && (
        <video
          ref={ref}
          className={fill}
          muted
          loop
          playsInline
          autoPlay
          preload={load ? "auto" : "none"}
          aria-hidden="true"
          src={load ? src : undefined}
        />
      )}
    </div>
  );
}
