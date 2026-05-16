"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Code2, Cpu, Sparkles, Eye, BarChart3 } from "lucide-react";
import { skills } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, Brain, Cpu, Sparkles, Eye, BarChart3,
};

const colorMap: Record<string, {
  bar: string; barGlow: string; badge: string;
  border: string; icon: string; header: string;
}> = {
  violet: {
    bar: "from-violet-600 to-violet-400",
    barGlow: "rgba(139,92,246,0.45)",
    badge: "text-violet-400 bg-violet-500/8 border-violet-500/20",
    border: "border-violet-500/15 hover:border-violet-500/35",
    icon: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    header: "bg-violet-500/5",
  },
  cyan: {
    bar: "from-cyan-600 to-cyan-400",
    barGlow: "rgba(6,182,212,0.45)",
    badge: "text-cyan-400 bg-cyan-500/8 border-cyan-500/20",
    border: "border-cyan-500/15 hover:border-cyan-500/35",
    icon: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    header: "bg-cyan-500/5",
  },
  emerald: {
    bar: "from-emerald-600 to-emerald-400",
    barGlow: "rgba(52,211,153,0.45)",
    badge: "text-emerald-400 bg-emerald-500/8 border-emerald-500/20",
    border: "border-emerald-500/15 hover:border-emerald-500/35",
    icon: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    header: "bg-emerald-500/5",
  },
  amber: {
    bar: "from-amber-500 to-yellow-400",
    barGlow: "rgba(251,191,36,0.45)",
    badge: "text-amber-400 bg-amber-500/8 border-amber-500/20",
    border: "border-amber-500/15 hover:border-amber-500/35",
    icon: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    header: "bg-amber-500/5",
  },
};

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium mb-4">
            <Cpu className="w-3 h-3" />
            Skills
          </div>
          <h2 className="section-title text-white mb-4">
            Technical <span className="gradient-text-primary">Arsenal</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            A full-stack set of AI and data engineering skills spanning classical ML to cutting-edge Generative AI.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, gi) => {
            const c = colorMap[group.color] || colorMap.violet;
            const Icon = iconMap[group.icon] || Code2;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: gi * 0.08 }}
                className={`glass-card rounded-2xl border ${c.border} overflow-hidden transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Card header */}
                <div className={`${c.header} px-5 py-4 border-b border-white/5 flex items-center gap-3`}>
                  <div className={`p-2.5 rounded-xl border ${c.icon}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-white font-bold text-sm">{group.category}</h3>
                </div>

                {/* Skills */}
                <div className="p-5 space-y-5">
                  {group.items.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                        <span className={`text-xs font-bold ${c.badge.split(" ")[0]} bg-transparent`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${c.bar}`}
                          style={{
                            boxShadow: inView ? `0 0 10px ${c.barGlow}` : "none",
                          }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1.1,
                            delay: gi * 0.08 + si * 0.15 + 0.3,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
