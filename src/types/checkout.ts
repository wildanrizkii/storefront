export interface CheckoutItem {
  id: string;
  name: string;
  variant: string;
  quantity: number;
  unitPrice: number;
  price: number; // Unit price
  imageUrl: string;
}

export interface SavedAddress {
  id: string;
  label: string;
  recipient: string;
  street: string;
  cityStateZip: string;
  phone: string;
  isDefault: boolean;
}

export interface CheckoutTotals {
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
}

export type TimelineStageStatus = "completed" | "active" | "pending";

export interface TimelineStage {
  id: string;
  title: string;
  timeLabel: string;
  description: string;
  status: TimelineStageStatus;
}

export interface ConfirmationData {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  estimatedDelivery: string;
  deliveryTier: string;
  trackingReference: string;
  statusBadge: string;
  timelineStages: TimelineStage[];
  deliveryNotes: string;
  deliveryTags: string[];
  paymentMethod: {
    brand: string;
    last4: string;
    billedAmount: number;
  };
  careGuarantee: string[];
}
