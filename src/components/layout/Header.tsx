"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav, type NavItem } from "@/content/site";
import { cn, isActive } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

export type LogoAsset = { png: string; webp: string; width: number; height: number };

/**
 * Fixed site header. Transparent with light text over each page's dark hero,
 * then turns solid white once the page scrolls. Hides while scrolling down and
 * reappears on scroll up. Desktop (xl+) shows the full menu with dropdown panels;
 * smaller screens get the full-screen MobileNav.
 */
export function Header({ mark }: { mark: LogoAsset }) {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      setHidden(y > 400 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,color,box-shadow] duration-500 ease-out-expo",
        solid
          ? "bg-white/90 text-navy shadow-[0_1px_0_rgba(29,37,69,0.08)] backdrop-blur-md"
          : "bg-gradient-to-b from-ink/60 to-transparent text-white",
        hidden && !menuOpen && "-translate-y-full",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-4 transition-[height] duration-500 sm:px-6 lg:px-10",
          solid ? "h-16" : "h-20",
        )}
      >
        <Link
          href="/"
          aria-label="NordRock — home"
          className="flex shrink-0 items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azure"
        >
          <picture>
            <source type="image/webp" srcSet={mark.webp} />
            <img
              src={mark.png}
              alt=""
              width={mark.width}
              height={mark.height}
              className={cn("w-auto transition-[height] duration-500", solid ? "h-7" : "h-9")}
            />
          </picture>
          <span className="font-display text-xl font-bold tracking-tight">NordRock</span>
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <DesktopItem key={item.href} item={item} pathname={pathname} solid={solid} />
            ))}
          </ul>
        </nav>

        <MobileNav open={menuOpen} onOpenChange={setMenuOpen} />
      </div>
    </header>
  );
}

function DesktopItem({
  item,
  pathname,
  solid,
}: {
  item: NavItem;
  pathname: string;
  solid: boolean;
}) {
  const [open, setOpen] = useState(false);
  const active = isActive(pathname, item.href);
  const isCta = item.href === "/contact/";
  const closeTimer = useRef<number>(undefined);

  const linkClass = cn(
    "relative inline-flex items-center gap-1 rounded-full px-3 py-2 text-[0.8125rem] font-medium tracking-wide transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure",
    "after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:bg-gold after:transition-transform after:duration-300",
    active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100",
  );

  if (isCta) {
    return (
      <li className="ml-3">
        <Link
          href={item.href}
          className={cn(
            "rounded-full px-5 py-2.5 text-[0.8125rem] font-semibold transition-colors",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure",
            solid ? "bg-navy text-white hover:bg-navy-700" : "bg-gold text-ink hover:bg-sky",
          )}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  if (!item.children) {
    return (
      <li>
        <Link href={item.href} className={linkClass} aria-current={active ? "page" : undefined}>
          {item.label}
        </Link>
      </li>
    );
  }

  const show = () => {
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  return (
    <li
      className="relative"
      onPointerEnter={show}
      onPointerLeave={hide}
      onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setOpen(false)}
    >
      <button
        type="button"
        className={linkClass}
        aria-expanded={open}
        aria-controls={`menu-${item.label}`}
        onClick={() => setOpen((o) => !o)}
      >
        {item.label}
        <svg
          aria-hidden
          viewBox="0 0 12 12"
          className={cn("size-3 transition-transform", open && "rotate-180")}
        >
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      <div
        id={`menu-${item.label}`}
        className={cn(
          "absolute top-full left-1/2 w-[34rem] -translate-x-1/2 pt-3 transition-all duration-300 ease-out-expo",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
        )}
      >
        <div className="overflow-hidden rounded-2xl bg-white p-3 text-navy shadow-2xl shadow-ink/20 ring-1 ring-navy/5">
          <Link
            href={item.href}
            onClick={() => setOpen(false)}
            className="flex items-center justify-between rounded-xl bg-sky px-4 py-3 text-sm font-semibold hover:bg-sky-300"
          >
            All {item.label.toLowerCase()}
            <span aria-hidden>→</span>
          </Link>
          <ul className="mt-2 grid grid-cols-2 gap-1">
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 transition-colors hover:bg-stone-50 focus-visible:bg-stone-50"
                  aria-current={pathname === child.href ? "page" : undefined}
                >
                  <span className="block text-sm font-semibold">{child.label}</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-stone-500">
                    {child.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
