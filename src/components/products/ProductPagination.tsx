"use client";

import React from "react";

export interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function ProductPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ProductPaginationProps) {
  const handleSelectPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
    const catalogEl = document.getElementById("catalog-section");
    catalogEl?.scrollIntoView({ behavior: "smooth" });
  };

  // Match the Stitch reference pagination layout: 1, 2, 3, ..., 8 (and surface active page if 4..7 is selected)
  const buildPageTokens = (): (number | "ellipsis")[] => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, idx) => idx + 1);
    }
    if (currentPage <= 3) {
      return [1, 2, 3, "ellipsis", totalPages];
    }
    if (currentPage >= totalPages - 1) {
      return [1, "ellipsis", totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, "ellipsis", currentPage, "ellipsis", totalPages];
  };

  const tokens = buildPageTokens();

  return (
    <nav
      aria-label="Catalog Pagination"
      className="flex items-center justify-center gap-1.5 md:gap-2 mt-10 md:mt-16 pt-6 md:pt-0 border-t md:border-t-0 border-border-light text-[12px] md:text-[13px]"
      data-purpose="pagination-controls"
    >
      {/* Previous */}
      <button
        type="button"
        onClick={() => handleSelectPage(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Previous page"
        className="w-9 h-9 md:w-8 md:h-8 rounded-full flex items-center justify-center text-text-subtle hover:text-charcoal-main hover:bg-[#EFECE6] disabled:opacity-40 transition-colors"
      >
        {/* Desktop left arrow */}
        <svg
          aria-hidden="true"
          className="hidden md:inline w-3.5 h-3.5 stroke-[2]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <line x1="19" x2="5" y1="12" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        {/* Mobile chevron */}
        <svg
          aria-hidden="true"
          className="md:hidden w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {tokens.map((token, idx) => {
        if (token === "ellipsis") {
          return (
            <span
              key={`ellipsis-${idx}`}
              aria-hidden="true"
              className="w-6 h-8 flex items-center justify-center text-text-subtle"
            >
              ...
            </span>
          );
        }

        const isActive = token === currentPage;
        return (
          <button
            key={token}
            type="button"
            onClick={() => handleSelectPage(token)}
            aria-current={isActive ? "page" : undefined}
            aria-label={`Page ${token}`}
            className={
              isActive
                ? "w-8 h-8 md:w-7 md:h-7 rounded-full bg-[#1C1A17] text-white flex items-center justify-center font-medium text-[12px]"
                : "w-8 h-8 md:w-7 md:h-7 rounded-full text-charcoal-main hover:bg-[#E9E3DA] flex items-center justify-center font-medium md:font-normal text-[12px] transition-colors"
            }
          >
            {token}
          </button>
        );
      })}

      {/* Next */}
      <button
        type="button"
        onClick={() => handleSelectPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
        className="w-9 h-9 md:w-8 md:h-8 rounded-full flex items-center justify-center text-charcoal-main hover:text-black hover:bg-[#EFECE6] disabled:opacity-40 transition-colors"
      >
        {/* Desktop right arrow */}
        <svg
          aria-hidden="true"
          className="hidden md:inline w-3.5 h-3.5 stroke-[2]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <line x1="5" x2="19" y1="12" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
        {/* Mobile chevron */}
        <svg
          aria-hidden="true"
          className="md:hidden w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </nav>
  );
}
