import type { Metadata } from "next";
import { OrderConfirmationPage } from "../../components/pages/OrderConfirmationPage";

export const metadata: Metadata = {
  title: "Order Confirmation | Luma & Living",
  description:
    "Thank you for your order. Your white-glove delivery has been scheduled.",
};

export default function OrderConfirmationAliasRoute() {
  return <OrderConfirmationPage />;
}
