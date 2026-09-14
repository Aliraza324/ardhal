import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import heroImg from "../../assets/hero.jpg";
import {
  fadeInUp,
  staggerContainer,
  btnClick,
  subtleHoverLift,
} from "../animations/animations";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-950 text-white min-h-[520px] sm:min-h-[580px] md:min-h-[640px] lg:min-h-[700px] flex items-center">
      {/* Background Image with Crisp Cover */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Ardhal Khaleej Luxury Car Parts"
          className="w-full h-full object-cover object-center sm:object-[center_right] scale-105 transform duration-1000 ease-out"
        />

        {/* Sophisticated Dark Gradient Overlay (Optimized for left-side text legibility) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/30 sm:from-black/90 sm:via-black/65 sm:to-black/20" />

        {/* Subtle Top & Bottom Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* Hero Content Container - Aligned to the Left */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20 md:py-28">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-left"
        >
          {/* Subtle Trust Pill */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-zinc-200 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-red-500" />
            <span>100% Genuine & OEM Spare Parts</span>
          </motion.div>

          {/* Main Headline (From Reference Image) */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight sm:tracking-wide text-white uppercase leading-[1.1] drop-shadow-md"
          >
            ARDH AL KHALEEJ AUTO
          </motion.h1>

          {/* Tagline (From Reference Image) */}
          <motion.p
            variants={fadeInUp}
            className="mt-3 sm:mt-4 text-lg sm:text-2xl md:text-3xl font-serif italic text-zinc-200 font-light tracking-wide"
          >
            Drive Further With Quality Parts
          </motion.p>

          {/* Description / Car Origins (From Reference Image) */}
          <motion.p
            variants={fadeInUp}
            className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg text-zinc-300/90 font-sans leading-relaxed"
          >
            We Deal in American, German, Japanese, Korean and Chinese Car Parts
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
          >
            {/* Primary Action Button */}
            <motion.a
              {...btnClick}
              href="#products"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm sm:text-base shadow-lg shadow-red-950/50 hover:shadow-red-800/60 transition-colors group cursor-pointer"
            >
              <span>Explore Parts Catalog</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>

            {/* Secondary WhatsApp Action Button */}
            <motion.a
              {...btnClick}
              href="https://api.whatsapp.com/send?phone=971555493031&text=Hello%2C%20I%20need%20a%20price%20quote%20for%20car%20parts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-sm sm:text-base transition-colors cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 fill-emerald-400 shrink-0" />
              <span>Instant WhatsApp Quote</span>
            </motion.a>
          </motion.div>

          {/* Key Trust Highlights */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-6 text-left"
          >
            <motion.div {...subtleHoverLift}>
              <p className="text-base sm:text-2xl font-bold text-white tracking-tight">26+</p>
              <p className="text-[11px] sm:text-xs text-zinc-400 font-medium">Global Car Brands</p>
            </motion.div>
            <motion.div {...subtleHoverLift}>
              <p className="text-base sm:text-2xl font-bold text-white tracking-tight">100%</p>
              <p className="text-[11px] sm:text-xs text-zinc-400 font-medium">OEM Guarantee</p>
            </motion.div>
            <motion.div {...subtleHoverLift}>
              <p className="text-base sm:text-2xl font-bold text-white tracking-tight">Fast</p>
              <p className="text-[11px] sm:text-xs text-zinc-400 font-medium">UAE & GCC Dispatch</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}