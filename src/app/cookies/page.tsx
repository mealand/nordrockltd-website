import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/sections/LegalPage";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Cookie Notice",
  description: "What the NordRock Limited website stores on your device, and why.",
};

const UPDATED = "29 October 2026";

const sections: LegalSection[] = [
  {
    title: "The short version",
    body: (
      <p>
        This website does not set cookies. We do not use analytics, advertising or social media
        tracking, so there is nothing to accept or decline.
      </p>
    ),
  },
  {
    title: "What a cookie is",
    body: (
      <p>
        A cookie is a small file a website saves in your browser so it can remember something about
        you between visits, such as a login or a preference. Similar technologies include local
        storage and tracking pixels.
      </p>
    ),
  },
  {
    title: "What this website stores",
    body: (
      <>
        <p>
          None. Pages, fonts, images and videos are served from our own host. Your browser may keep
          copies of these files in its normal cache so pages load faster on your next visit. That
          cache holds no personal information and you can clear it at any time in your browser
          settings.
        </p>
        <p>
          When you send the contact form, the details you enter are sent to us once and are not
          stored in your browser.
        </p>
      </>
    ),
  },
  {
    title: "Other sites we link to",
    body: (
      <p>
        Links to Google Maps, LinkedIn and our TraceChain and ATiMS platforms take you to services
        that may set their own cookies under their own policies.
      </p>
    ),
  },
  {
    title: "If this changes",
    body: (
      <p>
        If we ever add cookies that are not strictly necessary, we will update this notice and ask
        for your consent first. See also our <Link href="/privacy/">privacy policy</Link>, or email{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
    ),
  },
];

export default function Page() {
  return (
    <LegalPage
      title="Cookie notice."
      intro="What this website stores on your device, and why."
      media={{ image: "plant-machinery", label: "Machinery inside a mineral processing plant" }}
      updated={UPDATED}
      sections={sections}
      footnote="Questions about cookies?"
    />
  );
}
