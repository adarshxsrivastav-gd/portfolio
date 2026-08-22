"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import Testimonials from "./Testimonials";

export default function Experience() {
  return (
    <section className="relative z-10 min-h-[500px] bg-[#FAF8F5] transition-colors duration-300 dark:bg-[#0B0B0C] px-6 sm:px-8 py-24 md:py-32 text-[#16150F] dark:text-[#F2F0ED] md:px-24 border-b border-black/[0.08] dark:border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-24">
          
          {/* Work Experience */}
          <div className="w-full">
            <div className="mb-10 flex flex-col md:flex-row items-start md:items-center gap-4">
              <Briefcase className="h-9 w-9 text-[#C2410C] dark:text-[#FF7A18]" />
              <h3 className="text-3xl font-extrabold tracking-tight md:text-5xl text-[#16150F] dark:text-[#F2F0ED]">Experience</h3>
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
                <h4 className="text-2xl font-bold text-[#16150F] dark:text-[#F2F0ED]">Senior Executive – Graphic Designer</h4>
                <p className="mt-1 text-lg font-medium text-[#6B6862] dark:text-[#8A8A8F]">
                  Gyandhara Industries Pvt. Ltd. <span className="text-sm font-normal text-[#6B6862] dark:text-[#8A8A8F]">(Sister Brand of Gyan)</span>
                </p>
                <p className="mb-4 text-xs font-bold tracking-widest text-[#C2410C] dark:text-[#FF7A18] uppercase">21 April 2026 – Present</p>
                <ul className="list-disc space-y-2 pl-5 text-[#6B6862] dark:text-[#8A8A8F]">
                  <li>Led the creation and rebranding of existing design assets, developing a more modern, engaging, and consistent visual identity for Gyandhara</li>
                  <li>Worked on strengthening Gyandhara’s social media presence by developing creative content and strategies to improve digital engagement and public visibility</li>
                  <li>Created new creative concepts and content ideas to enhance brand communication and audience engagement across digital platforms</li>
                  <li>Wrote, edited, and developed scripts for videos, ensuring content aligned with the organization’s communication goals and target audience</li>
                  <li>Edited and produced video content for social media and promotional campaigns, focusing on storytelling, visual quality, and audience engagement</li>
                  <li>Contributed creative ideas for campaigns, social media content, branding, and public-facing communication</li>
                  <li>Worked on the development and creative utilization of Gyandhara’s mascot, “Molly,” for branding, communication, and audience engagement</li>
                  <li>Supported initiatives aimed at increasing Gyandhara’s public presence, brand awareness, and digital reach through integrated design, content, video, and social media efforts</li>
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
                <h4 className="text-2xl font-bold text-[#16150F] dark:text-[#F2F0ED]">Senior Graphic Designer | Team Leader</h4>
                <p className="mt-1 text-lg font-medium text-[#6B6862] dark:text-[#8A8A8F]">Centurion Defence Academy</p>
                <p className="mb-4 text-xs font-bold tracking-widest text-[#C2410C] dark:text-[#FF7A18] uppercase">2025 – 30 March 2026</p>
                <ul className="list-disc space-y-2 pl-5 text-[#6B6862] dark:text-[#8A8A8F]">
                  <li>Managed large-scale creative projects including metro pillar graphics, hoardings, standees, books and brochures totaling 50+ deliverables</li>
                  <li>Designed 100+ social media creatives driving consistent brand growth across platforms</li>
                  <li>Led and mentored a design team of 3+ members ensuring quality and deadline compliance</li>
                  <li>Improved overall team workflow efficiency by 40% through structured review and feedback processes</li>
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
                <h4 className="text-2xl font-bold text-[#16150F] dark:text-[#F2F0ED]">Junior Graphic Designer</h4>
                <p className="mt-1 text-lg font-medium text-[#6B6862] dark:text-[#8A8A8F]">Centurion Defence Academy</p>
                <p className="mb-4 text-xs font-bold tracking-widest text-[#C2410C] dark:text-[#FF7A18] uppercase">Lucknow • 2024 – 2025</p>
                <ul className="list-disc space-y-2 pl-5 text-[#6B6862] dark:text-[#8A8A8F]">
                  <li>Designed 200+ YouTube thumbnails resulting in improved click-through rates for the channel</li>
                  <li>Created 150+ social media posts maintaining consistent brand identity across all platforms</li>
                  <li>Produced 50+ product creatives and website banners for digital marketing campaigns</li>
                  <li>Produced 30+ motion graphics projects for campaign and channel use</li>
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
              <h3 className="text-3xl font-extrabold tracking-tight md:text-5xl text-[#16150F] dark:text-[#F2F0ED]">Education</h3>
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
                <h4 className="text-2xl font-bold text-[#16150F] dark:text-[#F2F0ED]">Diploma in Graphic Designing & Multimedia</h4>
                <p className="mt-1 text-lg font-medium text-[#6B6862] dark:text-[#8A8A8F]">Wisdom College of Creativity & Design</p>
                <p className="text-xs font-bold tracking-widest text-[#C2410C] dark:text-[#FF7A18] uppercase">2023 – 2024</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="relative"
              >
                <div className="absolute -left-[37px] top-1.5 h-3.5 w-3.5 rounded-full bg-[#6B6862] dark:bg-[#8A8A8F] border-2 border-[#FAF8F5] dark:border-[#0B0B0C]" />
                <h4 className="text-2xl font-bold text-[#16150F] dark:text-[#F2F0ED]">B.A Honours (Arts)</h4>
                <p className="mt-1 text-lg font-medium text-[#6B6862] dark:text-[#8A8A8F]">B.M Memorial College</p>
                <p className="text-xs font-bold tracking-widest text-[#C2410C] dark:text-[#FF7A18] uppercase">2020 – 2023</p>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
