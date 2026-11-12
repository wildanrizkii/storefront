import { PRODUCTS } from "./products.ts";
import type { Product } from "../types/product.ts";

export interface PdpGalleryImage {
  id: string;
  alt: string;
  url: string;
  objectFit: "contain" | "cover";
}

export interface PdpColorOption {
  id: string;
  name: string;
  hex: string;
}

export interface PdpReview {
  id: string;
  author: string;
  initial: string;
  stars: number;
  title: string;
  body: string;
}

export interface PdpRecommendationItem {
  id: string;
  productId: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  saleBadge?: string;
  desktopImageUrl: string;
  mobileImageUrl: string;
  showOnDesktop: boolean;
  showOnMobile: boolean;
}

export const HOLLIS_PDP_DEFAULTS = {
  breadcrumbTitle: "Hollis 3-Seater Sofa",
  displayTitle: "Hollis 2-Seater Sofa",
  subtitle: "Hand-finished oak frame with a bouclé wool blend cover.",
  price: 2140,
  originalPrice: 2450,
  saveBadge: "Save 13%",
  desktopMainImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBceJwhjFDYeJrfwlLel4zqpte2JshwmN1yvJ1OTDlvb18qu2dyP1tpOAPu5kkcYGkhLOBAmg7owBsoR_Wiz8GIdglD5shTYKFcjy-V3agIFcjEL1vjC5755wf-LM4KRn7f-UTzZ2Is-Czgp8ajDL7uAXjwp05BItBKwio7nYYVW2j29AwbOHm5vVQYF7Rpbh72RyqowT1mbeftpG9WFheZBi8CZxOgWmTUtQVj_gIL",
  mobileMainImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBXfjl9m4Umd7Zu-6O59tbeqk-0hPLhvSI13WA8w3A5p4ALtHINn1GLIJMOnhSiPrvizA2InGW8K_jxbNuTJycP6wDDE3ptNPJHtMs13-0OImdMR9V19rKLlDa-UaxysMtEfrl8rs4yWiKD8MLRQcthK9qqaRtrhzE8vJzt8BRxiKwL4QyXQIfYpKgavpxB5kLOf92sf2Vn0n6xtjDj5k0R2cPjgdxS0bm4OoIddMR5",
  desktopGallery: [
    {
      id: "studio-front",
      alt: "Hollis Sofa Studio front angle",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMuJwj4pfctr_UbPzgq7LGNlEcoRfZeznP2qibGcyteenJ3i8O70yWGNiPeDCk3IPpbySV2mrPzY4aMW95fKA6QgFjuxfqAbcNYbRM7RO_Fvli1LrbBxJwQcsJWag6G4YiI01G8W9MbFCe5vZJsDXYVFibzhNKu4coDlE0dgLxz61AyGMyzZL4EiX4e4bqJWMQF8BmSergCPpyI63jfXKETIdgQMkBVTDV1A_3kmkn",
      objectFit: "contain" as const,
    },
    {
      id: "living-room",
      alt: "Hollis Sofa in living room interior context",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkYU25pDZY5S2ZmEsH9hs4CmW8zUCJDS8v42ETCneU109aLnEXrfWKseJ7yoZl4KjBBmPOE2Hd9DezpH6E20IFoGVghMhSFIzU3qzr-nXJFGeNXEBurDyIf5L1ZG31DyvoQPFWl7cpfnebKCCaD7nkUOMLDvmJntlffzqDSGT6p3TKv1lhxaHPJn5Usznf-ryir3mRILidOYCZGyIwz-DOo2QhqTo4KSBfZjREF0qX",
      objectFit: "cover" as const,
    },
    {
      id: "armrest-closeup",
      alt: "Bouclé fabric and oak wood armrest closeup",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtm0X0b1yvvp4nXhC4dQDAgEkp7PJ3FZzpA1oPMcXmivcZNlFrfwmnYkxDa8073vtBei2tKDh4kwctEZtDId1g1y5DrtO97SQ2wTcrD7Y4e5eJCgA6hKzXKSD_cyoxl8VneSlIt1iEMEZ6Hqsld77UwkLvBrYMn5Wzn0sLJpogSogZ8OmjjvzZ4lWJngsnXj69lIiNnt5Wjd-_PvXrZVSThT-3zo-QFwOzrgObEiJd",
      objectFit: "cover" as const,
    },
    {
      id: "side-profile",
      alt: "Sofa side angle profile",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1WD6YVFdSY38pbP5FefNGr-gFQgMV10D7CoBvL4HrGKtPBKwGwIatAeUpIlFEnj9NJSvQsbHL5gAGYXeggllHwSnU-m-shxGzh0jlT-wHKbeSgZ_9F5g0DTnTFmy6QpAHc1q6AVjPTzwfjAJaDk6R6brKh95Xh5j5Ra8_gRN0XEjv-a30eMLWKWFjPUAidyp1TB1CIWUDUP3eRTly26MM4-6jJU5-rh7b5oQgKDHD",
      objectFit: "cover" as const,
    },
  ],
  mobileGallery: [
    {
      id: "mobile-main",
      alt: "Main living room angle",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBi9yaaKgtrD3T7VpYTMQPyt_plypqA1Xvx_izB7RjIBKf8Mj4nFDgDf60NDM9vZ8dQCXH_3GgBVS2qhzMTUC0nM97-y72OwHwpz2wDsg8cfrAiYFoogmUPkIdV-rqrIrsKr46NtYukaKvizs_e2m4LgJ0qFOjsfpqdxYx7obUeva1_0sCXELwsHh4Yq0W-_qIiXMyTXwfRscsBHnnJB4vqgNJItpkcMjKmiXWryFCl",
      objectFit: "cover" as const,
    },
    {
      id: "mobile-wide",
      alt: "Wide living room setup",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9mAH-7Q8Z2Ha-HOgRFCBDjDtlEKWKVabgh-PsGuI3-QaiI-b7np9CZAsY47XX9Tie47G1722UJDecP4aqnE2ndx-9rGD3zAJrZLW1vY9nCSEdSIMWO9tVJyhwyzRoA7G95THbNzai7o5XqWo8qQDJAyuNoPBMATuq3ThKfir1_yBmX8SppxyRtf8ivVTWWGtU1gRgTAfhellO8Xzubq1gE0KzfiVJ-gmTAL-tmB1P",
      objectFit: "cover" as const,
    },
    {
      id: "mobile-texture",
      alt: "Bouclé fabric texture close up",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT6cT2hM3FnHI4Ln2rpnUNB8FasTiYjXNciutm2Nq0tEYXynchLvhPto7Owx4yZJpFvW0IbaSEJwYAqn7qE9H9wAM4MB2jI-5kc7mGzPEwMzUjDHowJA1yPVtqZkJPw1B3J3qr9DsUtj1aMcOqSWkfR95PGiBjze6lq0TkxlEiuhowZVts8VTRvsmOUOkWUm_CavNKaP8fL6rvasRbvqgGtmSnfjQ-11FKzbR9icEj",
      objectFit: "cover" as const,
    },
    {
      id: "mobile-corner",
      alt: "Corner profile view",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAywlFVi_PQweccP_XAUAFJCpGSIl4fRLSbOJ7nOcoBeGq8q4h4PIEC-YTh_WXAT-wR6ajCoP40PSFNVWJMuDRARY5hclcD12EeZ1CR2bJcRY5kQBrIZW3iBG4w0DN02_gIaFrAimVLws5gfA_CiIuvGZocsyiqH8OY4AQ2yH8BdRuXSycAEK1-9qEJJH1IxhiiYrhfR74NQMgAwjjHdcPabfO2aJP-Z8aclTnbvQCm",
      objectFit: "cover" as const,
    },
  ],
  colors: [
    { id: "caramel", name: "Warm Caramel", hex: "#8E5E3B" },
    { id: "charcoal", name: "Charcoal Black", hex: "#1A1A1A" },
    { id: "cream", name: "Warm Bouclé Cream", hex: "#E5DFD6" },
  ] as PdpColorOption[],
  sizes: ["2-seater", "3-seater", "Corner"],
  valueBullets: [
    "Solid oak frame, FSC-certified",
    "Removable, washable covers",
    "Free delivery & white-glove setup",
    "10-year frame warranty",
  ],
  descriptionParagraphs: [
    "The Hollis sofa is built around a kiln-dried oak frame and supported by a webbing of interlaced elastic straps for a seat that holds its shape for years, not seasons.",
    "Deep, feather-wrapped foam cushions sit inside a removable, machine-washable bouclé cover, so the sofa softens with use without losing structure.",
  ],
  specs: [
    { label: "Frame", value: "Solid oak, FSC-certified" },
    { label: "Cushion fill", value: "High-resilience foam & feather" },
    { label: "Cover", value: "100% wool bouclé, removable" },
    { label: "Assembly", value: "Legs attach in minutes" },
  ],
  histogram: [
    { stars: 5, percentage: 78 },
    { stars: 4, percentage: 16 },
    { stars: 3, percentage: 4 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ],
};

export const PDP_REVIEWS: PdpReview[] = [
  {
    id: "maya-r",
    author: "Maya R.",
    initial: "M",
    stars: 5,
    title: "Worth every penny",
    body: "Sturdy, beautifully made, and the colour is exactly as pictured. It took two of us about ten minutes to assemble the legs.",
  },
  {
    id: "theo-b",
    author: "Theo B.",
    initial: "T",
    stars: 5,
    title: "Our living room finally feels finished",
    body: "The bouclé cover is soft but doesn't pill. Delivery team was careful and tidy, genuinely impressed.",
  },
  {
    id: "priya-n",
    author: "Priya N.",
    initial: "P",
    stars: 4,
    title: "Lovely sofa, slow delivery",
    body: "The sofa itself is excellent and very comfortable. Shipping took a little longer than the estimate, but support kept us updated.",
  },
];

export const PDP_RECOMMENDATIONS: PdpRecommendationItem[] = [
  {
    id: "rec-hollis",
    productId: "hollis-3-seater-sofa",
    name: "Hollis 2-Seater Sofa",
    category: "Sofas",
    rating: 4.8,
    reviewCount: 36,
    price: 2140,
    desktopImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoc9ht44B6l3Q6Xua33rGqiCb7pb4nbK19M9iq9SRZsvXtNAFHGjgmcCUODJetu9G2D07s2tUTcZOK-xqanFB8zEm6emTdiyZVpAiwUsxCSTCduryP4i3ko2nEkDrbAh4b-Fl2pIJhINUJSCAd2LYNxgQzO9h8rwcwV0XWdjSbVh6EIUNJgQOESSq-GgJz35aK1qdJ2yyrQxVCOO_HQ9d2JGs4ONgKKVHYmXOremnq",
    mobileImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBp2_szKn_jMGB_C1F0JIj1yWgNk-n74_ohA7exofCi4BQ8ACfHVeFbS0EAGW0159JitgJwGJwhBLA8-o2EX5GDe-iLz3yYkK0XzdaYGuJsJ4rNolSL-kEUext6tXBnNgCvegSQksnchHVOn_Kh7EovGVD6_eNAcQJVykrDMWx5crnK9z3uxwK_o2Zfpih-ClWK8Eb0935ImXiyFJm279aaJhB7naF1vZc2Y8pcASKU",
    showOnDesktop: true,
    showOnMobile: false,
  },
  {
    id: "rec-marlow",
    productId: "marlow-lounge-chair",
    name: "Marlow Lounge Chair",
    category: "Chairs",
    rating: 4.6,
    reviewCount: 21,
    price: 890,
    originalPrice: 1050,
    saleBadge: "-15%",
    desktopImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAT0SdS_RSE0NymLqOz-O5j9RcMFjqnu0LY1LvnvXetXkknGV99abdqJJfSu0CenFtSMhd4ROS87RLPmSms6NnxOO1CNFqMXj5AQnWlHcq9U7rtJV8a1beBUyQp45Ss97ygCjjyWXiloPTXvYF3qX0Ygfu-QsTs1Rs-LvdeOHpXCrF6RsoWSqGzBITL7YhOO5oTgkPoDB-Xa2Se_8MYL2muirj-QwLIIArESbnS7pia",
    mobileImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuByhE2vkygmlmNXmzE2g0S2lY5c9LekYiBnP_pnPC5-zaYseBEV8ILMQvk4iDGJXQq-ruAE3JWGjF5JPOrPwZGgyW897-d6Kn-ZWxAoFJRERgjEqsX9p_LONN00iU3q6-wxLP2SFmGUxNp_2E6EN87fM8lDPQM_ibEmDSOUtMPEb2bRG3bWdNPgOLg1THy4zWFRIJURt3OtQR6GL2VYyXx9RJT-Hsh4V0uBWE7vSSw9",
    showOnDesktop: true,
    showOnMobile: true,
  },
  {
    id: "rec-bessen",
    productId: "bessen-oak-coffee-table",
    name: "Bessen Oak Coffee Table",
    category: "Tables",
    rating: 4.7,
    reviewCount: 48,
    price: 640,
    desktopImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtA7yqrk8RO50IQ-UoR3KGZe0FXmpM_7D9BxkkVmsJXDqXExl0C_fLuRM_94uBzB1IHiWJ8LkCSXUF9HrMiNI3Sl7e_JoQU9zC1dp313sOYzQr9fdinEbkmtag0XQth6GWfbwRhO0nDFoPqWj5ud7u6opvgl-7oz4-XISDlr3CbQT2pO-43ZdBB-Nxen32QsUR3kErzwc9XNQ3w7ipNbtFNdzRV7-KkpfomrjnHiVj",
    mobileImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQFAeZ6JIYDHg104zQefqw0CfJcxbkGZ6btGtkkx0SI1bu_jVnukC39f176NLlTL3mgkYB0eC6Oz--f7cdeqEXBXUnU9uSCrs-6TeeVWhEsAM_tFC9IJU3p5GBAH6OXYBOBWKfD-WUxNyHyEqWOYodTC1LbduOHl9CWLR-N95lsWuXiOG-CpmttMBMAh217x_hrdH3ZUgZ8A3IgYAyeaEuyIJxnywtGep1ZAG8yuMq",
    showOnDesktop: true,
    showOnMobile: true,
  },
  {
    id: "rec-alder",
    productId: "alder-ceramic-table-lamp",
    name: "Alder Ceramic Table Lamp",
    category: "Lighting",
    rating: 4.9,
    reviewCount: 12,
    price: 210,
    desktopImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdu84bmIirDpWGAvShhubZvfMyk1QSnIO0rUKQV7DnIeng-zEW5JKL9U39a1Ky0ApJcjCKsfOXiIHitkC9T0L7pBvYQfimrgK3KlHk-3j4WyoK8vnRIwUS2_ebJm6SIJjtquVFxmedjr6iqAVuH-PFNpF8OZ93k7DzlTo1VVrmaQlixzS-Ziz7AET9Cw8HZrBjCmGg9GC0LSVo_eGu8hRUD3eu-sKbBoGUMAIMk_uo",
    mobileImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCa-drQpKF1695n1uJGifbhRZ_6irm5UmYAx4dNjPPccfGu-fl9MJ37AQSC9WffvUuc7rH14Q6zg-21f9qjSQlrN8Xlgug-bFm81p2nb_1UWp_mE1UezFd1V7AxMkXe1k1r8S-q2ffvfTRXviY2N02oBbBWqSj8yUk4dLiO1O7NKTQWD3PJSfCjK_kCwsc91PjFfc7hVh2qndjDgo4-aWvm_7xXfkD9IbEXDeJ-ULth",
    showOnDesktop: true,
    showOnMobile: true,
  },
  {
    id: "rec-petra",
    productId: "petra-rattan-accent-chair",
    name: "Petra Rattan Accent Chair",
    category: "Chairs",
    rating: 4.3,
    reviewCount: 14,
    price: 430,
    desktopImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2qzS04PRosbKza2BFr4-WmQ7nN5sqoWeGNsc99EqAT8fx-FQ1w7M5FwrjfwBvM85Na7AoV6wj5Bt0Liq98hcnvHmgeaRgMikOeDmT6wxgR_XE5hiROYKfM6-tfWDriq1BjDhHo35GfzWHrUK-1m2LyxBO3jzOt4hw-znzJE6M9YvJGWVoapZAbAe-s5Gbsqm3mDsntqbhVE5By4CWmlP7EjMEIyE8Dd6qLDJGMOjO",
    mobileImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5wyvNglYD1RYib_Y_IOl71FnY52AzGs285yKYnTjWPHTDPSgqTbGjdbF6Rgjd5QDHUMxY-zDKck-Z_41BLYwSPJhelf8e3BkAMmulJ8mgSL3uRGxVwvdRBdznFYRxaOqg9w_BaTciF_WOMyyJu08v0vl1O_3Y50KX4bfHDx8PKz9b0eIgE4xqR88Lcrs1x4E3JKDh9d6FCTgICtDiariWom0P1Dd3fSi7WNwhLxTu",
    showOnDesktop: false,
    showOnMobile: true,
  },
];

export function getProductDetail(productId: string) {
  const baseProduct: Product =
    PRODUCTS.find((p) => p.id === productId) ?? PRODUCTS[0];

  const isHollis = baseProduct.id === "hollis-3-seater-sofa";

  return {
    product: baseProduct,
    breadcrumbTitle: isHollis
      ? HOLLIS_PDP_DEFAULTS.breadcrumbTitle
      : baseProduct.name,
    displayTitle: isHollis
      ? HOLLIS_PDP_DEFAULTS.displayTitle
      : baseProduct.name,
    subtitle: isHollis
      ? HOLLIS_PDP_DEFAULTS.subtitle
      : baseProduct.description,
    price: baseProduct.price,
    originalPrice: isHollis
      ? HOLLIS_PDP_DEFAULTS.originalPrice
      : baseProduct.originalPrice,
    saveBadge: isHollis
      ? HOLLIS_PDP_DEFAULTS.saveBadge
      : baseProduct.saleBadge,
    desktopMainImage: isHollis
      ? HOLLIS_PDP_DEFAULTS.desktopMainImage
      : baseProduct.imageUrl,
    mobileMainImage: isHollis
      ? HOLLIS_PDP_DEFAULTS.mobileMainImage
      : baseProduct.mobileImageUrl,
    desktopGallery: isHollis
      ? HOLLIS_PDP_DEFAULTS.desktopGallery
      : [
          {
            id: "main",
            alt: baseProduct.imageAlt,
            url: baseProduct.imageUrl,
            objectFit: "cover" as const,
          },
          ...HOLLIS_PDP_DEFAULTS.desktopGallery.slice(1),
        ],
    mobileGallery: isHollis
      ? HOLLIS_PDP_DEFAULTS.mobileGallery
      : [
          {
            id: "mobile-main",
            alt: baseProduct.imageAlt,
            url: baseProduct.mobileImageUrl,
            objectFit: "cover" as const,
          },
          ...HOLLIS_PDP_DEFAULTS.mobileGallery.slice(1),
        ],
    colors: HOLLIS_PDP_DEFAULTS.colors,
    sizes: HOLLIS_PDP_DEFAULTS.sizes,
    valueBullets: HOLLIS_PDP_DEFAULTS.valueBullets,
    descriptionParagraphs: isHollis
      ? HOLLIS_PDP_DEFAULTS.descriptionParagraphs
      : [
          baseProduct.description,
          HOLLIS_PDP_DEFAULTS.descriptionParagraphs[1],
        ],
    specs: isHollis
      ? HOLLIS_PDP_DEFAULTS.specs
      : [
          { label: "Dimensions", value: baseProduct.dimensions },
          { label: "Materials", value: baseProduct.materials },
          { label: "Cover / Finish", value: "Low-VOC natural studio finish" },
          { label: "Assembly", value: "White-glove setup included" },
        ],
    histogram: HOLLIS_PDP_DEFAULTS.histogram,
  };
}
