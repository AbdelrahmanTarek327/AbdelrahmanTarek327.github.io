"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, CheckCircle2, Calendar, MapPin } from "lucide-react";
import { education, certifications } from "@/lib/data";

const certColorMap: Record<string, { border: string; bg: string; text: string; dot: string }> = {
  amber: { border: "border-amber-500/20", bg: "bg-amber-500/5", text: "text-amber-400", dot: "bg-amber-400" },
  cyan: { border: "border-cyan-500/20", bg: "bg-cyan-500/5", text: "text-cyan-400", dot: "bg-cyan-400" },
  violet: { border: "border-violet-500/20", bg: "bg-violet-500/5", text: "text-violet-400", dot: "bg-violet-400" },
  emerald: { border: "border-emerald-500/20", bg: "bg-emerald-500/5", text: "text-emerald-400", dot: "bg-emerald-400" },
};

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="education" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/5 to-transparent pointer-events-none" />

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
            Academic <span className="gradient-text-primary">Foundation</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Grounded in engineering fundamentals and continuously upskilling through world-class industry programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Degree card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="h-full rounded-2xl border border-violet-500/20 overflow-hidden hover:border-violet-500/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(139,92,246,0.1)]">
              {/* Card header gradient */}
              <div className="relative h-20 bg-gradient-to-br from-violet-600/20 to-cyan-600/10 border-b border-violet-500/15 overflow-hidden flex items-end px-6 pb-3">
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="relative z-10 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-violet-500/20 border border-violet-500/30">
                    <GraduationCap className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Degree</p>
                    <p className="text-white font-bold text-sm">Bachelor of Science</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 h-full" style={{ borderRadius: 0 }}>
                <h3 className="text-white font-bold text-base leading-tight mb-2">
                  {education.degree}
                </h3>
                <p className="text-violet-400 font-semibold text-sm mb-5">{education.university}</p>

                <div className="space-y-2.5 mb-5">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                    {education.period}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <MapPin className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                    {education.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-400">Grade: </span>
                    <span className="text-emerald-400 font-bold">{education.grade}</span>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] text-slate-600 uppercase tracking-wider font-semibold mb-3">Focus Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {education.focus.map((f) => (
                      <span key={f} className="text-xs px-2.5 py-1 rounded-lg border border-violet-500/15 text-violet-300/70 bg-violet-500/5">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-5">
              <Award className="w-4 h-4 text-amber-400" />
              <h3 className="text-white font-bold text-sm">Certifications & Programs</h3>
              <span className="text-xs text-slate-600 ml-auto font-medium">{certifications.length} earned</span>
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
                    className={`rounded-xl border ${c.border} ${c.bg} p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] group`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-[7px] flex-shrink-0 shadow-[0_0_6px_currentColor]`} />
                      <div>
                        <p className="text-white text-sm font-semibold leading-tight mb-1 group-hover:text-white/90">
                          {cert.title}
                        </p>
                        <p className={`text-xs font-medium ${c.text}`}>{cert.issuer}</p>
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
