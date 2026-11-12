import type { CategoryFilter } from "../types/product.ts";

export interface CategoryOption {
  id: CategoryFilter;
  label: string;
  showInToolbar: boolean;
}

export const CATEGORIES: CategoryOption[] = [
  { id: "All", label: "All", showInToolbar: true },
  { id: "Sofas", label: "Sofas", showInToolbar: true },
  { id: "Chairs", label: "Chairs", showInToolbar: true },
  { id: "Tables", label: "Tables", showInToolbar: true },
  { id: "Storage", label: "Storage", showInToolbar: true },
  { id: "Lighting", label: "Lighting", showInToolbar: true },
  { id: "Decor", label: "Decor", showInToolbar: true },
  { id: "Bedroom", label: "Bedroom", showInToolbar: false },
];

export const TOOLBAR_CATEGORIES: CategoryOption[] = CATEGORIES.filter(
  (category) => category.showInToolbar
);
