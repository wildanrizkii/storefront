import type {
  CheckoutItem,
  SavedAddress,
  CheckoutTotals,
  ConfirmationData,
} from "../types/checkout";

export const CHECKOUT_DEFAULT_ITEMS: CheckoutItem[] = [
  {
    id: "aalto-sofa",
    name: "Aalto Sofa",
    variant: "Warm Boucle · 3-Seater",
    quantity: 1,
    unitPrice: 2480,
    price: 2480,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDACcPXVOyolWe8y8ZOPoU9CwPgzaFVteo--6FhQJM4L0fsqoSZr0UaNIQRlCs0JOnJDLh8lE1L6qYiPq5OOKMGwWEPtH8zpEwyIkrPzgyV_4iitrGZe90xI3PziM96S1QtqIc4r931DYTiKYfxIsIYMlL28zv92SsCWaeve7-LO2KBYBtEvKqCLAoGi7S-DOw3iqa_Bd_0_bCqo7-isE7nILuHKioIOL19ZT4lvL3n",
  },
  {
    id: "hearth-dining-table",
    name: "Hearth Dining Table",
    variant: "Natural Solid Oak · 72 in",
    quantity: 1,
    unitPrice: 1860,
    price: 1860,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6YuugqZEPvKLDQY-ObjAapziKoLkcZxg26_A_UZwhsPatyrhfoXJFKN8_-UBAst2GIlWWEc1ba3yEtq1Vh_oaEbCLq2hd6GRwOlm9XMJ0jxxQLVl39watirYRtzVmhKt6AY8SF4BLjejjq0J7C4mZrLkz3HDYs8ah0SswVLJK_rnAgyOa3cvX1fFI_oQyg9kk3FclRgXkWwrUQPGNmkhpZ6jlElHVZomohHkx4RBv",
  },
  {
    id: "hue-wall-sconce",
    name: "Hue Wall Sconce",
    variant: "Brushed Brass · Set of 2",
    quantity: 2,
    unitPrice: 210,
    price: 210,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHHaXEg5m51kXE4E6bQ-cQAr8SbeK_Ispk8Edkd84Pro6Xr7RCQS7KTucwrvJmwXfQ1utKiUZnD1aZzT-iM6-ZEghfQsNnvXi1_NTdBoSPXxToavgiRvpy-p1A4GWPFYH-fSYoQ32SeNncXpaY21ywHGtp71qOfAVq4x3m-liNygteiwjHYnmdM9vEIf7MXu3xe95GjMCN2ZAbmkrQkve9ftsL6Sbno7esJ_crr_bs",
  },
];

export const CHECKOUT_SAVED_ADDRESSES: SavedAddress[] = [
  {
    id: "home-default",
    label: "Priya Nair - Home",
    recipient: "Priya Nair",
    street: "221 Birchwood Lane, Apt 4B",
    cityStateZip: "Austin, TX 78704",
    phone: "(512) 555-0148",
    isDefault: true,
  },
  {
    id: "office-alt",
    label: "Priya Nair - Office",
    recipient: "Priya Nair",
    street: "900 Congress Ave, Suite 220",
    cityStateZip: "Austin, TX 78704",
    phone: "(512) 555-0148",
    isDefault: false,
  },
];

export const QUICK_DELIVERY_TAGS = [
  "Leave at door",
  "Call on arrival",
  "Gated community",
  "No elevator",
];

export const DEFAULT_DELIVERY_NOTE =
  "Gate code is 4471. Please call when 15 minutes out - third floor, no elevator, so please bring a dolly.";

export const DEFAULT_PROMO_CODE = "WELCOME10";
export const ESTIMATED_TAX_AMOUNT = 278.46;

export function calculateCheckoutTotals(
  items: CheckoutItem[],
  promoCode: string
): CheckoutTotals {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const normalizedPromo = promoCode.trim().toUpperCase();
  const discount = normalizedPromo === "WELCOME10" ? Math.round(subtotal * 0.1) : 0;
  const shipping = 0; // Free white-glove shipping
  const tax = ESTIMATED_TAX_AMOUNT;
  const total = Number((subtotal - discount + shipping + tax).toFixed(2));

  return {
    subtotal,
    discount,
    shipping,
    tax,
    total,
  };
}

export const CHECKOUT_DEFAULT_SUMMARY: CheckoutTotals = calculateCheckoutTotals(
  CHECKOUT_DEFAULT_ITEMS,
  DEFAULT_PROMO_CODE
);

export const ORDER_CONFIRMATION_DATA: ConfirmationData = {
  orderNumber: "LL-94821",
  customerName: "Priya",
  customerEmail: "priya.nair@email.com",
  estimatedDelivery: "Oct 24 - Oct 27, 2026",
  deliveryTier: "White-Glove Included",
  trackingReference: "WGL-883920-ATX",
  statusBadge: "Preparing in Workshop",
  timelineStages: [
    {
      id: "stage-confirmed",
      title: "Order Confirmed & Payment Verified",
      timeLabel: "Today, 2:45 PM",
      description: "Payment of $4,562.46 processed via Visa ending in 4242.",
      status: "completed",
    },
    {
      id: "stage-workshop",
      title: "Artisan Inspection & Packaging",
      timeLabel: "Current Stage",
      description:
        "Solid oak frames & boucle upholstery undergo final hand-buffing and moisture check.",
      status: "active",
    },
    {
      id: "stage-courier",
      title: "White-Glove Courier Scheduled",
      timeLabel: "Est. Oct 23",
      description:
        "Local logistics partner will text 24 hours prior to confirm the 2-hour appointment window.",
      status: "pending",
    },
    {
      id: "stage-assembly",
      title: "Room of Choice Delivery & Setup",
      timeLabel: "Est. Oct 24 - 27",
      description:
        "Two-person crew will assemble furniture in your room of choice and remove all packaging debris.",
      status: "pending",
    },
  ],
  deliveryNotes: DEFAULT_DELIVERY_NOTE,
  deliveryTags: ["Call on arrival", "Gated community", "No elevator"],
  paymentMethod: {
    brand: "VISA",
    last4: "4242",
    billedAmount: 4562.46,
  },
  careGuarantee: [
    "10-year warranty on all solid FSC-certified hardwood frames",
    "Free 30-day in-home trial period with hassle-free returns",
    "Complimentary white-glove packaging recycling & disposal",
  ],
};
