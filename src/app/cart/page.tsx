import type { Metadata } from "next";
import { ShopPage } from "../../components/pages/ShopPage";

export const metadata: Metadata = {
  title: "Your Cart | Luma & Living",
  description:
    "Review your Luma & Living furniture selections and white-glove delivery eligibility.",
};

export default function CartRoute() {
  return <ShopPage initialDrawer="cart" />;
}
