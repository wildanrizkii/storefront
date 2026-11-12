"use client";

import React, { createContext, useContext, useState } from "react";
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
