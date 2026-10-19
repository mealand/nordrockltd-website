import Link from "next/link";
import { cn, isExternal } from "@/lib/utils";

const variants = {
  primary: "bg-gold text-ink hover:bg-sky",
  secondary: "bg-navy text-white hover:bg-navy-700",
  outline: "border border-current hover:bg-white hover:text-navy",
  ghost: "px-0! hover:text-(--accent)",
};

type ButtonProps = {
  href: string;
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
  /** Show the trailing arrow. */
  arrow?: boolean;
};

/** Link styled as a button. External links open in a new tab. */
export function Button({
  href,
  variant = "primary",
  className,
  children,
  arrow = true,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300",
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azure",
    variants[variant],
    className,
  );
  const content = (
    <>
      {children}
      {arrow && (
        <svg
          aria-hidden
          viewBox="0 0 16 16"
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M1 8h13M9 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )}
    </>
  );

  if (isExternal(href)) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
