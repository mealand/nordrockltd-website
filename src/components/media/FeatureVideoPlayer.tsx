"use client";

import { useState } from "react";
import type { PosterSet } from "@/lib/media";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  poster: PosterSet;
  title: string;
  duration: string;
  className?: string;
};

export function FeatureVideoPlayer({ src, poster, title, duration, className }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-ink", className)}>
      {playing ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster.jpg}
          controls
          autoPlay
          muted
          playsInline
          aria-label={title}
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full text-left text-white focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-royal"
          aria-label={`Play video: ${title} (${duration})`}
        >
          <picture>
            <source type="image/avif" srcSet={poster.avif} />
            <source type="image/webp" srcSet={poster.webp} />
            <img
              src={poster.jpg}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
            />
          </picture>
          <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-ink/10" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="relative grid size-20 place-items-center rounded-full bg-royal text-white shadow-xl transition-transform duration-500 group-hover:scale-110">
              <span
                aria-hidden
                className="absolute inset-0 animate-ping rounded-full bg-royal/40 motion-reduce:hidden"
              />
              <svg aria-hidden viewBox="0 0 24 24" className="relative ml-1 size-7 fill-current">
                <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5Z" />
              </svg>
            </span>
          </span>
          <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
            <span className="font-display text-lg leading-snug font-semibold">{title}</span>
            <span className="shrink-0 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              {duration}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
