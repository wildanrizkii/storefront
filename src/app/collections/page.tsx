import type { Metadata } from "next";
import { CollectionsPage } from "../../components/pages/CollectionsPage";

export const metadata: Metadata = {
  title: "Collections | Luma & Living",
  description:
    "Explore Luma & Living seasonal and architectural furniture collections organized by room and material harmony.",
};

export default function CollectionsRoute() {
  return <CollectionsPage />;
}
