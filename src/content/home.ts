// Home page copy. Sources: the live nordrockltd.com home page and the public-safe
// parts of the strategy document (no financial or contract figures; see
// docs/DEVELOPMENT_PLAN.md §1). No dashes in copy.
import type { ImageSlug } from "@/lib/media";

export const intro = {
  eyebrow: "Our goal",
  statement:
    "Creating a legitimate mining ecosystem in Africa: one connected framework that brings artisanal miners, logistics operators, processing facilities, government agencies and local communities into a single coordinated system.",
  body: "Around 85% of mineral activity in Nigeria is artisanal and small-scale. We formalise it, trace it and connect it to global markets, so value stays with the people and places that produce it.",
};

export const stats: { value: number; suffix?: string; label: string }[] = [
  { value: 10, suffix: "+", label: "Minerals supplied to global markets" },
  { value: 61, label: "Mineral titles across Kaduna State through our KMDC partnership" },
  { value: 10, suffix: " ktpa", label: "Planned capacity of our concentration hub" },
  { value: 10000, suffix: "+", label: "Artisanal miners targeted for onboarding" },
];

export const pillars: {
  title: string;
  summary: string;
  points: string[];
  image: ImageSlug;
  alt: string;
}[] = [
  {
    title: "Digital & physical assets",
    summary:
      "A digital trading desk that executes and tracks every trade on blockchain, backed by real processing capacity on the ground.",
    points: [
      "Smart contracts, digital tokens and blockchain tracking",
      "Assay-linked contract optimisation and price indexation",
      "Nigeria's first indigenous critical mineral concentration hub",
    ],
    image: "plant-operator",
    alt: "Operator running mineral processing machinery",
  },
  {
    title: "Artisan engagement",
    summary:
      "Lower-risk sourcing built on artisanal miners who are legal, safe, traceable and fairly paid.",
    points: [
      "Cooperative formalisation and registration with the Mining Cadastre Office",
      "Mercury-free processing, safety training and PPE grants",
      "Zero tolerance for child labour, with third-party auditing",
    ],
    image: "artisan-briefing-2",
    alt: "NordRock briefing a large group of artisanal miners on site",
  },
  {
    title: "Trade finance solutions",
    summary:
      "Next-generation finance that gives artisanal and small-scale miners the capital to execute supply contracts.",
    points: [
      "Tokenised supply contracts open to outside investment",
      "Trade credit for faster cash flow and expansion",
      "Audit and governance guardrails that create bankable assets",
    ],
    image: "gold-dust-weighing",
    alt: "Gold concentrate being weighed on a digital scale",
  },
];

export const productDetails: Record<string, { tagline: string; points: string[] }> = {
  "/products/tracechain/": {
    tagline:
      "Our own mineral traceability platform. Every participant is verified, and every batch carries a unique Trace ID recorded on a blockchain ledger, from pit to buyer.",
    points: [
      "Verified registration for miners, artisans, aggregators, processors, assay labs, logistics, freight and security providers",
      "Unique Nexus ID per participant and Trace ID per mineral batch",
      "View-only access for investors and government verifiers",
    ],
  },
  "/products/atims/": {
    tagline:
      "ATiMS, our Agro-Trace Integrated Management System, brings the same model to agriculture: each farmer, farm and harvest recorded, and every batch checked against its market's rules.",
    points: [
      "Farmer and farm registry with mapped plots",
      "Harvest and batch traceability from farm gate to buyer",
      "Compliance checks and quality verdicts before shipment",
    ],
  },
};

export const hub = {
  eyebrow: "Flagship project",
  title: "Building Nigeria's first indigenous critical mineral concentration hub",
  body: "The hub capitalises on Nigeria's competitive advantage in raw material costs while accessing premium pricing in global critical minerals markets. Beyond processing, it will include mineral testing and quality assurance, creating thousands of jobs.",
  facts: [
    { title: "10 ktpa", text: "Processing capacity targeting international markets" },
    { title: "Bag-and-tag", text: "Blockchain chain of custody from pit to buyer" },
    { title: "Testing and QA", text: "On-site mineral testing and quality assurance" },
    { title: "Thousands", text: "Of direct and indirect job opportunities" },
  ],
};

// Organisations shown on the live site's partner strip, plus offtake partners.
export const partners = [
  "Kaduna State Government",
  "Kaduna Mining Development Company",
  "Ogun State Government",
  "Nigeria Mining Cadastre Office",
  "Ulba Metallurgical Plant",
  "MiRESSO",
  "JETRO",
  "BIO",
  "Austrian Development Agency",
  "Africa Policy Research Institute",
];

export const audiences = [
  {
    title: "Investors",
    text: "Back a traceable, ESG-first critical minerals platform built for the energy transition.",
    href: "/why-us/",
    cta: "Why NordRock",
  },
  {
    title: "Buyers and partners",
    text: "Source verified, conflict-free minerals and build long-term supply with us.",
    href: "/contact/",
    cta: "Start a conversation",
  },
  {
    title: "Artisans and cooperatives",
    text: "Formalise, get trained and access fair markets through our network.",
    href: "/join-us/",
    cta: "Join the network",
  },
];
