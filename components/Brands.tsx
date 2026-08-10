"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

const BRANDS = [
  { id: 1, name: "Apollo Hospitals", category: "Healthcare & Hospitals" },
  { id: 2, name: "Medanta Hospitals", category: "Multi-Speciality Care" },
  { id: 3, name: "Shudh Dairy", category: "Pure Dairy & Foods" },
  { id: 4, name: "Orancia", category: "Beverages & FMCG Brand" },
];

export default function Brands() {
  const marqueeBrands = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];
  const setTrackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [singleSetWidth, setSingleSetWidth] = useState(1200);

  const speed = 40; // pixels per second

  useEffect(() => {
    const updateSetWidth = () => {
      if (setTrackRef.current) {
        const children = setTrackRef.current.children;
        if (children.length >= BRANDS.length) {
          const firstChild = children[0] as HTMLElement;
          const fourthChild = children[BRANDS.length - 1] as HTMLElement;
          const left = firstChild.offsetLeft;
          const right = fourthChild.offsetLeft + fourthChild.offsetWidth;
          setSingleSetWidth(right - left);
        }
      }
    };

    updateSetWidth();
    window.addEventListener("resize", updateSetWidth);

    const resizeObserver = new ResizeObserver(updateSetWidth);
    if (setTrackRef.current) {
      resizeObserver.observe(setTrackRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateSetWidth);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useAnimationFrame((_, delta) => {
    if (!isDragging && !isHovered && !reduceMotion && singleSetWidth > 0) {
      let currentX = x.get() - speed * (delta / 1000);
      if (currentX <= -singleSetWidth) {
        currentX += singleSetWidth;
      }
      x.set(currentX);
    }
  });

  const handlePanStart = () => {
    setIsDragging(true);
  };

  const handlePan = (_: any, info: { delta: { x: number } }) => {
    if (singleSetWidth <= 0) return;
    let currentX = x.get() + info.delta.x;

    while (currentX <= -singleSetWidth * 2) {
      currentX += singleSetWidth;
    }
    while (currentX >= 0) {
      currentX -= singleSetWidth;
    }

    x.set(currentX);
  };

  const handlePanEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="brands" className="relative z-10 min-h-[220px] bg-[#FAF8F5] transition-colors duration-300 dark:bg-[#0B0B0C] py-20 text-[#16150F] dark:text-[#F2F0ED] overflow-hidden border-b border-black/[0.08] dark:border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-24 mb-10 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight md:text-5xl text-[#16150F] dark:text-[#F2F0ED]">
            Brands I’ve Worked With
          </h3>
        </motion.div>
      </div>

      {/* Interactive Endless Marquee Container */}
      <div className="relative w-full overflow-hidden py-4 sm:py-6">
        {/* Left edge fade gradient */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 md:w-32 bg-gradient-to-r from-[#FAF8F5] dark:from-[#0B0B0C] to-transparent z-20" />
        
        {/* Right edge fade gradient */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 md:w-32 bg-gradient-to-l from-[#FAF8F5] dark:from-[#0B0B0C] to-transparent z-20" />

        <motion.div
          ref={setTrackRef}
          style={{ x }}
          onPanStart={handlePanStart}
          onPan={handlePan}
          onPanEnd={handlePanEnd}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex items-center cursor-grab active:cursor-grabbing select-none touch-pan-y w-max pl-4 sm:pl-8 relative"
        >
          {marqueeBrands.map((item, i) => {
            const isDuplicate = i >= BRANDS.length;
            return (
              <div key={`${item.id}-${i}`} className="flex items-center flex-shrink-0">
                <div
                  aria-hidden={isDuplicate ? "true" : undefined}
                  className="group flex flex-col justify-center px-4 sm:px-6 md:px-8 py-2 transition-all duration-300"
                >
                  <span className="text-base sm:text-lg md:text-xl font-bold tracking-wide text-[#16150F] dark:text-[#F2F0ED] group-hover:text-[#C2410C] dark:group-hover:text-[#FF7A18] transition-colors whitespace-nowrap">
                    {item.name}
                  </span>
                  <span className="text-xs sm:text-sm text-[#6B6862] dark:text-[#8A8A8F] transition-colors whitespace-nowrap mt-0.5 sm:mt-1">
                    {item.category}
                  </span>
                </div>

                {/* Hairline vertical divider between brand items */}
                <div 
                  aria-hidden="true" 
                  className="h-7 sm:h-8 w-[1px] bg-black/[0.08] dark:bg-white/[0.08] mx-4 sm:mx-6 md:mx-8 flex-shrink-0 self-center" 
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
