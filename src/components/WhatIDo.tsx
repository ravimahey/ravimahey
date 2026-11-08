"use client";

import {
  Layers,
  Sparkles,
  CloudCog,
  Boxes,
  Compass,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";
import { servicesData } from "@/data/services";

export default function WhatIDo() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return <Layers className="w-5 h-5 text-blue-400" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case "CloudCog":
        return <CloudCog className="w-5 h-5 text-emerald-400" />;
      case "Boxes":
        return <Boxes className="w-5 h-5 text-purple-400" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-amber-400" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-rose-400" />;
      default:
        return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  const getAccentBorder = (index: number) => {
    const borders = [
      "group-hover:border-blue-500/40 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)]",
      "group-hover:border-cyan-500/40 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)]",
      "group-hover:border-emerald-500/40 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.15)]",
      "group-hover:border-purple-500/40 hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.15)]",
      "group-hover:border-amber-500/40 hover:shadow-[0_10px_30px_-10px_rgba(245,158,11,0.15)]",
      "group-hover:border-rose-500/40 hover:shadow-[0_10px_30px_-10px_rgba(244,63,94,0.15)]",
    ];
    return borders[index % borders.length];
  };

  return (
    <section id="services" className="py-28 relative border-t border-white/[0.06] light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.035em] text-white light:text-zinc-900">
            What I Do
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 light:text-zinc-600 leading-relaxed font-normal">
            I bridge the gap between product strategy, distributed cloud architecture, modern frontend execution, and intelligent AI capabilities.
          </p>
        </div>

        {/* 6 Visually Distinct Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`group relative rounded-2xl glass-card p-7 transition-all duration-300 hover:-translate-y-1 ${getAccentBorder(
                index
              )} flex flex-col justify-between overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent`}
            >
              <div>
                {/* Card Header with Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-zinc-900/90 border border-white/[0.08] flex items-center justify-center transition-transform group-hover:scale-105 shadow-inner light:bg-zinc-100 light:border-zinc-200">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono text-zinc-600 light:text-zinc-400 font-semibold">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white mb-2.5 light:text-zinc-900 tracking-tight group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 light:text-zinc-600 mb-6 leading-relaxed">
                  {service.tagline}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2.5 mb-7">
                  {service.bulletPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 light:text-zinc-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400/90 shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Pillars bottom badge bar */}
              <div className="pt-4 border-t border-white/[0.06] light:border-zinc-100">
                <span className="text-[10px] uppercase tracking-wider font-mono text-zinc-500 block mb-2">
                  Key Technologies & Tools
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {service.technicalPillars.map((pillar) => (
                    <span
                      key={pillar}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-zinc-900/80 text-zinc-300 border border-white/[0.06] light:bg-zinc-100 light:border-zinc-200 light:text-zinc-600"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
