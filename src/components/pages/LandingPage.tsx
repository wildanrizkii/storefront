"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HERO_IMAGE_URL,
  LANDING_BEST_SELLERS,
  LANDING_CATEGORIES,
  LANDING_TESTIMONIALS,
  STORY_IMAGES,
} from "../../data/landingData";
import { ParallaxSection } from "../ui/ParallaxSection";
import { useStorefront } from "../../context/StorefrontContext";
import { Footer } from "../layout/Footer";

const HERO_METRICS = [
  {
    value: "2.4k+",
    label: "Happy Customers",
    description: "Curated in bespoke homes across 40+ countries",
  },
  {
    value: "340+",
    label: "Unique Pieces",
    description: "Limited-edition artisan production",
  },
  {
    value: "15 yr",
    label: "Artisan Heritage",
    description: "Time-honored joinery & master craftsmanship",
  },
  {
    value: "100%",
    label: "FSC Certified",
    description: "Responsibly harvested sustainable hardwoods",
  },
];

type BestSellerTab =
  | "All"
  | "Chairs"
  | "Sofas"
  | "Tables"
  | "Lighting"
  | "Storage";

const BEST_SELLER_TABS: BestSellerTab[] = [
  "All",
  "Chairs",
  "Sofas",
  "Tables",
  "Lighting",
  "Storage",
];

export function LandingPage() {
  const { toggleWishlist, isWishlisted, addToCart, setActiveDrawer } =
    useStorefront();

  const [activeTab, setActiveTab] = useState<BestSellerTab>("All");

  const visibleBestSellers =
    activeTab === "All"
      ? LANDING_BEST_SELLERS
      : LANDING_BEST_SELLERS.filter((item) => item.filterTab === activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#161412] font-sans antialiased">
      <main className="grow">
        {/* Immersive Fixed Hero Section (Hero Reveal) */}
        <ParallaxSection
          bgImage={HERO_IMAGE_URL}
          bgAlt="Curated luxury living room with bespoke artisan handcrafted furniture"
          ariaLabel="Timeless furniture collection hero presentation"
          overlayClassName="bg-gradient-to-b from-[#161412]/85 via-[#161412]/75 to-[#161412]/92"
          className="relative min-h-svh md:min-h-screen flex flex-col justify-between overflow-hidden text-white"
          fixed={true}
          priority={true}
        >
          <div className="max-w-350 mx-auto px-6 lg:px-12 pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-10 lg:pb-12 w-full flex-1 flex flex-col justify-between">
            {/* Top / Center Editorial Content */}
            <div className="max-w-4xl mx-auto text-center my-auto py-6 sm:py-8">
              <motion.div
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#D4A875] font-semibold mb-3 sm:mb-4 inline-block">
                  NEW COLLECTION 2026
                </span>
                <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal tracking-tight leading-[1.06] mb-4 sm:mb-6">
                  Timeless{" "}
                  <span className="italic text-[#D4A875] font-normal">
                    Furniture
                  </span>
                  <br />
                  for Living
                </h1>
                <p className="text-white/85 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
                  Handcrafted pieces built with premium sustainable materials designed to elevate your home and endure through generations.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/shop"
                    className="inline-flex items-center justify-center px-8 py-3.5 sm:py-4 bg-[#FAF8F4] text-[#161412] hover:bg-[#D4A875] hover:text-[#161412] rounded-full text-sm font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 min-h-12 group"
                  >
                    <span>Shop Collection</span>
                    <span
                      aria-hidden="true"
                      className="ml-2 font-normal group-hover:translate-x-1 transition-transform"
                    >
                      →
                    </span>
                  </Link>
                  <a
                    href="#about"
                    className="inline-flex items-center justify-center px-8 py-3.5 sm:py-4 border border-white/20 bg-white/5 hover:bg-white/15 text-white backdrop-blur-xs rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 min-h-12"
                  >
                    Our Heritage &amp; Story
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Heritage Metrics (Blended directly into Hero, no card container, no hover) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-white/15">
              {HERO_METRICS.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
                  className="space-y-1 text-left"
                >
                  <p className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#D4A875] tracking-tight font-normal">
                    {metric.value}
                  </p>
                  <p className="text-sm font-medium text-white">
                    {metric.label}
                  </p>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {metric.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ParallaxSection>

        {/* Shop by Category Section */}
        <section
          id="categories"
          className="max-w-350 mx-auto px-6 lg:px-12 py-20"
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
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent" />
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
          className="max-w-350 mx-auto px-6 lg:px-12 py-16"
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
                    className={`px-5 py-2 rounded-full transition shrink-0 ${isActive
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
                          className={`absolute top-4 left-4 z-10 text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${item.badge.tone === "hot"
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
          className="max-w-350 mx-auto px-6 lg:px-12 py-20 lg:py-28"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Composition */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 items-stretch">
              <div className="relative rounded-2xl overflow-hidden aspect-4/6 bg-[#ECE5DB]">
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

        {/* Testimonials Section (Parallax) */}
        <ParallaxSection
          bgImage={STORY_IMAGES.joinery}
          bgAlt="Precision woodworking joinery background"
          overlayClassName="bg-[#161412]/85"
          className="relative bg-[#161412] text-white py-20 lg:py-24 overflow-hidden"
          speed={5}
        >
          <div className="max-w-350 mx-auto px-6 lg:px-12">
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
        </ParallaxSection>
      </main>

      <Footer />
    </div>
  );
}
