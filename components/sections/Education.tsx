"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { education, certifications } from "@/lib/data";

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="education" className="section-padding">
      <div className="main-container" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="section-label mb-3">Education</p>
          <h2 className="section-title">Education &amp; Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Degree card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="card rounded-xl p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-white/5 border border-white/8">
                  <GraduationCap className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-600 uppercase tracking-wider font-semibold">Degree</p>
                  <p className="text-white font-semibold text-sm">Bachelor of Science</p>
                </div>
              </div>

              <h3 className="text-white font-semibold text-sm leading-tight mb-1.5">
                {education.degree}
              </h3>
              <p className="text-slate-400 font-medium text-sm mb-4">{education.university}</p>

              <div className="space-y-2 mb-5 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 flex-shrink-0 text-slate-600" />
                  {education.period}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-slate-600" />
                  {education.location}
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 text-center text-slate-600 text-xs">✓</span>
                  Grade: <span className="text-slate-300 font-medium">{education.grade}</span>
                </div>
              </div>

              <div>
                <p className="text-[10px] text-slate-600 uppercase tracking-wider font-semibold mb-2.5">
                  Course Focus
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {education.focus.map((f) => (
                    <span key={f} className="tag">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-5">
              <Award className="w-4 h-4 text-slate-500" />
              <h3 className="text-slate-300 font-semibold text-sm">Certifications &amp; Programs</h3>
              <span className="text-xs text-slate-600 ml-auto">{certifications.length} earned</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                  className="card rounded-xl p-4"
                >
                  <div className="flex items-start gap-2.5">
                    <span
                      className="mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "rgba(100,116,139,0.5)" }}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-slate-300 text-sm font-medium leading-tight mb-0.5 break-words">{cert.title}</p>
                      <p className="text-slate-500 text-xs break-words">{cert.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
