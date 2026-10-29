// Product pages. Sources: the October 2026 website update brief (hero, problem and
// how-it-works copy), NordRock TECH Component.pdf, NordRock Blockchain & AI MVP.pdf,
// the TraceChain app (public roles and IDs only; the internal design flow is
// confidential) and the public ATiMS repository README and architecture notes.
// No dashes in copy: the client reads them as AI-generated.
import type { HeroMedia } from "@/components/sections/PageHero";

export type ProductPage = {
  slug: string;
  hero: { title: string; intro: string; media: HeroMedia };
  problem: { title: string; body: string };
  /** For products in development: how it will work, shown beside the problem. */
  howItWorks?: string;
  /** The page's main call to action. */
  cta: { label: string; href: string; note?: string };
  /** A required notice shown prominently (e.g. CrowdMine's not-an-offer wording). */
  notice?: string;
  features: { title: string; text: string }[];
  /** The ordered stages a record moves through, shown as an animated journey. */
  journey?: { title: string; stages: string[] };
  audiences: { title: string; text: string }[];
  /** One line on this product's role in the unified ecosystem. */
  role: string;
};

const demo = { label: "Request a demo", href: "/contact/?enquiry=demo" };
const interest = { label: "Register interest", href: "/contact/?enquiry=interest" };

export const productPages: ProductPage[] = [
  {
    slug: "tracechain",
    hero: {
      title: "Mine-to-market traceability, verified on blockchain.",
      intro:
        "TraceChain is NordRock's own traceability platform. Every participant is verified, every batch is recorded and every record can be audited.",
      media: {
        video: "artisanal-field-panorama",
        label: "Artisanal miners working across a wide mining field",
      },
    },
    problem: {
      title: "Minerals change hands many times. Trust usually does not survive the journey.",
      body: "A parcel of tin can pass from a miner to a local buyer, an aggregator, a processor and an exporter before it leaves Nigeria. At each step, paperwork is copied, lost or rewritten. By the time it reaches a smelter, nobody can say for certain where it came from.",
    },
    cta: demo,
    features: [
      {
        title: "Verified participant registry",
        text: "Miners, aggregators, processing centres, assay labs, transporters, freight and security providers register and are approved by inspectors. Each receives a unique Nexus ID.",
      },
      {
        title: "Trace ID for every batch",
        text: "Each batch is tagged at source with a unique Trace ID recording mineral type, weight, grade, location and quality certificates.",
      },
      {
        title: "Tamper-evident ledger",
        text: "Every event is hashed and chained to the one before it, so any change to the history shows immediately.",
      },
      {
        title: "Role-based dashboards",
        text: "Each participant sees and records only what their role requires, while NordRock sees live supply across the network.",
      },
      {
        title: "View-only verification",
        text: "Buyers, investors and government verifiers can confirm a batch's origin and chain of custody without editing rights.",
      },
      {
        title: "Certificates and reports",
        text: "Digital certificates of origin for exported batches, plus ESG, trade and origin reports for regulators and partners.",
      },
    ],
    journey: {
      title: "A batch's journey",
      stages: ["Mined", "Aggregated", "Processed", "Transported", "Exported"],
    },
    audiences: [
      {
        title: "Government and regulators",
        text: "Monitor artisanal and small-scale mining, check origins and align with national export rules.",
      },
      {
        title: "Buyers and refiners",
        text: "Receive conflict-free supply with a chain of custody you can check.",
      },
      {
        title: "Miners and cooperatives",
        text: "Gain a formal identity, fair recognition of output and access to compliant markets.",
      },
    ],
    role: "Records and verifies every mineral batch and every participant.",
  },
  {
    slug: "atims",
    hero: {
      title: "Traceability and compliance for farm produce.",
      intro:
        "ATiMS, our Agro-Trace Integrated Management System, records each farmer, farm and harvest, and checks every batch against the rules of the market it is going to.",
      media: { image: "field-team-meeting", label: "NordRock field team meeting outdoors" },
    },
    problem: {
      title: "Export markets demand proof. Most farm supply chains cannot provide it.",
      body: "Agricultural exports face strict quality, safety and documentation rules that change by destination. Shipments are rejected when records are incomplete. ATiMS builds compliance into every stage, so problems are caught before goods move, not at the border.",
    },
    cta: demo,
    features: [
      {
        title: "Farm-to-buyer traceability",
        text: "Batches and transactions are tracked across dedicated crop and livestock tracks.",
      },
      {
        title: "Compliance stage gates",
        text: "Each stage checks its requirements and holds a batch back until they are met. Compliance is enforced, not just logged.",
      },
      {
        title: "Quality verdicts",
        text: "Lab results are assessed against a library of market standards to give clear quality verdicts.",
      },
      {
        title: "Trade advisor",
        text: "Guidance on non-tariff measures, quality grading and image analysis for each export corridor.",
      },
      {
        title: "Tamper-evident records",
        text: "Records are fingerprinted with SHA-256 hashes, with a permissioned Hyperledger Fabric ledger on the roadmap.",
      },
      {
        title: "Role-based dashboards",
        text: "Farmers, aggregators, processors, transporters and exporters each work from a dashboard built for their role.",
      },
    ],
    journey: {
      title: "The crop track",
      stages: [
        "Harvested",
        "Aggregated",
        "Packed",
        "In transit",
        "At port",
        "Exported",
        "Delivered",
      ],
    },
    audiences: [
      {
        title: "Exporters",
        text: "Fewer rejections, with documents and quality checks done before shipment.",
      },
      {
        title: "Farmers and aggregators",
        text: "Prove the origin and quality of produce to reach better-paying markets.",
      },
      {
        title: "Regulators and buyers",
        text: "Check compliance and origin from farm to destination.",
      },
    ],
    role: "Records each farmer, farm and harvest, from farm gate to buyer.",
  },
  {
    slug: "geoai",
    hero: {
      title: "Know where to look before you dig.",
      intro:
        "GeoAI combines satellite imagery, geological data and observations from our field teams to suggest where to explore first.",
      media: { video: "aerial-exploration", label: "Aerial view over exploration ground" },
    },
    problem: {
      title: "Exploration is slow, costly and often blind.",
      body: "Much of Nigeria's exploration still starts with old geological maps and expensive field surveys. Small licence holders rarely have the budget to do it well.",
    },
    howItWorks:
      "GeoAI combines satellite imagery, geological data and observations from our field teams to suggest where to look first, so survey budgets go further.",
    cta: { ...interest, note: "In development. Register interest to take part in early testing." },
    features: [
      {
        title: "Open data analysis",
        text: "Draws on open geological data and satellite imagery from sources such as USGS and Copernicus.",
      },
      {
        title: "Field observations",
        text: "Adds what our teams see on the ground, so the model learns from real sites.",
      },
      {
        title: "Mineral potential maps",
        text: "Maps that rank where deposits are most likely across Kaduna and nearby states.",
      },
      {
        title: "Site planning",
        text: "Terrain and environmental layers that help plan access, water and power near a site.",
      },
    ],
    audiences: [
      { title: "Exploration teams", text: "Prioritise sites before committing field resources." },
      { title: "Licence holders", text: "Understand the potential of existing mineral titles." },
      { title: "Partners", text: "See the evidence behind a project before it starts." },
    ],
    role: "Suggests where to explore first.",
  },
  {
    slug: "smarttrade",
    hero: {
      title: "Every trade recorded. Every partner scored.",
      intro:
        "SmartTrade uses the transaction history in TraceChain to score each aggregator on delivery, quality and documentation.",
      media: { image: "wash-plant", label: "Wash plant processing ore at a mine site" },
    },
    problem: {
      title: "Trading with fragmented suppliers carries hidden risk.",
      body: "Buyers sourcing artisanal minerals usually deal with many small aggregators, each with a different record on volume, quality and paperwork. Most of that history sits in people's heads.",
    },
    howItWorks:
      "SmartTrade uses the transaction history in TraceChain to score each aggregator on delivery, quality and documentation, so buyers can decide who to trade with and on what terms.",
    cta: { ...interest, note: "In development. Register interest." },
    features: [
      {
        title: "Trade log",
        text: "Each trade is logged on TraceChain alongside the batch it relates to.",
      },
      {
        title: "Aggregator score",
        text: "Aggregators are scored on delivery, quality and documentation, built from their verified history.",
      },
      {
        title: "Risk reports",
        text: "Reports for buyers and partners on supplier performance, generated from verified data.",
      },
    ],
    audiences: [
      { title: "Buyers", text: "Decide who to buy from with an objective, data-backed score." },
      { title: "Aggregators", text: "Build a record that earns better terms." },
      { title: "Partners", text: "Track risk across suppliers in one view." },
    ],
    role: "Scores aggregators and trade partners.",
  },
  {
    slug: "crowdmine",
    hero: {
      title: "Participation in verified mining projects.",
      intro:
        "CrowdMine is being designed to connect vetted mining projects with funders, using TraceChain production data.",
      media: { image: "excavator-track", label: "Excavator moving along a forest track to a mine site" },
    },
    problem: {
      title: "Good mining projects struggle to reach capital. Investors struggle to trust them.",
      body: "Small operators rarely have the records lenders need, and investors have no reliable way to check production.",
    },
    howItWorks:
      "CrowdMine is being designed to connect vetted projects with funders, using TraceChain production data so participants can see how a project is performing.",
    cta: { ...interest, note: "In development. Register interest." },
    notice:
      "CrowdMine is in development and is not open to the public. Nothing on this page is an offer to invest.",
    features: [
      {
        title: "Vetted projects",
        text: "Projects are reviewed before they are listed, using site, production and compliance records.",
      },
      {
        title: "Production data from TraceChain",
        text: "Participants can see what a project is actually producing, not just what it forecasts.",
      },
      {
        title: "Clear records",
        text: "Who took part, and how funds were used, will be recorded and open to review.",
      },
    ],
    audiences: [
      { title: "Project owners", text: "Reach funders with a credible, verified profile." },
      { title: "Funders", text: "See production data before and after taking part." },
      { title: "Communities", text: "Projects that meet ESG standards from the start." },
    ],
    role: "Being designed to connect vetted projects with funders.",
  },
  {
    slug: "greengrid",
    hero: {
      title: "Clean power for mining, measured kilowatt by kilowatt.",
      intro:
        "GreenGrid pairs solar and hybrid systems with metering that records output on TraceChain.",
      media: { image: "plant-machinery", label: "Processing machinery inside a plant" },
    },
    problem: {
      title: "Mining runs on diesel where the grid fails, and the energy footprint is hard to prove.",
      body: "Remote sites depend on diesel generators. Fuel is costly to deliver, and buyers asking about emissions get estimates rather than measurements.",
    },
    howItWorks:
      "GreenGrid pairs solar and hybrid systems with metering that records output on TraceChain, so the energy behind each batch is measured rather than estimated.",
    cta: { label: "Join the pilot list", href: "/contact/?enquiry=pilot", note: "In development. Join the pilot list." },
    features: [
      {
        title: "Solar and hybrid systems",
        text: "Sized for crushers, concentrators and processing plants, with diesel as backup rather than the main supply.",
      },
      {
        title: "Metered output",
        text: "Generation and use are metered and recorded on TraceChain against each site.",
      },
      {
        title: "Energy per batch",
        text: "Buyers can see the measured energy behind the material they purchase.",
      },
    ],
    audiences: [
      { title: "Site operators", text: "Keep plants running while cutting diesel costs." },
      { title: "Buyers", text: "See measured energy data, not estimates." },
      { title: "Host communities", text: "Share in reliable power from nearby systems." },
    ],
    role: "Measures the energy behind each batch.",
  },
];

export const getProductPage = (slug: string) => productPages.find((p) => p.slug === slug);

// The Platforms overview groups products by the industry they serve.
export const platformGroups: { industry: string; href: string; products: string[] }[] = [
  {
    industry: "Metals and Mining",
    href: "/industries/metals-and-mining/",
    products: ["tracechain", "geoai", "smarttrade", "crowdmine"],
  },
  { industry: "Agriculture", href: "/industries/agriculture/", products: ["atims"] },
  { industry: "Renewable Energy", href: "/industries/renewable-energy/", products: ["greengrid"] },
  { industry: "Real Estate and Housing", href: "/industries/real-estate-and-housing/", products: [] },
];
