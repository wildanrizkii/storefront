"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export interface ParallaxSectionProps {
  bgImage: string;
  bgAlt: string;
  children: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  speed?: number;
  offset?: [
    "start start" | "start end" | "center start" | "center center" | string,
    "end start" | "end end" | "center start" | string
  ];
  yRange?: any[];
  ariaLabel?: string;
  priority?: boolean;
  fixed?: boolean;
}

export function ParallaxSection({
  bgImage,
  bgAlt,
  children,
  overlayClassName = "bg-[#161412]/80",
  className = "relative min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden text-white",
  speed = 6,
  offset = ["start end", "end start"],
  yRange,
  ariaLabel,
  priority = false,
  fixed = false,
}: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset as any,
  });

  // Direct GPU hardware-accelerated transform with pixel-based values to eliminate layout recalcs
  const defaultYRange =
    offset[0] === "start start"
      ? [0, speed * 12]
      : [-speed * 8, speed * 8];

  const rawY = useTransform(scrollYProgress, [0, 1], yRange || defaultYRange);

  // Smooth spring physics eliminates mousewheel step jitter and delivers buttery inertia
  const smoothY = useSpring(rawY, {
    stiffness: 350,
    damping: 38,
    mass: 0.1,
  });

  const bleedClassName =
    speed > 10
      ? "absolute inset-x-0 -top-[20%] w-full h-[140%] pointer-events-none will-change-transform"
      : "absolute inset-x-0 -top-16 -bottom-16 w-full h-[calc(100%+8rem)] pointer-events-none will-change-transform";

  if (fixed) {
    return (
      <div
        ref={containerRef}
        style={{ position: "relative", clipPath: "inset(0)" }}
        className="overflow-hidden"
      >
        <section aria-label={ariaLabel} className={className}>
          <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
            <img
              src={bgImage}
              alt={bgAlt}
              className="w-full h-full object-cover select-none pointer-events-none"
              loading={priority ? "eager" : "lazy"}
              fetchPriority={priority ? "high" : "auto"}
              decoding="async"
            />
            <div className={`absolute inset-0 ${overlayClassName}`} />
          </div>
          <div className="relative z-10 w-full flex-1 flex flex-col">{children}</div>
        </section>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", contain: "paint" }}
      className="overflow-hidden"
    >
      <section aria-label={ariaLabel} className={className}>
        <motion.div
          style={{
            y: smoothY,
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
          }}
          className={bleedClassName}
        >
          <img
            src={bgImage}
            alt={bgAlt}
            style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
            className="w-full h-full object-cover select-none pointer-events-none"
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
          />
          <div className={`absolute inset-0 ${overlayClassName}`} />
        </motion.div>
        <div className="relative z-10 w-full flex-1 flex flex-col">{children}</div>
      </section>
    </div>
  );
}
