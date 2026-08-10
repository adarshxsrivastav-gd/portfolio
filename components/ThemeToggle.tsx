"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Placeholder to avoid layout shift before hydration
    return (
      <div className="fixed top-6 right-6 z-[100] h-11 w-11 md:top-8 md:right-12" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed top-6 right-6 z-[100] flex h-12 w-12 items-center justify-center rounded-xl border border-black/[0.08] bg-white/90 shadow-sm backdrop-blur-md transition-all hover:scale-105 dark:border-white/[0.08] dark:bg-[#141416]/90 md:top-8 md:right-12"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute"
          >
            <Moon className="h-5 w-5 text-[#F2F0ED]" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute"
          >
            <Sun className="h-5 w-5 fill-[#16150F] text-[#16150F]" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
