"use client";

import { useEffect, useState } from "react";
import { PRODUCTS } from "../data/products";
import { DEFAULT_CART_ITEMS } from "../data/cartData";
import type { Product } from "../types/product";

export interface CartItem {
  productId: string;
  quantity: number;
  variantLabel?: string;
  drawerThumbnailUrl?: string;
}

export interface HydratedCartItem {
  product: Product;
  quantity: number;
  variantLabel: string;
  drawerThumbnailUrl: string;
}

const STORAGE_KEY = "luma_living_cart_v2";
const DEFAULT_CART: CartItem[] = DEFAULT_CART_ITEMS.map((item) => ({
  productId: item.productId,
  quantity: item.quantity,
  variantLabel: item.variantLabel,
  drawerThumbnailUrl: item.drawerThumbnailUrl,
}));

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(DEFAULT_CART);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch {
      // Fallback to default in-memory cart
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore storage quota errors
    }
  }, [items, hydrated]);

  const addToCart = (
    productId: string,
    quantityToAdd = 1,
    variantLabel?: string
  ) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.productId === productId);
      if (existing) {
        return prev.map((item) =>
          item.productId === productId
            ? {
                ...item,
                quantity: item.quantity + quantityToAdd,
                variantLabel: variantLabel ?? item.variantLabel,
              }
            : item
        );
      }
      const preset = DEFAULT_CART_ITEMS.find((d) => d.productId === productId);
      return [
        ...prev,
        {
          productId,
          quantity: quantityToAdd,
          variantLabel: variantLabel ?? preset?.variantLabel,
          drawerThumbnailUrl: preset?.drawerThumbnailUrl,
        },
      ];
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.productId !== productId));
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.productId !== productId));
  };

  const clearCart = () => setItems([]);
  const resetToDefaultCart = () => setItems(DEFAULT_CART);

  const hydratedItems: HydratedCartItem[] = items
    .map((item) => {
      const product = PRODUCTS.find((p) => p.id === item.productId);
      if (!product) return null;
      const preset = DEFAULT_CART_ITEMS.find(
        (d) => d.productId === item.productId
      );
      return {
        product,
        quantity: item.quantity,
        variantLabel:
          item.variantLabel ??
          preset?.variantLabel ??
          `${product.category} · Standard Finish`,
        drawerThumbnailUrl:
          item.drawerThumbnailUrl ??
          preset?.drawerThumbnailUrl ??
          product.imageUrl,
      };
    })
    .filter((entry): entry is HydratedCartItem => entry !== null);

  const cartCount = hydratedItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = hydratedItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return {
    items: hydratedItems,
    cartCount,
    subtotal,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    resetToDefaultCart,
  };
}
