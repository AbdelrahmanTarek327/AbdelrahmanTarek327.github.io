"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/common/BrandIcons";
import { projects } from "@/lib/data";

const categories = ["All", "AI / Healthcare", "ML / Sports Analytics", "ML / Healthcare", "Data Analytics / BI"];

function FeaturedProject() {
  const project = projects.find((p) => p.featured && p.id === 1)!;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      {/* Featured label */}
      <div className="flex items-center gap-3 mb-5">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Featured Project
        </p>
        <div className="flex-1 h-px bg-white/5" />
      </div>

      {/* Card */}
      <div className="card card-hover rounded-xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

        {/* Left: Info */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-slate-500">{project.subtitle}</span>
            <span className="text-slate-700">·</span>
            <span className="text-xs font-medium" style={{ color: "var(--accent)" }}>
              {project.category}
            </span>
          </div>

          <h3 className="text-white font-bold text-xl sm:text-2xl leading-snug mb-3 tracking-tight">
            {project.title}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          <div className="mt-auto">
            <a
              id="featured-project-github"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              <GithubIcon style={{ width: 15, height: 15 }} />
              View on GitHub
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>

        {/* Right: What was built */}
        <div className="flex flex-col justify-start">
          <p className="text-[11px] text-slate-600 font-semibold uppercase tracking-widest mb-4">
            What was built
          </p>
          <div className="space-y-2.5">
            {project.metrics.map((m) => (
              <div key={m} className="flex items-start gap-2.5">
                <span
                  className="mt-[5px] w-1 h-1 rounded-full flex-shrink-0"
                  style={{ background: "var(--accent)" }}
                />
                <span className="text-slate-400 text-sm">{m}</span>
              </div>
            ))}
          </div>

          {/* System pipeline */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="mt-6">
              <p className="text-[11px] text-slate-600 font-semibold uppercase tracking-widest mb-3">
                System pipeline
              </p>
              <div className="flex flex-wrap items-center gap-1.5">
                {project.architecture.map((node, i, arr) => (
                  <div key={node} className="flex items-center gap-1.5">
                    <span className="px-2.5 py-1 text-xs font-medium rounded border border-white/8 text-slate-400 bg-white/3 font-mono">
                      {node}
                    </span>
                    {i < arr.length - 1 && (
                      <span className="text-slate-700 text-xs">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
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
    <section id="projects" className="section-padding">
      <div className="main-container">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="section-label mb-3">Projects</p>
          <h2 className="section-title">What I&apos;ve Built</h2>
        </motion.div>

        <FeaturedProject />

        {/* Divider */}
        <div className="flex items-center gap-4 mb-7">
          <div className="flex-1 h-px bg-white/5" />
          <p className="text-slate-600 text-xs font-medium uppercase tracking-wider">Other projects</p>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? "text-white border-white/15 bg-white/6"
                  : "text-slate-500 border-white/6 hover:text-slate-300 hover:border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="card card-hover rounded-xl p-5 flex flex-col"
            >
              <div className="flex items-start justify-between mb-1.5">
                <span className="text-[10px] font-medium text-slate-600 uppercase tracking-wider">
                  {project.subtitle}
                </span>
              </div>

              <h3 className="text-white font-semibold text-sm leading-snug mb-2.5">
                {project.title}
              </h3>

              <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.slice(0, 5).map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
                {project.tags.length > 5 && (
                  <span className="tag text-slate-600">+{project.tags.length - 5}</span>
                )}
              </div>

              {/* Link */}
              <div className="pt-3.5 border-t border-white/5">
                <a
                  id={`project-${project.id}-github`}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-200 transition-colors"
                >
                  <GithubIcon style={{ width: 13, height: 13 }} />
                  GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All repos link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            id="all-projects-github"
            href="https://github.com/AbdelrahmanTarek327"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-200 transition-colors border border-white/8 hover:border-white/14 px-5 py-2.5 rounded-md"
          >
            <GithubIcon style={{ width: 15, height: 15 }} />
            View all repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
