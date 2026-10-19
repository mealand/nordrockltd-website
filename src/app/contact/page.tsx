import type { Metadata } from "next";
import { ContactFormSection } from "@/components/contact/ContactForm";
import { PageTransition } from "@/components/motion/PageTransition";
import { Reveal } from "@/components/motion/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Get In Touch",
  description:
    "Contact NordRock Limited in Abuja — investor, partnership, supply, media, careers and artisan enquiries.",
};

const routes = [
  {
    title: "Investors",
    text: "Partnership and investment opportunities across our projects and platforms.",
  },
  {
    title: "Buyers & suppliers",
    text: "Offtake, supply contracts, processing and logistics partnerships.",
  },
  { title: "Media", text: "Interviews, press information and company background." },
];

export default function Page() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Get in touch"
        title="Let's talk."
        intro="Investor, partnership, media and general enquiries — we'd like to hear from you."
        media={{ image: "field-team-meeting", label: "NordRock field team meeting outdoors" }}
      />

      <Section>
        <Container className="grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div>
            <Reveal y={16}>
              <Eyebrow>Head office</Eyebrow>
              <h2 className="font-display mt-5 text-3xl leading-[1.1] font-semibold tracking-tight sm:text-4xl">
                NordRock Limited
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <address className="mt-8 space-y-6 not-italic">
                <a
                  href={contact.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-3xl bg-navy p-7 text-white transition-colors hover:bg-navy-700"
                >
                  <p className="text-xs font-semibold tracking-[0.22em] text-sky-300 uppercase">
                    Visit us
                  </p>
                  <p className="font-display mt-3 text-lg leading-snug font-medium">
                    {contact.address.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    Open in Google Maps
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </span>
                </a>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="rounded-3xl bg-stone-50 p-7 ring-1 ring-navy/5">
                    <p className="text-xs font-semibold tracking-[0.22em] text-azure-700 uppercase">
                      Call
                    </p>
                    {contact.phones.map((p) => (
                      <a
                        key={p.href}
                        href={p.href}
                        className="font-display mt-3 block text-lg font-medium hover:text-azure-700"
                      >
                        {p.label}
                      </a>
                    ))}
                  </div>
                  <div className="rounded-3xl bg-stone-50 p-7 ring-1 ring-navy/5">
                    <p className="text-xs font-semibold tracking-[0.22em] text-azure-700 uppercase">
                      Email
                    </p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-display mt-3 block text-lg font-medium break-all hover:text-azure-700"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              </address>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-10 divide-y divide-stone-200 border-y border-stone-200">
                {routes.map((r) => (
                  <li key={r.title} className="py-4">
                    <p className="font-display font-semibold">{r.title}</p>
                    <p className="mt-1 text-sm text-stone-500">{r.text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal
            delay={0.1}
            className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-navy/10 ring-1 ring-navy/5 sm:p-10"
          >
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Send us a message
            </h2>
            <p className="mt-2 mb-8 text-sm text-stone-500">
              Fields marked <span className="text-red-700">*</span> are required. We usually reply
              within two working days.
            </p>
            <ContactFormSection />
          </Reveal>
        </Container>
      </Section>
    </PageTransition>
  );
}
