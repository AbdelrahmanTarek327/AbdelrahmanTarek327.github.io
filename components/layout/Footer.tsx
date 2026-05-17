"use client";

import { Mail, ArrowUp, Zap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/BrandIcons";
import { personalInfo } from "@/lib/data";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#030810]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-black text-white text-lg tracking-tight">
                AT<span className="gradient-text-primary">.</span>
              </span>
            </div>
            <p className="text-slate-500 text-xs text-center max-w-xs">
              AI & Data Science Engineer building intelligent systems at the intersection of ML and Generative AI.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-slate-500 hover:text-white text-xs font-medium transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social + back to top */}
          <div className="flex items-center gap-3">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-lg transition-all">
              <GithubIcon className="w-4 h-4" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-violet-400 hover:bg-white/5 rounded-lg transition-all">
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a href={`mailto:${personalInfo.email}`}
              className="p-2 text-slate-500 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all">
              <Mail className="w-4 h-4" />
            </a>
            <div className="w-px h-4 bg-white/10 mx-1" />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/5 w-full pt-6 text-center">
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} <span className="text-slate-500 font-medium">{personalInfo.name}</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
