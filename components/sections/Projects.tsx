"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Layers, Star, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/common/BrandIcons";
import { projects } from "@/lib/data";

const categories = ["All", "AI / Healthcare", "ML / Sports Analytics", "Data Analytics / BI"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 text-xs font-medium mb-4">
            <Layers className="w-3 h-3" />
            Projects
          </div>
          <h2 className="section-title text-white mb-4">
            Featured{" "}
            <span className="gradient-text-primary">Work</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Real-world AI and data science projects — from healthcare NLP systems to predictive analytics and executive dashboards.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.35)]"
                  : "glass border border-white/8 text-slate-400 hover:text-white hover:border-violet-500/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`group relative rounded-2xl border ${project.borderColor} bg-gradient-to-br ${project.gradient} overflow-hidden card-hover flex flex-col`}
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%)`,
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Gradient overlay on top */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 pointer-events-none rounded-2xl`} />

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs text-yellow-400">
                      <Star className="w-2.5 h-2.5 fill-yellow-400" />
                      Featured
                    </div>
                  </div>
                )}

                <div className="relative z-10 p-6 flex flex-col h-full">
                  {/* Category */}
                  <div className="mb-4">
                    <span className={`text-xs font-medium ${project.accentColor}`}>
                      {project.category}
                    </span>
                    {project.subtitle && (
                      <span className="text-slate-600 text-xs ml-2">· {project.subtitle}</span>
                    )}
                  </div>

                  <h3 className="text-white font-bold text-lg leading-tight mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="px-2.5 py-1 text-xs rounded-lg border border-white/8 text-slate-400 bg-white/3"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 text-xs rounded-md font-medium ${project.accentColor} bg-white/4 border border-white/6`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors group/link"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      View Code
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                    <div className="h-3 w-px bg-white/10" />
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors group/link"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
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
          className="text-center mt-10"
        >
          <a
            href="https://github.com/AbdelrahmanTarek327"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors border border-white/8 hover:border-violet-500/30 px-5 py-2.5 rounded-xl hover:bg-white/3"
          >
            <GithubIcon className="w-4 h-4" />
            See all projects on GitHub
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
