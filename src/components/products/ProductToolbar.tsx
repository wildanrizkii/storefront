"use client";

import React from "react";
import type { CategoryFilter, SortOption, ViewMode } from "../../types/product";
import type { CatalogStatus } from "../../hooks/useCatalog";
import { ProductFilters } from "./ProductFilters";
import { ProductSort } from "./ProductSort";

export interface ProductToolbarProps {
  activeCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
  sortBy: SortOption;
  onChangeSort: (sort: SortOption) => void;
  viewMode: ViewMode;
  onChangeViewMode: (mode: ViewMode) => void;
  onSaleOnly: boolean;
  onToggleSaleOnly: (value: boolean) => void;
  minRating: number;
  onChangeMinRating: (rating: number) => void;
  maxPrice: number | null;
  onChangeMaxPrice: (price: number | null) => void;
  activeFilterCount: number;
  onResetFilters: () => void;
  filterDrawerOpen: boolean;
  onToggleFilterDrawer: () => void;
  catalogStatus: CatalogStatus;
  onChangeCatalogStatus: (status: CatalogStatus) => void;
}

export function ProductToolbar({
  activeCategory,
  onSelectCategory,
  sortBy,
  onChangeSort,
  viewMode,
  onChangeViewMode,
  onSaleOnly,
  onToggleSaleOnly,
  minRating,
  onChangeMinRating,
  maxPrice,
  onChangeMaxPrice,
  activeFilterCount,
  onResetFilters,
  filterDrawerOpen,
  onToggleFilterDrawer,
  catalogStatus,
  onChangeCatalogStatus,
}: ProductToolbarProps) {
  return (
    <div
      className="sticky top-[56px] md:static z-30 bg-cream/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none -mx-4 px-4 md:mx-0 md:px-0 pt-2.5 pb-3 md:py-4 mb-4 md:mb-9 border-b md:border-t md:border-b border-border-light flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-between gap-2.5 md:gap-4"
      data-purpose="catalog-controls"
    >
      {/* Left Filters & Horizontal Scrollable Category Pills */}
      <ProductFilters
        activeCategory={activeCategory}
        onSelectCategory={onSelectCategory}
        onSaleOnly={onSaleOnly}
        onToggleSaleOnly={onToggleSaleOnly}
        minRating={minRating}
        onChangeMinRating={onChangeMinRating}
        maxPrice={maxPrice}
        onChangeMaxPrice={onChangeMaxPrice}
        activeFilterCount={activeFilterCount}
        onResetFilters={onResetFilters}
        drawerOpen={filterDrawerOpen}
        onToggleDrawer={onToggleFilterDrawer}
        catalogStatus={catalogStatus}
        onChangeCatalogStatus={onChangeCatalogStatus}
      />

      {/* Right Sort & Grid/List Layout Toggle */}
      <div className="flex items-center justify-between md:justify-end gap-5 text-[12px] text-charcoal-main">
        <ProductSort sortBy={sortBy} onChangeSort={onChangeSort} />

        <div className="flex items-center gap-1.5 md:border-l md:border-border-light md:pl-4">
          {/* Grid Icon */}
          <button
            type="button"
            onClick={() => onChangeViewMode("grid")}
            aria-label="Grid View"
            aria-pressed={viewMode === "grid"}
            className={`p-1.5 rounded transition-colors min-w-[34px] min-h-[34px] inline-flex items-center justify-center ${
              viewMode === "grid"
                ? "text-charcoal-main bg-[#F2ECE5] md:bg-transparent"
                : "text-text-subtle hover:text-charcoal-main"
            }`}
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4 fill-current"
              viewBox="0 0 16 16"
            >
              <rect height="6" rx="1" width="6" x="1" y="1" />
              <rect height="6" rx="1" width="6" x="9" y="1" />
              <rect height="6" rx="1" width="6" x="1" y="9" />
              <rect height="6" rx="1" width="6" x="9" y="9" />
            </svg>
          </button>

          {/* List Icon */}
          <button
            type="button"
            onClick={() => onChangeViewMode("list")}
            aria-label="List View"
            aria-pressed={viewMode === "list"}
            className={`p-1.5 rounded transition-colors min-w-[34px] min-h-[34px] inline-flex items-center justify-center ${
              viewMode === "list"
                ? "text-charcoal-main bg-[#F2ECE5] md:bg-transparent"
                : "text-text-subtle hover:text-charcoal-main"
            }`}
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4 stroke-[1.8]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
