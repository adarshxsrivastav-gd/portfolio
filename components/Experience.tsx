"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import Testimonials from "./Testimonials";
import { useLanguage } from "./LanguageProvider";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 min-h-[500px] bg-[#FAF8F5] transition-colors duration-300 dark:bg-[#0B0B0C] px-6 sm:px-8 py-24 md:py-32 text-[#16150F] dark:text-[#F2F0ED] md:px-24 border-b border-black/[0.08] dark:border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-24">
          
          {/* Work Experience */}
          <div className="w-full">
            <div className="mb-10 flex flex-col md:flex-row items-start md:items-center gap-4">
              <Briefcase className="h-9 w-9 text-[#C2410C] dark:text-[#FF7A18]" />
              <h3 className="text-3xl font-extrabold tracking-tight md:text-5xl text-[#16150F] dark:text-[#F2F0ED]">{t("experience.heading")}</h3>
            </div>
            
            <div className="space-y-12 border-l border-black/[0.12] dark:border-white/[0.12] pl-8 ml-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -left-[37px] top-1.5 h-3.5 w-3.5 rounded-full bg-[#C2410C] dark:bg-[#FF7A18] border-2 border-[#FAF8F5] dark:border-[#0B0B0C]" />
                <h4 className="text-2xl font-bold text-[#16150F] dark:text-[#F2F0ED]">{t("exp.job1.title")}</h4>
                <p className="mt-1 text-lg font-medium text-[#6B6862] dark:text-[#8A8A8F]">
                  {t("exp.job1.company")} <span className="text-sm font-normal text-[#6B6862] dark:text-[#8A8A8F]">{t("exp.job1.companySuffix")}</span>
                </p>
                <p className="mb-4 text-xs font-bold tracking-widest text-[#C2410C] dark:text-[#FF7A18] uppercase">{t("exp.job1.period")}</p>
                <ul className="list-disc space-y-2 pl-5 text-[#6B6862] dark:text-[#8A8A8F]">
                  <li>{t("exp.job1.bullet1")}</li>
                  <li>{t("exp.job1.bullet2")}</li>
                  <li>{t("exp.job1.bullet3")}</li>
                  <li>{t("exp.job1.bullet4")}</li>
                  <li>{t("exp.job1.bullet5")}</li>
                  <li>{t("exp.job1.bullet6")}</li>
                  <li>{t("exp.job1.bullet7")}</li>
                  <li>{t("exp.job1.bullet8")}</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="relative"
              >
                <div className="absolute -left-[37px] top-1.5 h-3.5 w-3.5 rounded-full bg-[#6B6862] dark:bg-[#8A8A8F] border-2 border-[#FAF8F5] dark:border-[#0B0B0C]" />
                <h4 className="text-2xl font-bold text-[#16150F] dark:text-[#F2F0ED]">{t("exp.job2.title")}</h4>
                <p className="mt-1 text-lg font-medium text-[#6B6862] dark:text-[#8A8A8F]">{t("exp.job2.company")}</p>
                <p className="mb-4 text-xs font-bold tracking-widest text-[#C2410C] dark:text-[#FF7A18] uppercase">{t("exp.job2.period")}</p>
                <ul className="list-disc space-y-2 pl-5 text-[#6B6862] dark:text-[#8A8A8F]">
                  <li>{t("exp.job2.bullet1")}</li>
                  <li>{t("exp.job2.bullet2")}</li>
                  <li>{t("exp.job2.bullet3")}</li>
                  <li>{t("exp.job2.bullet4")}</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute -left-[37px] top-1.5 h-3.5 w-3.5 rounded-full bg-[#6B6862] dark:bg-[#8A8A8F] border-2 border-[#FAF8F5] dark:border-[#0B0B0C]" />
                <h4 className="text-2xl font-bold text-[#16150F] dark:text-[#F2F0ED]">{t("exp.job3.title")}</h4>
                <p className="mt-1 text-lg font-medium text-[#6B6862] dark:text-[#8A8A8F]">{t("exp.job3.company")}</p>
                <p className="mb-4 text-xs font-bold tracking-widest text-[#C2410C] dark:text-[#FF7A18] uppercase">{t("exp.job3.period")}</p>
                <ul className="list-disc space-y-2 pl-5 text-[#6B6862] dark:text-[#8A8A8F]">
                  <li>{t("exp.job3.bullet1")}</li>
                  <li>{t("exp.job3.bullet2")}</li>
                  <li>{t("exp.job3.bullet3")}</li>
                  <li>{t("exp.job3.bullet4")}</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Testimonials */}
          <Testimonials />

          {/* Education */}
          <div className="w-full">
            <div className="mb-10 flex flex-col md:flex-row items-start md:items-center gap-4">
              <GraduationCap className="h-9 w-9 text-[#C2410C] dark:text-[#FF7A18]" />
              <h3 className="text-3xl font-extrabold tracking-tight md:text-5xl text-[#16150F] dark:text-[#F2F0ED]">{t("education.heading")}</h3>
            </div>
            
            <div className="space-y-12 border-l border-black/[0.12] dark:border-white/[0.12] pl-8 ml-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -left-[37px] top-1.5 h-3.5 w-3.5 rounded-full bg-[#6B6862] dark:bg-[#8A8A8F] border-2 border-[#FAF8F5] dark:border-[#0B0B0C]" />
                <h4 className="text-2xl font-bold text-[#16150F] dark:text-[#F2F0ED]">{t("edu.degree1.title")}</h4>
                <p className="mt-1 text-lg font-medium text-[#6B6862] dark:text-[#8A8A8F]">{t("edu.degree1.institution")}</p>
                <p className="text-xs font-bold tracking-widest text-[#C2410C] dark:text-[#FF7A18] uppercase">{t("edu.degree1.period")}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="relative"
              >
                <div className="absolute -left-[37px] top-1.5 h-3.5 w-3.5 rounded-full bg-[#6B6862] dark:bg-[#8A8A8F] border-2 border-[#FAF8F5] dark:border-[#0B0B0C]" />
                <h4 className="text-2xl font-bold text-[#16150F] dark:text-[#F2F0ED]">{t("edu.degree2.title")}</h4>
                <p className="mt-1 text-lg font-medium text-[#6B6862] dark:text-[#8A8A8F]">{t("edu.degree2.institution")}</p>
                <p className="text-xs font-bold tracking-widest text-[#C2410C] dark:text-[#FF7A18] uppercase">{t("edu.degree2.period")}</p>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
