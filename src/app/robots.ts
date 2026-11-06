import type { MetadataRoute } from "next";
import { company } from "@/content/site";

// Open to crawlers (and points at the sitemap) on the live build, which sets
// NEXT_PUBLIC_ALLOW_INDEXING=true; every other build blocks them.
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
