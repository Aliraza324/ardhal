import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "motion/react";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";

// Assets
import engineImg from "../assets/images_2026-09-14_07-35-17/image_213x320_79.jpg";
import transmissionImg from "../assets/images_2026-09-14_07-35-17/image_213x320_80.jpg";
import brakingImg from "../assets/images_2026-09-14_07-35-17/image_213x320_81.jpg";
import suspensionImg from "../assets/images_2026-09-14_07-35-17/image_213x320_82.jpg";
import electricalImg from "../assets/images_2026-09-14_07-35-17/image_213x320_83.jpg";
import coolingImg from "../assets/images_2026-09-14_07-35-17/image_213x320_84.jpg";
import exhaustImg from "../assets/images_2026-09-14_07-35-17/image_213x320_85.jpg";
import fuelImg from "../assets/images_2026-09-14_07-35-17/image_213x320_86.jpg";
import acImg from "../assets/images_2026-09-14_07-35-17/image_213x320_87.jpg";
import bodyImg from "../assets/images_2026-09-14_07-35-17/image_213x320_88.jpeg";
import interiorImg from "../assets/images_2026-09-14_07-35-17/image_221x320_75.jpeg";
import lightingImg from "../assets/images_2026-09-14_07-35-17/image_221x320_76.jpeg";
import glassImg from "../assets/images_2026-09-14_07-35-17/image_221x320_77.jpg";
import accessoriesImg from "../assets/images_2026-09-14_07-35-17/image_221x320_78.jpg";

const collectionItems = [
  {
    id: "engine",
    title: "Engine Components",
    subtitle: "Pistons, spark plugs, gaskets",
    itemsCount: "1,200+ Parts",
    image: engineImg,
    tag: "Core Power",
  },
  {
    id: "transmission",
    title: "Transmission & Drivetrain",
    subtitle: "Clutch kits, flywheels, gears",
    itemsCount: "850+ Parts",
    image: transmissionImg,
    tag: "Performance",
  },
  {
    id: "braking",
    title: "Braking System",
    subtitle: "Brake pads, rotors, calipers",
    itemsCount: "940+ Parts",
    image: brakingImg,
    tag: "Safety Critical",
  },
  {
    id: "suspension",
    title: "Suspension & Steering",
    subtitle: "Shocks, struts, control arms, ball joints",
    itemsCount: "1,100+ Parts",
    image: suspensionImg,
    tag: "Handling",
  },
  {
    id: "electrical",
    title: "Electrical Components",
    subtitle: "Batteries, starters, alternators",
    itemsCount: "780+ Parts",
    image: electricalImg,
    tag: "Reliability",
  },
  {
    id: "cooling",
    title: "Cooling System",
    subtitle: "Radiators, water pumps, fans",
    itemsCount: "620+ Parts",
    image: coolingImg,
    tag: "Efficiency",
  },
  {
    id: "exhaust",
    title: "Exhaust System",
    subtitle: "Mufflers, catalytic converters, pipes",
    itemsCount: "430+ Parts",
    image: exhaustImg,
    tag: "Sound & Flow",
  },
  {
    id: "fuel",
    title: "Fuel System",
    subtitle: "Fuel pumps, injectors, filters",
    itemsCount: "510+ Parts",
    image: fuelImg,
    tag: "Flow Rate",
  },
  {
    id: "ac",
    title: "Air Conditioning & Heating",
    subtitle: "Compressors, condensers, blower motors",
    itemsCount: "670+ Parts",
    image: acImg,
    tag: "Cabin Climate",
  },
  {
    id: "body",
    title: "Body Parts",
    subtitle: "Bumpers, fenders, hoods, mirrors",
    itemsCount: "1,450+ Parts",
    image: bodyImg,
    tag: "Exterior OE",
  },
  {
    id: "interior",
    title: "Interior Components",
    subtitle: "Dashboard, consoles, switches",
    itemsCount: "890+ Parts",
    image: interiorImg,
    tag: "Comfort",
  },
  {
    id: "lighting",
    title: "Lighting",
    subtitle: "Headlights, taillights, fog lamps",
    itemsCount: "1,320+ Parts",
    image: lightingImg,
    tag: "LED & Laser",
  },
  {
    id: "glass",
    title: "Glass & Wipers",
    subtitle: "Wiper blades, windshields, motors",
    itemsCount: "410+ Parts",
    image: glassImg,
    tag: "Visibility",
  },
  {
    id: "accessories",
    title: "Accessories",
    subtitle: "Floor mats, cargo liners, styling",
    itemsCount: "950+ Parts",
    image: accessoriesImg,
    tag: "Protection",
  },
];

export default function OurCollection() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Measure draggable width
  const updateScrollBounds = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const totalScrollable = scrollWidth - clientWidth;
      setMaxScroll(totalScrollable);
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < totalScrollable - 10);
      setScrollProgress(
        totalScrollable > 0 ? (scrollLeft / totalScrollable) * 100 : 0
      );
    }
  };

  useEffect(() => {
    updateScrollBounds();
    window.addEventListener("resize", updateScrollBounds);
    return () => window.removeEventListener("resize", updateScrollBounds);
  }, []);

  // Mouse Drag / Grab implementation for silky smooth scroll & fling
  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const isDragging = useRef(false);

  const handleMouseDown = (e) => {
    isMouseDown.current = true;
    isDragging.current = false;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftStart.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag speed multiplier
    if (Math.abs(walk) > 5) {
      isDragging.current = true;
    }
    containerRef.current.scrollLeft = scrollLeftStart.current - walk;
    updateScrollBounds();
  };

  const handleMouseUpOrLeave = () => {
    isMouseDown.current = false;
    setTimeout(() => {
      isDragging.current = false;
    }, 50);
  };

  const scrollByAmount = (amount) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: amount,
        behavior: "smooth",
      });
      setTimeout(updateScrollBounds, 350);
    }
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-gradient-to-b from-white via-zinc-50/60 to-white text-zinc-900 select-none overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-48 bg-blue-100/35 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section matching User's Reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="text-center md:text-left mx-auto md:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center  gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-900 text-xs sm:text-sm font-semibold mb-3 tracking-wide uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Our Collection
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-zinc-950"
            >
              Superior Quality Products
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="text-sm sm:text-base text-zinc-600 mt-2 max-w-xl"
            >
              Precision-engineered automotive components crafted to original manufacturer standards.
            </motion.p>
          </div>

          {/* Navigation Controls and Grab Prompt */}
          <div className="flex items-center justify-center md:justify-end gap-3 shrink-0">
            < button
              onClick={() => scrollByAmount(-320)}
              disabled={!canScrollLeft}
              aria-label="Previous items"
              className={`p-2.5 sm:p-3 rounded-full border transition-all duration-200 ${
                canScrollLeft
                  ? "bg-white border-zinc-300 text-zinc-800 shadow-sm hover:bg-zinc-100 hover:border-zinc-400 active:scale-95"
                  : "bg-zinc-100 border-zinc-200 text-zinc-300 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scrollByAmount(320)}
              disabled={!canScrollRight}
              aria-label="Next items"
              className={`p-2.5 sm:p-3 rounded-full border transition-all duration-200 ${
                canScrollRight
                  ? "bg-white border-zinc-300 text-zinc-800 shadow-sm hover:bg-zinc-100 hover:border-zinc-400 active:scale-95"
                  : "bg-zinc-100 border-zinc-200 text-zinc-300 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Grab-Enabled Scroll Track */}
        <div className="relative -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onScroll={updateScrollBounds}
            onMouseEnter={() => setIsHovered(true)}
            className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing pb-6 pt-2 select-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {collectionItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="relative group shrink-0 w-[220px] sm:w-[240px] md:w-[260px] h-[340px] sm:h-[370px] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-end"
              >
                {/* Background Image with Hover Scale */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    draggable={false}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Vignette / Contrast Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10 group-hover:from-black/95 group-hover:via-black/35 transition-all duration-300" />
                </div>

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-2.5 py-1 text-[11px] font-semibold text-white/90 bg-black/40 backdrop-blur-md border border-white/15 rounded-full shadow-sm">
                    {item.tag}
                  </span>
                </div>

                {/* Bottom Content Card (Glassmorphic) */}
                <div className="relative z-10 p-4 sm:p-5 flex flex-col justify-end">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-3.5 border border-white/15 shadow-lg group-hover:bg-white/15 transition-colors duration-300">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight tracking-tight drop-shadow-sm group-hover:text-blue-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-300 mt-1 leading-snug font-normal line-clamp-2">
                      {item.subtitle}
                    </p>

                    <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-300 font-medium">
                      <span>{item.itemsCount}</span>
                      <span className="inline-flex items-center text-blue-300 group-hover:translate-x-1 transition-transform duration-200">
                        Explore <ArrowRight className="w-3 h-3 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
