import { getImage, getVideo, type ImageSlug, type VideoSlug } from "@/lib/media";
import { Picture } from "./Picture";
import { HeroCarouselPlayer, type HeroCarouselSlide } from "./HeroCarouselPlayer";

export type HeroSlide = { video: VideoSlug; label: string } | { image: ImageSlug; label: string };

/** How long a photo stays up; a video stays up for the length of its clip. */
const PHOTO_MS = 6000;

/** Resolves slides from the manifest on the server; the player handles timing and loading. */
export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const resolved: HeroCarouselSlide[] = slides.map((slide, i) => {
    if ("video" in slide) {
      const video = getVideo(slide.video);
      const clip = video.loops[0];
      return {
        label: slide.label,
        portrait: video.height > video.width,
        ms: clip.duration * 1000,
        backdrop: clip.poster.jpg,
        video: { src: clip.mp4, poster: clip.poster, blurDataURL: clip.blurDataURL },
      };
    }
    const image = getImage(slide.image);
    const portrait = image.height > image.width;
    return {
      label: slide.label,
      portrait,
      ms: PHOTO_MS,
      backdrop: image.variants.jpg[0].src,
      picture: (
        <Picture
          slug={slide.image}
          alt=""
          fill
          priority={i === 0}
          sizes={portrait ? "(min-width: 1024px) 480px, 100vw" : "100vw"}
        />
      ),
    };
  });

  return <HeroCarouselPlayer slides={resolved} />;
}
