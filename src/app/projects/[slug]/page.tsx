import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { projectsData } from "@/data/projects";
import ProjectArchitectureDiagram from "@/components/ProjectArchitectureDiagram";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Server,
  Layers,
  ShieldCheck,
  Cpu,
  Workflow,
  Sparkles,
} from "lucide-react";
import { Github } from "@/components/icons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Technical Case Study | Ravi Kumar`,
    description: project.overview,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projectsData.length - 1
      ? projectsData[projectIndex + 1]
      : null;

  return (
    <div className="pt-28 pb-24 tech-grid min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition light:text-zinc-600 light:hover:text-zinc-900"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Projects Showcase</span>
          </Link>

          <span className="text-xs font-mono text-zinc-500">
            Case Study {projectIndex + 1} of {projectsData.length}
          </span>
        </div>

        {/* Case Study Header Card */}
        <div className="p-8 sm:p-10 rounded-3xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl light:bg-white light:border-zinc-200 shadow-2xl space-y-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {project.category}
            </span>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              {project.statusBadge}
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white light:text-zinc-900">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-zinc-300 light:text-zinc-700 leading-relaxed font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Quick links & actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-zinc-800/80 light:border-zinc-200">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition"
              >
                <span>Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 transition text-xs sm:text-sm light:bg-zinc-100 light:border-zinc-300 light:text-zinc-800"
              >
                <Github className="w-4 h-4" />
                <span>Repository</span>
              </a>
            )}
            <a
              href="#contact-cta"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 transition text-xs sm:text-sm light:bg-zinc-50 light:border-zinc-200 light:text-zinc-600"
            >
              <span>Discuss Similar Architecture</span>
            </a>
          </div>
        </div>

        {/* Problem Solved & Architectural Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-2xl border border-zinc-800 bg-zinc-950/60 light:bg-white light:border-zinc-200 space-y-3">
            <span className="text-xs uppercase tracking-wider font-mono text-amber-400 font-semibold block">
              The Engineering Challenge
            </span>
            <h3 className="text-lg font-bold text-white light:text-zinc-900">
              Problem Context
            </h3>
            <p className="text-sm text-zinc-300 light:text-zinc-700 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-7 rounded-2xl border border-zinc-800 bg-zinc-950/60 light:bg-white light:border-zinc-200 space-y-3">
            <span className="text-xs uppercase tracking-wider font-mono text-emerald-400 font-semibold block">
              The Architectural Blueprint
            </span>
            <h3 className="text-lg font-bold text-white light:text-zinc-900">
              Solution Delivered
            </h3>
            <p className="text-sm text-zinc-300 light:text-zinc-700 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
            <Workflow className="w-4 h-4" />
            <span>Interactive Architecture & Topology</span>
          </div>
          <ProjectArchitectureDiagram
            architecture={project.architecture}
            projectTitle={project.title}
          />
        </div>

        {/* My Engineering Contribution */}
        <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-950/60 light:bg-white light:border-zinc-200 space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold block mb-1">
              Leadership & Hands-on Scope
            </span>
            <h3 className="text-2xl font-bold text-white light:text-zinc-900">
              My Engineering Contributions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.contribution.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 text-xs sm:text-sm text-zinc-300 light:bg-zinc-50 light:border-zinc-200 light:text-zinc-700"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features & Technologies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Key Product Features (7 cols) */}
          <div className="lg:col-span-7 p-7 rounded-2xl border border-zinc-800 bg-zinc-950/60 light:bg-white light:border-zinc-200 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 light:text-zinc-500 font-semibold block">
              Platform Features
            </span>
            <div className="space-y-2.5">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300 light:text-zinc-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used (5 cols) */}
          <div className="lg:col-span-5 p-7 rounded-2xl border border-zinc-800 bg-zinc-950/60 light:bg-white light:border-zinc-200 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 light:text-zinc-500 font-semibold block">
              Complete Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-900 text-zinc-200 border border-zinc-800 light:bg-zinc-100 light:border-zinc-200 light:text-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Case Study Contact Banner */}
        <div
          id="contact-cta"
          className="p-8 sm:p-10 rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-950/30 via-zinc-950 to-indigo-950/30 text-center space-y-4 light:from-blue-50 light:via-white light:to-indigo-50 light:border-blue-200"
        >
          <Sparkles className="w-7 h-7 text-blue-400 mx-auto" />
          <h3 className="text-2xl font-bold text-white light:text-zinc-900">
            Need a similar production-ready system?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 light:text-zinc-600 max-w-lg mx-auto leading-relaxed">
            I can help architect, build, and deploy your entire application stack — with high availability, modern security, and automated cloud infrastructure.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition shadow-lg shadow-blue-600/20"
            >
              <span>Get in Touch with Ravi</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Next / Previous Project Pagination */}
        <div className="flex items-center justify-between pt-6 border-t border-zinc-800/80 light:border-zinc-200">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition light:text-zinc-600 light:hover:text-zinc-900"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Prev: {prevProject.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition light:text-zinc-600 light:hover:text-zinc-900"
            >
              <span>Next: {nextProject.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
