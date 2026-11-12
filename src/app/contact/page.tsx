import type { Metadata } from "next";
import { ContactPage } from "../../components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact & Showrooms | Luma & Living",
  description:
    "Reach the Luma & Living Copenhagen and Portland showrooms, request complimentary material swatches, or book a private consultation.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
