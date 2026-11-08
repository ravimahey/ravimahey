"use client";

import { useState } from "react";
import { ProjectArchitecture } from "@/types";
import {
  Server,
  Database,
  Cpu,
  Layers,
  Activity,
  Workflow,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

interface Props {
  architecture: ProjectArchitecture;
  projectTitle: string;
}

export default function ProjectArchitectureDiagram({
  architecture,
  projectTitle,
}: Props) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getNodeIcon = (type: string) => {
    switch (type) {
      case "client":
        return <Layers className="w-4 h-4 text-sky-400" />;
      case "gateway":
        return <Workflow className="w-4 h-4 text-emerald-400" />;
      case "worker":
        return <Activity className="w-4 h-4 text-amber-400" />;
      case "ai":
        return <Cpu className="w-4 h-4 text-purple-400" />;
      case "database":
        return <Database className="w-4 h-4 text-blue-400" />;
      case "infra":
        return <Server className="w-4 h-4 text-rose-400" />;
      case "observability":
        return <Activity className="w-4 h-4 text-cyan-400" />;
      default:
        return <Server className="w-4 h-4 text-zinc-400" />;
    }
  };

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 sm:p-6 overflow-hidden light:bg-zinc-50 light:border-zinc-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-zinc-800/80 light:border-zinc-200">
        <div>
          <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">
            System Topology & Interaction Flow
          </span>
          <h4 className="font-semibold text-zinc-100 text-base light:text-zinc-900">
            {projectTitle} — Production Architecture
          </h4>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Multi-tier Decoupled Flow</span>
        </div>
      </div>

      {/* Nodes grid */}
      <div className="py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {architecture.nodes.map((node, i) => (
            <div
              key={node.id}
              className={`p-3.5 rounded-xl border transition-all text-xs ${
                activeStep === i
                  ? "border-blue-500 bg-blue-950/20 shadow-md shadow-blue-500/10 light:bg-blue-50 light:border-blue-300"
                  : "border-zinc-800/80 bg-zinc-900/50 hover:border-zinc-700 light:bg-white light:border-zinc-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-lg bg-zinc-800/60 border border-zinc-700/60 light:bg-zinc-100 light:border-zinc-200">
                  {getNodeIcon(node.type)}
                </div>
                <span className="font-semibold text-zinc-200 truncate light:text-zinc-900">
                  {node.label}
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 light:text-zinc-600 line-clamp-2">
                {node.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Data Flow Step Sequencer */}
      <div className="pt-4 border-t border-zinc-800/80 light:border-zinc-200 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
          <span className="text-zinc-300 light:text-zinc-700 font-semibold">
            Execution Flow Sequence ({architecture.flowSteps.length} Steps)
          </span>
          <div className="flex items-center gap-1">
            {architecture.flowSteps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-5 h-5 rounded text-[10px] flex items-center justify-center font-mono transition ${
                  activeStep === idx
                    ? "bg-blue-600 text-white"
                    : "bg-zinc-900 text-zinc-500 hover:text-zinc-300 light:bg-zinc-200 light:text-zinc-700"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Step Detail Display */}
        <div className="p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800 text-xs text-zinc-200 light:bg-white light:border-zinc-200 light:text-zinc-800 flex items-start gap-3">
          <div className="p-1 rounded bg-blue-500/20 text-blue-400 shrink-0 mt-0.5">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="font-semibold text-blue-400 block mb-0.5">
              Flow Stage {activeStep + 1}
            </span>
            <p className="leading-relaxed text-zinc-300 light:text-zinc-700">
              {architecture.flowSteps[activeStep] || architecture.flowSteps[0]}
            </p>
          </div>
        </div>

        {/* Key Architectural Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
          {architecture.keyHighlights.map((highlight, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 p-2.5 rounded-lg bg-zinc-900/30 border border-zinc-900 text-[11px] text-zinc-400 light:bg-zinc-100/60 light:border-zinc-200 light:text-zinc-600"
            >
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
