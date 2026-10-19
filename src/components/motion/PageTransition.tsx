import { ViewTransition } from "react";

/**
 * Wrap each page's content in this (in page.tsx, not the layout — layouts persist
 * across navigations so their enter/exit never fire). Navigations then fade the old
 * page up and out and rise the new one in; see the `.page` rules in globals.css.
 * Browsers without the View Transitions API simply navigate without animation.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page" exit="page" default="none">
      {children}
    </ViewTransition>
  );
}
