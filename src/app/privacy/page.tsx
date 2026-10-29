import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/sections/LegalPage";
import { company, contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How NordRock Limited handles personal information submitted through this website.",
};

const UPDATED = "29 October 2026";

const sections: LegalSection[] = [
  {
    title: "Who we are",
    body: (
      <p>
        This website is operated by {company.name}, a company incorporated in Nigeria with its head
        office at {contact.address.lines.join(", ")}. We are responsible for the personal
        information described in this policy. You can reach us at{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
    ),
  },
  {
    title: "Information we collect",
    body: (
      <>
        <p>
          <strong>When you contact us.</strong> If you use our contact form or email us, we receive
          the details you choose to give: your name, email address, organisation, phone number, the
          type of enquiry and your message.
        </p>
        <p>
          <strong>When you visit the site.</strong> Like most websites, our hosting provider&apos;s
          servers automatically keep short-lived technical logs (such as IP address, browser type,
          pages requested and the time of the request) to keep the site secure and working.
        </p>
        <p>
          We do not use analytics, advertising trackers or social media pixels, and this website
          does not set cookies. See our <Link href="/cookies/">cookie notice</Link>.
        </p>
      </>
    ),
  },
  {
    title: "How we use it",
    body: (
      <ul>
        <li>To respond to your enquiry and continue any conversation you start with us.</li>
        <li>To consider partnership, supply, investment or employment requests you send us.</li>
        <li>To protect the website and our inbox against abuse and spam.</li>
      </ul>
    ),
  },
  {
    title: "Legal basis",
    body: (
      <p>
        We process personal information in line with the Nigeria Data Protection Act 2023 and, where
        it applies to visitors in the European Union or United Kingdom, the GDPR. We rely on your
        consent (given when you submit the contact form) and on our legitimate interest in replying
        to enquiries and keeping our systems secure.
      </p>
    ),
  },
  {
    title: "Sharing",
    body: (
      <p>
        We do not sell or rent your information. Contact form messages are delivered to our company
        inbox through our hosting provider. We share information only with people inside NordRock
        who need it to respond, with service providers acting on our behalf under confidentiality
        obligations, or where the law requires it.
      </p>
    ),
  },
  {
    title: "How long we keep it",
    body: (
      <p>
        We keep enquiry emails for as long as needed to deal with your request and any resulting
        relationship, and delete them when they are no longer required, normally within two years
        of our last contact, unless the law requires us to keep them longer. Server logs are kept by
        our host for a short period, typically no more than 90 days.
      </p>
    ),
  },
  {
    title: "Security",
    body: (
      <p>
        The website is served only over encrypted HTTPS connections, the contact form is protected
        against automated abuse, and access to enquiries is limited to staff who need it.
      </p>
    ),
  },
  {
    title: "Your rights",
    body: (
      <p>
        You can ask us to confirm what personal information we hold about you, to correct or delete
        it, to restrict or object to how we use it, or to withdraw your consent at any time. Email{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a> and we will respond within the time
        allowed by law. You may also complain to the Nigeria Data Protection Commission, or to your
        local data protection authority.
      </p>
    ),
  },
  {
    title: "Links to other sites",
    body: (
      <p>
        Our pages link to other services, such as Google Maps, LinkedIn and our TraceChain and ATiMS
        platforms. Those services have their own privacy policies, which apply once you follow the
        link.
      </p>
    ),
  },
  {
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. The date at the top of this page shows when it
        was last changed.
      </p>
    ),
  },
];

export default function Page() {
  return (
    <LegalPage
      title="Privacy policy."
      intro="How NordRock Limited handles information submitted through this website."
      media={{ image: "excavator-clearing", label: "Excavator clearing land beside palm trees" }}
      updated={UPDATED}
      sections={sections}
      footnote="Questions about this policy?"
    />
  );
}
