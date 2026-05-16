"use client";

import { Mail, ArrowUp, Zap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/BrandIcons";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#030810]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-slate-400 text-sm">
              © {new Date().getFullYear()}{" "}
              <span className="text-white font-medium">{personalInfo.name}</span>
            </span>
          </div>

          <p className="text-slate-500 text-xs text-center">
            Built with Next.js · TypeScript · Tailwind · Framer Motion
          </p>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-violet-400 hover:bg-white/5 rounded-lg transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 text-slate-500 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-lg transition-all ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
