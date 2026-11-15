"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useStorefront } from "../../context/StorefrontContext";
import { Navigation } from "../navigation/Navigation";
import { CartDrawer } from "./CartDrawer";
import { WishlistDrawer } from "./WishlistDrawer";
import { AccountDrawer } from "./AccountDrawer";
import { Input } from "../ui/input";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";

function getInitialScrolled(isHomeRoute: boolean): boolean {
  if (typeof window === "undefined") {
    return !isHomeRoute;
  }
  if (!isHomeRoute) {
    return true;
  }
  try {
    const saved = sessionStorage.getItem("luma_living_header_scrolled");
    if (saved === "1") return true;
    if (saved === "0") return false;
  } catch {}
  return window.scrollY > 40 || document.documentElement.scrollTop > 40;
}

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const {
    wishlistedProducts,
    wishlistCount,
    toggleWishlist,
    clearWishlist,
    cartItems,
    cartCount,
    cartSubtotal,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    resetToDefaultCart,
    activeDrawer,
    setActiveDrawer,
    mobileMenuOpen,
    setMobileMenuOpen,
    searchOpen,
    setSearchOpen,
    searchQuery,
    setSearchQuery,
  } = useStorefront();

  useEffect(() => {
    if (!searchOpen) {
      searchInputRef.current?.blur();
    } else {
      searchInputRef.current?.focus({ preventScroll: true });
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (activeDrawer) {
          setActiveDrawer(null);
        } else if (searchOpen) {
          setSearchOpen(false);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeDrawer, searchOpen, setActiveDrawer, setSearchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    if (pathname !== "/shop") {
      router.push(trimmed ? `/shop?q=${encodeURIComponent(trimmed)}` : "/shop");
    }
  };

  const handleQuickTerm = (term: string) => {
    setSearchQuery(term);
    if (pathname !== "/shop") {
      router.push(`/shop?q=${encodeURIComponent(term)}`);
    }
  };

  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(() => getInitialScrolled(isHome));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    let rafId: number | null = null;
    let lastScrolled = window.scrollY > 40 || document.documentElement.scrollTop > 40;
    try {
      const saved = sessionStorage.getItem("luma_living_header_scrolled");
      if (saved === "1") {
        lastScrolled = true;
      }
      sessionStorage.setItem("luma_living_header_scrolled", lastScrolled ? "1" : "0");
    } catch {}
    setIsScrolled(lastScrolled);

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        const nowScrolled = window.scrollY > 40 || document.documentElement.scrollTop > 40;
        try {
          sessionStorage.setItem("luma_living_header_scrolled", nowScrolled ? "1" : "0");
        } catch {}
        if (nowScrolled !== lastScrolled) {
          lastScrolled = nowScrolled;
          setIsScrolled(nowScrolled);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [isHome]);

  const isTransparent = isHome && !isScrolled && !searchOpen;

  return (
    <>
      <header
        id="site-header"
        className="fixed top-0 inset-x-0 z-40 w-full"
        data-purpose="site-navigation-header"
        suppressHydrationWarning
      >
        {/* Layered frosted backdrop that transitions opacity with zero color artifact */}
        <div
          data-header-backdrop
          aria-hidden="true"
          suppressHydrationWarning
          className={cn(
            "absolute inset-0 pointer-events-none",
            mounted && "transition-opacity duration-500 ease-out",
            isTransparent
              ? "opacity-0"
              : "opacity-100 bg-[#FAF8F4]/90 backdrop-blur-md border-b border-[#ECE7DE] shadow-xs"
          )}
        />

        <div className="relative z-10 max-w-350 mx-auto px-4 md:px-6 lg:px-12 h-16 md:h-20 flex items-center justify-between gap-4">
          {/* Mobile Left Hamburger Menu Trigger */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              data-header-burger
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              aria-expanded={mobileMenuOpen}
              suppressHydrationWarning
              className={cn(
                "min-w-11 min-h-11 -ml-2 inline-flex items-center justify-center active:scale-95 rounded-full",
                mounted && "transition-all duration-500 ease-out",
                isTransparent
                  ? "text-white hover:text-[#D4A875]"
                  : "text-[#161412] hover:bg-[#EFECE6]"
              )}
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 stroke-current stroke-[1.6]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line x1="3" x2="21" y1="7" y2="7" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="17" y2="17" />
              </svg>
            </button>
          </div>

          {/* Brand Logo */}
          <Link
            href="/"
            data-header-logo
            suppressHydrationWarning
            className={cn(
              "font-serif-display text-2xl font-bold tracking-tight flex items-center gap-1 shrink-0 whitespace-nowrap hover:opacity-85",
              mounted && "transition-colors duration-500 ease-out",
              isTransparent ? "text-white" : "text-[#161412]"
            )}
          >
            Luma{" "}
            <span
              data-header-ampersand
              suppressHydrationWarning
              className={cn(
                "font-normal italic",
                mounted && "transition-colors duration-500 ease-out",
                isTransparent ? "text-[#D4A875]" : "text-[#8F6232]"
              )}
            >
              &amp;
            </span>{" "}
            Living
          </Link>

          {/* Desktop Navigation Menu + Mobile Drawer */}
          <Navigation
            mobileMenuOpen={mobileMenuOpen}
            onCloseMobileMenu={() => setMobileMenuOpen(false)}
            isTransparent={isTransparent}
            mounted={mounted}
          />

          {/* Utility Icons */}
          <div
            data-header-actions
            suppressHydrationWarning
            className={cn(
              "flex items-center space-x-2 md:space-x-5",
              mounted && "transition-colors duration-500 ease-out",
              isTransparent ? "text-white" : "text-[#161412]"
            )}
            data-purpose="user-actions"
          >
            {/* Search */}
            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="Search catalogue"
              aria-expanded={searchOpen}
              className="min-w-11 min-h-11 md:min-w-9 md:min-h-9 inline-flex items-center justify-center hover:opacity-75 transition rounded-full touch-manipulation"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </button>

            {/* Wishlist with badge */}
            <button
              type="button"
              onClick={() =>
                setActiveDrawer(
                  activeDrawer === "wishlist" ? null : "wishlist"
                )
              }
              aria-label={`Wishlist (${wishlistCount} saved items)`}
              aria-expanded={activeDrawer === "wishlist"}
              suppressHydrationWarning
              className="relative min-w-11 min-h-11 md:min-w-9 md:min-h-9 inline-flex items-center justify-center hover:opacity-75 transition rounded-full"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
              <span
                id="header-wishlist-badge"
                aria-hidden="true"
                suppressHydrationWarning
                className={cn(
                  "absolute top-1 right-1 md:-top-0.5 md:-right-1 text-white text-[10px] font-semibold leading-none tabular-nums select-none pointer-events-none w-4 h-4 rounded-full flex items-center justify-center",
                  mounted && "transition-colors duration-500 ease-out",
                  isTransparent
                    ? "bg-[#D4A875] text-[#161412]"
                    : "bg-[#8F6232] text-white",
                  wishlistCount <= 0 && "hidden"
                )}
              >
                {wishlistCount > 0 ? wishlistCount : ""}
              </span>
            </button>

            {/* Account */}
            <button
              type="button"
              onClick={() =>
                setActiveDrawer(activeDrawer === "account" ? null : "account")
              }
              aria-label="Account"
              aria-expanded={activeDrawer === "account"}
              className="hidden md:inline-flex min-w-9 min-h-9 items-center justify-center hover:opacity-75 transition rounded-full"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </button>

            {/* Shopping Bag with badge */}
            <button
              type="button"
              onClick={() =>
                setActiveDrawer(activeDrawer === "cart" ? null : "cart")
              }
              aria-label={`Shopping bag (${cartCount} items)`}
              aria-expanded={activeDrawer === "cart"}
              suppressHydrationWarning
              className="relative min-w-11 min-h-11 md:min-w-9 md:min-h-9 inline-flex items-center justify-center hover:opacity-75 transition rounded-full"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
              <span
                id="header-cart-badge"
                aria-hidden="true"
                suppressHydrationWarning
                className={cn(
                  "absolute top-1 right-1 md:-top-0.5 md:-right-1 text-[10px] font-semibold leading-none tabular-nums select-none pointer-events-none w-4 h-4 rounded-full flex items-center justify-center",
                  mounted && "transition-colors duration-500 ease-out",
                  isTransparent
                    ? "bg-[#FAF8F4] text-[#161412]"
                    : "bg-[#161412] text-white",
                  cartCount <= 0 && "hidden"
                )}
              >
                {cartCount > 0 ? cartCount : ""}
              </span>
            </button>
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(){try{var c=localStorage.getItem("luma_living_cart_v2");if(c){var it=JSON.parse(c);var ct=Array.isArray(it)?it.reduce(function(s,i){return s+(i.quantity||1)},0):3;var b=document.getElementById("header-cart-badge");if(b){if(ct>0){b.textContent=String(ct);b.classList.remove("hidden");}else{b.textContent="";b.classList.add("hidden");}}var btn=b?b.closest("button"):null;if(btn){btn.setAttribute("aria-label","Shopping bag ("+ct+" items)");}}var w=localStorage.getItem("luma_living_wishlist_v1");if(w){var wi=JSON.parse(w);var wt=Array.isArray(wi)?wi.length:2;var wb=document.getElementById("header-wishlist-badge");if(wb){if(wt>0){wb.textContent=String(wt);wb.classList.remove("hidden");}else{wb.textContent="";wb.classList.add("hidden");}}var wbtn=wb?wb.closest("button"):null;if(wbtn){wbtn.setAttribute("aria-label","Wishlist ("+wt+" saved items)");}}}catch(e){}})();`,
              }}
            />
          </div>
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var isH=window.location.pathname==="/"||window.location.pathname==="";var wasScr=sessionStorage.getItem("luma_living_header_scrolled")==="1"||window.scrollY>40||document.documentElement.scrollTop>40;if(isH&&wasScr){var h=document.getElementById("site-header");if(h){var bd=h.querySelector("[data-header-backdrop]");if(bd){bd.className="absolute inset-0 pointer-events-none opacity-100 bg-[#FAF8F4]/90 backdrop-blur-md border-b border-[#ECE7DE] shadow-xs";}var lg=h.querySelector("[data-header-logo]");if(lg){lg.classList.remove("text-white");lg.classList.add("text-[#161412]");}var am=h.querySelector("[data-header-ampersand]");if(am){am.classList.remove("text-[#D4A875]");am.classList.add("text-[#8F6232]");}var nv=h.querySelector("[data-header-nav]");if(nv){var lks=nv.querySelectorAll("a");for(var i=0;i<lks.length;i++){var a=lks[i];if(a.getAttribute("aria-current")==="page"){a.classList.remove("text-white","after:bg-[#D4A875]");a.classList.add("text-[#161412]","after:bg-[#161412]");}else{a.classList.remove("text-white/80","hover:text-white");a.classList.add("text-[#6B655D]","hover:text-[#161412]");}}var ind=nv.querySelector("[data-header-indicator]");if(ind){ind.classList.remove("bg-[#D4A875]");ind.classList.add("bg-[#161412]");}}var act=h.querySelector("[data-header-actions]");if(act){act.classList.remove("text-white");act.classList.add("text-[#161412]");}var bg=h.querySelector("[data-header-burger]");if(bg){bg.classList.remove("text-white","hover:text-[#D4A875]");bg.classList.add("text-[#161412]","hover:bg-[#EFECE6]");}var wb=document.getElementById("header-wishlist-badge");if(wb){wb.classList.remove("bg-[#D4A875]","text-[#161412]");wb.classList.add("bg-[#8F6232]","text-white");}var cb=document.getElementById("header-cart-badge");if(cb){cb.classList.remove("bg-[#FAF8F4]","text-[#161412]");cb.classList.add("bg-[#161412]","text-white");}}}}catch(e){}})();`,
          }}
        />

        {/* Expandable Search Bar with smooth transition */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              key="catalog-search-bar"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              onAnimationComplete={() => {
                if (searchOpen) {
                  searchInputRef.current?.focus({ preventScroll: true });
                }
              }}
              className="relative z-10 overflow-hidden border-t border-b border-[#DCD4C8] bg-[#FAF8F4] shadow-md"
            >
              <div className="max-w-350 mx-auto px-4 md:px-6 lg:px-12 py-3.5">
                <form
                  onSubmit={handleSearchSubmit}
                  className="w-full flex flex-col sm:flex-row sm:items-center gap-3"
                >
                  <label
                    htmlFor="catalog-search-input"
                    className="text-xs font-semibold text-[#161412] shrink-0 tracking-wide"
                  >
                    Search catalogue:
                  </label>
                  <div className="relative grow flex items-center gap-2 min-w-0">
                    <Input
                      id="catalog-search-input"
                      ref={searchInputRef}
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by piece name, room, or material (e.g., Oak, Linen, Lamp)..."
                      className="w-full h-10 md:h-9 rounded-full bg-white px-4 text-base md:text-xs placeholder:text-[#6B655D] border-[#C8BFB0] focus-visible:border-[#211E1A] focus-visible:ring-1 focus-visible:ring-[#211E1A]/15 touch-manipulation appearance-none [-webkit-appearance:none] shadow-2xs"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="px-3 py-1.5 text-xs text-[#6B655D] hover:text-[#161412] rounded-full shrink-0 font-medium"
                      >
                        Clear
                      </button>
                    )}
                    {pathname !== "/shop" && (
                      <Button
                        type="submit"
                        size="sm"
                        className="h-9 px-4 rounded-full text-xs font-medium shrink-0"
                      >
                        Search
                      </Button>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#6B655D] flex-wrap shrink-0">
                    <span className="font-medium text-[#161412]">Try:</span>
                    {["Oak", "Linen", "Lamp", "Chair"].map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => handleQuickTerm(term)}
                        className="px-2.5 py-1 rounded-full bg-[#EFECE6] border border-[#DDD5C7] text-[#161412] hover:bg-[#E5DDD3] transition-colors font-medium"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Top spacer for non-home pages so page content starts below header in standard flow */}
      {!isHome && (
        <div
          className="h-16 md:h-20 w-full shrink-0 select-none pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Slide-Out Cart Drawer */}
      <CartDrawer
        open={activeDrawer === "cart"}
        onClose={() => setActiveDrawer(null)}
        items={cartItems}
        cartCount={cartCount}
        subtotal={cartSubtotal}
        onAddToCart={addToCart}
        onUpdateQuantity={updateCartQuantity}
        onRemoveFromCart={removeFromCart}
        onResetDefaultCart={resetToDefaultCart}
      />

      {/* Slide-Out Wishlist Drawer */}
      <WishlistDrawer
        open={activeDrawer === "wishlist"}
        onClose={() => setActiveDrawer(null)}
        items={wishlistedProducts}
        count={wishlistCount}
        onAddToCart={(productId) => {
          addToCart(productId);
          setActiveDrawer("cart");
        }}
        onRemoveFromWishlist={toggleWishlist}
        onClearWishlist={clearWishlist}
      />

      {/* Slide-Out Account Drawer */}
      <AccountDrawer
        open={activeDrawer === "account"}
        onClose={() => setActiveDrawer(null)}
        wishlistCount={wishlistCount}
        cartCount={cartCount}
      />
    </>
  );
}
