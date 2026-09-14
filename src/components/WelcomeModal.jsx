import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, ArrowRight, ShieldCheck, Check } from "lucide-react";
import welcomeCarImg from "../assets/welcome_car.jpg";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem("ardhal_welcome_dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("ardhal_welcome_dismissed", "true");
    if (dontShowAgain) {
      localStorage.setItem("ardhal_welcome_dismissed_permanent", "true");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-6 select-none overflow-y-auto">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer z-0"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-zinc-200/80 overflow-hidden grid grid-cols-1 md:grid-cols-12 my-auto"
          >
            {/* Close Button (X) */}
            <button
              onClick={handleClose}
              aria-label="Close modal"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 p-2 rounded-full bg-zinc-100/90 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-950 transition-all duration-200 shadow-md hover:rotate-90"
            >
              <X className="w-5 h-5" />
            </button>

            {/* ========================================================= */}
            {/* LEFT SIDE: Beautiful Supercar Image (md:col-span-5)      */}
            {/* ========================================================= */}
            <div className="md:col-span-5 relative min-h-[220px] sm:min-h-[300px] md:min-h-full bg-zinc-950 overflow-hidden">
              <img
                src={welcomeCarImg}
                alt="Luxury Supercar Showcase"
                className="w-full h-full object-cover object-center scale-105"
              />
              {/* Subtle Contrast Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Bottom Badge Over Image */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold tracking-wider uppercase mb-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Premium Auto Parts
                </div>
                <div className="text-xs text-zinc-300 font-medium tracking-wide drop-shadow-sm">
                  Precision Engineering • Original OEM Standards
                </div>
              </div>
            </div>

            {/* ========================================================= */}
            {/* RIGHT SIDE: Content from Reference (md:col-span-7)       */}
            {/* ========================================================= */}
            <div className="md:col-span-7 p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col justify-between text-left">
              <div>
                {/* Brand Tag */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 border border-red-200/80 text-[#ff3b30] text-[11px] font-semibold uppercase tracking-wider mb-2 sm:mb-2.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Official Welcome
                </div>

                {/* Main Heading (Exact from Reference) */}
                <h2 className="text-xl sm:text-2xl lg:text-[28px] font-serif font-bold text-zinc-950 tracking-tight leading-snug">
                  Welcome to <br className="hidden sm:inline" />
                  <span className="text-[#0f2b4c]">ARDH AL KHALEEJ AUTO</span>
                </h2>

                {/* Body Text (Exact Copy from Reference Image) */}
                <div className="mt-2.5 sm:mt-3 space-y-2 text-xs sm:text-[13px] leading-relaxed text-zinc-600 font-normal">
                  <p>
                    We are your premier destination for top-quality auto spare
                    parts. With an extensive selection for all makes and models,
                    we are dedicated to helping you keep your vehicle running
                    smoothly and safely.
                  </p>
                  <p>
                    Our commitment to quality and customer satisfaction sets us
                    apart. We source our parts from trusted manufacturers,
                    ensuring you receive reliable products every time. Whether
                    you’re a professional mechanic or a DIY enthusiast, our
                    knowledgeable team is here to provide expert advice and
                    support.
                  </p>
                  <p className="text-zinc-700 font-medium">
                    Explore our range of auto parts and experience our exceptional
                    service. Thank you for choosing{" "}
                    <span className="font-semibold text-zinc-950">
                      ARDH AL KHALEEJ GENERAL TRADING FZE LLC
                    </span>{" "}
                    we’re excited to help you get back on the road!
                  </p>
                </div>
              </div>

              {/* Actions & Footer */}
              <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-zinc-200">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={handleClose}
                    className="flex-1 bg-[#ff3b30] hover:bg-[#e0342b] active:bg-[#c92f27] text-white font-bold text-sm sm:text-base py-3 px-5 rounded-xl shadow-md hover:shadow-red-500/20 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Explore Products</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={handleClose}
                    className="sm:w-auto px-5 py-3 rounded-xl border border-zinc-300 hover:bg-zinc-100 text-zinc-700 font-semibold text-sm transition-colors cursor-pointer"
                  >
                    Enter Site
                  </button>
                </div>

                {/* "Don't show again" Checkbox */}
                <label className="flex items-center gap-2 mt-3.5 text-xs text-zinc-500 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={dontShowAgain}
                    onChange={(e) => setDontShowAgain(e.target.checked)}
                    className="rounded border-zinc-300 text-red-600 focus:ring-red-500 w-3.5 h-3.5 cursor-pointer"
                  />
                  <span>Don't show this message again</span>
                </label>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
