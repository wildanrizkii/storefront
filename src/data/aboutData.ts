export interface AboutTimelineItem {
  year: string;
  title: string;
  location: string;
  description: string;
}

export interface AboutPillar {
  number: string;
  tag: string;
  title: string;
  description: string;
}

export interface AboutMaker {
  name: string;
  role: string;
  location: string;
  bio: string;
  specialty: string;
  initials: string;
}

export interface AboutShowroom {
  city: string;
  tag: string;
  address: string;
  hours: string;
  phone: string;
  description: string;
}

export interface AboutMetric {
  value: string;
  label: string;
  detail: string;
}

export const ABOUT_HERO = {
  eyebrow: "OUR ATELIER & PHILOSOPHY",
  title: "Crafting Calm Spaces with Intention & Honest Timber",
  subtitle:
    "Founded between Copenhagen and Portland, Luma & Living bridges Scandinavian restraint with honest timber craftsmanship. We partner with generational makers to build calm, tactile pieces meant to live gracefully for decades.",
  foundedYear: "Est. 2018",
  locations: "Copenhagen & Portland",
  manifestoQuote:
    "A home should be calm, grounded, and shaped by materials that grow more soulful with every passing year.",
  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAtm0X0b1yvvp4nXhC4dQDAgEkp7PJ3FZzpA1oPMcXmivcZNlFrfwmnYkxDa8073vtBei2tKDh4kwctEZtDId1g1y5DrtO97SQ2wTcrD7Y4e5eJCgA6hKzXKSD_cyoxl8VneSlIt1iEMEZ6Hqsld77UwkLvBrYMn5Wzn0sLJpogSogZ8OmjjvzZ4lWJngsnXj69lIiNnt5Wjd-_PvXrZVSThT-3zo-QFwOzrgObEiJd",
  imageAlt: "Close-up of hand-finished white oak joinery and natural bouclé textile",
};

export const ABOUT_TIMELINE: AboutTimelineItem[] = [
  {
    year: "2018",
    title: "The Bredgade Studio",
    location: "Copenhagen, Denmark",
    description:
      "Started in a small woodworking workshop on Bredgade with two cabinetmakers committed to traditional mortise-and-tenon joinery.",
  },
  {
    year: "2020",
    title: "100% FSC Forestry Commitment",
    location: "Sourcing Standard",
    description:
      "Transitioned all timber exclusively to FSC-certified European white oak and walnut, finished solely with plant-based hardwax oils.",
  },
  {
    year: "2022",
    title: "The Pacific Northwest Atelier",
    location: "Portland, Oregon",
    description:
      "Established our North American gallery on NW Couch Street, pairing Scandinavian silhouette discipline with domestic American timber.",
  },
  {
    year: "Present",
    title: "Fourteen Generational Workshops",
    location: "Europe & North America",
    description:
      "Today we collaborate with fourteen independent family-owned studios specializing in furniture joinery, linen weaving, and ceramic lighting.",
  },
];

export const ABOUT_PILLARS: AboutPillar[] = [
  {
    number: "01",
    tag: "Timber Sourcing",
    title: "FSC-Certified Hardwoods",
    description:
      "Every oak, ash, and walnut plank is responsibly harvested and slowly kiln-dried to resist movement across seasonal humidity changes.",
  },
  {
    number: "02",
    tag: "Surface Finish",
    title: "Zero-VOC Plant Oils",
    description:
      "Rather than sealing wood beneath synthetic coats, we finish surfaces with matte plant-based hardwax oil that welcomes gentle spot repairs.",
  },
  {
    number: "03",
    tag: "Structure",
    title: "Repairable Joinery",
    description:
      "Traditional mortise-and-tenon frames, removable Belgian linen covers, and modular steel connectors extend each piece well beyond 15 years.",
  },
  {
    number: "04",
    tag: "Textiles",
    title: "Pure Natural Weaves",
    description:
      "We source unbleached Belgian linen, New Zealand wool bouclé, and cotton velvet from heritage European mills free from PFAS coatings.",
  },
];

export const ABOUT_MAKERS: AboutMaker[] = [
  {
    name: "Astrid Lindholm",
    role: "Head of Design",
    location: "Copenhagen Studio",
    bio: "Trained at the Royal Danish Academy, Astrid shapes each collection around spatial silence, balanced proportions, and soft tactile transitions.",
    specialty: "Proportions & Seating Ergonomics",
    initials: "AL",
  },
  {
    name: "Marcus Vance",
    role: "Master Cabinetmaker",
    location: "Portland Atelier",
    bio: "With over two decades in precision woodcraft, Marcus oversees timber grading, moisture stabilization, and interlocking mortise joinery.",
    specialty: "Solid Timber Joinery",
    initials: "MV",
  },
  {
    name: "Elena Rostova",
    role: "Textiles & Upholstery Lead",
    location: "Flanders Partner Studio",
    bio: "Elena partners directly with generational weaving mills in Belgium to develop custom linen-cotton weaves engineered for resilient everyday living.",
    specialty: "Natural Fiber Development",
    initials: "ER",
  },
];

export const ABOUT_SHOWROOMS: AboutShowroom[] = [
  {
    city: "Copenhagen Atelier",
    tag: "Founding Studio & Wood Archive",
    address: "Bredgade 42, 1260 København K, Denmark",
    hours: "Monday to Saturday, 10:00 to 18:00",
    phone: "+45 33 14 28 90",
    description:
      "Our founding workshop and timber library. Browse tactile wood samples, discover finish swatches, and book private architectural layout consultations.",
  },
  {
    city: "Portland Showroom",
    tag: "North American Flagship Gallery",
    address: "1120 NW Couch St, Portland, OR 97209",
    hours: "Monday to Saturday, 10:00 to 18:00",
    phone: "+1 (503) 555-0148",
    description:
      "Our North American gallery showcasing full living and dining vignettes, fabric swatch pick-ups, and white-glove delivery coordination.",
  },
];

export const ABOUT_METRICS: AboutMetric[] = [
  {
    value: "100%",
    label: "FSC-Certified Timber",
    detail: "Responsibly harvested European and American hardwoods",
  },
  {
    value: "15-Year",
    label: "Joinery Warranty",
    detail: "Guaranteed repairable mortise-and-tenon framework",
  },
  {
    value: "0%",
    label: "Synthetic Polyurethane",
    detail: "Pure matte plant-based hardwax oil finishes",
  },
  {
    value: "14",
    label: "Independent Workshops",
    detail: "Direct artisan partnerships with family studios",
  },
];
