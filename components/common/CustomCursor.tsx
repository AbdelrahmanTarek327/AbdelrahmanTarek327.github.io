"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setMounted(true);
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(coarse);

    if (!coarse) {
      document.body.style.cursor = "none";
    }

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovering(!!(el.closest("a") || el.closest("button")));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!mounted || isTouch) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-violet-400 pointer-events-none"
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: hovering ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 600, damping: 35, mass: 0.4 }}
      />
      {/* Ring */}
      <motion.div
        className={`fixed top-0 left-0 z-[9998] rounded-full border pointer-events-none transition-colors duration-200 ${
          hovering ? "w-10 h-10 border-violet-400/60" : "w-6 h-6 border-violet-500/40"
        }`}
        animate={{ x: pos.x - (hovering ? 20 : 12), y: pos.y - (hovering ? 20 : 12) }}
        transition={{ type: "spring", stiffness: 200, damping: 22, mass: 0.7 }}
      />
    </>
  );
}
