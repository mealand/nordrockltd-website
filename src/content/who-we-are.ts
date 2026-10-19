// Who We Are copy. Sources: the live nordrockltd.com/who-we-are page (typos fixed),
// Website/Website Contents.pdf (vision, mission, values, governance), the
// certificate of incorporation and KMDC letter of intent (dates), and the
// public-safe milestones from the strategy document (no figures).
import type { ImageSlug, VideoSlug } from "@/lib/media";

export const overview = {
  eyebrow: "NordRock Limited",
  title: "A Nigerian indigenous minerals company, built on partnership and execution.",
  body: [
    "NordRock Limited is a Nigerian indigenous minerals operations and trading company unlocking Nigeria's vast mineral endowment. We deal in strategic, critical minerals — including copper, lithium, beryllium, coltan and nickel — that power the energy transition, technology and defence.",
    "We collaborate with artisanal miners, mining leaseholders and landowners — whether active, dormant or under capacity — to structure bankable projects, mobilise capital, and deploy modern processing and operational discipline.",
  ],
  quote:
    "Actively de-risking sourcing and supply, enhancing artisanal skills, protecting long-term investments and introducing unparalleled innovation to the critical mineral industry.",
};

export const vision =
  "To transform Africa's commodities trading sector into a globally competitive powerhouse by creating structured, sustainable and profitable systems that empower producers, governments and markets.";

export const mission = {
  intro:
    "At NordRock, we harmonise the capacities, characteristics and currency of commodities through innovative structures and models that:",
  points: [
    "Formalise and legitimise Africa's commodities markets",
    "Unlock fair value for producers and participants",
    "Propel renewable energy, metals and minerals into global relevance",
    "Deliver sustainable prosperity to stakeholders, communities and nations",
  ],
};

export const values = [
  {
    title: "Integrity & legitimacy",
    text: "We pioneer lawful, transparent and ethical systems that disincentivise informal and illegal trade.",
  },
  {
    title: "Innovation & structure",
    text: "We design modern models and technology-powered solutions that standardise and scale commodities operations.",
  },
  {
    title: "Empowerment & equity",
    text: "We champion fair trade and inclusivity for small and medium-scale producers and emerging markets.",
  },
  {
    title: "Sustainability & responsibility",
    text: "We prioritise long-term value creation for customers, partners, communities and the environment.",
  },
  {
    title: "Excellence & leadership",
    text: "We are committed to expertise, bold strategy and setting new standards in global commodities trading.",
  },
];

export const challenges = {
  eyebrow: "What we solve",
  title: "Turning Africa's critical mineral sector into a globally competitive powerhouse.",
  body: "NordRock has developed the strategies, structures and partnerships to solve the major challenges in Africa's minerals sector.",
  items: [
    "Conflict-free mineral sourcing",
    "Reliable traceability across the value chain",
    "Transparent and ethical mineral operations",
    "ESG and HSE compliant mining",
    "Fair pricing mechanisms",
    "Empowerment and technical support for artisanal miners",
    "Efficient community development",
  ],
};

export const focusAreas: {
  title: string;
  text: string;
  media: { image: ImageSlug; alt: string } | { video: VideoSlug; label: string };
}[] = [
  {
    title: "Innovation",
    text: "Our AI and blockchain technologies secure traceability and digital trading — modernising mineral operations and governance, and eliminating opacity across the value chain.",
    media: {
      image: "tech-hub",
      alt: "Illustration of a digitally monitored mineral processing hub",
    },
  },
  {
    title: "Artisan engagement",
    text: "We engage grassroots miners and host communities directly — formalising operations, improving livelihoods, and embedding traceability, safety and fair market access.",
    media: {
      video: "artisan-registration",
      label: "Artisanal miners registering with NordRock at a site office",
    },
  },
  {
    title: "Strategic partnerships",
    text: "We partner with government mineral agencies, local private institutions, and Western, Asian and European organisations for investment, expertise transfer and investor confidence.",
    media: {
      image: "partnership-handshake",
      alt: "Illustration of two site engineers shaking hands",
    },
  },
];

export const strategy = {
  eyebrow: "Our strategy",
  title: "The operational excellence model.",
  items: [
    {
      title: "Grassroots mineral operations intelligence",
      text: "Real-time insight into ground-level operations — including risks and how economic value flows — through direct engagement with landowners, artisanal miners, host communities and other stakeholders.",
    },
    {
      title: "Long-term partnership strategy",
      text: "A partnership model that embeds client and sourcing diversification, continuous capacity building, beneficial community structures and new technology to sustain value creation.",
    },
    {
      title: "Renewable energy integration",
      text: "Solar-powered mine and processing sites with AI-optimised energy management — cutting costs and emissions while generating verifiable ESG data.",
    },
  ],
};

export const milestones = [
  {
    date: "Sept 2025",
    title: "NordRock is incorporated",
    text: "Registered with Nigeria's Corporate Affairs Commission on 3 September 2025.",
  },
  {
    date: "Sept 2025",
    title: "Collaboration with KMDC begins",
    text: "Letter of intent with the Kaduna Mining Development Company to develop beryllium, columbite, tantalite and tungsten across Kaduna State.",
  },
  {
    date: "Oct 2025",
    title: "First international offtake",
    text: "Purchase order secured with Ulba Metallurgical Plant, one of the world's largest beryllium refineries.",
  },
  {
    date: "Nov 2025",
    title: "Long-term supply agreement",
    text: "Agreement to supply beryl ore to MiRESSO, a Japanese fusion-energy company.",
  },
  {
    date: "Nov 2025",
    title: "KMDC partnership deepens",
    text: "Memorandum of understanding to scale traceable critical mineral hubs across Kaduna State.",
  },
  {
    date: "2026",
    title: "Technology platforms go live",
    text: "TraceChain mineral traceability and AgroTrace agricultural traceability launch.",
  },
];

export const governance = {
  eyebrow: "Governance",
  title: "Led by a board built for accountability.",
  body: "Our Board of Directors, serving in executive and non-executive capacities, is supported by our executive officers and financial management team.",
  oversees: [
    "Financial results",
    "Strategic leadership",
    "Significant investments and divestments",
    "Enterprise-wide risk oversight",
    "Capital allocation and operating budgets",
    "Long-term business planning",
  ],
  structure: [
    { title: "Board of Directors", children: [] as string[] },
    { title: "Management", children: ["Executive officers", "Financial management"] },
  ],
};
