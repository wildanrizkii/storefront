"use client";

import React, { useEffect, useState } from "react";
import { useCatalog } from "../../hooks/useCatalog";
import { useStorefront } from "../../context/StorefrontContext";
import type { CategoryFilter, Product } from "../../types/product";
import { Newsletter } from "../layout/Newsletter";
import { Footer } from "../layout/Footer";
import { ProductToolbar } from "../products/ProductToolbar";
import { ProductGrid } from "../products/ProductGrid";
import { ProductPagination } from "../products/ProductPagination";
import { ProductPrice } from "../products/ProductPrice";
import { ProductRating } from "../products/ProductRating";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "../ui/dialog";
import { Button } from "../ui/Button";

export interface ShopPageProps {
  initialDrawer?: "wishlist" | "cart" | "account" | null;
  initialCategory?: CategoryFilter;
  initialQuery?: string;
}

export function ShopPage({
  initialDrawer = null,
  initialCategory,
  initialQuery,
}: ShopPageProps = {}) {
  const {
    category,
    setCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    viewMode,
    setViewMode,
    currentPage,
    setCurrentPage,
    totalPages,
    onSaleOnly,
    setOnSaleOnly,
    minRating,
    setMinRating,
    maxPrice,
    setMaxPrice,
    status,
    setStatus,
    resetFilters,
    displayedProducts,
    activeFilterCount,
    resultsSummary,
  } = useCatalog();

  const {
    toggleWishlist,
    isWishlisted,
    addToCart,
    setActiveDrawer,
    searchQuery: globalSearchQuery,
    setSearchQuery: setGlobalSearchQuery,
    setSearchOpen,
  } = useStorefront();

  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (initialCategory) {
      setCategory(initialCategory);
    }
    if (initialQuery) {
      setSearchQuery(initialQuery);
      setGlobalSearchQuery(initialQuery);
      setSearchOpen(true);
    }
    if (initialDrawer) {
      setActiveDrawer(initialDrawer);
    }
  }, [initialCategory, initialQuery, initialDrawer]);

  useEffect(() => {
    setSearchQuery(globalSearchQuery);
  }, [globalSearchQuery]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (selectedProduct) setSelectedProduct(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProduct]);

  const handleResetFilters = () => {
    resetFilters();
    setGlobalSearchQuery("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal-main selection:bg-stone-200">
      <main id="catalog-section" className="grow">
        {/* Hero Banner Header */}
        <section className="max-w-350 mx-auto px-6 lg:px-12 pt-12 pb-14 border-b border-[#ECE7DE]">
          <span className="text-[12px] font-semibold tracking-[0.2em] text-[#8F6232] uppercase block mb-3">
            CATALOGUE 2026
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-serif-display text-4xl sm:text-5xl xl:text-6xl font-medium tracking-tight text-[#161412] leading-[1.08] max-w-2xl">
                All{" "}
                <span className="italic text-[#8F6232] font-normal">
                  Products
                </span>
              </h1>
              <p className="text-[#6B655D] text-sm sm:text-base max-w-md leading-relaxed mt-3">
                Considered pieces for the home you&apos;re building, one room at a time.
              </p>
            </div>
            <div
              aria-live="polite"
              className="text-xs sm:text-sm text-[#6B655D] font-medium self-start lg:self-end pb-1"
            >
              {resultsSummary}
            </div>
          </div>
        </section>

        {/* Catalog Body */}
        <div className="max-w-350 mx-auto px-4 md:px-6 lg:px-12 pb-10 md:pb-20">
          {/* Filter and View Controls Toolbar */}
          <ProductToolbar
            activeCategory={category}
            onSelectCategory={setCategory}
            sortBy={sortBy}
            onChangeSort={setSortBy}
            viewMode={viewMode}
            onChangeViewMode={setViewMode}
            onSaleOnly={onSaleOnly}
            onToggleSaleOnly={setOnSaleOnly}
            minRating={minRating}
            onChangeMinRating={setMinRating}
            maxPrice={maxPrice}
            onChangeMaxPrice={setMaxPrice}
            activeFilterCount={activeFilterCount}
            onResetFilters={handleResetFilters}
            filterDrawerOpen={filterDrawerOpen}
            onToggleFilterDrawer={() => setFilterDrawerOpen((prev) => !prev)}
            catalogStatus={status}
            onChangeCatalogStatus={setStatus}
          />

          {/* Product Listing Grid / List */}
          <ProductGrid
            products={displayedProducts}
            viewMode={viewMode}
            status={status}
            activeCategory={category}
            searchQuery={searchQuery}
            onResetFilters={handleResetFilters}
            onRetry={() => setStatus("ready")}
            isWishlisted={isWishlisted}
            onToggleWishlist={toggleWishlist}
            onSelectProduct={(product) => setSelectedProduct(product)}
            onAddToCart={(productId) => {
              addToCart(productId);
              setActiveDrawer("cart");
            }}
          />

          {/* Pagination */}
          {status === "ready" && displayedProducts.length > 0 && (
            <ProductPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </main>

      <Newsletter />

      <Footer onSelectCategory={setCategory} />

      {/* Product Detail Quick-View Modal */}
      <Dialog
        open={!!selectedProduct}
        onOpenChange={(open) => {
          if (!open) setSelectedProduct(null);
        }}
      >
        {selectedProduct && (
          <DialogContent
            hideCloseButton
            className="max-w-2xl p-0 overflow-hidden grid grid-cols-1 md:grid-cols-2 max-h-[90vh] overflow-y-auto gap-0 bg-cream"
            aria-labelledby="product-modal-title"
          >
            <div className="relative aspect-4/5 bg-card-bg">
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.imageAlt}
                width={800}
                height={1000}
                className="w-full h-full object-cover"
              />
              {selectedProduct.saleBadge && (
                <span className="absolute top-3.5 left-3.5 px-2 py-0.5 bg-sale-tag text-white text-[10px] font-medium rounded-xs">
                  {selectedProduct.saleBadge}
                </span>
              )}
            </div>

            <div className="p-6 flex flex-col justify-between space-y-5">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-text-subtle">
                      {selectedProduct.category}
                    </span>
                    <DialogTitle
                      id="product-modal-title"
                      className="font-serif-display text-2xl text-charcoal-main mt-0.5"
                    >
                      {selectedProduct.name}
                    </DialogTitle>
                    <span className="sr-only">
                      <DialogDescription>
                        {selectedProduct.description}
                      </DialogDescription>
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(null)}
                    aria-label="Close product details"
                    className="min-w-10 min-h-10 inline-flex items-center justify-center rounded-full text-charcoal-main hover:bg-[#EFECE6]"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-2">
                  <ProductRating
                    rating={selectedProduct.rating}
                    reviewCount={selectedProduct.reviewCount}
                  />
                </div>

                <div className="mt-3">
                  <ProductPrice
                    price={selectedProduct.price}
                    originalPrice={selectedProduct.originalPrice}
                  />
                </div>

                <p className="mt-4 text-[13px] text-text-muted leading-relaxed">
                  {selectedProduct.description}
                </p>

                <dl className="mt-4 pt-4 border-t border-border-light space-y-2 text-[12px]">
                  <div>
                    <dt className="text-text-subtle font-medium">Dimensions</dt>
                    <dd className="text-charcoal-main">
                      {selectedProduct.dimensions}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-text-subtle font-medium">Materials</dt>
                    <dd className="text-charcoal-main">
                      {selectedProduct.materials}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="pt-4 border-t border-border-light flex items-center gap-3">
                <Button
                  type="button"
                  variant="primary"
                  onClick={() => {
                    addToCart(selectedProduct.id);
                    setSelectedProduct(null);
                    setActiveDrawer("cart");
                  }}
                  className="flex-1"
                >
                  Add to Shopping Bag
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => toggleWishlist(selectedProduct.id)}
                  aria-pressed={isWishlisted(selectedProduct.id)}
                  className="min-h-11 px-4"
                >
                  {isWishlisted(selectedProduct.id) ? "Saved ♥" : "Save ♡"}
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
