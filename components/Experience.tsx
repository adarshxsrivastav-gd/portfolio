"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section className="relative z-10 bg-[#121212] px-8 py-20 text-white md:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Work Experience */}
          <div>
            <div className="mb-10 flex items-center gap-4">
              <Briefcase className="h-8 w-8 text-gray-400" />
              <h3 className="text-3xl font-bold md:text-4xl">Experience</h3>
            </div>
            
            <div className="space-y-12 border-l border-white/10 pl-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-white/20 border-2 border-[#121212]" />
                <h4 className="text-2xl font-semibold">Senior Graphic Designer | Team Leader</h4>
                <p className="mt-1 text-lg text-gray-400">Centurion Defence Academy</p>
                <p className="mb-4 text-sm text-gray-500">2025 – Present</p>
                <ul className="list-disc space-y-2 pl-5 text-gray-300">
                  <li>Manage large creative projects (metro pillar graphics, hoardings, standees, books, brochures)</li>
                  <li>Design social media creatives</li>
                  <li>Guide and supervise the design team</li>
                  <li>Improve workflow efficiency and design quality</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-white/20 border-2 border-[#121212]" />
                <h4 className="text-2xl font-semibold">Junior Graphic Designer</h4>
                <p className="mt-1 text-lg text-gray-400">Centurion Defence Academy</p>
                <p className="mb-4 text-sm text-gray-500">Lucknow • 2024 – 2025</p>
                <ul className="list-disc space-y-2 pl-5 text-gray-300">
                  <li>YouTube thumbnails</li>
                  <li>Social media posts</li>
                  <li>Product creatives</li>
                  <li>Website banners</li>
                  <li>Motion graphics projects</li>
                  <li>Improved design speed and visual quality</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="mb-10 flex items-center gap-4">
              <GraduationCap className="h-8 w-8 text-gray-400" />
              <h3 className="text-3xl font-bold md:text-4xl">Education</h3>
            </div>
            
            <div className="space-y-12 border-l border-white/10 pl-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-white/20 border-2 border-[#121212]" />
                <h4 className="text-2xl font-semibold">Diploma in Graphic Designing & Multimedia</h4>
                <p className="mt-1 text-lg text-gray-400">Wisdom College of Creativity & Design</p>
                <p className="text-sm text-gray-500">2023 – 2024</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-white/20 border-2 border-[#121212]" />
                <h4 className="text-2xl font-semibold">B.A Honours (Arts)</h4>
                <p className="mt-1 text-lg text-gray-400">B.M Memorial College</p>
                <p className="text-sm text-gray-500">2020 – 2023</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-white/20 border-2 border-[#121212]" />
                <h4 className="text-2xl font-semibold">Intermediate (PCB Stream)</h4>
                <p className="mt-1 text-lg text-gray-400">KPSSPP Inter College</p>
                <p className="text-sm text-gray-500">2018 – 2020</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
