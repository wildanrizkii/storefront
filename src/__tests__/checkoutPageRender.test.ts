import { test } from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

test("CheckoutPage component adheres to layout grid rules and reference elements", () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const pagePath = path.resolve(
    __dirname,
    "../components/pages/CheckoutPage.tsx",
  );
  assert.ok(fs.existsSync(pagePath), "CheckoutPage.tsx must exist");
  const pageCode = fs.readFileSync(pagePath, "utf-8");

  // Layout grid requirements
  assert.ok(
    pageCode.includes("max-w-350 mx-auto px-4 md:px-6 lg:px-12"),
    "Checkout page must use standard max-w-350 mx-auto px-4 md:px-6 lg:px-12 container",
  );
  assert.ok(
    pageCode.includes("grid-cols-1 lg:grid-cols-12"),
    "Checkout page must use 12-column grid on desktop",
  );
  assert.ok(
    pageCode.includes("lg:col-span-7") && pageCode.includes("lg:col-span-5"),
    "Checkout page must split into 7 cols (left) and 5 cols (right)",
  );

  // Stepper elements
  assert.ok(pageCode.includes("Cart"), "Stepper must include Cart step");
  assert.ok(
    pageCode.includes("Shipping"),
    "Stepper must include Shipping step",
  );
  assert.ok(pageCode.includes("Payment"), "Stepper must include Payment step");

  // Mobile elements
  assert.ok(
    pageCode.includes("Show order summary") ||
      pageCode.includes("order summary"),
    "Mobile layout must include collapsible order summary",
  );
  assert.ok(
    pageCode.includes("fixed bottom-0") || pageCode.includes("sticky bottom-0"),
    "Mobile layout must include sticky bottom action bar",
  );

  // R-02 compliance: zero em dashes
  assert.ok(
    !pageCode.includes("—") && !pageCode.includes("&mdash;"),
    "CheckoutPage must not contain em dashes (R-02)",
  );
});
