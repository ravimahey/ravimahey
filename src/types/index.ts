export interface ProjectArchitectureNode {
  id: string;
  label: string;
  role: string;
  type: "client" | "gateway" | "service" | "worker" | "database" | "ai" | "infra" | "observability";
}

export interface ProjectArchitecture {
  summary: string;
  diagramType: "bi-saas" | "gitops-k8s" | "swarm-cicd" | "ai-rag";
  nodes: ProjectArchitectureNode[];
  flowSteps: string[];
  keyHighlights: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  featured: boolean;
  overview: string;
  problem: string;
  solution: string;
  contribution: string[];
  features: string[];
  technologies: string[];
  architecture: ProjectArchitecture;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyAvailable: boolean;
  statusBadge: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  bulletPoints: string[];
  technicalPillars: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  items: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  keyActions: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  timeline: string;
  message: string;
}
