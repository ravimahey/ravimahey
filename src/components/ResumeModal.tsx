"use client";

import { Download, X, FileText, Printer } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0d12] border border-white/[0.1] rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden light:bg-white light:border-zinc-200">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-white/[0.08] bg-zinc-900/60 light:bg-zinc-50 light:border-zinc-200">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base tracking-tight light:text-zinc-900">
                Ravi Kumar — Engineering Resume
              </h3>
              <p className="text-xs text-zinc-400 light:text-zinc-500 font-mono">
                Full-Stack, AI & Cloud Systems Engineer
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-xl bg-zinc-800/80 text-zinc-300 hover:text-white hover:bg-zinc-700 transition border border-white/[0.06] light:bg-zinc-200 light:text-zinc-800"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <a
              href="/resume.txt"
              download="Ravi_Kumar_Resume.txt"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition ml-2 light:hover:bg-zinc-100 light:text-zinc-600"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-zinc-300 light:text-zinc-700 font-sans">
          {/* Header section */}
          <div className="border-b border-white/[0.08] pb-6 light:border-zinc-200">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white light:text-zinc-900">
                Ravi Kumar
              </h1>
              <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Open for Freelance & Senior Engineering Roles
              </span>
            </div>
            <p className="text-base text-blue-400 mt-1 light:text-blue-600 font-medium">
              Full-Stack, AI & Cloud Infrastructure Engineer
            </p>
            <p className="text-xs text-zinc-400 mt-1 font-mono">
              Location: India | Email: ravikumar.ops18@gmail.com | GitHub: github.com/ravimahey | LinkedIn: linkedin.com/in/ravimahey | Website: ravimahey.github.io
            </p>
            <p className="mt-3 text-xs sm:text-sm text-zinc-300 light:text-zinc-600 italic bg-zinc-900/50 p-3.5 rounded-xl border border-white/[0.06] light:bg-zinc-100 light:border-zinc-200">
              &quot;I don&apos;t just build applications. I architect, develop, deploy, and manage complete production-ready products.&quot;
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-blue-400 font-semibold mb-3">
              Core Capabilities & Technical Stack
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-white/[0.06] light:bg-zinc-50 light:border-zinc-200">
                <span className="font-semibold text-zinc-100 light:text-zinc-800 block mb-1">
                  Full-Stack & Backend Architecture:
                </span>
                Next.js, React, TypeScript, Node.js, NestJS, Python, FastAPI, PostgreSQL, Redis, REST APIs, Multi-tenant SaaS.
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-white/[0.06] light:bg-zinc-50 light:border-zinc-200">
                <span className="font-semibold text-zinc-100 light:text-zinc-800 block mb-1">
                  AI Engineering & Vector Search:
                </span>
                LLM Application Development, Retrieval-Augmented Generation (RAG), LangChain, LangGraph, Qdrant, Autonomous AI Agents.
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-white/[0.06] light:bg-zinc-50 light:border-zinc-200">
                <span className="font-semibold text-zinc-100 light:text-zinc-800 block mb-1">
                  Cloud, DevOps & GitOps:
                </span>
                Google Cloud Platform (GCP), AWS, Oracle Cloud (OCI), Docker, Kubernetes (GKE), Docker Swarm, Terraform (IaC), ArgoCD, Jenkins, GitHub Actions.
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-white/[0.06] light:bg-zinc-50 light:border-zinc-200">
                <span className="font-semibold text-zinc-100 light:text-zinc-800 block mb-1">
                  Observability & Reliability:
                </span>
                Prometheus, Grafana, Loki, Tempo, OpenTelemetry, Nginx, Health Check Alerting, Zero-Downtime Rollouts.
              </div>
            </div>
          </div>

          {/* Featured Production Products & Architectures */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-blue-400 font-semibold mb-3">
              Production Engineering & Project Experience
            </h4>
            <div className="space-y-4">
              {/* Project 1 */}
              <div className="border-l-2 border-blue-500/50 pl-4 py-0.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h5 className="font-bold text-white light:text-zinc-900 text-sm">
                    Ordara — AI-Powered Business Intelligence SaaS
                  </h5>
                  <span className="text-xs font-mono text-zinc-400">Next.js | NestJS | FastAPI | GCP</span>
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Multi-tenant business intelligence SaaS platform for restaurants, cafes, and retail operators.
                </p>
                <ul className="mt-2 space-y-1 text-xs text-zinc-300 light:text-zinc-600 list-disc list-inside">
                  <li>Designed end-to-end multi-tenant architecture with tenant-isolated database schemas in PostgreSQL.</li>
                  <li>Engineered bi-directional accounting synchronization pipelines with QuickBooks Online and Xero.</li>
                  <li>Built Python/FastAPI microservice executing AI-driven business insights and automated trend summaries.</li>
                  <li>Automated GCP cloud deployment with Docker containers and Terraform Infrastructure as Code.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="border-l-2 border-emerald-500/50 pl-4 py-0.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h5 className="font-bold text-white light:text-zinc-900 text-sm">
                    CogniScale — AI Application Platform
                  </h5>
                  <span className="text-xs font-mono text-zinc-400">GCP | GKE | ArgoCD | Qdrant | Prometheus</span>
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Cloud-native microservices infrastructure supporting AI inference services and background workers.
                </p>
                <ul className="mt-2 space-y-1 text-xs text-zinc-300 light:text-zinc-600 list-disc list-inside">
                  <li>Architected Google Kubernetes Engine (GKE) cluster with automated GitOps continuous deployment using ArgoCD.</li>
                  <li>Constructed automated GitHub Actions CI/CD pipelines producing security-hardened container artifacts.</li>
                  <li>Implemented autoscaling Celery worker pools backed by Redis for asynchronous AI workload processing.</li>
                  <li>Integrated Qdrant vector database and provisioned Prometheus & Grafana cluster-wide monitoring.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="border-l-2 border-purple-500/50 pl-4 py-0.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h5 className="font-bold text-white light:text-zinc-900 text-sm">
                    StrataOps — Microservices Infrastructure
                  </h5>
                  <span className="text-xs font-mono text-zinc-400">Docker Swarm | Jenkins | GitHub Actions | Nginx</span>
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Automated microservices application environment with zero-downtime rolling deployment workflows.
                </p>
                <ul className="mt-2 space-y-1 text-xs text-zinc-300 light:text-zinc-600 list-disc list-inside">
                  <li>Deployed multi-node Docker Swarm infrastructure with Nginx reverse proxy service routing and SSL.</li>
                  <li>Built automated CI/CD pipelines spanning Jenkins and GitHub Actions pushing to GCP Artifact Registry.</li>
                  <li>Standardized reproducible QA staging environments matching production network topologies.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div className="border-l-2 border-cyan-500/50 pl-4 py-0.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h5 className="font-bold text-white light:text-zinc-900 text-sm">
                    AI Document Processing Platform
                  </h5>
                  <span className="text-xs font-mono text-zinc-400">Python | FastAPI | Qdrant | LangChain | Next.js</span>
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Enterprise document intelligence application streamlining unstructured document parsing and citation RAG.
                </p>
                <ul className="mt-2 space-y-1 text-xs text-zinc-300 light:text-zinc-600 list-disc list-inside">
                  <li>Engineered semantic chunking, vector indexing, and citation-grounded RAG workflows.</li>
                  <li>Developed interactive Next.js document workbench with verified source citation highlighting.</li>
                  <li>Engineered high-throughput FastAPI REST API layer with Dockerized microservices.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Engineering Process */}
          <div className="border-t border-white/[0.08] pt-5 light:border-zinc-200">
            <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-blue-400 font-semibold mb-2">
              End-to-End Engineering Methodology
            </h4>
            <p className="text-xs text-zinc-400 font-mono">
              01 Discover ➔ 02 Architect ➔ 03 Design & Develop ➔ 04 Automate (CI/CD & IaC) ➔ 05 Deploy (Cloud/K8s) ➔ 06 Monitor & Optimize (Telemetry & SLIs)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
