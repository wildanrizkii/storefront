import test from "node:test";
import assert from "node:assert/strict";
import { PRODUCTS } from "../data/products.ts";
import { CATEGORIES, TOOLBAR_CATEGORIES } from "../data/categories.ts";

test("PRODUCTS contains the exact 12 Stitch reference products in order", () => {
  assert.equal(PRODUCTS.length, 12);

  const expectedNames = [
    "Hollis 3-Seater Sofa",
    "Marlow Lounge Chair",
    "Bessen Oak Coffee Table",
    "Alder Ceramic Table Lamp",
    "Norra Modular Bookshelf",
    "Wren Upholstered Bed Frame",
    "Linden Stoneware Vase",
    "Calder Wool Area Rug",
    "Petra Rattan Accent Chair",
    "Sona Side Table Set",
    "Dune Modular Sectional",
    "Fenwick Floor Lamp",
  ];

  assert.deepEqual(
    PRODUCTS.map((p) => p.name),
    expectedNames
  );
});

test("Discounted products have accurate originalPrice and saleBadge values from Stitch", () => {
  const marlow = PRODUCTS.find((p) => p.name === "Marlow Lounge Chair");
  assert.ok(marlow);
  assert.equal(marlow.price, 890);
  assert.equal(marlow.originalPrice, 1050);
  assert.equal(marlow.saleBadge, "-15%");

  const wren = PRODUCTS.find((p) => p.name === "Wren Upholstered Bed Frame");
  assert.ok(wren);
  assert.equal(wren.price, 1860);
  assert.equal(wren.originalPrice, 2200);
  assert.equal(wren.saleBadge, "-15%");

  const fenwick = PRODUCTS.find((p) => p.name === "Fenwick Floor Lamp");
  assert.ok(fenwick);
  assert.equal(fenwick.price, 265);
  assert.equal(fenwick.originalPrice, 320);
  assert.equal(fenwick.saleBadge, "-20%");
});

test("Every product has Stitch desktop and mobile image URLs and no em dashes (R-02)", () => {
  for (const product of PRODUCTS) {
    assert.ok(product.imageUrl.startsWith("https://lh3.googleusercontent.com/aida-public/"));
    assert.ok(product.mobileImageUrl.startsWith("https://lh3.googleusercontent.com/aida-public/"));
    assert.equal(product.name.includes("—"), false);
    assert.equal(product.description.includes("—"), false);
    assert.equal(product.imageAlt.includes("—"), false);
  }
});

test("TOOLBAR_CATEGORIES matches the 7 Stitch toolbar pills", () => {
  assert.deepEqual(
    TOOLBAR_CATEGORIES.map((c) => c.label),
    ["All", "Sofas", "Chairs", "Tables", "Storage", "Lighting", "Decor"]
  );
  assert.ok(CATEGORIES.some((c) => c.id === "Bedroom"));
});
