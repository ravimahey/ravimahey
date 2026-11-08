import { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    description: "Building responsive, modern, type-safe user interfaces with clean architecture.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    description: "Scalable server architectures, high-performance APIs, and data modeling.",
    items: [
      "Node.js",
      "NestJS",
      "Python",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    category: "AI Engineering",
    description: "Intelligent systems, vector retrieval, multi-agent frameworks, and LLM applications.",
    items: [
      "LLMs",
      "RAG",
      "LangChain",
      "LangGraph",
      "AI Agents",
      "Qdrant",
      "Vector Search",
    ],
  },
  {
    category: "Cloud",
    description: "Multi-cloud architecture, managed platforms, networking, and cloud security.",
    items: [
      "AWS",
      "Google Cloud Platform",
      "Oracle Cloud Infrastructure",
    ],
  },
  {
    category: "DevOps",
    description: "Infrastructure as Code, container orchestration, GitOps, and automated deployment pipelines.",
    items: [
      "Docker",
      "Kubernetes",
      "Docker Swarm",
      "Terraform",
      "Jenkins",
      "GitHub Actions",
      "ArgoCD",
    ],
  },
  {
    category: "Observability",
    description: "Full-stack telemetry, distributed tracing, metrics collection, and proactive alert management.",
    items: [
      "Prometheus",
      "Grafana",
      "Loki",
      "Tempo",
      "OpenTelemetry",
    ],
  },
];
