import type { Product } from "../types/product.ts";

export const TOTAL_CATALOG_RESULTS_LABEL = 86;
export const TOTAL_REFERENCE_PAGES = 8;

export const PRODUCTS: Product[] = [
  {
    id: "hollis-3-seater-sofa",
    name: "Hollis 3-Seater Sofa",
    category: "Sofas",
    price: 2140,
    rating: 4.8,
    reviewCount: 36,
    featuredOrder: 1,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_YbVyxz1uSW1y06dXl2Eh_oSxZDm6c0z8Eg8N3goT6U6ZeFw0vobb9-ughiM5sYshxPBvrI-iV2LcvkDNHsH3UTERJ0kfXzAs3WJnq1RFVpryKzuu75dvOuSrR1jpgw64EsiO3ko52M4DhX0lKnu_dR2MTo4n6DsMYh9WSCkjhVqeLMb9PcPGK9-CsRMLMbvjGRTbNJreZvbHaMCZXzVmyXFdCwomkQ1TRUUnm9Mo",
    mobileImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBp2_szKn_jMGB_C1F0JIj1yWgNk-n74_ohA7exofCi4BQ8ACfHVeFbS0EAGW0159JitgJwGJwhBLA8-o2EX5GDe-iLz3yYkK0XzdaYGuJsJ4rNolSL-kEUext6tXBnNgCvegSQksnchHVOn_Kh7EovGVD6_eNAcQJVykrDMWx5crnK9z3uxwK_o2Zfpih-ClWK8Eb0935ImXiyFJm279aaJhB7naF1vZc2Y8pcASKU",
    imageAlt: "Hollis 3-Seater Sofa in natural textured fabric",
    description:
      "Deep-seated three-seater sofa upholstered in heavy Belgian linen-cotton weave over a kiln-dried white oak plinth.",
    dimensions: "228 cm W x 94 cm D x 78 cm H",
    materials: "Belgian linen-cotton blend, kiln-dried solid oak, feather-wrapped foam core",
  },
  {
    id: "marlow-lounge-chair",
    name: "Marlow Lounge Chair",
    category: "Chairs",
    price: 890,
    originalPrice: 1050,
    saleBadge: "-15%",
    rating: 4.6,
    reviewCount: 21,
    featuredOrder: 2,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLhQrQNPsx_u6y0UOz5VfJLquZ8qnIalXeEzElewDAgTVOFyLZaVY666vbMGXjxZ6WZuDaWATU8FIJMMgJOZiEoqt5dJPg5nwYu87VqeBjM_zCQ51eDC6MmzMxjkt_LKlGxeHsvNjB78L6PoS0pJzKJCnjcibLcJP1erHupmQ3xxLP8RCedsjOekSJRiqxy-xryr2efvOnfye3kW1wjUNvs1fHaoEMrAIMa-w9VP50",
    mobileImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCsOrIrysfzvPLQL5fH7-dig4y6AMII2hZDBOsdhRwbcr9gItK8xyUPH7dFoCczrbo-xOzEWxFPSWkTvEZhyJ-epwYB4-nIVN269yhGgcL6im2dr9HW-5vZciKrwSV0WnCt3yywRekjUfbnr5ZDY7GY7N4MuKrRcLrFYrfXGtI6A5NGv1pXxNrPzQgKtV5YJx2Zab8Gn6wUGhTAQXrNi4jhW9NO0IN6eNe2-Kx0laDd",
    imageAlt: "Marlow terracotta velvet lounge chair",
    description:
      "Channel-tufted lounge chair with warm oiled walnut armrests and tailored velvet upholstery.",
    dimensions: "76 cm W x 82 cm D x 79 cm H",
    materials: "Solid American walnut, cotton-pile velvet, webbing suspension",
  },
  {
    id: "bessen-oak-coffee-table",
    name: "Bessen Oak Coffee Table",
    category: "Tables",
    price: 640,
    rating: 4.7,
    reviewCount: 48,
    featuredOrder: 3,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDB810ctch0u_exPTNhXG1rsX1ynJnoodndKl5VFfviwE1AKL9QvZMcN903ReqfWImIEAfYlEBe2yFJT0jqXmJ1AW_J9x7XsgLLk8KwY11xI8o8YIYFJVYzfO-AN4lXrYlI5bRbYAxrrGcrUOzPhF29ozX1OxXkHBJK-A6xf3zq5GIuZzh8cyRt9Sgw6Nj2f1Tk9AVmTHTXa3Ymvg0j01eW1N17BFWVGtBV1rkHaX7",
    mobileImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASAdx00ePqswF6EOxGzWNpT6sqTRqXKhDYDFWsB73GrSOGVxFoyMs7JQg_fwCm-dmbl94hoNpCUzRV-W28-_qUFR5Nqvp5V6MJtB7zB6ySoVS3kVKjb22cTH7w2zhZK8WK6-PD3g3XZor3zMUNLt8yXshvN5v_nbzNZa95tU-0iF_5nmjstm5Ixbli9IUFPTyIyHFMXCbLqioF9XYvD4O-iXwGCi8iGJu4R5hDNaR6",
    imageAlt: "Bessen solid oak minimalist coffee table",
    description:
      "Low-profile coffee table crafted from wide-plank European white oak with softened bevel edges and mortise joinery.",
    dimensions: "135 cm L x 70 cm W x 38 cm H",
    materials: "FSC-certified solid European white oak, matte hardwax oil finish",
  },
  {
    id: "alder-ceramic-table-lamp",
    name: "Alder Ceramic Table Lamp",
    category: "Lighting",
    price: 210,
    rating: 4.9,
    reviewCount: 12,
    featuredOrder: 4,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApxAbw8sGAk2OixTNQH3QqOSBnhZIfUD6SmdN3PgPkxV-8FHm2pbMJiNpJnHJv7KcORwHsagjaYXMGNXB-8B7RFsfJUiCWy1qfeCzoSPorVmNbRgFAwc3Y6J8yFgKZGhSXgAJN7472NsU2jvfM-9DRE_yZmOoVflXeooo1dWhhJ3-XqegD3pGmI6TWZKGeyq8UXLnvE7wXhbs9LaTuxx3kGL6vr9laiNRkdfhdglxP",
    mobileImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdLGdHPDRj6_DN9BqqiplihGPUsBWSciBk8Zc9hjYhXs3HBXWsMqqXQ5rB2rWt3EfRcpH0ydrEgVOKSNLYzdaoZn62n377Cbm5dOAvfTXc2I3ljQDP6Kmh5leGP2rIqZW-Xxpd3q9tmMQVG_sNbtB6Mm9EPTtSicL4WsgMQEhEgYyALe_w_32bSla-a1E-rksd1HI5sj_O9aoWD5LnUdniiArteSA7f8oxDTQd5WMn",
    imageAlt: "Alder handcrafted textured ceramic table lamp",
    description:
      "Wheel-thrown stoneware lamp base with raw organic relief and an unbleached oatmeal linen drum shade.",
    dimensions: "36 cm Dia x 54 cm H",
    materials: "Hand-thrown stoneware clay, unbleached linen shade, aged brass rotary switch",
  },
  {
    id: "norra-modular-bookshelf",
    name: "Norra Modular Bookshelf",
    category: "Storage",
    price: 1320,
    rating: 4.5,
    reviewCount: 19,
    featuredOrder: 5,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4klWCkHjLONKxxjMBEAqHXAw_brCHrR49LvKxzpGlg2aFrilO0xBXPqEcyYGVZwE9tBjgZnOn5mXBewZcZt5D8R8jqnaN5L3Ds3mgn9OgBJTLpqZyuPUfnVnz5Fc-24BxuaAvRVc9xr33UwuvWcWHG5Tl3f5opxkYpg58-lGlPGsoTtbT40ijUKmitTN-WFzrcJnFSl8Q4Z59LbU64yunYR3KwehQMxZEmINiOHxT",
    mobileImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAcNsgO4abHmuvfjbcUqaqnBcP6qdwZGia79eIEUfvgIsPndn5NXyAC8dyORrxVlkkGkEg98lNVnEPoziUY5B1WbGU8LtJp9CHhZPaf1nponNxRhTV6dH9eXhQkGqRwlfA9vZAYeVnxsXpl7iSn6Ip8GqpVEzbm0pXTu8iYRSNpFqRSpDM3wonHTn1bFpGqNaVkBzHRg9v5jMZJDAFFd7qFTU1jnqxIEsn5aqpJ6iB",
    imageAlt: "Norra wood tall modular open bookshelf",
    description:
      "Architectural open shelving unit with woven cane lower cabinet doors and adjustable solid oak shelves.",
    dimensions: "120 cm W x 38 cm D x 205 cm H",
    materials: "Solid oak, oak veneer, natural rattan cane panels",
  },
  {
    id: "wren-upholstered-bed-frame",
    name: "Wren Upholstered Bed Frame",
    category: "Bedroom",
    price: 1860,
    originalPrice: 2200,
    saleBadge: "-15%",
    rating: 4.8,
    reviewCount: 27,
    featuredOrder: 6,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyxbziicQnypZmkW3SF0LC7a4BBZ_QBXaLoEpJYXILYvBa2p_OWge_DTCi4qeaAkewZ4TmgNdQjXf3aqtb-0NF-hTwehPdxjK7qbEy_2Ju_ikQL2zssv227xHnJQ389Cwhcs-jUv6kQ2cjYqdBTx2BDFelbTRKhS5eZOPS4noJ1o2fFAGU-TeiPV_O06o84DYTAR3UFDo-d2H5YG6VdLfLGhOLDe0NyAjB2uIkyrv8",
    mobileImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxQS7ToTSmsxOkCpwbA-SSK3CJsgQmQ_c9S94Oz8mlAnmmfyEqDrRbLKZTudRlqim_DMweEmIazjCNrlxGPS_t07xA9Ws9czkgNXMrGyGRmWPoECGwnniMj8lg9UDttRZGuC7PwHRXNx1UhHKmx4TnzPFBUnStBupl-PXtb34UbdXTLHoop370_PL65Y6TS3tjdPk0_NAX9zm3h9ukqbpp1-k9rIo-VfSDr8oGzpxW",
    imageAlt: "Wren cushioned linen bed frame in warm oak",
    description:
      "Quiet bedroom centerpiece featuring a softly padded headboard in oat linen set within a solid oak perimeter frame.",
    dimensions: "168 cm W x 216 cm L x 106 cm H (Queen)",
    materials: "Solid white oak, Belgian linen upholstery, birch posture slats",
  },
  {
    id: "linden-stoneware-vase",
    name: "Linden Stoneware Vase",
    category: "Decor",
    price: 78,
    rating: 4.4,
    reviewCount: 9,
    featuredOrder: 7,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_DlRnELiIvBVsebRs_aMXu1JmcTA_scv7wqvjnb6NsEAIzF3uPjBxfw89Gb43iHaPONv66N8TSLoDw7x5Lx0Wjk9rZ1k0fxJCNEM3TaJ3rn5UR-kwqZe0dDm_1nf-hNzjwz7Pm_g8N26weKu3f4rKn8V9fkXLLuYPBuMLSgazUNzdw5SuJH76hijyQxMXCLVGGFshBlwgQNajyAtgRHICT0qRK1LgiOm_pljRshv4",
    mobileImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDBItK51j_iygnZCILdFYGI2aA0vsFJ_KzQFOUMVKrZE_34d9CfHwbPWJaW7VXsjOo6ZJ0UfhMU3h5TyoY3Af5KsWooRUon0r8yMyYdWvpf9O6NLam0soY6MA-Z7UsR8Y1qynWHRXNkeAAWwZotPEdYE50BAqGXfVhDtW_U2owG1Z_WsUX2m7qhuNjUl8KhiPRQlorpCQQHfdO1d0iqkgPQDJQDp9Oj-_tjuLiTMQI",
    imageAlt: "Linden off-white ceramic architectural vase",
    description:
      "Sculptural stepped vessel finished in a matte chalk glaze, watertight for fresh branches or dried botanicals.",
    dimensions: "18 cm W x 14 cm D x 34 cm H",
    materials: "High-fired stoneware with matte mineral glaze",
  },
  {
    id: "calder-wool-area-rug",
    name: "Calder Wool Area Rug",
    category: "Decor",
    price: 540,
    rating: 4.6,
    reviewCount: 31,
    featuredOrder: 8,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCVWUjuPTsc7fR8x27EcDlQ63gaWc6X3J0t8Kpb6r0qAoxVNaCUTYkSPM3CEUmtcyEaViywoHCGbcDkh-lbYdfomrs6huMJ--1nJa-hf8dnEkxgIgslM8oF9AbpxOXgD5lcT_kh1zzyRI13QL01ME2H7Ye4hpaA4Wb7K1wYxP5QsgfStABJhceEF5FbdkYAHNPL-v9LWx4Tf8YJrgZNGCw_lmuA64nqrJn9esI4pIt",
    mobileImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJe5z_GQx19v7NG2xWeaDwSJeWXtj1cAIXWJfHqmbvxexJjwFvDHYGZDU77MMOH_GSe4N_kKWorxhyKTJrsm4O1tKDv1j1RzOZB-hzKQAQTTBOdldUXd2gclIXMBW86SvpEHl29imYv1sVG3chdT7qxGLgsfdN0QYUBye3UWOlh9EtHMI7GXsDYaACqmInLCrwo-mvqBxQ3ZmpQuFTOI6QXc1MD6xZqia1imhp5gcG",
    imageAlt: "Calder pure handwoven wool muted rug",
    description:
      "Hand-tufted New Zealand wool rug with abstract tonal geometry and braided cotton fringe edges.",
    dimensions: "200 cm W x 300 cm L",
    materials: "100% undyed and mineral-dyed New Zealand wool, organic cotton warp",
  },
  {
    id: "petra-rattan-accent-chair",
    name: "Petra Rattan Accent Chair",
    category: "Chairs",
    price: 430,
    rating: 4.3,
    reviewCount: 14,
    featuredOrder: 9,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2qzS04PRosbKza2BFr4-WmQ7nN5sqoWeGNsc99EqAT8fx-FQ1w7M5FwrjfwBvM85Na7AoV6wj5Bt0Liq98hcnvHmgeaRgMikOeDmT6wxgR_XE5hiROYKfM6-tfWDriq1BjDhHo35GfzWHrUK-1m2LyxBO3jzOt4hw-znzJE6M9YvJGWVoapZAbAe-s5Gbsqm3mDsntqbhVE5By4CWmlP7EjMEIyE8Dd6qLDJGMOjO",
    mobileImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBwcF8pRI1Sw4STgbunXypOm9RkBHd5WM_cRZGtQZ0sEsqCnhfgC3emO9yuJjxU-yugFrxSvFYTkriLR6ExznrHZv3Irn5an4SGRPVKtNCAcBucRdqJTulJzpXDY8NN5mF0dipY4angVi2KU7D4JSO_tJqphOezreqP4pdmAXpIxjJsGs4ovimZpqLOw-pWhUX95FebHsdZ31W6tCe0ip_Wtcmc0e9rCYL2PL9E01OL",
    imageAlt: "Petra rattan and wood sculpted accent armchair",
    description:
      "Sculpted teak armchair with breathable hand-woven cane backrest and removable bouclé seat cushion.",
    dimensions: "68 cm W x 74 cm D x 76 cm H",
    materials: "Plantation teak, natural peel rattan, cotton-wool bouclé cushion",
  },
  {
    id: "sona-side-table-set",
    name: "Sona Side Table Set",
    category: "Tables",
    price: 310,
    rating: 4.7,
    reviewCount: 22,
    featuredOrder: 10,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDE7m3Y_ZBqOpvdgwCDLVwbOJ2DvvW-5ksECoMTtqPdtNtEQ0Mle9LyfHKVF3lSmIJPM5tKUGGx8Ns6ykqyCja_Dsk9Wm-eF1fn5zUW0FxwYsnnIYrwsYXvBPtt1_Dz366hsA190rZB_kBukturRBDtj_oq1R8PXA0_oChSn9JDNiado1iAEiBaMJGScW-65GNe2-iCjzWiOoJ7KWsiehPyTKjsMpKsCoHPdYL1-28h",
    mobileImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrlerx88CEvVy_8fVFH8hk6YXwTluDqsAKHAysPTDESBceDBquUbFKNkVgv1jcU6EnCqRrX0Eyd5ov_KcBvdyDpIMwLuPWAepkRfglB0rFBpAD3CBqPOrkbcDxFthoy29Ibj-qDfdxcngeTKr1lG10SkqpcfwIFwSC-lmEoR65e4B3anjq-n-xbIXXilxl-G5IFo_xHXlxT0tUJXsdI23GAMvtDQhDodBM-Th5f-el",
    imageAlt: "Sona organic silhouette carved wood side table",
    description:
      "Hand-carved solid mango wood side table featuring fluted relief detailing and a warm beeswax rub.",
    dimensions: "42 cm Dia x 48 cm H",
    materials: "Responsibly harvested solid mango wood, natural beeswax finish",
  },
  {
    id: "dune-modular-sectional",
    name: "Dune Modular Sectional",
    category: "Sofas",
    price: 3260,
    rating: 4.9,
    reviewCount: 41,
    featuredOrder: 11,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJhHHW-OIGxM_iPBTpF3kTbpzCAUDi2_JXcEDluIMvDmcLpWrbI-swGPyIYMmBUrxvLpVrGoqxeXWQGBgYbjAQNlfewWRENbEKebfay0lPiQTFfTNm659ZNi2j-ExBu1e5_4-PKZDV-neDuGIMyH1_kC36iPnnodVNxMsW5TPXzbYgl5dMepJVuJSbEfquwJUmkGSqCkj47_ueT72CfyIVn1lJ58gqN0ZQLpxV74f9",
    mobileImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBt8TOmZ1GTe4dlKsywmiucmNvdwJ23e-2bqUcUkV6lWrEon0zP3xoTf0giP6oueE1WcPnNXLtTp7CcHjqs8xL-D63Xzwe8qeByedKOFiMfu0wgbNbpm7cFxtLRqrNPISidtUHM2L3gNZqoBmtCl0Gf0zUsC7mtzpbOP5oKjMq3gCi_4Su9OVtcQJAqi4aoDEEg10ISKlj9gO2ItFZlEm6GYeyCdh_M_08JWYew6IwL",
    imageAlt: "Dune low profile cloud soft modular sectional sofa",
    description:
      "Generous four-piece modular sectional with hidden steel connectors and removable stain-resistant linen slipcovers.",
    dimensions: "296 cm W x 185 cm Chaise D x 74 cm H",
    materials: "Performance slub linen, multi-density foam, duck feather topper",
  },
  {
    id: "fenwick-floor-lamp",
    name: "Fenwick Floor Lamp",
    category: "Lighting",
    price: 265,
    originalPrice: 320,
    saleBadge: "-20%",
    rating: 4.5,
    reviewCount: 17,
    featuredOrder: 12,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDs0tCz3janPlen_NgVT8bVzi8Fh8MJLY5G9wJflC-tZ7fSyWWbN2Vg2On-r7X4OhGgsxiUCIwsGUwbMwazFaha71QB_N3D_0GCwO0UseJs2-fAVum8dmh4b7pb6d4Ctea4NUvtFnTnsnVcod8mW3k0fYvqJC4aNwpiUhCyf67JZKMRC6DP5K-ycv4UbtaJnNT0NBhsW-mGgs6HKssfPF7BssU4_aP3PQd4-8cXu0A5",
    mobileImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnACbBh6NrIbqccaFjJDrAYHWXD9f0Kbb6aQJeW0NXWoQzqIgNg9vvjiexs8uBEYWw7YTxZ3EbsLvpJNGQ7GheJVHHcSzpYbmSO5zPLdPM3Vnv-UBYn5msuf0OaF-RNBHHRJL4cuJqZdgptPrYaToWxxSCSNKMqRd5dueyseDswE5RN1tMOUSxQzPKmt_h6JjoWnCUhYxuycnwj94a7yNxBoQoO4csDQjMoBBJNhtL",
    imageAlt: "Fenwick architectural paper shade floor lamp",
    description:
      "Slender blackened steel tripod floor lamp topped with a handmade mulberry paper shade for diffused ambient light.",
    dimensions: "46 cm Dia x 158 cm H",
    materials: "Powder-coated steel, handmade mulberry washi paper, braided fabric cord",
  },
];
