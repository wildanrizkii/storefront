"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { HydratedCartItem } from "../../hooks/useCart";
import {
  CART_CROSS_SELL_ITEMS,
  FREE_SHIPPING_THRESHOLD,
} from "../../data/cartData";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import { Input } from "../ui/input";
import { Button } from "../ui/Button";

export interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: HydratedCartItem[];
  cartCount: number;
  subtotal: number;
  onAddToCart: (
    productId: string,
    quantity?: number,
    variantLabel?: string
  ) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveFromCart: (productId: string) => void;
  onResetDefaultCart?: () => void;
}

export function CartDrawer({
  open,
  onClose,
  items,
  cartCount,
  subtotal,
  onAddToCart,
  onUpdateQuantity,
  onRemoveFromCart,
  onResetDefaultCart,
}: CartDrawerProps) {
  const [promoOpen, setPromoOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<string | null>(null);
  const [checkoutSubmitted, setCheckoutSubmitted] = useState(false);

  const qualifiesFreeDelivery = subtotal >= FREE_SHIPPING_THRESHOLD;
  const remainingForFreeDelivery = Math.max(
    0,
    FREE_SHIPPING_THRESHOLD - subtotal
  );
  const progressPercent = Math.min(
    100,
    subtotal > 0 ? Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100) : 0
  );

  const discountAmount = Math.round(subtotal * appliedDiscount);
  const estimatedTotal = Math.max(0, subtotal - discountAmount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = promoCode.trim().toUpperCase();
    if (!normalized) {
      setPromoMessage("Enter a promo or gift card code.");
      return;
    }
    if (normalized === "LUMA10" || normalized === "ATELIER10") {
      setAppliedDiscount(0.1);
      setPromoMessage("10% atelier discount applied.");
    } else {
      setPromoMessage("Code applied for preview verification.");
    }
  };

  return (
    <Sheet
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) onClose();
      }}
    >
      <SheetContent
        side="right"
        hideCloseButton
        id="cart-drawer"
        data-purpose="slide-out-cart-drawer"
        className="w-[92%] sm:w-110 sm:max-w-md p-0 gap-0"
        aria-label="Shopping Cart Drawer"
      >
        <span className="sr-only">
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            View items in your bag, apply discount codes, and proceed to checkout.
          </SheetDescription>
        </span>

        {/* Cart Drawer Header */}
        <header
          className="shrink-0 pt-4 px-5 pb-3 border-b border-[#EAE4DA] bg-[#FAF8F3]"
          data-purpose="cart-drawer-header"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-baseline space-x-2">
              <h2 className="font-serif-display text-2xl tracking-normal text-[#171411]">
                Your Cart
              </h2>
              <span className="text-xs uppercase tracking-wider text-text-muted font-medium">
                ({cartCount} {cartCount === 1 ? "item" : "items"})
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close cart"
              className="w-9 h-9 rounded-full border border-[#EAE4DA] flex items-center justify-center text-[#1E1B18] hover:bg-[#F1EDE6] active:scale-95 transition-all"
            >
              <svg
                aria-hidden="true"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.75"
                />
              </svg>
            </button>
          </div>

          {/* Free Shipping Progress Tracker */}
          <div
            className="mt-3.5 pt-3 border-t border-[#EAE4DA]/60"
            data-purpose="shipping-progress"
          >
            <div className="flex items-center justify-between text-[11px] mb-1.5 font-medium tracking-tight">
              <span className="text-[#1E1B18] flex items-center gap-1.5">
                <span
                  aria-hidden="true"
                  className="w-1.5 h-1.5 rounded-full bg-emerald-700 inline-block"
                />
                {qualifiesFreeDelivery ? (
                  <>
                    Unlocked:{" "}
                    <span className="font-semibold text-[#171411]">
                      Free White-Glove Delivery
                    </span>
                  </>
                ) : (
                  <>
                    Add{" "}
                    <span className="font-semibold text-[#171411]">
                      ${remainingForFreeDelivery.toLocaleString("en-US")}
                    </span>{" "}
                    for Free White-Glove Delivery
                  </>
                )}
              </span>
              <span className="text-gold-accent font-semibold tracking-normal">
                {qualifiesFreeDelivery ? "Qualified" : `${progressPercent}%`}
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#F1EDE6] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1E1B18] rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </header>

        {/* Scrollable Cart Content */}
        <div
          className="flex-1 overflow-y-auto no-scrollbar px-5 py-4 space-y-6"
          data-purpose="cart-items-scroll-area"
        >
          {items.length === 0 ? (
            <div
              role="status"
              className="py-10 text-center space-y-3 border border-[#EAE4DA] rounded-xl bg-[#F7F4EE] p-6"
            >
              <p className="font-serif-display text-xl text-[#171411]">
                Your cart is currently empty
              </p>
              <p className="text-xs text-text-muted leading-relaxed">
                Explore our furniture collection or restore the 3 curated showcase pieces.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                {onResetDefaultCart && (
                  <button
                    type="button"
                    onClick={onResetDefaultCart}
                    className="px-4 py-2 rounded-full bg-[#171411] text-white text-xs font-medium hover:bg-neutral-800"
                  >
                    Restore 3 Showcase Items
                  </button>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-full border border-[#EAE4DA] bg-white text-[#171411] text-xs font-medium hover:bg-[#F1EDE6]"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4" data-purpose="cart-item-list">
              {items.map(
                ({ product, quantity, variantLabel, drawerThumbnailUrl }) => (
                  <article
                    key={product.id}
                    className="flex gap-3.5 pb-4 border-b border-[#EAE4DA]/60 relative group"
                    data-purpose="cart-line-item"
                  >
                    {/* Item Thumbnail */}
                    <Link
                      href={`/products/${product.id}`}
                      onClick={onClose}
                      className="w-20 h-24 bg-[#F1EDE6] rounded-lg overflow-hidden shrink-0 border border-[#EAE4DA]/60 relative block"
                    >
                      {product.saleBadge && (
                        <span className="absolute top-1 left-1 z-10 bg-sale-tag text-white text-[9px] font-semibold px-1 rounded-xs tracking-tight">
                          {product.saleBadge}
                        </span>
                      )}
                      <img
                        src={drawerThumbnailUrl}
                        alt={product.name}
                        width={160}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Item Details */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex justify-between items-start gap-1">
                          <h3 className="font-serif-display text-[17px] text-[#171411] leading-snug truncate">
                            <Link
                              href={`/products/${product.id}`}
                              onClick={onClose}
                              className="hover:underline"
                            >
                              {product.name}
                            </Link>
                          </h3>
                          <button
                            type="button"
                            onClick={() => onRemoveFromCart(product.id)}
                            aria-label={`Remove ${product.name} from cart`}
                            className="text-text-muted hover:text-sale-tag p-1 transition-colors"
                          >
                            <svg
                              aria-hidden="true"
                              className="w-3.5 h-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.75"
                              />
                            </svg>
                          </button>
                        </div>
                        <p className="text-[12px] text-text-muted mt-0.5">
                          {variantLabel}
                        </p>
                      </div>

                      {/* Quantity Stepper and Price */}
                      <div className="flex items-center justify-between mt-2 pt-1">
                        <div className="flex items-center border border-[#EAE4DA] bg-white rounded-full h-7 px-1.5 shadow-2xs">
                          <button
                            type="button"
                            onClick={() =>
                              onUpdateQuantity(product.id, quantity - 1)
                            }
                            aria-label={`Decrease quantity of ${product.name}`}
                            className="w-6 h-6 flex items-center justify-center text-text-muted hover:text-[#171411] text-xs font-semibold"
                          >
                            -
                          </button>
                          <span className="w-6 text-center text-xs font-medium text-[#171411]">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              onUpdateQuantity(product.id, quantity + 1)
                            }
                            aria-label={`Increase quantity of ${product.name}`}
                            className="w-6 h-6 flex items-center justify-center text-text-muted hover:text-[#171411] text-xs font-semibold"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-right">
                          {product.originalPrice && (
                            <span className="text-xs text-text-subtle line-through mr-1.5">
                              $
                              {(
                                product.originalPrice * quantity
                              ).toLocaleString("en-US")}
                            </span>
                          )}
                          <span className="text-sm font-semibold text-[#171411] tracking-tight">
                            $
                            {(product.price * quantity).toLocaleString("en-US")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              )}
            </div>
          )}

          {/* Cross-Sell Mini Carousel ("Complete the room") */}
          <section
            className="pt-2"
            data-purpose="complete-the-room-cross-sell"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-serif-display text-base text-[#171411] font-normal">
                Complete the room
              </h3>
              <span className="text-[11px] text-text-muted font-medium uppercase tracking-wider">
                Curated
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {CART_CROSS_SELL_ITEMS.map((crossItem) => (
                <div
                  key={crossItem.productId}
                  className="bg-[#F7F4EE] border border-[#EAE4DA]/80 rounded-xl p-2.5 flex flex-col justify-between"
                >
                  <Link
                    href={`/products/${crossItem.productId}`}
                    onClick={onClose}
                    className="w-full h-24 bg-[#F1EDE6] rounded-lg overflow-hidden mb-2 block"
                  >
                    <img
                      src={crossItem.thumbnailUrl}
                      alt={crossItem.shortName}
                      width={240}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div>
                    <p className="text-[10px] text-text-muted uppercase tracking-wider">
                      {crossItem.category}
                    </p>
                    <h4 className="font-serif-display text-xs text-[#171411] font-semibold truncate">
                      {crossItem.shortName}
                    </h4>
                    <p className="text-xs font-medium text-[#171411] mt-0.5">
                      ${crossItem.price.toLocaleString("en-US")}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      onAddToCart(
                        crossItem.productId,
                        1,
                        crossItem.variantLabel
                      )
                    }
                    className="mt-2.5 w-full py-1.5 bg-white hover:bg-[#1E1B18] hover:text-white transition-all text-xs font-medium rounded-md border border-[#EAE4DA] flex items-center justify-center gap-1 shadow-2xs"
                  >
                    <span>+ Add</span>
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Reassurance Checklist */}
          <div
            className="bg-white/60 border border-[#EAE4DA]/70 rounded-xl p-3 text-[11px] text-text-muted space-y-1.5"
            data-purpose="reassurance-points"
          >
            <div className="flex items-center gap-2">
              <svg
                aria-hidden="true"
                className="w-3.5 h-3.5 text-emerald-700 shrink-0"
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
              <span>Free room of choice delivery &amp; full assembly</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                aria-hidden="true"
                className="w-3.5 h-3.5 text-emerald-700 shrink-0"
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
              <span>30-day in-home trial &amp; 10-year solid oak warranty</span>
            </div>
          </div>
        </div>

        {/* Sticky Bottom Checkout Footer */}
        <footer
          className="shrink-0 bg-[#F7F4EE] border-t border-[#EAE4DA] p-5 space-y-3.5 shadow-lg"
          data-purpose="cart-drawer-footer"
        >
          {/* Promo Code Accordion Row */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-text-muted pt-0.5">
              <button
                type="button"
                onClick={() => setPromoOpen((prev) => !prev)}
                aria-expanded={promoOpen}
                className="underline underline-offset-4 hover:text-[#171411] transition-colors flex items-center gap-1"
              >
                <span>Add discount or gift card</span>
              </button>
              <span className="text-[11px] font-normal text-text-subtle">
                Taxes calculated at next step
              </span>
            </div>

            {promoOpen && (
              <form onSubmit={handleApplyPromo} className="flex gap-2 pt-1">
                <label htmlFor="cart-promo-input" className="sr-only">
                  Discount or gift card code
                </label>
                <Input
                  id="cart-promo-input"
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Try LUMA10"
                  className="flex-1 h-9 rounded-lg text-base md:text-xs"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="h-9 rounded-lg px-4"
                >
                  Apply
                </Button>
              </form>
            )}
            {promoMessage && (
              <p role="status" className="text-[11px] text-emerald-800">
                {promoMessage}
              </p>
            )}
          </div>

          {/* Pricing Breakdown */}
          <div className="space-y-1.5 text-xs text-[#1E1B18] pt-1 border-t border-[#EAE4DA]/60">
            <div className="flex justify-between items-center">
              <span className="text-text-muted">Subtotal</span>
              <span className="font-medium">
                ${subtotal.toLocaleString("en-US")}
              </span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between items-center text-emerald-800">
                <span>Atelier Discount (10%)</span>
                <span>-${discountAmount.toLocaleString("en-US")}</span>
              </div>
            )}
            <div className="flex justify-between items-center">
              <span className="text-text-muted">White-Glove Delivery</span>
              <span className="text-emerald-800 font-semibold tracking-tight uppercase text-[11px]">
                {qualifiesFreeDelivery ? "Free" : "$65"}
              </span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-[#EAE4DA] text-sm font-semibold text-[#171411]">
              <span className="font-serif-display text-lg tracking-normal">
                Estimated Total
              </span>
              <span className="text-base font-semibold tracking-tight">
                ${estimatedTotal.toLocaleString("en-US")}
              </span>
            </div>
          </div>

          {/* Primary Checkout CTA Button */}
          <div>
            <Link
              href="/checkout"
              onClick={onClose}
              className={`w-full bg-[#171411] text-[#FAF8F3] hover:bg-neutral-800 active:scale-[0.99] transition-all rounded-full py-3.5 px-6 font-medium text-xs tracking-wider uppercase flex items-center justify-between shadow-md ${
                items.length === 0 ? "pointer-events-none opacity-50" : ""
              }`}
            >
              <span className="flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <span>Checkout Securely</span>
              </span>
              <span className="tracking-normal font-sans font-semibold text-sm">
                ${estimatedTotal.toLocaleString("en-US")} →
              </span>
            </Link>
          </div>

          {checkoutSubmitted && (
            <div
              role="status"
              className="p-2.5 rounded-lg bg-white border border-[#EAE4DA] text-[11px] text-[#171411] text-center"
            >
              Catalogue preview mode: no live payment is charged. Your{" "}
              {cartCount} {cartCount === 1 ? "item is" : "items are"} reserved
              in your local bag.
            </div>
          )}

          {/* Footer Micro-trust Note */}
          <p className="text-[11px] text-text-muted text-center pt-0.5">
            All checkouts are SSL-encrypted, with Apple Pay and Klarna accepted.
          </p>
        </footer>
      </SheetContent>
    </Sheet>
  );
}
