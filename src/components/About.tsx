"use client";

import { useState } from "react";
import { profileData } from "@/data/profile";
import {
  FileText,
  Mail,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Github, Linkedin } from "./icons";
import ResumeModal from "./ResumeModal";

export default function About() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <>
      <section id="about" className="py-28 relative border-t border-white/[0.06] light:border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative (7 Cols) */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
                <span>About Ravi Kumar</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.035em] text-white light:text-zinc-900 leading-[1.12]">
                {profileData.aboutHeadline}
              </h2>

              <div className="space-y-4 text-zinc-300 light:text-zinc-700 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  I&apos;m a Full-Stack and Cloud Engineer passionate about building complete digital products. My work spans application development, AI integration, cloud infrastructure, automation and production operations.
                </p>
                <p>
                  I enjoy working across the entire engineering lifecycle — transforming ideas into functional, scalable and maintainable products. Rather than stopping when the code compiles locally, I ensure systems are securely architected, containerized, continuously deployed, and fully observable in production.
                </p>
              </div>

              {/* Callout Quote */}
              <div className="p-5 rounded-2xl border border-blue-500/25 bg-blue-950/15 text-xs sm:text-sm font-mono text-blue-300 light:bg-blue-50 light:text-blue-900 light:border-blue-200 shadow-inner">
                &ldquo;{profileData.corePhilosophy}&rdquo;
              </div>

              {/* Target Partners / Who I Build For */}
              <div className="pt-2">
                <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-zinc-400 light:text-zinc-500 block mb-3 font-semibold">
                  Who I Collaborate With:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {profileData.targetAudience.map((audience, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/40 border border-white/[0.06] text-xs text-zinc-300 light:bg-zinc-100 light:border-zinc-200 light:text-zinc-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{audience}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Links & CTA */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <button
                  onClick={() => setResumeModalOpen(true)}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] active:scale-[0.98]"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>

                <a
                  href="#contact"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/[0.1] bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-xs sm:text-sm transition light:bg-zinc-100 light:border-zinc-300 light:text-zinc-800"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="flex items-center gap-2 pl-2">
                  <a
                    href={profileData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-white/[0.08] bg-zinc-900/60 text-zinc-400 hover:text-white hover:border-white/[0.16] transition light:border-zinc-200 light:bg-zinc-100 light:text-zinc-700"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={profileData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-white/[0.08] bg-zinc-900/60 text-zinc-400 hover:text-blue-400 hover:border-white/[0.16] transition light:border-zinc-200 light:bg-zinc-100 light:text-zinc-700"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${profileData.contactEmail}`}
                    className="p-3 rounded-xl border border-white/[0.08] bg-zinc-900/60 text-zinc-400 hover:text-emerald-400 hover:border-white/[0.16] transition light:border-zinc-200 light:bg-zinc-100 light:text-zinc-700"
                    aria-label="Direct Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Principles Cards (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl glass-card p-7 light:bg-white light:border-zinc-200 shadow-2xl space-y-5 overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent">
                <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.06] light:border-zinc-200">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
                    Engineering Principles
                  </span>
                  <span className="text-xs font-mono text-zinc-500">Core Values</span>
                </div>

                <div className="space-y-3.5">
                  {profileData.principles.map((principle, index) => (
                    <div
                      key={principle.title}
                      className="p-4 rounded-xl bg-zinc-900/50 border border-white/[0.06] light:bg-zinc-50 light:border-zinc-200 space-y-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-blue-400 font-bold">
                          0{index + 1}.
                        </span>
                        <h4 className="text-sm font-bold text-white light:text-zinc-900 tracking-tight">
                          {principle.title}
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-400 light:text-zinc-600 pl-6 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/[0.04] text-[11px] text-zinc-500 light:bg-zinc-100 light:border-zinc-200 flex items-center justify-between font-mono">
                  <span>Based in {profileData.location}</span>
                  <span className="text-emerald-400 font-medium">Available for projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </>
  );
}
