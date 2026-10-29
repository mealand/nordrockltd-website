// Industry pages. Sources: the October 2026 website update brief (hero, statement and
// closing copy), the live site, NordRock TECH Component.pdf, "NordRock Renewable Energy
// and Tech Draft.docx", the KMDC letter of intent and the public ATiMS repository.
// No dashes in copy: the client reads them as AI-generated.
import type { HeroMedia } from "@/components/sections/PageHero";
import type { Closing } from "@/components/sections/ClosingBanner";
import type { IndustryStatus } from "@/content/site";
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
  status: IndustryStatus;
  hero: { title: string; intro: string; media: HeroMedia };
  statement?: { eyebrow: string; title: string; body: string };
  areas: { title: string; text: string; image?: ImageSlug; alt?: string }[];
  feature?: IndustryFeature;
  products: string[]; // product hrefs from site.ts
  closing?: Closing;
  /** `slides` are the photos the home page and overview cards cycle through. */
  overview: { summary: string; media: HeroMedia; points: string[]; slides: ImageSlug[] };
};

export const statusLabels: Record<IndustryStatus, string> = {
  operating: "Operating",
  "in-development": "In development",
  "coming-soon": "Coming soon",
};

export const industryPages: Industry[] = [
  {
    slug: "metals-and-mining",
    label: "Metals and Mining",
    status: "operating",
    hero: {
      title: "Metals and minerals, formalised from the ground up.",
      intro:
        "Extraction, sourcing, trading and formalisation of artisanal mining. This is where NordRock started, and it remains our largest business.",
      media: {
        video: "aerial-pit-walls",
        label: "Aerial view over the walls of an artisanal mine pit",
      },
    },
    statement: {
      eyebrow: "Our core business",
      title: "Turning Nigeria's mineral endowment into traceable supply.",
      body: "Around 85% of mineral activity in Nigeria is artisanal and small-scale. It is fragmented, seasonal and often sold below global prices. We work with artisanal miners, leaseholders and landowners to turn that activity into compliant, consistent supply that international buyers can accept.",
    },
    areas: [
      {
        title: "Extraction",
        text: "With mining leaseholders and our KMDC partnership in Kaduna State, we bring modern equipment, safety standards and mercury-free practice to active, dormant and under-used sites.",
        image: "excavator-pit-dig",
        alt: "Excavator digging ore from a flooded mine pit",
      },
      {
        title: "Sourcing",
        text: "Material comes from registered producers in several regions. Every batch is weighed, graded and tagged at source.",
        image: "bagged-ore-field",
        alt: "Bagged ore lined up beside a sluice at a mine site",
      },
      {
        title: "Trading",
        text: "Long-term offtake with international refiners and buyers, including Ulba Metallurgical Plant and MiRESSO, with prices linked to assay results.",
        image: "gold-nuggets",
        alt: "A handful of gold nuggets",
      },
      {
        title: "ASM formalisation",
        text: "We register artisanal miners through cooperatives with the Mining Cadastre Office, help with their documents, train them in safe mining and pay them reliably.",
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
          text: "The minerals behind the energy transition, technology and defence. Our KMDC collaboration prioritises beryllium, columbite, tantalite and tungsten.",
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
          title: "Precious metals and gems",
          text: "High-value commodities traded with the same traceability and compliance standards.",
          minerals: ["Gold", "Emerald"],
        },
      ],
    },
    products: ["/products/tracechain/", "/products/smarttrade/", "/products/geoai/"],
    closing: {
      title: "Need a specific mineral or grade?",
      button: "Send us your specification",
      href: "/contact/?enquiry=minerals",
      media: { image: "excavator-ore-face", label: "Excavator bucket at an ore face" },
    },
    overview: {
      summary: "Gold and critical minerals from registered artisanal miners, traced on TraceChain.",
      media: { image: "excavator-pit-dig", label: "Excavator digging ore from a mine pit" },
      points: ["Extraction", "Sourcing", "Trading", "ASM formalisation"],
      slides: ["excavator-pit-dig", "bagged-ore-field", "field-crew-sluice", "gold-nuggets"],
    },
  },
  {
    slug: "agriculture",
    label: "Agriculture",
    status: "operating",
    hero: {
      title: "Traceable produce from small-scale farms.",
      intro:
        "We have taken the model we built in mining to agriculture. ATiMS records each farmer, farm and harvest.",
      media: { image: "forest-pond", label: "Green farmland and palms beside a pond in Nigeria" },
    },
    statement: {
      eyebrow: "ATiMS: Agro-Trace Integrated Management System",
      title:
        "Every farmer registered. Every harvest recorded. Every shipment checked before it moves.",
      body: "Export markets want proof of where produce came from and how it was handled. Small-scale farmers rarely have the paperwork to show it, so their crops sell for less. ATiMS gives each farmer an identity, maps each farm and follows each harvest through aggregation, packing and transport, with compliance checks built into every stage.",
    },
    areas: [
      {
        title: "Farmer and farm registry",
        text: "Each farmer is registered and verified, and each farm is mapped, so every batch can be tied to the people and land that produced it.",
      },
      {
        title: "Harvest and batch records",
        text: "Harvests are recorded at collection and followed as batches through aggregation, packing, transit, port and delivery.",
      },
      {
        title: "Compliance stage gates",
        text: "Each stage checks its own requirements and holds a batch back until they are met, so problems are found before goods move, not at the border.",
      },
      {
        title: "Quality verdicts",
        text: "Lab results are assessed against a library of market standards to give a clear pass or fail for each destination.",
      },
      {
        title: "Tamper-evident records",
        text: "Records are fingerprinted so any later change shows, with a move to a permissioned ledger on the roadmap.",
      },
      {
        title: "Dashboards for every role",
        text: "Farmers, aggregators, processors, transporters and exporters each work from a view built for what they do.",
      },
    ],
    feature: {
      type: "stack",
      title: "How a harvest moves through ATiMS",
      body: "The same record follows the produce from the farm gate to the buyer.",
      layers: [
        {
          name: "Register",
          role: "Farmer and farm",
          text: "The farmer is verified and the farm is mapped before anything is bought.",
        },
        {
          name: "Record",
          role: "Harvest and batch",
          text: "Each harvest becomes a batch with its weight, origin and handling history.",
        },
        {
          name: "Check",
          role: "Compliance and quality",
          text: "Stage gates and lab verdicts confirm the batch meets its destination's rules.",
        },
        {
          name: "Deliver",
          role: "Buyer and regulator",
          text: "The buyer receives the full record, and regulators can verify it.",
        },
      ],
    },
    products: ["/products/atims/"],
    closing: {
      title: "Run a cooperative, processing plant or export business?",
      button: "Talk to our agriculture team",
      href: "/contact/?enquiry=agriculture",
      media: { image: "forest-pond", label: "Green farmland beside a pond" },
    },
    overview: {
      summary: "Produce from small-scale farmers, traced on ATiMS.",
      media: { image: "forest-pond", label: "Green farmland and palms beside a pond" },
      points: ["Farmer and farm registry", "Harvest traceability", "Export compliance"],
      slides: ["forest-pond", "field-team-meeting"],
    },
  },
  {
    slug: "renewable-energy",
    label: "Renewable Energy",
    status: "in-development",
    hero: {
      title: "Reliable power for mine sites and processing plants.",
      intro:
        "We are developing solar and hybrid microgrids for mining sites, processing plants and host communities, with metered output recorded on TraceChain.",
      media: { image: "site-generator", label: "Generator alternator at a remote mine site" },
    },
    statement: {
      eyebrow: "Why energy matters",
      title: "Mining is energy-intensive. In much of Nigeria, the grid is not reliable.",
      body: "Crushing, grinding and concentration need steady power. Where the grid fails, sites run on diesel, which is expensive, hard to supply in remote areas and adds emissions that buyers increasingly ask about. Solar and hybrid systems lower running costs and give buyers a measured energy record for the material they purchase.",
    },
    areas: [
      {
        title: "Steady power",
        text: "Solar and hybrid microgrids keep crushers, concentrators and processing plants running through the day and night.",
      },
      {
        title: "Lower running costs",
        text: "Less diesel to buy and transport, and energy costs that are easier to plan for.",
      },
      {
        title: "A measured energy record",
        text: "Metered output recorded on TraceChain, so the energy behind each batch is measured rather than estimated.",
      },
    ],
    feature: {
      type: "pathways",
      title: "Where we plan to install",
      body: "Each new site follows the same model: solar first, metering from day one.",
      rows: [
        {
          area: "Processing plants",
          approach: "Solar or hybrid mini-grids",
          impact: "Lower power costs and cleaner production",
        },
        {
          area: "Buying and aggregation centres",
          approach: "Solar rooftops with battery storage",
          impact: "Independence from the grid",
        },
        {
          area: "Field logistics",
          approach: "Solar-powered tracking devices",
          impact: "Real-time monitoring in remote areas",
        },
        {
          area: "Host communities",
          approach: "Shared solar microgrids",
          impact: "Reliable power for the communities around our sites",
        },
      ],
    },
    products: ["/products/greengrid/"],
    closing: {
      title: "Run a site that needs power?",
      button: "Join the GreenGrid pilot list",
      href: "/contact/?enquiry=pilot",
      media: {
        video: "processing-plant",
        label: "Processing plant machinery beside bagged concentrate",
      },
    },
    overview: {
      summary: "Solar and hybrid power for mining sites and processing plants. In development.",
      media: { image: "site-generator", label: "Generator alternator at a remote site" },
      points: [
        "Solar and hybrid microgrids",
        "Metered output on TraceChain",
        "Power for host communities",
      ],
      slides: ["site-generator", "plant-machinery", "plant-conveyor"],
    },
  },
  {
    slug: "real-estate-and-housing",
    label: "Real Estate and Housing",
    status: "coming-soon",
    hero: {
      title: "Real estate and housing.",
      intro: "Coming soon.",
      media: { image: "excavator-clearing", label: "Excavator clearing land beside palm trees" },
    },
    areas: [],
    products: [],
    overview: {
      summary: "Coming soon.",
      media: { image: "excavator-clearing", label: "Excavator clearing land beside palm trees" },
      points: ["Coming soon"],
      slides: ["excavator-clearing", "excavator-track"],
    },
  },
];

export const getIndustry = (slug: string) => industryPages.find((i) => i.slug === slug);

export const ecosystem = {
  eyebrow: "One way of working",
  title: "Technology, operations and finance, in every industry.",
  links: [
    {
      from: "Metals and Mining",
      to: "Agriculture",
      text: "gave us the traceability model we now use on farms",
    },
    {
      from: "Renewable Energy",
      to: "Metals and Mining",
      text: "powers remote mines and processing plants",
    },
    {
      from: "Our platforms",
      to: "All four industries",
      text: "record every producer, batch and kilowatt-hour",
    },
  ],
};
