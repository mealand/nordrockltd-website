/** Joins class names, skipping falsy values. */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/** True for links that leave the site (other domains, mailto, tel). */
export function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

/** True when `href` is the current page or a parent section of it. */
export function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/\/$/, ""));
}
