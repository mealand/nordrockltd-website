// Company details and navigation. Edit copy here, not in components.

export const company = {
  name: "NordRock Limited",
  shortName: "NordRock",
  tagline: "Africa's First Mining Enterprise Based on Asset-Backed Blockchain Technology",
  description:
    "NordRock Limited is a Nigerian indigenous minerals operations and trading company building a traceable, technology-driven critical minerals ecosystem in Africa.",
  url: "https://nordrockltd.com",
  founded: "2025",
} as const;

export const contact = {
  address: {
    lines: ["47, Sen. Ashiru Drive", "Lavista Court, Galadimawa", "Abuja, Nigeria"],
    mapUrl: "https://maps.app.goo.gl/zWpyHRKqGCyHx27C9",
  },
  phones: [
    { label: "+234 816 155 3888", href: "tel:+2348161553888" },
    { label: "+32 496 761 010", href: "tel:+32496761010" },
  ],
  email: "contact@nordrockltd.com",
} as const;

// Empty until the company shares its official profiles; the footer hides
// any entry without an href.
export const socials: { label: string; href: string }[] = [];

export type NavChild = { label: string; href: string; description: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const industries: NavChild[] = [
  {
    label: "Mineral Operations",
    href: "/industries/mineral-operations/",
    description: "Extraction, sourcing, trading and ASM formalization.",
  },
  {
    label: "Technology",
    href: "/industries/technology/",
    description: "Blockchain and AI solutions to complex global problems.",
  },
  {
    label: "Renewable Energy",
    href: "/industries/renewable-energy/",
    description: "Innovation around Nigeria's solar power revolution.",
  },
];

export type Product = NavChild & {
  status: "live" | "in-development";
  /** Public app URL for live products. */
  url?: string;
};

export const products: Product[] = [
  {
    label: "TraceChain",
    href: "/products/tracechain/",
    description: "Blockchain mineral traceability from pit to buyer.",
    status: "live",
    url: "https://tracechain.nordrockltd.com",
  },
  {
    label: "AgroTrace",
    href: "/products/agrotrace/",
    description: "Traceability and compliance for agricultural trade.",
    status: "live",
    url: "https://agrotrace.nordrockltd.com",
  },
  {
    label: "GeoAI",
    href: "/products/geoai/",
    description: "AI-assisted mapping of mineral potential.",
    status: "in-development",
  },
  {
    label: "SmartTrade",
    href: "/products/smarttrade/",
    description: "Verified trades with AI reliability scoring.",
    status: "in-development",
  },
  {
    label: "CrowdMine",
    href: "/products/crowdmine/",
    description: "Blockchain-secured participation in verified mining projects.",
    status: "in-development",
  },
  {
    label: "GreenGrid",
    href: "/products/greengrid/",
    description: "AI-optimized renewable power with on-chain impact data.",
    status: "in-development",
  },
];

// Menu order follows the brief.
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "What We Do", href: "/what-we-do/" },
  { label: "Who We Are", href: "/who-we-are/" },
  { label: "Industries", href: "/industries/", children: industries },
  { label: "Products", href: "/products/", children: products },
  { label: "Why Choose Us", href: "/why-choose-us/" },
  { label: "Join Us", href: "/join-us/" },
  { label: "Get In Touch", href: "/contact/" },
];
