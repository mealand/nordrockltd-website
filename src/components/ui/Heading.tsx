import { cn } from "@/lib/utils";

/** Small uppercase label above a heading, with a royal-blue rule. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-(--accent) uppercase",
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-royal" />
      {children}
    </p>
  );
}

const sizes = {
  xl: "text-4xl leading-[1.05] sm:text-6xl lg:text-7xl",
  lg: "text-3xl leading-[1.1] sm:text-5xl",
  md: "text-2xl leading-tight sm:text-3xl",
  sm: "text-xl leading-snug",
};

/** Display heading in Sora. `as` sets the semantic level independently of size. */
export function Heading({
  as: Tag = "h2",
  size = "lg",
  className,
  children,
}: {
  as?: "h1" | "h2" | "h3" | "h4";
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "font-display font-semibold tracking-tight text-balance",
        sizes[size],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
