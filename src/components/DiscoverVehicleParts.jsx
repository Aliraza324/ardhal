import React from "react";
import { motion } from "motion/react";
import { Handshake, Award, Zap, Medal } from "lucide-react";
import bannerBg from "../assets/images_2026-09-14_07-35-17/image_1135x360_90.jpeg";
import { fadeInUp, staggerContainer } from "./animations/animations";

const features = [
  {
    id: "reliable",
    icon: Handshake,
    title: "We Are Reliable",
    description: "We fully understand your needs.",
  },
  {
    id: "specialists",
    icon: Award,
    title: "We Are Specialists",
    description: "Committed to quality and client satisfaction.",
  },
  {
    id: "fast",
    icon: Zap,
    title: "Fast And Efficient",
    description:
      "We understand the value of your time, which is why we adhere to a strict schedule.",
  },
  {
    id: "quality",
    icon: Medal,
    title: "Quality Services",
    description: "The services we offer are of the highest quality.",
  },
];

export default function DiscoverVehicleParts() {
  return (
    <section className="relative w-full bg-white text-zinc-900 overflow-hidden select-none">
      {/* Top Banner with Holographic 3D Vehicle Background */}
      <div className="relative w-full pt-16 pb-28 sm:pt-20 sm:pb-36 lg:pt-24 lg:pb-44 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bannerBg}
            alt="Discover Vehicle Parts Holographic Chassis"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Subtle Contrast Overlays */}
          <div className="absolute inset-0 bg-black/60 sm:bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* Banner Text (Exact from Reference) */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white drop-shadow-md"
          >
            Discover Vehicle Parts
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg text-zinc-200 font-normal tracking-wide drop-shadow-sm"
          >
            Explore hundreds of brands and thousands of parts
          </motion.p>
        </div>
      </div>

      {/* 4 Overlapping Value Cards */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 lg:-mt-24 pb-14 sm:pb-20 lg:pb-24">
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch"
        >
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.id}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white rounded-xl sm:rounded-2xl border border-zinc-300/80 p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-start gap-4 group"
              >
                {/* Large Navy Blue Icon */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-[#0f2b4c] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 sm:w-9 sm:h-9 stroke-[2]" />
                </div>

                {/* Content */}
                <div className="flex flex-col text-left">
                  <h3 className="font-bold text-base sm:text-lg text-zinc-950 leading-snug tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-500 mt-1.5 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
