import type { CatalogFilterState, Product } from "../types/product.ts";
import { TOTAL_CATALOG_RESULTS_LABEL } from "../data/products.ts";

export function filterAndSortProducts(
  products: Product[],
  filters: CatalogFilterState
): Product[] {
  const normalizedQuery = filters.searchQuery.trim().toLowerCase();

  const filtered = products.filter((product) => {
    if (filters.category !== "All" && product.category !== filters.category) {
      return false;
    }

    if (filters.onSaleOnly && !product.saleBadge) {
      return false;
    }

    if (filters.minRating > 0 && product.rating < filters.minRating) {
      return false;
    }

    if (filters.maxPrice !== null && product.price > filters.maxPrice) {
      return false;
    }

    if (normalizedQuery.length > 0) {
      const matchesName = product.name.toLowerCase().includes(normalizedQuery);
      const matchesCategory = product.category.toLowerCase().includes(normalizedQuery);
      const matchesDescription = product.description.toLowerCase().includes(normalizedQuery);
      const matchesMaterials = product.materials.toLowerCase().includes(normalizedQuery);
      if (!matchesName && !matchesCategory && !matchesDescription && !matchesMaterials) {
        return false;
      }
    }

    return true;
  });

  const sorted = [...filtered];
  sorted.sort((a, b) => {
    switch (filters.sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating-desc":
        return b.rating - a.rating || b.reviewCount - a.reviewCount;
      case "reviews-desc":
        return b.reviewCount - a.reviewCount;
      case "featured":
      default:
        return a.featuredOrder - b.featuredOrder;
    }
  });

  return sorted;
}

export function formatResultsSummary(params: {
  filteredCount: number;
  isDefaultUnfiltered: boolean;
  currentPage: number;
  pageSize: number;
}): string {
  const { filteredCount, isDefaultUnfiltered, currentPage, pageSize } = params;

  if (filteredCount === 0) {
    return "Showing 0 of 0 results";
  }

  if (isDefaultUnfiltered) {
    const start = (currentPage - 1) * pageSize + 1;
    const end = Math.min(currentPage * pageSize, TOTAL_CATALOG_RESULTS_LABEL);
    return `Showing ${start}-${end} of ${TOTAL_CATALOG_RESULTS_LABEL} results`;
  }

  return `Showing 1-${filteredCount} of ${filteredCount} results`;
}

export function validateNewsletterEmail(email: string): {
  valid: boolean;
  message: string;
} {
  const trimmed = email.trim();
  if (!trimmed) {
    return {
      valid: false,
      message: "Please enter your email address.",
    };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailPattern.test(trimmed)) {
    return {
      valid: false,
      message: "Please enter a valid email address (for example, name@domain.com).",
    };
  }

  return {
    valid: true,
    message: "Thank you for subscribing. You are on our monthly list.",
  };
}
