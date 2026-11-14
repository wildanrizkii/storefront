"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { MotionConfig } from "framer-motion";
import { useWishlist } from "../hooks/useWishlist";
import { useCart, type HydratedCartItem } from "../hooks/useCart";
import type { Product } from "../types/product";
import { Header } from "../components/layout/Header";

export type StorefrontDrawer = "wishlist" | "cart" | "account" | null;

export interface StorefrontContextValue {
  wishlistedProducts: Product[];
  wishlistCount: number;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  clearWishlist: () => void;

  cartItems: HydratedCartItem[];
  cartCount: number;
  cartSubtotal: number;
  addToCart: (
    productId: string,
    quantity?: number,
    variantLabel?: string
  ) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  resetToDefaultCart: () => void;

  activeDrawer: StorefrontDrawer;
  setActiveDrawer: (drawer: StorefrontDrawer) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const StorefrontContext = createContext<StorefrontContextValue | null>(null);

export function StorefrontProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    wishlistedProducts,
    wishlistCount,
    toggleWishlist,
    isWishlisted,
    clearWishlist,
  } = useWishlist();

  const {
    items: cartItems,
    cartCount,
    subtotal: cartSubtotal,
    addToCart,
    updateQuantity: updateCartQuantity,
    removeFromCart,
    resetToDefaultCart,
  } = useCart();

  const [activeDrawer, setActiveDrawer] = useState<StorefrontDrawer>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const pathname = usePathname();
  const prevPathnameRef = useRef<string | null>(null);

  useEffect(() => {
    // Only reset scroll to top when actively navigating between routes, never on initial mount or page refresh
    if (prevPathnameRef.current !== null && prevPathnameRef.current !== pathname) {
      if (typeof window !== "undefined" && !window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    }
    prevPathnameRef.current = pathname;
  }, [pathname]);

  const value: StorefrontContextValue = {
    wishlistedProducts,
    wishlistCount,
    toggleWishlist,
    isWishlisted,
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
  };

  return (
    <MotionConfig reducedMotion="user">
      <StorefrontContext.Provider value={value}>
        <Header />
        {children}
      </StorefrontContext.Provider>
    </MotionConfig>
  );
}

export function useStorefront(): StorefrontContextValue {
  const ctx = useContext(StorefrontContext);
  if (!ctx) {
    throw new Error("useStorefront must be used within a StorefrontProvider");
  }
  return ctx;
}
