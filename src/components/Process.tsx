"use client";

import { processSteps } from "@/data/process";
import {
  Compass,
  Layers,
  Code2,
  GitBranch,
  Rocket,
  Activity,
  CheckCircle2,
} from "lucide-react";

export default function Process() {
  const getStepIcon = (num: string) => {
    switch (num) {
      case "01":
        return <Compass className="w-5 h-5 text-blue-400" />;
      case "02":
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case "03":
        return <Code2 className="w-5 h-5 text-sky-400" />;
      case "04":
        return <GitBranch className="w-5 h-5 text-emerald-400" />;
      case "05":
        return <Rocket className="w-5 h-5 text-amber-400" />;
      case "06":
        return <Activity className="w-5 h-5 text-rose-400" />;
      default:
        return <Compass className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="process" className="py-28 relative border-t border-white/[0.06] light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.035em] text-white light:text-zinc-900">
            My Engineering Process
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 light:text-zinc-600 leading-relaxed font-normal">
            A disciplined, end-to-end framework that takes complex engineering challenges from initial ambiguity to autonomous, observable production systems.
          </p>
        </div>

        {/* Steps Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="relative rounded-2xl glass-card p-7 hover:border-white/[0.12] transition-all light:bg-white light:border-zinc-200 flex flex-col justify-between group overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent"
            >
              <div>
                {/* Step indicator header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-zinc-900/90 border border-white/[0.08] flex items-center justify-center light:bg-zinc-100 light:border-zinc-200 group-hover:scale-105 transition-transform shadow-inner">
                    {getStepIcon(step.number)}
                  </div>
                  <span className="font-mono text-3xl font-extrabold text-zinc-700 group-hover:text-blue-400 transition-colors light:text-zinc-300">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 light:text-zinc-900 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 light:text-zinc-600 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Key Execution Actions */}
                <div className="space-y-2 border-t border-white/[0.06] pt-4.5 light:border-zinc-100">
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-zinc-500 block font-semibold mb-2">
                    Execution Focus:
                  </span>
                  {step.keyActions.map((action, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-zinc-300 light:text-zinc-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress connector visual at bottom */}
              <div className="pt-5 mt-4 border-t border-white/[0.06] light:border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Phase {step.number} of 06</span>
                {idx < 5 ? (
                  <span className="text-zinc-500 flex items-center gap-1 font-semibold">
                    Next ➔
                  </span>
                ) : (
                  <span className="text-emerald-400 font-semibold">Continuous</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
