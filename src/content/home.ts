// Home page copy. Sources: the live nordrockltd.com home page and the public-safe
// parts of the strategy document (no financial or contract figures — see
// docs/DEVELOPMENT_PLAN.md §1).
import type { ImageSlug, VideoSlug } from "@/lib/media";

export const intro = {
  eyebrow: "Our goal",
  statement:
    "NordRock is developing Africa's first integrated mining ecosystem — one connected framework that brings artisanal miners, logistics operators, processing facilities, government agencies and local communities into a single coordinated system.",
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
    image: "tech-hub",
    alt: "Illustration of a digitally monitored mineral processing hub",
  },
  {
    title: "Artisan engagement",
    summary:
      "De-risked sourcing built on empowering artisanal miners — legal, safe, traceable and fairly paid.",
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

export const industryMedia: Record<string, { video: VideoSlug; label: string; points: string[] }> =
  {
    "/industries/mineral-operations/": {
      video: "artisan-pit-mining",
      label: "Artisanal miners working a mineral pit",
      points: ["Extraction", "Sourcing", "Trading", "ASM formalisation"],
    },
    "/industries/technology/": {
      video: "registration-documentation",
      label: "Field registration of miners onto NordRock's digital platform",
      points: ["Blockchain traceability", "AI geospatial analysis", "Digital trade"],
    },
    "/industries/renewable-energy/": {
      video: "site-survey-river",
      label: "Survey of an open mine site landscape",
      points: ["Solar for mine & processing sites", "AI energy optimisation", "Verified ESG data"],
    },
  };

export const productDetails: Record<string, { tagline: string; points: string[] }> = {
  "/products/tracechain/": {
    tagline:
      "Our proprietary mineral traceability network. Every participant is verified, and every batch carries a unique Trace ID recorded on a blockchain ledger — from pit to buyer.",
    points: [
      "Verified registration for miners, artisans, aggregators, processors, assay labs, logistics, freight and security providers",
      "Unique Nexus ID per participant and Trace ID per mineral batch",
      "View-only access for investors and government verifiers",
    ],
  },
  "/products/agrotrace/": {
    tagline:
      "Our Agro-Trace Integrated Management System brings the same rigour to agriculture: traceability, compliance, quality standards and trade facilitation for agricultural exports.",
    points: [
      "End-to-end batch and transaction traceability",
      "Compliance checks and quality verdicts against market standards",
      "Tamper-evident records with AI-assisted quality grading",
    ],
  },
};

export const hub = {
  eyebrow: "Flagship project",
  title: "Building Nigeria's first indigenous critical mineral concentration hub",
  body: "The hub capitalises on Nigeria's competitive advantage in raw material costs while accessing premium pricing in global critical minerals markets. Beyond processing, it will include mineral testing and quality assurance — creating thousands of job opportunities.",
  facts: [
    { title: "10 ktpa", text: "Processing capacity targeting international markets" },
    { title: "Bag-and-tag", text: "Blockchain chain of custody from pit to buyer" },
    { title: "Testing & QA", text: "On-site mineral testing and quality assurance" },
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
    href: "/why-choose-us/",
    cta: "Why NordRock",
  },
  {
    title: "Buyers & partners",
    text: "Source verified, conflict-free minerals and build long-term supply with us.",
    href: "/contact/",
    cta: "Start a conversation",
  },
  {
    title: "Artisans & cooperatives",
    text: "Formalise, get trained and access fair markets through our network.",
    href: "/join-us/",
    cta: "Join the network",
  },
];
