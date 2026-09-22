"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="section-padding">
      <div className="main-container" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="section-label mb-3">Experience</p>
          <h2 className="section-title">Experience &amp; Training</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/6" />

          <div className="space-y-6">
            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="relative flex gap-5 md:gap-8"
              >
                {/* Timeline dot */}
                <div className="relative mt-5 flex-shrink-0 z-10">
                  <div
                    className="w-3.5 h-3.5 rounded-full border-2 border-[#111113]"
                    style={{
                      background: item.current ? "var(--accent)" : "rgba(100,116,139,0.5)",
                    }}
                  />
                  {item.current && (
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-30"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </div>

                {/* Card */}
                <div className="card rounded-xl p-5 sm:p-6 flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="text-white font-semibold text-[15px] leading-tight break-words">{item.role}</h3>
                        {item.current && (
                          <span
                            className="px-1.5 py-0.5 text-[10px] font-semibold rounded text-white uppercase tracking-wide flex-shrink-0"
                            style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400 text-sm leading-snug break-words">{item.company}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 md:flex-col md:items-end md:gap-1.5 flex-shrink-0 mt-1 md:mt-0">
                      <span className="px-2 py-0.5 text-[11px] rounded border border-white/8 text-slate-400 bg-white/5 font-medium whitespace-nowrap">
                        {item.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-500 whitespace-nowrap">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
