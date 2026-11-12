"use client";

import React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import { Button } from "../ui/Button";

export interface AccountDrawerProps {
  open: boolean;
  onClose: () => void;
  wishlistCount: number;
  cartCount: number;
}

export function AccountDrawer({
  open,
  onClose,
  wishlistCount,
  cartCount,
}: AccountDrawerProps) {
  return (
    <Sheet
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) onClose();
      }}
    >
      <SheetContent
        side="right"
        className="w-[92%] sm:w-110 sm:max-w-md p-6 gap-0 flex flex-col justify-between"
        aria-label="Atelier Member Account"
      >
        <div className="flex-1 overflow-y-auto no-scrollbar">
          <SheetHeader className="pb-4 border-b border-[#ECE7DE] text-left">
            <SheetTitle className="font-serif-display text-2xl font-normal text-[#161412]">
              Atelier Account
            </SheetTitle>
            <SheetDescription className="text-xs text-[#6B655D]">
              Trade program, client concierge, and order reservations.
            </SheetDescription>
          </SheetHeader>

          <div className="mt-5 space-y-4 text-[13px] text-[#6B655D] leading-relaxed">
            <p className="text-[#161412] font-medium">
              Luma &amp; Living Trade &amp; Client Portal
            </p>
            <p>
              Save room boards, track white-glove freight deliveries, and request complimentary fabric, oak, and ceramic glaze swatches.
            </p>
            <div className="p-4 rounded-xl bg-[#EFECE6] border border-[#ECE7DE] space-y-2 text-[12px]">
              <p className="font-medium text-[#161412]">
                Catalogue Preview Mode
              </p>
              <p>
                Your wishlist ({wishlistCount} items) and shopping bag ({cartCount} items) are saved locally in this browser session.
              </p>
            </div>
            <div className="pt-2">
              <Button
                asChild
                variant="primary"
                size="md"
                className="w-full"
                onClick={onClose}
              >
                <Link href="/shop">Open Full Catalogue</Link>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
