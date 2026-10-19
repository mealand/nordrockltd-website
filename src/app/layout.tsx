import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });

// Keep the review deployment (newsite.nordrockltd.com) out of search results.
// Flip NEXT_PUBLIC_ALLOW_INDEXING=true when the site moves to the main domain.
const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const metadata: Metadata = {
  metadataBase: new URL("https://nordrockltd.com"),
  title: {
    default: "NordRock Limited — Critical Minerals, Technology & Renewable Energy",
    template: "%s | NordRock Limited",
  },
  description:
    "NordRock Limited is a Nigerian minerals operations and trading company building a traceable, technology-driven critical minerals ecosystem in Africa.",
  robots: allowIndexing ? undefined : { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
