export type InfoModalKey =
  | "Collections"
  | "About"
  | "Contact"
  | "Careers"
  | "Press"
  | "Shipping & returns"
  | "Warranty"
  | "FAQs"
  | "Privacy Policy"
  | "Terms of Service";

export interface InfoModalSection {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export const INFO_MODAL_CONTENT: Record<InfoModalKey, InfoModalSection> = {
  Collections: {
    title: "Seasonal & Architectural Collections",
    subtitle: "Quiet groupings built around raw oak, linen, and stoneware.",
    paragraphs: [
      "Our collections are organized by material harmony rather than fleeting trends: the Nordic Oak Series (Bessen Coffee Table, Norra Modular Bookshelf, Wren Bed Frame), the Tactile Upholstery Series (Hollis 3-Seater Sofa, Dune Modular Sectional, Marlow Lounge Chair), and Atelier Clay & Paper Lighting (Alder Table Lamp, Fenwick Floor Lamp).",
      "Select any category filter in the catalogue toolbar to isolate pieces for living, dining, or bedroom spaces.",
    ],
  },
  About: {
    title: "About Luma & Living",
    subtitle: "Considered furniture and objects for calm, warm interiors.",
    paragraphs: [
      "Founded between Copenhagen and Portland, Luma & Living partners with small-batch cabinetmakers, weavers, and ceramic studios using FSC-certified European white oak, Belgian linen, and New Zealand wool.",
      "Every piece is proportioned for residential longevity, finished with low-VOC natural hardwax oils, and constructed with repairable joinery.",
    ],
  },
  Contact: {
    title: "Contact & Showroom Inquiries",
    subtitle: "Speak with a furniture specialist or request material swatches.",
    paragraphs: [
      "Copenhagen Studio: Bredgade 42, 1260 København K, open Monday through Saturday, 10:00 to 18:00.",
      "North American Showroom: 1120 NW Couch St, Portland, OR 97209. Reach our client team at atelier@lumaliving.com for custom upholstery lead times or trade specification sheets.",
    ],
  },
  Careers: {
    title: "Working at Luma & Living",
    subtitle: "Industrial design, cabinetmaking, and showroom hospitality.",
    paragraphs: [
      "We hire furniture finishers, textile sourcing specialists, and showroom consultants who care deeply about residential architecture and craft.",
      "Send portfolios and workshop CVs to careers@lumaliving.com.",
    ],
  },
  Press: {
    title: "Press & Archival Loans",
    subtitle: "High-resolution lookbooks and showroom sample loans.",
    paragraphs: [
      "Stylists, interior architects, and editorial teams may request sample loans from our Copenhagen or Portland inventory for architectural photography.",
      "Contact press@lumaliving.com for specification sheets and tearsheets.",
    ],
  },
  "Shipping & returns": {
    title: "White-Glove Shipping & Returns",
    subtitle: "Room-of-choice delivery, assembly, and packaging removal.",
    paragraphs: [
      "Large furniture pieces (sofas, sectionals, bookshelves, and bed frames) ship via scheduled two-person white-glove freight, including placement in your room of choice, hardware assembly, and full blanket-wrap removal.",
      "Lighting and decor objects ship via carbon-neutral parcel courier within 3 to 5 business days. Unused catalogue pieces may be returned within 30 days of delivery.",
    ],
  },
  Warranty: {
    title: "5-Year Structural Joinery Warranty",
    subtitle: "Built to be maintained, refinished, and kept for decades.",
    paragraphs: [
      "All solid timber frames, mortise-and-tenon joinery, and steel modular connectors carry a five-year residential warranty.",
      "Replacement linen slipcovers, cane panels, and paper lamp shades remain available through our workshop for existing owners.",
    ],
  },
  FAQs: {
    title: "Product & Care Questions",
    subtitle: "Practical answers on fabrics, wood care, and delivery access.",
    paragraphs: [
      "How do I clean the Hollis Sofa and Dune Sectional linen covers? Both models feature removable cushions that can be professionally dry-cleaned or spot-treated with mild pH-neutral soap and cool water.",
      "Will the Norra Modular Bookshelf fit through a standard apartment stairwell? Yes, the Norra ships in two vertical bays with adjustable shelves that assemble in place in under 25 minutes.",
      "Can I order fabric and wood swatches before purchasing a sofa or bed frame? Yes, complimentary swatch boxes with Belgian linen, velvet, and oiled oak samples can be requested via our Contact studio team.",
    ],
  },
  "Privacy Policy": {
    title: "Privacy Policy",
    subtitle: "How Luma & Living handles your catalogue preferences and email.",
    paragraphs: [
      "Your saved wishlist and shopping bag items are stored locally in your browser so you can compare furniture pieces across visits without creating an account.",
      "If you subscribe to our monthly workshop dispatch, your email address is used solely for that monthly letter and is never sold or shared with third-party advertisers.",
    ],
  },
  "Terms of Service": {
    title: "Terms of Service",
    subtitle: "Storefront catalogue terms, dimensions, and natural material variance.",
    paragraphs: [
      "Solid oak, mango wood, natural rattan, and hand-thrown stoneware exhibit organic variations in grain figure and mineral glaze tone. Dimensions listed in the catalogue carry a tolerance of plus or minus 1 cm on upholstered and hand-thrown pieces.",
      "Prices are shown in USD before local delivery and applicable regional taxes.",
    ],
  },
};
