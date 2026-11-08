"use client";

import { useState } from "react";
import {
  ArrowRight,
  Download,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  Terminal,
} from "lucide-react";
import { Github, Linkedin } from "./icons";
import HeroBackground from "./HeroBackground";
import ResumeModal from "./ResumeModal";
import { profileData } from "@/data/profile";

export default function Hero() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"arch" | "deploy" | "telemetry">("arch");

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden tech-grid">
      <HeroBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="tech-pill text-zinc-300 light:text-zinc-700 border-white/[0.08] bg-zinc-900/60 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs font-medium">{profileData.availability}</span>
          </div>

          <div className="tech-pill text-zinc-400 light:text-zinc-600 border-white/[0.06] bg-zinc-950/40">
            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
            <span className="font-mono text-xs">Based in {profileData.location} · Global Remote</span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-4">
              <span className="inline-block text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-blue-400">
                Full-Stack · AI Systems · Cloud Infrastructure
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-[-0.04em] text-white light:text-zinc-950 leading-[1.06]">
                From Idea to Production. <br />
                <span className="accent-gradient">
                  I Build the Entire Product.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-zinc-350 light:text-zinc-600 leading-relaxed max-w-2xl font-normal text-zinc-300">
              {profileData.heroSubheadline}
            </p>

            {/* Lifecycle Box */}
            <div className="glass-card rounded-2xl p-4 sm:p-5 border-white/[0.08]">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 mt-0.5 border border-blue-500/20 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-200 light:text-zinc-900 font-semibold block">
                    Complete Engineering Lifecycle
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-400 light:text-zinc-600 leading-relaxed">
                    {profileData.heroLifecycleStatement}
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-semibold text-sm transition-all shadow-[0_0_24px_rgba(59,130,246,0.35),inset_0_1px_0_rgba(255,255,255,0.25)] active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/[0.1] bg-zinc-900/60 hover:bg-zinc-800/80 hover:border-white/[0.18] text-zinc-200 font-medium text-sm transition-all active:scale-[0.98] light:bg-zinc-100 light:border-zinc-300 light:text-zinc-800 light:hover:bg-zinc-200"
              >
                <span>Let&apos;s Build Something</span>
              </a>

              <button
                onClick={() => setResumeModalOpen(true)}
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl border border-white/[0.08] bg-zinc-950/40 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 font-medium text-sm transition-colors light:bg-white light:border-zinc-200 light:text-zinc-600 light:hover:text-zinc-900"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-2 text-xs text-zinc-500 light:text-zinc-400 font-mono">
              <span className="text-zinc-400">CONNECT:</span>
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-zinc-200 transition"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-400 transition"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="hidden sm:inline-block text-zinc-800">|</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Production Verified</span>
              </span>
            </div>
          </div>

          {/* Right Column: Terminal Interactive Console (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/[0.1] bg-[#0c0d12]/95 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] overflow-hidden backdrop-blur-2xl light:bg-white light:border-zinc-200">
              {/* Terminal Window Chrome */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-zinc-900/40 light:bg-zinc-100 light:border-zinc-200">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-zinc-400 light:text-zinc-600">
                    ravi-engineering-stack.sh
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Sub-navigation tabs */}
              <div className="flex border-b border-white/[0.06] bg-black/20 text-xs font-mono light:border-zinc-200 light:bg-zinc-50">
                <button
                  onClick={() => setActiveTab("arch")}
                  className={`flex-1 py-2.5 px-3 text-center transition-colors border-b-2 ${
                    activeTab === "arch"
                      ? "border-blue-500 text-blue-400 font-semibold bg-white/[0.02] light:bg-white light:text-blue-600"
                      : "border-transparent text-zinc-500 hover:text-zinc-300 light:hover:text-zinc-800"
                  }`}
                >
                  Architecture
                </button>
                <button
                  onClick={() => setActiveTab("deploy")}
                  className={`flex-1 py-2.5 px-3 text-center transition-colors border-b-2 ${
                    activeTab === "deploy"
                      ? "border-blue-500 text-blue-400 font-semibold bg-white/[0.02] light:bg-white light:text-blue-600"
                      : "border-transparent text-zinc-500 hover:text-zinc-300 light:hover:text-zinc-800"
                  }`}
                >
                  GitOps & K8s
                </button>
                <button
                  onClick={() => setActiveTab("telemetry")}
                  className={`flex-1 py-2.5 px-3 text-center transition-colors border-b-2 ${
                    activeTab === "telemetry"
                      ? "border-blue-500 text-blue-400 font-semibold bg-white/[0.02] light:bg-white light:text-blue-600"
                      : "border-transparent text-zinc-500 hover:text-zinc-300 light:hover:text-zinc-800"
                  }`}
                >
                  AI & Vector
                </button>
              </div>

              {/* Console Body */}
              <div className="p-5 font-mono text-xs space-y-4">
                {activeTab === "arch" && (
                  <div className="space-y-3">
                    <div className="text-zinc-500 flex items-center justify-between text-[11px]">
                      <span># Full Lifecycle Architecture</span>
                      <span className="text-emerald-400 font-semibold">Active Pipeline</span>
                    </div>

                    <div className="space-y-2 text-zinc-300 light:text-zinc-700">
                      <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.06] light:bg-zinc-100 light:border-zinc-200">
                        <span className="text-sky-400 font-semibold">1. Client / Frontend</span>
                        <p className="text-[11px] text-zinc-400 light:text-zinc-600 mt-1">
                          Next.js 15 App Router · TypeScript · Dynamic SSR · Tailwind CSS
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.06] light:bg-zinc-100 light:border-zinc-200">
                        <span className="text-emerald-400 font-semibold">2. API & Services</span>
                        <p className="text-[11px] text-zinc-400 light:text-zinc-600 mt-1">
                          NestJS Gateway · FastAPI AI Services · Multi-tenant Isolation
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.06] light:bg-zinc-100 light:border-zinc-200">
                        <span className="text-purple-400 font-semibold">3. Cloud & GitOps</span>
                        <p className="text-[11px] text-zinc-400 light:text-zinc-600 mt-1">
                          GCP GKE · Docker Swarm · ArgoCD · Terraform IaC · Zero Downtime
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] text-zinc-500 light:text-zinc-400 flex items-center gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                      <span>Production-grade systems designed for scale.</span>
                    </div>
                  </div>
                )}

                {activeTab === "deploy" && (
                  <div className="space-y-3 text-zinc-300 light:text-zinc-700">
                    <div className="text-zinc-500 text-[11px]"># ArgoCD & K8s Pipeline State</div>
                    <div className="bg-black/60 p-3.5 rounded-xl border border-white/[0.06] light:bg-zinc-100 light:border-zinc-200 space-y-1.5 text-[11px]">
                      <p className="text-emerald-400">✔ GitOps Sync Status: Synced (HEAD: a8f9c1b)</p>
                      <p className="text-zinc-400">➜ Ingress: Nginx Controller (TLS Active)</p>
                      <p className="text-zinc-400">➜ Pods: 12 Running | 0 Restarting</p>
                      <p className="text-zinc-400">➜ Celery Workers: Auto-scaling (4 → 16)</p>
                      <p className="text-cyan-400">➜ ArgoCD Health: HEALTHY (Rollout 100%)</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-zinc-900/40 border border-white/[0.04] text-[11px] text-zinc-400 light:bg-zinc-50 light:border-zinc-200">
                      Declarative infrastructure guarantees zero manual configuration drift.
                    </div>
                  </div>
                )}

                {activeTab === "telemetry" && (
                  <div className="space-y-3 text-zinc-300 light:text-zinc-700">
                    <div className="text-zinc-500 text-[11px]"># Vector Search & RAG Flow</div>
                    <div className="bg-black/60 p-3.5 rounded-xl border border-white/[0.06] light:bg-zinc-100 light:border-zinc-200 space-y-1.5 text-[11px]">
                      <p className="text-blue-400">➜ Vector Store: Qdrant High-Dim Collection</p>
                      <p className="text-zinc-400">➜ RAG Pipeline: LangChain Semantic Chunking</p>
                      <p className="text-emerald-400">✔ Citations: Exact Coordinate Anchoring</p>
                      <p className="text-zinc-400">➜ Model: Enterprise LLMs with Fallback</p>
                      <p className="text-purple-400">✔ Latency p95: &lt; 240ms</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-zinc-900/40 border border-white/[0.04] text-[11px] text-zinc-400 light:bg-zinc-50 light:border-zinc-200">
                      Enterprise contextual reasoning without hallucination risks.
                    </div>
                  </div>
                )}
              </div>

              {/* Status bar */}
              <div className="px-4 py-2.5 border-t border-white/[0.06] bg-black/40 text-[11px] font-mono text-zinc-500 flex items-center justify-between light:bg-zinc-50 light:border-zinc-200">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Full Product Engineering Scope
                </span>
                <span className="text-zinc-400">v2.4.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </section>
  );
}
