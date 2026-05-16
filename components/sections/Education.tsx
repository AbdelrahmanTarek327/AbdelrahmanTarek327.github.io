"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, CheckCircle2, Calendar } from "lucide-react";
import { education, certifications } from "@/lib/data";

const certColorMap: Record<string, string> = {
  amber: "border-amber-500/20 bg-amber-500/5 text-amber-400",
  cyan: "border-cyan-500/20 bg-cyan-500/5 text-cyan-400",
  violet: "border-violet-500/20 bg-violet-500/5 text-violet-400",
  emerald: "border-emerald-500/20 bg-emerald-500/5 text-emerald-400",
};

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-xs font-medium mb-4">
            <GraduationCap className="w-3 h-3" />
            Education & Certifications
          </div>
          <h2 className="section-title text-white mb-4">
            Academic{" "}
            <span className="gradient-text-primary">Foundation</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Grounded in engineering fundamentals and continuously upskilling through world-class industry programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Degree card (wider) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-2xl border border-violet-500/20 p-7 h-full card-hover">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20">
                  <GraduationCap className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Degree</p>
                  <p className="text-white font-semibold text-sm">Bachelor of Science</p>
                </div>
              </div>

              <h3 className="text-white font-bold text-base leading-tight mb-2">
                {education.degree}
              </h3>
              <p className="text-violet-400 font-semibold text-sm mb-4">{education.university}</p>

              <div className="space-y-2.5 mb-5">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Calendar className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                  {education.period}
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  Cumulative Grade:{" "}
                  <span className="text-emerald-400 font-semibold">{education.grade}</span>
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-600 uppercase tracking-wider mb-2.5">Focus Areas</p>
                <div className="flex flex-wrap gap-2">
                  {education.focus.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-2.5 py-1 rounded-lg border border-violet-500/15 text-violet-300/70 bg-violet-500/5"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-5">
              <Award className="w-4 h-4 text-amber-400" />
              <h3 className="text-white font-semibold text-sm">Certifications & Programs</h3>
              <span className="text-xs text-slate-600 ml-auto">{certifications.length} earned</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, i) => {
                const c = certColorMap[cert.color] || certColorMap.violet;
                return (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                    className={`rounded-xl border ${c} p-4 card-hover`}
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${c.split(" ")[2]}`} />
                      <div>
                        <p className="text-white text-sm font-medium leading-tight mb-1">
                          {cert.title}
                        </p>
                        <p className="text-slate-500 text-xs">{cert.issuer}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
