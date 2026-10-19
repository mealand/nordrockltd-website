# NordRock Limited — Website Development Plan

## Context
NordRock's current site (nordrockltd.com) is a half-finished WordPress build on the **Stal theme by Qode Interactive**. Only three pages carry real NordRock content (Home, What We Do, Who We Are). The rest is inactive (`#` menu links) or theme demo content. The brief (`Downloads/Nordrock Website.pdf`) asks for a complete, robust, corporate, media-heavy and animation-rich site, built in `NORDROCK/nordrockltd-website` (currently empty). Code goes to `github.com/mealand/nordrockltd-website`, and the site is reviewed at `newsite.nordrockltd.com` before moving to the main domain.

**Decisions confirmed:**
- **Framework:** Next.js (React) with static export.
- **Hosting:** the cPanel host, on the `newsite` subdomain, deployed by GitHub Action over FTP.
- **Partners:** name them (KMDC, Ulba, MiRESSO, EPRM), but publish no contract values, tonnages, margins, valuation, funding asks or projections.
- **Stats:** drop the unverified placeholder statistics from the old "Website Contents" draft (earnings, headcount, country count).

## 1. Content audit: real vs. demo (from the live site)
**Keep (NordRock original):**
- **Home:**
  - Hero line: "Africa's First Mining Enterprise Based on Asset Backed Blockchain Technology".
  - Goal section: "Creating a Legitimate Mining Ecosystem in Africa".
  - Why Invest cards: Partnerships, Technology, ESG.
  - Concentration Hub section (10 ktpa, bag-and-tag traceability).
  - Partner logos.
  - Contact details: 47 Sen. Ashiru Drive, Lavista Court, Galadimawa, Abuja; +234 816 155 3888; +32 496 761 010; contact@nordrockltd.com.
- **What We Do:** intro text; six services (Supply & Sourcing, Logistics, Processing, Artisanal Capacity Building, Artisan Empowerment & Community Development, Consulting & Facilitating); four deliverables (Sourcing, Transformation, Compliance, Market Access); "Our Approach".
- **Who We Are:** "Methodically Unlocking the Future…" overview, impact statement, challenges solved, Innovation / Artisans Engagement / Strategic Partnerships, and the Operational Excellence Model strategy (01–02).

**Discard (Stal demo):**
- Timeline: "1930 Foundation / 1942 New Pipeline / NY Railway".
- Strategy item 03 body text ("Exceptional performance is the result…").
- Portfolio items (new-structures, innovative-project, hard-work, custom-fabrication).
- Footer and side-area details: Bogota addresses, qodeinteractive emails, (123) phone numbers, Qode social links.
- The header map link pointing to Uniqlo Soho, New York.

**Fix while migrating:**
- Typos: "Artisinal", "livelihoodsl", "tinclusive", "Overal".
- Mismatched phone `tel:` link.

**Other content sources:**
- `Website/Website Contents.pdf`: Vision, Mission, Values, board description.
- `NordRock TECH Component.pdf`: the 5-MVP ecosystem (TraceChain, GeoAI, SmartTrade, CrowdMine, GreenGrid).
- Pitch deck, public-safe parts only:
  - ASM context (~85% of activity).
  - The 3-pillar framework: Digital/Physical asset, Artisan engagement, Trade finance.
  - The 4 empowerment frameworks: Legalize, Strong ESG, Enable, Finance; plus mercury-free and zero child-labour commitments.
  - Named partners.
  - Timeline milestones (incorporated 3 Sept 2025, etc.), shown without monetary values.
- TraceChain repo (`dev/tracechain/tracechain-app`): 8 supply-chain roles plus Inspector/Admin, Nexus ID / Trace ID, multi-step verified registration, role dashboards.
- AgroTrace / ATiMS repo: agricultural traceability, compliance engine, quality-verdict engine, SHA-256 fingerprinting moving to Hyperledger Fabric, and an AI advisor.
- Brand: Dark Blue `#1D2545` and Sky Blue `#DEF5FF` (`Website/colors.txt`), with logos in the `NORDROCK` root and `Website/Media Library`.

**Never publish** from the pitch deck: financial projections, company valuation, fundraising amounts and terms, investor returns, contract values, volumes, margins, payment-security instruments and the banks behind them, or use-of-funds breakdowns.

## 2. Sitemap (menu per brief)
| Menu | Route | Key sections |
|---|---|---|
| Home | `/` | Video hero, value proposition, 3 pillars, industries teaser, products teaser, Concentration Hub, partner marquee, CTA |
| What We Do | `/what-we-do` | Services grid (6), "What we deliver" (4), value-chain animation (pit → hub → buyer), approach |
| Who We Are | `/who-we-are` | Overview, Vision/Mission/Values, Operational Excellence Model, leadership & governance, milestones timeline |
| Industries *(new)* | `/industries` + `/industries/[slug]` | Mineral Operations (Extraction, Sourcing, Trading, ASM Formalization), Technology, Renewable Energy (solar in Nigeria and GreenGrid) |
| Products | `/products` + `/products/[slug]` | TraceChain and AgroTrace (live, linked to their subdomains); GeoAI, SmartTrade, CrowdMine, GreenGrid shown as "In development" |
| Why Choose Us *(renamed)* | `/why-choose-us` | Partnerships (named), Technology, ESG/HSE, artisan empowerment frameworks, competitive edge |
| Join Us | `/join-us` | Careers / work with us, partner & supplier onboarding, artisan cooperative onboarding (links to TraceChain registration) |
| Get In Touch | `/contact` | Contact form, Abuja office map embed, phones, email, enquiry types (investor, media, partnership) |

Also include a custom 404, `/privacy`, `sitemap.xml` and `robots.txt`.

## 3. Tech stack & project structure
- **Core:** Next.js 15 (App Router) + TypeScript, with `output: 'export'` producing a static `out/` folder for cPanel.
- **Styling and motion:**
  - Tailwind CSS with brand tokens.
  - GSAP + ScrollTrigger for scroll-driven sequences, plus Lenis smooth scroll.
  - Framer Motion for component transitions.
  - All motion respects `prefers-reduced-motion`.
- **Content:** typed data files in `src/content/*.ts`, so copy can be edited without touching components.
- **Contact form:** static export has no server, so the form posts to `public/api/contact.php`, a small PHP mailer on cPanel. It uses a honeypot field and rate limiting, and sends to contact@nordrockltd.com.

```
nordrockltd-website/
├── .github/workflows/deploy.yml   # build → FTP deploy to newsite subdomain
├── public/
│   ├── media/{images,video,logos} # optimized outputs only
│   └── api/contact.php
├── media-src/                     # git-ignored raw originals
├── scripts/optimize-media.mjs     # sharp + ffmpeg pipeline
├── src/
│   ├── app/                       # routes from the sitemap (layout.tsx, page.tsx per route)
│   ├── components/{layout,sections,ui,motion}/
│   ├── content/                   # site.ts, services.ts, industries.ts, products.ts, partners.ts, team.ts
│   ├── lib/                       # seo.ts, utils.ts
│   └── styles/globals.css
├── next.config.ts  tailwind.config.ts  tsconfig.json  README.md
```

## 4. Design system
- **Colours:**
  - Primary navy `#1D2545` and sky `#DEF5FF` (from the current brand).
  - A deeper ink `#0F1428` for dark sections.
  - A mineral-gold accent (`#C9A54C`, for CTAs and highlights only).
  - Neutral greys.
  - All pairs checked for WCAG AA contrast.
- **Typography:** a geometric display face (e.g. Sora or Manrope) for headings and Inter for body text, self-hosted with `next/font`.
- **Motion vocabulary:**
  - Hero: video with masked headline reveal.
  - Sections: staggered fade/slide-ins.
  - Counters for safe stats.
  - Pinned horizontal "value chain" scroll on What We Do.
  - Parallax image bands.
  - Infinite partner-logo marquee.
  - Magnetic/hover CTAs and page-transition curtain.
- **Layout:** sticky header that shrinks on scroll, full-screen mobile menu, and a mega-dropdown for Industries/Products.

## 5. Media pipeline (brief: enhance, lightweight, strip audio)
`Media/` holds 20 JPEGs (~1.9 MB total) and 9 MP4s (~82 MB; `8.mp4` alone is 38 MB).
- **Tooling:** ffmpeg is **not installed**, so install it first (`winget install Gyan.FFmpeg`). Add `sharp` as a dev dependency.
- **Images:**
  - Mild auto-levels and sharpening.
  - Resize to 640/1280/1920 widths.
  - Output AVIF + WebP + JPG fallback, with blur placeholders.
- **Video:**
  - `-an` to remove audio.
  - Scale to 1080p and 720p.
  - H.264 MP4 (CRF ~26, `+faststart`) plus WebM (VP9).
  - Trim hero loops to 10–20 s.
  - Extract poster frames.
  - Target under 3–4 MB per hero clip.
- **Additional images:** `Website/Media Library` PNGs (artisans, meetings, partners, innovation) also go through the pipeline.
- **Visual check:** review every asset first, so no sensitive documents or faces are used without consent.

## 6. Build phases
1. **Scaffold:** Next.js + TS + Tailwind + lint/prettier, `git init`, remote set to `mealand/nordrockltd-website`, `.gitignore` for `media-src/`.
2. **Media:** install ffmpeg, write `optimize-media.mjs`, process everything into `public/media`.
3. **Design system:** tokens, fonts, layout shell (Header, Footer, MobileNav), motion primitives (Reveal, Parallax, Counter, Marquee, PinnedScroll).
4. **Content files:** write the cleaned copy from §1, rewritten for the web and kept within the confidentiality limits.
5. **Pages:** Home → What We Do → Who We Are → Industries → Products → Why Choose Us → Join Us → Contact → 404/Privacy.
6. **SEO & a11y:**
   - Per-page metadata, Open Graph images, JSON-LD `Organization`, sitemap and robots.
   - `noindex` while the site lives on `newsite.`
   - Keyboard navigation and alt text.
7. **Performance:**
   - Lazy-loaded videos with posters.
   - Respect `saveData` / reduced motion.
   - Lighthouse targets: ≥ 90 Performance, ≥ 95 Accessibility, SEO and Best Practices.
8. **Deploy:**
   - Create the `newsite` subdomain in cPanel.
   - Add GitHub secrets (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`) yourself; I won't handle credentials.
   - The workflow runs `npm ci && npm run build`, then deploys `out/` with `SamKirkland/FTP-Deploy-Action`.
   - Add an `.htaccess` for clean URLs and caching headers.

## 7. Content gaps you'll need to fill
- Leadership names, titles and photos (`Team.pdf` is empty). The page ships with the governance description and a placeholder grid until you supply these.
- Partner logo files (KMDC, Ulba, MiRESSO, EPRM, etc.) and permission to show them.
- Social media links (LinkedIn, X) and any open job roles.
- Confirm the Belgian number (+32) and whether to list a second office.

## Verification
- `npm run build` succeeds with no type or lint errors.
- `npx serve out` lets me browse locally in the browser pane. I'll check every menu route at 375 px, 768 px and desktop, in both light conditions and reduced-motion mode.
- Lighthouse runs on each page.
- An axe accessibility scan finds no critical issues.
- Media: `ffprobe` confirms no audio streams, and file-size totals are reported (target under 25 MB for the whole site).
- The contact form is tested on the newsite subdomain after deploy.
- A grep of the built HTML finds no confidential figures (e.g. `$`, "valuation", "EBITDA", "SBLC") and no Stal demo text ("Bogota", "qode", "1930").
- The GitHub Action runs green and `https://newsite.nordrockltd.com` loads.
