"use client";

import React from "react";

export interface ProductRatingProps {
  rating: number;
  reviewCount: number;
}

export function ProductRating({ rating, reviewCount }: ProductRatingProps) {
  const desktopStars = rating >= 4.9 ? "★★★★★" : "★★★★☆";

  return (
    <div
      className="flex items-center gap-1 md:gap-1.5 text-[11px] text-text-subtle pt-0.5"
      aria-label={`Rated ${rating} out of 5 based on ${reviewCount} reviews`}
    >
      {/* Desktop 5-star editorial bar */}
      <span
        aria-hidden="true"
        className="hidden md:inline text-gold-accent tracking-tighter"
      >
        {desktopStars}
      </span>
      <span aria-hidden="true" className="hidden md:inline">
        {rating.toFixed(1)} ({reviewCount})
      </span>

      {/* Mobile compact single-star rating */}
      <span aria-hidden="true" className="md:hidden text-gold-accent text-xs">
        ★
      </span>
      <span
        aria-hidden="true"
        className="md:hidden font-medium text-charcoal-main"
      >
        {rating.toFixed(1)}
      </span>
      <span aria-hidden="true" className="md:hidden text-text-subtle">
        ({reviewCount})
      </span>
    </div>
  );
}
