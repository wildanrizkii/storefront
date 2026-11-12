import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { cn } from "../lib/utils.ts";

test("cn combines class names and merges Tailwind classes correctly", () => {
  assert.equal(cn("px-2 py-1", "bg-red-500"), "px-2 py-1 bg-red-500");
  assert.equal(cn("p-4", "p-2"), "p-2");
  assert.equal(cn("text-base", false && "hidden", "font-bold"), "text-base font-bold");
  assert.equal(cn({ "opacity-50": true, "pointer-events-none": false }), "opacity-50");
});

test("globals.css contains scrollbar stability and layout shift prevention rules", () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const cssPath = path.resolve(__dirname, "../app/globals.css");
  const css = fs.readFileSync(cssPath, "utf-8");

  assert.ok(
    css.includes("scrollbar-gutter: stable"),
    "globals.css must set scrollbar-gutter: stable on html to prevent layout shift"
  );
  assert.ok(
    css.includes("body[data-scroll-locked]"),
    "globals.css must override body[data-scroll-locked] to prevent scrollbar disappearing"
  );
  assert.ok(
    css.includes("margin-right: 0") || css.includes("margin-right: 0px"),
    "globals.css must reset margin-right on data-scroll-locked"
  );
  assert.ok(
    css.includes("::-webkit-scrollbar"),
    "globals.css must define custom minimal ::-webkit-scrollbar"
  );
  assert.ok(
    css.includes("scrollbar-width: thin"),
    "globals.css must support standard thin scrollbar"
  );
  assert.ok(
    css.includes("::-webkit-scrollbar-thumb:hover"),
    "globals.css must define hover state for scrollbar thumb"
  );
});

test("Input component uses harmonious primary border focus styling", () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const inputPath = path.resolve(__dirname, "../components/ui/input.tsx");
  const inputCode = fs.readFileSync(inputPath, "utf-8");

  assert.ok(
    inputCode.includes("focus-visible:border-[#211E1A]"),
    "Input should adapt focus border to the primary charcoal color"
  );
  assert.ok(
    !inputCode.includes("focus-visible:ring-2") && !inputCode.includes("focus-visible:ring-offset-1"),
    "Input should avoid harsh ring-2 ring-offset-1 double rings"
  );
});

test("Header search bar container width aligns with max-w-[1400px] grid layout and uses Framer Motion", () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const headerPath = path.resolve(__dirname, "../components/layout/Header.tsx");
  const headerCode = fs.readFileSync(headerPath, "utf-8");

  assert.ok(
    headerCode.includes("max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12"),
    "Search catalogue container should use max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12 to align with navbar and catalogue grid layout"
  );
  assert.ok(
    headerCode.includes('import { Input } from "../ui/input"'),
    "Header must use the shadcn Input component"
  );
  assert.ok(
    headerCode.includes("AnimatePresence") && headerCode.includes("motion.div"),
    "Header search bar must use Framer Motion AnimatePresence and motion.div for animated entrance and exit transitions"
  );
});
