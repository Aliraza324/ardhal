import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Truck,
  FileCheck2,
  Phone,
  MessageCircle,
  Globe,
  Sliders,
  ExternalLink,
  Trash2,
  Send,
} from "lucide-react";
import CategoryNav from "./CategoryNav";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { drawerLeftVariants } from "./animations/animations";
import { categoriesData } from "../data/navData";
import { allBrandsList, getBrandLogo, alphabetList } from "../data/brandImages";

const currencies = [
  { code: "AED", label: "UAE Dirham", symbol: "د.إ" },
  { code: "SAR", label: "Saudi Riyal", symbol: "ر.س" },
  { code: "USD", label: "US Dollar", symbol: "$" },
  { code: "EUR", label: "Euro", symbol: "€" },
  { code: "QAR", label: "Qatari Riyal", symbol: "ر.ق" },
  { code: "KWD", label: "Kuwaiti Dinar", symbol: "د.ك" },
  { code: "OMR", label: "Omani Rial", symbol: "ر.ع" },
];

export default function Navbar() {
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currency, setCurrency] = useState("AED");
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [inquiryDrawerOpen, setInquiryDrawerOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveTab, setMobileActiveTab] = useState("shop"); // 'shop' | 'brands'
  const [mobileExpandedCat, setMobileExpandedCat] = useState(null);
  const [mobileBrandSearch, setMobileBrandSearch] = useState("");
  const [mobileSelectedLetter, setMobileSelectedLetter] = useState(null);

  // Inquiry Bag / Cart items state
  const [inquiryItems, setInquiryItems] = useState([
    {
      id: 1,
      name: "Ceramic Front Brake Pads Kit",
      brand: "Mercedes-Benz / Brembo OEM",
      partNo: "A0004207900",
      qty: 1,
    },
    {
      id: 2,
      name: "High Performance Oil Filter",
      brand: "Toyota Genuine Parts",
      partNo: "04152-YZZA1",
      qty: 2,
    },
  ]);

  // Wishlist items state
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Carbon Fiber Side Mirror Caps",
      brand: "BMW M Performance",
    },
  ]);

  const searchInputRef = useRef(null);
  const currencyRef = useRef(null);
  const profileRef = useRef(null);

  // Focus search input when drawer opens
  useEffect(() => {
    if (searchDrawerOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [searchDrawerOpen]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleOutside = (e) => {
      if (currencyRef.current && !currencyRef.current.contains(e.target)) {
        setCurrencyDropdownOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  // Filter search results
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return { brands: [], categories: [], products: [] };

    const matchedBrands = allBrandsList.filter((b) =>
      b.name.toLowerCase().includes(q)
    );

    const matchedCategories = categoriesData.filter((c) =>
      c.name.toLowerCase().includes(q)
    );

    const matchedProducts = [];
    categoriesData.forEach((cat) => {
      cat.items.forEach((item) => {
        if (item.toLowerCase().includes(q)) {
          matchedProducts.push({ item, category: cat.name });
        }
      });
    });

    return {
      brands: matchedBrands.slice(0, 6),
      categories: matchedCategories.slice(0, 4),
      products: matchedProducts.slice(0, 8),
    };
  }, [searchQuery]);

  // Grouped brands for mobile drawer A-Z
  const mobileGroupedBrands = useMemo(() => {
    const q = mobileBrandSearch.trim().toLowerCase();
    let filtered = allBrandsList;
    if (q) {
      filtered = filtered.filter((b) => b.name.toLowerCase().includes(q));
    }
    if (mobileSelectedLetter) {
      filtered = filtered.filter((b) => b.letter === mobileSelectedLetter);
    }
    const groups = {};
    filtered.forEach((b) => {
      const letter = b.letter || "#";
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(b);
    });
    return groups;
  }, [mobileBrandSearch, mobileSelectedLetter]);

  // Handle WhatsApp Inquiry bag submit
  const handleSendWhatsAppOrder = () => {
    const lines = inquiryItems.map(
      (item, idx) =>
        `${idx + 1}. ${item.name} (${item.brand}) - Part#: ${item.partNo || "N/A"} x Qty: ${item.qty}`
    );
    const message = encodeURIComponent(
      `Hello Ardhal Khaleej Auto, I would like to get a price quote and availability for the following parts:\n\n${lines.join("\n")}`
    );
    window.open(`https://api.whatsapp.com/send?phone=971555493031&text=${message}`, "_blank");
  };

  return (
    <header className="relative z-50 w-full bg-white text-zinc-900 select-none">
      {/* =========================================================
          TIER 1: MAIN HEADER ROW (Search, Center Logo, Right Actions)
         ========================================================= */}
      <div className="relative z-40 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 md:py-3.5">
          <div className="grid grid-cols-3 items-center">
            {/* Left Section: 
                Mobile: Hamburger (☰) + Search (🔍)
                Desktop: Search Input Pill */}
            <div className="flex items-center gap-3.5 sm:gap-5">
              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-1 text-zinc-900 hover:text-black transition-colors cursor-pointer"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
              </button>

              {/* Mobile Search Icon */}
              <button
                type="button"
                onClick={() => setSearchDrawerOpen(true)}
                className="lg:hidden p-1 text-zinc-900 hover:text-black transition-colors cursor-pointer"
                aria-label="Open search"
              >
                <Search className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
              </button>

              {/* Desktop Search Trigger Pill */}
              <button
                type="button"
                onClick={() => setSearchDrawerOpen(true)}
                className="hidden lg:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-zinc-200 hover:border-zinc-400 bg-zinc-50 hover:bg-white text-zinc-600 transition-all cursor-pointer shadow-2xs"
                title="Search Parts by Name, Brand or VIN"
              >
                <Search className="w-4 h-4 text-zinc-400 group-hover:text-red-600 transition-colors" />
                <span className="text-xs text-zinc-500 group-hover:text-zinc-800 font-normal tracking-wide">
                  Search parts, brands, chassis #...
                </span>
              </button>
            </div>

            {/* Center: Brand Logo */}
            <div className="flex justify-center text-center">
              <a href="/" className="inline-flex flex-col items-center group">
                <img
                  src="/logo.png"
                  alt="Ardhal Khaleej Auto Spare Parts"
                  className="h-8 sm:h-10 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </div>

            {/* Right Section:
                Mobile: Currency (AED ∨) + Bag (🛍️)
                Desktop: Currency + Account + Wishlist + Bag */}
            <div className="flex items-center justify-end gap-3.5 sm:gap-5 text-zinc-900">
              {/* Currency Selector */}
              <div ref={currencyRef} className="relative">
                <button
                  type="button"
                  onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                  className="flex items-center gap-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-900 hover:text-black py-1 px-1 transition-colors cursor-pointer"
                >
                  <Globe className="w-3.5 h-3.5 text-zinc-500 hidden lg:inline" />
                  <span>{currency}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-zinc-700 stroke-[2]" />
                </button>

                {currencyDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-44 bg-white border border-zinc-200 rounded-xl shadow-xl py-1.5 z-50 text-xs animate-in fade-in zoom-in-95 duration-100">
                    <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-100">
                      Select Currency
                    </div>
                    {currencies.map((curr) => (
                      <button
                        key={curr.code}
                        type="button"
                        onClick={() => {
                          setCurrency(curr.code);
                          setCurrencyDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 hover:bg-zinc-100 flex items-center justify-between cursor-pointer ${
                          currency === curr.code
                            ? "text-red-600 font-bold bg-red-50/50"
                            : "text-zinc-700"
                        }`}
                      >
                        <span>{curr.code} - {curr.label}</span>
                        <span className="text-zinc-400 font-normal">{curr.symbol}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* User Account Dropdown (Desktop only) */}
              <div ref={profileRef} className="relative hidden lg:block">
                <button
                  type="button"
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="p-2 text-zinc-700 hover:text-black hover:bg-zinc-100 rounded-full transition-colors cursor-pointer"
                  title="My Account"
                >
                  <User className="w-5 h-5 stroke-[1.75]" />
                </button>

                {profileDropdownOpen && (
                  <div className="absolute right-0 top-full mt-1.5 w-52 bg-white border border-zinc-200 rounded-xl shadow-xl py-2 z-50 text-xs animate-in fade-in zoom-in-95 duration-100">
                    <div className="px-3 py-1.5 border-b border-zinc-100">
                      <p className="font-bold text-zinc-900 text-xs">Customer Portal</p>
                      <p className="text-[11px] text-zinc-500">Fast Quotes & Genuine Parts</p>
                    </div>
                    <div className="py-1">
                      <a
                        href="#orders"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="block px-3 py-1.5 hover:bg-zinc-100 text-zinc-700"
                      >
                        Track Order by VIN / Invoice
                      </a>
                      <a
                        href="#quote-history"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="block px-3 py-1.5 hover:bg-zinc-100 text-zinc-700"
                      >
                        My Quote Requests
                      </a>
                      <a
                        href="https://api.whatsapp.com/send?phone=971555493031"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="block px-3 py-1.5 hover:bg-zinc-100 text-emerald-600 font-semibold"
                      >
                        WhatsApp Direct Assistance
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Wishlist Icon (Desktop only) */}
              <button
                type="button"
                onClick={() => setWishlistOpen(true)}
                className="hidden lg:block p-2 text-zinc-700 hover:text-black hover:bg-zinc-100 rounded-full transition-colors relative cursor-pointer"
                title="Saved Parts"
              >
                <Heart className="w-5 h-5 stroke-[1.75]" />
                {wishlistItems.length > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full ring-2 ring-white" />
                )}
              </button>

              {/* Inquiry Bag / Cart Trigger (Visible on all screens) */}
              <button
                type="button"
                onClick={() => setInquiryDrawerOpen(true)}
                className="p-1 text-zinc-900 hover:text-black transition-colors relative cursor-pointer"
                title="Parts Inquiry List"
              >
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                {inquiryItems.length > 0 && (
                  <span className="absolute -top-1 -right-1.5 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                    {inquiryItems.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          TIER 2: CATEGORY NAVIGATION BAR (Categories & Brands Mega Menus)
         ========================================================= */}
      <div className="hidden lg:block relative z-20">
        <CategoryNav />
      </div>


      {/* =========================================================
          SLIDE-DOWN SEARCH DRAWER
         ========================================================= */}
      {searchDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-start justify-center pt-8 sm:pt-16 px-4 animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden animate-in zoom-in-95 duration-150">
            {/* Search Input Bar */}
            <div className="p-4 sm:p-5 border-b border-zinc-100 flex items-center gap-3 bg-zinc-50/50">
              <Search className="w-5 h-5 text-red-600 shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search part name, OEM number, car brand, or chassis/VIN..."
                className="flex-1 text-sm sm:text-base bg-transparent outline-none text-zinc-900 placeholder:text-zinc-400 font-medium"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-xs px-2 py-1 rounded bg-zinc-200 hover:bg-zinc-300 text-zinc-700 font-semibold cursor-pointer"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                onClick={() => setSearchDrawerOpen(false)}
                className="p-1 rounded-lg text-zinc-400 hover:text-black cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results or Quick Suggestions */}
            <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-6 text-xs">
              {searchQuery.trim() ? (
                <div className="space-y-4">
                  {/* Matched Brands */}
                  {searchResults.brands.length > 0 && (
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                        Matching Brands:
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {searchResults.brands.map((b) => {
                          const logo = getBrandLogo(b.name);
                          return (
                            <a
                              key={b.name}
                              href={`#brand-${b.name.toLowerCase()}`}
                              onClick={() => setSearchDrawerOpen(false)}
                              className="flex items-center gap-2 p-2 rounded-lg bg-zinc-50 hover:bg-red-50 border border-zinc-200 hover:border-red-300 transition-colors"
                            >
                              {logo && (
                                <img
                                  src={logo}
                                  alt={b.name}
                                  className="w-7 h-7 object-contain"
                                />
                              )}
                              <span className="font-semibold text-zinc-800">
                                {b.name}
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Matched Products */}
                  {searchResults.products.length > 0 && (
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                        Matching Spare Parts:
                      </p>
                      <ul className="divide-y divide-zinc-100 border border-zinc-100 rounded-xl overflow-hidden">
                        {searchResults.products.map((p, idx) => (
                          <li key={idx}>
                            <a
                              href="#parts"
                              onClick={() => setSearchDrawerOpen(false)}
                              className="p-2.5 hover:bg-zinc-50 flex items-center justify-between text-zinc-800 font-medium transition-colors"
                            >
                              <span>{p.item}</span>
                              <span className="text-[10px] text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-full">
                                {p.category}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* No Results */}
                  {searchResults.brands.length === 0 &&
                    searchResults.products.length === 0 && (
                      <div className="text-center py-8">
                        <p className="text-sm font-semibold text-zinc-800">
                          No exact matches found for "{searchQuery}"
                        </p>
                        <p className="text-xs text-zinc-500 mt-1">
                          Our team can source any auto part worldwide. Send your chassis / VIN on WhatsApp.
                        </p>
                        <a
                          href={`https://api.whatsapp.com/send?phone=971555493031&text=Hello,%20I%20am%20searching%20for%20part:%20${encodeURIComponent(
                            searchQuery
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 text-white font-bold text-xs shadow-xs hover:bg-emerald-700"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Inquire "{searchQuery}" on WhatsApp</span>
                        </a>
                      </div>
                    )}
                </div>
              ) : (
                /* Default State with Popular Searches */
                <div className="space-y-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Popular Part Categories:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Brake Pads",
                        "Oil Filters",
                        "Shock Absorbers",
                        "Spark Plugs",
                        "Radiators",
                        "Alternators",
                        "Air Conditioning Compressors",
                        "Wiper Blades",
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setSearchQuery(item)}
                          className="px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs transition-colors cursor-pointer"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Top Vehicle Brands:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Toyota",
                        "Mercedes-Benz",
                        "BMW",
                        "Nissan",
                        "Lexus",
                        "Ford",
                        "Jeep",
                        "Porsche",
                        "Range Rover",
                        "Audi",
                      ].map((brand) => (
                        <button
                          key={brand}
                          type="button"
                          onClick={() => setSearchQuery(brand)}
                          className="px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs transition-colors cursor-pointer font-medium"
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          INQUIRY BAG / CART DRAWER
         ========================================================= */}
      {inquiryDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end">
          <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-200">
            {/* Header */}
            <div className="p-4 border-b border-zinc-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-red-600" />
                <span className="font-extrabold text-zinc-900 text-sm">
                  Parts Inquiry Bag ({inquiryItems.length})
                </span>
              </div>
              <button
                type="button"
                onClick={() => setInquiryDrawerOpen(false)}
                className="p-1 rounded-lg text-zinc-400 hover:text-black cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content List */}
            <div className="p-4 flex-1 overflow-y-auto space-y-3">
              {inquiryItems.length > 0 ? (
                inquiryItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl border border-zinc-200 bg-zinc-50/60 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-0.5 flex-1">
                      <p className="font-bold text-zinc-900">{item.name}</p>
                      <p className="text-[11px] text-zinc-500">{item.brand}</p>
                      <p className="text-[10px] text-red-600 font-semibold">
                        OEM Ref: {item.partNo}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-zinc-600 font-medium">Qty: {item.qty}</span>
                      <button
                        type="button"
                        onClick={() =>
                          setInquiryItems(
                            inquiryItems.filter((i) => i.id !== item.id)
                          )
                        }
                        className="p-1 text-zinc-400 hover:text-red-600 cursor-pointer"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-zinc-400 space-y-2">
                  <ShoppingBag className="w-10 h-10 mx-auto stroke-1" />
                  <p className="text-xs">Your inquiry bag is empty</p>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            {inquiryItems.length > 0 && (
              <div className="p-4 border-t border-zinc-200 space-y-2 bg-zinc-50">
                <button
                  type="button"
                  onClick={handleSendWhatsAppOrder}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs cursor-pointer transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Send Inquiry to WhatsApp (+971 55 549 3031)</span>
                </button>
                <p className="text-[10px] text-zinc-500 text-center">
                  Instant price quote with AED/USD pricing & availability
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================
          WISHLIST DRAWER
         ========================================================= */}
      {wishlistOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end">
          <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-200">
            <div className="p-4 border-b border-zinc-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-600" />
                <span className="font-extrabold text-zinc-900 text-sm">
                  Saved Parts ({wishlistItems.length})
                </span>
              </div>
              <button
                type="button"
                onClick={() => setWishlistOpen(false)}
                className="p-1 rounded-lg text-zinc-400 hover:text-black cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto space-y-3">
              {wishlistItems.map((w) => (
                <div
                  key={w.id}
                  className="p-3 rounded-xl border border-zinc-200 flex items-center justify-between text-xs"
                >
                  <div>
                    <p className="font-bold text-zinc-900">{w.name}</p>
                    <p className="text-[11px] text-zinc-500">{w.brand}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setWishlistItems(wishlistItems.filter((i) => i.id !== w.id))
                    }
                    className="p-1 text-zinc-400 hover:text-red-600 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          RESPONSIVE MOBILE NAVIGATION DRAWER
         ========================================================= */}
      {/* =========================================================
          RESPONSIVE MOBILE NAVIGATION DRAWER (Exact Reference Design)
         ========================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-drawer-modal"
            variants={drawerLeftVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed inset-0 z-50 bg-white flex flex-col font-sans"
          >
            {/* Top Bar - Identical layout to main navbar */}
            <div className="grid grid-cols-3 items-center px-4 py-2 sm:py-3 border-b border-zinc-200 bg-white shrink-0">
              <div className="flex items-center gap-3.5 sm:gap-5">
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-zinc-900 hover:text-black transition-colors cursor-pointer"
                  title="Close Menu"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                </button>

                {/* Search Trigger */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setSearchDrawerOpen(true);
                  }}
                  className="p-1 text-zinc-900 hover:text-black transition-colors cursor-pointer"
                  title="Search Parts"
                >
                  <Search className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                </button>
              </div>

              {/* Centered Logo */}
              <div className="flex justify-center text-center">
                <a
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-block"
                >
                  <img
                    src="/logo.png"
                    alt="Ardhal Khaleej Auto"
                    className="h-8 sm:h-10 md:h-14 w-auto object-contain"
                  />
                </a>
              </div>

              {/* Right Side: Currency & Inquiry Bag */}
              <div className="flex items-center justify-end gap-3.5 sm:gap-5 text-zinc-900">
                {/* Currency Switcher */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                    className="flex items-center gap-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-900 hover:text-black py-1 px-1 transition-colors cursor-pointer"
                  >
                    <span>{currency}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-zinc-700 stroke-[2]" />
                  </button>

                  {currencyDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-44 bg-white border border-zinc-200 rounded-xl shadow-xl py-1.5 z-50 text-xs animate-in fade-in zoom-in-95 duration-100">
                      <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-100">
                        Select Currency
                      </div>
                      {currencies.map((curr) => (
                        <button
                          key={curr.code}
                          type="button"
                          onClick={() => {
                            setCurrency(curr.code);
                            setCurrencyDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-1.5 hover:bg-zinc-100 flex items-center justify-between cursor-pointer ${
                            currency === curr.code
                              ? "text-red-600 font-bold bg-red-50/50"
                              : "text-zinc-700"
                          }`}
                        >
                          <span>{curr.code} - {curr.label}</span>
                          <span className="text-zinc-400 font-normal">{curr.symbol}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Inquiry Bag with Counter Badge */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setInquiryDrawerOpen(true);
                  }}
                  className="relative p-1 text-zinc-900 hover:text-black transition-colors cursor-pointer"
                  title="Inquiry Bag"
                >
                  <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                  {inquiryItems.length > 0 && (
                    <span className="absolute -top-1 -right-1.5 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                      {inquiryItems.length}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Subtle Ticker Sub-bar */}
            <div className="bg-zinc-50 border-b border-zinc-100 py-1.5 px-4 text-[10px] text-zinc-500 text-center font-medium truncate shrink-0">
              <span>100% Genuine OEM Auto Parts</span>
              <span className="mx-2 text-zinc-300">|</span>
              <span>Same-Day UAE Dispatch</span>
              <span className="mx-2 text-zinc-300">|</span>
              <a
                href="https://api.whatsapp.com/send?phone=971555493031"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 font-bold"
              >
                WhatsApp +971 55 549 3031
              </a>
            </div>

            {/* Main Tabs Header: Shop By | Brands (Screenshots 1 & 2) */}
            <div className="grid grid-cols-2 border-b border-zinc-200 shrink-0 text-sm font-bold bg-white">
              <button
                type="button"
                onClick={() => setMobileActiveTab("shop")}
                className={`py-3 text-center transition-colors cursor-pointer ${
                  mobileActiveTab === "shop"
                    ? "border-b-2 border-black text-black font-extrabold"
                    : "text-zinc-500 font-semibold hover:text-zinc-800 border-b-2 border-transparent"
                }`}
              >
                Shop By
              </button>

              <button
                type="button"
                onClick={() => setMobileActiveTab("brands")}
                className={`py-3 text-center transition-colors cursor-pointer ${
                  mobileActiveTab === "brands"
                    ? "border-b-2 border-black text-black font-extrabold"
                    : "text-zinc-500 font-semibold hover:text-zinc-800 border-b-2 border-transparent"
                }`}
              >
                Brands
              </button>
            </div>

            {/* Tab 1: Shop By List (Screenshot 1) */}
            {mobileActiveTab === "shop" && (
              <div className="flex-1 overflow-y-auto divide-y divide-zinc-100 text-xs font-bold text-zinc-900 tracking-tight">
                <a
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-4 px-5 hover:bg-zinc-50 uppercase"
                >
                  NEW IN
                </a>

                <a
                  href="#bestsellers"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-4 px-5 hover:bg-zinc-50 uppercase"
                >
                  BESTSELLERS
                </a>

                {/* Auto Categories Accordion */}
                {categoriesData.map((cat) => {
                  const isExpanded = mobileExpandedCat === cat.slug;
                  return (
                    <div key={cat.slug} className="border-b border-zinc-100">
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpandedCat(isExpanded ? null : cat.slug)
                        }
                        className="w-full py-4 px-5 flex items-center justify-between hover:bg-zinc-50 text-left cursor-pointer uppercase font-bold text-zinc-900"
                      >
                        <span>{cat.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-black" : ""
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="bg-zinc-50/80 px-6 py-3 space-y-2 border-t border-zinc-100 text-xs normal-case tracking-normal">
                          {cat.items.map((item) => (
                            <a
                              key={item}
                              href="#parts"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-zinc-600 hover:text-red-600 font-medium"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                <a
                  href="https://api.whatsapp.com/send?phone=971555493031&text=Hello%20Ardhal%20Khaleej,%20can%20you%20verify%20fitment%20by%20VIN/Chassis"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-4 px-5 hover:bg-zinc-50 text-zinc-700 uppercase"
                >
                  VIN VERIFICATION
                </a>

                <a
                  href="#offers"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-4 px-5 text-red-600 font-extrabold hover:bg-red-50/50 uppercase"
                >
                  SALE 2026
                </a>
              </div>
            )}

            {/* Tab 2: Brands Directory (Screenshot 2) */}
            {mobileActiveTab === "brands" && (
              <div className="flex-1 flex flex-col overflow-hidden p-4">
                {/* Search Brands Input */}
                <div className="relative mb-3 shrink-0">
                  <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={mobileBrandSearch}
                    onChange={(e) => setMobileBrandSearch(e.target.value)}
                    placeholder="Search Brands"
                    className="w-full bg-[#f4f4f5] text-zinc-900 text-xs rounded-xl pl-9 pr-8 py-2.5 outline-none border border-transparent focus:border-zinc-300 focus:bg-white transition-all font-normal placeholder:text-zinc-400"
                  />
                  {mobileBrandSearch && (
                    <button
                      type="button"
                      onClick={() => setMobileBrandSearch("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black text-xs font-bold"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Left A-Z Directory + Right Alphabet Scrubber */}
                <div className="flex-1 flex overflow-hidden">
                  {/* Left Alphabetical List */}
                  <div className="flex-1 overflow-y-auto pr-3 space-y-4 scrollbar-thin">
                    {Object.keys(mobileGroupedBrands).length > 0 ? (
                      Object.keys(mobileGroupedBrands)
                        .sort()
                        .map((letter) => (
                          <div key={letter} className="space-y-1.5">
                            <span className="text-xs font-bold text-zinc-900 block pb-0.5">
                              {letter}
                            </span>
                            <ul className="space-y-1 text-xs text-zinc-700">
                              {mobileGroupedBrands[letter].map((b) => (
                                <li key={b.name}>
                                  <a
                                    href={`#brand-${b.name.toLowerCase()}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="hover:text-black transition-colors block py-1.5 font-normal text-[13px] border-b border-zinc-50/50"
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
                        No brands found matching "{mobileBrandSearch}"
                      </p>
                    )}
                  </div>

                  {/* Right Alphabet Scrubber */}
                  <div className="w-6 flex flex-col items-center text-[10px] text-zinc-400 select-none overflow-y-auto space-y-0.5 border-l border-zinc-100 pl-1 scrollbar-none shrink-0">
                    <button
                      type="button"
                      onClick={() => setMobileSelectedLetter(null)}
                      className={`hover:text-black font-semibold cursor-pointer ${
                        !mobileSelectedLetter ? "text-black font-bold" : ""
                      }`}
                    >
                      All
                    </button>
                    {alphabetList.map((ch) => (
                      <button
                        key={ch}
                        type="button"
                        onClick={() =>
                          setMobileSelectedLetter(
                            mobileSelectedLetter === ch ? null : ch
                          )
                        }
                        className={`hover:text-black transition-colors cursor-pointer ${
                          mobileSelectedLetter === ch ? "text-black font-bold" : ""
                        }`}
                      >
                        {ch}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Sticky Bottom Bar: Account | Wishlist | WhatsApp (Screenshot 2 bottom) */}
            <div className="border-t border-zinc-200 bg-white py-3.5 px-6 flex items-center justify-around text-xs font-semibold text-zinc-800 shrink-0">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setProfileDropdownOpen(true);
                }}
                className="flex items-center gap-1.5 hover:text-black cursor-pointer"
              >
                <User className="w-4 h-4 stroke-[1.75]" />
                <span>Account</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setWishlistOpen(true);
                }}
                className="flex items-center gap-1.5 hover:text-black cursor-pointer"
              >
                <Heart className="w-4 h-4 stroke-[1.75]" />
                <span>Wishlist</span>
              </button>

              <a
                href="https://api.whatsapp.com/send?phone=971555493031"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-600 font-bold"
              >
                <WhatsAppIcon className="w-4 h-4 fill-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
