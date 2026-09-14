import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, ExternalLink, CheckCircle2, Phone, Clock } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vin: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          vin: "",
          email: "",
          message: "",
        });
        setSubmitted(false);
      }, 4000);
    }, 800);
  };

  const mapAddress =
    "Business Center, Sharjah Publishing Free Zone, Sharjah, United Arab Emirates";
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    mapAddress
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapAddress
  )}`;

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 overflow-hidden select-none">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-14">
          {/* Outlined Mail / Envelope Icon matching reference */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center mb-3"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-zinc-200 bg-zinc-50 flex items-center justify-center shadow-sm">
              <Mail className="w-8 h-8 sm:w-9 sm:h-9 text-zinc-900 stroke-[2]" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-zinc-950"
          >
            Enquiry
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-2 text-sm sm:text-base md:text-lg text-zinc-600 font-normal tracking-wide max-w-2xl mx-auto"
          >
            We welcome any suggestions or just a friendly conversation
          </motion.p>
        </div>

        {/* 2-Column Grid: Left Contact Form, Right Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* LEFT COLUMN: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-zinc-50 rounded-2xl p-8 sm:p-12 text-center shadow-md border border-zinc-200 my-auto"
              >
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-zinc-950 mb-2">
                  Thank You for Reaching Out!
                </h3>
                <p className="text-zinc-600 max-w-md mx-auto">
                  Your enquiry has been received. Our automotive parts specialists
                  will review your request and get in touch with you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Row 1: Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5 text-left">
                    <label
                      htmlFor="name"
                      className="block text-sm sm:text-base font-semibold text-zinc-800 tracking-tight"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full bg-zinc-50 hover:bg-white focus:bg-white text-zinc-900 px-4 py-3 sm:py-3.5 rounded-lg border border-zinc-300 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 placeholder:text-zinc-400 text-sm sm:text-base shadow-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label
                      htmlFor="phone"
                      className="block text-sm sm:text-base font-semibold text-zinc-800 tracking-tight"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full bg-zinc-50 hover:bg-white focus:bg-white text-zinc-900 px-4 py-3 sm:py-3.5 rounded-lg border border-zinc-300 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 placeholder:text-zinc-400 text-sm sm:text-base shadow-sm transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: VIN/Chassis Number & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5 text-left">
                    <label
                      htmlFor="vin"
                      className="block text-sm sm:text-base font-semibold text-zinc-800 tracking-tight"
                    >
                      Enter VIN/Chassis Number
                    </label>
                    <input
                      type="text"
                      id="vin"
                      name="vin"
                      value={formData.vin}
                      onChange={handleChange}
                      placeholder="Enter VIN/Chassis Number"
                      className="w-full bg-zinc-50 hover:bg-white focus:bg-white text-zinc-900 px-4 py-3 sm:py-3.5 rounded-lg border border-zinc-300 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 placeholder:text-zinc-400 text-sm sm:text-base shadow-sm transition-all"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label
                      htmlFor="email"
                      className="block text-sm sm:text-base font-semibold text-zinc-800 tracking-tight"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full bg-zinc-50 hover:bg-white focus:bg-white text-zinc-900 px-4 py-3 sm:py-3.5 rounded-lg border border-zinc-300 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 placeholder:text-zinc-400 text-sm sm:text-base shadow-sm transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Message Textarea */}
                <div className="space-y-1.5 text-left">
                  <label
                    htmlFor="message"
                    className="block text-sm sm:text-base font-semibold text-zinc-800 tracking-tight"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full bg-zinc-50 hover:bg-white focus:bg-white text-zinc-900 px-4 py-3 sm:py-3.5 rounded-lg border border-zinc-300 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 placeholder:text-zinc-400 text-sm sm:text-base shadow-sm transition-all resize-y"
                  />
                </div>

                {/* Row 4: Red Submit Button matching reference */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#ff3b30] hover:bg-[#e0342b] active:bg-[#c92f27] text-white font-bold text-base sm:text-lg py-3.5 sm:py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <span>Send</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* RIGHT COLUMN: Interactive Location Map & Address Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-5 flex flex-col h-full"
          >
            <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] rounded-2xl overflow-hidden border border-zinc-200 shadow-md bg-white flex flex-col">
              {/* Google Maps Embed */}
              <iframe
                title="Office Location Map"
                src={mapEmbedUrl}
                className="w-full flex-1 min-h-[260px] sm:min-h-[300px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Location Details Footer Card */}
              <div className="p-5 sm:p-6 bg-zinc-50/80 border-t border-zinc-200 text-left">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-[#ff3b30] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-base text-zinc-950">
                        Sharjah Publishing Free Zone
                      </h4>
                      <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-semibold text-[#ff3b30] hover:text-red-700 transition-colors"
                      >
                        Directions <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">
                      Business Center, Sharjah Publishing Free Zone, Sharjah, United Arab Emirates.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-zinc-200 text-xs text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>Mon - Sat: 9am - 7pm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>+971 6 000 0000</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
