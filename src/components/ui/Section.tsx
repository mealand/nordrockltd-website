import { cn } from "@/lib/utils";

export type Tone = "light" | "muted" | "sky" | "navy" | "ink";

const tones: Record<Tone, string> = {
  light: "bg-white text-navy",
  muted: "bg-stone-50 text-navy",
  sky: "bg-sky text-navy",
  navy: "bg-navy text-white [--accent:var(--color-sky-300)]",
  ink: "bg-ink text-white [--accent:var(--color-sky-300)]",
};

/** Vertical page band. `tone` sets background and default text colour. */
export function Section({
  tone = "light",
  className,
  children,
  id,
  ...rest
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
  id?: string;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      id={id}
      data-tone={tone}
      className={cn("relative py-20 sm:py-28 lg:py-32", tones[tone], className)}
      {...rest}
    >
      {children}
    </section>
  );
}
