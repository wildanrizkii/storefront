import test from "node:test";
import assert from "node:assert/strict";
import {
  getActiveNavSection,
  NAV_ITEMS,
} from "../components/navigation/navRoutes.ts";

test("NAV_ITEMS includes Home, Shop, Collections, About, Contact and excludes Journal", () => {
  assert.deepEqual(
    NAV_ITEMS.map((item) => item.label),
    ["Home", "Shop", "Collections", "About", "Contact"]
  );
  assert.deepEqual(
    NAV_ITEMS.map((item) => item.href),
    ["/", "/shop", "/collections", "/about", "/contact"]
  );
  assert.equal(
    NAV_ITEMS.some((item) => item.label.toLowerCase() === "journal"),
    false
  );
});

test("getActiveNavSection resolves active menu across storefront routes", () => {
  assert.equal(getActiveNavSection("/"), "Home");
  assert.equal(getActiveNavSection(null), "Home");
  assert.equal(getActiveNavSection("/shop"), "Shop");
  assert.equal(getActiveNavSection("/products/hollis-3-seater-sofa"), "Shop");
  assert.equal(getActiveNavSection("/cart"), "Shop");
  assert.equal(getActiveNavSection("/checkout"), "Shop");
  assert.equal(getActiveNavSection("/checkout/confirmation"), "Shop");
  assert.equal(getActiveNavSection("/order-confirmation"), "Shop");
  assert.equal(getActiveNavSection("/collections"), "Collections");
  assert.equal(getActiveNavSection("/about"), "About");
  assert.equal(getActiveNavSection("/contact"), "Contact");
});
