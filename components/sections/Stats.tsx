"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Layers, Code2, Award, Briefcase } from "lucide-react";
import { stats } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers, Code2, Award, Briefcase,
};

const palette = [
  {
    text: "text-violet-400",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.18)]",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20 hover:border-violet-500/40",
    bar: "bg-violet-500",
  },
  {
    text: "text-cyan-400",
    glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.18)]",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    bar: "bg-cyan-500",
  },
  {
    text: "text-emerald-400",
    glow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.18)]",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    bar: "bg-emerald-500",
  },
  {
    text: "text-amber-400",
    glow: "hover:shadow-[0_0_30px_rgba(251,191,36,0.18)]",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20 hover:border-amber-500/40",
    bar: "bg-amber-500",
  },
];

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative py-14">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Layers;
            const c = palette[i % palette.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass rounded-2xl border ${c.border} p-6 sm:p-7 lg:p-8 text-center cursor-default transition-all duration-300 group ${c.glow} hover:-translate-y-1`}
              >
                <div className={`inline-flex p-3 rounded-xl ${c.bg} border ${c.border.split(" ")[0]} mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`w-5 h-5 ${c.text}`} />
                </div>
                <div className={`text-4xl sm:text-5xl xl:text-6xl font-black mb-2 ${c.text} leading-none`}>
                  {stat.value}
                </div>
                <div className="text-slate-500 text-xs font-medium leading-tight">{stat.label}</div>
                {/* Bottom accent bar */}
                <div className={`mt-4 h-[2px] w-8 mx-auto rounded-full ${c.bar} opacity-40 group-hover:w-14 group-hover:opacity-70 transition-all duration-300`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
