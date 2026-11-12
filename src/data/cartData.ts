export interface CartDrawerDefaultItem {
  productId: string;
  quantity: number;
  variantLabel: string;
  drawerThumbnailUrl: string;
}

export interface CartCrossSellItem {
  productId: string;
  category: string;
  shortName: string;
  price: number;
  thumbnailUrl: string;
  variantLabel: string;
}

export const FREE_SHIPPING_THRESHOLD = 500;

export const DEFAULT_CART_ITEMS: CartDrawerDefaultItem[] = [
  {
    productId: "hollis-3-seater-sofa",
    quantity: 1,
    variantLabel: "Warm Bouclé Cream · 3-seater",
    drawerThumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCEd1_Kv5lFDIjqbp0WAmVcdoB7u6GoVr--N26mMb0BvBLNyQNuaa14Cr7MJRmt73ZOvWyeNOnDI4ywZ9SFpzif26re40Pxtk2VwUFqExhY4awH7yW7z2xF_VMikQHFhRWKmsSZzHHz7nAu-6pE0_NS534QKNt7SEbiWYi2MId6XuhRlkm1x0zp5QcTP1vxHN1HUzXf18PxvNf6CkhUyXKUHjxakUmdFSrcvb4BzhaQ",
  },
  {
    productId: "marlow-lounge-chair",
    quantity: 1,
    variantLabel: "Midnight Blue · Oak Frame",
    drawerThumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZkA48aqr1h_VNIm4vWWfsasKgcjb3yovjheyv2E_TG8KxAADxdzpIii-u-8Z2O3si_wwE10xCLRuDjS9DUVDTkchwFuGqPX8qT0-qfBHeRYW4j9CbBtSaqFWeDjtL_ys3zPRq_jnjL-DfGBFfZ1FoXiDez0XQk0KxVJ9smMugK6h0BY9IOhtHYJ2fnmoXu2qIMG7LaTQOGzdSr97BtIHEwdVIpAPfbJP7ayI0ujOK",
  },
  {
    productId: "alder-ceramic-table-lamp",
    quantity: 1,
    variantLabel: "Sand Glaze · Natural Linen",
    drawerThumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQqOeCrWcSIFo2Zc7EVjocFDYHH4lzVUXzbDnyAOPixikr_2953StnG9v3fpTGg_RGQvvmDuRUjGx04q31C09Jj8QQ9Tl5HEz7M59N6FrWs_ELjsodqcE4mIc0pEySYBax_bKaF_rvgkkeiBbgKg2bMIY_cWJehafTzS5QLGHKhFLyWCC2ol5W56XNHGyt1e42QMLBrbEjEa9QKI-O6fJ2djknVye84xsDbib2za1A",
  },
];

export const CART_CROSS_SELL_ITEMS: CartCrossSellItem[] = [
  {
    productId: "calder-wool-area-rug",
    category: "Decor",
    shortName: "Calder Wool Rug",
    price: 540,
    variantLabel: "Undyed Wool · 200x300cm",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFeVldIhKaOnq0ax2Li2bB6J90yBhO4UIOkOmka6Uu1KyU9qzyfJAWhHW-G49DWxQbPf0S61n8ULoOWZq2-gNwgS-aCtQ_nQ8bvnmikSEMkgkgQHP1mLfSENxMiaMt1K3MTZaOG2R1tSPVCd-Lnac1ZpMU_3XHDaRMcwYWpJ1_PRSep7hd-Q6yhTggRGkxm_refzHPNFxMve-KNTirxIHRlCNQOl_mweMB4O_wYQPH",
  },
  {
    productId: "linden-stoneware-vase",
    category: "Decor",
    shortName: "Linden Stoneware Vase",
    price: 78,
    variantLabel: "Matte Chalk Glaze · 34cm",
    thumbnailUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB22WJhBSp_SL2d16fXswlZpcQyxNosKFVb5fNnBkHz4p8HfzN_cVSZrI7316LfT2KgPxol4aWZ1ecIFG7KS8VkymugwsRuuQlPSmQDZ6IMtysHwASfKL9JjDVgfIqiPzft4MPvRdPZX1HtwQkarJrlxOR9RxwwWDYjdBZshiiPckWWBcl1WP7x5xpQzL07ENMYX8LeCiP79uHAqTb5CQR8t5i_--uJedgVB3vz1OCd",
  },
];
