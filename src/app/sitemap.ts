import type { MetadataRoute } from "next";
import { industryPages } from "@/content/industries";
import { productPages } from "@/content/products";
import { company } from "@/content/site";

export const dynamic = "force-static";

const pages = [
  "/",
  "/what-we-do/",
  "/who-we-are/",
  "/industries/",
  ...industryPages.map((i) => `/industries/${i.slug}/`),
  "/products/",
  ...productPages.map((p) => `/products/${p.slug}/`),
  "/why-us/",
  "/join-us/",
  "/contact/",
  "/compliance/",
  "/privacy/",
  "/terms/",
  "/cookies/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.map((path) => ({
    url: new URL(path, company.url).toString(),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length > 3 ? 0.6 : 0.8,
  }));
}
