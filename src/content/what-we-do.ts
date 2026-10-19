// What We Do copy. Source: the live nordrockltd.com/what-we-do page (typos fixed),
// extended with the public-safe operating model from the strategy document.
import type { ImageSlug } from "@/lib/media";

export const intro = {
  eyebrow: "What we offer",
  title: "Structured, technology-enabled solutions across the commodities value chain.",
  body: "We formalise production, connect supply to global markets, and provide expert advisory services that enable transparent, scalable and profitable commodities operations.",
};

export const services: { title: string; text: string; image: ImageSlug; alt: string }[] = [
  {
    title: "Supply & sourcing",
    text: "We supply more than 10 minerals globally, with MOUs across multiple qualified suppliers in different regions to reduce dependency on any single source.",
    image: "excavator-bagging",
    alt: "Excavator and crew bagging ore at a pit",
  },
  {
    title: "Logistics",
    text: "GPS-tracked specialised vehicles with real-time monitoring move minerals safely, into climate-controlled storage with 24/7 surveillance and segregated containment.",
    image: "excavators-haul-road",
    alt: "Excavators and a haul truck on a mine road",
  },
  {
    title: "Processing",
    text: "Algorithm-supported, end-to-end processing and objective decision making — crushing and grinding, sizing and classification, testing and de-watering.",
    image: "smelting-furnace",
    alt: "Mineral concentrate being smelted in a furnace",
  },
  {
    title: "Artisanal capacity building",
    text: "Training for artisans in HSE and ESG compliance, with ongoing capacity building and technical support for artisanal miners.",
    image: "site-office-registration",
    alt: "Artisanal miners completing registration at a site office",
  },
  {
    title: "Artisan empowerment & community development",
    text: "Stakeholder meetings and training cycles for ASM leaders and cooperatives, alongside recurring training and sensitisation programmes.",
    image: "artisan-briefing-1",
    alt: "NordRock addressing artisanal miners at an engagement session",
  },
  {
    title: "Consulting & facilitation",
    text: "Consultancy, advisory, technical and management services for participants across the commodities industry, marketing and trading segments.",
    image: "boardroom-meeting",
    alt: "Illustration of a stakeholder meeting around a boardroom table",
  },
];

export const valueChain: { title: string; text: string; image: ImageSlug }[] = [
  {
    title: "Extraction",
    text: "Responsible mining at licensed and artisanal sites, with safety and mercury-free practices.",
    image: "excavation-pit",
  },
  {
    title: "Formalisation",
    text: "Miners and cooperatives are registered and verified, each receiving a digital identity on TraceChain.",
    image: "field-team-meeting",
  },
  {
    title: "Aggregation",
    text: "Verified collection from registered producers into reliable, compliant supply streams.",
    image: "ore-bagging-crew",
  },
  {
    title: "Bag & tag",
    text: "Every batch is weighed and tagged at source with a unique Trace ID recorded on blockchain.",
    image: "ore-weighing",
  },
  {
    title: "Processing",
    text: "Concentration and value-enhancement that prepare minerals for market.",
    image: "wash-plant",
  },
  {
    title: "Testing & QA",
    text: "Assay and quality assurance so every shipment meets buyer specifications.",
    image: "gold-dust-weighing",
  },
  {
    title: "Market access",
    text: "Price discovery, logistics coordination and trade finance connect supply to the right buyers.",
    image: "gold-nuggets",
  },
];

export const deliverables = [
  {
    title: "Sourcing",
    text: "We identify, aggregate and secure commodities from verified producers, creating reliable supply streams that meet commercial and regulatory standards.",
  },
  {
    title: "Transformation",
    text: "We manage processing and value-enhancement activities that prepare commodities for market, ensuring consistency, quality and market readiness.",
  },
  {
    title: "Compliance",
    text: "We formalise supply chains through licensing, permits, traceability and risk controls, enabling lawful participation in domestic and international markets.",
  },
  {
    title: "Market access",
    text: "We connect commodities to the right buyers through price discovery, market intelligence, logistics coordination and trade finance support.",
  },
];

export const approach = {
  eyebrow: "Our approach",
  title: "Legitimate, structured and sustainable — by design.",
  body: "We build commodities systems that unlock long-term value for producers, partners and markets. That means working on the ground with artisanal miners, landowners and host communities, and backing every step with data that buyers, investors and regulators can verify.",
  points: [
    "Grassroots operations intelligence from direct engagement with miners and communities",
    "Long-term partnerships with continuous capacity building",
    "Conflict-free sourcing and fair pricing mechanisms",
  ],
};
