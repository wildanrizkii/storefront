"use client";

import React from "react";
import Link from "next/link";
import type { CategoryFilter } from "../../types/product";

export interface BreadcrumbProps {
  activeCategory: CategoryFilter;
  onResetCategory: () => void;
}

export function Breadcrumb({
  activeCategory,
  onResetCategory,
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="text-[12px] text-text-subtle tracking-normal mb-2 md:mb-5"
    >
      <ol className="inline-flex items-center flex-wrap gap-1.5">
        <li>
          <Link
            href="/"
            className="hover:text-charcoal-main transition-colors"
          >
            Home
          </Link>
        </li>
        <li aria-hidden="true" className="text-text-subtle">
          /
        </li>
        <li>
          {activeCategory === "All" ? (
            <span aria-current="page" className="text-charcoal-main md:text-text-muted font-medium md:font-normal">
              Shop
            </span>
          ) : (
            <button
              type="button"
              onClick={onResetCategory}
              className="hover:text-charcoal-main transition-colors"
            >
              Shop
            </button>
          )}
        </li>
        {activeCategory !== "All" && (
          <>
            <li aria-hidden="true" className="text-text-subtle">
              /
            </li>
            <li>
              <span aria-current="page" className="text-charcoal-main font-medium">
                {activeCategory}
              </span>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}
