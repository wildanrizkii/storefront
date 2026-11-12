"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { Product, ViewMode } from "../../types/product";
import { ProductRating } from "./ProductRating";
import { ProductPrice } from "./ProductPrice";

export interface ProductCardProps {
  product: Product;
  index: number;
  viewMode: ViewMode;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (productId: string) => void;
}

export function ProductCard({
  product,
  index,
  viewMode,
  isWishlisted,
  onToggleWishlist,
  onSelectProduct,
  onAddToCart,
}: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const isPriority = index < 4;

  if (viewMode === "list") {
    return (
      <article
        className="group flex flex-col sm:flex-row gap-5 p-4 rounded-md border border-border-light bg-[#FAF8F3] hover:border-charcoal-main/40 transition-colors"
        data-purpose="product-card"
      >
        <div className="relative w-full sm:w-52 aspect-[4/5] bg-card-bg rounded-xs overflow-hidden shrink-0 flex items-center justify-center">
          {!imageError ? (
            <picture className="w-full h-full block">
              <source
                media="(max-width: 767px)"
                srcSet={product.mobileImageUrl}
              />
              <img
                src={product.imageUrl}
                alt={product.imageAlt}
                width={800}
                height={1000}
                loading={isPriority ? "eager" : "lazy"}
                fetchPriority={isPriority ? "high" : "auto"}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </picture>
          ) : (
            <div className="w-full h-full bg-[#ECE8E1] flex flex-col items-center justify-center p-4 text-center">
              <span className="text-[11px] uppercase tracking-wider text-text-subtle">
                {product.category}
              </span>
              <span className="font-serif-display text-sm text-charcoal-main mt-1">
                {product.name}
              </span>
            </div>
          )}

          {product.saleBadge && (
            <span className="absolute top-3 left-3 px-2 py-0.5 bg-sale-tag text-white text-[10px] font-medium rounded-xs tracking-wide">
              {product.saleBadge}
            </span>
          )}
        </div>

        <div className="flex flex-col justify-between flex-grow py-1">
          <div>
            <span className="text-[11px] uppercase md:normal-case tracking-wider md:tracking-wide text-text-subtle font-medium md:font-normal">
              {product.category}
            </span>
            <h2 className="mt-0.5">
              <Link
                href={`/products/${product.id}`}
                className="text-left text-[16px] font-serif md:font-sans font-medium text-charcoal-main hover:underline"
              >
                {product.name}
              </Link>
            </h2>
            <ProductRating
              rating={product.rating}
              reviewCount={product.reviewCount}
            />
            <p className="mt-2.5 text-[13px] text-text-muted leading-relaxed max-w-xl">
              {product.description}
            </p>
            <p className="mt-2 text-[11.5px] text-text-subtle">
              Dimensions: {product.dimensions} · {product.materials}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-border-light flex flex-wrap items-center justify-between gap-3">
            <ProductPrice
              price={product.price}
              originalPrice={product.originalPrice}
            />
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onToggleWishlist(product.id)}
                aria-pressed={isWishlisted}
                aria-label={
                  isWishlisted
                    ? `Remove ${product.name} from Wishlist`
                    : `Save ${product.name} to Wishlist`
                }
                className={`px-3.5 py-2 rounded-full border text-[12px] font-medium transition-colors min-h-[40px] inline-flex items-center gap-1.5 ${
                  isWishlisted
                    ? "border-charcoal-main bg-[#EFECE6] text-charcoal-main"
                    : "border-border-light text-charcoal-main hover:border-charcoal-main"
                }`}
              >
                <svg
                  aria-hidden="true"
                  className="w-3.5 h-3.5 stroke-[1.75]"
                  fill={isWishlisted ? "currentColor" : "none"}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <span>{isWishlisted ? "Saved" : "Wishlist"}</span>
              </button>
              <button
                type="button"
                onClick={() => onAddToCart(product.id)}
                className="px-4 py-2 rounded-full bg-[#1C1A17] text-white text-[12px] font-medium hover:bg-black transition-colors min-h-[40px]"
              >
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col" data-purpose="product-card">
      <div className="relative w-full aspect-[4/5] bg-card-bg rounded-md md:rounded-xs border border-border-light/60 md:border-none overflow-hidden mb-2.5 md:mb-3.5 flex items-center justify-center">
        <Link
          href={`/products/${product.id}`}
          aria-label={`Inspect ${product.name}`}
          className="w-full h-full block text-left focus-visible:outline-offset-[-2px]"
        >
          {!imageError ? (
            <picture className="w-full h-full block">
              <source
                media="(max-width: 767px)"
                srcSet={product.mobileImageUrl}
              />
              <img
                src={product.imageUrl}
                alt={product.imageAlt}
                width={800}
                height={1000}
                loading={isPriority ? "eager" : "lazy"}
                fetchPriority={isPriority ? "high" : "auto"}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
              />
            </picture>
          ) : (
            <div className="w-full h-full bg-[#ECE8E1] flex flex-col items-center justify-center p-4 text-center">
              <span className="text-[11px] uppercase tracking-wider text-text-subtle">
                {product.category}
              </span>
              <span className="font-serif-display text-sm text-charcoal-main mt-1">
                {product.name}
              </span>
            </div>
          )}
        </Link>

        {product.saleBadge && (
          <span className="absolute top-2 left-2 md:top-3.5 md:left-3.5 px-1.5 md:px-2 py-0.5 bg-sale-tag text-white text-[10px] font-medium rounded-xs tracking-wide shadow-2xs pointer-events-none">
            {product.saleBadge}
          </span>
        )}

        <button
          type="button"
          onClick={() => onToggleWishlist(product.id)}
          aria-pressed={isWishlisted}
          aria-label={
            isWishlisted
              ? `Remove ${product.name} from Wishlist`
              : `Save ${product.name} to Wishlist`
          }
          className="absolute top-2 right-2 md:top-3.5 md:right-3.5 w-8 h-8 md:w-7 md:h-7 bg-white/90 backdrop-blur-xs rounded-full flex items-center justify-center text-charcoal-main hover:bg-white shadow-xs active:scale-90 transition-all"
        >
          <svg
            aria-hidden="true"
            className="w-3.5 h-3.5 stroke-[1.75]"
            fill={isWishlisted ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className="space-y-0.5 md:space-y-1 flex flex-col flex-grow">
        <span className="text-[10px] md:text-[11px] uppercase md:normal-case tracking-wider md:tracking-wide text-text-subtle font-medium md:font-normal">
          {product.category}
        </span>
        <h2 className="text-[14px] font-serif md:font-sans font-medium text-charcoal-main leading-snug line-clamp-1">
          <Link
            href={`/products/${product.id}`}
            className="text-left hover:underline"
          >
            {product.name}
          </Link>
        </h2>
        <ProductRating
          rating={product.rating}
          reviewCount={product.reviewCount}
        />
        <ProductPrice
          price={product.price}
          originalPrice={product.originalPrice}
        />
      </div>
    </article>
  );
}
