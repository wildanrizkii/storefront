import type { Metadata } from "next";
import { AboutPage } from "../../components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About Us | Luma & Living",
  description:
    "Discover Luma & Living's Scandinavian craftsmanship, sustainable FSC-certified timber sourcing, and workshops in Copenhagen and Portland.",
};

export default function AboutRoute() {
  return <AboutPage />;
}
