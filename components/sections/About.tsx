"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "@/lib/data";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding">
      <div className="main-container" ref={ref}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="section-label mb-3">About</p>
          <h2 className="section-title">Background</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="space-y-4 text-slate-400 text-sm sm:text-base leading-relaxed">
              {personalInfo.summary.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.div>

          {/* Key info sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="space-y-5">
              <div>
                <p className="text-xs text-slate-600 font-semibold uppercase tracking-wider mb-2">
                  Education
                </p>
                <p className="text-slate-300 text-sm font-medium">Helwan University</p>
                <p className="text-slate-500 text-sm">Electronics &amp; Communications Engineering</p>
                <p className="text-slate-600 text-xs mt-1">Sep 2021 – Jul 2026 · Very Good</p>
              </div>

              <div className="h-px bg-white/5" />

              <div>
                <p className="text-xs text-slate-600 font-semibold uppercase tracking-wider mb-2">
                  Focus Areas
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Machine Learning", "Generative AI", "NLP", "Data Analysis", "Computer Vision", "Power BI"].map((f) => (
                    <span key={f} className="tag">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
