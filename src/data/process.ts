import { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business requirements, goals, users and challenges.",
    keyActions: [
      "Deconstruct product goals & target user personas",
      "Identify technical constraints & compliance boundaries",
      "Evaluate data schemas, API dependencies & performance expectations",
    ],
  },
  {
    number: "02",
    title: "Architect",
    description: "Design application architecture, infrastructure, technology choices and development strategy.",
    keyActions: [
      "Select optimal tech stack (Next.js, Python/FastAPI, Node, K8s)",
      "Model relational & vector data stores with tenancy isolation",
      "Formulate cloud topology, security perimeters & network topology",
    ],
  },
  {
    number: "03",
    title: "Design & Develop",
    description: "Build frontend, backend, APIs, integrations and AI capabilities.",
    keyActions: [
      "Implement responsive frontend with clean UI systems",
      "Develop secure, modular backend APIs and background workers",
      "Integrate LLMs, vector search, RAG pipelines & business integrations",
    ],
  },
  {
    number: "04",
    title: "Automate",
    description: "Implement CI/CD pipelines, infrastructure as code and deployment automation.",
    keyActions: [
      "Write reproducible Terraform IaC configurations",
      "Build automated GitHub Actions / Jenkins test & containerization pipelines",
      "Set up GitOps pipelines via ArgoCD for continuous delivery",
    ],
  },
  {
    number: "05",
    title: "Deploy",
    description: "Launch applications into production using scalable cloud infrastructure.",
    keyActions: [
      "Provision secure cloud environments (GCP, AWS, OCI)",
      "Deploy containerized workloads to GKE or Docker Swarm",
      "Configure SSL certificates, reverse proxies, and zero-downtime rollouts",
    ],
  },
  {
    number: "06",
    title: "Monitor & Optimize",
    description: "Monitor performance, improve reliability, troubleshoot issues and continuously optimize.",
    keyActions: [
      "Configure Prometheus, Grafana, Loki & OpenTelemetry telemetry",
      "Establish proactive alert thresholds for latency and failure rates",
      "Optimize query performance, worker concurrency & infrastructure spend",
    ],
  },
];
