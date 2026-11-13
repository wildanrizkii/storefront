"use client";

import React from "react";
import Link from "next/link";
import {
  CHECKOUT_DEFAULT_ITEMS,
  CHECKOUT_SAVED_ADDRESSES,
  CHECKOUT_DEFAULT_SUMMARY,
  ORDER_CONFIRMATION_DATA,
} from "../../data/checkoutData";

export function OrderConfirmationPage() {
  const data = ORDER_CONFIRMATION_DATA;
  const items = CHECKOUT_DEFAULT_ITEMS;
  const totals = CHECKOUT_DEFAULT_SUMMARY;
  const primaryAddress = CHECKOUT_SAVED_ADDRESSES[0];

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#2D2823] font-sans antialiased">
      {/* Main Content Layout */}
      <main className="flex-grow max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12 py-10 md:py-14 w-full">
        {/* Hero / Success Notification Banner */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          {/* Checkmark Ring */}
          <div className="w-16 h-16 bg-[#EDE5DB] text-[#B46D2D] rounded-full mx-auto flex items-center justify-center mb-5 ring-8 ring-[#F5EFE7]">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M4.5 12.75l6 6 9-13.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Verified Purchase Status Badge */}
          <div className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-[#736B63] bg-[#F2ECE5] px-3.5 py-1.5 rounded-full mb-3">
            <svg
              className="w-3.5 h-3.5 text-[#B46D2D]"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v2H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zm2 6V6a2 2 0 10-4 0v2h4z"
              />
            </svg>
            <span>Verified Purchase</span>
          </div>

          <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-[#B46D2D] mb-2">
            Order Confirmed · Step 3 of 3
          </p>

          <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl text-[#1F1B18] font-normal leading-tight mb-4">
            Thank you for your order,{" "}
            <span className="italic font-normal">{data.customerName}</span>
          </h1>

          <p className="text-[#686058] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Your white-glove delivery has been scheduled. A confirmation email with
            receipt and tracking details has been sent to{" "}
            <span className="font-medium text-[#1F1B18]">{data.customerEmail}</span>.
          </p>

          {/* Quick Info Pill Bar */}
          <div className="mt-7 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-[#F3EDE6] border border-[#E4DBD0] px-5 py-3 rounded-2xl text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-[#4A433C]">
              <span className="text-[#877E75]">Order #:</span>
              <span className="font-semibold text-[#1F1B18]">
                {data.orderNumber || "LL-94821"}
              </span>
            </div>
            <span className="text-[#D3C8BC] hidden sm:inline">•</span>
            <div className="flex items-center gap-2 text-[#4A433C]">
              <span className="text-[#877E75]">Estimated Delivery:</span>
              <span className="font-semibold text-[#1F1B18]">
                {data.estimatedDelivery}
              </span>
            </div>
            <span className="text-[#D3C8BC] hidden sm:inline">•</span>
            <div className="flex items-center gap-2 text-[#4A433C]">
              <span className="text-[#877E75]">Delivery Tier:</span>
              <span className="font-medium text-[#B46D2D] bg-[#E8DCCE]/40 px-2 py-0.5 rounded">
                {data.deliveryTier}
              </span>
            </div>
          </div>
        </div>

        {/* 12-Column Responsive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Progress & Timeline, Delivery / Recipient Info, Actions (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* White-Glove Delivery Progress Tracker */}
            <div className="bg-white border border-[#E9E2D8] rounded-2xl p-6 sm:p-7 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-[#F0EAE1] pb-4">
                <div>
                  <h2 className="font-serif-display text-2xl text-[#1F1B18] font-medium">
                    Order Status &amp; Timeline
                  </h2>
                  <p className="text-xs text-[#80776E] mt-0.5">
                    Tracking reference: {data.trackingReference || "WGL-883920-ATX"}
                  </p>
                </div>
                <span className="self-start sm:self-auto text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EBF3EC] text-[#2F683B] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F683B] animate-pulse" />
                  {data.statusBadge}
                </span>
              </div>

              {/* Vertical Timeline Stepper */}
              <div className="relative pl-6 sm:pl-8 space-y-7 before:absolute before:left-2.5 sm:before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#EAE2D7]">
                {data.timelineStages.map((stage) => {
                  const isCompleted = stage.status === "completed";
                  const isActive = stage.status === "active";

                  return (
                    <div
                      key={stage.id}
                      className={`relative group ${
                        !isCompleted && !isActive ? "opacity-60" : ""
                      }`}
                    >
                      {/* Stage Indicator Node */}
                      <div
                        className={`absolute -left-6 sm:-left-8 top-0.5 w-5 h-5 rounded-full flex items-center justify-center ring-4 ${
                          isCompleted
                            ? "bg-[#B46D2D] text-white ring-white shadow-xs"
                            : isActive
                            ? "bg-[#1F1B18] text-white ring-[#EAE2D7] shadow-xs"
                            : "bg-[#E5DCD1] text-[#9A8F83] ring-white"
                        }`}
                      >
                        {isCompleted && (
                          <svg
                            className="w-3 h-3"
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
                        )}
                        {isActive && (
                          <span className="w-2 h-2 bg-[#B46D2D] rounded-full animate-ping" />
                        )}
                        {!isCompleted && !isActive && (
                          <span className="w-2 h-2 bg-[#9A8F83] rounded-full" />
                        )}
                      </div>

                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                          <h3 className="text-sm font-semibold text-[#1F1B18]">
                            {stage.title}
                          </h3>
                          <span
                            className={`text-xs ${
                              isActive
                                ? "font-medium text-[#B46D2D]"
                                : "text-[#8C8379]"
                            }`}
                          >
                            {stage.timeLabel}
                          </span>
                        </div>
                        <p className="text-xs text-[#6F665D] mt-1 leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Delivery & Customer Information Card */}
            <div className="bg-white border border-[#E9E2D8] rounded-2xl p-6 sm:p-7 shadow-xs">
              <h2 className="font-serif-display text-2xl text-[#1F1B18] font-medium mb-5 pb-3 border-b border-[#F0EAE1]">
                Delivery &amp; Recipient Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                {/* Shipping Destination */}
                <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#ECE4DA]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#8F857B]">
                      Destination
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-[#B46D2D] text-white rounded">
                      Default
                    </span>
                  </div>
                  <p className="font-semibold text-[#1F1B18]">
                    {primaryAddress.recipient}
                  </p>
                  <p className="text-[#5B534B] mt-0.5 leading-relaxed text-xs">
                    {primaryAddress.street}
                    <br />
                    {primaryAddress.cityStateZip}
                    <br />
                    {primaryAddress.phone}
                  </p>
                </div>

                {/* Payment Method & Contact */}
                <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#ECE4DA]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8F857B] block mb-2">
                    Payment &amp; Receipt
                  </span>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-5 bg-[#1F1B18] text-white rounded text-[10px] font-bold flex items-center justify-center tracking-widest">
                      {data.paymentMethod.brand}
                    </div>
                    <span className="font-medium text-[#1F1B18] text-xs">
                      Ending in {data.paymentMethod.last4}
                    </span>
                  </div>
                  <p className="text-xs text-[#5B534B]">
                    Billed:{" "}
                    <span className="font-semibold text-[#1F1B18]">
                      ${data.paymentMethod.billedAmount.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </p>
                  <p className="text-xs text-[#5B534B] mt-1.5">
                    Notifications sent to:
                    <br />
                    <span className="text-[#1F1B18] font-medium">
                      {data.customerEmail}
                    </span>
                  </p>
                </div>
              </div>

              {/* White-Glove Special Notes */}
              <div className="mt-5 p-4 rounded-xl bg-[#F6EFE6]/60 border border-[#E9DFD3]">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#B46D2D] shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#3C3630]">
                      Delivery Notes for White-Glove Team
                    </h3>
                    <p className="text-xs text-[#5C544C] mt-1 leading-relaxed">
                      "{data.deliveryNotes}"
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {data.deliveryTags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] bg-white border border-[#DDD3C7] text-[#554D45] px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons: Print & Continue Shopping */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link
                href="/shop"
                className="w-full sm:w-auto flex-1 text-center bg-[#1F1B18] text-white hover:bg-[#342F2A] px-7 py-3.5 rounded-full font-medium text-sm transition shadow-sm"
              >
                Continue Browsing Luma &amp; Living
              </Link>
              <button
                type="button"
                onClick={handlePrint}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#D5CABE] text-[#3E3730] hover:bg-[#F0EAE1] font-medium text-sm transition flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4 text-[#7B7268]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Print Order Receipt</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Purchased Items & Financial Breakdown (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Purchased Items Card */}
            <div className="bg-white border border-[#E9E2D8] rounded-2xl p-6 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-[#F0EAE1]">
                <h3 className="font-serif-display text-2xl text-[#1F1B18] font-medium">
                  Purchased Items
                </h3>
                <span className="text-xs font-medium text-[#7D746A] bg-[#F5EFE7] px-2.5 py-1 rounded-full">
                  {items.length} Items
                </span>
              </div>

              {/* Product Item List */}
              <div className="divide-y divide-[#F2ECE3]">
                {items.map((item) => (
                  <div key={item.id} className="py-4 flex gap-4 items-center">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-[#F4EFE9] border border-[#EAE3D9] shrink-0 overflow-hidden flex items-center justify-center p-1">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="grow min-w-0">
                      <h4 className="text-sm font-semibold text-[#1F1B18] truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#7A7268] mt-0.5">
                        {item.variant}
                      </p>
                      <div className="text-xs text-[#8A8177] mt-1">
                        Qty: {item.quantity}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm font-semibold text-[#1F1B18]">
                        ${(item.price * item.quantity).toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Applied Discount Tag */}
              {totals.discount > 0 && (
                <div className="mt-3 p-3 bg-[#FAF5EE] border border-[#E9DFD2] rounded-xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#B46D2D]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      />
                    </svg>
                    <span className="font-medium text-[#1F1B18]">
                      Coupon code{" "}
                      <strong className="font-bold text-[#B46D2D]">
                        WELCOME10
                      </strong>
                    </span>
                  </div>
                  <span className="text-[#2F683B] font-semibold">
                    10% Off Saved
                  </span>
                </div>
              )}

              {/* Financial Calculation Breakdown */}
              <div className="mt-5 pt-4 border-t border-[#F0EAE1] space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between text-[#686057]">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#1F1B18]">
                    ${totals.subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                </div>
                {totals.discount > 0 && (
                  <div className="flex justify-between text-[#B46D2D]">
                    <span>Discount (WELCOME10)</span>
                    <span className="font-medium">
                      -${totals.discount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-[#686057]">
                  <span>White-Glove Shipping &amp; Setup</span>
                  <span className="font-medium text-[#2F683B]">Free ($0.00)</span>
                </div>
                <div className="flex justify-between text-[#686057]">
                  <span>Estimated Sales Tax</span>
                  <span className="font-medium text-[#1F1B18]">
                    ${totals.tax.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-4 border-t border-[#EAE2D7] text-base sm:text-lg">
                  <span className="font-serif-display font-medium text-[#1F1B18] text-xl">
                    Total Paid
                  </span>
                  <span className="font-serif-display font-semibold text-[#1F1B18] text-2xl">
                    ${totals.total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            </div>

            {/* White-Glove Guarantee & Protection Card */}
            <div className="bg-[#FAF7F2] border border-[#E7DFD4] rounded-2xl p-5 text-xs text-[#5D554C] space-y-3">
              <div className="flex items-center gap-2.5 text-[#1F1B18] font-medium text-sm">
                <svg
                  className="w-5 h-5 text-[#B46D2D]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Luma &amp; Living Care Guarantee</span>
              </div>
              <ul className="space-y-2 text-[#686058] pl-6 list-disc">
                {data.careGuarantee.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Editorial Brand Footer */}
      <footer className="border-t border-[#EAE3DA] bg-[#F2ECE5] mt-12 py-10">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#776E65]">
          <div>
            <span className="font-serif-display text-lg text-[#1F1B18] font-medium block">
              Luma &amp; Living
            </span>
            <p className="mt-1">
              Considered furniture and decor for calm, warm interiors.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/shop" className="hover:text-[#1F1B18] transition">
              Order Status
            </Link>
            <Link href="/about" className="hover:text-[#1F1B18] transition">
              White-Glove Assembly
            </Link>
            <Link href="/about" className="hover:text-[#1F1B18] transition">
              Returns &amp; Care
            </Link>
            <Link href="/contact" className="hover:text-[#1F1B18] transition">
              Contact Concierge
            </Link>
          </div>
          <p>© 2026 Luma &amp; Living Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
