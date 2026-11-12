"use client";

import React, { useEffect, useState } from "react";
import { useCatalog } from "../../hooks/useCatalog";
import { useStorefront } from "../../context/StorefrontContext";
import type { CategoryFilter, Product } from "../../types/product";
import { Newsletter } from "../layout/Newsletter";
import { Footer, type InfoModalKey } from "../layout/Footer";
import { Breadcrumb } from "../navigation/Breadcrumb";
import { ProductToolbar } from "../products/ProductToolbar";
import { ProductGrid } from "../products/ProductGrid";
import { ProductPagination } from "../products/ProductPagination";
import { ProductPrice } from "../products/ProductPrice";
import { ProductRating } from "../products/ProductRating";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "../ui/dialog";
import { Button } from "../ui/Button";

const INFO_MODAL_CONTENT: Record<
  InfoModalKey,
  { title: string; subtitle: string; paragraphs: string[] }
> = {
  Collections: {
    title: "Seasonal & Architectural Collections",
    subtitle: "Quiet groupings built around raw oak, linen, and stoneware.",
    paragraphs: [
      "Our collections are organized by material harmony rather than fleeting trends: the Nordic Oak Series (Bessen Coffee Table, Norra Modular Bookshelf, Wren Bed Frame), the Tactile Upholstery Series (Hollis 3-Seater Sofa, Dune Modular Sectional, Marlow Lounge Chair), and Atelier Clay & Paper Lighting (Alder Table Lamp, Fenwick Floor Lamp).",
      "Select any category filter in the catalogue toolbar to isolate pieces for living, dining, or bedroom spaces.",
    ],
  },
  About: {
    title: "About Luma & Living",
    subtitle: "Considered furniture and objects for calm, warm interiors.",
    paragraphs: [
      "Founded between Copenhagen and Portland, Luma & Living partners with small-batch cabinetmakers, weavers, and ceramic studios using FSC-certified European white oak, Belgian linen, and New Zealand wool.",
      "Every piece is proportioned for residential longevity, finished with low-VOC natural hardwax oils, and constructed with repairable joinery.",
    ],
  },
  Contact: {
    title: "Contact & Showroom Inquiries",
    subtitle: "Speak with a furniture specialist or request material swatches.",
    paragraphs: [
      "Copenhagen Studio: Bredgade 42, 1260 København K, open Monday through Saturday, 10:00 to 18:00.",
      "North American Showroom: 1120 NW Couch St, Portland, OR 97209. Reach our client team at atelier@lumaliving.com for custom upholstery lead times or trade specification sheets.",
    ],
  },
  Careers: {
    title: "Working at Luma & Living",
    subtitle: "Industrial design, cabinetmaking, and showroom hospitality.",
    paragraphs: [
      "We hire furniture finishers, textile sourcing specialists, and showroom consultants who care deeply about residential architecture and craft.",
      "Send portfolios and workshop CVs to careers@lumaliving.com.",
    ],
  },
  Press: {
    title: "Press & Archival Loans",
    subtitle: "High-resolution lookbooks and showroom sample loans.",
    paragraphs: [
      "Stylists, interior architects, and editorial teams may request sample loans from our Copenhagen or Portland inventory for architectural photography.",
      "Contact press@lumaliving.com for specification sheets and tearsheets.",
    ],
  },
  "Shipping & returns": {
    title: "White-Glove Shipping & Returns",
    subtitle: "Room-of-choice delivery, assembly, and packaging removal.",
    paragraphs: [
      "Large furniture pieces (sofas, sectionals, bookshelves, and bed frames) ship via scheduled two-person white-glove freight, including placement in your room of choice, hardware assembly, and full blanket-wrap removal.",
      "Lighting and decor objects ship via carbon-neutral parcel courier within 3 to 5 business days. Unused catalogue pieces may be returned within 30 days of delivery.",
    ],
  },
  Warranty: {
    title: "5-Year Structural Joinery Warranty",
    subtitle: "Built to be maintained, refinished, and kept for decades.",
    paragraphs: [
      "All solid timber frames, mortise-and-tenon joinery, and steel modular connectors carry a five-year residential warranty.",
      "Replacement linen slipcovers, cane panels, and paper lamp shades remain available through our workshop for existing owners.",
    ],
  },
  FAQs: {
    title: "Product & Care Questions",
    subtitle: "Practical answers on fabrics, wood care, and delivery access.",
    paragraphs: [
      "How do I clean the Hollis Sofa and Dune Sectional linen covers? Both models feature removable cushions that can be professionally dry-cleaned or spot-treated with mild pH-neutral soap and cool water.",
      "Will the Norra Modular Bookshelf fit through a standard apartment stairwell? Yes, the Norra ships in two vertical bays with adjustable shelves that assemble in place in under 25 minutes.",
      "Can I order fabric and wood swatches before purchasing a sofa or bed frame? Yes, complimentary swatch boxes with Belgian linen, velvet, and oiled oak samples can be requested via our Contact studio team.",
    ],
  },
  "Privacy Policy": {
    title: "Privacy Policy",
    subtitle: "How Luma & Living handles your catalogue preferences and email.",
    paragraphs: [
      "Your saved wishlist and shopping bag items are stored locally in your browser so you can compare furniture pieces across visits without creating an account.",
      "If you subscribe to our monthly workshop dispatch, your email address is used solely for that monthly letter and is never sold or shared with third-party advertisers.",
    ],
  },
  "Terms of Service": {
    title: "Terms of Service",
    subtitle: "Storefront catalogue terms, dimensions, and natural material variance.",
    paragraphs: [
      "Solid oak, mango wood, natural rattan, and hand-thrown stoneware exhibit organic variations in grain figure and mineral glaze tone. Dimensions listed in the catalogue carry a tolerance of plus or minus 1 cm on upholstered and hand-thrown pieces.",
      "Prices are shown in USD before local delivery and applicable regional taxes.",
    ],
  },
};

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
  const [activeInfoModal, setActiveInfoModal] = useState<InfoModalKey | null>(
    null
  );

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
        if (activeInfoModal) setActiveInfoModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProduct, activeInfoModal]);

  const handleResetFilters = () => {
    resetFilters();
    setGlobalSearchQuery("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal-main selection:bg-stone-200">
      <main
        id="catalog-section"
        className="grow max-w-340 mx-auto w-full px-4 md:px-6 pt-3.5 md:pt-7 pb-10 md:pb-20"
      >
        <Breadcrumb
          activeCategory={category}
          onResetCategory={() => setCategory("All")}
        />

        {/* Page Title & Results Count Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 md:gap-4 pb-3 md:pb-7">
          <div>
            <h1 className="font-serif-display text-[32px] md:text-[44px] font-normal leading-tight text-charcoal-main tracking-tight md:tracking-normal">
              All Products
            </h1>
            <p className="text-text-muted text-[13px] mt-1 md:mt-1.5 leading-snug tracking-normal">
              Considered pieces for the home you&apos;re building, one room at a time.
            </p>
          </div>
          <div
            aria-live="polite"
            className="text-[11px] md:text-[12px] text-text-subtle font-medium md:font-normal mt-1 md:mt-0 md:pb-1"
          >
            {resultsSummary}
          </div>
        </div>

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
      </main>

      <Newsletter />

      <Footer
        onSelectCategory={setCategory}
        onOpenInfoModal={(topic) => setActiveInfoModal(topic)}
      />

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

      {/* Editorial & Support Information Modal */}
      <Dialog
        open={!!activeInfoModal}
        onOpenChange={(open) => {
          if (!open) setActiveInfoModal(null);
        }}
      >
        {activeInfoModal && (
          <DialogContent
            hideCloseButton
            className="max-w-lg p-6 space-y-4 bg-cream"
            aria-labelledby="info-modal-title"
          >
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-border-light">
              <div>
                <DialogTitle
                  id="info-modal-title"
                  className="font-serif-display text-2xl text-charcoal-main"
                >
                  {INFO_MODAL_CONTENT[activeInfoModal].title}
                </DialogTitle>
                <DialogDescription className="text-[12px] text-text-subtle mt-0.5">
                  {INFO_MODAL_CONTENT[activeInfoModal].subtitle}
                </DialogDescription>
              </div>
              <button
                type="button"
                onClick={() => setActiveInfoModal(null)}
                aria-label="Close dialog"
                className="min-w-10 min-h-10 inline-flex items-center justify-center rounded-full text-charcoal-main hover:bg-[#EFECE6]"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-[13px] text-text-muted leading-relaxed">
              {INFO_MODAL_CONTENT[activeInfoModal].paragraphs.map(
                (paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                )
              )}
            </div>

            <div className="pt-3 border-t border-border-light flex justify-end">
              <Button
                type="button"
                variant="primary"
                onClick={() => setActiveInfoModal(null)}
              >
                Return to Catalogue
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
