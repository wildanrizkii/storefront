"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  getProductDetail,
  PDP_RECOMMENDATIONS,
  PDP_REVIEWS,
} from "../../data/pdpData";
import { useStorefront } from "../../context/StorefrontContext";
import { Newsletter } from "../layout/Newsletter";
import { Footer, type InfoModalKey } from "../layout/Footer";

export interface ProductDetailPageProps {
  productId: string;
}

type SpecTabKey = "Description" | "Dimensions" | "Materials & care" | "Shipping";

const SPEC_TABS: SpecTabKey[] = [
  "Description",
  "Dimensions",
  "Materials & care",
  "Shipping",
];

export function ProductDetailPage({ productId }: ProductDetailPageProps) {
  const router = useRouter();
  const detail = getProductDetail(productId);

  const { toggleWishlist, isWishlisted, addToCart, setActiveDrawer } =
    useStorefront();

  const [selectedThumbIndex, setSelectedThumbIndex] = useState<number>(0);
  const [selectedColorId, setSelectedColorId] = useState<string>("cream");
  const [selectedSize, setSelectedSize] = useState<string>("3-seater");
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<SpecTabKey>("Description");
  const [activeInfoModal, setActiveInfoModal] = useState<InfoModalKey | null>(
    null
  );

  const selectedColor =
    detail.colors.find((c) => c.id === selectedColorId) ?? detail.colors[2];

  const handleAddToCart = () => {
    const variantLabel = `${selectedColor.name} · ${selectedSize}`;
    addToCart(detail.product.id, quantity, variantLabel);
    setActiveDrawer("cart");
  };

  const activeDesktopImage =
    selectedThumbIndex === 0
      ? detail.desktopMainImage
      : detail.desktopGallery[selectedThumbIndex]?.url ??
        detail.desktopMainImage;

  const activeMobileImage =
    selectedThumbIndex === 0
      ? detail.mobileMainImage
      : detail.mobileGallery[selectedThumbIndex]?.url ?? detail.mobileMainImage;

  const desktopRecs = PDP_RECOMMENDATIONS.filter((r) => r.showOnDesktop);
  const mobileRecs = PDP_RECOMMENDATIONS.filter((r) => r.showOnMobile);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3] md:bg-white text-[#171512] font-sans antialiased">
      <main className="flex-grow">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="max-w-[1240px] mx-auto px-4 md:px-6 pt-3.5 md:pt-5 pb-2 md:pb-7 text-[12px] text-text-muted overflow-x-auto whitespace-nowrap"
          data-purpose="breadcrumbs"
        >
          <ol className="flex items-center space-x-1.5 md:space-x-2">
            <li>
              <Link
                href="/"
                className="hover:text-[#1A1816] hover:underline transition-colors"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-text-subtle">
              /
            </li>
            <li>
              <Link
                href="/shop"
                className="hover:text-[#1A1816] hover:underline transition-colors"
              >
                {detail.product.category}
              </Link>
            </li>
            <li aria-hidden="true" className="text-text-subtle">
              /
            </li>
            <li aria-current="page" className="text-[#1A1816] font-medium">
              {detail.breadcrumbTitle}
            </li>
          </ol>
        </nav>

        {/* Product Showcase Section */}
        <section
          className="max-w-[1240px] mx-auto px-4 md:px-6 pb-8 md:pb-20"
          data-purpose="product-main-showcase"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14">
            {/* Left Column: Product Gallery */}
            <div
              className="lg:col-span-7 flex flex-col space-y-3 md:space-y-4 py-1 md:py-0"
              data-purpose="media-gallery"
            >
              {/* Main Featured Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden bg-[#ECE8E1] md:bg-[#F7F5F2] flex items-center justify-center md:p-8 shadow-2xs md:shadow-none">
                <span className="absolute top-3.5 left-3.5 md:top-5 md:left-5 z-10 bg-sale-tag text-white text-[11px] font-semibold tracking-wider px-2.5 md:px-3.5 py-0.5 md:py-1 rounded-full uppercase">
                  New
                </span>

                <button
                  type="button"
                  onClick={() => toggleWishlist(detail.product.id)}
                  aria-pressed={isWishlisted(detail.product.id)}
                  aria-label={
                    isWishlisted(detail.product.id)
                      ? `Remove ${detail.displayTitle} from Wishlist`
                      : `Save ${detail.displayTitle} to Wishlist`
                  }
                  className="absolute top-3.5 right-3.5 md:top-5 md:right-5 z-10 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-[#1A1816] flex items-center justify-center shadow-xs transition-transform active:scale-95"
                >
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 stroke-[1.7]"
                    fill={
                      isWishlisted(detail.product.id) ? "currentColor" : "none"
                    }
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <picture className="w-full h-full block">
                  <source
                    media="(max-width: 767px)"
                    srcSet={activeMobileImage}
                  />
                  <img
                    id="main-product-image"
                    src={activeDesktopImage}
                    alt={`${detail.displayTitle} in ${selectedColor.name}`}
                    width={960}
                    height={720}
                    fetchPriority="high"
                    className={`w-full h-full transition-transform duration-300 ${
                      selectedThumbIndex === 0
                        ? "object-cover md:object-contain md:mix-blend-multiply md:drop-shadow-md"
                        : "object-cover rounded-xl"
                    }`}
                  />
                </picture>
              </div>

              {/* Desktop 4-Thumbnail Strip */}
              <div
                className="hidden md:grid grid-cols-4 gap-3.5 pt-1"
                data-purpose="thumbnail-carousel"
              >
                {detail.desktopGallery.map((thumb, idx) => {
                  const isActive = selectedThumbIndex === idx;
                  return (
                    <button
                      key={thumb.id}
                      type="button"
                      onClick={() => setSelectedThumbIndex(idx)}
                      aria-label={`View ${thumb.alt}`}
                      aria-pressed={isActive}
                      className={`relative rounded-xl overflow-hidden aspect-[4/3] bg-[#F7F5F2] transition-all ${
                        isActive
                          ? "ring-2 ring-[#1A1816] p-1.5"
                          : "hover:opacity-90 ring-1 ring-[#E8E4DF]"
                      }`}
                    >
                      <img
                        src={thumb.url}
                        alt={thumb.alt}
                        width={240}
                        height={180}
                        className={`w-full h-full ${
                          thumb.objectFit === "contain"
                            ? "object-contain mix-blend-multiply"
                            : "object-cover rounded-lg"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Mobile 4-Thumbnail Strip */}
              <div
                className="flex md:hidden gap-2.5 overflow-x-auto no-scrollbar pb-1 pt-0.5"
                data-purpose="thumbnail-strip"
              >
                {detail.mobileGallery.map((thumb, idx) => {
                  const isActive = selectedThumbIndex === idx;
                  return (
                    <button
                      key={thumb.id}
                      type="button"
                      onClick={() => setSelectedThumbIndex(idx)}
                      aria-label={`View ${thumb.alt}`}
                      aria-pressed={isActive}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${
                        isActive
                          ? "border-2 border-[#171512] ring-1 ring-[#171512]/20"
                          : "border border-[#E8E3DA] opacity-75 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={thumb.url}
                        alt={thumb.alt}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Product Overview & Buy Box */}
            <div
              className="lg:col-span-5 flex flex-col justify-start lg:pl-3 pb-6 md:pb-0 border-b md:border-b-0 border-[#E8E3DA]/80"
              data-purpose="product-info-panel"
            >
              <span className="text-[11px] md:text-xs font-semibold tracking-widest md:tracking-wider text-gold-accent uppercase block mb-1 md:mb-2">
                {detail.product.category}
              </span>

              <h1 className="font-serif-display text-[28px] sm:text-[34px] tracking-tight leading-snug md:leading-tight text-[#1A1816] mb-1.5 md:mb-2 font-normal">
                {detail.displayTitle}
              </h1>

              <p className="text-text-muted text-sm md:text-[13px] leading-relaxed mb-3">
                {detail.subtitle}
              </p>

              {/* Star Rating & Review Link */}
              <div className="flex items-center space-x-2 text-xs mb-4 md:mb-5">
                <div
                  aria-hidden="true"
                  className="flex text-gold-accent space-x-0.5 text-xs"
                >
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <span className="font-semibold md:font-medium text-[#1A1816]">
                  {detail.product.rating.toFixed(1)}
                </span>
                <a
                  href="#customer-reviews"
                  className="text-text-muted hover:text-[#1A1816] hover:underline"
                >
                  ({detail.product.reviewCount})
                </a>
              </div>

              {/* Price & Discount Tag */}
              <div className="flex items-baseline md:items-center space-x-2.5 md:space-x-3 mb-6">
                <span className="font-serif-display md:font-sans text-3xl md:text-2xl font-medium md:font-semibold tracking-tight text-[#1A1816]">
                  ${detail.price.toLocaleString("en-US")}
                </span>
                {detail.originalPrice && (
                  <span className="text-text-muted line-through text-sm">
                    ${detail.originalPrice.toLocaleString("en-US")}
                  </span>
                )}
                {detail.saveBadge && (
                  <span className="bg-[#FCEBEA] text-sale-tag font-semibold text-xs px-2.5 py-0.5 rounded-full">
                    {detail.saveBadge}
                  </span>
                )}
              </div>

              <hr className="hidden md:block border-t border-[#F0ECE6] mb-6" />

              {/* Option 1: Colour Swatches */}
              <div className="mb-5" data-purpose="color-selector">
                <div className="flex justify-between items-center mb-2.5 text-xs">
                  <span className="text-[#1A1816] font-medium uppercase md:normal-case tracking-wider md:tracking-normal text-[11px] md:text-xs">
                    Colour
                  </span>
                  <span className="text-text-muted">{selectedColor.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  {detail.colors.map((swatch) => {
                    const isSelected = swatch.id === selectedColorId;
                    return (
                      <button
                        key={swatch.id}
                        type="button"
                        onClick={() => setSelectedColorId(swatch.id)}
                        aria-label={`Select ${swatch.name}`}
                        aria-pressed={isSelected}
                        style={{ backgroundColor: swatch.hex }}
                        className={`w-8 h-8 md:w-7 md:h-7 rounded-full transition-transform ${
                          isSelected
                            ? "ring-2 ring-offset-2 ring-[#1A1816] scale-105"
                            : "hover:scale-105 border border-black/15"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Option 2: Size Selection */}
              <div className="mb-6 md:mb-7" data-purpose="size-selector">
                <span className="block text-[11px] md:text-xs font-medium uppercase md:normal-case tracking-wider md:tracking-normal text-[#1A1816] mb-2.5">
                  Size
                </span>
                <div className="grid grid-cols-3 md:flex md:items-center gap-2">
                  {detail.sizes.map((sizeOption) => {
                    const isSelected = selectedSize === sizeOption;
                    return (
                      <button
                        key={sizeOption}
                        type="button"
                        onClick={() => setSelectedSize(sizeOption)}
                        aria-pressed={isSelected}
                        className={`py-2.5 md:py-2 md:px-5 text-xs text-center font-medium rounded-full transition-all ${
                          isSelected
                            ? "bg-[#1A1816] text-white shadow-2xs"
                            : "border border-[#E8E3DA] bg-white text-[#1A1816] hover:border-[#1A1816]"
                        }`}
                      >
                        {sizeOption}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity Stepper & Add to Cart Action */}
              <div
                className="flex items-center gap-3 mb-4"
                data-purpose="cart-controls"
              >
                <div className="flex items-center justify-between border border-[#E8E3DA] rounded-full px-3 h-11 w-28 md:w-24 bg-white text-xs font-medium flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="text-text-muted hover:text-[#1A1816] text-base px-1 leading-none"
                  >
                    −
                  </button>
                  <span className="text-[#1A1816]">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                    className="text-text-muted hover:text-[#1A1816] text-base px-1 leading-none"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 h-11 bg-[#171512] hover:bg-neutral-800 text-white text-xs font-semibold md:font-medium uppercase md:normal-case tracking-wider md:tracking-wide rounded-full flex items-center justify-center space-x-2 transition-all active:scale-[0.99] shadow-xs"
                >
                  <span>Add to cart</span>
                  <svg
                    aria-hidden="true"
                    className="w-3.5 h-3.5 stroke-[1.8]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Secondary Wishlist Trigger */}
              <div className="mb-5 md:mb-7">
                <button
                  type="button"
                  onClick={() => toggleWishlist(detail.product.id)}
                  aria-pressed={isWishlisted(detail.product.id)}
                  className="w-full md:w-auto justify-center md:justify-start py-1.5 text-xs text-text-muted md:text-[#1A1816] hover:text-gold-accent transition-colors flex items-center space-x-1.5 font-normal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-3.5 h-3.5 stroke-[1.6]"
                    fill={
                      isWishlisted(detail.product.id) ? "currentColor" : "none"
                    }
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>
                    {isWishlisted(detail.product.id)
                      ? "Saved to wishlist"
                      : "Add to wishlist"}
                  </span>
                </button>
              </div>

              {/* Feature Bullets with Checkmarks */}
              <ul className="space-y-2 md:space-y-2.5 text-xs text-text-muted pt-4 md:pt-2 border-t border-[#E8E3DA]/60 md:border-[#F0ECE6]">
                {detail.valueBullets.map((bullet) => (
                  <li key={bullet} className="flex items-center space-x-2.5">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 md:w-3.5 md:h-3.5 text-[#5D6B56] md:text-gold-accent flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4.5 12.75l6 6 9-13.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Specifications & Tabs Section */}
        <section
          className="max-w-[1240px] mx-auto px-4 md:px-6 py-6 md:py-12 border-b md:border-b-0 md:border-t border-[#E8E3DA] md:border-[#F0ECE6]"
          data-purpose="product-specifications"
        >
          {/* Horizontal Tab List */}
          <div
            role="tablist"
            aria-label="Product specifications"
            className="flex space-x-6 md:space-x-8 border-b border-[#E8E4DF] overflow-x-auto no-scrollbar mb-5 md:mb-8 pb-2 md:pb-3 text-xs tracking-wide"
          >
            {SPEC_TABS.map((tab) => {
              const isSelected = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap pb-2 -mb-2.5 md:-mb-3.5 transition-colors ${
                    isSelected
                      ? "font-medium text-[#1A1816] border-b-2 border-[#1A1816]"
                      : "text-text-muted hover:text-[#1A1816]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Tab Content Area: 2 Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 text-xs md:text-[13px] text-text-muted leading-relaxed">
            <div className="md:col-span-6 space-y-4">
              {activeTab === "Description" &&
                detail.descriptionParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              {activeTab === "Dimensions" && (
                <>
                  <p>
                    Overall Dimensions: {detail.product.dimensions}. Seat height
                    is proportioned at 42 cm with a 62 cm relaxed lounge depth.
                  </p>
                  <p>
                    Minimum doorway clearance required for white-glove delivery
                    is 74 cm with the solid oak legs detached.
                  </p>
                </>
              )}
              {activeTab === "Materials & care" && (
                <>
                  <p>
                    Materials: {detail.product.materials}. All timber is
                    kiln-dried and finished with zero-VOC matte hardwax oil.
                  </p>
                  <p>
                    Care: Vacuum bouclé and linen upholstery weekly using a soft
                    brush attachment. Removable covers may be cold-washed on a
                    delicate wool cycle and air-dried flat.
                  </p>
                </>
              )}
              {activeTab === "Shipping" && (
                <>
                  <p>
                    Complimentary two-person white-glove delivery and full
                    room-of-choice assembly are included on all sofa and
                    furniture orders over $500.
                  </p>
                  <p>
                    In-stock finishes dispatch within 5 to 7 business days with
                    scheduled delivery windows and complete packaging removal.
                  </p>
                </>
              )}
            </div>

            {/* Right: Technical Specification Properties */}
            <div className="md:col-span-6 pt-5 md:pt-0 border-t md:border-t-0 border-[#E8E3DA]/60 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 md:gap-5">
              {detail.specs.map((spec, idx) => (
                <div
                  key={spec.label}
                  className={
                    idx < detail.specs.length - 1
                      ? "md:border-b md:border-[#F0ECE6] md:pb-3"
                      : ""
                  }
                >
                  <span className="block text-[10px] md:text-[11px] uppercase tracking-wider font-semibold md:font-normal text-text-muted mb-0.5">
                    {spec.label}
                  </span>
                  <span className="text-[#1A1816] font-medium block">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section
          id="customer-reviews"
          className="max-w-[1240px] mx-auto px-4 md:px-6 py-8 md:py-14 border-b md:border-b-0 md:border-t border-[#E8E3DA] md:border-[#F0ECE6]"
          data-purpose="customer-reviews"
        >
          <h2 className="font-serif-display text-2xl tracking-normal text-[#1A1816] mb-5 md:mb-8 font-normal">
            Customer reviews
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10">
            {/* Rating Breakdown Summary Column */}
            <div className="lg:col-span-4 flex flex-col justify-start">
              <div className="flex items-baseline md:block space-x-2 md:space-x-0">
                <div className="text-4xl font-serif-display font-medium text-[#1A1816] mb-1">
                  {detail.product.rating.toFixed(1)}
                </div>
                <div className="flex items-center space-x-1 text-gold-accent mb-1">
                  <span aria-hidden="true" className="text-sm">
                    ★★★★★
                  </span>
                  <span className="text-xs text-text-muted pl-1">
                    {detail.product.rating.toFixed(1)} (
                    {detail.product.reviewCount})
                  </span>
                </div>
              </div>
              <div className="text-xs text-text-muted mb-4 md:mb-6">
                Based on {detail.product.reviewCount} reviews
              </div>

              {/* Rating Horizontal Bars */}
              <div className="space-y-1.5 md:space-y-2 text-[11px] text-text-muted max-w-sm md:max-w-[280px]">
                {detail.histogram.map((row) => (
                  <div
                    key={row.stars}
                    className="flex items-center space-x-2.5 md:space-x-3"
                  >
                    <span className="w-3 text-right md:text-left">
                      {row.stars}
                    </span>
                    <div className="flex-1 bg-[#E8E3DA] md:bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gold-accent h-full rounded-full"
                        style={{ width: `${row.percentage}%` }}
                      />
                    </div>
                    <span className="w-8 md:w-6 text-right font-medium md:font-normal text-[#1A1816] md:text-text-muted">
                      {row.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Review Cards Column */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {PDP_REVIEWS.map((review) => (
                <article
                  key={review.id}
                  className="bg-[#F6F3EE] md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none border border-[#E8E3DA]/60 md:border-none flex flex-col justify-between"
                  data-purpose="review-card"
                >
                  <div>
                    <div
                      aria-label={`${review.stars} out of 5 stars`}
                      className="flex text-gold-accent text-xs mb-1.5 md:mb-2"
                    >
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <span
                          key={idx}
                          className={
                            idx < review.stars
                              ? "text-gold-accent"
                              : "text-neutral-300"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xs font-semibold text-[#1A1816] mb-1 md:mb-2">
                      {review.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {review.body}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 pt-3 md:pt-4 mt-2">
                    <span className="w-5 h-5 rounded-full bg-[#EAE6DF] text-[10px] flex items-center justify-center font-medium text-[#1A1816]">
                      {review.initial}
                    </span>
                    <span className="text-[11px] md:text-xs text-[#1A1816] font-medium">
                      {review.author}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Recommendations Section ("You may also like") */}
        <section
          className="max-w-[1240px] mx-auto px-4 md:px-6 py-8 md:py-14 md:border-t md:border-[#F0ECE6]"
          data-purpose="recommendations"
        >
          <h2 className="font-serif-display text-2xl tracking-normal text-[#1A1816] mb-4 md:mb-8 font-normal">
            You may also like
          </h2>

          {/* Desktop 4-Column Recommendations Grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-6">
            {desktopRecs.map((rec) => (
              <article
                key={rec.id}
                className="group flex flex-col"
                data-purpose="product-card"
              >
                <div className="relative bg-[#F7F5F2] rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center p-4 mb-3">
                  {rec.saleBadge && (
                    <span className="absolute top-3 left-3 z-10 bg-sale-tag text-white text-[9px] font-semibold tracking-wider px-2 py-0.5 rounded-full">
                      {rec.saleBadge}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => toggleWishlist(rec.productId)}
                    aria-pressed={isWishlisted(rec.productId)}
                    aria-label={`Save ${rec.name} to wishlist`}
                    className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-[#1A1816] flex items-center justify-center shadow-2xs"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-3.5 h-3.5 stroke-[1.6]"
                      fill={
                        isWishlisted(rec.productId) ? "currentColor" : "none"
                      }
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <Link
                    href={`/products/${rec.productId}`}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <img
                      src={rec.desktopImageUrl}
                      alt={rec.name}
                      width={400}
                      height={300}
                      loading="lazy"
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                </div>
                <span className="text-[10px] uppercase font-semibold text-gold-accent tracking-wider mb-0.5">
                  {rec.category}
                </span>
                <h3 className="font-serif-display text-sm text-[#1A1816] font-normal group-hover:text-gold-accent transition-colors">
                  <Link href={`/products/${rec.productId}`}>{rec.name}</Link>
                </h3>
                <div className="flex items-center space-x-1 text-[11px] text-text-muted my-1">
                  <span className="text-gold-accent">★★★★★</span>
                  <span>
                    {rec.rating.toFixed(1)} ({rec.reviewCount})
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  {rec.originalPrice && (
                    <span className="line-through text-text-muted">
                      ${rec.originalPrice.toLocaleString("en-US")}
                    </span>
                  )}
                  <span className="font-semibold text-[#1A1816]">
                    ${rec.price.toLocaleString("en-US")}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile 2-Column Recommendations Grid */}
          <div className="grid md:hidden grid-cols-2 gap-3.5">
            {mobileRecs.map((rec) => (
              <article
                key={rec.id}
                className="group flex flex-col"
                data-purpose="product-card"
              >
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#F6F3EE] mb-2.5">
                  {rec.saleBadge && (
                    <span className="absolute top-2.5 left-2.5 z-10 bg-sale-tag text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      {rec.saleBadge}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => toggleWishlist(rec.productId)}
                    aria-pressed={isWishlisted(rec.productId)}
                    aria-label={`Save ${rec.name} to wishlist`}
                    className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#171512] shadow-2xs"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 stroke-current"
                      fill={
                        isWishlisted(rec.productId) ? "currentColor" : "none"
                      }
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </button>
                  <Link
                    href={`/products/${rec.productId}`}
                    className="w-full h-full block"
                  >
                    <img
                      src={rec.mobileImageUrl}
                      alt={rec.name}
                      width={400}
                      height={500}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                </div>
                <span className="text-[10px] uppercase font-semibold text-text-muted tracking-wider mb-0.5">
                  {rec.category}
                </span>
                <h3 className="font-serif-display text-base text-[#171512] leading-tight line-clamp-1 mb-1">
                  <Link href={`/products/${rec.productId}`}>{rec.name}</Link>
                </h3>
                <div className="flex items-center space-x-1 text-[11px] mb-1">
                  <span className="text-gold-accent text-[10px]">★</span>
                  <span className="font-medium text-[#171512]">
                    {rec.rating.toFixed(1)}
                  </span>
                  <span className="text-text-muted">({rec.reviewCount})</span>
                </div>
                <div className="flex items-baseline space-x-1.5 text-xs">
                  {rec.originalPrice && (
                    <span className="text-text-muted line-through">
                      ${rec.originalPrice.toLocaleString("en-US")}
                    </span>
                  )}
                  <span className="font-semibold text-[#171512]">
                    ${rec.price.toLocaleString("en-US")}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer
        onSelectCategory={(cat) => router.push(`/shop?category=${cat}`)}
        onOpenInfoModal={(topic) => setActiveInfoModal(topic)}
      />

      {/* Info Modal if triggered from header/footer */}
      {activeInfoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeInfoModal}
        >
          <div
            className="fixed inset-0 bg-black/45 backdrop-blur-xs"
            onClick={() => setActiveInfoModal(null)}
            aria-hidden="true"
          />
          <div className="relative z-10 w-full max-w-lg bg-cream border border-border-light rounded-lg shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border-light">
              <h2 className="font-serif-display text-2xl text-charcoal-main">
                {activeInfoModal}
              </h2>
              <button
                type="button"
                onClick={() => setActiveInfoModal(null)}
                aria-label="Close dialog"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#EFECE6]"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              Luma &amp; Living partners with FSC-certified European oak mills,
              Belgian linen weavers, and ceramic studios to craft heirloom
              residential furniture. Reach our client team at
              atelier@lumaliving.com.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
