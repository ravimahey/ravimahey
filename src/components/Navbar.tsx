"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Menu, X, FileText, ArrowRight } from "lucide-react";
import { Github, Linkedin } from "./icons";
import { profileData } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";
import ResumeModal from "./ResumeModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#stack" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#050508]/85 backdrop-blur-xl border-b border-white/[0.06] py-3.5 shadow-2xl light:bg-white/85 light:border-zinc-200"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Identity */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-zinc-900/90 border border-white/[0.08] flex items-center justify-center text-blue-400 group-hover:border-blue-500/50 group-hover:text-blue-300 transition-all shadow-inner light:bg-zinc-100 light:border-zinc-200">
                <Terminal className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-white text-sm tracking-tight group-hover:text-blue-400 transition-colors light:text-zinc-900">
                    Ravi Kumar
                  </span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                </div>
                <span className="text-[10px] text-zinc-400 font-mono tracking-tight light:text-zinc-500">
                  Full-Stack · AI · Cloud
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-zinc-900/40 border border-white/[0.06] backdrop-blur-md light:bg-zinc-100/70 light:border-zinc-200">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1 text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.04] rounded-full transition-all light:text-zinc-600 light:hover:text-zinc-900 light:hover:bg-zinc-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />

              <button
                onClick={() => setResumeModalOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-zinc-300 hover:text-white rounded-xl border border-white/[0.08] bg-zinc-900/50 hover:bg-zinc-800/80 transition-all light:border-zinc-200 light:bg-zinc-100 light:text-zinc-700 light:hover:text-zinc-900"
              >
                <FileText className="w-3.5 h-3.5 text-zinc-400" />
                <span>Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
              >
                <span>Let&apos;s Build</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl border border-white/[0.08] bg-zinc-900 text-zinc-300 hover:text-white light:border-zinc-200 light:bg-zinc-100 light:text-zinc-700"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/[0.08] bg-[#050508]/95 backdrop-blur-2xl px-5 py-6 space-y-4 light:bg-white/95 light:border-zinc-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors light:text-zinc-800 light:hover:bg-zinc-100"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3 light:border-zinc-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setResumeModalOpen(true);
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium rounded-xl border border-white/[0.08] bg-zinc-900 text-zinc-200 light:border-zinc-200 light:bg-zinc-100 light:text-zinc-800"
              >
                <FileText className="w-4 h-4 text-zinc-400" />
                <span>View & Download Resume</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-sm"
              >
                <span>Let&apos;s Build Something</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-center gap-5 pt-2">
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-200 transition"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-200 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </>
  );
}
