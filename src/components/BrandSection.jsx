import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { allBrandsList, getBrandLogo } from "../data/brandImages";
import { ShieldCheck, Sparkles } from "lucide-react";

// Equal division: 9 brands in each of the 3 rows (27 brands total)
const row1Brands = allBrandsList.slice(0, 9);
const row2Brands = allBrandsList.slice(9, 18);
const row3Brands = allBrandsList.slice(18, 27);

// Repeated arrays to allow seamless, continuous scroll translation
const track1 = [...row1Brands, ...row1Brands, ...row1Brands, ...row1Brands];
const track2 = [...row2Brands, ...row2Brands, ...row2Brands, ...row2Brands];
const track3 = [...row3Brands, ...row3Brands, ...row3Brands, ...row3Brands];

function BrandCard({ brand }) {
  const logoUrl = getBrandLogo(brand.name);

  return (
    <div className="shrink-0 w-48 sm:w-56 h-24 sm:h-28 rounded-2xl bg-white border border-zinc-200/90 shadow-xs hover:shadow-lg hover:border-red-400/80 p-3 sm:p-4 flex items-center justify-between gap-3 group transition-all duration-300 cursor-pointer hover:-translate-y-1">
      {/* Brand Logo Container */}
      <div className="flex-1 h-full flex items-center justify-center p-1 bg-zinc-50/60 rounded-xl group-hover:bg-red-50/40 transition-colors">
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={`${brand.name} Genuine Auto Parts`}
            className="max-h-12 max-w-[100px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <span className="font-bold text-sm text-zinc-800">{brand.name}</span>
        )}
      </div>

      {/* Brand Info Pill */}
      <div className="flex flex-col items-end justify-center text-right shrink-0">
        <h4 className="font-bold text-xs sm:text-sm text-zinc-900 group-hover:text-red-600 transition-colors tracking-tight">
          {brand.name}
        </h4>
        <span className="text-[10px] text-zinc-400 font-medium tracking-wide">
          {brand.origin || "OEM Spec"}
        </span>
        <span className="mt-1 text-[9px] font-semibold px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 group-hover:bg-red-100/70 group-hover:text-red-700 transition-colors">
          {brand.tag || "Genuine"}
        </span>
      </div>
    </div>
  );
}

export default function BrandSection() {
  const sectionRef = useRef(null);

  // Track scroll progress across the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring physics for fluid movement
  const springConfig = { stiffness: 75, damping: 25, restDelta: 0.001 };

  // Row 1: Moves LEFT on scroll
  const rawX1 = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);
  const x1 = useSpring(rawX1, springConfig);

  // Row 2: Moves RIGHT on scroll
  const rawX2 = useTransform(scrollYProgress, [0, 1], ["-28%", "0%"]);
  const x2 = useSpring(rawX2, springConfig);

  // Row 3: Moves LEFT on scroll
  const rawX3 = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);
  const x3 = useSpring(rawX3, springConfig);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 overflow-hidden border-t border-zinc-200/70 select-none"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-red-600 text-xs font-bold uppercase tracking-wider mb-3.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Global Automaker Coverage</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-zinc-950 font-sans">
          Supported <span className="text-red-600">Car Brands</span>
        </h2>

        <p className="mt-3.5 text-xs sm:text-sm md:text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Sourcing genuine OEM and certified aftermarket replacement parts for
          26+ global automakers across American, European, and Asian markets.
        </p>
      </div>

      {/* 3-Row Scroll Slider Container with Left/Right Edge Fades */}
      <div className="relative w-full overflow-hidden space-y-4 sm:space-y-6">
        {/* Left & Right Soft Gradient Vignettes */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

        {/* Row 1: Moves Left on scroll */}
        <div className="flex overflow-hidden py-1">
          <motion.div style={{ x: x1 }} className="flex gap-4 sm:gap-6 will-change-transform">
            {track1.map((brand, idx) => (
              <BrandCard key={`r1-${brand.name}-${idx}`} brand={brand} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moves Right on scroll */}
        <div className="flex overflow-hidden py-1">
          <motion.div style={{ x: x2 }} className="flex gap-4 sm:gap-6 will-change-transform">
            {track2.map((brand, idx) => (
              <BrandCard key={`r2-${brand.name}-${idx}`} brand={brand} />
            ))}
          </motion.div>
        </div>

        {/* Row 3: Moves Left on scroll */}
        <div className="flex overflow-hidden py-1">
          <motion.div style={{ x: x3 }} className="flex gap-4 sm:gap-6 will-change-transform">
            {track3.map((brand, idx) => (
              <BrandCard key={`r3-${brand.name}-${idx}`} brand={brand} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
