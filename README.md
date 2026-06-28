# KB Electrics – Next.js 14 Website

A warm, paper-and-copper styled website for KB Electrics, a family-run electrical
company based in Clanfield, Hampshire.

## Design

- **Palette**: warm paper background (#F7F4EC), bottle green (#1B3A2E), copper (#C4632B)
- **Type**: Fraunces (display serif), Inter (body), JetBrains Mono (labels/data)
- **Signature element**: "Job Ticket" cards — torn-edge paper tickets with a hand-stamped
  circular badge, used across Services, Projects, Reviews and Finance sections.

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

1. Replace placeholder gallery emoji blocks in `ProjectsSection.tsx` with real photos
2. Add real Google reviews to `ReviewsSection.tsx` once available
3. Update the Google Map embed query in `MapSection.tsx` if needed
4. Add company logo to `/public` and reference in `Navbar.tsx` / `Footer.tsx`
5. Update social links in `Footer.tsx`

## Build

```bash
npm run build
npm start
```
