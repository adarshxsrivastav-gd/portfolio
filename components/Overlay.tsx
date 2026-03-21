"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Unified fade out on scroll to keep the text grouped into the Hero viewport
  const globalOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const globalY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  const [activeSection, setActiveSection] = useState<"name" | "tagline">("name");

  useEffect(() => {
    // Alternate between "name" and "tagline" every 5 seconds.
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev === "name" ? "tagline" : "name"));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 flex h-screen w-full flex-col justify-center px-8 md:px-24">
      <motion.div style={{ opacity: globalOpacity, y: globalY }} className="relative h-full w-full">
        <AnimatePresence mode="wait">
          {activeSection === "name" && (
            <motion.div
              key="name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center text-gray-900 dark:text-white"
            >
              <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                Adarsh Srivastav.
              </h1>
              <p className="mt-4 text-xl tracking-wide text-gray-600 dark:text-gray-400 md:text-3xl">
                Graphic Designer & Video Editor.
              </p>
            </motion.div>
          )}

          {activeSection === "tagline" && (
            <motion.div
              key="tagline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-start justify-center pl-0 text-left text-gray-900 dark:text-white md:pl-24"
            >
              {/* Reduced size to ~50% of the Name's text-7xl */}
              <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-4xl">
                FROM DREAM TO SCREEN
              </h2>
              <p className="max-w-2xl text-base tracking-wide text-gray-600 dark:text-gray-400 md:text-lg leading-relaxed">
                Transforming creative ideas into powerful visuals that connect with people and build strong digital presence.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
