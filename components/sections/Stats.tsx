"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Layers, Code2, Award, Briefcase } from "lucide-react";
import { stats } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  Code2,
  Award,
  Briefcase,
};

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative py-16">
      {/* Divider gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Layers;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-xl border border-white/6 p-5 text-center card-hover"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-white/6">
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>
                </div>
                <div className="text-3xl font-black gradient-text-primary mb-1">{stat.value}</div>
                <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
