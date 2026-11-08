import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-36 pb-20 flex flex-col items-center justify-center text-center px-4 tech-grid">
      <div className="glass-card p-10 rounded-3xl max-w-md w-full border-white/[0.08] space-y-5">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400 font-semibold block">
          404 — Not Found
        </span>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          System Node Missing
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
          The requested engineering resource or page route could not be resolved in the cluster.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
