import type { MetadataRoute } from "next";

// Blocks all crawlers on the review build; opens up once
// NEXT_PUBLIC_ALLOW_INDEXING=true is set for the main domain build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
  return allowIndexing
    ? { rules: { userAgent: "*", allow: "/" } }
    : { rules: { userAgent: "*", disallow: "/" } };
}
