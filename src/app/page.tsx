// Temporary holding page while the design system and pages are built
// (see docs/DEVELOPMENT_PLAN.md, phases 3–5).
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 bg-navy px-4 py-24 text-center text-sky">
      <picture>
        <source srcSet="/media/logos/nordrock-logo-white.webp" type="image/webp" />
        <img
          src="/media/logos/nordrock-logo-white.png"
          alt="NordRock"
          className="h-auto w-56 sm:w-72"
        />
      </picture>
      <h1 className="font-display max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
        A new NordRock website is on its way.
      </h1>
      <p className="max-w-xl text-sky/80">
        Africa&apos;s first mining enterprise based on asset-backed blockchain technology.
      </p>
      <a
        href="mailto:contact@nordrockltd.com"
        className="rounded-full bg-gold px-6 py-3 font-medium text-ink transition hover:bg-gold-600"
      >
        contact@nordrockltd.com
      </a>
    </main>
  );
}
