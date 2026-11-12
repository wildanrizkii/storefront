import type { Metadata } from "next";
import { LandingPage } from "../components/pages/LandingPage";

export const metadata: Metadata = {
  title: "Luma & Living | Timeless Furniture for Living",
  description:
    "Handcrafted pieces built with sustainable materials designed to elevate your home and endure through the years.",
};

export default function HomePage() {
  return <LandingPage />;
}
