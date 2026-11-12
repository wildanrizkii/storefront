import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import { StorefrontProvider } from "../context/StorefrontContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luma & Living | All Products",
  description:
    "Considered pieces for the home you're building, one room at a time. Scandinavian minimalist furniture and decor by Luma & Living.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${plusJakarta.variable}`}
    >
      <body className="antialiased bg-cream text-charcoal-main">
        <StorefrontProvider>{children}</StorefrontProvider>
      </body>
    </html>
  );
}
