import type { Metadata } from "next";
import { ShopPage } from "../../components/pages/ShopPage";
import { CATEGORIES } from "../../data/categories";
import type { CategoryFilter } from "../../types/product";

export const metadata: Metadata = {
  title: "Luma & Living | All Products",
  description:
    "Considered pieces for the home you're building, one room at a time. Browse sofas, chairs, tables, storage, lighting, and decor.",
};

interface ShopRouteProps {
  searchParams: Promise<{ category?: string; q?: string }>;
}

export default async function ShopRoute({ searchParams }: ShopRouteProps) {
  const params = await searchParams;
  const matchedCategory = CATEGORIES.find(
    (c) => c.id.toLowerCase() === (params.category ?? "").toLowerCase()
  )?.id as CategoryFilter | undefined;

  return (
    <ShopPage
      initialCategory={matchedCategory}
      initialQuery={params.q ?? undefined}
    />
  );
}
