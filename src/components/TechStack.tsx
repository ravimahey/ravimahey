"use client";

import { useState } from "react";
import { skillsData } from "@/data/skills";
import {
  Code,
  Server,
  Cpu,
  Cloud,
  Terminal,
  Activity,
  CheckCircle,
} from "lucide-react";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Code className="w-5 h-5 text-sky-400" />;
      case "Backend":
        return <Server className="w-5 h-5 text-emerald-400" />;
      case "AI Engineering":
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-blue-400" />;
      case "DevOps":
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case "Observability":
        return <Activity className="w-5 h-5 text-cyan-400" />;
      default:
        return <Terminal className="w-5 h-5 text-zinc-400" />;
    }
  };

  const categories = ["All", ...skillsData.map((s) => s.category)];

  const displayedCategories =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="stack" className="py-28 relative border-t border-white/[0.06] light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <span>Engineering Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.035em] text-white light:text-zinc-900">
            Technical Stack & Ecosystem
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 light:text-zinc-600 leading-relaxed font-normal">
            Curated, production-tested tools across the entire engineering lifecycle. Organized logically by engineering domain without arbitrary progress bars.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-white/[0.06] light:border-zinc-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategory === cat
                  ? "bg-zinc-800 text-white font-semibold border border-white/[0.1] shadow-sm light:bg-zinc-900 light:text-white"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04] light:text-zinc-600 light:hover:text-zinc-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((group) => (
            <div
              key={group.category}
              className="relative rounded-2xl glass-card p-6 flex flex-col justify-between hover:border-white/[0.12] transition-all overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-white/[0.08] light:bg-zinc-100 light:border-zinc-200 shadow-inner">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base light:text-zinc-900 tracking-tight">
                      {group.category}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {group.items.length} Technologies
                    </span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 light:text-zinc-600 mb-5 leading-relaxed">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-white/[0.08] text-xs font-mono text-zinc-200 hover:border-blue-500/40 hover:text-white transition light:bg-zinc-50 light:border-zinc-200 light:text-zinc-800"
                    >
                      <CheckCircle className="w-3 h-3 text-blue-400 shrink-0" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t border-white/[0.06] light:border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Production Standard</span>
                <span className="text-emerald-400 font-semibold">Verified Stack</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
