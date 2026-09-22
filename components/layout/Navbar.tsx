"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#111113]/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="main-container h-14 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-sm font-bold text-white tracking-wide hover:text-slate-300 transition-colors"
          >
            AT
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`nav-link ${activeSection === href.slice(1) ? "active" : ""}`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Resume link */}
          <div className="hidden md:flex items-center">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              <Download className="w-3 h-3" />
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-1.5 text-slate-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-14 z-40 bg-[#111113]/95 backdrop-blur-md border-b border-white/5 md:hidden">
          <div className="px-5 py-4 flex flex-col gap-0.5">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 px-2 text-slate-300 hover:text-white text-sm font-medium transition-colors"
              >
                {label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-white/5">
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
