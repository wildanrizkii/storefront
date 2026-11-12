"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LANDING_CATEGORIES } from "../../data/landingData";
import { PRODUCTS } from "../../data/products";
import { Newsletter } from "../layout/Newsletter";
import { Footer } from "../layout/Footer";

interface CuratedSeries {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  materialNote: string;
  categoryHref: string;
  featuredProductIds: string[];
}

const CURATED_SERIES: CuratedSeries[] = [
  {
    id: "nordic-oak",
    eyebrow: "Series 01",
    title: "Nordic Oak Series",
    description:
      "Wide-plank European white oak finished with matte plant-based hardwax oil, highlighting exposed mortise joinery and softened bevel edges.",
    materialNote: "FSC-Certified White Oak & Natural Cane",
    categoryHref: "/shop?category=Tables",
    featuredProductIds: [
      "bessen-oak-coffee-table",
      "norra-modular-bookshelf",
      "wren-upholstered-bed-frame",
    ],
  },
  {
    id: "tactile-upholstery",
    eyebrow: "Series 02",
    title: "Tactile Upholstery Series",
    description:
      "Deep residential seating tailored in Belgian linen-cotton weaves, wool boucle, and cotton-pile velvet built around kiln-dried timber frames.",
    materialNote: "Belgian Linen, Wool Boucle & Velvet",
    categoryHref: "/shop?category=Sofas",
    featuredProductIds: [
      "hollis-3-seater-sofa",
      "dune-modular-sectional",
      "marlow-lounge-chair",
    ],
  },
  {
    id: "atelier-lighting",
    eyebrow: "Series 03",
    title: "Atelier Clay & Paper Lighting",
    description:
      "Wheel-thrown stoneware bases paired with unbleached linen and handmade mulberry paper shades calibrated for calm 2700K evening warmth.",
    materialNote: "Raw Stoneware, Brass & Mulberry Paper",
    categoryHref: "/shop?category=Lighting",
    featuredProductIds: [
      "alder-ceramic-table-lamp",
      "fenwick-floor-lamp",
      "linden-stoneware-vase",
    ],
  },
];

export function CollectionsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#161412] font-sans antialiased">
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-12 pb-14 border-b border-[#ECE7DE]">
          <span className="text-[12px] font-semibold tracking-[0.2em] text-[#8F6232] uppercase block mb-3">
            CURATED SERIES 2026
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h1 className="font-serif-display text-4xl sm:text-5xl xl:text-6xl font-medium tracking-tight text-[#161412] leading-[1.08] max-w-2xl">
              Seasonal &amp; Architectural{" "}
              <span className="italic text-[#8F6232] font-normal">
                Collections
              </span>
            </h1>
            <p className="text-[#6B655D] text-sm sm:text-base max-w-md leading-relaxed">
              Quiet groupings organized by material harmony rather than fleeting trends. Explore room-by-room edits and small-batch workshop series.
            </p>
          </div>
        </section>

        {/* Room Collections Grid */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
          <div className="flex items-baseline justify-between mb-8 gap-4">
            <h2 className="font-serif-display text-3xl text-[#161412]">
              By{" "}
              <span className="italic text-[#8F6232] font-normal">Room</span>
            </h2>
            <Link
              href="/shop"
              className="text-xs sm:text-sm font-medium text-[#161412] hover:text-[#8F6232] transition"
            >
              Browse full catalogue →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LANDING_CATEGORIES.map((categoryCard) => (
              <Link
                key={categoryCard.id}
                href={`/shop?category=${encodeURIComponent(
                  categoryCard.filterCategory
                )}`}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] block bg-[#E8E2D6] shadow-xs"
              >
                <img
                  src={categoryCard.imageUrl}
                  alt={categoryCard.imageAlt}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                  <div>
                    <h3 className="font-serif-display text-2xl font-normal leading-tight">
                      {categoryCard.name}
                    </h3>
                    <p className="text-xs text-neutral-200 mt-1">
                      {categoryCard.count}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Material & Architectural Series */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-20 space-y-16">
          {CURATED_SERIES.map((series) => {
            const seriesProducts = series.featuredProductIds
              .map((id) => PRODUCTS.find((p) => p.id === id))
              .filter((p): p is NonNullable<typeof p> => Boolean(p));

            return (
              <div
                key={series.id}
                className="pt-12 border-t border-[#ECE7DE] space-y-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                  <div className="space-y-2 max-w-2xl">
                    <span className="text-[11px] font-semibold tracking-[0.18em] text-[#8F6232] uppercase block">
                      {series.eyebrow} · {series.materialNote}
                    </span>
                    <h2 className="font-serif-display text-3xl sm:text-4xl text-[#161412]">
                      {series.title}
                    </h2>
                    <p className="text-sm text-[#6B655D] leading-relaxed">
                      {series.description}
                    </p>
                  </div>
                  <Link
                    href={series.categoryHref}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-[#D5CFC5] text-xs font-medium text-[#161412] hover:bg-[#EFEAE1] transition self-start lg:self-auto min-h-11"
                  >
                    Explore Series →
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {seriesProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.id}`}
                      className="group block"
                    >
                      <div className="relative aspect-[4/4.2] rounded-2xl overflow-hidden bg-[#F3EFE8] mb-3.5">
                        <img
                          src={product.imageUrl}
                          alt={product.imageAlt}
                          width={640}
                          height={672}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {product.saleBadge && (
                          <span className="absolute top-3.5 left-3.5 px-2.5 py-0.5 rounded-full bg-sale-tag text-white text-[10px] font-semibold">
                            {product.saleBadge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] uppercase tracking-wider text-[#6B655D]">
                        {product.category}
                      </p>
                      <div className="flex items-baseline justify-between gap-2 mt-0.5">
                        <h3 className="font-serif-display text-xl text-[#161412] group-hover:underline">
                          {product.name}
                        </h3>
                        <span className="text-sm font-semibold text-[#161412]">
                          ${product.price.toLocaleString("en-US")}
                        </span>
                      </div>
                      <p className="text-xs text-[#6B655D] mt-1 line-clamp-2">
                        {product.materials}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <Newsletter />
      <Footer
        onSelectCategory={(cat) =>
          router.push(
            cat === "All" ? "/shop" : `/shop?category=${encodeURIComponent(cat)}`
          )
        }
        onOpenInfoModal={(topic) => {
          if (topic === "About") router.push("/about");
          else if (topic === "Contact") router.push("/contact");
          else router.push("/shop");
        }}
      />
    </div>
  );
}
