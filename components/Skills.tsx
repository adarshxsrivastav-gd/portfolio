"use client";

import { motion } from "framer-motion";

const HARD_SKILLS = [
  { name: "Adobe Photoshop", level: 90 },
  { name: "Canva", level: 85 },
  { name: "Adobe Premiere Pro", level: 80 },
  { name: "Adobe Illustrator", level: 70 },
  { name: "CorelDRAW", level: 70 },
  { name: "Adobe After Effects", level: 70 },
  { name: "Adobe InDesign", level: 65 },
];

const SOFT_SKILLS = ["Teamwork", "Leadership", "Problem Solving", "Creative Thinking"];
const LANGUAGES = [
  { name: "Hindi", level: 90 },
  { name: "English", level: 75 },
];

export default function Skills() {
  return (
    <section className="relative z-10 min-h-[400px] bg-[#FAF8F5] transition-colors duration-300 dark:bg-[#0B0B0C] px-6 sm:px-8 py-24 md:py-32 text-[#16150F] dark:text-[#F2F0ED] md:px-24 border-b border-black/[0.08] dark:border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-16 text-3xl font-extrabold tracking-tight md:text-5xl text-[#16150F] dark:text-[#F2F0ED]">
          Skills & Proficiencies
        </h3>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Hard Skills */}
          <div>
            <h4 className="mb-6 text-xl font-bold text-[#16150F] dark:text-[#F2F0ED]">
              Hard Skills
            </h4>
            <div className="space-y-5 pt-2">
              {HARD_SKILLS.map((skill, index) => (
                <div key={skill.name} className="flex flex-col gap-2">
                  <div className="flex items-end justify-between text-[#16150F] dark:text-[#F2F0ED]">
                    <span className="text-sm font-semibold">{skill.name}</span>
                    <span className="text-xs font-bold tracking-wider text-[#6B6862] dark:text-[#8A8A8F]">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-black/[0.06] dark:bg-white/[0.08]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 1, ease: "easeOut", delay: index * 0.05 }}
                      className="h-full rounded-full bg-[#C2410C] dark:bg-[#FF7A18]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {/* Soft Skills */}
            <div>
              <h4 className="mb-6 text-xl font-bold text-[#16150F] dark:text-[#F2F0ED]">
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {SOFT_SKILLS.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#141416] px-5 py-2 text-sm font-medium text-[#16150F] dark:text-[#F2F0ED]"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h4 className="mb-6 text-xl font-bold text-[#16150F] dark:text-[#F2F0ED]">
                Languages
              </h4>
              <div className="flex flex-wrap gap-3">
                {LANGUAGES.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#141416] px-5 py-2 text-sm font-medium text-[#16150F] dark:text-[#F2F0ED]"
                  >
                    {lang.name}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <h4 className="mb-6 text-xl font-bold text-[#16150F] dark:text-[#F2F0ED]">
                Awards
              </h4>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#141416] p-6 max-w-lg"
              >
                <h5 className="text-lg font-bold text-[#16150F] dark:text-[#F2F0ED]">MR. UP-UK 2K19</h5>
                <p className="mt-1 text-sm text-[#6B6862] dark:text-[#8A8A8F]">
                  V.V.N Enterprises • Kanpur • 2019
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
