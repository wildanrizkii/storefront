"use client";

import { useMemo, useState } from "react";
import { PRODUCTS, TOTAL_REFERENCE_PAGES } from "../data/products";
import type {
  CategoryFilter,
  Product,
  SortOption,
  ViewMode,
} from "../types/product";
import { filterAndSortProducts, formatResultsSummary } from "./catalogUtils";

export type CatalogStatus = "ready" | "loading" | "error";

export function useCatalog() {
  const [category, setCategoryState] = useState<CategoryFilter>("All");
  const [searchQuery, setSearchQueryState] = useState<string>("");
  const [sortBy, setSortByState] = useState<SortOption>("featured");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [onSaleOnly, setOnSaleOnlyState] = useState<boolean>(false);
  const [minRating, setMinRatingState] = useState<number>(0);
  const [maxPrice, setMaxPriceState] = useState<number | null>(null);
  const [status, setStatus] = useState<CatalogStatus>("ready");

  const setCategory = (nextCategory: CategoryFilter) => {
    setCategoryState(nextCategory);
    setCurrentPage(1);
  };

  const setSearchQuery = (nextQuery: string) => {
    setSearchQueryState(nextQuery);
    setCurrentPage(1);
  };

  const setSortBy = (nextSort: SortOption) => {
    setSortByState(nextSort);
    setCurrentPage(1);
  };

  const setOnSaleOnly = (nextValue: boolean) => {
    setOnSaleOnlyState(nextValue);
    setCurrentPage(1);
  };

  const setMinRating = (nextRating: number) => {
    setMinRatingState(nextRating);
    setCurrentPage(1);
  };

  const setMaxPrice = (nextPrice: number | null) => {
    setMaxPriceState(nextPrice);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setCategoryState("All");
    setSearchQueryState("");
    setSortByState("featured");
    setOnSaleOnlyState(false);
    setMinRatingState(0);
    setMaxPriceState(null);
    setCurrentPage(1);
    setStatus("ready");
  };

  const filteredProducts: Product[] = useMemo(() => {
    return filterAndSortProducts(PRODUCTS, {
      category,
      searchQuery,
      sortBy,
      onSaleOnly,
      minRating,
      maxPrice,
    });
  }, [category, searchQuery, sortBy, onSaleOnly, minRating, maxPrice]);

  const isDefaultUnfiltered =
    category === "All" &&
    searchQuery.trim() === "" &&
    !onSaleOnly &&
    minRating === 0 &&
    maxPrice === null;

  const totalPages = isDefaultUnfiltered ? TOTAL_REFERENCE_PAGES : 1;

  // When browsing pages 2..8 in the Stitch reference view, rotate the 12 curated pieces deterministically so every page displays a responsive layout.
  const displayedProducts: Product[] = useMemo(() => {
    if (!isDefaultUnfiltered || currentPage === 1) {
      return filteredProducts;
    }
    const offset = ((currentPage - 1) * 3) % filteredProducts.length;
    return [
      ...filteredProducts.slice(offset),
      ...filteredProducts.slice(0, offset),
    ];
  }, [filteredProducts, isDefaultUnfiltered, currentPage]);

  const activeFilterCount =
    (category !== "All" ? 1 : 0) +
    (searchQuery.trim() !== "" ? 1 : 0) +
    (onSaleOnly ? 1 : 0) +
    (minRating > 0 ? 1 : 0) +
    (maxPrice !== null ? 1 : 0);

  const resultsSummary = formatResultsSummary({
    filteredCount: filteredProducts.length,
    isDefaultUnfiltered,
    currentPage,
    pageSize: 12,
  });

  return {
    category,
    setCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    viewMode,
    setViewMode,
    currentPage,
    setCurrentPage,
    totalPages,
    onSaleOnly,
    setOnSaleOnly,
    minRating,
    setMinRating,
    maxPrice,
    setMaxPrice,
    status,
    setStatus,
    resetFilters,
    filteredProducts,
    displayedProducts,
    activeFilterCount,
    isDefaultUnfiltered,
    resultsSummary,
  };
}
