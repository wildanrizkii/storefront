"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Checkbox } from "../ui/checkbox";
import {
  CHECKOUT_DEFAULT_ITEMS,
  CHECKOUT_SAVED_ADDRESSES,
  QUICK_DELIVERY_TAGS,
  DEFAULT_DELIVERY_NOTE,
  DEFAULT_PROMO_CODE,
  calculateCheckoutTotals,
} from "../../data/checkoutData";
import type { CheckoutItem, SavedAddress } from "../../types/checkout";

export function CheckoutPage() {
  const router = useRouter();

  // Interactive checkout state
  const [items] = useState<CheckoutItem[]>(CHECKOUT_DEFAULT_ITEMS);
  const [addresses, setAddresses] = useState<SavedAddress[]>(
    CHECKOUT_SAVED_ADDRESSES
  );
  const [selectedAddressId, setSelectedAddressId] = useState<string>("home-default");
  const [email, setEmail] = useState("priya.nair@email.com");
  const [marketingConsent, setMarketingConsent] = useState(true);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [newStreet, setNewStreet] = useState("");
  const [newApt, setNewApt] = useState("");

  const [deliveryNotes, setDeliveryNotes] = useState(DEFAULT_DELIVERY_NOTE);
  const [selectedTags, setSelectedTags] = useState<string[]>([
    "Gated community",
    "No elevator",
  ]);

  const [promoInput, setPromoInput] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(DEFAULT_PROMO_CODE);
  const [mobileSummaryExpanded, setMobileSummaryExpanded] = useState(false);

  // Totals calculated from items & promo code
  const totals = calculateCheckoutTotals(items, appliedPromo);
  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim()) {
      setAppliedPromo(promoInput.trim().toUpperCase());
      setPromoInput("");
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromo("");
  };

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
      if (!deliveryNotes.toLowerCase().includes(tag.toLowerCase())) {
        setDeliveryNotes((prev) =>
          prev.trim() ? `${prev.trim()} (${tag})` : tag
        );
      }
    }
  };

  const handleAddNewAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStreet.trim()) return;
    const newAddress: SavedAddress = {
      id: `custom-${Date.now()}`,
      label: `Priya Nair - ${newStreet.trim()}`,
      recipient: "Priya Nair",
      street: newApt.trim() ? `${newStreet.trim()}, ${newApt.trim()}` : newStreet.trim(),
      cityStateZip: "Austin, TX 78704",
      phone: "(512) 555-0148",
      isDefault: false,
    };
    setAddresses((prev) => [...prev, newAddress]);
    setSelectedAddressId(newAddress.id);
    setNewStreet("");
    setNewApt("");
    setShowNewAddressForm(false);
  };

  const handleRemoveAddress = (id: string) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
    if (selectedAddressId === id) {
      setSelectedAddressId(addresses[0]?.id || "");
    }
  };

  const handlePlaceOrder = () => {
    router.push("/checkout/confirmation");
  };

  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#1F1B16] font-sans antialiased pb-28 lg:pb-16">
      {/* Stepper Progress Banner */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12 pt-6 md:pt-9 pb-5 md:pb-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#ECE6DB] pb-6">
          <div className="flex items-baseline justify-between sm:justify-start gap-4">
            <h1 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1917] tracking-tight">
              Checkout
            </h1>
            <span className="sm:hidden text-xs text-[#7A7265] uppercase tracking-wider font-medium">
              Step 2 of 3
            </span>
          </div>

          {/* Stepper Steps */}
          <div className="flex items-center gap-2 sm:gap-3.5 text-xs font-medium">
            {/* Step 1: Cart (Completed) */}
            <Link
              href="/cart"
              className="flex items-center gap-1.5 sm:gap-2 text-[#1C1917] hover:opacity-80 transition-opacity"
            >
              <span className="w-5 h-5 rounded-full border border-[#C27D2D] bg-[#FBF5EC] text-[#C27D2D] flex items-center justify-center text-[10px]">
                <svg
                  className="w-3 h-3 text-[#C27D2D]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M4.5 12.75l6 6 9-13.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-medium text-[#1C1917]">Cart</span>
            </Link>

            <div className="w-6 sm:w-10 h-px bg-[#DDD6C9]"></div>

            {/* Step 2: Shipping (Active) */}
            <div className="flex items-center gap-1.5 sm:gap-2 text-[#1C1917]">
              <span className="w-5 h-5 rounded-full bg-[#1C1917] text-white flex items-center justify-center text-[11px] font-semibold">
                2
              </span>
              <span className="font-semibold text-[#1C1917]">Shipping</span>
            </div>

            <div className="w-6 sm:w-10 h-px bg-[#DDD6C9]"></div>

            {/* Step 3: Payment (Upcoming) */}
            <div className="flex items-center gap-1.5 sm:gap-2 text-[#9E9689] opacity-70">
              <span className="w-5 h-5 rounded-full border border-[#D5CDC1] bg-transparent text-[#9E9689] flex items-center justify-center text-[11px]">
                3
              </span>
              <span className="text-[#9E9689]">Payment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout Grid */}
      <main className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12">
        {/* Mobile Collapsible Order Summary Accordion (Hidden on Desktop) */}
        <section
          className="lg:hidden bg-white rounded-2xl border border-[#E9E3DA] shadow-xs overflow-hidden mb-6"
          data-purpose="mobile-order-summary-accordion"
        >
          <button
            type="button"
            onClick={() => setMobileSummaryExpanded((prev) => !prev)}
            aria-expanded={mobileSummaryExpanded}
            className="w-full px-4 py-3.5 flex items-center justify-between text-left hover:bg-[#FAF8F5]/60 transition-colors"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-[#1C1917]">
              <svg
                className="w-4 h-4 text-[#C27D2D]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>
                {mobileSummaryExpanded ? "Hide" : "Show"} order summary{" "}
                <span className="text-[#7A7265]">({totalItemCount} items)</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-serif-display font-bold text-base text-[#1C1917]">
                ${totals.total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
              <svg
                className={`w-4 h-4 text-[#7A7265] transition-transform duration-200 ${mobileSummaryExpanded ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

          {mobileSummaryExpanded && (
            <div className="border-t border-[#E9E3DA] px-4 pt-4 pb-5 space-y-4 bg-[#FCFBF9]">
              {/* Product Items */}
              <div className="space-y-3.5 divide-y divide-[#EDE5D8]">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 pt-3 first:pt-0">
                    <div className="relative w-14 h-14 rounded-lg bg-stone-100 overflow-hidden shrink-0 border border-[#E8E2D9]">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-0 right-0 bg-[#1C1917] text-white text-[10px] px-1.5 py-0.5 rounded-bl font-medium">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-[#1C1917] truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#7A7265]">
                        Qty {item.quantity} · {item.variant}
                      </p>
                    </div>
                    <div className="text-sm font-medium text-[#1C1917]">
                      ${(item.price * item.quantity).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code Input Form */}
              <div className="pt-2 border-t border-[#E9E3DA] space-y-2">
                <label className="block text-xs font-medium text-[#7A7265]">
                  Have a promo code?
                </label>
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Enter coupon code"
                    className="flex-1 text-xs bg-white rounded-lg border border-[#E8E2D9] px-3 py-2 text-[#1F1B16] placeholder-[#A49D92] focus:outline-none focus:ring-1 focus:ring-[#C27D2D]"
                  />
                  <button
                    type="submit"
                    className="bg-[#1C1917] text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-neutral-800 transition"
                  >
                    Apply
                  </button>
                </form>

                {appliedPromo && (
                  <div className="flex items-center justify-between bg-[#FDF9F2] border border-[#DFC39C] rounded-lg px-3 py-1.5 text-xs text-[#87551C]">
                    <div className="flex items-center gap-1.5 font-medium">
                      <svg
                        className="w-3.5 h-3.5 text-[#C27D2D] shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M4.5 12.75l6 6 9-13.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{appliedPromo} applied</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemovePromo}
                      className="text-[11px] text-[#87551C] underline hover:text-[#5B3911]"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              {/* Cost Breakdown */}
              <div className="pt-3 border-t border-[#E9E3DA] space-y-2 text-xs">
                <div className="flex justify-between text-[#7A7265]">
                  <span>Subtotal</span>
                  <span className="text-[#1F1B16] font-medium">
                    ${totals.subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                </div>
                {totals.discount > 0 && (
                  <div className="flex justify-between text-[#C27D2D] font-medium">
                    <span>Discount ({appliedPromo})</span>
                    <span>
                      -${totals.discount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-[#7A7265]">
                  <span>White-glove Delivery</span>
                  <span className="text-[#2F683B] font-medium">Free</span>
                </div>
                <div className="flex justify-between text-[#7A7265]">
                  <span>Estimated Tax</span>
                  <span className="text-[#1F1B16] font-medium">
                    ${totals.tax.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-[#E9E3DA]">
                  <span className="font-serif-display font-medium text-lg text-[#1C1917]">
                    Total
                  </span>
                  <span className="font-serif-display font-bold text-xl text-[#1C1917] tracking-tight">
                    ${totals.total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 12-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Customer Information, Addresses, Instructions (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Section: Contact Information */}
            <section
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E9E3DA] shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
              data-purpose="contact-section"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-serif-display text-xl sm:text-2xl font-normal text-[#1A1816]">
                  Contact Information
                </h2>
                <span className="text-xs text-[#7A7265]">Saved profile</span>
              </div>

              <div className="space-y-4">
                {/* Email Input with verified checkmark */}
                <div className="relative">
                  <label htmlFor="contact-email-input" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="contact-email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full text-sm bg-[#FAF8F5] border border-[#E4DDD2] rounded-xl px-4 py-3 text-[#1F1B16] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C27D2D] focus:border-transparent transition-all pr-10"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-[#C27D2D]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Marketing Checkbox */}
                <label
                  htmlFor="marketing-consent"
                  className="flex items-start sm:items-center gap-2 cursor-pointer text-xs sm:text-[13px] text-[#423C33] select-none"
                >
                  <Checkbox
                    id="marketing-consent"
                    checked={marketingConsent}
                    onCheckedChange={(checked) =>
                      setMarketingConsent(checked === true)
                    }
                    className="mb-0.5"
                  />
                  <span>
                    Email me with order updates and white-glove shipping notifications
                  </span>
                </label>
              </div>
            </section>

            {/* Section: Delivery Address */}
            <section
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E9E3DA] shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
              data-purpose="delivery-address-section"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-serif-display text-xl sm:text-2xl font-normal text-[#1A1816]">
                  Delivery Address
                </h2>
                <button
                  type="button"
                  onClick={() => setShowNewAddressForm((prev) => !prev)}
                  className="text-xs font-semibold text-[#C27D2D] hover:text-[#9F631D] transition-colors"
                >
                  {showNewAddressForm ? "Cancel" : "+ Add New Address"}
                </button>
              </div>

              {/* Saved Addresses List */}
              <div className="space-y-3.5" role="radiogroup" aria-label="Delivery Address Options">
                {addresses.map((address) => {
                  const isSelected = selectedAddressId === address.id;
                  return (
                    <label
                      key={address.id}
                      className={`block relative rounded-xl p-4 sm:p-5 cursor-pointer transition shadow-xs ${isSelected
                        ? "border-2 border-[#C27D2D] bg-[#FDFBF7]"
                        : "border border-[#E5DFD4] bg-white hover:border-[#D5CDC1]"
                        }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3.5">
                          <input
                            type="radio"
                            name="address_choice"
                            value={address.id}
                            checked={isSelected}
                            onChange={() => setSelectedAddressId(address.id)}
                            className="mt-1 w-4 h-4 text-[#C27D2D] border-[#C27D2D] focus:ring-[#C27D2D] focus:ring-offset-0"
                          />
                          <div>
                            <span className="font-semibold text-sm text-[#1C1917] block">
                              {address.label}
                            </span>
                            <p className="text-xs text-[#6F685D] mt-0.5 leading-relaxed">
                              {address.street}
                              <br />
                              {address.cityStateZip} · {address.phone}
                            </p>
                          </div>
                        </div>

                        {address.isDefault ? (
                          <span className="bg-[#C27D2D] text-white text-[10px] tracking-wider uppercase font-bold px-2 py-0.5 rounded">
                            DEFAULT
                          </span>
                        ) : (
                          <div className="flex items-center gap-3 text-xs text-[#827B70]">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowNewAddressForm(true);
                              }}
                              className="hover:text-[#1C1917] transition-colors underline-offset-2 hover:underline"
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRemoveAddress(address.id);
                              }}
                              className="hover:text-[#A83838] transition-colors underline-offset-2 hover:underline"
                            >
                              Remove
                            </button>
                          </div>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>

              {/* New Address Inline Form */}
              {showNewAddressForm && (
                <form
                  onSubmit={handleAddNewAddress}
                  className="mt-5 pt-5 border-t border-[#F0ECE4] space-y-3"
                >
                  <p className="text-xs text-[#7A7265] font-medium">
                    Add a new delivery address:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                    <div className="sm:col-span-8">
                      <input
                        type="text"
                        value={newStreet}
                        onChange={(e) => setNewStreet(e.target.value)}
                        placeholder="Street address (e.g. 104 Oak Haven Way)"
                        required
                        className="w-full text-xs bg-[#FAF8F5] border border-[#E4DDD2] rounded-xl px-3.5 py-2.5 text-[#1F1B16] placeholder-[#A8A196] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C27D2D] focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="sm:col-span-4">
                      <input
                        type="text"
                        value={newApt}
                        onChange={(e) => setNewApt(e.target.value)}
                        placeholder="Apt, suite (optional)"
                        className="w-full text-xs bg-[#FAF8F5] border border-[#E4DDD2] rounded-xl px-3.5 py-2.5 text-[#1F1B16] placeholder-[#A8A196] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C27D2D] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setShowNewAddressForm(false)}
                      className="px-4 py-2 text-xs rounded-xl border border-[#D5CDC1] text-[#7A7265] hover:bg-[#FAF8F5] transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#1C1917] text-white hover:bg-neutral-800 transition"
                    >
                      Save Address
                    </button>
                  </div>
                </form>
              )}
            </section>

            {/* Section: Delivery Instructions */}
            <section
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E9E3DA] shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
              data-purpose="delivery-instructions-section"
            >
              <div className="mb-3">
                <h2 className="font-serif-display text-xl sm:text-2xl font-normal text-[#1A1816]">
                  Delivery Instructions
                </h2>
                <p className="text-xs text-[#7A7265] mt-1">
                  Help our white-glove team find you, optional.
                </p>
              </div>

              {/* Instructions Text Area */}
              <label htmlFor="delivery-notes-textarea" className="sr-only">
                Delivery notes
              </label>
              <textarea
                id="delivery-notes-textarea"
                rows={3}
                value={deliveryNotes}
                onChange={(e) => setDeliveryNotes(e.target.value)}
                className="w-full text-xs leading-relaxed bg-[#FAF8F5] border border-[#E4DDD2] rounded-xl p-3.5 text-[#2C2720] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C27D2D] focus:border-transparent transition-all resize-none"
              />

              {/* Quick Option Tags */}
              <div className="space-y-1.5 mt-3">
                <span className="text-[11px] font-medium text-[#7A7265] uppercase tracking-wider block">
                  Quick notes:
                </span>
                <div className="flex flex-wrap gap-2">
                  {QUICK_DELIVERY_TAGS.map((tag) => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => handleTagToggle(tag)}
                        className={`text-[11px] font-medium px-3 py-1.5 rounded-full border transition active:scale-95 ${isSelected
                          ? "bg-[#FDF5EB] border-[#C27D2D] text-[#87551C]"
                          : "bg-[#FAF7F2] hover:bg-[#F2ECE1] text-[#635C52] border-[#EAE3D6]"
                          }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Trust and Policy Footer Note (Mobile) */}
            <div className="lg:hidden text-center space-y-2 text-xs text-[#7A7265] pt-2">
              <div className="flex items-center justify-center gap-1.5">
                <svg
                  className="w-3.5 h-3.5 text-[#C27D2D]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>White-Glove In-Home Assembly Included</span>
              </div>
              <p className="text-[11px] text-[#A8A196]">
                By placing your order, you agree to Luma &amp; Living Terms of Service and Return Policy.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Desktop Sticky Order Summary Sidebar (5 Cols) */}
          <aside className="hidden lg:block lg:col-span-5" data-purpose="order-summary-sidebar">
            <div className="bg-[#FAF7F1] rounded-2xl p-6 sm:p-7 border border-[#EBE3D7] shadow-sm sticky top-28">
              <h2 className="font-serif-display text-2xl font-normal text-[#1A1816] mb-5">
                Order Summary
              </h2>

              {/* Purchased Items List */}
              <div className="divide-y divide-[#EDE5D8] pb-5 border-b border-[#EDE5D8]">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between py-3.5 first:pt-0"
                  >
                    <div className="flex items-center gap-3.5">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-13 h-13 sm:w-14 sm:h-14 rounded-lg object-cover bg-neutral-200 border border-[#E5DDCF]"
                      />
                      <div>
                        <h3 className="font-semibold text-xs sm:text-sm text-[#1A1816]">
                          {item.name}
                        </h3>
                        <span className="text-xs text-[#7D766A]">
                          Qty {item.quantity} · {item.variant}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-[#1A1816]">
                      ${(item.price * item.quantity).toLocaleString("en-US", {
                        minimumFractionDigits: 0,
                      })}
                    </span>
                  </div>
                ))}
              </div>

              {/* Promo Code Input & Active Coupon */}
              <div className="py-5 border-b border-[#EDE5D8] space-y-3">
                <span className="text-xs font-medium text-[#4D463C] block">
                  Have a promo code?
                </span>
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Enter coupon code"
                    className="flex-1 text-xs bg-white border border-[#E2DAD0] rounded-full px-4 py-2 text-[#1F1B16] placeholder-[#A49D92] focus:outline-none focus:ring-1 focus:ring-[#C27D2D]"
                  />
                  <button
                    type="submit"
                    className="bg-[#1C1917] hover:bg-neutral-800 text-white text-xs font-semibold px-5 py-2 rounded-full transition"
                  >
                    Apply
                  </button>
                </form>

                {appliedPromo && (
                  <div className="flex items-center justify-between bg-[#FDF9F2] border border-[#DFC39C] rounded-full px-3.5 py-1.5 mt-2">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-3.5 h-3.5 text-[#C27D2D]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M4.5 12.75l6 6 9-13.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-xs font-semibold text-[#87551C]">
                        {appliedPromo} applied
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemovePromo}
                      className="text-[11px] text-[#87551C] hover:underline hover:text-[#5B3911] font-medium"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              {/* Cost Breakdown */}
              <div className="py-4 space-y-2.5 text-xs text-[#5E574C]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#1F1B16] font-medium">
                    ${totals.subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                </div>
                {totals.discount > 0 && (
                  <div className="flex justify-between text-[#C27D2D]">
                    <span>Discount ({appliedPromo})</span>
                    <span className="font-medium">
                      -${totals.discount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-[#1F1B16] font-medium">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span className="text-[#1F1B16] font-medium">
                    ${totals.tax.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              {/* Final Total Line */}
              <div className="pt-3 pb-5 border-t border-[#EDE5D8] flex items-baseline justify-between">
                <span className="font-serif-display text-lg text-[#1A1816]">Total</span>
                <span className="font-serif-display text-2xl font-bold text-[#1A1816] tracking-tight">
                  ${totals.total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </span>
              </div>

              {/* Primary Action CTA Button */}
              <button
                type="button"
                onClick={handlePlaceOrder}
                className="w-full bg-[#C27D2D] hover:bg-[#B37024] text-white font-medium text-sm py-3.5 rounded-full shadow transition-all active:scale-[0.99] flex items-center justify-center tracking-wide"
              >
                Place Order - ${totals.total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </button>

              {/* Security Note */}
              <div className="flex items-center justify-center gap-1.5 mt-3 text-[11px] text-[#8A8275]">
                <svg
                  className="w-3.5 h-3.5 text-[#C27D2D]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>256-bit encrypted, PCI-compliant payment</span>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Sticky Mobile Action Bar (Fixed at bottom on Mobile) */}
      <aside
        className="lg:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-[#E8E2D9] py-3 px-4 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] z-50"
        data-purpose="mobile-sticky-action-bar"
      >
        <div className="max-w-md mx-auto space-y-2">
          <button
            type="button"
            onClick={handlePlaceOrder}
            className="w-full bg-[#B87333] hover:bg-[#A36228] active:bg-[#8F5320] text-white font-semibold py-3.5 px-6 rounded-xl shadow-md flex items-center justify-between text-sm transition-all transform active:scale-[0.99]"
          >
            <span className="tracking-wide">Place Order</span>
            <span className="font-serif-display font-bold text-lg tracking-wider">
              ${totals.total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </span>
          </button>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#7A7265]">
            <svg
              className="w-3.5 h-3.5 text-[#B87333] shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>256-bit encrypted, PCI-compliant payment</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
