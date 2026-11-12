import type { Metadata } from "next";
import { ProductDetailPage } from "../../../components/pages/ProductDetailPage";
import { getProductDetail } from "../../../data/pdpData";
import { PRODUCTS } from "../../../data/products";

interface ProductRouteProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: ProductRouteProps): Promise<Metadata> {
  const { id } = await params;
  const detail = getProductDetail(id);
  return {
    title: `${detail.displayTitle} | Luma & Living`,
    description: detail.subtitle,
  };
}

export default async function ProductRoute({ params }: ProductRouteProps) {
  const { id } = await params;
  return <ProductDetailPage productId={id} />;
}
