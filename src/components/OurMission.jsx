import React from "react";
import { ContainerScroll, CardSticky } from "./ui/cards-stack";
import {
  Star,
  ThumbsUp,
  MessagesSquare,
  Wrench,
  Recycle,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const MISSION_PILLARS = [
  {
    id: "mission-1",
    number: "01",
    title: "Quality Assurance",
    description:
      "Sourcing only the best parts from trusted manufacturers to guarantee safety and performance.",
    icon: Star,
  },
  {
    id: "mission-2",
    number: "02",
    title: "Customer Satisfaction",
    description:
      "Providing exceptional service and support to meet the diverse needs of our customers, whether they are professional mechanics or DIY enthusiasts.",
    icon: ThumbsUp,
  },
  {
    id: "mission-3",
    number: "03",
    title: "Accessibility",
    description:
      "Offering a comprehensive range of products at competitive prices, making it easy for customers to find the parts they need.",
    icon: MessagesSquare,
  },
  {
    id: "mission-4",
    number: "04",
    title: "Innovation",
    description:
      "Staying ahead of industry trends to provide the latest products and technologies in the automotive market.",
    icon: Wrench,
  },
  {
    id: "mission-5",
    number: "05",
    title: "Sustainability",
    description:
      "Promoting responsible practices within our operations to contribute to a more sustainable future for the automotive industry.",
    icon: Recycle,
  },
];

export default function OurMission() {
  return (
    <section className="relative w-full bg-[#f8f9fb] text-zinc-900 py-16 sm:py-24 border-t border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Sticky Title & Mission Overview */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:h-fit py-4 lg:py-8 flex flex-col justify-start text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider mb-4 w-fit">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Core Commitments</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif lg:text-5xl font-extrabold tracking-tight text-zinc-950 font-sans leading-tight">
              Our <span className="text-red-600">Mission</span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-prose">
              <strong className="text-zinc-950 font-semibold">
                ARDH AL KHALEEJ AUTO
              </strong>{" "}
              our mission is to be the leading provider of high-quality auto
              spare parts, ensuring that every vehicle on the road is equipped
              with reliable components.
            </p>

            <div className="mt-8 pt-6 border-t border-zinc-200/80 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                <div className="w-2 h-2 rounded-full bg-red-600" />
                <span>Engineered for Safety & Reliability</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                <div className="w-2 h-2 rounded-full bg-red-600" />
                <span>Serving Mechanics, Fleets & Individual Drivers</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                <div className="w-2 h-2 rounded-full bg-red-600" />
                <span>Trusted Suppliers Across UAE & GCC</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Sticky Cards using CardSticky */}
          <div className="lg:col-span-7">
            <ContainerScroll className="space-y-6 lg:space-y-8 pb-16">
              {MISSION_PILLARS.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <CardSticky
                    key={pillar.id}
                    index={index}
                    incrementY={22}
                    topOffset={120}
                    className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-lg shadow-zinc-200/50 backdrop-blur-md transition-shadow hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between gap-4 border-b border-zinc-100 pb-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 shadow-2xs">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">
                          {pillar.title}
                        </h3>
                      </div>
                      <span className="text-2xl sm:text-3xl font-extrabold text-red-600 tracking-tighter">
                        {pillar.number}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardSticky>
                );
              })}
            </ContainerScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
