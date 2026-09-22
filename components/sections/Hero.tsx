"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Download, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/BrandIcons";
import { personalInfo } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full pt-28 pb-20 lg:pt-36 lg:pb-24 flex items-center min-h-[75vh]">
      <div className="main-container relative">
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-10">

          {/* ── Left: Content ── */}
          <motion.div
            className="w-full lg:w-[55%] text-center lg:text-left flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Name */}
            <h1
              className="font-bold tracking-tight text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Abdelrahman Tarek
            </h1>

            {/* Title */}
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-400 mb-6">
              AI &amp; Machine Learning Engineer
            </p>

            {/* Description */}
            <p className="text-slate-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-4">
              {personalInfo.tagline}
            </p>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-8 justify-center lg:justify-start">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              {personalInfo.location}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-8 justify-center lg:justify-start">
              <a
                id="hero-view-projects"
                href="#projects"
                className="px-6 py-2.5 rounded-md text-sm font-semibold text-white transition-all duration-200 w-full sm:w-auto text-center"
                style={{ background: "var(--accent)" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                View Projects
              </a>
              <a
                id="hero-download-cv"
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-md border border-white/10 text-sm font-medium text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200 w-full sm:w-auto"
              >
                <Download className="w-3.5 h-3.5" />
                Download CV
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-500 hover:text-slate-200 transition-colors"
              >
                <GithubIcon style={{ width: 18, height: 18 }} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 hover:text-slate-200 transition-colors"
              >
                <LinkedinIcon style={{ width: 18, height: 18 }} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="text-slate-500 hover:text-slate-200 transition-colors"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </div>
          </motion.div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full lg:w-[40%] flex justify-center lg:justify-end"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[360px] lg:h-[360px] xl:w-[420px] xl:h-[420px] rounded-full overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Abdelrahman Tarek"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll cue (removed to prevent filling empty space awkwardly) */}
      </div>
    </section>
  );
}
