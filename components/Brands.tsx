"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const ApolloHospitalsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-amber-500">
    <path d="M12 2L3 19h5l4-8 4 8h5L12 2z" fill="currentColor" />
    <path d="M12 7l-2.5 5h5L12 7z" fill="#FFF" opacity="0.9" />
  </svg>
);

const MedantaHospitalsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-emerald-500">
    <path d="M4 4h4v16H4V4zm6 0h4v16h-4V4zm6 0h4v16h-4V4z" fill="currentColor" opacity="0.3" />
    <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </svg>
);

const ShudhDairyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-blue-400">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="currentColor" />
    <path d="M12 8a4 4 0 0 0-4 4c0 2.21 1.79 4 4 4s4-1.79 4-4a4 4 0 0 0-4-4z" fill="#FFF" opacity="0.8" />
  </svg>
);

const OranciaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-orange-500">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
    <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </svg>
);

const BRANDS = [
  { id: 1, name: "Apollo Hospitals", category: "Healthcare & Hospitals", icon: <ApolloHospitalsIcon /> },
  { id: 2, name: "Medanta Hospitals", category: "Multi-Speciality Care", icon: <MedantaHospitalsIcon /> },
  { id: 3, name: "Shudh Dairy", category: "Pure Dairy & Foods", icon: <ShudhDairyIcon /> },
  { id: 4, name: "Orancia", category: "Beverages & FMCG Brand", icon: <OranciaIcon /> },
];

export default function Brands() {
  const marqueeBrands = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const startXRef = useRef(0);
  const startMotionXRef = useRef(0);

  // Single set of 4 items width: (300px card width + 24px gap) * 4 = 1296px
  const singleSetWidth = 1296;
  const speed = 40; // pixels per second

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useAnimationFrame((_, delta) => {
    if (!isDragging && !isHovered && !reduceMotion) {
      let currentX = x.get() - speed * (delta / 1000);
      if (currentX <= -singleSetWidth) {
        currentX += singleSetWidth;
      }
      x.set(currentX);
    }
  });

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
    startMotionXRef.current = x.get();
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startXRef.current;
    let currentX = startMotionXRef.current + deltaX;

    while (currentX <= -singleSetWidth * 3) {
      currentX += singleSetWidth;
    }
    while (currentX >= 0) {
      currentX -= singleSetWidth;
    }

    x.set(currentX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}
    }
  };

  return (
    <section id="brands" className="relative z-10 bg-gray-50 transition-colors duration-300 dark:bg-[#121212] py-20 text-gray-900 dark:text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-8 md:px-24 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold md:text-5xl">Brands I’ve Worked With</h3>
        </motion.div>
      </div>

      {/* Interactive Endless Marquee Container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left edge fade gradient */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-gray-50 dark:from-[#121212] to-transparent z-20" />
        
        {/* Right edge fade gradient */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50 dark:from-[#121212] to-transparent z-20" />

        <motion.div
          ref={containerRef}
          style={{ x }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-6 cursor-grab active:cursor-grabbing select-none touch-pan-y w-max pl-6 relative"
        >
          {marqueeBrands.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="group relative flex w-[280px] sm:w-[300px] flex-shrink-0 flex-col justify-start overflow-hidden rounded-xl border border-cyan-500/30 bg-gray-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-gray-800 hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] dark:bg-white/5 dark:hover:bg-white/10"
            >
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="relative z-10 pointer-events-none flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-white/10 bg-black/40 text-white shadow-sm transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white transition-colors group-hover:text-cyan-400">
                    {item.name}
                  </h4>
                  <p className="text-xs leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
                    {item.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
