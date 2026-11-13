"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface ParallaxSectionProps {
  bgImage: string;
  bgAlt: string;
  children: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  speed?: number;
  ariaLabel?: string;
}

export function ParallaxSection({
  bgImage,
  bgAlt,
  children,
  overlayClassName = "bg-[#161412]/80",
  className = "relative min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden text-white",
  speed = 6,
  ariaLabel,
}: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll(
    mounted && containerRef.current
      ? {
          target: containerRef,
          offset: ["start end", "end start"],
        }
      : {}
  );

  // Direct 1:1 hardware-accelerated transform with zero latency
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${speed}%`, `${speed}%`]
  );

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", contain: "paint" }}
      className="overflow-hidden"
    >
      <section aria-label={ariaLabel} className={className}>
        <motion.div
          style={{ y: mounted ? parallaxY : 0, translateZ: 0 }}
          className="absolute inset-x-0 -top-16 -bottom-16 w-full h-[calc(100%+8rem)] pointer-events-none will-change-transform transform-gpu"
        >
          <img
            src={bgImage}
            alt={bgAlt}
            className="w-full h-full object-cover select-none pointer-events-none"
            loading="lazy"
            decoding="async"
          />
          <div className={`absolute inset-0 ${overlayClassName}`} />
        </motion.div>
        <div className="relative z-10 w-full">{children}</div>
      </section>
    </div>
  );
}
