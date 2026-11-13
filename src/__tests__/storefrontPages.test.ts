import test from "node:test";
import assert from "node:assert/strict";
import {
  BRAND_PARTNERS,
  LANDING_CATEGORIES,
  LANDING_BEST_SELLERS,
  LANDING_TESTIMONIALS,
} from "../data/landingData.ts";
import {
  HOLLIS_PDP_DEFAULTS,
  PDP_REVIEWS,
  PDP_RECOMMENDATIONS,
  getProductDetail,
} from "../data/pdpData.ts";
import {
  DEFAULT_CART_ITEMS,
  CART_CROSS_SELL_ITEMS,
  FREE_SHIPPING_THRESHOLD,
} from "../data/cartData.ts";
import { PRODUCTS } from "../data/products.ts";
import {
  ABOUT_HERO,
  ABOUT_TIMELINE,
  ABOUT_PILLARS,
  ABOUT_MAKERS,
  ABOUT_SHOWROOMS,
  ABOUT_METRICS,
} from "../data/aboutData.ts";

test("Landing page data matches Stitch landing export and has zero em dashes (R-02)", () => {
  assert.deepEqual(BRAND_PARTNERS, [
    "JARVIS",
    "VAGHI",
    "QYNDA",
    "AMAQ",
    "NORDIN",
    "ELORA",
    "SENSO",
  ]);

  assert.deepEqual(
    LANDING_CATEGORIES.map((c) => `${c.name} (${c.count})`),
    [
      "Living Room (84 pieces)",
      "Bedroom (52 pieces)",
      "Dining (41 pieces)",
      "Office (35 pieces)",
    ]
  );

  assert.deepEqual(
    LANDING_BEST_SELLERS.map((p) => p.name),
    [
      "Luna Lounge Chair",
      "Nordic 1-Seater Sofa",
      "Arlo Coffee Table",
      "Evo Work Desk",
      "Haven Accent Chair",
      "Serene Dining Table",
    ]
  );

  assert.equal(LANDING_TESTIMONIALS.length, 3);
  for (const t of LANDING_TESTIMONIALS) {
    assert.equal(t.quote.includes("—"), false);
  }
});

test("Product Detail Page data matches Stitch desktop and mobile PDP exports and has zero em dashes", () => {
  assert.equal(HOLLIS_PDP_DEFAULTS.desktopGallery.length, 4);
  assert.equal(HOLLIS_PDP_DEFAULTS.mobileGallery.length, 4);
  assert.equal(PDP_REVIEWS.length, 3);
  assert.deepEqual(
    PDP_REVIEWS.map((r) => r.author),
    ["Maya R.", "Theo B.", "Priya N."]
  );
  for (const review of PDP_REVIEWS) {
    assert.equal(review.body.includes("—"), false);
  }
  for (const paragraph of HOLLIS_PDP_DEFAULTS.descriptionParagraphs) {
    assert.equal(paragraph.includes("—"), false);
  }

  const detail = getProductDetail("hollis-3-seater-sofa");
  assert.equal(detail.displayTitle, "Hollis 2-Seater Sofa");
  assert.equal(detail.price, 2140);
  assert.equal(detail.originalPrice, 2450);
  assert.equal(detail.saveBadge, "Save 13%");
  assert.equal(
    PDP_RECOMMENDATIONS.filter((r) => r.showOnDesktop).length,
    4
  );
  assert.equal(
    PDP_RECOMMENDATIONS.filter((r) => r.showOnMobile).length,
    4
  );
});

test("Cart Drawer default items match Stitch Cart Drawer ($3,240 across 3 items)", () => {
  assert.equal(DEFAULT_CART_ITEMS.length, 3);
  assert.equal(FREE_SHIPPING_THRESHOLD, 500);

  const subtotal = DEFAULT_CART_ITEMS.reduce((sum, item) => {
    const product = PRODUCTS.find((p) => p.id === item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  assert.equal(subtotal, 3240);
  assert.equal(CART_CROSS_SELL_ITEMS.length, 2);
});

test("About page data has distinct editorial storytelling and zero em dashes (R-02)", () => {
  assert.equal(ABOUT_HERO.title.includes("—"), false);
  assert.equal(ABOUT_HERO.subtitle.includes("—"), false);
  assert.equal(ABOUT_HERO.manifestoQuote.includes("—"), false);
  assert.ok(ABOUT_HERO.imageUrl.length > 0);

  assert.equal(ABOUT_TIMELINE.length, 4);
  for (const t of ABOUT_TIMELINE) {
    assert.equal(t.title.includes("—"), false);
    assert.equal(t.description.includes("—"), false);
  }

  assert.equal(ABOUT_PILLARS.length, 4);
  for (const p of ABOUT_PILLARS) {
    assert.equal(p.title.includes("—"), false);
    assert.equal(p.description.includes("—"), false);
  }

  assert.equal(ABOUT_MAKERS.length, 3);
  for (const m of ABOUT_MAKERS) {
    assert.equal(m.bio.includes("—"), false);
    assert.ok(m.initials.length >= 2);
  }

  assert.equal(ABOUT_SHOWROOMS.length, 2);
  assert.deepEqual(
    ABOUT_SHOWROOMS.map((s) => s.city),
    ["Copenhagen Atelier", "Portland Showroom"]
  );
  for (const s of ABOUT_SHOWROOMS) {
    assert.equal(s.description.includes("—"), false);
  }

  assert.equal(ABOUT_METRICS.length, 4);
  for (const metric of ABOUT_METRICS) {
    assert.equal(metric.detail.includes("—"), false);
  }
});
