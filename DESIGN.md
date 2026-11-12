# DESIGN.md — Luma & Living Storefront Catalogue

## Identity & Mood

- **Brand:** Luma & Living
- **Category:** Scandinavian minimalist furniture and home objects catalogue
- **Audience:** Design-conscious homeowners and interior curators looking for calm, warm, tactile furnishings
- **Personality:** Warm, architectural, unhurried, editorial, tactile
- **Dial:** `ENERGY 1 / RHYTHM 2 / MOTION 1`
- **Design Read:** Scandinavian minimalist furniture catalogue storefront for design-conscious home buyers, in a warm editorial architectural style, dial `ENERGY 1 / RHYTHM 2 / MOTION 1`.

## Color System & Contrast Verification (R-25, R-29, R-31)

| Token | Hex | Role | One-Line Purpose & Contrast Note |
|---|---|---|---|
| `--color-cream` | `#FAF8F3` | Primary page canvas | Warm linen base avoids sterile white and grounds wood/ceramic product tones. |
| `--color-cream-header` | `#FCFAF6` | Sticky header surface | Slightly lighter warm ivory distinguishes navigation chrome from the catalog canvas. |
| `--color-card-bg` | `#EFECE6` | Product image container | Neutral stone frame holds a 4:5 editorial ratio before and behind product photography. |
| `--color-cream-footer` | `#F2ECE5` | Footer surface | Deeper sand tone anchors the bottom of the page below the dark newsletter band. |
| `--color-charcoal-main` | `#211E1A` | Primary ink & headings | Warm espresso-charcoal delivers 15.54:1 contrast on `#FAF8F3` (WCAG AAA). |
| `--color-charcoal-dark` | `#171411` | Newsletter surface & active pills | Deep kiln-charcoal creates a high-contrast break between catalog and footer. |
| `--color-text-muted` | `#6E685F` | Secondary copy & descriptions | Warm slate-stone provides 5.21:1 contrast on `#FAF8F3` and 4.65:1 on `#F2ECE5` (WCAG AA). |
| `--color-text-subtle` | `#696159` | Breadcrumbs, categories, counts | Refined from raw Stitch `#A39A8E` to pass WCAG AA (5.68:1 on `#FAF8F3`, 5.07:1 on `#F2ECE5`). |
| `--color-text-on-dark-muted` | `#B8B0A6` | Newsletter supporting copy | Warm ash-sand on `#171411` yields 8.35:1 contrast (WCAG AAA). |
| `--color-border-light` | `#DCD4C8` | Dividers & card borders | Warm stone hairline separates toolbar and footer sections without harsh black lines. |
| `--color-sale-tag` | `#B33932` | Discount badge & mobile sale price | Deliberate terracotta-crimson accent yields 5.47:1 contrast with white text (WCAG AA). |
| `--color-gold-accent` | `#8A6829` | Star rating glyph color | Warm aged brass accent highlights product ratings without neon saturation. |
| `--color-badge-sand` | `#7A5C38` | Header notification counter | Warm bronze-sand badge with white text passes 5.51:1 contrast on desktop; `#211E1A` on mobile. |

## Typography (R-06, R-31)

- **Display & Editorial Serif (`Cormorant Garamond`):** Used for brand wordmark (`26px` desktop / `23px` mobile), page title (`44px` desktop / `32px` mobile), newsletter heading (`38px` desktop / `28px` mobile), and mobile product titles (`14px`). *Reason: High-contrast humanist serif evokes print lookbooks and tactile architectural monographs.*
- **UI & Catalog Sans (`Inter` on desktop, `Plus Jakarta Sans` on mobile):** Used for navigation (`13px`), category pills (`12px`), product metadata (`11px-14px`), and footer links (`12px`). *Reason: Neutral, open-aperture sans-serif keeps dense prices, ratings, and filter controls crisp at small sizes.*

## Layout, Rhythm & Responsive Reflow (R-03, R-05, R-31)

- **Container:** `max-w-[1400px]` with `48px` (`lg:px-12`) horizontal padding on desktop, `24px` (`md:px-6`) on tablet, and `16px` (`px-4`) on mobile. *Reason: Gives four product columns generous breathing room on wide monitors and aligns consistently with the site header and other pages.*
- **Section Rhythm (RHYTHM 2):**
  1. Sticky navigation bar (`80px` desktop, compact `56px` mobile with left menu trigger and centered wordmark).
  2. Editorial catalog intro (breadcrumb + serif H1 + subtitle + right-aligned result count on desktop, stacked on mobile).
  3. Bordered catalog toolbar on desktop (`Filters` pill + 7 category buttons + `Sort by` + grid/list switch); sticky horizontal scroll pill strip + secondary sort/view row on mobile.
  4. `4:5` portrait product grid (`4` columns on desktop `lg:grid-cols-4`, `3` columns on tablet `md:grid-cols-3`, `2` columns on mobile `grid-cols-2`, or full-width horizontal cards in `list` mode).
  5. Centered pill pagination control (`< 1 2 3 ... 8 >`).
  6. Full-bleed dark `#171411` newsletter band (`py-20` desktop inline pill form, `py-12` mobile stacked form).
  7. Warm sand `#F2ECE5` 5-column desktop / 2-column mobile footer with copyright and legal links.

## One-Line Decision Reasons (R-31)

- **Why this color palette?** Warm linen (`#FAF8F3`), stone (`#EFECE6`), and deep charcoal (`#171411`) mirror natural upholstery, oak, and ceramic materials in the Luma & Living collection while meeting WCAG AA contrast.
- **Why this layout?** A 4-column desktop / 2-column mobile grid with `4:5` portrait cards maximizes visual inspection of furniture silhouettes while keeping filter and sort controls immediately accessible.
- **Why this typography?** Pairing `Cormorant Garamond` headings with `Inter`/`Plus Jakarta Sans` metadata balances editorial warmth with utilitarian price and filter scannability.
- **Why this spacing?** Generous vertical row gaps (`44px` desktop, `24px` mobile) and a `1400px` container create an unhurried showroom cadence where each piece stands alone.
- **Why use cards?** Uniform `4:5` portrait product cards allow shoppers to compare silhouettes, ratings, and prices across categories in a single glance.
- **Why bespoke inline SVGs / curated icons?** Inline stroke SVGs matching the Stitch reference (search magnifier, heart, bag, filter sliders, grid/list glyphs, and social marks) avoid generic AI feature icons while maintaining crisp 1.5px-2px stroke harmony.
