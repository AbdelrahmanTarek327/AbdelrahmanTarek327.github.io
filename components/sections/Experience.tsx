"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { experience } from "@/lib/data";

const colorMap: Record<string, { badge: string; dot: string; border: string; glow: string }> = {
  violet: {
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    dot: "bg-violet-500",
    border: "border-violet-500/20",
    glow: "shadow-[0_0_20px_rgba(139,92,246,0.1)]",
  },
  cyan: {
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    dot: "bg-cyan-500",
    border: "border-cyan-500/20",
    glow: "shadow-[0_0_20px_rgba(6,182,212,0.1)]",
  },
  emerald: {
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    dot: "bg-emerald-500",
    border: "border-emerald-500/20",
    glow: "shadow-[0_0_20px_rgba(52,211,153,0.1)]",
  },
  amber: {
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    dot: "bg-amber-500",
    border: "border-amber-500/20",
    glow: "shadow-[0_0_20px_rgba(251,191,36,0.1)]",
  },
};

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-medium mb-4">
            <Briefcase className="w-3 h-3" />
            Experience
          </div>
          <h2 className="section-title text-white mb-4">
            Professional{" "}
            <span className="gradient-text-primary">Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Hands-on experience across ML, data analytics, computer vision, and generative AI through intensive programs and real-world internships.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 sm:left-7 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-cyan-500/20 to-transparent" />

          <div className="space-y-6">
            {experience.map((item, i) => {
              const c = colorMap[item.color] || colorMap.violet;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-14 sm:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-3.5 sm:left-5 top-5 flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full ${c.dot} ring-2 ring-[#050814] ring-offset-0`} />
                    {item.current && (
                      <div className={`absolute w-3 h-3 rounded-full ${c.dot} animate-ping opacity-50`} />
                    )}
                  </div>

                  <div
                    className={`glass-card rounded-xl border ${c.border} p-5 card-hover transition-all duration-300 ${item.current ? c.glow : ""}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="text-white font-semibold text-base">{item.role}</h3>
                          {item.current && (
                            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-violet-500/15 text-violet-400 border border-violet-500/25">
                              Current
                            </span>
                          )}
                        </div>
                        <p className={`text-sm font-medium ${c.badge.split(" ")[1]}`}>
                          {item.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg border ${c.badge}`}>
                          <span className="hidden sm:inline">{item.type}</span>
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-500">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {item.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-slate-400 text-sm">
                          <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-slate-600" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
