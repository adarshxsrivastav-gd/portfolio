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
    <section className="relative z-10 bg-gray-50 transition-colors duration-300 dark:bg-[#121212] px-8 py-20 text-gray-900 dark:text-white md:px-24">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-12 text-3xl font-bold md:text-5xl">
          Skills & Proficiencies
        </h3>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Hard Skills */}
          <div>
            <h4 className="mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-300">
              Hard Skills
            </h4>
            <div className="space-y-4 pt-2">
              {HARD_SKILLS.map((skill, index) => (
                <div key={skill.name} className="flex flex-col gap-2">
                  <div className="flex items-end justify-between text-gray-900 dark:text-white">
                    <span className="text-sm font-semibold">{skill.name}</span>
                    <span className="text-sm font-bold tracking-wider">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-[#e0e0e0] dark:bg-[#2a2a2a]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#00BCD4] to-[#4A90E2]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {/* Soft Skills */}
            <div>
              <h4 className="mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-300">
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-4">
                {SOFT_SKILLS.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-full border border-cyan-500/50 bg-gray-900 px-6 py-2 text-sm text-white backdrop-blur-md dark:bg-white/5"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h4 className="mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-300">
                Languages
              </h4>
              <div className="flex flex-wrap gap-4">
                {LANGUAGES.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-full border border-cyan-500/50 bg-gray-900 px-6 py-2 text-sm text-white backdrop-blur-md dark:bg-white/5"
                  >
                    {lang.name}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <h4 className="mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-300">
                Awards
              </h4>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-6 backdrop-blur-sm max-w-lg"
              >
                <h5 className="text-xl font-bold">MR. UP-UK 2K19</h5>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
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
