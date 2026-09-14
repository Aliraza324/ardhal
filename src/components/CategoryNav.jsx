import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  Search,
  X,
  Flame,
  Layers,
  Car,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { categoriesData } from "../data/navData";
import {
  allBrandsList,
  alphabetList,
  brandGroups,
  getBrandLogo,
} from "../data/brandImages";
import {
  dropdownVariants,
  btnClick,
  subtleHoverLift,
} from "./animations/animations";

export default function CategoryNav() {
  const [activeMenu, setActiveMenu] = useState(null); // 'brands' | 'categories' | null
  const [selectedBrandTab, setSelectedBrandTab] = useState("Featured Brands");
  const [brandSearch, setBrandSearch] = useState("");
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [visibleCount, setVisibleCount] = useState(18); // Load more pagination

  const navContainerRef = useRef(null);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(e.target)
      ) {
        setActiveMenu(null);
      }
    };
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  // Filtered A-Z brand lists for left column
  const groupedAlphaBrands = useMemo(() => {
    const query = brandSearch.trim().toLowerCase();
    const filtered = allBrandsList.filter((b) =>
      b.name.toLowerCase().includes(query)
    );

    const groups = {};
    filtered.forEach((b) => {
      const letter = b.letter || "#";
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(b);
    });
    return groups;
  }, [brandSearch]);

  // Filtered Brand Cards for the right grid
  const displayedBrandCards = useMemo(() => {
    let list = allBrandsList;
    if (selectedBrandTab === "Featured Brands") {
      list = allBrandsList.filter((b) =>
        [
          "Rolls Royce",
          "Bentley",
          "Lamborghini",
          "Porsche",
          "Mercedes",
          "BMW",
          "Audi",
          "Range Rover",
          "Toyota",
          "Lexus",
          "Tesla",
          "Ford",
          "Jeep",
          "Dodge",
          "Maserati",
          "Jaguar",
          "Nissan",
          "VW",
        ].includes(b.name)
      );
    } else if (selectedBrandTab !== "All Brands A-Z") {
      list = allBrandsList.filter((b) => b.group === selectedBrandTab);
    }

    if (selectedLetter) {
      list = list.filter((b) => b.letter === selectedLetter);
    }

    if (brandSearch.trim()) {
      const q = brandSearch.trim().toLowerCase();
      list = list.filter((b) => b.name.toLowerCase().includes(q));
    }

    return list;
  }, [selectedBrandTab, selectedLetter, brandSearch]);

  const pagedBrandCards = displayedBrandCards.slice(0, visibleCount);

  return (
    <div
      ref={navContainerRef}
      className="relative z-20 bg-white border-b border-zinc-200 select-none font-sans"
    >
      {/* Horizontal Nav Bar */}
      <div className="relative z-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Main Category & Brand Links */}
            <ul className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-6 text-[13px] font-normal text-zinc-700 py-2.5 overflow-x-auto scrollbar-none whitespace-nowrap flex-nowrap">
              <li className="shrink-0">
                <a
                  href="/"
                  className="hover:text-black transition-colors px-1 py-1 whitespace-nowrap block text-zinc-800"
                >
                  New In
                </a>
              </li>

              <li className="shrink-0">
                <a
                  href="#bestsellers"
                  className="hover:text-black transition-colors px-1 py-1 whitespace-nowrap block text-zinc-800"
                >
                  Bestsellers
                </a>
              </li>

              {/* Brands Toggle Button with indicator */}
              <li className="relative shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setActiveMenu(activeMenu === "brands" ? null : "brands")
                  }
                  className={`flex items-center gap-1.5 px-2 py-1 transition-all cursor-pointer text-[13px] whitespace-nowrap shrink-0 ${
                    activeMenu === "brands"
                      ? "text-black font-bold border-b-2 border-black"
                      : "text-zinc-800 hover:text-black font-medium"
                  }`}
                >
                  <span>Brands</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                      activeMenu === "brands" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </li>

              {/* All Categories Toggle Button */}
              <li className="relative shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setActiveMenu(
                      activeMenu === "categories" ? null : "categories"
                    )
                  }
                  className={`flex items-center gap-1.5 px-2 py-1 transition-all cursor-pointer text-[13px] whitespace-nowrap shrink-0 ${
                    activeMenu === "categories"
                      ? "text-black font-bold border-b-2 border-black"
                      : "text-zinc-800 hover:text-black font-medium"
                  }`}
                >
                  <span>All Categories</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                      activeMenu === "categories" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </li>

              {/* Direct Popular Category Quick Links */}
              <li className="shrink-0">
                <a
                  href="#engine-components"
                  className="hover:text-black transition-colors px-1 py-1 whitespace-nowrap block text-zinc-700"
                >
                  Engine & Drivetrain
                </a>
              </li>

              <li className="shrink-0">
                <a
                  href="#braking-system"
                  className="hover:text-black transition-colors px-1 py-1 whitespace-nowrap block text-zinc-700"
                >
                  Braking & Steering
                </a>
              </li>

              <li className="shrink-0">
                <a
                  href="#electrical-components"
                  className="hover:text-black transition-colors px-1 py-1 whitespace-nowrap block text-zinc-700"
                >
                  Electrical & AC
                </a>
              </li>

              <li className="shrink-0">
                <a
                  href="#body-parts"
                  className="hover:text-black transition-colors px-1 py-1 whitespace-nowrap block text-zinc-700"
                >
                  Body & Lighting
                </a>
              </li>

              <li className="shrink-0">
                <a
                  href="#accessories"
                  className="hover:text-black transition-colors px-1 py-1 whitespace-nowrap block text-zinc-700"
                >
                  Accessories
                </a>
              </li>

              <li className="shrink-0">
                <a
                  href="https://api.whatsapp.com/send?phone=971555493031&text=Hello%20Ardhal%20Khaleej,%20I%20need%20a%20part%20checked%20by%20VIN/Chassis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-black font-medium transition-colors px-1 py-1 whitespace-nowrap block"
                >
                  VIN Verification
                </a>
              </li>

              {/* Sale / Hot Deals Highlight */}
              <li className="shrink-0">
                <a
                  href="#offers"
                  className="flex items-center gap-1 text-red-600 hover:text-red-700 font-bold px-1 py-1 transition-colors whitespace-nowrap block"
                >
                  <Flame className="w-3.5 h-3.5 text-red-600 fill-red-600 animate-pulse shrink-0 inline-block" />
                  <span className="whitespace-nowrap">Sale 2026</span>
                </a>
              </li>
            </ul>

            {/* Quick WhatsApp Assistance */}
            <div className="hidden xl:flex items-center gap-2 text-xs font-semibold text-zinc-700 whitespace-nowrap shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <a
                href="https://api.whatsapp.com/send?phone=971555493031"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-emerald-600 transition-colors flex items-center gap-1 font-medium whitespace-nowrap"
              >
                <span>Instant WhatsApp Parts Finder</span>
                <ArrowRight className="w-3 h-3 text-zinc-400 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* =========================================================
          MEGA MENU 1: BRANDS DIRECTORY WITH SILKY SMOOTH MOTION
         ========================================================= */}
      <AnimatePresence mode="wait">
        {activeMenu === "brands" && (
          <motion.div
            key="brands-mega-menu"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute left-0 right-0 top-full bg-white border-b border-zinc-200 shadow-2xl z-30 max-h-[82vh] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
              <div className="grid grid-cols-12 gap-8">
                {/* Left Column: Search & A-Z Brand Directory */}
                <div className="col-span-12 lg:col-span-3 border-r border-zinc-200 pr-6 flex flex-col max-h-[500px]">
                  {/* Brand Search Input */}
                  <div className="relative mb-5">
                    <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={brandSearch}
                      onChange={(e) => setBrandSearch(e.target.value)}
                      placeholder="Search Brands"
                      className="w-full bg-[#f4f4f5] text-zinc-900 text-xs rounded-xl pl-9 pr-8 py-2.5 outline-none border border-transparent focus:border-zinc-300 focus:bg-white transition-all font-normal placeholder:text-zinc-400"
                    />
                    {brandSearch && (
                      <button
                        type="button"
                        onClick={() => setBrandSearch("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black text-xs font-bold cursor-pointer"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  {/* Alphabet List with Quick Alphabet Jumper */}
                  <div className="flex flex-1 overflow-hidden">
                    <div className="flex-1 overflow-y-auto pr-3 space-y-4 scrollbar-thin scrollbar-thumb-zinc-200">
                      {Object.keys(groupedAlphaBrands).length > 0 ? (
                        Object.keys(groupedAlphaBrands)
                          .sort()
                          .map((letter) => (
                            <div key={letter} className="space-y-1.5">
                              <span className="text-xs font-bold text-zinc-900 block pb-0.5">
                                {letter}
                              </span>
                              <ul className="space-y-1 text-xs text-zinc-600">
                                {groupedAlphaBrands[letter].map((b) => (
                                  <li key={b.name}>
                                    <a
                                      href={`#brand-${b.name.toLowerCase()}`}
                                      onClick={() => setActiveMenu(null)}
                                      className="hover:text-black transition-colors block py-0.5 text-zinc-600 font-normal hover:font-medium"
                                    >
                                      {b.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))
                      ) : (
                        <p className="text-xs text-zinc-400 py-6 text-center">
                          No brands found matching "{brandSearch}"
                        </p>
                      )}
                    </div>

                    {/* Vertical Quick Alphabet Jumper (All, #, A, B, C... Z) */}
                    <div className="w-6 flex flex-col items-center text-[10px] text-zinc-400 select-none overflow-y-auto space-y-0.5 border-l border-zinc-100 pl-1 scrollbar-none">
                      <button
                        type="button"
                        onClick={() => setSelectedLetter(null)}
                        className={`hover:text-black font-semibold cursor-pointer ${
                          !selectedLetter ? "text-black font-bold" : ""
                        }`}
                      >
                        All
                      </button>
                      {alphabetList.map((ch) => (
                        <button
                          key={ch}
                          type="button"
                          onClick={() =>
                            setSelectedLetter(selectedLetter === ch ? null : ch)
                          }
                          className={`hover:text-black transition-colors cursor-pointer ${
                            selectedLetter === ch ? "text-black font-bold" : ""
                          }`}
                        >
                          {ch}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Main Section: Filter Tabs & Brand Cards Grid */}
                <div className="col-span-12 lg:col-span-9 flex flex-col justify-between">
                  <div>
                    {/* Category Pill Tabs */}
                    <div className="flex items-center gap-2.5 pb-5 border-b border-zinc-100 flex-wrap">
                      {brandGroups.map((group) => (
                        <button
                          key={group}
                          type="button"
                          onClick={() => {
                            setSelectedBrandTab(group);
                            setSelectedLetter(null);
                            setVisibleCount(18);
                          }}
                          className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                            selectedBrandTab === group
                              ? "bg-zinc-950 text-white shadow-xs"
                              : "bg-white text-zinc-700 hover:bg-zinc-50 border border-zinc-200"
                          }`}
                        >
                          {group}
                        </button>
                      ))}
                    </div>

                    {/* Brand Cards Grid with Centered Logo (6 Columns like reference) */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 pt-4 max-h-[380px] overflow-y-auto pr-1">
                      {pagedBrandCards.map((b) => {
                        const logoUrl = getBrandLogo(b.name);
                        return (
                          <motion.a
                            key={b.name}
                            href={`#brand-${b.name.toLowerCase()}`}
                            onClick={() => setActiveMenu(null)}
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.15 }}
                            className="group flex flex-col items-center justify-center h-28 sm:h-32 p-3 rounded-2xl border border-zinc-200 hover:border-zinc-400 hover:shadow-md transition-all duration-200 text-center bg-white cursor-pointer relative"
                          >
                            {logoUrl ? (
                              <div className="h-14 w-full flex items-center justify-center p-1">
                                <img
                                  src={logoUrl}
                                  alt={`${b.name} genuine spare parts`}
                                  className="max-h-full max-w-[85%] object-contain filter group-hover:scale-105 transition-transform duration-200"
                                  loading="lazy"
                                />
                              </div>
                            ) : (
                              <div className="h-14 w-full flex items-center justify-center">
                                <span className="font-extrabold text-sm text-zinc-900 tracking-tight">
                                  {b.name}
                                </span>
                              </div>
                            )}
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom Center: Load more button / Inquire */}
                  <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-center gap-4">
                    {displayedBrandCards.length > visibleCount && (
                      <button
                        type="button"
                        onClick={() =>
                          setVisibleCount((prev) => prev + 12)
                        }
                        className="px-8 py-2.5 rounded-full border border-zinc-300 bg-white hover:bg-zinc-900 hover:text-white text-xs font-semibold text-zinc-800 transition-all shadow-xs cursor-pointer"
                      >
                        Load more
                      </button>
                    )}

                    <a
                      href="https://api.whatsapp.com/send?phone=971555493031&text=Hello%20Ardhal%20Khaleej,%20I%20am%20looking%20for%20spare%20parts%20for%20my%20vehicle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-xs font-semibold text-zinc-800 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WhatsApp Brand Inquiries</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          MEGA MENU 2: ALL 14 CATEGORIES WITH SILKY SMOOTH MOTION
         ========================================================= */}
      <AnimatePresence mode="wait">
        {activeMenu === "categories" && (
          <motion.div
            key="categories-mega-menu"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute left-0 right-0 top-full bg-white border-b border-zinc-200 shadow-2xl z-30 max-h-[82vh] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                <div className="flex items-center gap-3">
                  <span className="font-extrabold text-zinc-950 text-base tracking-tight">
                    Auto Spare Parts Categories
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 font-bold border border-red-200">
                    14 Systems / All Major Components
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveMenu(null)}
                  className="p-1 rounded-lg text-zinc-400 hover:text-black hover:bg-zinc-100 transition-colors cursor-pointer"
                  title="Close Categories Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 5-Column Grid Displaying all 14 categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 text-xs pt-6">
                {/* Column 1: Engine & Transmission */}
                <div className="space-y-5">
                  <div>
                    <h4 className="font-bold text-zinc-950 text-sm tracking-tight border-b border-zinc-100 pb-1.5">
                      Engine Components
                    </h4>
                    <ul className="space-y-1.5 text-zinc-600 mt-2.5">
                      {categoriesData[0].items.map((it) => (
                        <li key={it}>
                          <a
                            href="#parts"
                            onClick={() => setActiveMenu(null)}
                            className="hover:text-red-600 transition-colors block py-0.5"
                          >
                            {it}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-zinc-950 text-sm tracking-tight border-b border-zinc-100 pb-1.5">
                      Transmission & Drivetrain
                    </h4>
                    <ul className="space-y-1.5 text-zinc-600 mt-2.5">
                      {categoriesData[1].items.map((it) => (
                        <li key={it}>
                          <a
                            href="#parts"
                            onClick={() => setActiveMenu(null)}
                            className="hover:text-red-600 transition-colors block py-0.5"
                          >
                            {it}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Column 2: Brakes & Suspension */}
                <div className="space-y-5">
                  <div>
                    <h4 className="font-bold text-zinc-950 text-sm tracking-tight border-b border-zinc-100 pb-1.5">
                      Braking System
                    </h4>
                    <ul className="space-y-1.5 text-zinc-600 mt-2.5">
                      {categoriesData[2].items.map((it) => (
                        <li key={it}>
                          <a
                            href="#parts"
                            onClick={() => setActiveMenu(null)}
                            className="hover:text-red-600 transition-colors block py-0.5"
                          >
                            {it}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-zinc-950 text-sm tracking-tight border-b border-zinc-100 pb-1.5">
                      Suspension & Steering
                    </h4>
                    <ul className="space-y-1.5 text-zinc-600 mt-2.5">
                      {categoriesData[3].items.map((it) => (
                        <li key={it}>
                          <a
                            href="#parts"
                            onClick={() => setActiveMenu(null)}
                            className="hover:text-red-600 transition-colors block py-0.5"
                          >
                            {it}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Column 3: Electrical, Cooling & AC */}
                <div className="space-y-5">
                  <div>
                    <h4 className="font-bold text-zinc-950 text-sm tracking-tight border-b border-zinc-100 pb-1.5">
                      Electrical Components
                    </h4>
                    <ul className="space-y-1.5 text-zinc-600 mt-2.5">
                      {categoriesData[4].items.map((it) => (
                        <li key={it}>
                          <a
                            href="#parts"
                            onClick={() => setActiveMenu(null)}
                            className="hover:text-red-600 transition-colors block py-0.5"
                          >
                            {it}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-zinc-950 text-sm tracking-tight border-b border-zinc-100 pb-1.5">
                      Cooling & Heating AC
                    </h4>
                    <ul className="space-y-1.5 text-zinc-600 mt-2.5">
                      {categoriesData[5].items
                        .concat(categoriesData[8].items.slice(0, 2))
                        .map((it) => (
                          <li key={it}>
                            <a
                              href="#parts"
                              onClick={() => setActiveMenu(null)}
                              className="hover:text-red-600 transition-colors block py-0.5"
                            >
                              {it}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>

                {/* Column 4: Exhaust, Fuel & Body */}
                <div className="space-y-5">
                  <div>
                    <h4 className="font-bold text-zinc-950 text-sm tracking-tight border-b border-zinc-100 pb-1.5">
                      Exhaust & Fuel Systems
                    </h4>
                    <ul className="space-y-1.5 text-zinc-600 mt-2.5">
                      {categoriesData[6].items
                        .concat(categoriesData[7].items)
                        .map((it) => (
                          <li key={it}>
                            <a
                              href="#parts"
                              onClick={() => setActiveMenu(null)}
                              className="hover:text-red-600 transition-colors block py-0.5"
                            >
                              {it}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-zinc-950 text-sm tracking-tight border-b border-zinc-100 pb-1.5">
                      Body Parts & Mirrors
                    </h4>
                    <ul className="space-y-1.5 text-zinc-600 mt-2.5">
                      {categoriesData[9].items.map((it) => (
                        <li key={it}>
                          <a
                            href="#parts"
                            onClick={() => setActiveMenu(null)}
                            className="hover:text-red-600 transition-colors block py-0.5"
                          >
                            {it}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Column 5: Lighting, Interior & Accessories */}
                <div className="space-y-5 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-zinc-950 text-sm tracking-tight border-b border-zinc-100 pb-1.5">
                      Lighting & Accessories
                    </h4>
                    <ul className="space-y-1.5 text-zinc-600 mt-2.5">
                      {categoriesData[11].items
                        .concat(categoriesData[13].items.slice(0, 3))
                        .map((it) => (
                          <li key={it}>
                            <a
                              href="#parts"
                              onClick={() => setActiveMenu(null)}
                              className="hover:text-red-600 transition-colors block py-0.5"
                            >
                              {it}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* VIN Quick CTA Card */}
                  <div className="p-3.5 bg-zinc-50 rounded-2xl border border-zinc-200">
                    <p className="font-bold text-zinc-900 text-xs mb-1">
                      Have your VIN or Chassis?
                    </p>
                    <p className="text-[11px] text-zinc-600 mb-2.5 leading-relaxed">
                      Send it to our team on WhatsApp for instant 100% genuine fitment verification.
                    </p>
                    <a
                      href="https://api.whatsapp.com/send?phone=971555493031&text=Hello%20Ardhal%20Khaleej,%20can%20you%20verify%20fitment%20for%20my%20VIN?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-red-600 hover:text-red-700 text-xs"
                    >
                      <span>WhatsApp VIN Verification →</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
