"use client";

import React, { useEffect, useRef } from "react";
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
    if (searchOpen) {
      searchInputRef.current?.focus();
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

  if (pathname.startsWith("/checkout") || pathname === "/order-confirmation") {
    return null;
  }

  return (
    <>
      <header
        className="w-full bg-[#FAF8F4] sticky top-0 z-40"
        data-purpose="site-navigation-header"
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12 h-16 md:h-20 flex items-center justify-between gap-4">
          {/* Mobile Left Hamburger Menu Trigger */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              aria-expanded={mobileMenuOpen}
              className="min-w-11 min-h-11 -ml-2 inline-flex items-center justify-center text-[#161412] active:scale-95 transition-transform rounded-full"
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
            className="font-serif-display text-2xl font-bold tracking-tight text-[#161412] flex items-center gap-1 shrink-0 whitespace-nowrap hover:opacity-85 transition-opacity"
          >
            Luma{" "}
            <span className="font-normal italic text-[#8F6232]">&amp;</span>{" "}
            Living
          </Link>

          {/* Desktop Navigation Menu + Mobile Drawer */}
          <Navigation
            mobileMenuOpen={mobileMenuOpen}
            onCloseMobileMenu={() => setMobileMenuOpen(false)}
          />

          {/* Utility Icons */}
          <div
            className="flex items-center space-x-2 md:space-x-5 text-[#161412]"
            data-purpose="user-actions"
          >
            {/* Search */}
            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="Search catalogue"
              aria-expanded={searchOpen}
              className="min-w-11 min-h-11 md:min-w-9 md:min-h-9 inline-flex items-center justify-center hover:opacity-75 transition rounded-full"
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
              {wishlistCount > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute top-1 right-1 md:-top-0.5 md:-right-1 bg-[#8F6232] text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center"
                >
                  {wishlistCount}
                </span>
              )}
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
              {cartCount > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute top-1 right-1 md:-top-0.5 md:-right-1 bg-[#161412] text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center"
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Expandable Search Bar with smooth transition */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              key="catalog-search-bar"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-[#ECE7DE] bg-[#FAF8F4]"
            >
              <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12 py-3.5">
                <form
                  onSubmit={handleSearchSubmit}
                  className="w-full flex flex-col sm:flex-row sm:items-center gap-3"
                >
                  <label
                    htmlFor="catalog-search-input"
                    className="text-xs font-medium text-[#161412] shrink-0"
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
                      className="w-full h-9 rounded-full bg-white px-4 text-base md:text-xs placeholder:text-[#6B655D] border-[#DCD4C8] focus-visible:border-[#211E1A] focus-visible:ring-1 focus-visible:ring-[#211E1A]/15"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="px-3 py-1.5 text-xs text-[#6B655D] hover:text-[#161412] rounded-full shrink-0"
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
                    <span>Try:</span>
                    {["Oak", "Linen", "Lamp", "Chair"].map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => handleQuickTerm(term)}
                        className="px-2.5 py-1 rounded-full bg-[#EFECE6] text-[#161412] hover:bg-[#E5DDD3] transition-colors"
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
