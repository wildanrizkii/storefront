"use client";

import { useEffect, useState } from "react";
import { PRODUCTS } from "../data/products";

const STORAGE_KEY = "luma_living_wishlist_v1";
// Stitch reference displays "2" on the header wishlist badge by default
const DEFAULT_WISHLIST_IDS = ["hollis-3-seater-sofa", "marlow-lounge-chair"];

function getInitialWishlist(): string[] {
  if (typeof window === "undefined") {
    return DEFAULT_WISHLIST_IDS;
  }
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch {
    // Fallback to in-memory default if localStorage is blocked
  }
  return DEFAULT_WISHLIST_IDS;
}

export function useWishlist() {
  const [wishlistIds, setWishlistIds] = useState<string[]>(getInitialWishlist);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setWishlistIds((prev) => {
            if (JSON.stringify(prev) === saved) return prev;
            return parsed;
          });
        }
      }
    } catch {
      // Fallback to in-memory default if localStorage is blocked
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlistIds));
    } catch {
      // Ignore storage quota errors
    }
  }, [wishlistIds, hydrated]);

  const toggleWishlist = (productId: string) => {
    setWishlistIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const isWishlisted = (productId: string) => wishlistIds.includes(productId);

  const clearWishlist = () => setWishlistIds([]);

  const wishlistedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return {
    wishlistIds,
    wishlistedProducts,
    wishlistCount: wishlistIds.length,
    toggleWishlist,
    isWishlisted,
    clearWishlist,
  };
}
