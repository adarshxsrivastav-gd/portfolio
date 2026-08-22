"use client";

import { Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function HeaderActions() {
  return (
    <div className="fixed top-6 right-6 z-[100] flex items-center gap-2.5 sm:gap-3 md:top-8 md:right-12">
      <a
        href="/resume.pdf"
        download
        aria-label="Download Resume"
        className="group flex h-12 min-w-[44px] min-h-[44px] select-none items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-black/[0.15] bg-white/90 px-3.5 sm:px-4 text-xs sm:text-sm font-semibold text-[#6B6862] shadow-xs backdrop-blur-md transition-colors duration-200 ease-out hover:border-[#C2410C] hover:text-[#C2410C] dark:border-white/[0.15] dark:bg-[#141416]/90 dark:text-[#8A8A8F] dark:hover:border-[#FF7A18] dark:hover:text-[#FF7A18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C2410C] dark:focus-visible:ring-[#FF7A18]"
      >
        <Download
          className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 ease-out group-hover:translate-y-[2px]"
          aria-hidden="true"
        />
        <span>Resume</span>
      </a>

      <ThemeToggle />
    </div>
  );
}
