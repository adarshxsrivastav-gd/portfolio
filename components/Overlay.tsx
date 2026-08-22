"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Unified fade out on scroll to keep text grouped into the Hero viewport
  const globalOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const globalY = useTransform(scrollYProgress, [0, 0.15], [0, -40]);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 flex h-screen w-full flex-col justify-center px-6 sm:px-12 md:px-24">
      {/* THE ONLY GRADIENT ON THE ENTIRE WEBSITE: Subtle top-left radial glow behind Hero */}
      <div 
        className="pointer-events-none absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full blur-[140px] transition-opacity duration-500 bg-[#FF7A18]/[0.06] dark:bg-[#FF7A18]/[0.12]" 
      />

      <motion.div style={{ opacity: globalOpacity, y: globalY }} className="relative flex h-full w-full items-center justify-center">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-center px-4 max-w-5xl"
        >
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl text-[#16150F] dark:text-[#F2F0ED]">
            Adarsh Srivastav.
          </h1>
          <p className="mt-6 text-lg tracking-wide text-[#6B6862] dark:text-[#8A8A8F] sm:text-2xl md:text-3xl font-medium">
            Graphic Designer & Video Editor <span className="text-[#C2410C] dark:text-[#FF7A18] font-normal">|</span> AI-Powered Creative Production
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto w-full sm:w-auto">
            <a
              href="#selected-work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#C2410C] hover:bg-[#9A3412] dark:bg-[#FF7A18] dark:hover:bg-[#FF9147] text-white dark:text-[#0B0B0C] px-6 py-3.5 text-sm sm:text-base font-bold transition-all shadow-xs"
            >
              <span>Explore Selected Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-black/[0.12] dark:border-white/[0.12] bg-white/80 dark:bg-[#141416]/80 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] backdrop-blur-md text-[#16150F] dark:text-[#F2F0ED] px-6 py-3.5 text-sm sm:text-base font-bold transition-all shadow-xs"
            >
              <Download className="w-4 h-4 text-[#C2410C] dark:text-[#FF7A18]" />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
