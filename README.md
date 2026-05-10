# Mora Web

Marketing website for [Mora](https://mora.ai) — AI agents that handle checkout.

Built with [Next.js 15](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [TypeScript](https://www.typescriptlang.org).

## Running locally

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Other commands

```bash
npm run build   # Production build
npm run start   # Start production server (after build)
npm run lint    # Run ESLint
```

## Project structure

```
mora-web/
├── app/
│   ├── globals.css     # Global styles, glass card utilities
│   ├── layout.tsx      # Root layout, font setup
│   └── page.tsx        # Home page (assembles all sections)
├── components/
│   ├── nav.tsx         # Fixed glass navigation bar
│   ├── hero.tsx        # Hero section
│   ├── how-it-works.tsx
│   ├── video-demo.tsx
│   ├── story.tsx
│   ├── pillars.tsx     # Product cards (Checkout Ghost, Voice Rerouter)
│   ├── payment-rails.tsx
│   ├── developers.tsx
│   ├── cta.tsx         # Waitlist / coming soon section
│   └── footer.tsx
└── public/
```
