import { test } from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

test("Checkout and Order Confirmation routes exist and export valid default components and metadata", () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  const checkoutRoutePath = path.resolve(
    __dirname,
    "../app/checkout/page.tsx"
  );
  assert.ok(fs.existsSync(checkoutRoutePath), "src/app/checkout/page.tsx must exist");
  const checkoutCode = fs.readFileSync(checkoutRoutePath, "utf-8");
  assert.ok(checkoutCode.includes("export default function CheckoutRoute"), "Must export default CheckoutRoute");
  assert.ok(checkoutCode.includes("Checkout | Luma & Living"), "Must set accurate title metadata");

  const confirmationRoutePath = path.resolve(
    __dirname,
    "../app/checkout/confirmation/page.tsx"
  );
  assert.ok(fs.existsSync(confirmationRoutePath), "src/app/checkout/confirmation/page.tsx must exist");
  const confirmationCode = fs.readFileSync(confirmationRoutePath, "utf-8");
  assert.ok(confirmationCode.includes("export default function OrderConfirmationRoute"), "Must export default OrderConfirmationRoute");
  assert.ok(confirmationCode.includes("Order Confirmation | Luma & Living"), "Must set accurate title metadata");

  const aliasRoutePath = path.resolve(
    __dirname,
    "../app/order-confirmation/page.tsx"
  );
  assert.ok(fs.existsSync(aliasRoutePath), "src/app/order-confirmation/page.tsx alias must exist");
});
