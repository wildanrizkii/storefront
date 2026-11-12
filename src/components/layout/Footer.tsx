"use client";

import React from "react";
import type { CategoryFilter } from "../../types/product";

export type InfoModalKey =
  | "Collections"
  | "About"
  | "Contact"
  | "Careers"
  | "Press"
  | "Shipping & returns"
  | "Warranty"
  | "FAQs"
  | "Privacy Policy"
  | "Terms of Service";

export interface FooterProps {
  onSelectCategory: (category: CategoryFilter) => void;
  onOpenInfoModal: (topic: InfoModalKey) => void;
}

const SHOP_LINKS: CategoryFilter[] = [
  "Sofas",
  "Chairs",
  "Tables",
  "Storage",
  "Lighting",
  "Decor",
];

const COMPANY_LINKS: { label: string; key: InfoModalKey }[] = [
  { label: "Collections", key: "Collections" },
  { label: "About us", key: "About" },
  { label: "Careers", key: "Careers" },
  { label: "Press", key: "Press" },
];

const SUPPORT_LINKS: { label: string; key: InfoModalKey }[] = [
  { label: "Contact", key: "Contact" },
  { label: "Shipping & returns", key: "Shipping & returns" },
  { label: "Warranty", key: "Warranty" },
  { label: "FAQs", key: "FAQs" },
];

export function Footer({ onSelectCategory, onOpenInfoModal }: FooterProps) {
  const handleCategoryClick = (category: CategoryFilter) => {
    onSelectCategory(category);
    const catalogEl = document.getElementById("catalog-section");
    catalogEl?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="bg-cream-footer border-t border-border-light text-[12px] text-text-muted pt-10 md:pt-14 pb-8 md:pb-12"
      data-purpose="site-footer"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-7 gap-x-6 md:gap-8 pb-8 md:pb-12">
          {/* Brand Description */}
          <div className="col-span-2 md:col-span-1 space-y-2 pb-2 md:pb-0 border-b md:border-b-0 border-border-light">
            <div className="font-serif-display text-2xl md:text-lg font-medium text-charcoal-main">
              Luma &amp; Living
            </div>
            <p className="text-[12px] md:text-[11px] leading-relaxed text-text-subtle max-w-xs md:pr-4">
              Considered furniture and decor for calm, warm interiors.
            </p>
          </div>

          {/* Shop Links */}
          <div className="space-y-2.5">
            <h3 className="font-medium text-charcoal-main text-[11px] md:text-[12px] uppercase md:normal-case tracking-wider md:tracking-normal">
              Shop
            </h3>
            <ul className="space-y-1.5 text-[12px] md:text-[11.5px]">
              {SHOP_LINKS.map((category) => (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => handleCategoryClick(category)}
                    className="text-text-muted hover:text-charcoal-main transition-colors py-0.5 text-left"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-2.5">
            <h3 className="font-medium text-charcoal-main text-[11px] md:text-[12px] uppercase md:normal-case tracking-wider md:tracking-normal">
              Company
            </h3>
            <ul className="space-y-1.5 text-[12px] md:text-[11.5px]">
              {COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => onOpenInfoModal(item.key)}
                    className="text-text-muted hover:text-charcoal-main transition-colors py-0.5 text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-2.5">
            <h3 className="font-medium text-charcoal-main text-[11px] md:text-[12px] uppercase md:normal-case tracking-wider md:tracking-normal">
              Support
            </h3>
            <ul className="space-y-1.5 text-[12px] md:text-[11.5px]">
              {SUPPORT_LINKS.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => onOpenInfoModal(item.key)}
                    className="text-text-muted hover:text-charcoal-main transition-colors py-0.5 text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons Column */}
          <div className="space-y-2.5 col-span-1">
            <h3 className="font-medium text-charcoal-main text-[11px] md:text-[12px] uppercase md:normal-case tracking-wider md:tracking-normal">
              <span className="hidden md:inline">Our Social Platform</span>
              <span className="md:hidden">Social</span>
            </h3>
            <div className="flex flex-wrap items-center gap-2 pt-1 text-charcoal-main">
              {/* X */}
              <a
                aria-label="Visit Luma & Living on X"
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-6 md:h-6 border border-stone-400 md:border-stone-300 rounded-full md:rounded flex items-center justify-center hover:border-charcoal-main transition-colors"
              >
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                aria-label="Visit Luma & Living on Instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-6 md:h-6 border border-stone-400 md:border-stone-300 rounded-full md:rounded flex items-center justify-center hover:border-charcoal-main transition-colors"
              >
                <svg
                  aria-hidden="true"
                  className="w-3.5 h-3.5 md:w-3 md:h-3 stroke-[1.8]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Pinterest */}
              <a
                aria-label="Visit Luma & Living on Pinterest"
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-6 md:h-6 border border-stone-400 md:border-stone-300 rounded-full md:rounded flex items-center justify-center hover:border-charcoal-main transition-colors"
              >
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0a12 12 0 0 0-4.37 23.18c-.07-.95-.13-2.42.03-3.46l.94-4c-.24-.48-.44-1.18-.44-2.03 0-1.9 1.1-3.32 2.47-3.32 1.17 0 1.73.88 1.73 1.93 0 1.17-.75 2.93-1.13 4.56-.32 1.36.68 2.47 2.02 2.47 2.43 0 4.29-2.56 4.29-6.26 0-3.27-2.35-5.56-5.71-5.56-3.89 0-6.17 2.92-6.17 5.93 0 1.17.45 2.43 1.02 3.12.11.13.13.25.1.38l-.38 1.57c-.06.25-.2.31-.46.19-1.72-.8-2.8-3.31-2.8-5.33 0-4.34 3.16-8.33 9.1-8.33 4.78 0 8.5 3.4 8.5 7.95 0 4.74-2.99 8.56-7.14 8.56-1.39 0-2.7-.73-3.15-1.59l-.86 3.28c-.31 1.2-1.16 2.7-1.73 3.63A11.98 11.98 0 0 0 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                aria-label="Visit Luma & Living on LinkedIn"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-6 md:h-6 border border-stone-400 md:border-stone-300 rounded-full md:rounded flex items-center justify-center hover:border-charcoal-main transition-colors"
              >
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="pt-6 border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-text-subtle text-[11px]">
          <p>© 2025 Luma &amp; Living Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => onOpenInfoModal("Privacy Policy")}
              className="underline hover:text-charcoal-main transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenInfoModal("Terms of Service")}
              className="underline hover:text-charcoal-main transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
