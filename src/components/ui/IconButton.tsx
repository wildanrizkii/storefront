"use client";

import React from "react";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  badgeCount?: number;
  badgeVariant?: "desktop-warm" | "mobile-dark";
}

export function IconButton({
  label,
  badgeCount,
  badgeVariant = "desktop-warm",
  className = "",
  type = "button",
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={
        badgeCount !== undefined && badgeCount > 0
          ? `${label} (${badgeCount} items)`
          : label
      }
      className={`relative inline-flex items-center justify-center min-w-[44px] min-h-[44px] md:min-w-[32px] md:min-h-[32px] p-1.5 text-charcoal-main hover:text-text-muted active:scale-95 transition-all rounded-full ${className}`.trim()}
      {...props}
    >
      {children}
      {badgeCount !== undefined && badgeCount > 0 && (
        <span
          aria-hidden="true"
          className={`absolute top-1 right-1 md:-top-0.5 md:-right-0.5 w-4 h-4 md:w-3.5 md:h-3.5 text-[9px] font-medium rounded-full flex items-center justify-center text-white ${
            badgeVariant === "mobile-dark"
              ? "bg-charcoal-main md:bg-badge-sand"
              : "bg-badge-sand"
          }`}
        >
          {badgeCount}
        </span>
      )}
    </button>
  );
}
