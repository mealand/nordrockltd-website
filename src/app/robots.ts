import type { MetadataRoute } from "next";
import { company } from "@/content/site";

// Blocks all crawlers on the review build; opens up (and points at the sitemap)
// once NEXT_PUBLIC_ALLOW_INDEXING=true is set for the main domain build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
  return allowIndexing
    ? {
        rules: { userAgent: "*", allow: "/" },
        sitemap: new URL("/sitemap.xml", company.url).toString(),
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
