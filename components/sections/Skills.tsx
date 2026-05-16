"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Code2, Cpu, Sparkles, Eye, BarChart3 } from "lucide-react";
import { skills } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Brain,
  Cpu,
  Sparkles,
  Eye,
  BarChart3,
};

const colorMap: Record<string, { bar: string; badge: string; border: string; icon: string }> = {
  violet: {
    bar: "from-violet-600 to-violet-400",
    badge: "text-violet-400 bg-violet-500/8 border-violet-500/20",
    border: "border-violet-500/15",
    icon: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  cyan: {
    bar: "from-cyan-600 to-cyan-400",
    badge: "text-cyan-400 bg-cyan-500/8 border-cyan-500/20",
    border: "border-cyan-500/15",
    icon: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  emerald: {
    bar: "from-emerald-600 to-emerald-400",
    badge: "text-emerald-400 bg-emerald-500/8 border-emerald-500/20",
    border: "border-emerald-500/15",
    icon: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  amber: {
    bar: "from-amber-500 to-yellow-400",
    badge: "text-amber-400 bg-amber-500/8 border-amber-500/20",
    border: "border-amber-500/15",
    icon: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
};

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="skills" className="section-padding relative">
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
            Technical{" "}
            <span className="gradient-text-primary">Arsenal</span>
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
                className={`glass-card rounded-xl border ${c.border} p-5 card-hover`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-lg border ${c.icon}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">{group.category}</h3>
                </div>

                <div className="space-y-4">
                  {group.items.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-slate-300 text-sm">{skill.name}</span>
                        <span className={`text-xs font-medium ${c.badge.split(" ")[0]}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${c.bar}`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
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
