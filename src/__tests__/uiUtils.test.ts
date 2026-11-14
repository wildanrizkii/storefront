import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { cn } from "../lib/utils.ts";

test("cn combines class names and merges Tailwind classes correctly", () => {
  assert.equal(cn("px-2 py-1", "bg-red-500"), "px-2 py-1 bg-red-500");
  assert.equal(cn("p-4", "p-2"), "p-2");
  assert.equal(
    cn("text-base", false && "hidden", "font-bold"),
    "text-base font-bold",
  );
  assert.equal(
    cn({ "opacity-50": true, "pointer-events-none": false }),
    "opacity-50",
  );
});

test("globals.css contains scrollbar stability and layout shift prevention rules", () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const cssPath = path.resolve(__dirname, "../app/globals.css");
  const css = fs.readFileSync(cssPath, "utf-8");

  assert.ok(
    css.includes("scrollbar-gutter: stable"),
    "globals.css must set scrollbar-gutter: stable on html to prevent layout shift",
  );
  assert.ok(
    css.includes("body[data-scroll-locked]"),
    "globals.css must override body[data-scroll-locked] to prevent scrollbar disappearing",
  );
  assert.ok(
    css.includes("margin-right: 0") || css.includes("margin-right: 0px"),
    "globals.css must reset margin-right on data-scroll-locked",
  );
  assert.ok(
    css.includes("::-webkit-scrollbar"),
    "globals.css must define custom minimal ::-webkit-scrollbar",
  );
  assert.ok(
    css.includes("scrollbar-width: thin"),
    "globals.css must support standard thin scrollbar",
  );
  assert.ok(
    css.includes("::-webkit-scrollbar-thumb:hover"),
    "globals.css must define hover state for scrollbar thumb",
  );
});

test("Input component uses harmonious primary border focus styling", () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const inputPath = path.resolve(__dirname, "../components/ui/input.tsx");
  const inputCode = fs.readFileSync(inputPath, "utf-8");

  assert.ok(
    inputCode.includes("focus-visible:border-[#211E1A]"),
    "Input should adapt focus border to the primary charcoal color",
  );
  assert.ok(
    !inputCode.includes("focus-visible:ring-2") &&
      !inputCode.includes("focus-visible:ring-offset-1"),
    "Input should avoid harsh ring-2 ring-offset-1 double rings",
  );
});

test("Header search bar container width aligns with max-w-350 grid layout and uses Framer Motion", () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const headerPath = path.resolve(__dirname, "../components/layout/Header.tsx");
  const headerCode = fs.readFileSync(headerPath, "utf-8");

  assert.ok(
    headerCode.includes("max-w-350 mx-auto px-4 md:px-6 lg:px-12"),
    "Search catalogue container should use max-w-350 mx-auto px-4 md:px-6 lg:px-12 to align with navbar and catalogue grid layout",
  );
  assert.ok(
    headerCode.includes('import { Input } from "../ui/input"'),
    "Header must use the shadcn Input component",
  );
  assert.ok(
    headerCode.includes("AnimatePresence") && headerCode.includes("motion.div"),
    "Header search bar must use Framer Motion AnimatePresence and motion.div for animated entrance and exit transitions",
  );
});

test("Mobile anti-zoom and viewport position stability rules are configured", () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  // 1. Check layout.tsx viewport
  const layoutPath = path.resolve(__dirname, "../app/layout.tsx");
  const layoutCode = fs.readFileSync(layoutPath, "utf-8");
  assert.ok(
    layoutCode.includes("maximumScale: 1"),
    "layout.tsx must configure maximumScale: 1 in viewport to prevent browser auto-zoom",
  );
  assert.ok(
    layoutCode.includes("userScalable: false"),
    "layout.tsx must configure userScalable: false to prevent mobile browser auto-zoom",
  );

  // 2. Check globals.css 16px mobile input rule
  const cssPath = path.resolve(__dirname, "../app/globals.css");
  const css = fs.readFileSync(cssPath, "utf-8");
  assert.ok(
    css.includes("font-size: 16px !important"),
    "globals.css must ensure form controls have font-size: 16px on mobile",
  );
  assert.ok(
    css.includes("touch-action: manipulation"),
    "globals.css must specify touch-action: manipulation to avoid double-tap/gesture zoom delays",
  );
  assert.ok(
    css.includes("-webkit-text-size-adjust: 100%"),
    "globals.css must set -webkit-text-size-adjust to prevent text-size inflation",
  );

  // 3. Check Input component has responsive mobile text-base
  const inputPath = path.resolve(__dirname, "../components/ui/input.tsx");
  const inputCode = fs.readFileSync(inputPath, "utf-8");
  assert.ok(
    inputCode.includes("text-base md:text-sm"),
    "Input component must use text-base md:text-sm to prevent iOS Safari auto-zoom on mobile",
  );

  // 4. Check Header.tsx focus lifecycle and mobile touch stability
  const headerPath = path.resolve(__dirname, "../components/layout/Header.tsx");
  const headerCode = fs.readFileSync(headerPath, "utf-8");
  assert.ok(
    headerCode.includes("preventScroll: true"),
    "Header.tsx must use preventScroll: true on input focus to avoid scroll jumps and glitch",
  );
  assert.ok(
    headerCode.includes("onAnimationComplete"),
    "Header.tsx must synchronize focus with onAnimationComplete to avoid focusing a 0-height container",
  );
  assert.ok(
    headerCode.includes("touch-manipulation"),
    "Header.tsx search toggle button must include touch-manipulation to eliminate double-tap zoom triggers",
  );
});

test("Next.js scroll-behavior and route scroll restoration rules are configured", () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  // 1. layout.tsx includes data-scroll-behavior="smooth"
  const layoutPath = path.resolve(__dirname, "../app/layout.tsx");
  const layoutCode = fs.readFileSync(layoutPath, "utf-8");
  assert.ok(
    layoutCode.includes('data-scroll-behavior="smooth"'),
    'layout.tsx must configure data-scroll-behavior="smooth" on <html> for Next.js route scroll restoration',
  );

  // 2. globals.css scopes smooth scroll to html[data-scroll-behavior="smooth"]
  const cssPath = path.resolve(__dirname, "../app/globals.css");
  const css = fs.readFileSync(cssPath, "utf-8");
  assert.ok(
    css.includes('html[data-scroll-behavior="smooth"]'),
    'globals.css must apply smooth scrolling via html[data-scroll-behavior="smooth"]',
  );

  // 3. StorefrontContext includes pathname scroll reset guarded against initial mount/reload
  const contextPath = path.resolve(
    __dirname,
    "../context/StorefrontContext.tsx",
  );
  const contextCode = fs.readFileSync(contextPath, "utf-8");
  assert.ok(
    contextCode.includes("window.scrollTo({ top: 0, left: 0"),
    "StorefrontContext must reset scroll to top on route navigation",
  );
  assert.ok(
    contextCode.includes("prevPathnameRef"),
    "StorefrontContext must guard scroll reset with prevPathnameRef to prevent glitch on page reload",
  );
});

test("Select components configure SSR stability and prevent refresh glitch", () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  // 1. ContactPage.tsx passes selected label to SelectValue and sets min-h-[44px]
  const contactPath = path.resolve(
    __dirname,
    "../components/pages/ContactPage.tsx",
  );
  const contactCode = fs.readFileSync(contactPath, "utf-8");
  assert.ok(
    contactCode.includes("INQUIRY_TOPICS"),
    "ContactPage.tsx must define INQUIRY_TOPICS options constant",
  );
  assert.ok(
    contactCode.includes('<SelectValue placeholder="Select topic">') &&
      contactCode.includes("{selectedTopicLabel}"),
    "ContactPage.tsx SelectValue must pass selectedTopicLabel as children to ensure SSR rendering without refresh glitch",
  );
  assert.ok(
    contactCode.includes("min-h-[44px]"),
    "ContactPage.tsx SelectTrigger must specify min-h-[44px] to prevent layout shift on load",
  );

  // 2. ProductSort.tsx passes currentLabel to SelectValue
  const sortPath = path.resolve(
    __dirname,
    "../components/products/ProductSort.tsx",
  );
  const sortCode = fs.readFileSync(sortPath, "utf-8");
  assert.ok(
    sortCode.includes('<SelectValue placeholder="Featured">') &&
      sortCode.includes("{currentLabel}"),
    "ProductSort.tsx SelectValue must pass currentLabel as children to prevent SSR blank select glitch",
  );

  // 3. select.tsx trigger includes min-h-9
  const selectPath = path.resolve(__dirname, "../components/ui/select.tsx");
  const selectCode = fs.readFileSync(selectPath, "utf-8");
  assert.ok(
    selectCode.includes("min-h-9"),
    "select.tsx SelectTrigger must include min-h-9 baseline height defense",
  );
});

test("Header cart and wishlist badges configure SSR hydration stability and prevent refresh glitch", () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  // 1. Header.tsx uses suppressHydrationWarning and stable hidden classing
  const headerPath = path.resolve(__dirname, "../components/layout/Header.tsx");
  const headerCode = fs.readFileSync(headerPath, "utf-8");
  assert.ok(
    headerCode.includes('id="header-cart-badge"') &&
      headerCode.includes("suppressHydrationWarning"),
    "Header.tsx cart badge must have id='header-cart-badge' and suppressHydrationWarning",
  );
  assert.ok(
    headerCode.includes('id="header-wishlist-badge"') &&
      headerCode.includes("suppressHydrationWarning"),
    "Header.tsx wishlist badge must have id='header-wishlist-badge' and suppressHydrationWarning",
  );
  assert.ok(
    headerCode.includes('cartCount <= 0 && "hidden"'),
    "Header.tsx cart badge must preserve DOM node structure and hide via hidden class",
  );

  // 2. useCart.ts initializes state synchronously with getInitialCart to prevent state jump
  const cartHookPath = path.resolve(__dirname, "../hooks/useCart.ts");
  const cartHookCode = fs.readFileSync(cartHookPath, "utf-8");
  assert.ok(
    cartHookCode.includes("function getInitialCart"),
    "useCart.ts must define getInitialCart to read localStorage synchronously on client",
  );
  assert.ok(
    cartHookCode.includes("useState<CartItem[]>(getInitialCart)"),
    "useCart.ts must initialize useState with getInitialCart",
  );

  // 3. useWishlist.ts initializes state synchronously with getInitialWishlist
  const wishlistHookPath = path.resolve(__dirname, "../hooks/useWishlist.ts");
  const wishlistHookCode = fs.readFileSync(wishlistHookPath, "utf-8");
  assert.ok(
    wishlistHookCode.includes("function getInitialWishlist"),
    "useWishlist.ts must define getInitialWishlist",
  );
  assert.ok(
    wishlistHookCode.includes("useState<string[]>(getInitialWishlist)"),
    "useWishlist.ts must initialize useState with getInitialWishlist",
  );
});
