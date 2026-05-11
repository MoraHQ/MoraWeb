# Mora — Image & Video Asset Recommendations

This document lists recommended visual assets for each section of the Mora landing page.
All suggestions include source, search terms, and how to integrate them into the component.

---

## Hero Section (`hero.tsx`)

**Goal:** Instantly communicate speed, intelligence, and frictionless payment.

### Option A — Abstract / AI visual (recommended)
- **Source:** Unsplash
- **Search terms:** `"abstract purple glow neural"`, `"dark purple gradient technology"`, `"electric violet abstract background"`
- **How to use:** Replace the CSS `hero-bg` background with a full-bleed `<Image>` component placed behind all content with `object-fit: cover` and low opacity (0.3–0.4). Add `priority` prop for LCP performance.
- **Example URL pattern:** `https://unsplash.com/s/photos/purple-abstract-technology`

### Option B — Phone + transaction UI mockup
- **Source:** Mockup World, Shots.so, or custom Figma frame
- **Type:** A phone showing a payment confirmation overlay
- **Placement:** Right side of the hero on desktop (convert to two-column layout), hidden on mobile.

### Option C — Looping subtle video background
- **Source:** Pexels Video — search `"abstract glow purple"` or `"neural network dark"`
- **Format:** MP4, 1920×1080, 5–10s loop, muted autoplay
- **How to use:** `<video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-20" />`

---

## How It Works Section (`how-it-works.tsx`)

**Goal:** Show a clear sequence — voice → data → action → confirmation.

### Step illustrations (4 icons per step)
- **Source:** Lottie files (lottiefiles.com) or Heroicons + custom SVG
- **Recommended Lottie searches:** `"microphone pulse"`, `"data enrichment"`, `"lightning payment"`, `"checkmark confirm"`
- **Format:** Use Lottie React (`@lottiefiles/react-lottie-player`) for subtle looping animations on each step card.

### Alternatively — process diagram screenshot
- **Type:** Figma-exported flow diagram showing the 4 steps with arrows
- **Style:** Dark background with violet/pink gradient arrows connecting each node

---

## Video Demo Section (`video-demo.tsx`)

**Goal:** Replace the placeholder with a real product demo or a cinematic explainer video.

### Option A — Loom-style screen recording (fastest to produce)
- **Tool:** Loom (loom.com) or Screen Studio (screenstudio.com)
- **What to record:** Narrated screen walkthrough — open a restaurant page, say a voice command, watch Mora process and confirm
- **Embed approach:** Replace the `<div>` placeholder with a Loom embed iframe or a `<video>` tag pointing to your hosted MP4

### Option B — Cinematic demo video (best impression)
- **Source:** Stock footage from Pexels/Artgrid layered with screen recordings
- **Search terms on Pexels:** `"hands phone payment"`, `"smartphone checkout"`, `"city life commute"`, `"AI assistant interface"`
- **Style reference:** Stripe's product demos, Linear's launch videos (linear.app/releases)
- **Length:** 60–90 seconds, no more

### Option C — Animated explainer (most polished, highest effort)
- **Tools:** After Effects + Lottie export, or Rive (rive.app) for interactive animations
- **Concept:** Abstract animation showing intent → pipeline → settlement with text overlays
- **Style reference:** Clerk.dev product explainer, Resend.com hero animation

### Thumbnail placeholder (current implementation)
The current code uses a styled div with a waveform SVG. To replace it with a real thumbnail:
```tsx
// In video-demo.tsx, replace the inner div with:
<Image
  src="/images/demo-thumbnail.jpg"
  alt="Mora demo video thumbnail"
  fill
  className="object-cover opacity-60"
/>
```
Recommended thumbnail: a dark screenshot of a phone confirming a payment, overlaid with the play button.

---

## Pillars Section (`pillars.tsx`)

**Goal:** Show the two product surfaces — a browser extension and a mobile Siri integration.

### Checkout Ghost card
- **Type:** Browser extension screenshot / mockup
- **Source:** Design in Figma — show a floating overlay on a product page (e.g., above an Amazon listing) with Mora's conversational UI
- **Dimensions:** 600×400px, dark theme, place in the card background at 10–15% opacity or as a right-side decorative element

### Voice Rerouter card
- **Type:** iOS screenshot with Siri handoff prompt
- **Source:** Design in Figma using Apple's SF Symbols + iOS UI Kit
- **Mockup tool:** Shots.so or Mockuuups Studio with an iPhone 15 Pro frame
- **Placement:** Same approach — subtle background or card decoration

---

## Payment Rails Section (`payment-rails.tsx`)

**Goal:** Reinforce trust — these are real, serious payment systems.

### Logo assets (high priority)
- **Stripe logo:** Official media kit at `stripe.com/newsroom/brand-assets`
- **Style:** Use the white/light version of the Stripe wordmark on dark backgrounds
- **Placement:** Small logo (24×24px) next to "Stripe Link" in the card header

### Abstract background
- **Source:** Pexels / Unsplash
- **Search:** `"financial data visualization dark"`, `"digital payment network"`, `"abstract circuits purple"`
- **Usage:** Optional full-section background image at very low opacity (5–8%) for depth

---

## Developers Section (`developers.tsx`)

**Goal:** Speak directly to technical builders.

### Code editor screenshot
- **Type:** VS Code screenshot showing Mora's SDK in use
- **Tool:** Ray.so or Carbon (carbon.now.sh) for beautiful code screenshots
- **Use:** Optional decorative element in the section background or as a second visual alongside the code block

### Terminal output illustration
- **Type:** Figma-designed terminal window showing a successful Mora API call
- **Style:** Dark terminal, violet prompt color, showing JSON response

---

## CTA Section (`cta.tsx`)

**Goal:** Create emotional urgency and trust.

### Background visual (optional)
- **Source:** Unsplash
- **Search:** `"night city lights bokeh purple"`, `"abstract particles glow"`
- **Usage:** Full-section background at 5–8% opacity behind the gradient overlay — adds depth without distraction

---

## General Asset Guidelines

### Image formats
- Use `.webp` for all photographs (better compression than JPEG)
- Use `.svg` for logos and icons
- Use `.mp4` / `.webm` for video content

### Next.js integration
Always use `next/image` for photographs:
```tsx
import Image from "next/image";
// ...
<Image src="/images/hero-bg.webp" alt="" fill className="object-cover" priority />
```

### File organization
```
public/
  images/
    hero-bg.webp         # Hero background
    demo-thumbnail.jpg   # Video demo poster frame
    checkout-ghost.png   # Pillars card decorative screenshot
    voice-rerouter.png   # Pillars card decorative screenshot
  videos/
    demo.mp4             # Product demo video
    hero-loop.mp4        # Optional hero background video loop
```

### Color treatment for photos
All photography should be processed through a dark purple color overlay:
```css
/* Tailwind equivalent */
<div className="relative">
  <Image ... className="opacity-30 mix-blend-luminosity" />
  <div className="absolute inset-0 bg-gradient-to-br from-mora-bg via-transparent to-mora-bg/80" />
</div>
```

---

## Recommended Stock Sources

| Source | Best for | Cost |
|--------|----------|------|
| Unsplash (unsplash.com) | Abstract backgrounds, tech photography | Free |
| Pexels (pexels.com) | Video loops, lifestyle photography | Free |
| Artgrid (artgrid.io) | Cinematic footage for demo video | Paid |
| Lottie Files (lottiefiles.com) | Micro-animations for step illustrations | Free tier available |
| Shots.so | Device mockups (phone, browser) | Free tier available |
| Carbon (carbon.now.sh) | Beautiful code screenshots | Free |
| Ray.so | Code screenshots with themes | Free |
