import test from "node:test";
import assert from "node:assert/strict";
import { PRODUCTS } from "../data/products.ts";
import {
  filterAndSortProducts,
  formatResultsSummary,
  validateNewsletterEmail,
} from "../hooks/catalogUtils.ts";

test("filterAndSortProducts filters by category accurately", () => {
  const sofas = filterAndSortProducts(PRODUCTS, {
    category: "Sofas",
    searchQuery: "",
    sortBy: "featured",
    onSaleOnly: false,
    minRating: 0,
    maxPrice: null,
  });
  assert.deepEqual(
    sofas.map((p) => p.id),
    ["hollis-3-seater-sofa", "dune-modular-sectional"]
  );
});

test("filterAndSortProducts returns empty array when category and search do not overlap", () => {
  const empty = filterAndSortProducts(PRODUCTS, {
    category: "Storage",
    searchQuery: "Lamp",
    sortBy: "featured",
    onSaleOnly: false,
    minRating: 0,
    maxPrice: null,
  });
  assert.equal(empty.length, 0);
});

test("filterAndSortProducts filters onSaleOnly and sorts by price ascending and descending", () => {
  const saleAsc = filterAndSortProducts(PRODUCTS, {
    category: "All",
    searchQuery: "",
    sortBy: "price-asc",
    onSaleOnly: true,
    minRating: 0,
    maxPrice: null,
  });
  assert.deepEqual(
    saleAsc.map((p) => p.price),
    [265, 890, 1860]
  );

  const saleDesc = filterAndSortProducts(PRODUCTS, {
    category: "All",
    searchQuery: "",
    sortBy: "price-desc",
    onSaleOnly: true,
    minRating: 0,
    maxPrice: null,
  });
  assert.deepEqual(
    saleDesc.map((p) => p.price),
    [1860, 890, 265]
  );
});

test("formatResultsSummary formats default Stitch count and filtered counts without em dashes", () => {
  const defaultSummary = formatResultsSummary({
    filteredCount: 12,
    isDefaultUnfiltered: true,
    currentPage: 1,
    pageSize: 12,
  });
  assert.equal(defaultSummary, "Showing 1-12 of 86 results");

  const page2Summary = formatResultsSummary({
    filteredCount: 12,
    isDefaultUnfiltered: true,
    currentPage: 2,
    pageSize: 12,
  });
  assert.equal(page2Summary, "Showing 13-24 of 86 results");

  const filteredSummary = formatResultsSummary({
    filteredCount: 2,
    isDefaultUnfiltered: false,
    currentPage: 1,
    pageSize: 12,
  });
  assert.equal(filteredSummary, "Showing 1-2 of 2 results");

  const zeroSummary = formatResultsSummary({
    filteredCount: 0,
    isDefaultUnfiltered: false,
    currentPage: 1,
    pageSize: 12,
  });
  assert.equal(zeroSummary, "Showing 0 of 0 results");
});

test("validateNewsletterEmail rejects empty and invalid emails and accepts valid ones", () => {
  const emptyRes = validateNewsletterEmail("   ");
  assert.equal(emptyRes.valid, false);
  assert.ok(emptyRes.message.includes("enter your email"));

  const malformedRes = validateNewsletterEmail("not-an-email@");
  assert.equal(malformedRes.valid, false);
  assert.ok(malformedRes.message.includes("valid email"));

  const validRes = validateNewsletterEmail("reader@lumaliving.com");
  assert.equal(validRes.valid, true);
  assert.equal(validRes.message.includes("—"), false);
});
