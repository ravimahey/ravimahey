"use client";

import { profileData } from "@/data/profile";
import ContactForm from "./ContactForm";
import {
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Github, Linkedin } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative border-t border-white/[0.06] light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative, Direct Channels & Verification (5 cols) */}
          <div className="lg:col-span-5 space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.035em] text-white light:text-zinc-900 leading-[1.12]">
              Have an Idea? <br />
              <span className="accent-gradient">
                Let&apos;s Build It.
              </span>
            </h2>

            <p className="text-base text-zinc-400 light:text-zinc-600 leading-relaxed font-normal">
              Whether you&apos;re building a SaaS product, integrating AI into your business, modernizing infrastructure, or launching a new application, let&apos;s discuss how I can help.
            </p>

            {/* Direct Channel Cards */}
            <div className="space-y-3 pt-1">
              <a
                href={`mailto:${profileData.contactEmail}`}
                className="flex items-center gap-4 p-4 rounded-2xl glass-card hover:border-blue-500/40 hover:bg-zinc-900/90 transition group light:bg-white light:border-zinc-200 light:hover:bg-zinc-50"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-mono text-zinc-500 block uppercase tracking-wider font-semibold">Direct Email</span>
                  <span className="text-sm font-semibold text-zinc-200 group-hover:text-blue-400 truncate block transition-colors light:text-zinc-800">
                    {profileData.contactEmail}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200 transition shrink-0" />
              </a>

              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass-card hover:border-blue-500/40 hover:bg-zinc-900/90 transition group light:bg-white light:border-zinc-200 light:hover:bg-zinc-50"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-mono text-zinc-500 block uppercase tracking-wider font-semibold">LinkedIn Profile</span>
                  <span className="text-sm font-semibold text-zinc-200 group-hover:text-blue-400 truncate block transition-colors light:text-zinc-800">
                    linkedin.com/in/ravimahey
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200 transition shrink-0" />
              </a>

              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass-card hover:border-blue-500/40 hover:bg-zinc-900/90 transition group light:bg-white light:border-zinc-200 light:hover:bg-zinc-50"
              >
                <div className="p-3 rounded-xl bg-zinc-800/90 text-zinc-300 border border-white/[0.08] group-hover:scale-105 transition-transform shrink-0 light:bg-zinc-100 light:border-zinc-200 light:text-zinc-700">
                  <Github className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-mono text-zinc-500 block uppercase tracking-wider font-semibold">Open Source / GitHub</span>
                  <span className="text-sm font-semibold text-zinc-200 group-hover:text-blue-400 truncate block transition-colors light:text-zinc-800">
                    github.com/ravimahey
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-200 transition shrink-0" />
              </a>
            </div>

            {/* Availability details */}
            <div className="p-4.5 rounded-2xl bg-zinc-900/40 border border-white/[0.06] light:bg-zinc-50 light:border-zinc-200 space-y-2.5 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Current Status: Taking on Select Engagements</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400 light:text-zinc-600">
                <Clock className="w-3.5 h-3.5" />
                <span>Response Time: Typically under 24 hours</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400 light:text-zinc-600">
                <MapPin className="w-3.5 h-3.5" />
                <span>Timezone: IST (UTC+5:30) · High overlap with US / EU / APAC</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
