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
      className="fixed top-6 right-6 z-[100] flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/90 shadow-md backdrop-blur-md transition-all hover:scale-110 hover:bg-gray-50 dark:border-white/20 dark:bg-black/80 dark:shadow-white/5 dark:hover:bg-gray-900 md:top-8 md:right-12"
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
            <Moon className="h-5 w-5 text-gray-100" />
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
            <Sun className="h-5 w-5 fill-gray-900 text-gray-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
