"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { STORY_IMAGES } from "../../data/landingData";
import {
  ABOUT_HERO,
  ABOUT_TIMELINE,
  ABOUT_PILLARS,
  ABOUT_MAKERS,
  ABOUT_SHOWROOMS,
  ABOUT_METRICS,
} from "../../data/aboutData";
import { ParallaxSection } from "../ui/ParallaxSection";
import { Newsletter } from "../layout/Newsletter";
import { Footer } from "../layout/Footer";

export function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#161412] font-sans antialiased">
      <main className="grow">
        {/* Editorial Hero */}
        <section
          aria-labelledby="about-hero-title"
          className="max-w-350 mx-auto px-6 lg:px-12 pt-12 pb-16 lg:pb-20 border-b border-[#ECE7DE]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#8F6232] uppercase">
                  {ABOUT_HERO.eyebrow}
                </span>
                <span className="text-[#D5CFC5]" aria-hidden="true">
                  •
                </span>
                <span className="text-xs text-[#6B655D] font-medium">
                  {ABOUT_HERO.foundedYear}
                </span>
              </div>

              <h1
                id="about-hero-title"
                className="font-serif-display text-4xl sm:text-5xl xl:text-6xl font-medium tracking-tight text-[#161412] leading-[1.08]"
              >
                Crafting Calm Spaces with{" "}
                <span className="italic text-[#8F6232] font-normal">
                  Intention &amp; Honest Timber
                </span>
              </h1>

              <p className="text-[#6B655D] text-base sm:text-lg leading-relaxed max-w-2xl">
                {ABOUT_HERO.subtitle}
              </p>

              <blockquote className="border-l-2 border-[#8F6232] pl-5 py-1 italic text-sm sm:text-base text-[#161412] bg-[#F4EFE6]/60 rounded-r-xl pr-4">
                "{ABOUT_HERO.manifestoQuote}"
              </blockquote>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#161412] text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition min-h-11 shadow-sm"
                >
                  Explore Collection
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-[#D5CFC5] text-[#161412] rounded-full text-sm font-medium hover:bg-[#EFEAE1] transition min-h-11"
                >
                  Visit an Atelier
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden aspect-4/5 bg-[#ECE5DB] shadow-md border border-[#E4DEC3]">
                <img
                  src={ABOUT_HERO.imageUrl}
                  alt={ABOUT_HERO.imageAlt}
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-white/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#8F6232] font-semibold">
                        Living Philosophy
                      </p>
                      <p className="text-xs sm:text-sm font-medium text-[#161412] mt-0.5">
                        Tactile white oak, Belgian linen, natural oils
                      </p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-[#161412] text-white rounded-full shrink-0">
                      Copenhagen &amp; Portland
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Timeline / Journey */}
        <section
          aria-labelledby="timeline-title"
          className="max-w-350 mx-auto px-6 lg:px-12 py-16 lg:py-24 border-b border-[#ECE7DE]"
        >
          <div className="max-w-2xl mb-12 lg:mb-16">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#8F6232] uppercase block mb-3">
              OUR CHRONICLE
            </span>
            <h2
              id="timeline-title"
              className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#161412] leading-tight"
            >
              From a Copenhagen bench to{" "}
              <span className="italic text-[#8F6232] font-normal">
                fourteen artisan ateliers
              </span>
            </h2>
            <p className="text-[#6B655D] text-sm sm:text-base leading-relaxed mt-4">
              We started with a simple conviction: modern homes do not need more disposable furniture. They need fewer, more thoughtful pieces that age with character.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_TIMELINE.map((item, index) => (
              <article
                key={item.year}
                className="bg-[#F6F2EB] rounded-2xl p-6 border border-[#E9E4DC] flex flex-col justify-between hover:border-[#D5CFC5] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif-display text-3xl font-medium text-[#8F6232]">
                      {item.year}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white border border-[#E2DDD5] text-[#6B655D]">
                      Phase 0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-serif-display text-lg font-medium text-[#161412] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] uppercase tracking-wider text-[#8F6232] font-medium mb-3">
                    {item.location}
                  </p>
                  <p className="text-xs sm:text-[13px] text-[#6B655D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Craft Philosophy & Material Pillars */}
        <section
          aria-labelledby="philosophy-title"
          className="max-w-350 mx-auto px-6 lg:px-12 py-16 lg:py-24 border-b border-[#ECE7DE]"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#8F6232] uppercase block mb-3">
                MATERIAL HONESTY
              </span>
              <h2
                id="philosophy-title"
                className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#161412] leading-tight"
              >
                Built to be repaired,{" "}
                <span className="italic text-[#8F6232] font-normal">
                  never discarded
                </span>
              </h2>
            </div>
            <p className="text-[#6B655D] text-xs sm:text-sm max-w-md leading-relaxed">
              Every detail is calibrated for repairability: non-toxic finishes, modular fasteners, and solid timbers that can be planed, sanded, and refreshed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="p-6 rounded-2xl bg-white border border-[#E9E4DC] hover:shadow-sm transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif-display text-2xl text-[#8F6232] font-medium">
                      {pillar.number}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#6B655D] bg-[#F5F1EA] px-2.5 py-1 rounded-full font-medium">
                      {pillar.tag}
                    </span>
                  </div>
                  <h3 className="font-serif-display text-lg font-medium text-[#161412] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#6B655D] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Meet the Makers / Artisans */}
        <section
          aria-labelledby="makers-title"
          className="max-w-350 mx-auto px-6 lg:px-12 py-16 lg:py-24 border-b border-[#ECE7DE]"
        >
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#8F6232] uppercase block mb-3">
              THE ARTISANS
            </span>
            <h2
              id="makers-title"
              className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#161412] leading-tight"
            >
              Hands behind the{" "}
              <span className="italic text-[#8F6232] font-normal">
                quiet details
              </span>
            </h2>
            <p className="text-[#6B655D] text-sm sm:text-base leading-relaxed mt-4">
              Our studio unites architects, master woodturners, and textile specialists dedicated to Scandinavian design principles and honest materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ABOUT_MAKERS.map((maker) => (
              <article
                key={maker.name}
                className="bg-[#F8F5EE] rounded-3xl p-7 border border-[#E8E2D6] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full bg-[#161412] text-[#D4A875] flex items-center justify-center font-serif-display text-lg font-medium shadow-sm shrink-0">
                      {maker.initials}
                    </div>
                    <div>
                      <h3 className="font-serif-display text-xl text-[#161412] font-medium leading-snug">
                        {maker.name}
                      </h3>
                      <p className="text-xs text-[#8F6232] font-semibold uppercase tracking-wider mt-0.5">
                        {maker.role}
                      </p>
                      <p className="text-[11px] text-[#6B655D]">
                        {maker.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#6B655D] leading-relaxed mb-6">
                    {maker.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E3DDCF]">
                  <span className="text-[10px] uppercase tracking-wider text-[#6B655D] block mb-1">
                    Specialty Craft
                  </span>
                  <span className="text-xs font-medium text-[#161412]">
                    {maker.specialty}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Studios & Showrooms */}
        <section
          aria-labelledby="showrooms-title"
          className="max-w-350 mx-auto px-6 lg:px-12 py-16 lg:py-24 border-b border-[#ECE7DE]"
        >
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#8F6232] uppercase block mb-3">
              PHYSICAL SPACES
            </span>
            <h2
              id="showrooms-title"
              className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#161412] leading-tight"
            >
              Visit our ateliers in{" "}
              <span className="italic text-[#8F6232] font-normal">
                Copenhagen &amp; Portland
              </span>
            </h2>
            <p className="text-[#6B655D] text-sm sm:text-base leading-relaxed mt-4">
              Experience the warmth of solid oak, test seating angles, and touch our complete library of Belgian linen and wool swatches in person.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ABOUT_SHOWROOMS.map((showroom) => (
              <div
                key={showroom.city}
                className="bg-white rounded-3xl p-8 border border-[#E9E4DC] flex flex-col justify-between hover:border-[#D5CFC5] transition-colors"
              >
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8F6232] bg-[#F5EFE6] px-3 py-1 rounded-full inline-block mb-4">
                    {showroom.tag}
                  </span>
                  <h3 className="font-serif-display text-2xl text-[#161412] font-medium mb-2">
                    {showroom.city}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B655D] leading-relaxed mb-6">
                    {showroom.description}
                  </p>

                  <div className="space-y-3 text-xs sm:text-[13px] text-[#161412] border-t border-[#ECE7DE] pt-5">
                    <div className="flex items-start gap-3">
                      <span className="text-[#8F6232] font-medium w-16 shrink-0">
                        Address:
                      </span>
                      <span className="text-[#6B655D]">{showroom.address}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#8F6232] font-medium w-16 shrink-0">
                        Hours:
                      </span>
                      <span className="text-[#6B655D]">{showroom.hours}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#8F6232] font-medium w-16 shrink-0">
                        Phone:
                      </span>
                      <span className="text-[#6B655D]">{showroom.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#ECE7DE] flex items-center justify-between">
                  <span className="text-xs text-[#6B655D]">
                    Private consultations available
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-xs font-semibold text-[#161412] hover:text-[#8F6232] transition group gap-1"
                  >
                    <span>Book consultation</span>
                    <span
                      aria-hidden="true"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Atelier Heritage & Sustainability Metrics (Parallax) */}
        <ParallaxSection
          bgImage={STORY_IMAGES.craftsman}
          bgAlt="Heritage craftsmanship in woodworking atelier"
          ariaLabel="Sustainability and craftsmanship metrics"
          overlayClassName="bg-[#161412]/80"
          speed={6}
        >
          <div className="max-w-350 mx-auto px-6 lg:px-12 py-24 lg:py-32">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.div
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#D4A875] font-semibold mb-4 block">
                  OUR HERITAGE &amp; PROMISE
                </span>
                <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                  Crafted with Intention,
                  <br />
                  <span className="italic text-[#D4A875] font-normal">
                    Built for Generations
                  </span>
                </h2>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                  Every piece is meticulously shaped in family-owned workshops across Scandinavia and the Pacific Northwest, where time-honored joinery meets calm, contemporary living.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {ABOUT_METRICS.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 * (idx + 1) }}
                  className="p-6 lg:p-8 rounded-2xl bg-[#1F1D1A]/90 border border-white/10 text-center sm:text-left space-y-2 hover:border-white/20 transition-colors"
                >
                  <p className="font-serif-display text-4xl lg:text-5xl text-[#D4A875] tracking-tight">
                    {metric.value}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-white font-medium">
                    {metric.label}
                  </p>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {metric.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ParallaxSection>

        {/* Editorial Closing CTA */}
        <section className="max-w-350 mx-auto px-6 lg:px-12 py-20 lg:py-28 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#8F6232] uppercase block">
              EXPERIENCE LUMA &amp; LIVING
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#161412] leading-tight">
              Begin with pieces that{" "}
              <span className="italic text-[#8F6232] font-normal">
                endure
              </span>
            </h2>
            <p className="text-[#6B655D] text-sm sm:text-base leading-relaxed">
              Explore our full catalogue of handcrafted seating, solid oak tables, and artisan stoneware lighting designed for quiet everyday living.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#161412] text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition min-h-11 shadow-sm"
              >
                Browse All Pieces →
              </Link>
              <Link
                href="/collections"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-[#D5CFC5] text-[#161412] rounded-full text-sm font-medium hover:bg-[#EFEAE1] transition min-h-11"
              >
                Explore Curated Series
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}
