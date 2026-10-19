import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-ink pt-24 text-white">
      <Container className="max-w-3xl">
        <p className="font-display text-8xl font-bold text-gold sm:text-9xl">404</p>
        <h1 className="font-display mt-6 text-3xl font-semibold sm:text-5xl">
          This page could not be found.
        </h1>
        <p className="mt-4 text-white/70">It may have moved while we rebuild our website.</p>
        <div className="mt-10">
          <Button href="/">Back to home</Button>
        </div>
      </Container>
    </section>
  );
}
