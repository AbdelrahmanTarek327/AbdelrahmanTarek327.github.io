"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, Send, ArrowRight, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/BrandIcons";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailto, "_blank");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-medium mb-4">
            <MessageSquare className="w-3 h-3" />
            Contact
          </div>
          <h2 className="section-title text-white mb-4">
            Let's{" "}
            <span className="gradient-text-primary">Work Together</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Open to full-time roles, research collaborations, freelance projects, and internships in AI, ML, and data science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
                color: "text-cyan-400",
                border: "border-cyan-500/20",
              },
              {
                icon: LinkedinIcon,
                label: "LinkedIn",
                value: "abdelrahmann-tarek",
                href: personalInfo.linkedin,
                color: "text-violet-400",
                border: "border-violet-500/20",
              },
              {
                icon: GithubIcon,
                label: "GitHub",
                value: "AbdelrahmanTarek327",
                href: personalInfo.github,
                color: "text-slate-300",
                border: "border-white/10",
              },
              {
                icon: MapPin,
                label: "Location",
                value: personalInfo.location,
                href: null,
                color: "text-emerald-400",
                border: "border-emerald-500/20",
              },
            ].map(({ icon: Icon, label, value, href, color, border }) => (
              <div
                key={label}
                className={`glass-card rounded-xl border ${border} p-4 flex items-center gap-4 card-hover`}
              >
                <div className={`p-2.5 rounded-lg bg-white/3 ${color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-slate-500 text-xs mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={`text-sm font-medium ${color} hover:underline truncate block`}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className={`text-sm font-medium ${color}`}>{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="glass-card rounded-xl border border-violet-500/15 p-5 mt-2">
              <p className="text-slate-400 text-sm leading-relaxed">
                Currently pursuing my Bachelor's at{" "}
                <span className="text-violet-400 font-medium">Helwan University</span> and advancing in
                Generative AI through{" "}
                <span className="text-cyan-400 font-medium">DEPI</span>. Always open to impactful collaborations.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl border border-white/8 p-6 sm:p-8 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-500 font-medium mb-1.5 block">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/3 border border-white/8 text-white text-sm placeholder-slate-600 focus:border-violet-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-500 font-medium mb-1.5 block">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/3 border border-white/8 text-white text-sm placeholder-slate-600 focus:border-violet-500/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-500 font-medium mb-1.5 block">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="What's this about?"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/3 border border-white/8 text-white text-sm placeholder-slate-600 focus:border-violet-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs text-slate-500 font-medium mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the opportunity, project, or collaboration..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/3 border border-white/8 text-white text-sm placeholder-slate-600 focus:border-violet-500/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-violet-700 text-white font-semibold text-sm hover:from-violet-500 hover:to-cyan-600 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sent" ? (
                  <>
                    <span>Message Sent!</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {status === "sending" ? "Opening email..." : "Send Message"}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
