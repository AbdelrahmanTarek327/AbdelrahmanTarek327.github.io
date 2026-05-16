"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink, Layers, Star, ArrowUpRight,
  ArrowRight, ChevronRight, Cpu, Database, MessageSquare,
} from "lucide-react";
import { GithubIcon } from "@/components/common/BrandIcons";
import { projects } from "@/lib/data";

const categories = ["All", "AI / Healthcare", "ML / Sports Analytics", "ML / Healthcare", "Data Analytics / BI"];

/* ── Architecture node styles ─── */
const archColors: Record<string, string> = {
  "NFC Reader": "text-cyan-300 bg-cyan-500/10 border-cyan-500/25",
  "FastAPI": "text-violet-300 bg-violet-500/10 border-violet-500/25",
  "MongoDB": "text-emerald-300 bg-emerald-500/10 border-emerald-500/25",
  "NLP Engine": "text-amber-300 bg-amber-500/10 border-amber-500/25",
  "LLM Chatbot": "text-pink-300 bg-pink-500/10 border-pink-500/25",
};

function FeaturedProject() {
  const project = projects.find((p) => p.featured && p.id === 1)!;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="mb-16"
    >
      {/* Label */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/30 text-xs font-bold text-violet-300">
          <Star className="w-3 h-3 fill-violet-400" />
          Featured Project
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent" />
      </div>

      {/* Showcase card */}
      <div className="relative rounded-3xl border border-violet-500/25 overflow-hidden group hover:border-violet-500/45 transition-all duration-500 hover:shadow-[0_0_60px_rgba(139,92,246,0.12)]">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-[#050814] to-cyan-600/8" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        {/* Glow blob */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* ── Left: Case study info ── */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xs text-slate-500 font-medium">{project.subtitle}</span>
              <span className="text-slate-700">·</span>
              <span className="text-xs text-violet-400 font-semibold">{project.category}</span>
            </div>

            <h3 className="text-white font-black text-2xl sm:text-3xl leading-tight mb-6 tracking-tight">
              {project.title}
            </h3>

            {/* Problem */}
            <div className="rounded-xl border border-red-500/15 bg-red-500/5 p-4 mb-3">
              <p className="text-[10px] text-red-400/90 font-bold uppercase tracking-widest mb-1.5">
                Problem
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
            </div>

            {/* Solution */}
            <div className="rounded-xl border border-emerald-500/15 bg-emerald-500/5 p-4 mb-6">
              <p className="text-[10px] text-emerald-400/90 font-bold uppercase tracking-widest mb-1.5">
                Solution
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-7">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg text-violet-300 bg-violet-500/10 border border-violet-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-violet-700 text-white text-sm font-bold hover:from-violet-500 hover:to-cyan-600 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_35px_rgba(139,92,246,0.5)]"
              >
                <GithubIcon className="w-4 h-4" />
                View on GitHub
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ── Right: Architecture + Impact ── */}
          <div className="flex flex-col gap-5">
            {/* Architecture diagram */}
            <div className="glass rounded-2xl border border-white/8 p-5">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Cpu className="w-3 h-3" />
                System Architecture
              </p>
              <div className="flex flex-wrap items-center gap-2 justify-center">
                {project.architecture?.map((node, i, arr) => (
                  <div key={node} className="flex items-center gap-2">
                    <div className={`px-3 py-1.5 rounded-lg border text-xs font-semibold whitespace-nowrap ${archColors[node] || "text-slate-300 bg-white/5 border-white/10"}`}>
                      {node}
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowRight className="w-3 h-3 text-slate-700 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Impact metrics */}
            <div className="glass rounded-2xl border border-white/8 p-5">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Database className="w-3 h-3" />
                Key Deliverables
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.impact.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-[6px] flex-shrink-0 shadow-[0_0_6px_rgba(139,92,246,0.6)]" />
                    <p className="text-slate-300 text-xs leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bilingual highlight */}
            <div className="glass rounded-xl border border-cyan-500/20 p-4 flex items-start gap-3">
              <MessageSquare className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-cyan-300 text-xs font-bold mb-1">Bilingual AI Chatbot</p>
                <p className="text-slate-500 text-xs">Arabic + English multilingual medical assistant with real-time patient support capabilities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const nonFeatured = projects.filter((p) => p.id !== 1);
  const filtered =
    activeCategory === "All"
      ? nonFeatured
      : nonFeatured.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/6 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 text-xs font-medium mb-4">
            <Layers className="w-3 h-3" />
            Projects
          </div>
          <h2 className="section-title text-white mb-4">
            Engineering <span className="gradient-text-primary">Impact</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            From NLP-powered healthcare systems to predictive ML pipelines — built for real-world problems.
          </p>
        </motion.div>

        {/* Featured showcase */}
        <FeaturedProject />

        {/* Section divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-white/5" />
          <p className="text-slate-600 text-xs font-semibold uppercase tracking-wider">More Projects</p>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                  : "glass border border-white/8 text-slate-400 hover:text-white hover:border-violet-500/30 hover:bg-violet-500/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`group relative rounded-2xl border ${project.borderColor} overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]`}
                style={{ background: "rgba(8, 12, 30, 0.75)", backdropFilter: "blur(16px)" }}
              >
                {/* Gradient header banner */}
                <div className={`relative h-16 bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}>
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                  <div className="absolute bottom-3 left-5 z-10">
                    <span className={`text-[11px] font-bold ${project.accentColor} bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border ${project.borderColor}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  {project.subtitle && (
                    <p className="text-slate-600 text-[10px] font-semibold uppercase tracking-wider mb-2">{project.subtitle}</p>
                  )}

                  <h3 className="text-white font-bold text-base leading-tight mb-4">{project.title}</h3>

                  {/* Problem / Solution */}
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-[9px] text-red-400/70 font-bold uppercase tracking-widest mb-1">Problem</p>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-emerald-400/70 font-bold uppercase tracking-widest mb-1">Solution</p>
                      <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{project.solution}</p>
                    </div>
                  </div>

                  {/* Impact bullets */}
                  <div className="space-y-1.5 mb-4">
                    {project.impact.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-slate-400">
                        <div className={`w-1 h-1 rounded-full ${project.accentColor.replace("text-", "bg-")} mt-[5px] flex-shrink-0`} />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] rounded-md font-semibold text-slate-400 bg-white/4 border border-white/8">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 text-[10px] rounded-md font-semibold text-slate-600 bg-white/2 border border-white/5">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors group/link"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      Code
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                    <div className="h-3 w-px bg-white/10" />
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors group/link"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Demo
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/AbdelrahmanTarek327"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-all border border-white/8 hover:border-violet-500/35 px-6 py-3 rounded-xl hover:bg-violet-500/5 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]"
          >
            <GithubIcon className="w-4 h-4" />
            View all projects on GitHub
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
