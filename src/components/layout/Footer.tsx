import Link from "next/link";
import { company, contact, industries, mainNav, products, socials } from "@/content/site";
import { getLogo } from "@/lib/media";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";

const columns = [
  { title: "Company", links: mainNav.filter((i) => !i.children && i.href !== "/") },
  { title: "Industries", links: industries },
  { title: "Products", links: products },
];

export function Footer() {
  const logo = getLogo("nordrock-logo-white");
  return (
    <footer className="relative overflow-hidden bg-ink text-white [--accent:var(--color-sky-300)]">
      {/* Closing call to action */}
      <Container className="border-b border-white/10 py-20 sm:py-28">
        <Reveal className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="font-display max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
            Building Africa&apos;s traceable mineral future.
            <span className="text-sky-300"> Let&apos;s talk.</span>
          </h2>
          <Magnetic>
            <Button href="/contact/">Get in touch</Button>
          </Magnetic>
        </Reveal>
      </Container>

      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)_1.3fr]">
        <div className="max-w-xs">
          <picture>
            <source type="image/webp" srcSet={logo.webp} />
            <img
              src={logo.png}
              alt={company.name}
              width={logo.width}
              height={logo.height}
              className="h-14 w-auto"
            />
          </picture>
          <p className="mt-6 text-sm leading-relaxed text-white/70">{company.description}</p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-xs font-semibold tracking-[0.22em] text-sky-300 uppercase">
              {col.title}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/75 transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3 className="text-xs font-semibold tracking-[0.22em] text-sky-300 uppercase">
            Head office
          </h3>
          <address className="mt-5 space-y-3 text-sm text-white/75 not-italic">
            <a
              href={contact.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-gold"
            >
              {contact.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </a>
            {contact.phones.map((p) => (
              <a key={p.href} href={p.href} className="block hover:text-gold">
                {p.label}
              </a>
            ))}
            <a href={`mailto:${contact.email}`} className="block hover:text-gold">
              {contact.email}
            </a>
          </address>
        </div>
      </Container>

      <Container className="flex flex-col gap-4 border-t border-white/10 py-8 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-6">
          {socials
            .filter((s) => s.href)
            .map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  {s.label}
                </a>
              </li>
            ))}
          <li>
            <Link href="/privacy/" className="hover:text-gold">
              Privacy
            </Link>
          </li>
        </ul>
      </Container>

      {/* Oversized brand wordmark as a background texture */}
      <p
        aria-hidden
        className="font-display pointer-events-none -mb-[0.22em] text-center text-[22vw] leading-none font-bold tracking-tighter text-white/[0.03] select-none"
      >
        NordRock
      </p>
    </footer>
  );
}
