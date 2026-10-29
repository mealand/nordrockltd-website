// Company details and navigation. Edit copy here, not in components.

export const company = {
  name: "NordRock Limited",
  shortName: "NordRock",
  rcNumber: "RC 8789381",
  tagline: "Traceable supply chains, built in Nigeria.",
  description:
    "NordRock Limited (RC 8789381) is a Nigerian-owned company building traceable supply chains in metals and mining, agriculture, renewable energy and real estate & housing.",
  url: "https://nordrockltd.com",
  founded: "2025",
} as const;

export const contact = {
  address: {
    lines: ["47, Sen. Ashiru Drive", "Lavista Court, Galadimawa", "Abuja, Nigeria"],
    mapUrl: "https://maps.app.goo.gl/zWpyHRKqGCyHx27C9",
  },
  phones: [
    { region: "Nigeria", label: "+234 816 155 3888", href: "tel:+2348161553888" },
    { region: "Europe", label: "+32 496 761 010", href: "tel:+32496761010" },
  ],
  email: "contact@nordrockltd.com",
  reportEmail: "report@nordrockltd.com",
} as const;

// The footer hides any entry without an href.
export const socials: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/nordrock-limited/" },
];

export type NavChild = { label: string; href: string; description: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export type IndustryStatus = "operating" | "in-development" | "coming-soon";

export const industries: (NavChild & { status: IndustryStatus })[] = [
  {
    label: "Metals and Mining",
    href: "/industries/metals-and-mining/",
    description: "Gold and critical minerals from registered artisanal miners, traced on TraceChain.",
    status: "operating",
  },
  {
    label: "Agriculture",
    href: "/industries/agriculture/",
    description: "Produce from small-scale farmers, traced on ATiMS.",
    status: "operating",
  },
  {
    label: "Renewable Energy",
    href: "/industries/renewable-energy/",
    description: "Solar and hybrid power for mining sites and processing plants. In development.",
    status: "in-development",
  },
  {
    label: "Real Estate and Housing",
    href: "/industries/real-estate-and-housing/",
    description: "Coming soon.",
    status: "coming-soon",
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
    description: "Mine-to-market traceability for minerals, verified on blockchain.",
    status: "live",
    url: "https://tracechain.nordrockltd.com",
  },
  {
    label: "ATiMS",
    href: "/products/atims/",
    description: "Agro-Trace Integrated Management System: farm-to-buyer traceability for produce.",
    status: "live",
    url: "https://agrotrace.nordrockltd.com",
  },
  {
    label: "GeoAI",
    href: "/products/geoai/",
    description: "Satellite, geological and field data to show where to explore first.",
    status: "in-development",
  },
  {
    label: "SmartTrade",
    href: "/products/smarttrade/",
    description: "Scores aggregators on delivery, quality and documentation.",
    status: "in-development",
  },
  {
    label: "CrowdMine",
    href: "/products/crowdmine/",
    description: "Connecting vetted mining projects with funders. Not open to the public.",
    status: "in-development",
  },
  {
    label: "GreenGrid",
    href: "/products/greengrid/",
    description: "Solar and hybrid power with metered output recorded on TraceChain.",
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
  { label: "Why Us", href: "/why-us/" },
  { label: "Join Us", href: "/join-us/" },
  { label: "Get In Touch", href: "/contact/" },
];

// Legal and policy pages linked from the footer's bottom bar.
export const legalLinks = [
  { label: "Compliance", href: "/compliance/" },
  { label: "Privacy policy", href: "/privacy/" },
  { label: "Terms of use", href: "/terms/" },
  { label: "Cookie notice", href: "/cookies/" },
];
