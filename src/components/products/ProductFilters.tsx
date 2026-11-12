"use client";

import React, { useEffect } from "react";
import { CATEGORIES, TOOLBAR_CATEGORIES } from "../../data/categories";
import type { CategoryFilter } from "../../types/product";
import type { CatalogStatus } from "../../hooks/useCatalog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import { Button } from "../ui/Button";

export interface ProductFiltersProps {
  activeCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
  onSaleOnly: boolean;
  onToggleSaleOnly: (value: boolean) => void;
  minRating: number;
  onChangeMinRating: (rating: number) => void;
  maxPrice: number | null;
  onChangeMaxPrice: (price: number | null) => void;
  activeFilterCount: number;
  onResetFilters: () => void;
  drawerOpen: boolean;
  onToggleDrawer: () => void;
  catalogStatus: CatalogStatus;
  onChangeCatalogStatus: (status: CatalogStatus) => void;
}

export function ProductFilters({
  activeCategory,
  onSelectCategory,
  onSaleOnly,
  onToggleSaleOnly,
  minRating,
  onChangeMinRating,
  maxPrice,
  onChangeMaxPrice,
  activeFilterCount,
  onResetFilters,
  drawerOpen,
  onToggleDrawer,
  catalogStatus,
  onChangeCatalogStatus,
}: ProductFiltersProps) {
  useEffect(() => {
    if (!drawerOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onToggleDrawer();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [drawerOpen, onToggleDrawer]);

  return (
    <>
      <div className="flex items-center gap-2 text-[12px] overflow-x-auto no-scrollbar pb-1 md:pb-0 md:flex-wrap">
        {/* Filters Button */}
        <button
          type="button"
          onClick={onToggleDrawer}
          aria-expanded={drawerOpen}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#1C1A17] text-white rounded-full font-medium hover:bg-black active:scale-95 transition-all shrink-0 min-h-[34px]"
        >
          {/* Desktop filter lines icon */}
          <svg
            aria-hidden="true"
            className="hidden md:inline w-3.5 h-3.5 stroke-[2]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <line x1="4" x2="20" y1="7" y2="7" />
            <line x1="8" x2="16" y1="12" y2="12" />
            <line x1="10" x2="14" y1="17" y2="17" />
          </svg>
          {/* Mobile filter sliders icon */}
          <svg
            aria-hidden="true"
            className="md:hidden w-3.5 h-3.5 stroke-current stroke-[2]"
            fill="none"
            viewBox="0 0 24 24"
          >
            <line x1="4" x2="4" y1="21" y2="14" />
            <line x1="4" x2="4" y1="10" y2="3" />
            <line x1="12" x2="12" y1="21" y2="12" />
            <line x1="12" x2="12" y1="8" y2="3" />
            <line x1="20" x2="20" y1="21" y2="16" />
            <line x1="20" x2="20" y1="12" y2="3" />
            <circle cx="4" cy="12" r="2" />
            <circle cx="12" cy="10" r="2" />
            <circle cx="20" cy="14" r="2" />
          </svg>
          <span>
            Filters{activeFilterCount > 0 ? ` (${activeFilterCount})` : ""}
          </span>
        </button>

        {/* Category Pills */}
        {TOOLBAR_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              aria-pressed={isActive}
              className={
                isActive
                  ? "px-3.5 py-1.5 bg-[#1C1A17] text-white rounded-full font-medium hover:bg-black transition-colors shrink-0 min-h-[34px]"
                  : "px-3.5 md:px-3 py-1.5 bg-[#F2ECE5] md:bg-transparent hover:bg-[#E9E3DA] md:hover:bg-transparent text-charcoal-main hover:text-black rounded-full transition-colors font-medium md:font-normal shrink-0 min-h-[34px]"
              }
            >
              {cat.label}
            </button>
          );
        })}

        {activeCategory === "Bedroom" && (
          <button
            type="button"
            onClick={() => onSelectCategory("All")}
            aria-pressed={true}
            className="px-3.5 py-1.5 bg-[#1C1A17] text-white rounded-full font-medium hover:bg-black transition-colors shrink-0 min-h-[34px]"
          >
            Bedroom ×
          </button>
        )}
      </div>

      {/* Expandable Filter Panel / Modal */}
      <Sheet
        open={drawerOpen}
        onOpenChange={(open) => {
          if (!open && drawerOpen) onToggleDrawer();
        }}
      >
        <SheetContent
          side="left"
          hideCloseButton
          className="w-full max-w-sm p-6 bg-cream border-r border-border-light flex flex-col justify-between overflow-y-auto no-scrollbar"
          aria-label="Filter products"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-border-light">
              <div>
                <SheetTitle className="font-serif-display text-2xl font-normal text-charcoal-main">
                  Refine Catalogue
                </SheetTitle>
                <SheetDescription className="text-xs text-text-muted mt-1">
                  Filter by category, price, rating, or sale pieces.
                </SheetDescription>
              </div>
              <button
                type="button"
                onClick={onToggleDrawer}
                aria-label="Close filters"
                className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center rounded-full text-charcoal-main hover:bg-[#EFECE6]"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 stroke-current stroke-[1.75]"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Room / Category Filter */}
            <div>
              <h3 className="text-[12px] font-medium text-charcoal-main mb-2.5">
                Category
              </h3>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => onSelectCategory(cat.id)}
                    aria-pressed={activeCategory === cat.id}
                    className={`px-3 py-1.5 rounded-full text-[12px] transition-colors ${
                      activeCategory === cat.id
                        ? "bg-[#1C1A17] text-white font-medium"
                        : "bg-[#EFECE6] text-charcoal-main hover:bg-[#E5DDD3]"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Special Offers */}
            <div className="pt-4 border-t border-border-light">
              <label
                htmlFor="filter-on-sale"
                className="flex items-center justify-between text-[13px] text-charcoal-main font-medium"
              >
                <span>Discounted Pieces Only (-15% to -20%)</span>
                <input
                  id="filter-on-sale"
                  type="checkbox"
                  checked={onSaleOnly}
                  onChange={(e) => onToggleSaleOnly(e.target.checked)}
                  className="w-4 h-4 accent-[#1C1A17] rounded"
                />
              </label>
            </div>

            {/* Maximum Price */}
            <div className="pt-4 border-t border-border-light">
              <h3 className="text-[12px] font-medium text-charcoal-main mb-2.5">
                Price Ceiling
              </h3>
              <div className="grid grid-cols-2 gap-2 text-[12px]">
                {[
                  { label: "Any price", value: null },
                  { label: "Under $500", value: 500 },
                  { label: "Under $1,000", value: 1000 },
                  { label: "Under $2,000", value: 2000 },
                ].map((tier) => (
                  <button
                    key={tier.label}
                    type="button"
                    onClick={() => onChangeMaxPrice(tier.value)}
                    aria-pressed={maxPrice === tier.value}
                    className={`px-3 py-2 rounded-lg text-left transition-colors ${
                      maxPrice === tier.value
                        ? "bg-[#1C1A17] text-white font-medium"
                        : "bg-[#EFECE6] text-charcoal-main hover:bg-[#E5DDD3]"
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Minimum Rating */}
            <div className="pt-4 border-t border-border-light">
              <h3 className="text-[12px] font-medium text-charcoal-main mb-2.5">
                Customer Rating
              </h3>
              <div className="flex flex-wrap gap-2 text-[12px]">
                {[
                  { label: "All ratings", value: 0 },
                  { label: "4.5★ & above", value: 4.5 },
                  { label: "4.8★ & above", value: 4.8 },
                ].map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => onChangeMinRating(option.value)}
                    aria-pressed={minRating === option.value}
                    className={`px-3 py-1.5 rounded-full transition-colors ${
                      minRating === option.value
                        ? "bg-[#1C1A17] text-white font-medium"
                        : "bg-[#EFECE6] text-charcoal-main hover:bg-[#E5DDD3]"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* UI Resilience State Switcher (R-27 verification aid) */}
            <div className="pt-4 border-t border-border-light">
              <h3 className="text-[12px] font-medium text-charcoal-main mb-1.5">
                Catalogue Data State
              </h3>
              <p className="text-[11px] text-text-subtle mb-2.5">
                Preview loading and error resilience states (R-27).
              </p>
              <div className="flex gap-2 text-[11.5px]">
                {(["ready", "loading", "error"] as CatalogStatus[]).map(
                  (st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => onChangeCatalogStatus(st)}
                      aria-pressed={catalogStatus === st}
                      className={`px-3 py-1.5 rounded-full capitalize transition-colors ${
                        catalogStatus === st
                          ? "bg-charcoal-main text-white font-medium"
                          : "bg-[#EFECE6] text-charcoal-main hover:bg-[#E5DDD3]"
                      }`}
                    >
                      {st}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border-light flex items-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={onResetFilters}
              className="flex-1"
            >
              Reset All
            </Button>
            <Button
              type="button"
              variant="primary"
              size="md"
              onClick={onToggleDrawer}
              className="flex-1"
            >
              Apply Filters
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
