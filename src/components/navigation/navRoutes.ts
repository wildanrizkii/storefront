export type NavSectionKey =
  | "Home"
  | "Shop"
  | "Collections"
  | "About"
  | "Contact";

export interface NavItem {
  key: NavSectionKey;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { key: "Home", label: "Home", href: "/" },
  { key: "Shop", label: "Shop", href: "/shop" },
  { key: "Collections", label: "Collections", href: "/collections" },
  { key: "About", label: "About", href: "/about" },
  { key: "Contact", label: "Contact", href: "/contact" },
];

export function getActiveNavSection(
  pathname: string | null | undefined
): NavSectionKey {
  if (!pathname || pathname === "/") {
    return "Home";
  }

  const normalized = pathname.toLowerCase();
  if (normalized.startsWith("/collections")) {
    return "Collections";
  }
  if (normalized.startsWith("/about")) {
    return "About";
  }
  if (normalized.startsWith("/contact")) {
    return "Contact";
  }
  if (
    normalized.startsWith("/shop") ||
    normalized.startsWith("/products") ||
    normalized.startsWith("/cart") ||
    normalized.startsWith("/checkout") ||
    normalized.startsWith("/order-confirmation")
  ) {
    return "Shop";
  }

  return "Home";
}
