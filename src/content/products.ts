// Product pages. Sources: NordRock TECH Component.pdf, NordRock Blockchain & AI MVP.pdf,
// the TraceChain app (public roles and IDs only — the internal design flow is
// confidential) and the public AgroTrace (ATiMS) repository README and architecture notes.
import type { HeroMedia } from "@/components/sections/PageHero";

export type ProductPage = {
  slug: string;
  hero: { title: string; intro: string; media: HeroMedia };
  problem: { title: string; body: string };
  features: { title: string; text: string }[];
  /** The ordered stages a record moves through, shown as an animated journey. */
  journey?: { title: string; stages: string[] };
  audiences: { title: string; text: string }[];
  /** One line on this product's role in the unified ecosystem. */
  role: string;
};

export const productPages: ProductPage[] = [
  {
    slug: "tracechain",
    hero: {
      title: "Mine-to-market traceability, verified on blockchain.",
      intro:
        "NordRock TraceChain is our proprietary mineral traceability network: every participant verified, every batch recorded, every record auditable.",
      media: {
        video: "registration-documentation",
        label: "Field registration of artisanal miners onto TraceChain",
      },
    },
    problem: {
      title: "Minerals change hands many times. Trust usually doesn't survive the journey.",
      body: "Between the pit and the buyer, minerals pass through artisans, aggregators, processors, labs, transporters and exporters. Paper records break down, origins blur and illegal material slips in. TraceChain gives every participant a verified identity and every batch a tamper-evident history.",
    },
    features: [
      {
        title: "Verified participant registry",
        text: "Miners, artisans, aggregators, processing centres, assay labs, in-land logistics, freight and security providers register and are approved by inspectors. Each receives a unique Nexus ID.",
      },
      {
        title: "Trace ID for every batch",
        text: "Each batch is tagged at source with a unique Trace ID recording mineral type, weight, grade, location and quality certificates.",
      },
      {
        title: "Tamper-evident ledger",
        text: "Every event is hashed and chained to the one before it, so any change to the history is immediately detectable.",
      },
      {
        title: "Role-based dashboards",
        text: "Each participant sees and records only what their role requires, while NordRock HQ sees live supply across the network.",
      },
      {
        title: "View-only verification",
        text: "Investors, buyers and government verifiers can confirm a batch's origin and chain of custody without editing rights.",
      },
      {
        title: "Certificates & compliance reports",
        text: "Digital certificates of origin for exported batches, plus ESG, trade and origin reports for regulators and partners.",
      },
    ],
    journey: {
      title: "A batch's journey",
      stages: ["Mined", "Aggregated", "Processed", "Transported", "Exported"],
    },
    audiences: [
      {
        title: "Government & regulators",
        text: "Monitor artisanal and small-scale mining, validate origins and align with national export frameworks.",
      },
      {
        title: "Buyers & refiners",
        text: "Receive conflict-free supply with a verifiable chain of custody.",
      },
      {
        title: "Miners & cooperatives",
        text: "Gain a formal identity, fair recognition of output and access to compliant markets.",
      },
    ],
    role: "Logs and verifies every mineral and every participant in the ecosystem.",
  },
  {
    slug: "agrotrace",
    hero: {
      title: "Traceability and compliance for agricultural trade.",
      intro:
        "AgroTrace — our Agro-Trace Integrated Management System — brings blockchain and AI to agricultural exports: traceability, compliance, quality standards and trade facilitation.",
      media: { image: "field-team-meeting", label: "NordRock field team meeting outdoors" },
    },
    problem: {
      title: "Export markets demand proof. Most agricultural supply chains can't provide it.",
      body: "Agricultural exports face strict quality, safety and documentation requirements, and non-tariff measures that change by destination. Shipments are rejected when records are incomplete. AgroTrace builds compliance into every stage, so problems are caught before goods move — not at the border.",
    },
    features: [
      {
        title: "End-to-end traceability",
        text: "Batches and transactions are tracked across dedicated crop and livestock supply chain tracks.",
      },
      {
        title: "Active compliance stage gates",
        text: "Each stage checks its requirements and blocks progression until they are met — compliance is enforced, not just logged.",
      },
      {
        title: "Quality verdicts",
        text: "Lab results are assessed against a library of market standards to produce clear quality verdicts.",
      },
      {
        title: "AI trade advisor",
        text: "AI-assisted guidance on non-tariff measures, quality grading and image analysis for each export corridor.",
      },
      {
        title: "Tamper-evident records",
        text: "Records are fingerprinted with SHA-256 hashes, with a roadmap to a permissioned Hyperledger Fabric ledger.",
      },
      {
        title: "Role-based dashboards",
        text: "Farmers, aggregators, processors, logistics providers and exporters each work from a dashboard built for their role.",
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
        text: "Reduce rejections with documentation and quality checks completed before shipment.",
      },
      {
        title: "Farmers & aggregators",
        text: "Prove the origin and quality of produce to reach better-paying markets.",
      },
      {
        title: "Regulators & buyers",
        text: "Verify compliance and provenance from farm to destination.",
      },
    ],
    role: "Extends NordRock's traceability model from minerals to agriculture.",
  },
  {
    slug: "geoai",
    hero: {
      title: "AI that maps where minerals are likely to be.",
      intro:
        "NordRock GeoAI uses AI-assisted geospatial analysis to identify mineral-rich zones and prioritise exploration.",
      media: { video: "site-survey-river", label: "Survey of an open mine site landscape" },
    },
    problem: {
      title: "Exploration is slow, costly and often blind.",
      body: "Much of Nigeria's mineral potential is under-surveyed. GeoAI turns open geological data and satellite imagery into probability maps, so exploration effort goes where it is most likely to pay off.",
    },
    features: [
      {
        title: "Open data analysis",
        text: "Analyses open-source geological data and satellite imagery from sources such as USGS and Copernicus.",
      },
      {
        title: "Pattern detection",
        text: "Machine-learning models detect geological patterns correlated with mineral deposits.",
      },
      {
        title: "Mineral potential maps",
        text: "Heat maps and probability maps of mineral potential across Kaduna and surrounding states.",
      },
      {
        title: "Energy & terrain insight",
        text: "Environmental and terrain analysis to identify ideal sites for solar or hydro power near mines.",
      },
    ],
    audiences: [
      { title: "Exploration teams", text: "Prioritise sites before committing field resources." },
      { title: "Leaseholders", text: "Understand the potential of existing mineral titles." },
      { title: "Investors", text: "See data-backed evidence behind project opportunities." },
    ],
    role: "Identifies promising exploration and extraction sites.",
  },
  {
    slug: "smarttrade",
    hero: {
      title: "Every trade verified. Every partner scored.",
      intro:
        "NordRock SmartTrade combines TraceChain records with AI to verify transactions and score the reliability of each aggregator.",
      media: { image: "ore-weighing", label: "Bagged ore being weighed at a buying point" },
    },
    problem: {
      title: "Trading with fragmented suppliers carries hidden risk.",
      body: "Quality, consistency and honesty vary widely between aggregators. SmartTrade turns each partner's verified history into an objective reliability score, so good actors are rewarded and risk is visible.",
    },
    features: [
      {
        title: "On-chain trade log",
        text: "Each trade is logged on the TraceChain ledger alongside the batch it relates to.",
      },
      {
        title: "AI reliability score",
        text: "Aggregators are scored on consistency, quality and past records — with sites using renewable power earning higher trust.",
      },
      {
        title: "Transparency reports",
        text: "Reports for investor transparency and internal risk tracking, generated from verified data.",
      },
    ],
    audiences: [
      {
        title: "Buying centres",
        text: "Decide who to buy from with objective, data-backed scores.",
      },
      { title: "Aggregators", text: "Build a verifiable reputation that opens better terms." },
      { title: "Investors", text: "Track risk across supply partners in one view." },
    ],
    role: "Scores aggregators and trade partners for trust and risk.",
  },
  {
    slug: "crowdmine",
    hero: {
      title: "Participation in verified mining projects.",
      intro:
        "NordRock CrowdMine is a blockchain-secured platform through which investors can participate in vetted mining and processing projects.",
      media: { image: "boardroom-meeting", label: "Illustration of a stakeholder meeting" },
    },
    problem: {
      title: "Good mining projects struggle to reach capital. Investors struggle to trust them.",
      body: "CrowdMine lists only projects validated by GeoAI, TraceChain and SmartTrade, and records how every contribution is used — bringing transparency to project finance in the minerals sector.",
    },
    features: [
      {
        title: "Verified project listings",
        text: "Each project is presented with its location, resource, expected output and ESG compliance data.",
      },
      {
        title: "Blockchain ownership records",
        text: "Participation is recorded on a blockchain ledger for transparent ownership verification.",
      },
      {
        title: "AI risk assessment",
        text: "Each project's geological potential, team, track record and environmental factors inform an AI risk score.",
      },
      {
        title: "Tracked disbursements",
        text: "Investors can follow how capital is used through on-chain disbursements and project updates.",
      },
    ],
    audiences: [
      {
        title: "Investors",
        text: "Access vetted opportunities with full visibility of how funds are used.",
      },
      { title: "Project owners", text: "Reach capital with a credible, verified profile." },
      {
        title: "Communities",
        text: "Benefit from projects that meet ESG standards from the outset.",
      },
    ],
    role: "Opens opportunities validated by the other platforms to investors.",
  },
  {
    slug: "greengrid",
    hero: {
      title: "Clean power for mining, verified kilowatt by kilowatt.",
      intro:
        "NordRock GreenGrid is a blockchain-verified, AI-optimised renewable energy system powering mining and processing sites.",
      media: { image: "excavators-haul-road", label: "Sunlit mine haul road with excavators" },
    },
    problem: {
      title: "Mining runs on diesel where the grid fails — and ESG claims are hard to prove.",
      body: "GreenGrid pairs solar microgrids with IoT monitoring, AI optimisation and on-chain records, cutting energy costs while producing ESG data investors and regulators can trust.",
    },
    features: [
      {
        title: "AI energy optimisation",
        text: "Monitors power use across facilities, predicts demand and balances renewable, grid and diesel inputs automatically.",
      },
      {
        title: "On-chain energy tracking",
        text: "Renewable generation is recorded on-chain, supporting carbon credit certification and proof of ESG compliance.",
      },
      {
        title: "Investor co-funding",
        text: "Renewable installations can be co-funded through CrowdMine, with smart contracts managing shared savings.",
      },
      {
        title: "ESG analytics dashboard",
        text: "Real-time carbon savings, renewable share and community energy impact.",
      },
    ],
    audiences: [
      {
        title: "Site operators",
        text: "Keep crushers and plants running while cutting diesel costs.",
      },
      { title: "Investors", text: "See verified environmental impact, not estimates." },
      { title: "Host communities", text: "Share in reliable power from nearby microgrids." },
    ],
    role: "Provides verified ESG and carbon data across all operations.",
  },
];

export const getProductPage = (slug: string) => productPages.find((p) => p.slug === slug);

// Order of the unified ecosystem flow on the overview page.
export const ecosystemFlow = ["geoai", "tracechain", "smarttrade", "crowdmine", "greengrid"];
