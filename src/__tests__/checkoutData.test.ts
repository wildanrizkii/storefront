import { test } from "node:test";
import assert from "node:assert";
import {
  CHECKOUT_DEFAULT_ITEMS,
  CHECKOUT_SAVED_ADDRESSES,
  CHECKOUT_DEFAULT_SUMMARY,
  ORDER_CONFIRMATION_DATA,
  calculateCheckoutTotals,
} from "../data/checkoutData.ts";

test("Checkout default items total matches Stitch reference ($4,760.00)", () => {
  const subtotal = CHECKOUT_DEFAULT_ITEMS.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  assert.strictEqual(subtotal, 4760);
});

test("calculateCheckoutTotals computes 10% discount and accurate tax and total", () => {
  const totals = calculateCheckoutTotals(CHECKOUT_DEFAULT_ITEMS, "WELCOME10");
  assert.strictEqual(totals.subtotal, 4760);
  assert.strictEqual(totals.discount, 476);
  assert.strictEqual(totals.tax, 278.46);
  assert.strictEqual(totals.total, 4562.46);
});

test("calculateCheckoutTotals handles no discount correctly", () => {
  const totals = calculateCheckoutTotals(CHECKOUT_DEFAULT_ITEMS, "");
  assert.strictEqual(totals.subtotal, 4760);
  assert.strictEqual(totals.discount, 0);
  assert.strictEqual(totals.shipping, 0);
  assert.strictEqual(totals.tax, 278.46);
  assert.strictEqual(totals.total, 5038.46);
});

test("Checkout and confirmation copy has zero em dashes (R-02)", () => {
  const jsonStr = JSON.stringify({
    CHECKOUT_DEFAULT_ITEMS,
    CHECKOUT_SAVED_ADDRESSES,
    CHECKOUT_DEFAULT_SUMMARY,
    ORDER_CONFIRMATION_DATA,
  });
  assert.ok(!jsonStr.includes("—") && !jsonStr.includes("&mdash;"));
});

test("Order confirmation contains exact order number, tracking reference, and 4 timeline stages", () => {
  assert.strictEqual(ORDER_CONFIRMATION_DATA.orderNumber, "LL-94821");
  assert.strictEqual(
    ORDER_CONFIRMATION_DATA.trackingReference,
    "WGL-883920-ATX"
  );
  assert.strictEqual(ORDER_CONFIRMATION_DATA.timelineStages.length, 4);
  assert.strictEqual(
    ORDER_CONFIRMATION_DATA.timelineStages[1].status,
    "active"
  );
});
