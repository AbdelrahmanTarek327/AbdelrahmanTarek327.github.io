"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Send, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/BrandIcons";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    inquiryType: "Full-Time / Contract Hiring",
    workType: "Full-Time",
    subject: "", 
    message: "" 
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b8ae4e70-7046-4953-8f89-a1b3fd1731e8",
          name: form.name,
          email: form.email,
          inquiry_type: form.inquiryType,
          work_type: form.workType,
          subject: form.subject || "New Inquiry from Portfolio Website",
          message: form.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", inquiryType: "Full-Time / Contract Hiring", workType: "Full-Time", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      display: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      display: "/abdelrahmann-tarek",
      href: personalInfo.linkedin,
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      display: "AbdelrahmanTarek327",
      href: personalInfo.github,
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="main-container" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="section-label mb-3">Contact</p>
          <h2 className="section-title">Get in touch</h2>
          <p className="text-slate-500 text-sm sm:text-base mt-3 max-w-md">
            Open to full-time roles, internships, and collaborations in AI, ML, and data engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-3"
          >
            {contactLinks.map(({ icon: Icon, label, display, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="card rounded-xl p-4 flex items-center gap-3 hover:border-white/14 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/8 flex-shrink-0 text-slate-400 group-hover:text-slate-200 transition-colors">
                  <Icon style={{ width: 15, height: 15 }} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-400 mb-0.5 font-medium">{label}</p>
                  <p className="text-sm text-slate-200 font-medium truncate group-hover:text-white transition-colors">
                    {display}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors flex-shrink-0" />
              </a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="card rounded-xl p-6 sm:p-7 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-300 font-medium mb-1.5 block">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/3 border border-white/8 text-white text-sm placeholder-slate-500 hover:border-white/12 focus:border-white/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-300 font-medium mb-1.5 block">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/3 border border-white/8 text-white text-sm placeholder-slate-500 hover:border-white/12 focus:border-white/20 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-medium mb-1.5 block">Reason for Contact</label>
                <select
                  value={form.inquiryType}
                  onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/3 border border-white/8 text-white text-sm hover:border-white/12 focus:border-white/20 transition-colors"
                  style={{ backgroundImage: "none" }}
                >
                  <option className="bg-[#111113] text-white" value="Full-Time / Contract Hiring">💼 Full-Time / Contract Hiring</option>
                  <option className="bg-[#111113] text-white" value="Internship Opportunity">🎯 Internship Opportunity</option>
                  <option className="bg-[#111113] text-white" value="Custom AI / LLM / RAG Project">🤖 Custom AI / LLM / RAG Project</option>
                  <option className="bg-[#111113] text-white" value="General Inquiry / Networking">💬 General Inquiry / Networking</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-medium mb-1.5 block">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="e.g., AI Engineer Role / RAG System Consulting"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/3 border border-white/8 text-white text-sm placeholder-slate-500 hover:border-white/12 focus:border-white/20 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-medium mb-2 block">Work Type</label>
                <div className="flex flex-wrap gap-2">
                  {["Full-Time", "Part-Time", "Contract / Freelance"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setForm({ ...form, workType: type })}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors border ${
                        form.workType === type 
                          ? "bg-white/10 text-white border-white/20" 
                          : "bg-white/3 text-slate-400 border-white/5 hover:border-white/10"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-300 font-medium mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe the role, project scope, tech stack, or timeline..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/3 border border-white/8 text-white text-sm placeholder-slate-500 hover:border-white/12 focus:border-white/20 transition-colors resize-none"
                />
              </div>

              <button
                id="contact-submit"
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg text-white text-sm font-semibold transition-all duration-200 disabled:opacity-80 disabled:cursor-not-allowed ${status === "error" ? "bg-red-500 hover:bg-red-600" :
                    status === "sent" ? "bg-green-600 hover:bg-green-700" : ""
                  }`}
                style={status !== "error" && status !== "sent" ? { background: "var(--accent)" } : undefined}
              >
                {status === "sent" ? (
                  <span>Message sent! I'll get back to you within 24 hours.</span>
                ) : status === "error" ? (
                  <span>Error sending message. Try again?</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    {status === "sending" ? "Sending..." : "Send Message"}
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
