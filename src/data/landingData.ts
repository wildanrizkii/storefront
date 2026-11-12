import type { CategoryFilter } from "../types/product.ts";

export interface LandingCategoryCard {
  id: string;
  name: string;
  count: string;
  filterCategory: CategoryFilter;
  imageUrl: string;
  imageAlt: string;
}

export interface LandingBestSeller {
  id: string;
  productId: string;
  name: string;
  category: string;
  filterTab: "Chairs" | "Sofas" | "Tables" | "Lighting" | "Storage";
  subtitle: string;
  price: number;
  originalPrice?: number;
  badge?: {
    text: string;
    tone: "hot" | "new" | "sale";
  };
  stars: number;
  imageUrl: string;
  imageAlt: string;
}

export interface LandingTestimonial {
  id: string;
  author: string;
  role: string;
  quote: string;
  avatarUrl: string;
  stars: number;
}

export const HERO_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCwsIxCi2MJJEJUPJJcQ82SCSKB6IbtdLdLQY8CNq67a1Wu7pl--woRiuFuSlLFAl8ViuNgNvHF-tU3ksdwnH4--nYg_AqhXgk9RVOzfnst_dfWkLdep-hh8m5UMkcwXF6QV6zzoKPTBq_zkXCti3Vqk6gc-gfz2TLofiU_9bXEQY-H4FiJA4FpHDqFEX-OP2UQfe4D-sBdGa89Ke7ci_5OJxjyOhzYeuJzCdsFRsrH";

export const STORY_IMAGES = {
  craftsman:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCg1UQkTKexp61DZNL063jUxmUGJtOR_wGnvBlB9vwzTckiFHZ9rhf0awE4Hj0vsYqRTh9H3aBqr2AupbRs4cWUDE4ftezPrn5q6aaq-4RQWGOhSDTwPmkPxTktayWtOm_RKD3tQMolT0IjY8YeZV-9ukbCcKTLMLBA2T0aU_gkweFyc5ojSuUJ-6UrAfxW8GtCgMNN6caDFBQfxdOyCUIhaPDFHoeYQjDtYl7aYoLx",
  joinery:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBfGuNS_IZ65EV5VU8XD746iXuDno44LmRYS3pUbM9UZVrmry39IrVSISDcMKauwdTO-WuDH-sidL0RW7I8tpX9sCFblYkLi6mW3xHjvr4vW5uzm4Nw_ONdTNDm3PnYFuBjOxRyy2pQSqC2LVhxyEYwS86XZxnP1DMsN6ScuNuMI-oh5mlTWBeL6PkWTva7P6aQtpDjLOxooqHLYs11_socFcYGyJ9cnN6AEb76fr1C",
};

export const BRAND_PARTNERS = [
  "JARVIS",
  "VAGHI",
  "QYNDA",
  "AMAQ",
  "NORDIN",
  "ELORA",
  "SENSO",
];

export const LANDING_CATEGORIES: LandingCategoryCard[] = [
  {
    id: "living-room",
    name: "Living Room",
    count: "84 pieces",
    filterCategory: "Sofas",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCegBz4KRccNEL2M-f4TOtSVbpgwe3h7Ql4RzDuAQuXdxegcRq9HPq-aQTAN8Me-IVuTbj_O5dej-5F96m8Ju6pYbHiH0VxSaDp-MZk-Z2EuiAKpBc6LvfXE5x5YJrP7eMxukwxp-DLRkGCDgH9Q4FcK21iTQnuuP0aMoyl4bacbp0i9mVFZ7Ddbfdgn4OxClWuPUw_McwTynxTi5gYmascnXhAOINVkt8faxlnfLyp",
    imageAlt: "Living Room Collection",
  },
  {
    id: "bedroom",
    name: "Bedroom",
    count: "52 pieces",
    filterCategory: "Bedroom",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOfG67nE9T4F1zwXpXjXRt1W8gsNi0bM6hppUlnr3HWmFeF13hOfXC5pFgkQnZfTAb5ayHYrOhEl6zOaTt4DlNoNB1WbYZwVYbXSXpwr7jctonU5wmXWWjo8HvAiMlMt7nXYnE09E2keL8XJ3sJqYEvpZ2PrRMEVxe3Wj9V24mxm_ABc_QjFTP4kiXCfg1TAaEJn_u7rZGArED9chI4GxROtgsfiuRVuUfwWXsT6pZ",
    imageAlt: "Bedroom Collection",
  },
  {
    id: "dining",
    name: "Dining",
    count: "41 pieces",
    filterCategory: "Tables",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoLPUppJW8h8sjgzJfg4lL0Jl_pyHI2lH1WWsxiKKRGRrk3oyL0Pz-7_j51qk_Y_fGFIzxGgjUMHvJC_hUm5vns7MbVGW-NmOvLph4xUaQcHGjIjWbH2QEi4z03-R_ldhIg068w6IUHUi0ly69m1RrbCK5afrDzNzv4PPFOIESBodClE7_mFA_FgC9CIlgod47jU6z5xtLg6zGyTCK_8ZrLnr5p5oVSw4sVSGwufHN",
    imageAlt: "Dining Collection",
  },
  {
    id: "office",
    name: "Office",
    count: "35 pieces",
    filterCategory: "Storage",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVYCBpB1qHZcUU3x5VrVplMA5d6TNzJ-AwH5zg-98gmeUzEDUgI6btwuudmWVbS_Ma2HCtlyngr2wJ9fbtkqaLGvm4PN8_Pl9Yxj489Z8dGt64vKcuG6C1rM_iL9SQYz8eXhxs-ZlPhG1WN7CbbdjEfut0VFUPN0LgUMvaltDF0hy1jcd8P3k-2Pdwt82UuVTI0kfhPjcYPiR2UcdYLgpsQAwofC2TMOhIvP8ljaC8",
    imageAlt: "Office Collection",
  },
];

export const LANDING_BEST_SELLERS: LandingBestSeller[] = [
  {
    id: "luna-lounge-chair",
    productId: "marlow-lounge-chair",
    name: "Luna Lounge Chair",
    category: "Chairs",
    filterTab: "Chairs",
    subtitle: "Soft linen fabric with solid oak base, handcrafted finish",
    price: 890,
    originalPrice: 1100,
    badge: { text: "Hot", tone: "hot" },
    stars: 4,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVFfzGCqYkrr8kg0PLvf30jlqzIRdhUWvibvYWObacqEpondgi6RRfMxMMk28oIKiCpRBw4hMqHLLCccC51D6PdHx6Q2hjVfWetDMU-9f1AWGe2PJJGG5g608zefY1p5d44qUb20qYdibfQbp49wTkbBZ_GcYsyREoHb7sV-TZpMuM3mqPYwVJcqhLfETEc9pYu0h128nYgXEI4Vrhh_bZ_ZJ7vRwajqIYnMBqI_KG",
    imageAlt: "Luna Lounge Chair",
  },
  {
    id: "nordic-1-seater-sofa",
    productId: "hollis-3-seater-sofa",
    name: "Nordic 1-Seater Sofa",
    category: "Sofas",
    filterTab: "Sofas",
    subtitle: "Contemporary design with hidden storage compartment",
    price: 1290,
    badge: { text: "New", tone: "new" },
    stars: 5,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFjot_wtZ-N7Ed29yfpUXVl_Lz8iJpz0HIfWzkN6TH_nJNBiXv_HEryV6GLrjmGN3KQiRVU5SWtcbSv60QgdPWGLAU9B5Wd4qof3Hw90cSJZImLIIHzpKGv1RwiiuJgyht2qxN8ag9EuX0gh0t8RYu6QPh4fh3KCU5eRfLnZEhOeRFdExUj5VtgxBe2ujCnibjLENn-WkaPDYTHdtQRJvXOY-Mlm7my0scgjIjzr2I",
    imageAlt: "Nordic 1-Seater Sofa",
  },
  {
    id: "arlo-coffee-table",
    productId: "bessen-oak-coffee-table",
    name: "Arlo Coffee Table",
    category: "Tables",
    filterTab: "Tables",
    subtitle: "Bespoke solid oak with tempo brass legs",
    price: 420,
    originalPrice: 580,
    badge: { text: "-25%", tone: "sale" },
    stars: 5,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAODIFiO6JOXIWnW9P_qh0mw2edNHBkZQVkXoTryyLv8i8qamTBl1LklsocqnMSJ8EcoUKbghz5CBLjnVeVqCdMJr4NNoyEnoY-rMs7POdtghosE892o0usZj2OLvi2s9tx6P_Sw4sJclHowRZEGq7_-B4cNCYV3hCA-vy7Tr6GWI-DqPGtYxWpmHAv4HmRH_eqsP7uC8tHOZqV-0jr6I_F-mQF5jkLhh0a4uLZkgxI",
    imageAlt: "Arlo Coffee Table",
  },
  {
    id: "evo-work-desk",
    productId: "norra-modular-bookshelf",
    name: "Evo Work Desk",
    category: "Office",
    filterTab: "Storage",
    subtitle: "Clean minimalist design, cable management built-in",
    price: 680,
    stars: 4,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCncU0ADT9DdOkDqf8qcGrFHCbeRqW3FKYZHStVR9CrVTwlXYTuMKJjjAr8y6KMlqHNK6MC4orQSEWhBiwi1DcGAbUbXlocDH9F3APJkKVyeW59XwbM58xKzrDlrzhv80t_eIrSCmTu-oXuO7miPYQsx8lrHD3Wowun1ttcwxwXn8qhIC2gxSnR8lltnL8i5l136Zq5LdlWlkunWPZJCrszZctOPytJDA7n1DZ9uN3U",
    imageAlt: "Evo Work Desk",
  },
  {
    id: "haven-accent-chair",
    productId: "petra-rattan-accent-chair",
    name: "Haven Accent Chair",
    category: "Chairs",
    filterTab: "Chairs",
    subtitle: "Deep wool cushion, boucle upholstery, tapered legs",
    price: 750,
    badge: { text: "New", tone: "new" },
    stars: 5,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPF58zIZy1BHWfsZ-HfvnXn892cJXgwfGzj3nXg4qezQt09CVcwbQJwaf_JuIk0VOJ32IFNdLLWWuQoT82NIMrt6mz3IOrZGN68Krk4zefLTKHQWI7GBtXqnLETcFiCVpbHHMZ6qI-COc6unmgDMO62qsSB1g9hQbIM3qayRLMW3CPUsGS_AMJaYuTvnjG8OPuHTkrDbfxJ8eKPMz6Wg-6Jq0aCXaFHXMXml-CpIq1",
    imageAlt: "Haven Accent Chair",
  },
  {
    id: "serene-dining-table",
    productId: "sona-side-table-set",
    name: "Serene Dining Table",
    category: "Dining",
    filterTab: "Tables",
    subtitle: "Solid ash wood, natural oil finish",
    price: 1640,
    originalPrice: 1950,
    badge: { text: "Hot", tone: "hot" },
    stars: 4,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBsOgbNLiigs0yEnTfgJCNv5DyIW6UKsGLVwPrPOmOe9RgYMDNJUWvo1kaLBAKX_kzZRjYoQEPL3KoJrAQgv7n6zdQs47LZ4MUe2PIH9R4unI3IJRMN7xls506keaYshk1Zgg5BRVnluzcZsys-j8YKTYoAZqJp9Hevj1GOvL4Gk1Jf0JCVMdgeVfTFJWw0qyZ28_BgDZJWfDHOt6cuvLBuNwtxHXqvXPBWrMNtwb4m",
    imageAlt: "Serene Dining Table",
  },
];

export const LANDING_TESTIMONIALS: LandingTestimonial[] = [
  {
    id: "samuel-chen",
    author: "Samuel Chen",
    role: "Small business Owner",
    quote:
      "Absolutely love my new dining set. The walnut finish is stunning and fits perfectly in our home. Delivery was well-coordinated and crystal clear.",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDp2aP8nxetAgDlOHepMN4MzqGat5ZXx29PGGttCXinvWIttRg-BDHBpQQL2O5BFkfNVb9WTM3_py5wIDQVzQosH82wmTzZDT9IOV_jfNgutVw1SpSM51oIbKoGdjEBNKNC2nQmUgCvsDrPYPpEstDllNYNnA7SxpO49UoMReOu2knfZ4cZ3ijcbJrL1JogWFgC0Qu8TPn7uvGGUHeCNSayIe7FGqi3Ep9va8hf0f95",
    stars: 5,
  },
  {
    id: "olivia-martinez",
    author: "Olivia Martinez",
    role: "Interior Designer",
    quote:
      "The quality exceeded all my expectations. The sofa is solid, stylish, and holds its shape beautifully. Will definitely order again, absolutely stunning.",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCbts1yuXoSM1UlzrnBQacMhGKD5ECi_pSiZbhgRe_MPyMJSoswi6fL8PidyrkR-VBUpEHd_G3zsh7_SRERiRrJMlx5WRNJlk5eu-0D_TYLN5jYRj_nRec-J6BLn3w2xGor5K66Du3qezcYeDTpuCFQwxcLe1qQurQLenk1KPz3UNZU5olq3tBipwwFGqbveO9O8HttWp8yAlMQHRPGcn4ZIi3TIsU3ucsqmmxhGCt",
    stars: 5,
  },
  {
    id: "arnab-martinez",
    author: "Arnab Martinez",
    role: "Yoga & wellness teacher",
    quote:
      "Thanks to their design sessions, I found pieces that reduced visual clutter and made everything feel more open. My favorite piece ever.",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuArhPAxOPTRoIinsyQB3nSI2hN1XQ4bqD5GZxzpUoMUd-1P9C9OJi0xf5lE0t1e0eNJd8vQkD3v6C8ulgkh8gc2Axdb03eor84HOpKA-YH0Hr2roXOS9yll4OqSm75noYqhSRxBLXnNZbB_YkMjpzhdsKTx3gBY-LBz1BVLbSTL6ylnzksS7Wc3yucA1nUhT-A51Yf7UX8Qa93NB_vISUmHb7kpXnlC2SztMe8rgNjr",
    stars: 5,
  },
];
