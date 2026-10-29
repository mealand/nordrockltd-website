"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { contact, mainNav } from "@/content/site";
import { cn, isActive } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Hamburger button plus full-screen overlay menu, below the xl breakpoint. */
export function MobileNav({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const pathname = usePathname();
  const lenis = useLenis();
  const [expanded, setExpanded] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close after navigating.
  useEffect(() => onOpenChange(false), [pathname, onOpenChange]);

  // Freeze page scroll, close on Escape, and return focus to the button.
  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    const button = buttonRef.current;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onOpenChange(false);
    window.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      button?.focus();
    };
  }, [open, lenis, onOpenChange]);

  return (
    <div className="xl:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => onOpenChange(!open)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className={cn(
          "relative z-[60] grid size-11 place-items-center rounded-full transition-colors",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure",
          open && "text-white",
        )}
      >
        <span aria-hidden className="relative block h-3.5 w-6">
          <span
            className={cn(
              "absolute left-0 h-0.5 w-6 bg-current transition-all duration-300",
              open ? "top-1.5 rotate-45" : "top-0",
            )}
          />
          <span
            className={cn(
              "absolute left-0 h-0.5 bg-current transition-all duration-300",
              open ? "top-1.5 w-6 -rotate-45" : "top-3 w-4",
            )}
          />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-navy px-4 pt-24 pb-10 text-white sm:px-6"
            initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            transition={{ duration: 0.7, ease: EASE }}
            data-lenis-prevent
          >
            <nav aria-label="Main">
              <motion.ul
                className="divide-y divide-white/10 border-y border-white/10"
                initial="hidden"
                animate="shown"
                variants={{ shown: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } } }}
              >
                {mainNav.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={{ hidden: { opacity: 0, y: 24 }, shown: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.6, ease: EASE }}
                  >
                    {item.children ? (
                      <>
                        <button
                          type="button"
                          className="font-display flex w-full items-center justify-between py-4 text-2xl font-semibold"
                          aria-expanded={expanded === item.href}
                          onClick={() => setExpanded((e) => (e === item.href ? null : item.href))}
                        >
                          {item.label}
                          <span
                            aria-hidden
                            className={cn(
                              "text-royal-300 transition-transform",
                              expanded === item.href && "rotate-45",
                            )}
                          >
                            +
                          </span>
                        </button>
                        <AnimatePresence initial={false}>
                          {expanded === item.href && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: EASE }}
                              className="overflow-hidden"
                            >
                              {[
                                { label: `All ${item.label.toLowerCase()}`, href: item.href },
                                ...item.children,
                              ].map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className="block py-2.5 pl-4 text-base text-sky-300 hover:text-white"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                              <li className="h-3" aria-hidden />
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        aria-current={isActive(pathname, item.href) ? "page" : undefined}
                        className={cn(
                          "font-display block py-4 text-2xl font-semibold",
                          isActive(pathname, item.href) && "text-royal-300",
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            <motion.div
              className="mt-auto space-y-1 pt-10 text-sm text-sky-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a href={`mailto:${contact.email}`} className="block hover:text-white">
                {contact.email}
              </a>
              {contact.phones.map((p) => (
                <a key={p.href} href={p.href} className="block hover:text-white">
                  <span className="mr-2 text-xs font-semibold text-sky-300">{p.region}</span>
                  {p.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
