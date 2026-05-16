"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Zap, Target, Globe, Code2 } from "lucide-react";
import { personalInfo, techBadges } from "@/lib/data";

const highlights = [
  {
    icon: Brain,
    title: "AI & ML Expertise",
    desc: "End-to-end ML pipelines from data preprocessing to production deployment",
    color: "violet",
  },
  {
    icon: Zap,
    title: "Generative AI",
    desc: "Working with LLMs, diffusion models, and modern NLP architectures",
    color: "cyan",
  },
  {
    icon: Target,
    title: "Domain Impact",
    desc: "Applying AI to healthcare, sports analytics, and business intelligence",
    color: "emerald",
  },
  {
    icon: Globe,
    title: "Full-Stack AI",
    desc: "Integrating AI models with REST APIs, databases, and interactive dashboards",
    color: "amber",
  },
];

const colorMap: Record<string, {
  border: string; bg: string; icon: string;
  glow: string; via: string;
}> = {
  violet: {
    border: "border-violet-500/20 hover:border-violet-500/40",
    bg: "bg-violet-500/5",
    icon: "text-violet-400 bg-violet-500/10 border-violet-500/25",
    glow: "hover:shadow-[0_8px_30px_rgba(139,92,246,0.12)]",
    via: "via-violet-500",
  },
  cyan: {
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    bg: "bg-cyan-500/5",
    icon: "text-cyan-400 bg-cyan-500/10 border-cyan-500/25",
    glow: "hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)]",
    via: "via-cyan-500",
  },
  emerald: {
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    bg: "bg-emerald-500/5",
    icon: "text-emerald-400 bg-emerald-500/10 border-emerald-500/25",
    glow: "hover:shadow-[0_8px_30px_rgba(52,211,153,0.12)]",
    via: "via-emerald-500",
  },
  amber: {
    border: "border-amber-500/20 hover:border-amber-500/40",
    bg: "bg-amber-500/5",
    icon: "text-amber-400 bg-amber-500/10 border-amber-500/25",
    glow: "hover:shadow-[0_8px_30px_rgba(251,191,36,0.12)]",
    via: "via-amber-500",
  },
};

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/8 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 text-xs font-medium mb-4">
            <Code2 className="w-3 h-3" />
            About Me
          </div>
          <h2 className="section-title text-white mb-4">
            Building the Future with{" "}
            <span className="gradient-text-primary">Intelligent Systems</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {personalInfo.summary}
          </p>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {highlights.map((item, i) => {
            const c = colorMap[item.color];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl border ${c.border} ${c.bg} p-6 transition-all duration-300 cursor-default group overflow-hidden ${c.glow} hover:-translate-y-1`}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent ${c.via} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                {/* Bottom left corner glow */}
                <div className={`absolute bottom-0 left-0 w-24 h-24 ${c.bg} rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />

                <div className={`relative z-10 inline-flex p-3 rounded-xl border mb-4 ${c.icon} transition-transform duration-300 group-hover:scale-110`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="relative z-10 font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="relative z-10 text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-2xl border border-white/6 p-6 sm:p-8"
        >
          <h3 className="text-white font-semibold text-sm mb-5 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.6)]" />
            Technologies I work with
          </h3>
          <div className="flex flex-wrap gap-2">
            {techBadges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.04 }}
                className="px-3 py-1.5 text-xs font-medium rounded-lg border border-white/8 text-slate-400 bg-white/2 hover:border-violet-500/30 hover:text-violet-300 hover:bg-violet-500/5 transition-all duration-200 cursor-default"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
