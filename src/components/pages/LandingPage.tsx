"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  BRAND_PARTNERS,
  HERO_IMAGE_URL,
  LANDING_BEST_SELLERS,
  LANDING_CATEGORIES,
  LANDING_TESTIMONIALS,
  STORY_IMAGES,
} from "../../data/landingData";
import { useStorefront } from "../../context/StorefrontContext";

type BestSellerTab =
  | "All"
  | "Chairs"
  | "Sofas"
  | "Tables"
  | "Lighting"
  | "Storage";

type LegalModalKey =
  | "Privacy Policy"
  | "Terms of Service"
  | "Sustainability Pledge";

const BEST_SELLER_TABS: BestSellerTab[] = [
  "All",
  "Chairs",
  "Sofas",
  "Tables",
  "Lighting",
  "Storage",
];

const LEGAL_MODAL_COPY: Record<
  LegalModalKey,
  { title: string; body: string[] }
> = {
  "Privacy Policy": {
    title: "Privacy Policy",
    body: [
      "Luma & Living stores your saved wishlist and cart selections locally in your browser so room planning persists across visits without requiring an account.",
      "Email addresses shared with our studio are used solely for requested dispatches and order coordination.",
    ],
  },
  "Terms of Service": {
    title: "Terms of Service",
    body: [
      "Solid European oak, ash, walnut, and natural bouclé weaves exhibit subtle variations in grain and tone. Residential furniture dimensions carry a tolerance of 1 cm.",
      "Orders over $500 include complimentary two-person white-glove delivery and a 30-day in-home trial.",
    ],
  },
  "Sustainability Pledge": {
    title: "Sustainability Pledge",
    body: [
      "100% of our solid hardwoods are FSC-certified and finished with zero-VOC plant-based hardwax oils.",
      "Cushion covers and solid oak components are engineered for replacement and refinishing to extend product lifespans beyond 15 years.",
    ],
  },
};

export function LandingPage() {
  const { toggleWishlist, isWishlisted, addToCart, setActiveDrawer } =
    useStorefront();

  const [activeTab, setActiveTab] = useState<BestSellerTab>("All");
  const [legalModal, setLegalModal] = useState<LegalModalKey | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLegalModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const visibleBestSellers =
    activeTab === "All"
      ? LANDING_BEST_SELLERS
      : LANDING_BEST_SELLERS.filter((item) => item.filterTab === activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#161412] font-sans antialiased">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-10 pb-16 lg:pt-14 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-[12px] font-semibold tracking-[0.2em] text-[#8F6232] uppercase mb-4">
                NEW COLLECTION 2026
              </span>
              <h1 className="font-serif-display text-5xl sm:text-6xl xl:text-7xl font-medium tracking-tight text-[#161412] leading-[1.08] mb-6">
                Timeless
                <br />
                <span className="italic text-[#8F6232] font-normal">
                  Furniture
                </span>
                <br />
                for Living
              </h1>
              <p className="text-[#6B655D] text-base sm:text-lg max-w-md leading-relaxed mb-9">
                Handcrafted pieces built with premium sustainable materials designed to elevate your home and endure through the years.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-16">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#161412] text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition duration-200 min-h-[44px]"
                >
                  <span>Shop Collection</span>
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </Link>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-[#D5CFC5] text-[#161412] rounded-full text-sm font-medium hover:bg-[#EFEAE1] transition duration-200 min-h-[44px]"
                >
                  Our Story
                </a>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#ECE7DE] max-w-lg">
                <div>
                  <p className="font-serif-display text-3xl sm:text-4xl text-[#161412] font-normal">
                    2.4k<span className="text-[#8F6232]">+</span>
                  </p>
                  <p className="text-[11px] uppercase tracking-wider text-[#6B655D] mt-1 font-medium">
                    Happy Customers
                  </p>
                </div>
                <div>
                  <p className="font-serif-display text-3xl sm:text-4xl text-[#161412] font-normal">
                    340<span className="text-[#8F6232]">+</span>
                  </p>
                  <p className="text-[11px] uppercase tracking-wider text-[#6B655D] mt-1 font-medium">
                    Unique Pieces
                  </p>
                </div>
                <div>
                  <p className="font-serif-display text-3xl sm:text-4xl text-[#161412] font-normal">
                    15
                    <span className="text-sm font-sans font-normal text-[#8F6232]">
                      yr
                    </span>
                  </p>
                  <p className="text-[11px] uppercase tracking-wider text-[#6B655D] mt-1 font-medium">
                    Craftsmanship
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual Lifestyle Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full aspect-[4/3] sm:aspect-[1.15/1] rounded-3xl overflow-hidden bg-[#ECE6DC]">
                <img
                  src={HERO_IMAGE_URL}
                  alt="Curated contemporary living room with deep emerald sofa"
                  width={960}
                  height={835}
                  fetchPriority="high"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Brand Partners Banner */}
        <div className="border-y border-[#ECE7DE] py-7 bg-[#FAF8F4]/80">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-between gap-6 text-[#6B655D] text-xs sm:text-sm tracking-[0.25em] font-medium uppercase">
            {BRAND_PARTNERS.map((partner, idx) => (
              <Link
                key={partner}
                href="/shop"
                className="hover:text-[#161412] transition-colors"
              >
                {idx > 0 ? `• ${partner}` : partner}
              </Link>
            ))}
          </div>
        </div>

        {/* Shop by Category Section */}
        <section
          id="categories"
          className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20"
        >
          <div className="flex items-baseline justify-between mb-10 gap-4">
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#161412]">
              Shop by{" "}
              <span className="italic text-[#8F6232] font-normal">
                Category
              </span>
            </h2>
            <Link
              href="/shop"
              className="text-xs sm:text-sm font-medium text-[#161412] hover:text-[#8F6232] transition flex items-center gap-1 group"
            >
              <span>View all categories</span>
              <span
                aria-hidden="true"
                className="group-hover:translate-x-1 transition-transform"
              >
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LANDING_CATEGORIES.map((categoryCard) => (
              <Link
                key={categoryCard.id}
                href={`/shop?category=${encodeURIComponent(
                  categoryCard.filterCategory
                )}`}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4.2] block bg-[#E8E2D6] shadow-xs"
              >
                <img
                  src={categoryCard.imageUrl}
                  alt={categoryCard.imageAlt}
                  width={600}
                  height={840}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                  <div>
                    <h3 className="font-serif-display text-xl sm:text-2xl font-normal leading-tight">
                      {categoryCard.name}
                    </h3>
                    <p className="text-xs text-neutral-200 mt-1">
                      {categoryCard.count}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Best Sellers Section */}
        <section
          id="shop"
          className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#161412]">
                Our{" "}
                <span className="text-[#8F6232] italic font-normal">
                  Best Sellers
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar text-xs font-medium">
              {BEST_SELLER_TABS.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    aria-pressed={isActive}
                    className={`px-5 py-2 rounded-full transition shrink-0 ${
                      isActive
                        ? "bg-[#161412] text-white"
                        : "bg-white border border-[#E4DEC3] text-[#6B655D] hover:text-[#161412]"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            <div>
              <Link
                href="/shop"
                className="text-xs sm:text-sm font-medium text-[#161412] hover:text-[#8F6232] transition flex items-center gap-1 group whitespace-nowrap"
              >
                <span>View all products</span>
                <span
                  aria-hidden="true"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {visibleBestSellers.length === 0 ? (
            <div
              role="status"
              className="rounded-2xl border border-[#E8E4DC] bg-[#F3EFE8] p-10 text-center space-y-3"
            >
              <p className="font-serif-display text-2xl text-[#161412]">
                Explore {activeTab} in our full catalogue
              </p>
              <p className="text-xs text-[#6B655D] max-w-md mx-auto">
                Our lighting pieces, including the Alder Ceramic Table Lamp and Fenwick Floor Lamp, are available in the full storefront catalogue.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <Link
                  href={`/shop?category=${encodeURIComponent(activeTab)}`}
                  className="px-6 py-2.5 rounded-full bg-[#161412] text-white text-xs font-medium hover:bg-neutral-800"
                >
                  Browse {activeTab}
                </Link>
                <button
                  type="button"
                  onClick={() => setActiveTab("All")}
                  className="px-6 py-2.5 rounded-full border border-[#D5CFC5] text-xs font-medium text-[#161412] hover:bg-white"
                >
                  Show All Best Sellers
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleBestSellers.map((item) => {
                const wishlisted = isWishlisted(item.productId);
                return (
                  <article key={item.id} className="group flex flex-col">
                    <div className="relative bg-[#F3EFE8] rounded-2xl overflow-hidden aspect-[4/3.8] mb-4 flex items-center justify-center p-6">
                      {item.badge && (
                        <span
                          className={`absolute top-4 left-4 z-10 text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${
                            item.badge.tone === "hot"
                              ? "bg-[#9E5327]"
                              : item.badge.tone === "new"
                              ? "bg-[#161412]"
                              : "bg-[#B24B3E]"
                          }`}
                        >
                          {item.badge.text}
                        </span>
                      )}

                      <button
                        type="button"
                        onClick={() => toggleWishlist(item.productId)}
                        aria-pressed={wishlisted}
                        aria-label={
                          wishlisted
                            ? `Remove ${item.name} from wishlist`
                            : `Save ${item.name} to wishlist`
                        }
                        className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/85 hover:bg-white flex items-center justify-center text-[#161412] transition"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-4 h-4"
                          fill={wishlisted ? "currentColor" : "none"}
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                          />
                        </svg>
                      </button>

                      <Link
                        href={`/products/${item.productId}`}
                        className="w-full h-full flex items-center justify-center"
                      >
                        <img
                          src={item.imageUrl}
                          alt={item.imageAlt}
                          width={520}
                          height={490}
                          loading="lazy"
                          className="w-4/5 h-4/5 object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </Link>
                    </div>

                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] uppercase tracking-wider text-[#6B655D] font-medium">
                        {item.category}
                      </span>
                      <div
                        aria-label={`${item.stars} out of 5 stars`}
                        className="flex items-center text-gold-accent text-xs"
                      >
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <span
                            key={idx}
                            className={
                              idx < item.stars
                                ? "text-gold-accent"
                                : "text-neutral-300"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="font-serif-display text-lg text-[#161412] font-medium">
                      <Link
                        href={`/products/${item.productId}`}
                        className="hover:underline"
                      >
                        {item.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-[#6B655D] line-clamp-1 mb-2">
                      {item.subtitle}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-baseline gap-2">
                        <span className="text-base font-semibold text-[#161412]">
                          ${item.price.toLocaleString("en-US")}
                        </span>
                        {item.originalPrice && (
                          <span className="text-xs text-[#6B655D] line-through">
                            ${item.originalPrice.toLocaleString("en-US")}
                          </span>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          addToCart(item.productId, 1, item.subtitle);
                          setActiveDrawer("cart");
                        }}
                        aria-label={`Add ${item.name} to cart`}
                        className="w-8 h-8 rounded-full bg-[#161412] hover:bg-[#8F6232] text-white flex items-center justify-center transition"
                      >
                        <span aria-hidden="true" className="text-lg leading-none">
                          +
                        </span>
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* Brand Story Section */}
        <section
          id="about"
          className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Composition */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 items-stretch">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/6] bg-[#ECE5DB]">
                <img
                  src={STORY_IMAGES.craftsman}
                  alt="Craftsman working meticulously in furniture workshop"
                  width={560}
                  height={840}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#ECE5DB]">
                  <img
                    src={STORY_IMAGES.joinery}
                    alt="Detailed woodwork craftsmanship joint"
                    width={560}
                    height={560}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#F2ECE1] p-6 rounded-2xl flex flex-col justify-center border border-[#E5DECF] flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#8F6232] text-white flex items-center justify-center shrink-0">
                      <span aria-hidden="true" className="text-sm">
                        ★
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#161412] block">
                        15 yrs
                      </span>
                      <span className="text-[11px] text-[#6B655D]">
                        Award-winning craftsmanship
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Story & Pillars Content */}
            <div className="lg:col-span-6">
              <h2 className="font-serif-display text-4xl sm:text-5xl text-[#161412] leading-[1.15] mb-6">
                Furniture should
                <br />
                <span className="italic text-[#8F6232] font-normal">
                  tell a story
                </span>
              </h2>
              <p className="text-[#6B655D] text-base sm:text-lg leading-relaxed mb-8">
                At Luma &amp; Living, we believe a room is only as meaningful as the pieces within it. Each item is crafted from sustainably sourced hardwoods, woven fabrics, and hand-finished metals built to grow more beautiful with time, not less.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#EAE4D7] flex items-center justify-center text-[#8F6232] mt-0.5 shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#161412]">
                      Sustainably sourced
                    </h3>
                    <p className="text-xs text-[#6B655D] mt-0.5">
                      Every piece of wood is FSC certified and responsibly harvested.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#EAE4D7] flex items-center justify-center text-[#8F6232] mt-0.5 shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#161412]">
                      Master craftspeople
                    </h3>
                    <p className="text-xs text-[#6B655D] mt-0.5">
                      Skilled artisans with 10 to 30 years of experience in each piece.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#EAE4D7] flex items-center justify-center text-[#8F6232] mt-0.5 shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#161412]">
                      Free returns within 30 days
                    </h3>
                    <p className="text-xs text-[#6B655D] mt-0.5">
                      No questions asked: we stand behind every item we make.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-[#161412] text-white py-20 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 border-b border-white/10 pb-6">
              <h2 className="font-serif-display text-3xl sm:text-4xl font-normal">
                What people{" "}
                <span className="italic text-[#D4A875]">say</span>
              </h2>
              <p className="text-xs text-[#B5AEA5] mt-2 md:mt-0 tracking-wider">
                4.9/5 average across 2,400+ verified reviews
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {LANDING_TESTIMONIALS.map((item) => (
                <article
                  key={item.id}
                  className="bg-[#1F1D1A] rounded-2xl p-8 border border-white/10 flex flex-col justify-between hover:border-white/20 transition"
                >
                  <div>
                    <span
                      aria-hidden="true"
                      className="font-serif-display text-4xl text-[#D4A875] leading-none mb-3 block"
                    >
                      “
                    </span>
                    <p className="text-sm text-neutral-200 leading-relaxed font-light mb-8">
                      “{item.quote}”
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.avatarUrl}
                        alt={item.author}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-xs font-semibold text-white">
                          {item.author}
                        </h3>
                        <p className="text-[11px] text-[#B5AEA5]">{item.role}</p>
                      </div>
                    </div>
                    <div
                      aria-label={`${item.stars} out of 5 stars`}
                      className="flex text-amber-400 text-xs"
                    >
                      ★★★★★
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Landing Dark Footer */}
      <footer className="bg-[#161412] text-[#B5AEA5] border-t border-white/10 py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-serif-display text-xl font-bold tracking-tight text-white flex items-center gap-1">
            Luma{" "}
            <span className="font-normal italic text-[#D4A875]">&amp;</span>{" "}
            Living
          </div>
          <p className="text-xs text-[#B5AEA5] text-center">
            © 2026 Luma &amp; Living Inc. All rights reserved. Crafted with sustainable Scandinavian design principles.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-[#D6D0C8]">
            {(
              [
                "Privacy Policy",
                "Terms of Service",
                "Sustainability Pledge",
              ] as LegalModalKey[]
            ).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setLegalModal(key)}
                className="hover:text-white transition underline-offset-4 hover:underline"
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      </footer>

      {/* Legal / Sustainability Info Modal */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={LEGAL_MODAL_COPY[legalModal].title}
        >
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            onClick={() => setLegalModal(null)}
            aria-hidden="true"
          />
          <div className="relative z-10 w-full max-w-md bg-[#FAF8F4] border border-[#ECE7DE] rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#ECE7DE]">
              <h2 className="font-serif-display text-2xl text-[#161412]">
                {LEGAL_MODAL_COPY[legalModal].title}
              </h2>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                aria-label="Close modal"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#EFECE6]"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3 text-xs text-[#6B655D] leading-relaxed">
              {LEGAL_MODAL_COPY[legalModal].body.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
