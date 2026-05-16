"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";

const colorMap: Record<string, { border: string; bg: string; text: string; tag: string }> = {
  violet: {
    border: "border-violet-500/20 hover:border-violet-500/40",
    bg: "bg-violet-500/5",
    text: "text-violet-400",
    tag: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
  cyan: {
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    bg: "bg-cyan-500/5",
    text: "text-cyan-400",
    tag: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
  amber: {
    border: "border-amber-500/20 hover:border-amber-500/40",
    bg: "bg-amber-500/5",
    text: "text-amber-400",
    tag: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  emerald: {
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    bg: "bg-emerald-500/5",
    text: "text-emerald-400",
    tag: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
};

export default function Blog() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="blog" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 text-xs font-medium mb-4">
            <BookOpen className="w-3 h-3" />
            Insights & Writing
          </div>
          <h2 className="section-title text-white mb-4">
            Technical <span className="gradient-text-primary">Perspectives</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Deep dives into AI systems, ML engineering patterns, and data science from the trenches.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogPosts.map((post, i) => {
            const c = colorMap[post.categoryColor] || colorMap.violet;
            return (
              <motion.a
                key={post.id}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative glass-card rounded-2xl border ${c.border} p-5 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] cursor-pointer overflow-hidden`}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] ${c.bg} opacity-0 group-hover:opacity-100 transition-opacity`}
                  style={{ background: `linear-gradient(90deg, transparent, currentColor, transparent)` }}
                />

                {/* Category + read time */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${c.tag}`}>
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-slate-600">
                    <Clock className="w-2.5 h-2.5" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-sm leading-snug mb-3 group-hover:text-white/90 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-500 text-xs leading-relaxed flex-1 mb-5 line-clamp-4">
                  {post.excerpt}
                </p>

                {/* Read link */}
                <div className={`flex items-center gap-1.5 text-xs font-bold ${c.text} group-hover:gap-2.5 transition-all`}>
                  Read article
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Coming soon note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-slate-600 text-xs">
            More technical articles coming soon · Follow on{" "}
            <a
              href="https://www.linkedin.com/in/abdelrahmann-tarek/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300 transition-colors font-semibold"
            >
              LinkedIn
            </a>{" "}
            for updates
          </p>
        </motion.div>
      </div>
    </section>
  );
}
