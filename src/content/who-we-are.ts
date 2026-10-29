// Who We Are copy. Sources: the live nordrockltd.com/who-we-are page (typos fixed),
// Website/Website Contents.pdf (vision, mission, values, governance), the
// certificate of incorporation and KMDC letter of intent (dates), and the
// public-safe milestones from the strategy document (no figures), and the October 2026
// brief (introduction, vision, mission, values, leadership). No dashes in copy.
import type { ImageSlug, VideoSlug } from "@/lib/media";

export const overview = {
  eyebrow: "Introduction",
  title: "Built on partnership and execution.",
  body: [
    "We started NordRock because artisanal miners in Nigeria produce valuable minerals but sell them through informal channels, at low prices and without records. International buyers want that supply but cannot accept the risk. We sit between the two: we formalise the supply, and we prove it.",
    "We work with artisanal miners, mining leaseholders and landowners, whether their sites are active, dormant or under capacity, to structure projects, bring in capital, and run modern processing with operational discipline.",
  ],
  quote:
    "Lowering the risk in sourcing and supply, building artisanal skills, protecting long-term investment and bringing new technology to the critical minerals industry.",
};

export const vision =
  "Supply chains in which every small producer, whether a miner or a farmer, is registered, paid fairly and able to sell to international buyers.";

export const mission = {
  statement:
    "To build and run traceable supply chains across our four industries, starting with gold and critical minerals, with a verifiable record behind everything we sell.",
  intro: "In practice, that means we:",
  points: [
    "Formalise and legitimise Africa's commodities markets",
    "Unlock fair value for producers and participants",
    "Bring renewable energy, metals and minerals into global markets",
    "Deliver lasting prosperity to stakeholders, communities and nations",
  ],
};

// The four values from the October 2026 brief, merged with the earlier five as principles.
export const values = [
  {
    title: "Show the record",
    text: "If we cannot document it, we do not claim it.",
  },
  {
    title: "Pay at the pit",
    text: "Miners are paid fairly, on time and directly.",
  },
  {
    title: "No children, no mercury",
    text: "Zero tolerance for child labour, and active work to remove mercury from gold processing.",
  },
  {
    title: "Work with the community",
    text: "Host communities and landowners are part of every site agreement.",
  },
];

export const principles = [
  "Integrity and legitimacy",
  "Innovation and structure",
  "Empowerment and equity",
  "Sustainability and responsibility",
  "Excellence and leadership",
];

export type Leader = {
  name: string;
  role: string;
  photo: ImageSlug;
  bio: string;
  linkedin?: string;
};

export const leadership: Leader[] = [
  {
    name: "Tola Otegbeye",
    role: "Chief Executive Officer",
    photo: "tola-otegbeye",
    bio: "More than 10 years of experience in metals and mining. MEng Oil and Gas; MSc Sustainable Metallurgy.",
    linkedin: "https://www.linkedin.com/in/omotola-otegbeye-9a505015a/",
  },
  {
    name: "Emmanuel Dangana",
    role: "Chief Technology Officer",
    photo: "emmanuel-dangana",
    bio: "10 years plus experience in information and communications technologies, including artificial intelligence, blockchain and cybersecurity, and over 6 years in the defence and intelligence sector.",
    linkedin: "https://www.linkedin.com/in/emmanuel-dangana",
  },
  {
    name: "Tobi Oyedeji",
    role: "Chief Financial Officer",
    photo: "tobi-oyedeji",
    bio: "More than 9 years in finance and capital markets.",
  },
  {
    name: "Bankole Otegbeye",
    role: "Legal",
    photo: "bankole-otegbeye",
    bio: "More than 9 years in corporate and financial law; qualified in Nigeria, England and Wales.",
    linkedin: "https://www.linkedin.com/in/dbankoleotegbeye/",
  },
  {
    name: "Opemiotan Omolara",
    role: "Banking and Operations",
    photo: "opemiotan-omolara",
    bio: "More than 15 years in banking and financial services.",
  },
  {
    name: "Tunde Oyinlola",
    role: "Geospatial and Mining Operations",
    photo: "tunde-oyinlola",
    bio: "More than 8 years of experience; BSc Geology.",
    linkedin: "https://www.linkedin.com/in/tundeoyinlola/",
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
    text: "Our own platforms record every participant and every batch, so mineral operations can be governed and checked at each step of the value chain.",
    media: {
      image: "plant-operator",
      alt: "Operator running mineral processing machinery",
    },
  },
  {
    title: "Artisan engagement",
    text: "We work directly with miners and host communities: formalising operations, improving livelihoods, and building in traceability, safety and fair market access.",
    media: {
      video: "artisan-registration",
      label: "Artisanal miners registering with NordRock at a site office",
    },
  },
  {
    title: "Strategic partnerships",
    text: "We partner with government mineral agencies, local private institutions, and Western, Asian and European organisations for investment, expertise transfer and investor confidence.",
    media: {
      image: "field-crew-sluice",
      alt: "NordRock field crew and partners working a sluice together",
    },
  },
];

export const strategy = {
  eyebrow: "Our strategy",
  title: "The operational excellence model.",
  items: [
    {
      title: "Grassroots mineral operations intelligence",
      text: "Real-time insight into ground-level operations, including risks and how economic value flows, through direct engagement with landowners, artisanal miners, host communities and other stakeholders.",
    },
    {
      title: "Long-term partnership strategy",
      text: "A partnership model that embeds client and sourcing diversification, continuous capacity building, beneficial community structures and new technology to sustain value creation.",
    },
    {
      title: "Renewable energy integration",
      text: "Solar-powered mine and processing sites with metered output, cutting costs and emissions while producing energy records buyers can check.",
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
    text: "TraceChain mineral traceability and ATiMS agricultural traceability launch.",
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
