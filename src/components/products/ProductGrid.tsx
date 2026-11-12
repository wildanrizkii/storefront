"use client";

import React from "react";
import type { CategoryFilter, Product, ViewMode } from "../../types/product";
import type { CatalogStatus } from "../../hooks/useCatalog";
import { ProductCard } from "./ProductCard";

export interface ProductGridProps {
  products: Product[];
  viewMode: ViewMode;
  status: CatalogStatus;
  activeCategory: CategoryFilter;
  searchQuery: string;
  onResetFilters: () => void;
  onRetry: () => void;
  isWishlisted: (productId: string) => boolean;
  onToggleWishlist: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (productId: string) => void;
}

export function ProductGrid({
  products,
  viewMode,
  status,
  activeCategory,
  searchQuery,
  onResetFilters,
  onRetry,
  isWishlisted,
  onToggleWishlist,
  onSelectProduct,
  onAddToCart,
}: ProductGridProps) {
  if (status === "loading") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="py-12 space-y-6"
        data-purpose="catalog-loading-state"
      >
        <div className="flex items-center justify-between">
          <p className="text-[13px] text-text-muted">
            Loading Luma &amp; Living furniture pieces and material specifications...
          </p>
          <button
            type="button"
            onClick={onRetry}
            className="text-[12px] font-medium text-charcoal-main underline"
          >
            Show catalogue now
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 md:gap-x-6 md:gap-y-11">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="space-y-2.5">
              <div className="w-full aspect-[4/5] bg-card-bg rounded-xs border border-border-light" />
              <div className="h-3 w-16 bg-[#E5DFD5] rounded-xs" />
              <div className="h-4 w-3/4 bg-[#E5DFD5] rounded-xs" />
              <div className="h-3 w-20 bg-[#E5DFD5] rounded-xs" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div
        role="alert"
        className="my-8 p-8 rounded-lg border border-border-light bg-[#F2ECE5] text-center max-w-lg mx-auto space-y-3"
        data-purpose="catalog-error-state"
      >
        <p className="font-serif-display text-2xl text-charcoal-main">
          Unable to load the catalogue right now
        </p>
        <p className="text-[13px] text-text-muted leading-relaxed">
          The inventory service did not respond in time. Check your connection or reload the local collection data.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={onRetry}
            className="px-5 py-2.5 rounded-full bg-[#1C1A17] text-white text-[12px] font-medium hover:bg-black transition-colors min-h-[44px]"
          >
            Reload Catalogue
          </button>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="my-8 p-10 rounded-lg border border-border-light bg-[#F2ECE5]/60 text-center max-w-lg mx-auto space-y-3"
        data-purpose="catalog-empty-state"
      >
        <p className="font-serif-display text-2xl text-charcoal-main">
          No pieces match your current selection
        </p>
        <p className="text-[13px] text-text-muted leading-relaxed">
          {searchQuery.trim()
            ? `No items in ${
                activeCategory === "All" ? "our collection" : activeCategory
              } matched "${searchQuery}".`
            : `No pieces in ${activeCategory} matched all active price or rating filters.`}
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={onResetFilters}
            className="px-5 py-2.5 rounded-full bg-[#1C1A17] text-white text-[12px] font-medium hover:bg-black transition-colors min-h-[44px]"
          >
            Reset all filters
          </button>
        </div>
      </div>
    );
  }

  if (viewMode === "list") {
    return (
      <div
        className="flex flex-col gap-5"
        data-purpose="product-catalog-list"
      >
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            viewMode="list"
            isWishlisted={isWishlisted(product.id)}
            onToggleWishlist={onToggleWishlist}
            onSelectProduct={onSelectProduct}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 md:gap-x-6 md:gap-y-11"
      data-purpose="product-catalog-grid"
    >
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          index={index}
          viewMode="grid"
          isWishlisted={isWishlisted(product.id)}
          onToggleWishlist={onToggleWishlist}
          onSelectProduct={onSelectProduct}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
