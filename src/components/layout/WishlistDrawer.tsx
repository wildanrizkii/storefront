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
import type { Product } from "../../types/product";

export interface WishlistDrawerProps {
  open: boolean;
  onClose: () => void;
  items: Product[];
  count: number;
  onAddToCart: (productId: string) => void;
  onRemoveFromWishlist: (productId: string) => void;
  onClearWishlist: () => void;
}

export function WishlistDrawer({
  open,
  onClose,
  items,
  count,
  onAddToCart,
  onRemoveFromWishlist,
  onClearWishlist,
}: WishlistDrawerProps) {
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
        aria-label="Saved Wishlist"
      >
        <div className="flex-1 overflow-y-auto no-scrollbar">
          <SheetHeader className="pb-4 border-b border-[#ECE7DE] text-left">
            <SheetTitle className="font-serif-display text-2xl font-normal text-[#161412]">
              Wishlist ({count})
            </SheetTitle>
            <SheetDescription className="text-xs text-[#6B655D]">
              Pieces saved for room planning and design consultation.
            </SheetDescription>
          </SheetHeader>

          <div className="mt-5 space-y-4">
            {items.length === 0 ? (
              <div className="py-12 text-center space-y-3 border border-[#EAE4DA] rounded-xl bg-[#F7F4EE] p-6">
                <p className="font-serif-display text-lg text-[#161412]">
                  Your wishlist has no saved pieces yet
                </p>
                <p className="text-xs text-[#6B655D] leading-relaxed">
                  Tap the heart icon on any piece in the catalogue to save it for your room planning.
                </p>
                <div className="pt-2">
                  <Button
                    asChild
                    variant="primary"
                    size="sm"
                    onClick={onClose}
                  >
                    <Link href="/shop">Browse Catalogue</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <ul className="divide-y divide-[#ECE7DE]">
                  {items.map((item) => (
                    <li key={item.id} className="py-3.5 flex items-center gap-3.5">
                      <img
                        src={item.imageUrl}
                        alt={item.imageAlt}
                        width={64}
                        height={80}
                        className="w-16 h-20 object-cover rounded-md bg-[#EFECE6] shrink-0"
                      />
                      <div className="grow min-w-0">
                        <p className="text-[11px] text-[#6B655D]">
                          {item.category}
                        </p>
                        <Link
                          href={`/products/${item.id}`}
                          onClick={onClose}
                          className="text-[14px] font-medium text-[#161412] truncate block hover:underline"
                        >
                          {item.name}
                        </Link>
                        <p className="text-[13px] text-[#161412] mt-0.5">
                          ${item.price.toLocaleString("en-US")}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            type="button"
                            onClick={() => {
                              onAddToCart(item.id);
                            }}
                            className="text-[11px] font-medium text-[#161412] underline hover:text-black"
                          >
                            Move to Bag
                          </button>
                          <button
                            type="button"
                            onClick={() => onRemoveFromWishlist(item.id)}
                            className="text-[11px] text-[#6B655D] hover:text-[#161412]"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="pt-3 flex justify-end">
                  <button
                    type="button"
                    onClick={onClearWishlist}
                    className="text-[12px] text-[#6B655D] underline hover:text-[#161412]"
                  >
                    Clear all saved items
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {items.length > 0 && (
          <div className="pt-4 border-t border-[#ECE7DE] mt-4">
            <Button
              asChild
              variant="outline"
              size="md"
              className="w-full"
              onClick={onClose}
            >
              <Link href="/shop">Continue Exploring Catalogue</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
