// What We Do copy. Source: the October 2026 website update brief, which replaces the
// live nordrockltd.com/what-we-do text. No dashes in copy.
import type { ImageSlug } from "@/lib/media";

export const model = {
  eyebrow: "Our model",
  title: "Technology, operations and finance, together.",
  pillars: [
    {
      title: "Technology",
      text: "Our own platforms record who produced what, where and when. TraceChain does this for minerals and ATiMS for farm produce.",
      image: "plant-operator",
      alt: "Operator at a processing machine",
    },
    {
      title: "Operations",
      text: "We run the physical side: buying centres, aggregation points, processing, logistics and power.",
      image: "bagged-ore-field",
      alt: "Bagged ore at an aggregation point",
    },
    {
      title: "Finance",
      text: "We bring working capital to producers and structure trade finance against verified supply.",
      image: "gold-nuggets",
      alt: "A handful of gold nuggets",
    },
  ] satisfies { title: string; text: string; image: ImageSlug; alt: string }[],
};

export const intro = {
  eyebrow: "Metals and Mining | What we offer",
  title: "Six services, one supply chain.",
  body: "Most buyers come to us for supply. What makes that supply usable is the work around it: registering miners, moving material safely, processing it properly and keeping records a buyer can check.",
  note: "The service cards and value chain below describe Metals and Mining, the most developed of our industries.",
};

export const services: { title: string; text: string; image: ImageSlug; alt: string }[] = [
  {
    title: "Supply and sourcing",
    text: "We supply more than ten minerals from qualified cooperatives in several regions, so buyers are not dependent on one site.",
    image: "excavator-bagging",
    alt: "Excavator and crew bagging ore at a pit",
  },
  {
    title: "Logistics",
    text: "Specialised vehicles with GPS tracking, and segregated storage so batches are monitored and don't get mixed up.",
    image: "excavators-haul-road",
    alt: "Excavators and a haul truck on a mine road",
  },
  {
    title: "Processing",
    text: "Crushing, grinding, sizing, classification, testing and de-watering, with decisions based on assay data.",
    image: "plant-conveyor",
    alt: "Conveyor and processing equipment inside a plant",
  },
  {
    title: "Artisanal capacity building",
    text: "Training in health, safety and environmental practice, with ongoing technical support at the site.",
    image: "field-crew-sluice",
    alt: "Field crew in safety gear working a sluice",
  },
  {
    title: "Community development",
    text: "Regular meetings with artisanal leaders and cooperatives, followed by training that is repeated, not one-off.",
    image: "artisan-briefing-1",
    alt: "NordRock addressing artisanal miners at an engagement session",
  },
  {
    title: "Advisory",
    text: "Technical, commercial and compliance advice for companies entering the Nigerian minerals sector.",
    image: "site-inspection-team",
    alt: "NordRock team inspecting a mine site",
  },
];

export const valueChain: { title: string; text: string; image: ImageSlug }[] = [
  {
    title: "Extraction",
    text: "Mining at licensed and artisanal sites, with safety and mercury-free practice.",
    image: "excavation-pit",
  },
  {
    title: "Formalisation",
    text: "Miners and cooperatives are registered and verified, and each receives a digital identity on TraceChain.",
    image: "site-office-registration",
  },
  {
    title: "Aggregation",
    text: "Material is collected at buying centres, weighed, bagged and tagged.",
    image: "ore-bagging-crew",
  },
  {
    title: "Processing",
    text: "Concentration and upgrading to the grade the buyer has specified.",
    image: "wash-plant",
  },
  {
    title: "Assay",
    text: "Independent testing, with certificates attached to the batch record.",
    image: "gold-dust-weighing",
  },
  {
    title: "Logistics",
    text: "Tracked transport to port, with every handover logged.",
    image: "excavators-haul-road",
  },
  {
    title: "Export",
    text: "Documentation and delivery to the buyer, who receives the full trace record.",
    image: "gold-nuggets",
  },
];

export const approach = {
  eyebrow: "Our approach",
  title: "Legitimate, structured and sustainable by design.",
  body: "We build supply chains that last because the people in them are paid fairly and on time. That means working with artisanal miners, landowners and host communities on the ground, and backing every step with records that buyers, investors and regulators can verify.",
  points: [
    "Direct engagement with miners, landowners and host communities",
    "Long-term partnerships with continuous training",
    "Conflict-free sourcing and fair pricing",
  ],
};
