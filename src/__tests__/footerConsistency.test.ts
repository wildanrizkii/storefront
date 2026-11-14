import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { InfoModalKey } from "../data/infoModalData.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

test("All pages that display a footer import and render the unified Footer component", () => {
  const pagesWithFooter = [
    "LandingPage.tsx",
    "ShopPage.tsx",
    "ProductDetailPage.tsx",
    "CollectionsPage.tsx",
    "AboutPage.tsx",
    "ContactPage.tsx",
    "OrderConfirmationPage.tsx",
  ];

  for (const pageName of pagesWithFooter) {
    const pagePath = path.resolve(__dirname, `../components/pages/${pageName}`);
    assert.ok(fs.existsSync(pagePath), `${pageName} must exist`);
    const content = fs.readFileSync(pagePath, "utf-8");

    // Must import Footer
    assert.match(
      content,
      /import\s+{[^}]*Footer[^}]*}\s+from\s+["'](\.\.\/layout\/Footer|@\/components\/layout\/Footer)["']/,
      `${pageName} must import Footer component`
    );

    // Must render <Footer
    assert.match(
      content,
      /<Footer[\s\/>]/,
      `${pageName} must render <Footer /> component`
    );

    // Must NOT have ad-hoc raw <footer> tags
    assert.equal(
      content.includes("<footer"),
      false,
      `${pageName} must not contain ad-hoc <footer tag, it should use <Footer />`
    );
  }
});

test("Info modal data exists and has zero em dashes (R-02)", async () => {
  const infoModalDataPath = path.resolve(__dirname, "../data/infoModalData.ts");
  assert.ok(fs.existsSync(infoModalDataPath), "infoModalData.ts must exist");

  const { INFO_MODAL_CONTENT } = await import("../data/infoModalData.ts");
  assert.ok(INFO_MODAL_CONTENT, "INFO_MODAL_CONTENT must be exported");

  const topics: InfoModalKey[] = [
    "Collections",
    "About",
    "Contact",
    "Careers",
    "Press",
    "Shipping & returns",
    "Warranty",
    "FAQs",
    "Privacy Policy",
    "Terms of Service",
  ];

  for (const topic of topics) {
    const entry = INFO_MODAL_CONTENT[topic];
    assert.ok(entry, `Entry for ${topic} must exist in INFO_MODAL_CONTENT`);
    assert.equal(entry.title.includes("—"), false);
    assert.equal(entry.subtitle.includes("—"), false);
    for (const p of entry.paragraphs) {
      assert.equal(p.includes("—"), false);
    }
  }
});

test("Footer brand logo matches Navbar styling and link target", () => {
  const footerPath = path.resolve(__dirname, "../components/layout/Footer.tsx");
  assert.ok(fs.existsSync(footerPath), "Footer.tsx must exist");
  const content = fs.readFileSync(footerPath, "utf-8");

  assert.ok(
    content.includes('href="/"'),
    "Footer brand logo must link to root route '/'"
  );
  assert.ok(
    content.includes('text-[#8F6232]">&amp;</span>'),
    "Footer brand logo must feature amber italic ampersand matching Navbar"
  );
  assert.ok(
    content.includes("font-serif-display") &&
      content.includes("font-bold") &&
      content.includes("tracking-tight"),
    "Footer brand logo must use bold tracking-tight serif display font matching Navbar"
  );
});
