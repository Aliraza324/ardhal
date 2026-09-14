import React from "react";
import {
  Phone,
  Mail,
  ShieldCheck,
  Truck,
  Sparkles,
  Clock,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function MarqueeBar() {
  const contactItems = [
    {
      type: "whatsapp",
      icon: WhatsAppIcon,
      label: "WhatsApp Parts Inquiry",
      value: "+971 55 549 3031",
      href: "https://api.whatsapp.com/send?phone=971555493031",
      badge: "Instant Quote",
      badgeColor: "bg-emerald-500/25 text-emerald-200 border-emerald-400/40",
      accent: "hover:text-emerald-200",
      iconBg: "bg-emerald-600/30 text-emerald-300 border-emerald-500/30",
    },
    {
      type: "announcement",
      icon: ShieldCheck,
      label: "Ardhal Khaleej Auto",
      value: "100% Genuine OEM & Aftermarket Auto Parts",
      accent: "text-white font-bold tracking-wide",
      badge: "UAE Certified",
      badgeColor: "bg-amber-400/20 text-amber-200 border-amber-300/40",
      iconBg: "bg-amber-500/30 text-amber-300 border-amber-400/30",
    },
    {
      type: "phone",
      icon: Phone,
      label: "Direct Call",
      value: "+971 55 553 3071",
      href: "tel:+971555533071",
      accent: "hover:text-amber-200",
      iconBg: "bg-white/10 text-white border-white/20",
    },
    {
      type: "email",
      icon: Mail,
      label: "Email Inquiries",
      value: "sales@ardhalkhaleejauto.com",
      href: "mailto:sales@ardhalkhaleejauto.com",
      accent: "hover:text-white",
      iconBg: "bg-white/10 text-white border-white/20",
    },
    {
      type: "feature",
      icon: Truck,
      label: "GCC Express Delivery",
      value: "Same-Day UAE Dispatch ⚡",
      accent: "text-zinc-100",
      iconBg: "bg-amber-500/20 text-amber-300 border-amber-400/30",
    },
    {
      type: "timing",
      icon: Clock,
      label: "Store Timing",
      value: "Sat - Thu: 8:30 AM - 8:00 PM (GST)",
      accent: "text-zinc-200",
      iconBg: "bg-white/10 text-zinc-300 border-white/20",
    },
  ];

  // Duplicate items array to ensure seamless infinite looping marquee
  const loopedItems = [...contactItems, ...contactItems];

  return (
    <div className="relative z-50 w-full bg-gradient-to-r from-[#7a0c0c] via-[#9e1616] to-[#7a0c0c] text-white border-b border-red-950/40 text-[11px] sm:text-xs overflow-hidden select-none py-2 shadow-inner font-sans">
      {/* Subtle side gradient fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#7a0c0c] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#7a0c0c] to-transparent z-10" />

      {/* Marquee Track with pause-on-hover */}
      <div className="flex w-max animate-marquee items-center gap-6 sm:gap-8 whitespace-nowrap">
        {loopedItems.map((item, index) => {
          const Icon = item.icon;
          const isLink = Boolean(item.href);

          const innerCard = (
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full transition-all duration-200 group ${
                isLink
                  ? "hover:bg-black/25 cursor-pointer"
                  : "cursor-default"
              }`}
            >
              {/* Icon Container */}
              <div
                className={`p-1 rounded-md border ${item.iconBg} group-hover:scale-110 transition-transform duration-200 flex items-center justify-center`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>

              {/* Label & Value */}
              <div className="flex items-center gap-1.5 font-medium">
                <span className="text-red-200 text-[11px] font-normal">
                  {item.label}:
                </span>
                <span
                  className={`tracking-wide text-white transition-colors ${
                    item.accent || ""
                  }`}
                >
                  {item.value}
                </span>
              </div>

              {/* Optional Badge */}
              {item.badge && (
                <span
                  className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${item.badgeColor}`}
                >
                  {item.badge}
                </span>
              )}

              {/* External link indicator */}
              {isLink && (
                <ExternalLink className="w-3 h-3 text-red-300/80 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
          );

          return isLink ? (
            <a
              key={`marquee-item-${index}`}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="outline-none"
            >
              {innerCard}
            </a>
          ) : (
            <div key={`marquee-item-${index}`}>{innerCard}</div>
          );
        })}
      </div>
    </div>
  );
}
