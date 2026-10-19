import { getImage, srcSet, type ImageSlug } from "@/lib/media";
import { cn } from "@/lib/utils";

type PictureProps = {
  slug: ImageSlug;
  alt: string;
  /** Rendered width hint for the browser, e.g. "(min-width: 1024px) 50vw, 100vw". */
  sizes?: string;
  /** Load immediately (above the fold). Defaults to lazy. */
  priority?: boolean;
  /** Fill the positioned parent with object-cover instead of flowing at intrinsic ratio. */
  fill?: boolean;
  className?: string;
  imgClassName?: string;
};

/** Responsive AVIF/WebP/JPG image from the media manifest, with a blur placeholder. */
export function Picture({
  slug,
  alt,
  sizes = "100vw",
  priority = false,
  fill = false,
  className,
  imgClassName,
}: PictureProps) {
  const img = getImage(slug);
  const fallback = img.variants.jpg.at(-1)!;

  return (
    <picture className={cn(fill ? "absolute inset-0 block" : "block", className)}>
      <source type="image/avif" srcSet={srcSet(img.variants.avif)} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(img.variants.webp)} sizes={sizes} />
      <img
        src={fallback.src}
        srcSet={srcSet(img.variants.jpg)}
        sizes={sizes}
        alt={alt}
        width={img.width}
        height={img.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        style={{
          backgroundImage: `url(${img.blurDataURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={cn(fill ? "h-full w-full object-cover" : "h-auto w-full", imgClassName)}
      />
    </picture>
  );
}
