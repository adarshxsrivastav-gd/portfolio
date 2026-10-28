"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative z-10 min-h-[250px] bg-[#FAF8F5] text-[#16150F] transition-colors duration-300 dark:bg-[#0B0B0C] dark:text-[#F2F0ED] px-6 sm:px-8 py-24 md:py-32 md:px-24">
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          {/* Centered Heading — Flat, crisp, large, no glow/text-shadow */}
          <h3 className="mb-14 md:mb-16 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-center text-[#16150F] dark:text-[#F2F0ED]">
            {t("about.heading")}
          </h3>

          {/* Left-Aligned Paragraph Block (max 900px, centered on page) */}
          <div className="w-full max-w-[900px] text-left mx-auto">
            <p className="text-[16px] md:text-[17px] lg:text-[19px] leading-[1.7] text-[#6B6862] dark:text-[#8A8A8F] font-normal">
              {t("about.body")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
