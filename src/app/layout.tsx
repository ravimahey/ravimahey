import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ravi Kumar — Full-Stack, AI & Cloud Systems Engineer",
  description:
    "I don't just build applications. I architect, develop, deploy, and manage complete production-ready products. Full-Stack, AI, Platform & DevOps Engineer.",
  keywords: [
    "Ravi Kumar",
    "Full-Stack Engineer",
    "AI Engineer",
    "DevOps Engineer",
    "Platform Engineer",
    "Cloud Architect",
    "Next.js",
    "Kubernetes",
    "FastAPI",
    "LangChain",
    "GCP",
    "ArgoCD",
    "Microservices",
  ],
  authors: [{ name: "Ravi Kumar" }],
  creator: "Ravi Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ravikumar.dev",
    title: "Ravi Kumar — From Idea to Production. I Build the Entire Product.",
    description:
      "Full-Stack & AI Engineer specializing in building scalable digital products, intelligent AI applications, and production-ready cloud infrastructure.",
    siteName: "Ravi Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Kumar — Full-Stack, AI & Cloud Engineer",
    description:
      "From architecture and development to AI integration, cloud infrastructure, deployment, and ongoing optimization.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050508",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Inter:ital,wght@0,300..800;1,300..800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col selection:bg-blue-500/25 selection:text-blue-300">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
