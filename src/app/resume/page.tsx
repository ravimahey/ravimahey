import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Printer, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";

export const metadata: Metadata = {
  title: "Engineering Resume — Ravi Kumar",
  description:
    "Full-Stack, AI & Cloud Infrastructure Engineer resume. Complete production systems, microservices, Kubernetes, and AI integration experience.",
};

export default function ResumePage() {
  return (
    <div className="pt-28 pb-20 tech-grid min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navigation & Action Bar */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition light:text-zinc-600 light:hover:text-zinc-900"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-2">
            <a
              href="/resume.txt"
              download="Ravi_Kumar_Resume.txt"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-500 transition shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Text Resume</span>
            </a>
          </div>
        </div>

        {/* Paper Document Container */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-8 sm:p-12 backdrop-blur-xl light:bg-white light:border-zinc-200 shadow-2xl space-y-8 text-sm">
          {/* Header */}
          <div className="border-b border-zinc-800 pb-6 light:border-zinc-200">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl font-bold tracking-tight text-white light:text-zinc-900">
                {profileData.name}
              </h1>
              <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {profileData.availability}
              </span>
            </div>
            <p className="text-lg text-blue-400 mt-1 font-medium">
              {profileData.title}
            </p>
            <p className="text-xs text-zinc-400 mt-2 font-mono light:text-zinc-600">
              Location: {profileData.location} · Email: {profileData.contactEmail} · GitHub: github.com/ravimahey · LinkedIn: linkedin.com/in/ravimahey · Website: ravimahey.github.io
            </p>
            <div className="mt-4 p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 light:bg-zinc-100 light:border-zinc-200 text-xs sm:text-sm text-zinc-300 light:text-zinc-700 italic">
              &ldquo;{profileData.corePhilosophy}&rdquo;
            </div>
          </div>

          {/* Technical Stack */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
              Engineering Capabilities & Technical Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {skillsData.map((cat) => (
                <div
                  key={cat.category}
                  className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 light:bg-zinc-50 light:border-zinc-200"
                >
                  <span className="font-semibold text-zinc-200 light:text-zinc-900 block mb-1">
                    {cat.category}:
                  </span>
                  <span className="text-zinc-400 light:text-zinc-600">
                    {cat.items.join(" · ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Production Projects & Architectures */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
              Selected Production Products & Systems
            </h2>
            <div className="space-y-6">
              {projectsData.map((p) => (
                <div
                  key={p.id}
                  className="border-l-2 border-blue-500/40 pl-4 py-1 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-bold text-white text-base light:text-zinc-900">
                      {p.title}
                    </h3>
                    <span className="text-xs font-mono text-zinc-400">
                      {p.category}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 light:text-zinc-600">
                    {p.tagline}
                  </p>
                  <div className="space-y-1 pt-1">
                    {p.contribution.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-zinc-400 light:text-zinc-600"
                      >
                        <span className="text-blue-400">▹</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-1 flex flex-wrap gap-1">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 light:bg-zinc-100 light:border-zinc-200 light:text-zinc-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Methodology */}
          <div className="border-t border-zinc-800 pt-6 light:border-zinc-200 space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
              End-to-End Product Engineering Lifecycle
            </h2>
            <p className="text-xs text-zinc-400 light:text-zinc-600 leading-relaxed">
              01 Discover ➔ 02 Architect ➔ 03 Design & Develop ➔ 04 Automate (CI/CD, IaC) ➔ 05 Deploy (K8s/Cloud) ➔ 06 Monitor & Optimize (Observability)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
