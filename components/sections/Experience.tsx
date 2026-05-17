"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar } from "lucide-react";
import { experience } from "@/lib/data";

const colorMap: Record<string, {
  badge: string; dotBg: string; dotGlow: string;
  border: string; accentBorder: string; glow: string; tag: string; text: string;
}> = {
  violet: {
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/25",
    dotBg: "bg-violet-500",
    dotGlow: "shadow-[0_0_10px_rgba(139,92,246,0.7)]",
    border: "border-violet-500/15 hover:border-violet-500/35",
    accentBorder: "border-l-violet-500/60",
    glow: "hover:shadow-[0_4px_30px_rgba(139,92,246,0.08)]",
    tag: "bg-violet-500/8 text-violet-300 border-violet-500/20",
    text: "text-violet-400",
  },
  cyan: {
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/25",
    dotBg: "bg-cyan-500",
    dotGlow: "shadow-[0_0_10px_rgba(6,182,212,0.7)]",
    border: "border-cyan-500/15 hover:border-cyan-500/35",
    accentBorder: "border-l-cyan-500/60",
    glow: "hover:shadow-[0_4px_30px_rgba(6,182,212,0.08)]",
    tag: "bg-cyan-500/8 text-cyan-300 border-cyan-500/20",
    text: "text-cyan-400",
  },
  emerald: {
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    dotBg: "bg-emerald-500",
    dotGlow: "shadow-[0_0_10px_rgba(52,211,153,0.7)]",
    border: "border-emerald-500/15 hover:border-emerald-500/35",
    accentBorder: "border-l-emerald-500/60",
    glow: "hover:shadow-[0_4px_30px_rgba(52,211,153,0.08)]",
    tag: "bg-emerald-500/8 text-emerald-300 border-emerald-500/20",
    text: "text-emerald-400",
  },
  amber: {
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/25",
    dotBg: "bg-amber-500",
    dotGlow: "shadow-[0_0_10px_rgba(251,191,36,0.7)]",
    border: "border-amber-500/15 hover:border-amber-500/35",
    accentBorder: "border-l-amber-500/60",
    glow: "hover:shadow-[0_4px_30px_rgba(251,191,36,0.08)]",
    tag: "bg-amber-500/8 text-amber-300 border-amber-500/20",
    text: "text-amber-400",
  },
};

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-6" ref={ref}>
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
            Hands-on experience across ML, data analytics, computer vision, and generative AI.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[18px] sm:left-[26px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-violet-500/70 via-cyan-500/35 to-transparent rounded-full" />

          <div className="space-y-5">
            {experience.map((item, i) => {
              const c = colorMap[item.color] || colorMap.violet;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative"
                  style={{ paddingLeft: "3.5rem" }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[12px] sm:left-[20px] top-5">
                    <div className={`w-3.5 h-3.5 rounded-full ${c.dotBg} ${c.dotGlow} ring-[3px] ring-[#050814]`} />
                    {item.current && (
                      <div className={`absolute inset-0 rounded-full ${c.dotBg} animate-ping opacity-40`} />
                    )}
                  </div>

                  {/* Card */}
                  <div className={`glass-card rounded-xl border ${c.border} border-l-[3px] ${c.accentBorder} p-5 sm:p-6 transition-all duration-300 ${c.glow}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1.5">
                          <h3 className="text-white font-bold text-[15px] leading-tight">{item.role}</h3>
                          {item.current && (
                            <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-violet-500/15 text-violet-400 border border-violet-500/25 uppercase tracking-wider">
                              Current
                            </span>
                          )}
                        </div>
                        <p className={`text-sm font-semibold ${c.text}`}>{item.company}</p>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
                        <span className={`text-[11px] px-2.5 py-1 rounded-lg border font-medium ${c.badge}`}>
                          {item.type}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-slate-500 bg-white/3 px-2.5 py-1 rounded-lg border border-white/6 whitespace-nowrap">
                          <Calendar className="w-3 h-3 flex-shrink-0" />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-1 text-[11px] font-medium rounded-lg border ${c.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
