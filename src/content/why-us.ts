// Why Us copy. Sources: the live home page "Why invest and work with us"
// cards, Website Contents.pdf (strategic uniqueness), the public partner strip,
// and the public-safe artisan engagement framework from the strategy document.
import type { ImageSlug } from "@/lib/media";

export const reasons: { title: string; text: string; image: ImageSlug; alt: string }[] = [
  {
    title: "Partnerships with key stakeholders",
    text: "NordRock is built on alliances with government agencies, private-sector leaders and key stakeholders across the mining industry, which brings transparency, regulatory support and secure investment.",
    image: "artisan-briefing-2",
    alt: "NordRock meeting a large group of artisanal miners and community stakeholders",
  },
  {
    title: "Technology implementation",
    text: "From blockchain-backed traceability to data-driven exploration and processing, we use our own technology to set a higher standard for mining in Africa.",
    image: "plant-machinery",
    alt: "Mineral processing machinery inside a NordRock-supported plant",
  },
  {
    title: "ESG compliance",
    text: "Every operation upholds the highest standards of sustainability and accountability. We integrate responsible mining practices, community development and inclusive governance to create long-term value for people, the planet and our partners.",
    image: "forest-pond",
    alt: "Green vegetation and water beside a mine site",
  },
];

export const partnerGroups = [
  {
    title: "Government & regulators",
    partners: [
      "Kaduna State Government",
      "Kaduna Mining Development Company (KMDC)",
      "Ogun State Government",
      "Nigeria Mining Cadastre Office",
    ],
  },
  {
    title: "Offtake & industry",
    partners: ["Ulba Metallurgical Plant", "MiRESSO"],
  },
  {
    title: "International development",
    partners: [
      "JETRO",
      "BIO, the Belgian Investment Company for Developing Countries",
      "Austrian Development Agency",
      "Africa Policy Research Institute",
    ],
  },
];

export const kmdc = {
  eyebrow: "Partnership in focus",
  title: "NordRock × Kaduna Mining Development Company",
  body: "Our strategic partnership with KMDC, the official mineral development agency of Kaduna State, combines a decade of operating experience with NordRock's technology, operations and global offtake. KMDC brings assets and licensing; NordRock brings traceability, processing and market access.",
  stats: [
    { value: 61, suffix: "", label: "Mineral titles" },
    { value: 23, suffix: "", label: "Local government areas across Kaduna State" },
    { value: 8, suffix: "+", label: "Critical minerals, plus gold" },
  ],
  benefits: [
    "Secure, long-term access to graded critical minerals",
    "Rapid ASM formalisation with traceable, compliant supply",
    "Shared hubs, laboratories and logistics that lower costs",
    "Stronger government alignment and permitting certainty",
  ],
};

export const commitments = {
  eyebrow: "Our ESG commitments",
  title: "Responsible by design, audited by others.",
  body: "Our artisan engagement framework makes responsible sourcing the default, not an add-on.",
  groups: [
    {
      title: "Legalise",
      items: [
        "Cooperative registration with the Mining Cadastre Office",
        "Education on bylaws, transparent dues and benefit-sharing",
      ],
    },
    {
      title: "Safeguard",
      items: [
        "Zero tolerance for child labour",
        "Gender inclusion across our programmes",
        "Mercury-free processing",
        "Regular safe-mining training, with PPE and toolkit grants",
      ],
    },
    {
      title: "Enable",
      items: [
        "Onboarding to our digital marketplace with index-linked pricing",
        "Reliable escrow payments to artisanal miners",
      ],
    },
    {
      title: "Verify",
      items: [
        "Blockchain-traceable sourcing for every supply contract",
        "Third-party auditing of ESG compliance",
      ],
    },
  ],
  targets: [
    {
      value: "10,000+",
      label: "Artisanal miners to be onboarded within a year of our platform going live",
    },
    { value: "Zero", label: "Tolerance for non-ESG-compliant activity" },
  ],
  memberships:
    "We are working towards membership of international responsible-sourcing initiatives, including the European Partnership for Responsible Minerals (EPRM).",
};

export const advantages = [
  {
    title: "A pioneering model",
    text: "We structure the whole chain (production, storage, processing and transport) rather than simply sourcing and finding buyers.",
  },
  {
    title: "Trade & finance expertise",
    text: "Our management and board bring international trade and global financing experience.",
  },
  {
    title: "Trusted access",
    text: "Long-standing relationships with state and non-state actors across our operating regions.",
  },
  {
    title: "Strategic timing",
    text: "We are entering critical minerals as global demand for the energy transition accelerates.",
  },
  {
    title: "Technical depth",
    text: "Every part of our team brings technical expertise in a critical segment of the value chain.",
  },
];
