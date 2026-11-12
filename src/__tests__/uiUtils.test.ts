import test from "node:test";
import assert from "node:assert/strict";
import { cn } from "../lib/utils.ts";

test("cn combines class names and merges Tailwind classes correctly", () => {
  assert.equal(cn("px-2 py-1", "bg-red-500"), "px-2 py-1 bg-red-500");
  assert.equal(cn("p-4", "p-2"), "p-2");
  assert.equal(cn("text-base", false && "hidden", "font-bold"), "text-base font-bold");
  assert.equal(cn({ "opacity-50": true, "pointer-events-none": false }), "opacity-50");
});
