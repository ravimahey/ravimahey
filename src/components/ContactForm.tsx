"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { ContactFormData } from "@/types";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    projectType: "Full-Stack MVP",
    timeline: "Within 1 Month",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const projectTypes = [
    "Full-Stack MVP",
    "AI & RAG Pipeline",
    "Cloud & DevOps Migration",
    "Kubernetes & GitOps",
    "End-to-End Product Architecture",
  ];

  const timelines = [
    "Immediate (1-2 Weeks)",
    "Within 1 Month",
    "Next Quarter",
    "Exploratory / Advisory",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        // Fallback for static hosting (GitHub Pages)
        const mailtoUrl = `mailto:ravikumar.ops18@gmail.com?subject=${encodeURIComponent(
          `Project Inquiry: ${formData.projectType} (${formData.name})`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nScope: ${formData.projectType}\nTimeline: ${formData.timeline}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        setStatus("success");
      }
      setFormData({
        name: "",
        email: "",
        projectType: "Full-Stack MVP",
        timeline: "Within 1 Month",
        message: "",
      });
    } catch {
      // Fallback for static hosting (GitHub Pages)
      const mailtoUrl = `mailto:ravikumar.ops18@gmail.com?subject=${encodeURIComponent(
        `Project Inquiry: ${formData.projectType} (${formData.name})`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nScope: ${formData.projectType}\nTimeline: ${formData.timeline}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus("success");
    }
  };

  return (
    <div className="relative rounded-3xl glass-card p-7 sm:p-9 border-white/[0.08] backdrop-blur-2xl light:bg-white light:border-zinc-200 shadow-2xl overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent">
      <div className="mb-7">
        <h3 className="text-xl font-bold text-white light:text-zinc-900 tracking-tight">
          Project Inquiry Form
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 light:text-zinc-600 mt-1.5 font-normal">
          Tell me about your product requirements, infrastructure goals, or timeline.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-8 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20 shadow-inner">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-white light:text-zinc-900 text-base">
            Inquiry Dispatched Successfully
          </h4>
          <p className="text-xs sm:text-sm text-zinc-300 light:text-zinc-600 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out. I review every technical brief personally and will respond within 24 hours.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/[0.08] text-xs font-mono text-zinc-300 transition light:bg-zinc-100 light:border-zinc-300 light:text-zinc-800"
          >
            Send Another Note
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4.5 text-xs sm:text-sm">
          {status === "error" && (
            <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/30 text-red-400 flex items-center gap-2.5 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 light:text-zinc-600 mb-1.5 font-semibold">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Vance"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-zinc-900/60 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors light:bg-zinc-50 light:border-zinc-300 light:text-zinc-900 light:placeholder-zinc-400 font-sans"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 light:text-zinc-600 mb-1.5 font-semibold">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="alex@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-zinc-900/60 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors light:bg-zinc-50 light:border-zinc-300 light:text-zinc-900 light:placeholder-zinc-400 font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 light:text-zinc-600 mb-1.5 font-semibold">
                Project Scope
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-zinc-900/60 text-zinc-100 focus:outline-none focus:border-blue-500 transition-colors light:bg-zinc-50 light:border-zinc-300 light:text-zinc-900 font-sans"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type} className="bg-zinc-900 text-zinc-200 light:bg-white light:text-zinc-800">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 light:text-zinc-600 mb-1.5 font-semibold">
                Desired Timeline
              </label>
              <select
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-zinc-900/60 text-zinc-100 focus:outline-none focus:border-blue-500 transition-colors light:bg-zinc-50 light:border-zinc-300 light:text-zinc-900 font-sans"
              >
                {timelines.map((time) => (
                  <option key={time} value={time} className="bg-zinc-900 text-zinc-200 light:bg-white light:text-zinc-800">
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block font-mono text-[11px] uppercase tracking-wider text-zinc-400 light:text-zinc-600 mb-1.5 font-semibold">
              Project Details & Technical Goals *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Provide a brief summary of what you are looking to architect or build..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-zinc-900/60 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors light:bg-zinc-50 light:border-zinc-300 light:text-zinc-900 light:placeholder-zinc-400 font-sans"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3.5 rounded-xl bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 disabled:opacity-50 text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_24px_rgba(59,130,246,0.35)] active:scale-[0.99]"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Transmitting Project Brief...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Project Inquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
