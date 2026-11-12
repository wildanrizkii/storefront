"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HERO_IMAGE_URL, STORY_IMAGES } from "../../data/landingData";
import { Newsletter } from "../layout/Newsletter";
import { Footer } from "../layout/Footer";

const WORKSHOP_PILLARS = [
  {
    number: "01",
    title: "FSC-Certified Hardwoods",
    description:
      "Every oak, ash, and walnut board is responsibly harvested and kiln-dried for residential stability across seasonal humidity changes.",
  },
  {
    number: "02",
    title: "Zero-VOC Plant Oils",
    description:
      "Instead of sealing timber beneath synthetic polyurethane, we finish surfaces with matte plant-based hardwax oil that welcomes spot repairs.",
  },
  {
    number: "03",
    title: "Repairable Joinery",
    description:
      "Mortise-and-tenon frames, removable Belgian linen slipcovers, and modular steel connectors extend every piece well beyond 15 years.",
  },
];

export function AboutPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#161412] font-sans antialiased">
      <main className="flex-grow">
        {/* Editorial Header */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-12 pb-16 border-b border-[#ECE7DE]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[12px] font-semibold tracking-[0.2em] text-[#8F6232] uppercase block">
                OUR ATELIER &amp; CRAFT
              </span>
              <h1 className="font-serif-display text-4xl sm:text-5xl xl:text-6xl font-medium tracking-tight text-[#161412] leading-[1.08]">
                Furniture should{" "}
                <span className="italic text-[#8F6232] font-normal">
                  tell a story
                </span>
              </h1>
              <p className="text-[#6B655D] text-base sm:text-lg leading-relaxed max-w-xl">
                Founded between Copenhagen and Portland, Luma &amp; Living partners with small-batch cabinetmakers, weavers, and ceramic studios to build calm, tactile interiors that age gracefully over decades.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#161412] text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition min-h-11"
                >
                  Browse Catalogue →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-[#D5CFC5] text-[#161412] rounded-full text-sm font-medium hover:bg-[#EFEAE1] transition min-h-11"
                >
                  Visit a Showroom
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#ECE6DC]">
                <img
                  src={HERO_IMAGE_URL}
                  alt="Luma and Living living room showcase"
                  width={960}
                  height={720}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Craftsmanship Pillars */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 items-stretch">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/6] bg-[#ECE5DB]">
                <img
                  src={STORY_IMAGES.craftsman}
                  alt="Craftsman working in furniture studio"
                  width={560}
                  height={840}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#ECE5DB]">
                  <img
                    src={STORY_IMAGES.joinery}
                    alt="Precision oak woodwork joint"
                    width={560}
                    height={560}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#F2ECE1] p-6 rounded-2xl flex flex-col justify-center border border-[#E5DECF] flex-1">
                  <span className="font-serif-display text-3xl text-[#161412]">
                    5-Year
                  </span>
                  <p className="text-xs text-[#6B655D] mt-1">
                    Residential structural joinery warranty on every solid timber frame.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-8">
              <div>
                <h2 className="font-serif-display text-3xl sm:text-4xl text-[#161412]">
                  Materials chosen for{" "}
                  <span className="italic text-[#8F6232] font-normal">
                    longevity
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-[#6B655D] leading-relaxed mt-3">
                  We work directly with family-owned workshops using European white oak, Belgian linen, New Zealand wool, and wheel-thrown stoneware clay.
                </p>
              </div>

              <div className="space-y-6">
                {WORKSHOP_PILLARS.map((pillar) => (
                  <div
                    key={pillar.number}
                    className="p-5 rounded-2xl bg-[#F3EFE8] border border-[#E8E4DC] flex items-start gap-4"
                  >
                    <span className="font-serif-display text-2xl text-[#8F6232] leading-none pt-0.5">
                      {pillar.number}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-[#161412]">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#6B655D] mt-1 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Studio Metrics */}
        <section className="bg-[#161412] text-white py-16">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="space-y-1">
              <p className="font-serif-display text-4xl text-[#D4A875]">
                2 Cities
              </p>
              <p className="text-xs uppercase tracking-wider text-[#B5AEA5]">
                Copenhagen &amp; Portland Showrooms
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-serif-display text-4xl text-[#D4A875]">
                100% FSC
              </p>
              <p className="text-xs uppercase tracking-wider text-[#B5AEA5]">
                Responsibly Harvested Timber
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-serif-display text-4xl text-[#D4A875]">
                30 Days
              </p>
              <p className="text-xs uppercase tracking-wider text-[#B5AEA5]">
                In-Home Residential Trial
              </p>
            </div>
          </div>
        </section>
      </main>

      <Newsletter />
      <Footer
        onSelectCategory={(cat) =>
          router.push(
            cat === "All" ? "/shop" : `/shop?category=${encodeURIComponent(cat)}`
          )
        }
        onOpenInfoModal={(topic) => {
          if (topic === "About") router.push("/about");
          else if (topic === "Contact") router.push("/contact");
          else router.push("/shop");
        }}
      />
    </div>
  );
}
