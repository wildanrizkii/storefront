"use client";

import React from "react";

export interface ProductPriceProps {
  price: number;
  originalPrice?: number;
}

export function ProductPrice({ price, originalPrice }: ProductPriceProps) {
  const formattedPrice = `$${price.toLocaleString("en-US")}`;
  const formattedOriginal = originalPrice
    ? `$${originalPrice.toLocaleString("en-US")}`
    : null;

  if (formattedOriginal) {
    return (
      <div className="pt-0.5 text-[12px] md:text-[13px] font-medium text-charcoal-main flex items-baseline gap-1.5 md:gap-2">
        <span className="text-text-subtle line-through font-normal text-[11px] md:text-[13px]">
          {formattedOriginal}
        </span>
        <span className="text-sale-tag md:text-charcoal-main font-medium">
          {formattedPrice}
        </span>
      </div>
    );
  }

  return (
    <div className="pt-0.5 text-[12px] md:text-[13px] font-medium text-charcoal-main">
      {formattedPrice}
    </div>
  );
}
