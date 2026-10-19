import { getProductPage } from "@/content/products";
import { RecordMock } from "./RecordMock";

// Example values for the illustrative records. Not real batches.
const examples: Record<
  string,
  { idLabel: string; id: string; fields: { label: string; value: string }[] }
> = {
  tracechain: {
    idLabel: "Trace ID",
    id: "NR-TC-BE-0417",
    fields: [
      { label: "Mineral", value: "Beryl ore" },
      { label: "Origin", value: "Kaduna State" },
      { label: "Supplier", value: "Registered cooperative" },
      { label: "Assay", value: "Certificate attached" },
    ],
  },
  agrotrace: {
    idLabel: "Batch ID",
    id: "AT-CR-SES-0219",
    fields: [
      { label: "Produce", value: "Sesame seed" },
      { label: "Track", value: "Crop" },
      { label: "Quality verdict", value: "Meets standard" },
      { label: "Corridor", value: "Export market" },
    ],
  },
};

/** Animated example record for a live product, or nothing if none is defined. */
export function ProductMock({ slug, className }: { slug: string; className?: string }) {
  const example = examples[slug];
  const page = getProductPage(slug);
  if (!example || !page?.journey) return null;
  return <RecordMock {...example} stages={page.journey.stages} className={className} />;
}
