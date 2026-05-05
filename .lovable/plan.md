## NovaCapital Landing Page

A single-page React landing site replicating FP Markets' clean corporate look — deep navy hero, white content sections, 3D-style crypto illustrations, and pill CTAs.

### Design system

- Colors locked to spec: navy `#0a1628`, white, light-gray `#f5f7fa`, accent `#00a0e3`, success `#059669`, danger `#dc2626`. No gradients, neons, or off-palette colors.
- Typography: Inter, weights 400/500/600/700.
- All tokens added to `src/styles.css` as CSS variables + Tailwind theme mappings (e.g. `bg-navy`, `bg-accent`, `text-success`).
- Smooth `scroll-behavior` and global Inter font.

### Page sections (top → bottom)

1. **Sticky Nav** — transparent over hero, turns white + shadow on scroll. Wordmark left, links center (Markets / Invest / Trade / About), Sign In + Get Started pill right. Mobile hamburger.
2. **Hero** (full viewport, navy) — 55/45 split. Left: H1, subtitle, Start Investing + View Plans pills. Right: 3D crypto composition (Bitcoin/Ethereum/Solana coins floating with CSS `preserve-3d` + perspective + float keyframes) layered above a white dashboard mockup card showing a mini SVG portfolio chart and balance.
3. **Live Crypto Ticker** — sticky 44px navy bar below hero, infinite CSS marquee with BTC/ETH/SOL/USDT/BNB/XRP/ADA, monospace numbers, green/red/white change indicators.
4. **Why NovaCapital** (white, 50/50) — Left: 3D arch/bridge illustration (CSS-shaped curved element with BUY/SELL labels echoing the reference). Right: heading + 6 bullet points with accent ArrowRight icons.
5. **How to get started** (white) — 3 cards (Register / Fund / Earn) with 3D-style icon tiles, then centered Get Started pill.
6. **Investment Plans** (light gray) — 3 plan cards (Conservative 7% / Balanced 9% / Aggressive 12.5%) with left accent border, ROI hero number, details list, Select Plan pill.
7. **Profit Calculator** (white) — single centered card. Number input for amount, three clickable plan boxes (no slider, no radios), live computed Daily/Monthly/Total grid in green, summary line, Start This Plan pill.
8. **Market Stats** (navy) — 4 animated count-up stats ($50M+, 12,000+, $2.4M, 99.9%) triggered on scroll via Framer Motion `useInView`.
9. **Live Activity Popups** — fixed bottom-left Slide-In with Fade, max 2 stacked, random 4–8s interval, 5s auto-dismiss, slide+fade via Framer Motion. Pool of ~12 realistic deposit/earn/withdraw entries with country flags. first pop-up disappears before second pop-up shows.
10. **Footer** (navy) — 4 columns (Platform, Support, Legal, Connect) + copyright/socials.

### Interactions & motion

- Framer Motion only for: stat counters, activity popup enter/exit. Everything else is CSS (marquee, float, hover transforms).
- Card hover: `translateY(-4px)` + shadow bump.
- Hero 3D coins: subtle mouse-parallax via React state + `rotateX/rotateY` on container.

### Responsive

- Mobile: hamburger sheet nav, hero stacks, all card grids collapse to single column, stats become 2×2, popups 220px wide.
- Tablet: 2-column grids where applicable.

### Technical notes

- TanStack Start: replace `src/routes/index.tsx` placeholder with the new landing page. Split into components under `src/components/landing/`: `Nav`, `Hero`, `HeroIllustration`, `CryptoTicker`, `WhyUs`, `HowItWorks`, `Plans`, `Calculator`, `Stats`, `ActivityPopups`, `Footer`.
- Add `framer-motion` dependency. Lucide already implied available via shadcn setup; reuse existing `Button` only where the pill style fits, otherwise custom Tailwind classes for exact pill spec.
- Update `__root.tsx` head meta: title "NovaCapital — Institutional-grade crypto investing", description, og tags.
- No backend, no auth, no database — purely static marketing page. All ticker prices, stats, and activity entries are hardcoded mock data.

### Out of scope

- No real auth, signup flow, or dashboard pages.
- No three.js (CSS 3D keeps bundle small and matches the brief's "lightweight" note).
- No risk disclaimers / compliance copy.