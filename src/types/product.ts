export type ProductCategory =
  | "Sofas"
  | "Chairs"
  | "Tables"
  | "Storage"
  | "Lighting"
  | "Decor"
  | "Bedroom";

export type CategoryFilter = "All" | ProductCategory;

export type SortOption =
  | "featured"
  | "price-asc"
  | "price-desc"
  | "rating-desc"
  | "reviews-desc";

export type ViewMode = "grid" | "list";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  saleBadge?: string;
  rating: number;
  reviewCount: number;
  featuredOrder: number;
  imageUrl: string;
  mobileImageUrl: string;
  imageAlt: string;
  description: string;
  dimensions: string;
  materials: string;
}

export interface CatalogFilterState {
  category: CategoryFilter;
  searchQuery: string;
  sortBy: SortOption;
  onSaleOnly: boolean;
  minRating: number;
  maxPrice: number | null;
}
