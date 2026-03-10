"use client";

import { motion } from "framer-motion";

const CARDS = [
  { id: 1, title: "Nano Banana UI", category: "Design System" },
  { id: 2, title: "E-Commerce Experience", category: "Web GL" },
  { id: 3, title: "Immersive Portfolio", category: "Creative Dev" },
];

export default function Projects() {
  return (
    <section className="relative z-10 bg-[#121212] px-8 py-32 text-white md:px-24">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-16 text-3xl font-bold md:text-5xl">Selected Work</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10"
            >
              <div className="mb-8 aspect-video w-full rounded-xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <h4 className="mb-2 text-2xl font-semibold">{card.title}</h4>
              <p className="text-gray-400">{card.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
