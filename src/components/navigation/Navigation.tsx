"use client";

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { CATEGORIES } from "../../data/categories";
import { getActiveNavSection, NAV_ITEMS, type NavSectionKey } from "./navRoutes";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";

export type { NavSectionKey };

export interface NavigationProps {
  mobileMenuOpen: boolean;
  onCloseMobileMenu: () => void;
}

export function Navigation({
  mobileMenuOpen,
  onCloseMobileMenu,
}: NavigationProps) {
  const pathname = usePathname();
  const activeSection = getActiveNavSection(pathname);

  const linkRefs = useRef<Partial<Record<NavSectionKey, HTMLAnchorElement | null>>>({});
  const [indicator, setIndicator] = useState<{
    left: number;
    width: number;
    ready: boolean;
  }>({ left: 0, width: 0, ready: false });

  const updateIndicator = useCallback(() => {
    const activeEl = linkRefs.current[activeSection];
    if (!activeEl) return;
    setIndicator({
      left: activeEl.offsetLeft,
      width: activeEl.offsetWidth,
      ready: true,
    });
  }, [activeSection]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    document.fonts?.ready.then(updateIndicator).catch(() => {});
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseMobileMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen, onCloseMobileMenu]);

  return (
    <>
      {/* Desktop Primary Navigation */}
      <nav
        aria-label="Primary"
        className="hidden md:flex relative items-center gap-6 lg:gap-10 text-[14px] font-medium tracking-wide"
        data-purpose="primary-navigation"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.key;
          return (
            <Link
              key={item.key}
              ref={(el) => {
                linkRefs.current[item.key] = el;
              }}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`relative py-1 whitespace-nowrap transition-colors ${
                isActive
                  ? "text-[#161412]"
                  : "text-[#6B655D] hover:text-[#161412]"
              }${
                isActive && !indicator.ready
                  ? " after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#161412]"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          );
        })}

        {indicator.ready && (
          <motion.span
            aria-hidden="true"
            initial={false}
            animate={{
              x: indicator.left,
              scaleX: indicator.width,
            }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 32,
            }}
            style={{ originX: 0 }}
            className="pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-px bg-[#161412]"
          />
        )}
      </nav>

      {/* Mobile Navigation Drawer */}
      <Sheet
        open={mobileMenuOpen}
        onOpenChange={(open) => {
          if (!open) onCloseMobileMenu();
        }}
      >
        <SheetContent
          side="left"
          hideCloseButton
          className="w-[84%] max-w-xs p-5 bg-[#FAF8F4] border-r border-[#ECE7DE] flex flex-col justify-between overflow-y-auto no-scrollbar"
          aria-label="Mobile navigation menu"
        >
          <span className="sr-only">
            <SheetTitle>Navigation Menu</SheetTitle>
            <SheetDescription>Browse catalogue sections and rooms</SheetDescription>
          </span>

          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#ECE7DE]">
              <span className="font-serif-display text-2xl font-bold text-[#161412]">
                Luma{" "}
                <span className="italic font-normal text-[#8F6232]">
                  &amp;
                </span>{" "}
                Living
              </span>
              <button
                type="button"
                onClick={onCloseMobileMenu}
                aria-label="Close mobile menu"
                className="min-w-11 min-h-11 inline-flex items-center justify-center rounded-full text-[#161412] hover:bg-[#EFECE6]"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 stroke-current stroke-[1.75]"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="mt-5">
              <p className="text-[11px] uppercase tracking-wider text-[#6B655D] font-medium mb-2">
                Menu
              </p>
              <ul className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.key;
                  return (
                    <li key={item.key}>
                      <Link
                        href={item.href}
                        onClick={onCloseMobileMenu}
                        aria-current={isActive ? "page" : undefined}
                        className={`w-full text-left px-3 py-2.5 rounded-lg text-[14px] min-h-11 flex items-center justify-between transition-colors ${
                          isActive
                            ? "bg-[#161412] text-white font-medium"
                            : "text-[#161412] hover:bg-[#EFECE6]"
                        }`}
                      >
                        <span>{item.label}</span>
                        <span aria-hidden="true" className="text-xs opacity-70">
                          ›
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-[#ECE7DE]">
              <p className="text-[11px] uppercase tracking-wider text-[#6B655D] font-medium mb-2">
                Shop by Room &amp; Category
              </p>
              <div className="grid grid-cols-2 gap-2">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={
                      cat.id === "All"
                        ? "/shop"
                        : `/shop?category=${encodeURIComponent(cat.id)}`
                    }
                    onClick={onCloseMobileMenu}
                    className="px-3 py-2.5 rounded-lg text-[12px] min-h-11 flex items-center font-medium bg-[#EFECE6] text-[#161412] hover:bg-[#E5DDD3] transition-colors"
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#ECE7DE] mt-6 text-[12px] text-[#6B655D] space-y-1">
            <p className="font-medium text-[#161412]">
              Copenhagen &amp; Portland
            </p>
            <p>Mon-Sat, 10:00-18:00</p>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
