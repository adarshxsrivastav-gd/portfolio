"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import Testimonials from "./Testimonials";

export default function Experience() {
  return (
    <section className="relative z-10 bg-gray-50 transition-colors duration-300 dark:bg-[#121212] px-8 py-20 text-gray-900 dark:text-white md:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-24">
          
          {/* Work Experience */}
          <div className="w-full">
            <div className="mb-10 flex flex-col md:flex-row items-start md:items-center gap-4">
              <Briefcase className="h-10 w-10 text-cyan-600 dark:text-cyan-400" />
              <h3 className="text-3xl font-bold md:text-5xl">Experience</h3>
            </div>
            
            <div className="space-y-12 border-l-2 border-cyan-500/20 dark:border-cyan-500/20 pl-8 ml-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -left-[42px] top-1.5 h-4 w-4 rounded-full bg-cyan-500 border-4 border-gray-50 dark:border-[#121212] shadow-[0_0_10px_rgba(6,182,212,0.6)]" />
                <h4 className="text-2xl font-bold">Senior Graphic Designer | Team Leader</h4>
                <p className="mt-1 text-lg font-medium text-gray-600 dark:text-gray-300">Centurion Defence Academy</p>
                <p className="mb-4 text-sm font-semibold tracking-wide text-cyan-600 dark:text-cyan-400 uppercase">2025 – Present</p>
                <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                  <li>Managed large-scale creative projects including metro pillar graphics, hoardings, standees, books and brochures totaling 50+ deliverables</li>
                  <li>Designed 100+ social media creatives driving consistent brand growth across platforms</li>
                  <li>Led and mentored a design team of 3+ members ensuring quality and deadline compliance</li>
                  <li>Improved overall team workflow efficiency by 40% through structured review and feedback processes</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="relative"
              >
                <div className="absolute -left-[42px] top-1.5 h-4 w-4 rounded-full bg-cyan-500/50 border-4 border-gray-50 dark:border-[#121212]" />
                <h4 className="text-2xl font-bold">Junior Graphic Designer</h4>
                <p className="mt-1 text-lg font-medium text-gray-600 dark:text-gray-300">Centurion Defence Academy</p>
                <p className="mb-4 text-sm font-semibold tracking-wide text-cyan-600 dark:text-cyan-400 uppercase">Lucknow • 2024 – 2025</p>
                <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                  <li>Designed 200+ YouTube thumbnails resulting in improved click-through rates for the channel</li>
                  <li>Created 150+ social media posts maintaining consistent brand identity across all platforms</li>
                  <li>Produced 50+ product creatives and website banners for digital marketing campaigns</li>
                  <li>Delivered 30+ motion graphics projects on time with zero revision rejections</li>
                  <li>Improved personal design speed by 60% through mastering keyboard shortcuts and batch workflows</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Testimonials (What People Say) */}
          <Testimonials />

          {/* Education */}
          <div className="w-full">
            <div className="mb-10 flex flex-col md:flex-row items-start md:items-center gap-4">
              <GraduationCap className="h-10 w-10 text-cyan-600 dark:text-cyan-400" />
              <h3 className="text-3xl font-bold md:text-5xl">Education</h3>
            </div>
            
            <div className="space-y-12 border-l-2 border-cyan-500/20 dark:border-cyan-500/20 pl-8 ml-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -left-[42px] top-1.5 h-4 w-4 rounded-full bg-cyan-500/50 border-4 border-gray-50 dark:border-[#121212]" />
                <h4 className="text-2xl font-bold">Diploma in Graphic Designing & Multimedia</h4>
                <p className="mt-1 text-lg font-medium text-gray-600 dark:text-gray-300">Wisdom College of Creativity & Design</p>
                <p className="text-sm font-semibold tracking-wide text-cyan-600 dark:text-cyan-400 uppercase">2023 – 2024</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="relative"
              >
                <div className="absolute -left-[42px] top-1.5 h-4 w-4 rounded-full bg-cyan-500/50 border-4 border-gray-50 dark:border-[#121212]" />
                <h4 className="text-2xl font-bold">B.A Honours (Arts)</h4>
                <p className="mt-1 text-lg font-medium text-gray-600 dark:text-gray-300">B.M Memorial College</p>
                <p className="text-sm font-semibold tracking-wide text-cyan-600 dark:text-cyan-400 uppercase">2020 – 2023</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute -left-[42px] top-1.5 h-4 w-4 rounded-full bg-cyan-500/50 border-4 border-gray-50 dark:border-[#121212]" />
                <h4 className="text-2xl font-bold">Intermediate (PCB Stream)</h4>
                <p className="mt-1 text-lg font-medium text-gray-600 dark:text-gray-300">KPSSPP Inter College</p>
                <p className="text-sm font-semibold tracking-wide text-cyan-600 dark:text-cyan-400 uppercase">2018 – 2020</p>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
