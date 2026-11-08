"use client";

import { useState } from "react";
import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { Layers } from "lucide-react";

export default function FeaturedProjects() {
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    { label: "All Projects", value: "All" },
    { label: "Full-Stack SaaS", value: "SaaS" },
    { label: "AI Engineering", value: "AI" },
    { label: "DevOps & Platform", value: "DevOps" },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All") return true;
    if (filter === "SaaS") return project.category.toLowerCase().includes("saas");
    if (filter === "AI") return project.category.toLowerCase().includes("ai");
    if (filter === "DevOps")
      return (
        project.category.toLowerCase().includes("devops") ||
        project.category.toLowerCase().includes("platform")
      );
    return true;
  });

  return (
    <section id="projects" className="py-28 relative border-t border-white/[0.06] light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
              <Layers className="w-3.5 h-3.5" />
              <span>Production Systems</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.035em] text-white light:text-zinc-900">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 light:text-zinc-600 leading-relaxed font-normal">
              Real-world systems engineered from initial design and API architecture to AI pipelines, continuous deployment, and scalable production operations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-zinc-900/60 border border-white/[0.08] backdrop-blur-md light:bg-zinc-100 light:border-zinc-200 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  filter === cat.value
                    ? "bg-blue-600 text-white font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04] light:text-zinc-600 light:hover:text-zinc-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featuredIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
