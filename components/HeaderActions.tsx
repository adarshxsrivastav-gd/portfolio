"use client";

import { Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function HeaderActions() {
  return (
    <div className="fixed top-6 right-6 z-[100] flex items-center gap-2.5 sm:gap-3 md:top-8 md:right-12">
      {/* Zero layout shift container for Resume button */}
      <div className="relative h-12 w-12 flex-shrink-0">
        <a
          href="/resume.pdf"
          download
          title="Download Resume"
          aria-label="Download Resume"
          className="resume-btn-expand group absolute right-0 top-0 flex h-12 w-12 select-none items-center justify-start rounded-xl border border-black/[0.15] bg-white/90 px-3.5 shadow-xs backdrop-blur-md transition-colors duration-200 ease-out dark:border-white/[0.15] dark:bg-[#141416]/90 text-[#6B6862] dark:text-[#8A8A8F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C2410C] dark:focus-visible:ring-[#FF7A18] overflow-hidden"
        >
          <Download
            className="resume-btn-icon h-5 w-5 flex-shrink-0 transition-colors duration-200 text-[#6B6862] dark:text-[#8A8A8F]"
            aria-hidden="true"
          />
          <span className="resume-btn-text pointer-events-none ml-2 text-xs sm:text-sm font-semibold opacity-0 transition-opacity duration-200 text-[#C2410C] dark:text-[#FF7A18] whitespace-nowrap">
            Resume
          </span>
        </a>
      </div>

      <ThemeToggle />
    </div>
  );
}
