import Link from "next/link";
import { Terminal, Mail, ArrowUp } from "lucide-react";
import { Github, Linkedin } from "./icons";
import { profileData } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 text-zinc-400 py-16 light:bg-zinc-50 light:border-zinc-200 light:text-zinc-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900 light:border-zinc-200">
          {/* Brand & Manifesto (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400 light:bg-zinc-200 light:border-zinc-300">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base tracking-tight light:text-zinc-900">
                Ravi Kumar
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 light:text-zinc-600 leading-relaxed max-w-sm">
              {profileData.corePhilosophy}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition light:bg-zinc-200 light:border-zinc-300 light:text-zinc-700"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-blue-400 transition light:bg-zinc-200 light:border-zinc-300 light:text-zinc-700"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.contactEmail}`}
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 transition light:bg-zinc-200 light:border-zinc-300 light:text-zinc-700"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 light:text-zinc-800 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-zinc-200 transition">
                  What I Do
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-zinc-200 transition">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-zinc-200 transition">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-zinc-200 transition">
                  Engineering Process
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-zinc-200 transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-zinc-200 transition">
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Production Domains (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 light:text-zinc-800 font-semibold">
              Specialized Disciplines
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs">
              <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 light:bg-zinc-100 light:border-zinc-300 light:text-zinc-700">
                Full-Stack Systems
              </span>
              <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 light:bg-zinc-100 light:border-zinc-300 light:text-zinc-700">
                LLM & RAG Pipelines
              </span>
              <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 light:bg-zinc-100 light:border-zinc-300 light:text-zinc-700">
                Kubernetes & GitOps
              </span>
              <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 light:bg-zinc-100 light:border-zinc-300 light:text-zinc-700">
                Multi-Tenant SaaS
              </span>
              <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 light:bg-zinc-100 light:border-zinc-300 light:text-zinc-700">
                Terraform IaC
              </span>
              <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 light:bg-zinc-100 light:border-zinc-300 light:text-zinc-700">
                Full Observability
              </span>
            </div>
            <div className="pt-2 text-xs text-zinc-500 font-mono">
              Status: Available for technical co-founder & engineering contract roles.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-zinc-500 light:text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} Ravi Kumar. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built with Next.js 15, TypeScript & Tailwind CSS</span>
            <a
              href="#"
              className="p-1 rounded bg-zinc-900 border border-zinc-800 hover:text-zinc-200 transition light:bg-zinc-200 light:border-zinc-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
