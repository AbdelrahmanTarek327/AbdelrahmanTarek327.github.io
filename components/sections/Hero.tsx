"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ChevronRight, Download, Sparkles, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/BrandIcons";
import { TypeAnimation } from "react-type-animation";
import { personalInfo } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -left-24 w-[700px] h-[700px] bg-violet-600/7 rounded-full blur-[120px]" />
        <div className="absolute -bottom-48 -right-24 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-500/3 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 w-full py-28 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* ── Left: Content ── */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/8 text-xs font-medium text-violet-300 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
              Available for opportunities
              <Sparkles className="w-3 h-3 text-violet-400" />
            </div>

            {/* Name */}
            <h1
              className="font-black tracking-tight text-white leading-[1.05] mb-5"
              style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}
            >
              Abdelrahman{" "}
              <span className="gradient-text-primary">Tarek</span>
            </h1>

            {/* Animated role */}
            <div className="text-lg sm:text-xl font-semibold mb-5 h-8 sm:h-9">
              <TypeAnimation
                sequence={[
                  "AI & Data Science Engineer", 2200,
                  "Machine Learning Specialist", 2000,
                  "Deep Learning Practitioner", 2000,
                  "Generative AI Developer", 2000,
                  "Computer Vision Engineer", 2000,
                ]}
                wrapper="span"
                speed={55}
                className="gradient-text"
                repeat={Infinity}
              />
            </div>

            {/* Tagline */}
            <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed mb-3">
              {personalInfo.tagline}
            </p>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-9 justify-center lg:justify-start">
              <MapPin className="w-3.5 h-3.5 text-violet-400" />
              {personalInfo.location}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-8 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-violet-700 text-white font-semibold text-sm hover:from-violet-500 hover:to-cyan-600 transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_45px_rgba(139,92,246,0.55)] w-full sm:w-auto justify-center"
              >
                View Projects
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="group flex items-center gap-2 px-7 py-3.5 rounded-xl glass border border-white/10 text-white font-semibold text-sm hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <Download className="w-4 h-4 text-violet-400" />
                Download CV
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              {[
                { icon: GithubIcon, href: personalInfo.github, label: "GitHub", hc: "hover:text-white hover:border-white/25" },
                { icon: LinkedinIcon, href: personalInfo.linkedin, label: "LinkedIn", hc: "hover:text-violet-400 hover:border-violet-400/40" },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email", hc: "hover:text-cyan-400 hover:border-cyan-400/40" },
              ].map(({ icon: Icon, href, label, hc }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-2.5 glass border border-white/8 rounded-xl text-slate-500 ${hc} hover:scale-110 transition-all duration-200`}
                >
                  <Icon style={{ width: 18, height: 18 }} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex-shrink-0 relative"
          >
            {/* Background glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600/35 to-cyan-500/20 blur-3xl scale-125" />

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[340px] lg:h-[340px]">
              {/* Spinning conic-gradient border */}
              <div
                className="absolute -inset-[2px] rounded-full animate-spin-slow"
                style={{
                  background: "conic-gradient(from 0deg, #8b5cf6, #06b6d4, #34d399, #8b5cf6)",
                  opacity: 0.7,
                }}
              />
              {/* Mask layer */}
              <div className="absolute inset-[1px] rounded-full bg-[#050814]" />
              {/* Photo */}
              <div className="absolute inset-[4px] rounded-full overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Abdelrahman Tarek"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating badge — ML */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-10 glass border border-violet-500/30 rounded-2xl px-4 py-2.5 shadow-[0_0_25px_rgba(139,92,246,0.15)]"
              >
                <p className="text-xs font-bold text-white">ML Engineer</p>
                <p className="text-[10px] text-violet-400 mt-0.5">6 internships</p>
              </motion.div>

              {/* Floating badge — Gen AI */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 bottom-14 glass border border-cyan-500/30 rounded-2xl px-4 py-2.5 shadow-[0_0_25px_rgba(6,182,212,0.15)]"
              >
                <p className="text-xs font-bold text-white">Gen AI</p>
                <p className="text-[10px] text-cyan-400 mt-0.5">DEPI Program</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue — only visible on desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="hidden lg:flex justify-center absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-slate-600"
          >
            <ArrowDown style={{ width: 18, height: 18 }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
