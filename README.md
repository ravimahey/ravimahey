# Ravi Kumar — Personal Engineering Portfolio

A premium, modern, responsive personal engineering portfolio website showcasing **Ravi Kumar** as a **Full-Stack Engineer, AI Engineer, Cloud & DevOps Engineer, and End-to-End Product Developer**.

> **"I don't just build applications. I architect, develop, deploy, and manage complete production-ready products."**

---

## 🚀 Key Features

1. **Dark-First Modern Engineering Aesthetic**
   - Deep charcoal background (`#09090b`), subtle ambient lighting, micro-interactions, and linear gradients inspired by Linear, Vercel, Stripe, and Raycast.
   - Built-in Dark & Light mode toggle with persistent local storage.
   - Canvas-driven technical background with interactive particle nodes and architecture lines.

2. **Hero Section**
   - Headline: *"From Idea to Production. I Build the Entire Product."*
   - Live availability badge (`Open for Freelance & Senior Engineering Roles`).
   - Location indicator: `India · Global Remote`.
   - Interactive terminal widget showcasing Architecture, GitOps & K8s deployment state, and AI Vector search flows.
   - Primary & Secondary CTAs with resume modal integration.

3. **What I Do (6 Core Service Cards)**
   - Full-Stack Development
   - AI Engineering & Automation
   - Cloud & DevOps Engineering
   - Platform Engineering
   - Product Development & Management
   - Deployment & Production Management

4. **Featured Projects & Case Studies**
   - **Ordara**: AI-Powered Business Intelligence SaaS (Next.js, NestJS, FastAPI, Python, PostgreSQL, Docker, GCP, Terraform).
   - **CogniScale**: AI-Powered Application Platform (GCP, GKE, Docker, Kubernetes, ArgoCD, GitHub Actions, Terraform, Prometheus, Grafana, Redis, Qdrant).
   - **StrataOps**: Microservices Infrastructure (Docker Swarm, Jenkins, GitHub Actions, GCP, Artifact Registry, Nginx).
   - **AI Document Processing Platform**: Enterprise RAG & Semantic Chunking Engine (Python, FastAPI, LLMs, Vector Databases, React/Next.js, Docker).
   - Deep-dive case study routes at `/projects/[slug]` with interactive step-by-step system architecture diagrams, problem context, and engineering contributions.

5. **Engineering Capabilities / Tech Stack**
   - Categorized into Frontend, Backend, AI Engineering, Cloud, DevOps, and Observability.
   - Interactive domain filters and verification chips without arbitrary progress bars.

6. **Engineering Process (01 ➔ 06)**
   - 01 Discover ➔ 02 Architect ➔ 03 Design & Develop ➔ 04 Automate ➔ 05 Deploy ➔ 06 Monitor & Optimize.

7. **About Me & Principles**
   - Background narrative and core values (Holistic Ownership, Production-Grade Engineering, Pragmatic AI, Observability-Driven Reliability).
   - Target partner alignment (Startups, Founders, International Clients).

8. **Contact & Inquiries**
   - Working contact form with validation, project type selector, timeline options, and simulated `/api/contact` handler.
   - Direct contact links for Email, LinkedIn, and GitHub.

9. **Resume Experience**
   - Interactive `ResumeModal` with one-click print-to-PDF.
   - Dedicated `/resume` page.
   - Direct download link to `/resume.txt`.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Motion / Framer Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Icons
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## 📁 Project Structure

```
portfolio-ravi/
├── public/
│   ├── favicon.ico
│   └── resume.txt                   # Downloadable plain text resume
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/route.ts     # Contact form API endpoint
│   │   ├── projects/
│   │   │   ├── page.tsx             # Complete projects showcase
│   │   │   └── [slug]/page.tsx      # Dynamic SSG project case study pages
│   │   ├── resume/
│   │   │   └── page.tsx             # Dedicated printable resume page
│   │   ├── globals.css              # Dark/light theme styles & grid patterns
│   │   ├── layout.tsx               # Root layout & OpenGraph metadata
│   │   └── page.tsx                 # Single-page portfolio root
│   ├── components/
│   │   ├── About.tsx                # About section & principles
│   │   ├── Contact.tsx              # Contact section & direct links
│   │   ├── ContactForm.tsx          # Validated inquiry form
│   │   ├── FeaturedProjects.tsx     # Filterable project showcase
│   │   ├── Footer.tsx               # Site footer & copyright
│   │   ├── Hero.tsx                 # Hero section & terminal widget
│   │   ├── HeroBackground.tsx       # Animated canvas nodes & grid
│   │   ├── Navbar.tsx               # Sticky blurred navigation header
│   │   ├── Process.tsx              # 6-step engineering methodology
│   │   ├── ProjectArchitectureDiagram.tsx # Interactive system diagram
│   │   ├── ProjectCard.tsx          # Project card with expandable flow
│   │   ├── ResumeModal.tsx          # Full resume modal & print action
│   │   ├── TechStack.tsx            # Categorized tech matrix & filters
│   │   ├── ThemeToggle.tsx          # Dark/Light mode switch
│   │   ├── WhatIDo.tsx              # 6 core service cards
│   │   └── icons.tsx                # Custom GitHub & LinkedIn SVG icons
│   ├── data/
│   │   ├── profile.ts               # Centralized profile & bio data
│   │   ├── projects.ts              # Centralized case study details
│   │   ├── services.ts              # 6 core service definitions
│   │   ├── skills.ts                # Categorized skill taxonomy
│   │   └── process.ts               # 6-step lifecycle phases
│   └── types/
│       └── index.ts                 # TypeScript interfaces
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## ⚡ Getting Started

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Run Development Server
```bash
pnpm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Production Build
```bash
pnpm run build
pnpm run start
```
