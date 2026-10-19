"use client";

import { useLenis } from "lenis/react";

/** Height of the fixed header plus breathing room, in px. */
const HEADER_OFFSET = 72;

/**
 * In-page link (`href="#id"`) that scrolls to an exact position below the fixed
 * header. Computes the target itself rather than relying on Lenis's anchor
 * handling, which landed short on long pages.
 */
export function AnchorLink({
  href,
  className,
  children,
}: {
  href: `#${string}`;
  className?: string;
  children: React.ReactNode;
}) {
  const lenis = useLenis();

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (lenis && !reduce) {
      lenis.scrollTo(top, { duration: 1.2 });
    } else {
      window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    }
    history.replaceState(null, "", href);
  };

  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
}
