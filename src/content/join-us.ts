// Join Us copy. Sources: Website Contents.pdf (people & culture), the TraceChain app
// (participant roles and onboarding), and the public-safe artisan engagement framework.
import type { HeroMedia } from "@/components/sections/PageHero";

export type JoinPath = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  media: HeroMedia;
  points: { title: string; text: string }[];
  steps?: string[];
  cta: { label: string; href: string }[];
};

export const joinPaths: JoinPath[] = [
  {
    id: "careers",
    eyebrow: "Careers",
    title: "People are central to our success.",
    body: "We prioritise safety, integrity and sustainability in everything we do, while fostering a culture that values innovation, professionalism and leadership. Join a young, fast-moving company shaping the future of Africa's critical minerals sector.",
    media: { image: "site-walk", label: "NordRock team walking a mine site" },
    points: [
      {
        title: "Working with us",
        text: "Field operations, trading, technology and community engagement teams working side by side, from Abuja to the mine site.",
      },
      {
        title: "Training & development",
        text: "Hands-on exposure to mining, international trade and blockchain technology, with mentoring from experienced leaders.",
      },
      {
        title: "Diversity & inclusion",
        text: "We champion inclusion — including gender inclusion across our artisan programmes — and welcome talent from every background.",
      },
    ],
    cta: [{ label: "Send us your CV", href: "/contact/?enquiry=careers" }],
  },
  {
    id: "partners",
    eyebrow: "Partners & suppliers",
    title: "Build long-term supply with NordRock.",
    body: "We work with licensed miners, aggregators, processing centres, assay laboratories, logistics and freight operators and security providers. Every partner is verified on TraceChain, so trusted work is recognised and rewarded.",
    media: {
      image: "excavator-bucket-loading",
      label: "Ore being loaded into an excavator bucket for transport",
    },
    points: [
      {
        title: "Verified, not vetted once",
        text: "Your verified history builds a reputation that opens better terms over time.",
      },
      {
        title: "Long-term offtake",
        text: "Access to international buyers through NordRock's supply contracts.",
      },
      {
        title: "Shared infrastructure",
        text: "Hubs, laboratories and logistics that lower costs for everyone in the network.",
      },
    ],
    steps: [
      "Register your organisation on TraceChain",
      "Submit licences and documents for inspection",
      "Receive your verified Nexus ID",
      "Start supplying, processing or moving traceable minerals",
    ],
    cta: [
      { label: "Register on TraceChain ↗", href: "https://tracechain.nordrockltd.com" },
      { label: "Talk to our team", href: "/contact/?enquiry=partnership" },
    ],
  },
  {
    id: "artisans",
    eyebrow: "Artisans & cooperatives",
    title: "Formalise, get trained, get paid fairly.",
    body: "Artisanal and small-scale miners are the backbone of Nigeria's mineral sector. We help cooperatives become legal, safe and bankable — and connect them to fair, transparent markets.",
    media: {
      video: "artisan-registration",
      label: "Artisanal miners registering with NordRock at a site office",
    },
    points: [
      {
        title: "Legal recognition",
        text: "Support to register your cooperative with the Mining Cadastre Office and complete your documentation.",
      },
      {
        title: "Safety & training",
        text: "Regular safe-mining training, mercury-free processing methods, and PPE and toolkit grants.",
      },
      {
        title: "Fair, reliable payment",
        text: "Index-linked pricing on our digital marketplace and secure escrow payments.",
      },
    ],
    steps: [
      "Join or form a cooperative",
      "Register with our field team and receive your Nexus ID",
      "Complete safety and ESG training",
      "Sell traceable minerals at fair, transparent prices",
    ],
    cta: [
      { label: "Register on TraceChain ↗", href: "https://tracechain.nordrockltd.com" },
      { label: "Contact our field team", href: "/contact/?enquiry=artisan" },
    ],
  },
];
