import { Metadata } from "next";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { ArrowLeft, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects & Architecture Case Studies — Ravi Kumar",
  description:
    "Explore real-world production systems engineered by Ravi Kumar, spanning Full-Stack SaaS, AI/LLM pipelines, and Cloud/DevOps infrastructure.",
};

export default function ProjectsIndexPage() {
  return (
    <div className="pt-28 pb-20 tech-grid min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition light:text-zinc-600 light:hover:text-zinc-900"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Layers className="w-3.5 h-3.5" />
            <span>Complete Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white light:text-zinc-900">
            Production Projects & Case Studies
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 light:text-zinc-600 leading-relaxed">
            Detailed case studies of systems I have architected, developed, and maintained in production. Every project reflects authentic engineering decisions and battle-tested infrastructure.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} featuredIndex={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
