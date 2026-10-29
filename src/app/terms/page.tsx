import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/sections/LegalPage";
import { company, contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that apply when you use the NordRock Limited website.",
};

const UPDATED = "29 October 2026";

const sections: LegalSection[] = [
  {
    title: "About these terms",
    body: (
      <p>
        These terms apply to your use of this website, which is operated by {company.name} (
        {company.rcNumber}), {contact.address.lines.join(", ")}. By using the site you accept
        them. If you do not agree, please do not use the site.
      </p>
    ),
  },
  {
    title: "Information only",
    body: (
      <>
        <p>
          The content on this website is general information about NordRock and its work. It is
          not an offer to buy or sell any mineral, product or service, and it is not investment,
          legal, tax or financial advice.
        </p>
        <p>
          Nothing on this website is an offer or invitation to invest in NordRock or in any project.
          Platforms described as &ldquo;in development&rdquo; are not open to the public.
        </p>
      </>
    ),
  },
  {
    title: "Accuracy",
    body: (
      <p>
        We work to keep the website accurate and up to date, but we do not guarantee that every
        statement is complete or current. Descriptions of standards we align with do not mean we
        are certified against them. Please contact us before relying on any information for a
        decision.
      </p>
    ),
  },
  {
    title: "Our platforms",
    body: (
      <p>
        TraceChain, ATiMS and our other platforms are separate services with their own terms of
        access. Links from this website to those platforms, or to sites run by others, are provided
        for convenience. We are not responsible for the content of third-party sites.
      </p>
    ),
  },
  {
    title: "Intellectual property",
    body: (
      <p>
        The NordRock name and logo, and the text, photographs, video and design of this website,
        belong to {company.name} or are used with permission. You may view and share pages for
        personal or internal business use, with credit to NordRock. You may not copy, modify or
        republish them for other purposes without our written permission.
      </p>
    ),
  },
  {
    title: "Acceptable use",
    body: (
      <ul>
        <li>Do not use the website for anything unlawful or misleading.</li>
        <li>
          Do not try to gain unauthorised access to the website, our servers or our platforms.
        </li>
        <li>Do not send spam or harmful code through our contact form or email addresses.</li>
      </ul>
    ),
  },
  {
    title: "Liability",
    body: (
      <p>
        To the extent the law allows, {company.name} is not liable for any loss arising from use of,
        or reliance on, this website. Nothing in these terms limits liability that cannot be limited
        by law.
      </p>
    ),
  },
  {
    title: "Privacy and cookies",
    body: (
      <p>
        Our <Link href="/privacy/">privacy policy</Link> explains how we handle information you
        send us, and our <Link href="/cookies/">cookie notice</Link> explains what this website
        stores on your device.
      </p>
    ),
  },
  {
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of the Federal Republic of Nigeria, and the courts of
        Nigeria have jurisdiction over any dispute about them.
      </p>
    ),
  },
  {
    title: "Changes",
    body: (
      <p>
        We may update these terms from time to time. The date at the top of this page shows when
        they were last changed. Questions can be sent to{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
    ),
  },
];

export default function Page() {
  return (
    <LegalPage
      title="Terms of use."
      intro="The terms that apply when you use this website."
      media={{ image: "plant-conveyor", label: "Conveyor inside a mineral processing plant" }}
      updated={UPDATED}
      sections={sections}
      footnote="Questions about these terms?"
    />
  );
}
