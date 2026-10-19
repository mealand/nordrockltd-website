import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

/** Temporary band shown on pages whose body is still being built (phase 5). */
export function InProgress({ topic }: { topic: string }) {
  return (
    <Section tone="muted">
      <Container className="max-w-3xl text-center">
        <p className="text-lg leading-relaxed text-stone-500">
          The full {topic} page is being prepared. In the meantime, our team is happy to answer any
          questions directly.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/contact/" variant="secondary">
            Contact NordRock
          </Button>
        </div>
      </Container>
    </Section>
  );
}
