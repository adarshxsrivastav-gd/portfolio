"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HARD_SKILLS = [
  { name: "Adobe Photoshop", level: 90, icon: "/icons/ps.svg", color: "rgba(49, 168, 255, 0.5)" },
  { name: "Adobe Premiere Pro", level: 80, icon: "/icons/pr.svg", color: "rgba(239, 160, 15, 0.5)" },
  { name: "Adobe Illustrator", level: 70, icon: "/icons/ai.svg", color: "rgba(255, 154, 0, 0.5)" },
  { name: "CorelDRAW", level: 70, icon: "/icons/cd.svg", color: "rgba(32, 178, 84, 0.5)" },
  { name: "Adobe After Effects", level: 70, icon: "/icons/ae.svg", color: "rgba(153, 153, 255, 0.5)" },
  { name: "Canva", level: 85, icon: "/icons/canva.svg", color: "rgba(0, 196, 204, 0.5)" },
  { name: "Adobe InDesign", level: 65, icon: "/icons/id.svg", color: "rgba(255, 51, 102, 0.5)" },
];

const SOFT_SKILLS = ["Teamwork", "Leadership", "Problem Solving", "Creative Thinking"];
const LANGUAGES = [
  { name: "Hindi", level: 90 },
  { name: "English", level: 75 },
];

export default function Skills() {
  return (
    <section className="relative z-10 bg-[#121212] px-8 py-20 text-white md:px-24">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-12 text-3xl font-bold md:text-5xl">Skills & Proficiencies</h3>
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Hard Skills */}
          <div>
            <h4 className="mb-6 text-2xl font-semibold text-gray-300">Hard Skills</h4>
            <div className="space-y-6">
              {HARD_SKILLS.map((skill, index) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <div className="relative h-6 w-6">
                        <div 
                          className="absolute inset-0 blur-sm rounded-md" 
                          style={{ backgroundColor: skill.color }} 
                        />
                        <Image 
                          src={skill.icon} 
                          alt={skill.name} 
                          width={24} 
                          height={24} 
                          className="relative z-10 rounded-md shadow-lg" 
                        />
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-white text-gray-900"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {/* Soft Skills */}
            <div>
              <h4 className="mb-6 text-2xl font-semibold text-gray-300">Soft Skills</h4>
              <div className="flex flex-wrap gap-4">
                {SOFT_SKILLS.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm backdrop-blur-md"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h4 className="mb-6 text-2xl font-semibold text-gray-300">Languages</h4>
              <div className="space-y-6">
                {LANGUAGES.map((lang, index) => (
                  <div key={lang.name}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span>{lang.name}</span>
                      <span className="text-gray-400">{lang.level}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gray-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Awards */}
            <div>
              <h4 className="mb-6 text-2xl font-semibold text-gray-300">Awards</h4>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <h5 className="text-xl font-bold">MR. UP-UK 2K19</h5>
                <p className="mt-1 text-sm text-gray-400">V.V.N Enterprises • Kanpur • 2019</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
