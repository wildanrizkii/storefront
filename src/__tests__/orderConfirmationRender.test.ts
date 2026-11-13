import { test } from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

test("OrderConfirmationPage adheres to layout grid rules and reference elements", () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const pagePath = path.resolve(
    __dirname,
    "../components/pages/OrderConfirmationPage.tsx"
  );
  assert.ok(fs.existsSync(pagePath), "OrderConfirmationPage.tsx must exist");
  const pageCode = fs.readFileSync(pagePath, "utf-8");

  // Layout grid requirements
  assert.ok(
    pageCode.includes("max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12"),
    "Order confirmation page must use standard max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12 container"
  );
  assert.ok(
    pageCode.includes("grid-cols-1 lg:grid-cols-12"),
    "Order confirmation page must use 12-column grid on desktop"
  );
  assert.ok(
    pageCode.includes("lg:col-span-7") && pageCode.includes("lg:col-span-5"),
    "Order confirmation page must split into 7 cols (left) and 5 cols (right)"
  );

  // Hero & Order Details
  assert.ok(
    pageCode.includes("Thank you for your order"),
    "Must include thank you heading"
  );
  assert.ok(
    pageCode.includes("LL-94821"),
    "Must include order reference number LL-94821"
  );
  assert.ok(
    pageCode.includes("WGL-883920-ATX"),
    "Must include tracking reference WGL-883920-ATX"
  );

  // Actions
  assert.ok(
    pageCode.includes("window.print()"),
    "Must include print receipt trigger"
  );
  assert.ok(
    pageCode.includes("/shop"),
    "Must link to shop to continue browsing"
  );

  // R-02 compliance: zero em dashes
  assert.ok(
    !pageCode.includes("—") && !pageCode.includes("&mdash;"),
    "OrderConfirmationPage must not contain em dashes (R-02)"
  );
});
