// Compliance page copy. Sources: the October 2026 website update brief and the policy
// documents in NORDROCK/new-content/policies (summaries paraphrase each policy statement;
// dates come from each document's control table and the Board resolution approving the
// Policy Suite on 12 July 2026). Cards only: the PDFs are not published yet.
// Say "aligned with" or "designed to meet", never "certified". No dashes in copy.

export type Policy = { name: string; summary: string; approved: string };

export const policies: Policy[] = [
  {
    name: "Responsible Gold Sourcing Policy",
    summary:
      "How we make sure every gold and precious mineral we source, process or finance was obtained responsibly and legally.",
    approved: "12 July 2026",
  },
  {
    name: "AML/CFT Compliance Programme",
    summary:
      "Our controls against money laundering and terrorist financing, from customer due diligence to reporting suspicious transactions.",
    approved: "12 July 2026",
  },
  {
    name: "Environment, Health and Safety Policy",
    summary:
      "The minimum standards that protect workers, communities, rivers and farmland at every site we work on.",
    approved: "10 July 2026",
  },
  {
    name: "Child Labour Policy",
    summary:
      "Zero tolerance for child labour, and the steps we take to find it, stop it and support any child affected.",
    approved: "10 July 2026",
  },
  {
    name: "Human Rights Policy",
    summary:
      "Our commitment to the rights of employees, artisanal miners, host communities and everyone whose data we hold.",
    approved: "12 July 2026",
  },
  {
    name: "Supplier Code of Conduct",
    summary:
      "The standards every supplier and counterparty must meet before and while trading with us.",
    approved: "12 July 2026",
  },
  {
    name: "Anti-Bribery and Corruption Policy",
    summary:
      "We do not pay or accept bribes, and this policy sets out what is prohibited, what is allowed within clear limits and how to report a risk.",
    approved: "12 July 2026",
  },
  {
    name: "CAHRAs Engagement Procedure",
    summary:
      "How we assess, secure and operate in conflict-affected and high-risk areas in Nigeria, step by step.",
    approved: "Awaiting Board approval",
  },
];

export const standards = [
  {
    name: "OECD Due Diligence Guidance for Responsible Supply Chains of Minerals",
    href: "https://www.oecd.org/en/publications/oecd-due-diligence-guidance-for-responsible-supply-chains-of-minerals-from-conflict-affected-and-high-risk-areas_9789264252479-en.html",
  },
  {
    name: "LBMA Responsible Gold Guidance",
    href: "https://www.lbma.org.uk/responsible-sourcing/responsible-gold-programme",
  },
  {
    name: "Minamata Convention on Mercury",
    href: "https://minamataconvention.org/en",
  },
  {
    name: "EU Critical Raw Materials Act requirements",
    href: "https://single-market-economy.ec.europa.eu/sectors/raw-materials/areas-specific-interest/critical-raw-materials/critical-raw-materials-act_en",
  },
];
