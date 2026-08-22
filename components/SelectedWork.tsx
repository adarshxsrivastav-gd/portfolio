"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ImagePlaceholder } from "./ImagePlaceholder";

export default function SelectedWork() {
  return (
    <section id="selected-work" className="relative z-10 bg-[#FAF8F5] transition-colors duration-300 dark:bg-[#0B0B0C] px-6 sm:px-8 py-24 md:py-32 md:px-24">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-12 md:mb-16 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-[#16150F] dark:text-[#F2F0ED]">
          Selected Work
        </h3>

        <Link href="/work/molly-mascot" className="group block select-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col lg:flex-row items-stretch overflow-hidden rounded-[16px] border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#141416] transition-all duration-300 hover:border-[#C2410C]/40 dark:hover:border-[#FF7A18]/40"
          >
            {/* 16:9 Thumbnail Image Container */}
            <div className="w-full lg:w-3/5 p-4 sm:p-6 pb-0 lg:pb-6">
              <ImagePlaceholder
                src="/images/work/molly-mascot/featured.webp"
                alt="Molly mascot system for Gyandhara"
                label="Molly Mascot — Featured Work"
                aspectRatio="aspect-[16/9]"
                className="w-full h-full"
              />
            </div>

            {/* Content Area */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 lg:w-2/5 flex-grow bg-white dark:bg-[#141416]">
              <div>
                <div className="mb-3 w-fit rounded-full border border-[#C2410C]/20 dark:border-[#FF7A18]/20 bg-[#C2410C]/10 dark:bg-[#FF7A18]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#C2410C] dark:text-[#FF7A18]">
                  Featured Project
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-[#16150F] dark:text-[#F2F0ED] tracking-tight mb-3 group-hover:text-[#C2410C] dark:group-hover:text-[#FF7A18] transition-colors">
                  Molly — A Mascot System for Gyandhara
                </h4>
                <p className="text-base sm:text-lg text-[#6B6862] dark:text-[#8A8A8F] leading-relaxed">
                  A four-persona brand character system built in-house for Gyandhara
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm md:text-base font-semibold text-[#C2410C] dark:text-[#FF7A18]">
                <span>View Case Study</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
