"use client";

import { useState } from "react";
import Link from "next/link";
import { Project } from "@/types";
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Server,
} from "lucide-react";
import { Github } from "./icons";
import ProjectArchitectureDiagram from "./ProjectArchitectureDiagram";

interface Props {
  project: Project;
  featuredIndex?: number;
}

export default function ProjectCard({ project, featuredIndex }: Props) {
  const [showArchDetails, setShowArchDetails] = useState(false);

  return (
    <div className="relative rounded-3xl glass-card p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-white/[0.12] overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent space-y-8">
      {/* Top Meta Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.06] pb-6 light:border-zinc-200">
        <div>
          <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
              {project.category}
            </span>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              {project.statusBadge}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white light:text-zinc-900 tracking-[-0.03em]">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-zinc-400 light:text-zinc-600 mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Links & CTA */}
        <div className="flex items-center gap-3 self-start md:self-center">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-white/[0.08] bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800 transition light:border-zinc-200 light:bg-zinc-100 light:text-zinc-700 light:hover:text-zinc-900"
              aria-label={`${project.title} GitHub`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-white/[0.08] bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800 transition light:border-zinc-200 light:bg-zinc-100 light:text-zinc-700 light:hover:text-zinc-900"
              aria-label={`${project.title} Live URL`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-[0_0_15px_rgba(59,130,246,0.25)]"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Grid: Overview, Problem & Solution */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Problem & Contribution (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.15em] font-mono text-zinc-400 light:text-zinc-500 font-semibold mb-2">
              Overview
            </h4>
            <p className="text-sm sm:text-base text-zinc-300 light:text-zinc-700 leading-relaxed font-normal">
              {project.overview}
            </p>
          </div>

          <div className="p-4.5 rounded-xl bg-amber-500/[0.03] border border-amber-500/20 light:bg-amber-50/50 light:border-amber-200 space-y-1.5">
            <span className="text-[11px] uppercase tracking-[0.15em] font-mono text-amber-400 font-semibold block">
              Problem Solved
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 light:text-zinc-700 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.15em] font-mono text-blue-400 font-semibold mb-3">
              My Engineering Contribution
            </h4>
            <div className="space-y-2.5">
              {project.contribution.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 light:text-zinc-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400/90 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visual Mockup / Architecture Preview & Tech Badges (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Visual Architecture Mini-Card Preview */}
          <div className="p-5 rounded-2xl border border-white/[0.08] bg-zinc-900/50 light:bg-zinc-100 light:border-zinc-200 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-zinc-200 light:text-zinc-800 font-semibold">
                <Server className="w-3.5 h-3.5 text-blue-400" />
                Architecture Blueprint
              </span>
              <button
                onClick={() => setShowArchDetails(!showArchDetails)}
                className="text-blue-400 hover:text-blue-300 flex items-center gap-1 transition text-xs font-medium"
              >
                <span>{showArchDetails ? "Hide Diagram" : "Expand Flow"}</span>
                {showArchDetails ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
            </div>

            <p className="text-xs text-zinc-400 light:text-zinc-600 leading-relaxed">
              {project.architecture.summary}
            </p>

            <div className="pt-2 flex flex-wrap gap-1.5">
              {project.architecture.nodes.slice(0, 4).map((node) => (
                <span
                  key={node.id}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-white/[0.06] light:bg-white light:border-zinc-300 light:text-zinc-700"
                >
                  {node.label}
                </span>
              ))}
              {project.architecture.nodes.length > 4 && (
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-zinc-500">
                  +{project.architecture.nodes.length - 4} components
                </span>
              )}
            </div>
          </div>

          {/* Technologies Used Grid */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.15em] font-mono text-zinc-400 light:text-zinc-500 font-semibold mb-2.5">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-900/80 text-zinc-300 border border-white/[0.08] hover:border-blue-500/40 hover:text-white transition light:bg-white light:border-zinc-200 light:text-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Product Features */}
          <div className="p-4 rounded-xl border border-white/[0.06] bg-zinc-950/40 text-xs text-zinc-400 light:bg-zinc-50 light:border-zinc-200 space-y-1.5">
            <span className="font-mono text-zinc-300 light:text-zinc-700 font-semibold block mb-1">
              Core Capabilities:
            </span>
            {project.features.slice(0, 3).map((f, i) => (
              <p key={i} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                <span className="truncate">{f}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Expandable Architecture Diagram Section */}
      {showArchDetails && (
        <div className="pt-4 border-t border-white/[0.06] light:border-zinc-200">
          <ProjectArchitectureDiagram
            architecture={project.architecture}
            projectTitle={project.title}
          />
        </div>
      )}
    </div>
  );
}
