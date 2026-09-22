"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/BrandIcons";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0e0e10]">
      <div className="main-container py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Name */}
          <p className="text-sm text-slate-500">
            <span className="text-slate-400 font-medium">{personalInfo.name}</span>
            {" "}· AI & Machine Learning Engineer
          </p>

          {/* Social + back to top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              <GithubIcon style={{ width: 16, height: 16 }} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              <LinkedinIcon style={{ width: 16, height: 16 }} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <div className="w-px h-4 bg-white/8" />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-slate-500 hover:text-slate-300 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-5 pt-5 border-t border-white/5 text-center">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
