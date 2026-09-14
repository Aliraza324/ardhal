import React from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Brands", href: "#brands", highlight: true },
    { name: "Products", href: "#products" },
    { name: "Contact Us", href: "#contact" },
  ];

  const vehicleOrigins = [
    "American",
    "German",
    "Japanese",
    "Korean",
    "Chinese",
  ];

  const mapAddress =
    "Business Center, Sharjah Publishing Free Zone, Sharjah, United Arab Emirates";
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapAddress
  )}`;

  return (
    <footer className="relative w-full bg-[#050505] text-zinc-300 font-sans select-none overflow-hidden border-t border-zinc-900">
      {/* Top subtle decorative gradient accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-36 bg-red-600/10 blur-3xl pointer-events-none rounded-full" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* ========================================================= */}
          {/* COLUMN 1: Company Logo & Description (lg:col-span-5)     */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col items-start text-left space-y-6">
            {/* Logo */}
            <a href="/" className="inline-block group">
              <div className="bg-white p-2.5 sm:p-3 rounded-2xl shadow-md border border-white/20 transition-transform duration-300 group-hover:scale-105 inline-flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Ardh Al Khaleej General Trading FZE LLC"
                  className="h-14 sm:h-16 md:h-18 w-auto object-contain"
                />
              </div>
            </a>

            {/* Exact Company Description from Reference */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-md font-normal">
              <strong className="text-white font-semibold">
                ARDH AL KHALEEJ GENERAL TRADING FZE LLC
              </strong>{" "}
              is a top automotive spare parts company in Sharjah, UAE,
              specializing in high-quality American, German, Japanese Korean and
              Chinese Car Parts.
            </p>

            {/* Vehicle Origin Badges */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Specialized In Parts For:
              </div>
              <div className="flex flex-wrap gap-2">
                {vehicleOrigins.map((origin) => (
                  <span
                    key={origin}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-900/90 text-zinc-300 border border-zinc-800 hover:border-red-500/50 hover:text-white transition-colors"
                  >
                    {origin}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 2: Contact Info (lg:col-span-4)                    */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 flex flex-col items-start text-left space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight relative inline-block">
              Contact Info
              <span className="block h-1 w-10 bg-red-600 rounded-full mt-2" />
            </h3>

            <div className="space-y-4 text-sm sm:text-[15px] w-full">
              {/* Location */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 group text-zinc-300 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0 mt-0.5 group-hover:bg-red-500 group-hover:text-white transition-all">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1 leading-snug">
                  <span>
                    Business Center, Sharjah Publishing Free Zone, Sharjah,
                    United Arab Emirates.
                  </span>
                </div>
              </a>

              {/* Office Hours */}
              <div className="flex items-start gap-3.5 text-zinc-300">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="flex-1 leading-snug">
                  <div>Office time: Saturday - Thursday: 9am — 8pm</div>
                  <div className="text-red-400 font-medium mt-0.5">
                    Friday: Close
                  </div>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+971555533071"
                className="flex items-center gap-3.5 group text-zinc-300 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0 group-hover:bg-red-500 group-hover:text-white transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium tracking-wide">
                  +971 55 553 3071
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/971555493031"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 group text-zinc-300 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <span className="font-medium tracking-wide">
                  +971 55 549 3031
                </span>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full ml-1">
                  Chat Now
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:sales@ardhalkhaleejauto.com"
                className="flex items-center gap-3.5 group text-zinc-300 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0 group-hover:bg-red-500 group-hover:text-white transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium break-all">
                  sales@ardhalkhaleejauto.com
                </span>
              </a>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 3: Quick Links (lg:col-span-3)                     */}
          {/* ========================================================= */}
          <div className="lg:col-span-3 flex flex-col items-start text-left space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight relative inline-block">
              Quick Links
              <span className="block h-1 w-10 bg-red-600 rounded-full mt-2" />
            </h3>

            <ul className="space-y-3.5 text-base sm:text-lg w-full">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`inline-flex items-center gap-2 transition-all duration-200 hover:translate-x-1.5 ${
                      link.highlight
                        ? "text-red-500 font-semibold hover:text-red-400"
                        : "text-zinc-300 hover:text-white"
                    }`}
                  >
                    <ChevronRight
                      className={`w-4 h-4 transition-colors ${
                        link.highlight ? "text-red-500" : "text-zinc-600"
                      }`}
                    />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Genuine Parts Assurance Tag */}
            <div className="pt-4 border-t border-zinc-900 w-full">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-xs text-zinc-300">
                  <strong className="text-white block font-semibold">
                    100% Genuine Parts
                  </strong>
                  Direct OEM & Certified Aftermarket
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================= */}
      {/* BOTTOM COPYRIGHT & LEGAL BAR                                  */}
      {/* ============================================================= */}
      <div className="w-full bg-[#020202] border-t border-zinc-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} ARDH AL KHALEEJ GENERAL TRADING FZE LLC. All
            Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              Warranty & Returns
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
