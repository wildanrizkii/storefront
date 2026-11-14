"use client";

import React from "react";
import type { SortOption } from "../../types/product";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export interface ProductSortProps {
  sortBy: SortOption;
  onChangeSort: (sort: SortOption) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating-desc", label: "Highest Rated" },
  { value: "reviews-desc", label: "Most Reviewed" },
];

export function ProductSort({ sortBy, onChangeSort }: ProductSortProps) {
  const currentLabel =
    SORT_OPTIONS.find((opt) => opt.value === sortBy)?.label ?? "Featured";

  return (
    <div className="relative inline-flex items-center gap-1.5 text-[12px] text-text-muted">
      <span className="shrink-0">Sort by:</span>
      <Select
        value={sortBy}
        onValueChange={(val) => onChangeSort(val as SortOption)}
      >
        <SelectTrigger
          aria-label={`Sort by, current selection ${currentLabel}`}
          className="h-8 border-transparent hover:border-[#DCD4C8] bg-transparent hover:bg-[#EFECE6] font-medium text-charcoal-main text-xs px-2 py-1 w-auto min-w-[130px] rounded"
        >
          <SelectValue placeholder="Featured">
            {currentLabel}
          </SelectValue>
        </SelectTrigger>
        <SelectContent align="end" className="w-48 bg-[#FCFAF6] border-[#DCD4C8]">
          {SORT_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
