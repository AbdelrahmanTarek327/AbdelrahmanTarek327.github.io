"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowDown, Sparkles, ChevronRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/BrandIcons";
import { TypeAnimation } from "react-type-animation";
import { personalInfo } from "@/lib/data";

const floatingOrbs = [
  { cx: "10%", cy: "20%", r: 200, color: "rgba(139,92,246,0.07)", delay: 0 },
  { cx: "85%", cy: "15%", r: 250, color: "rgba(6,182,212,0.06)", delay: 1 },
  { cx: "75%", cy: "75%", r: 180, color: "rgba(139,92,246,0.05)", delay: 2 },
  { cx: "20%", cy: "80%", r: 160, color: "rgba(52,211,153,0.04)", delay: 1.5 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Glowing orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: orb.cx,
            top: orb.cy,
            width: orb.r * 2,
            height: orb.r * 2,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: orb.delay }}
        />
      ))}

      {/* Top badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 mb-8"
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-500/20 text-xs font-medium text-violet-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
          </span>
          Available for opportunities
          <Sparkles className="w-3 h-3 ml-1 text-violet-400" />
        </div>
      </motion.div>

      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative z-10 mb-7"
      >
        <div className="relative w-24 h-24 sm:w-28 sm:h-28">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-cyan-500 to-emerald-500 animate-spin-slow opacity-70 blur-sm" />
          <div className="absolute inset-0.5 rounded-full bg-[#050814]" />
          <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-violet-600/30 to-cyan-600/30 flex items-center justify-center">
            <span className="text-3xl sm:text-4xl font-black gradient-text-primary select-none">AT</span>
          </div>
        </div>
      </motion.div>

      {/* Name + title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 text-center px-5"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-3">
          {personalInfo.name}
        </h1>

        <div className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 h-8 sm:h-9">
          <TypeAnimation
            sequence={[
              "AI & Data Science Engineer",
              2000,
              "Machine Learning Specialist",
              2000,
              "Deep Learning Practitioner",
              2000,
              "Generative AI Developer",
              2000,
              "Computer Vision Engineer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="gradient-text"
            repeat={Infinity}
          />
        </div>

        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mt-4">
          {personalInfo.tagline}
        </p>
      </motion.div>

      {/* Location */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 flex items-center gap-1.5 text-slate-500 text-sm mt-5"
      >
        <MapPin className="w-3.5 h-3.5 text-violet-400" />
        {personalInfo.location}
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 flex flex-col sm:flex-row items-center gap-3 mt-9"
      >
        <a
          href="#projects"
          className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-violet-700 text-white font-semibold text-sm hover:from-violet-500 hover:to-cyan-600 transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.3)] hover:shadow-[0_0_35px_rgba(139,92,246,0.5)]"
        >
          View Projects
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 px-7 py-3.5 rounded-xl glass border border-white/10 text-white font-semibold text-sm hover:border-violet-500/40 hover:bg-white/5 transition-all duration-300"
        >
          <Mail className="w-4 h-4 text-cyan-400" />
          Get in Touch
        </a>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative z-10 flex items-center gap-3 mt-7"
      >
        {[
          { icon: GithubIcon, href: personalInfo.github, label: "GitHub", hoverColor: "hover:text-white" },
          { icon: LinkedinIcon, href: personalInfo.linkedin, label: "LinkedIn", hoverColor: "hover:text-violet-400" },
          { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email", hoverColor: "hover:text-cyan-400" },
        ].map(({ icon: Icon, href, label, hoverColor }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            className={`p-2.5 glass border border-white/8 rounded-xl text-slate-500 ${hoverColor} hover:border-white/15 hover:scale-105 transition-all duration-200`}
          >
            <Icon className="w-4.5 h-4.5" style={{ width: 18, height: 18 }} />
          </a>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4.5 h-4.5" style={{ width: 18, height: 18 }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
