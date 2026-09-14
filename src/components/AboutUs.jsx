import React from "react";
import { motion } from "motion/react";
import aboutImg from "../assets/images_2026-09-14_07-35-17/image_800x450_95.jpeg";
import { paragraphReveal, textRevealWord } from "./animations/animations";

export default function AboutUs() {
  return (
    <section className="w-full py-10 sm:py-14 lg:py-20 bg-white text-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Grid exactly matching reference design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: Automotive Parts Image with Rounded Corners */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full flex items-center"
          >
            <div className="w-full h-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm border border-zinc-200/50 bg-white flex items-center justify-center">
              <img
                src={aboutImg}
                alt="ARDH AL KHALEEJ AUTO Spare Parts"
                className="w-full h-full object-cover rounded-2xl sm:rounded-3xl hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

          {/* Right Column: Light Grey Rounded Card with Content & Reveal Animations */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#edf0f4] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-center text-left"
          >
            {/* Heading: About Us */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold tracking-tight text-zinc-950 font-sans mb-4 sm:mb-6 leading-tight">
              About Us
            </h2>

            {/* Content Paragraphs with Staggered Viewport Reveal */}
            <div className="space-y-3.5 sm:space-y-4 text-zinc-600 text-xs sm:text-[13.5px] leading-relaxed">
              <motion.p
                variants={paragraphReveal}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                ARDH AL KHALEEJ AUTO we are dedicated to providing high-quality
                auto spare parts to meet the needs of our customers. With years
                of experience in the automotive industry, we understand the
                importance of reliable components for your vehicle's performance
                and safety.
              </motion.p>

              <motion.p
                variants={paragraphReveal}
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Our extensive inventory includes a wide range of parts for
                various makes and models, ensuring that you find exactly what you
                need. We prioritize quality, sourcing our products from trusted
                manufacturers to guarantee durability and reliability.
              </motion.p>

              <motion.p
                variants={paragraphReveal}
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Customer satisfaction is at the core of our business. Our
                knowledgeable team is always ready to assist you in finding the
                right parts and providing expert advice. Whether you're a
                professional mechanic or a DIY enthusiast, we strive to deliver
                exceptional service and support.
              </motion.p>

              <motion.p
                variants={paragraphReveal}
                custom={4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                ARDH AL KHALEEJ AUTO we believe that every driver deserves access
                to the best auto parts. Trust us to keep your vehicle running
                smoothly and safely on the road.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
