import type { Metadata } from "next";
import { CheckoutPage } from "../../components/pages/CheckoutPage";

export const metadata: Metadata = {
  title: "Checkout | Luma & Living",
  description:
    "Secure checkout for your Luma & Living Scandinavian furniture and home decor selections.",
};

export default function CheckoutRoute() {
  return <CheckoutPage />;
}
