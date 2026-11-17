<div align="center">

# Luma & Living
### Scandinavian Minimalist Furniture & Home Objects Storefront

<p align="center">
  <em>Considered pieces for the home you are building, one room at a time.</em>
</p>

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-211E1A?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1.9-FAF8F4?style=flat-square&logo=tailwindcss&logoColor=38bdf8)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![WCAG](https://img.shields.io/badge/Accessibility-WCAG_AA%2FAAA-7A5C38?style=flat-square)](./DESIGN.md)
[![Tests](https://img.shields.io/badge/Tests-36%20Passed-4A6B48?style=flat-square)](#testing)

<br />

[Live Demo](#) · [Design System](./DESIGN.md) · [Architecture](#project-architecture) · [Getting Started](#getting-started)

<br />

</div>

---

## Overview

**Luma & Living** is an editorial e-commerce catalogue inspired by contemporary Scandinavian craftsmanship and architectural monographs. Built with **Next.js 16 (App Router)** and **React 19**, it blends tactile materiality with rigorous modern frontend engineering: fluid responsive reflow, zero-shift animations, strict WCAG AA/AAA contrast ratios, and a distraction-free checkout journey.

Every detail—from the 4:5 portrait product ratios down to the aged brass accent tokens and warm linen canvas—is designed to give furniture silhouettes breathing room and convey quiet luxury.

---

## Design Philosophy & Tone

```
Aesthetics: Scandinavian Minimalism / Warm Editorial Architectural
Palette:    Warm Linen (#FAF8F4) · Stone (#EFECE6) · Deep Charcoal (#171411) · Aged Brass (#8A6829)
Typography: Cormorant Garamond (Display Serif) + Inter & Plus Jakarta Sans (Metadata)
Cadence:    Energy 1 / Rhythm 2 / Motion 1 (Unhurried, deliberate, grounded)
```

- **Warmth Over Clinical White:** Instead of cold hex `#FFFFFF`, surfaces utilize warm linen (`#FAF8F4`) and sand (`#F2ECE5`) to evoke tactile linen, oiled white oak, and hand-thrown ceramics.
- **Editorial Rhythm:** Generous spacing (`1400px` container cap, `44px` desktop row gaps) lets each silhouette stand on its own merits like an architectural lookbook.
- **Crafted Typography:** High-contrast humanist serif for titles balances ultra-crisp utilitarian sans-serif for product dimensions, pricing, and faceted controls.
- **Accessibility by Default:** Every text and badge pairing exceeds WCAG AA standards (headings achieve 15.54:1 contrast on cream backgrounds).

---

## Detailed Tech Stack

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) | `16.2.6` | App Router, Server Components, SSR hydration stability, static metadata |
| **Library** | [React](https://react.dev/) | `19.2.0` | Latest Concurrent React primitives, Actions, and unified rendering |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `^5.0.0` | Strict type-safety across checkout contracts, cart items, and catalog filters |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `v4.1.9` | Next-generation engine with `@tailwindcss/postcss` and CSS variable tokens |
| **PostCSS** | [PostCSS](https://postcss.org/) | `8.5.15` | Modern CSS transformation pipeline |
| **UI Primitives** | [Radix UI](https://www.radix-ui.com/) | Latest | Accessible unstyled primitives (`Dialog`, `Select`, `Checkbox`, `Slot`) |
| **Mobile Drawers** | [Vaul](https://vaul.emilkowal.ski/) | `^1.1.2` | Fluid iOS-style touch-draggable sheets for mobile navigation and filters |
| **Motion** | [Framer Motion](https://www.framer.com/motion/) | `^14.12.0` | Subtle layout transitions, search bar unveil, and drawer spring physics |
| **Icons** | [Lucide React](https://lucide.dev/) | `^0.454.0` | Minimalist line icons tuned to 1.5px and 2px architectural weights |
| **Class Utilities** | `clsx` & `tailwind-merge` | `2.1.1` / `3.3.1` | Conflict-free dynamic className generation |
| **Variants** | `class-variance-authority` | `^0.7.1` | Type-safe design system component variants (buttons, badges) |
| **Test Runner** | Node.js Test Runner | Native | Zero-dependency testing via `node --experimental-strip-types --test` |

---

## Key Features

### 1. Curated Storefront & Shop Catalogue
- **Faceted Product Filter Engine:** Live filtering by category (Living, Dining, Lighting, Bedroom, Office, Ceramics), in-stock status, and sale tags without page reloads.
- **Dual Presentation Modes:** Seamlessly toggle between a 4:5 portrait grid (4 columns desktop, 2 columns mobile) and a full-bleed horizontal list view.
- **Dynamic Sorting & Pagination:** Sort by popularity, new arrivals, price (low-high / high-low), and star rating.

### 2. Deep Product Detail Page (PDP)
- **Silhouette Inspection Gallery:** Multi-angle photography showcase with responsive aspect ratios.
- **Tactile Material & Dimension Badges:** Clear display of materials, lead times, warranty, and exact metric/imperial dimensions.
- **Interactive Variant Picker:** Finish, wood species, and fabric swatch selection.

### 3. Frictionless Commerce Flow
- **Slide-Over Drawers:** Persistent Cart and Wishlist slide-overs with real-time subtotal calculations and item quantity controls.
- **Streamlined Checkout:** Clean 2-step checkout flow supporting promo codes (e.g. 10% coupon validation) and automatic tax computation.
- **Editorial Order Confirmation:** Branded receipt with unique order numbers, courier tracking references, and a 4-stage delivery timeline.

### 4. Resilient Layout & Mobile Ergonomics
- **Anti-Zoom & Scroll Stability:** Mobile viewport lock prevents unwanted auto-zoom on form inputs while maintaining buttery scroll preservation.
- **SSR Hydration Guard:** Zero badge count flicker or select dropdown shifts during server-to-client transitions.

---

## Design System & Color Tokens

```css
/* Core Palette Tokens */
--color-cream:          #FAF8F4; /* Primary canvas linen base */
--color-cream-header:   #FCFAF6; /* Elevated header surface */
--color-card-bg:        #EFECE6; /* 4:5 Neutral stone product frame */
--color-cream-footer:   #F2ECE5; /* Anchoring sand footer */
--color-charcoal-main:  #211E1A; /* Primary espresso ink (15.54:1 AAA) */
--color-charcoal-dark:  #171411; /* Newsletter band & deep surface */
--color-text-muted:     #6E685F; /* Secondary descriptions (5.21:1 AA) */
--color-sale-tag:       #B33932; /* Terracotta-crimson discount accent */
--color-gold-accent:    #8A6829; /* Warm aged brass rating stars */
--color-border-light:   #DCD4C8; /* Fine stone divider hairlines */
```

---

## Project Structure

```
storefront/
├── src/
│   ├── app/                      # Next.js App Router (Pages, Layouts, Metadata)
│   │   ├── about/                # Brand heritage & craftsmanship story
│   │   ├── cart/                 # Full-page cart overview
│   │   ├── checkout/             # Multi-step checkout & payment views
│   │   ├── collections/          # Curated seasonal lookbooks
│   │   ├── contact/              # Customer concierge & showroom appointments
│   │   ├── order-confirmation/   # Post-purchase receipt & timeline
│   │   ├── products/[id]/        # Dynamic Product Detail Pages (PDP)
│   │   ├── shop/                 # Faceted catalog with grid/list switcher
│   │   ├── globals.css           # Tailwind v4 directives & layout rules
│   │   └── layout.tsx            # Root layout with font declarations
│   ├── components/
│   │   ├── layout/               # Header, Footer, Newsletter, Slide Drawers
│   │   ├── navigation/           # Responsive Navbar, Breadcrumbs, Route configs
│   │   ├── pages/                # Page-level composition components
│   │   ├── products/             # Cards, Filters, Toolbar, Pagination, Rating
│   │   └── ui/                   # Reusable Radix UI & design system primitives
│   ├── context/                  # StorefrontContext (Cart, Wishlist, Drawer states)
│   ├── data/                     # Mock data sets (products, landing, PDP, checkout)
│   ├── hooks/                    # useCart, useWishlist, useCatalog
│   ├── lib/                      # Styling utilities (cn helper)
│   ├── styles/                   # Design token definitions
│   ├── types/                    # TypeScript interfaces & domain models
│   └── __tests__/                # 36 comprehensive test suites
├── DESIGN.md                     # Comprehensive design specification & tokens
├── package.json
└── tsconfig.json
```

---

## Getting Started

### Prerequisites
- **Node.js**: `v20.x` or later (tested with native strip-types support)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/storefront.git
   cd storefront
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the storefront.

---

## Build & Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server with Turbopack |
| `npm run build` | Compiles the production application bundle |
| `npm run start` | Runs the built application in production mode |
| `npm test` | Runs the 36 automated unit & layout integrity tests |

---

## Testing

The project uses the lightweight native **Node.js Test Runner** (`node:test`) paired with experimental type stripping for fast, dependency-free verification.

Run test suite:
```bash
npm test
```

### Verified Test Suites (36 Passing):
- Catalog filtering & sorting accuracy
- Checkout calculation & discount coupon validation
- Zero em dashes copy audit
- Order confirmation tracking & stage transitions
- Navigation routing and active state resolution
- Layout shift prevention & sticky header mobile ergonomics
- SSR hydration stability across select dropdowns & badge counters

---

## Accessibility & Performance Standards

- **Contrast Ratios:** All text elements adhere strictly to **WCAG 2.2 AA / AAA** compliance.
- **Layout Shift Prevention:** Aspect-ratio-constrained photo frames eliminate Cumulative Layout Shift (CLS).
- **Reduced Motion:** Interactive elements respect user preferences for reduced motion via clean CSS transitions.
- **Semantic Markup:** Built with native HTML5 elements, Radix ARIA attributes, and accessible drawer triggers.

---

## License

This project is licensed under the [MIT License](LICENSE).

<div align="center">
  <sub>Crafted with patience and care for architectural living.</sub>
</div>
