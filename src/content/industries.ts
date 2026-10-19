// Industry pages. Sources: the project brief (industry structure), the live site,
// NordRock TECH Component.pdf, "NordRock Renewable Energy and Tech Draft.docx",
// the KMDC letter of intent and the public-safe strategy document content.
import type { HeroMedia } from "@/components/sections/PageHero";
import type { ImageSlug } from "@/lib/media";

export type IndustryFeature =
  | {
      type: "minerals";
      title: string;
      groups: { title: string; text: string; minerals: string[] }[];
    }
  | {
      type: "stack";
      title: string;
      body: string;
      layers: { name: string; role: string; text: string }[];
    }
  | {
      type: "pathways";
      title: string;
      body: string;
      rows: { area: string; approach: string; impact: string }[];
    };

export type Industry = {
  slug: string;
  label: string;
  hero: { title: string; intro: string; media: HeroMedia };
  statement: { eyebrow: string; title: string; body: string };
  areas: { title: string; text: string; image?: ImageSlug; alt?: string }[];
  feature: IndustryFeature;
  products: string[]; // product hrefs from site.ts
  overview: { summary: string; media: HeroMedia; points: string[] };
};

export const industryPages: Industry[] = [
  {
    slug: "mineral-operations",
    label: "Mineral Operations",
    hero: {
      title: "Mineral operations, formalised from the ground up.",
      intro:
        "Extraction, sourcing, trading and ASM formalisation — the core of NordRock's business and the foundation of a legitimate mining ecosystem.",
      media: {
        video: "artisan-gemstone-finds",
        loop: 1,
        label: "Artisanal miner holding gemstone finds from a pit",
      },
    },
    statement: {
      eyebrow: "Our core business",
      title: "Turning Nigeria's mineral endowment into traceable, bankable supply.",
      body: "Around 85% of mineral activity in Nigeria is artisanal and small-scale — fragmented, seasonal and often sold below global prices. We work with artisanal miners, leaseholders and landowners to structure that activity into compliant, high-quality supply for international markets.",
    },
    areas: [
      {
        title: "Extraction",
        text: "Working with mining leaseholders and our KMDC partnership across Kaduna State's mineral titles, we bring modern equipment, safety standards and mercury-free practices to active, dormant and under-capacity sites.",
        image: "excavation-pit",
        alt: "Excavator and miners working an open pit",
      },
      {
        title: "Sourcing",
        text: "Verified aggregation from registered producers, with MOUs across multiple qualified suppliers in different regions. Every batch is weighed, graded and tagged at source.",
        image: "ore-bagging-crew",
        alt: "Crew carrying bagged ore at a mine site",
      },
      {
        title: "Trading",
        text: "Long-term offtake with international refiners and buyers — including Ulba Metallurgical Plant and MiRESSO — supported by assay-linked pricing and a blockchain-powered digital trading desk.",
        image: "gold-nuggets",
        alt: "A handful of gold nuggets",
      },
      {
        title: "ASM formalisation",
        text: "We register artisanal miners through cooperatives with the Mining Cadastre Office, support their documentation, train them in safe mining and onboard them to our digital marketplace with reliable, escrow-backed payments.",
        image: "artisan-briefing-2",
        alt: "NordRock addressing a large group of artisanal miners",
      },
    ],
    feature: {
      type: "minerals",
      title: "What we supply",
      groups: [
        {
          title: "Critical metals",
          text: "The minerals powering the energy transition, technology and defence. Our KMDC collaboration prioritises beryllium, columbite, tantalite and tungsten.",
          minerals: [
            "Beryllium",
            "Tantalite",
            "Columbite",
            "Coltan",
            "Lithium",
            "Tungsten",
            "Tin",
            "Copper",
            "Nickel",
            "Rare earths",
          ],
        },
        {
          title: "Precious metals & gems",
          text: "High-value commodities traded with the same traceability and compliance standards.",
          minerals: ["Gold", "Emerald"],
        },
      ],
    },
    products: ["/products/tracechain/", "/products/smarttrade/", "/products/geoai/"],
    overview: {
      summary:
        "Extraction, sourcing, trading and ASM formalisation across Nigeria's critical and precious minerals.",
      media: { video: "artisan-pit-mining", label: "Artisanal miners working a mineral pit" },
      points: ["Extraction", "Sourcing", "Trading", "ASM formalisation"],
    },
  },
  {
    slug: "technology",
    label: "Technology",
    hero: {
      title: "Technology for complex global problems.",
      intro:
        "NordRock is not just a mining company but a mining technology ecosystem — built on blockchain, AI and IoT.",
      media: {
        image: "tech-hub",
        label: "Illustration of a digitally monitored mineral processing hub",
      },
    },
    statement: {
      eyebrow: "A unified system view",
      title: "Five interconnected platforms, one transparent ecosystem.",
      body: "Opacity is the root of many of the minerals sector's problems — illegal trade, unfair pricing, ESG risk and lost investor confidence. Our platforms record, verify and analyse every step, so producers, buyers, investors and regulators can trust the same data.",
    },
    areas: [
      {
        title: "Traceability",
        text: "Blockchain records of every participant and every batch — from pit to buyer, and from farm to export.",
      },
      {
        title: "Exploration intelligence",
        text: "AI-assisted geospatial analysis of satellite imagery and geological data to map mineral potential.",
      },
      {
        title: "Digital trade & finance",
        text: "Verified transactions, AI reliability scoring and tokenised participation in vetted projects.",
      },
      {
        title: "Energy & ESG data",
        text: "IoT-monitored renewable power with on-chain, auditable carbon and impact records.",
      },
    ],
    feature: {
      type: "stack",
      title: "How the pieces fit together",
      body: "Every NordRock site is designed as a smart, self-powered, data-driven operation.",
      layers: [
        {
          name: "Renewable energy",
          role: "The power backbone",
          text: "Solar microgrids keep remote sites, sensors and gateways running 24/7.",
        },
        {
          name: "IoT",
          role: "The nervous system",
          text: "Sensors, meters and GPS trackers capture equipment, energy, mineral and environmental data.",
        },
        {
          name: "AI",
          role: "The decision brain",
          text: "Models predict demand, optimise energy, flag anomalies and score reliability.",
        },
        {
          name: "Blockchain",
          role: "The memory ledger",
          text: "Tamper-proof records that investors and regulators can audit.",
        },
      ],
    },
    products: [
      "/products/tracechain/",
      "/products/agrotrace/",
      "/products/geoai/",
      "/products/smarttrade/",
      "/products/crowdmine/",
      "/products/greengrid/",
    ],
    overview: {
      summary:
        "Blockchain, AI and IoT platforms that bring transparency to minerals, agriculture and energy.",
      media: {
        video: "registration-documentation",
        label: "Field registration of miners onto NordRock's digital platform",
      },
      points: ["Blockchain traceability", "AI geospatial analysis", "Digital trade"],
    },
  },
  {
    slug: "renewable-energy",
    label: "Renewable Energy",
    hero: {
      title: "Powering mining with Nigeria's solar revolution.",
      intro:
        "Solar and hybrid microgrids for mines, processing plants and host communities — with every kilowatt-hour measured and verified.",
      media: { video: "site-survey-river", label: "Survey of an open mine site landscape" },
    },
    statement: {
      eyebrow: "Why energy matters",
      title: "Mining is energy-intensive. Northern Nigeria's grid is not reliable.",
      body: "Processing and logistics demand constant power, but many of the sites where we operate have unstable or no grid supply. Integrating renewables solves three problems at once.",
    },
    areas: [
      {
        title: "Operational resilience",
        text: "Solar and hybrid microgrids keep crushers, concentrators and processing plants running around the clock.",
      },
      {
        title: "Cost optimisation",
        text: "Renewables reduce diesel dependency and stabilise long-term energy costs.",
      },
      {
        title: "ESG & green finance",
        text: "Clean, verified energy strengthens ESG performance and opens access to green financing and carbon markets.",
      },
    ],
    feature: {
      type: "pathways",
      title: "Renewables across our operations",
      body: "Every new site replicates the same solar-plus-IoT model, so clean power and clean data scale together.",
      rows: [
        {
          area: "Processing plants",
          approach: "Solar-powered systems or hybrid mini-grids",
          impact: "Lower power costs and cleaner production",
        },
        {
          area: "Buying & aggregation centres",
          approach: "Solar rooftops with battery storage",
          impact: "Independence from the grid",
        },
        {
          area: "Field logistics",
          approach: "Solar-powered IoT tracking",
          impact: "Real-time monitoring with a smaller footprint",
        },
        {
          area: "Host communities",
          approach: "Solar microgrids for nearby communities",
          impact: "Shared benefit and a social licence to operate",
        },
        {
          area: "Investor platform",
          approach: "Investors co-fund renewable installations",
          impact: "Dual investment in mining and green infrastructure",
        },
      ],
    },
    products: ["/products/greengrid/", "/products/crowdmine/"],
    overview: {
      summary:
        "Solar microgrids and AI energy management for mining sites and host communities, with verified ESG data.",
      media: { video: "site-survey-river", label: "Survey of an open mine site landscape" },
      points: ["Solar for mine & processing sites", "AI energy optimisation", "Verified ESG data"],
    },
  },
];

export const getIndustry = (slug: string) => industryPages.find((i) => i.slug === slug);

export const ecosystem = {
  eyebrow: "One connected ecosystem",
  title: "Each industry strengthens the others.",
  links: [
    { from: "Renewable Energy", to: "Mineral Operations", text: "powers remote mines and plants" },
    { from: "Technology", to: "Mineral Operations", text: "traces, verifies and finances supply" },
    { from: "Technology", to: "Renewable Energy", text: "optimises and certifies clean power" },
  ],
};
