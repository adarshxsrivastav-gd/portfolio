"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative z-10 bg-[#121212] px-8 py-20 text-white md:px-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-8 text-3xl font-bold md:text-5xl">About Me</h3>
          <p className="text-xl leading-relaxed text-gray-300 md:text-2xl">
            Graphic Designer with 2+ years of experience in social media creatives, brand identity systems, and digital marketing visuals. Strong understanding of audience behavior, color hierarchy, and modern design trends. Skilled in design and AI tools to transform ideas into impactful visual content.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
