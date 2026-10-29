import type { Metadata } from "next";
import { Mulish, Roboto } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { company, contact } from "@/content/site";
import { getLogo } from "@/lib/media";
import "./globals.css";

// The original nordrockltd.com typography: Muli (now Mulish) for headings and menus, Roboto for body copy.
const mulish = Mulish({ variable: "--font-mulish", subsets: ["latin"] });
const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"], weight: ["300", "400", "500", "700"] });

// Keep the review deployment (newsite.nordrockltd.com) out of search results.
// Flip NEXT_PUBLIC_ALLOW_INDEXING=true when the site moves to the main domain.
const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} | Metals and Mining, Agriculture, Renewable Energy and Real Estate`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  robots: allowIndexing ? undefined : { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName: company.name,
    locale: "en_NG",
    images: [{ url: "/media/images/wash-plant-1080.jpg", width: 1080, height: 810 }],
  },
  twitter: { card: "summary_large_image" },
};

// Organization structured data for search engines.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: company.url,
  logo: new URL("/media/logos/nordrock-logo.png", company.url).toString(),
  description: company.description,
  foundingDate: "2025-09-03",
  email: contact.email,
  telephone: contact.phones.map((p) => p.label),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${contact.address.lines[0]}, ${contact.address.lines[1]}`,
    addressLocality: "Abuja",
    addressCountry: "NG",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const mark = getLogo("nordrock-mark");

  return (
    <html lang="en" className={`${mulish.variable} ${roboto.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-royal px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Header mark={mark} />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
