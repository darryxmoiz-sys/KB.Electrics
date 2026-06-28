# KB Electrics – Next.js 14 Website (V2 — Modern Gradient Design)

A bold, modern, gradient-driven website for KB Electrics, a family-run electrical
company based in Clanfield, Hampshire — built as 6 distinct pages.

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, why choose us, services preview, emergency banner, reviews preview, CTA |
| `/services` | Full breakdown of all 6 service categories |
| `/solar-ev` | Solar panels, battery storage, EV charging & finance |
| `/projects` | Recent projects gallery + areas covered |
| `/about` | Company story, values, community sponsorship + reviews |
| `/contact` | Contact form, FAQs, Google Map |

## Design

- **Palette**: midnight indigo background (#0B1120), violet-to-cyan gradient (#7C5CFF → #22D3EE), amber accent (#FFB454)
- **Type**: Space Grotesk (display), Inter (body), Sora (accent/labels)
- **Signature elements**: glassmorphism cards with gradient-glow hover states, animated
  conic gradient-ring borders, drifting blurred gradient blobs, gradient text headlines

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- React Icons
- TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customisation

1. Replace placeholder emoji blocks in `ProjectsSection.tsx` with real photos
2. Add real Google reviews to `ReviewsSection.tsx` / `ReviewsPreview.tsx` once available
3. Update the Google Map embed query in `MapSection.tsx` if needed
4. Add company logo to `/public` and reference in `Navbar.tsx` / `Footer.tsx`
5. Update social links in `Footer.tsx`

## Build

```bash
npm run build
npm start
```
