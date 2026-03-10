"use client";

import { motion } from "framer-motion";

const EXPERTISE = [
  { id: 1, title: "Social Media Creatives", category: "Design" },
  { id: 2, title: "Brand Identity Design", category: "Branding" },
  { id: 3, title: "Digital Marketing Visuals", category: "Marketing" },
  { id: 4, title: "YouTube Thumbnails", category: "Content Creation" },
  { id: 5, title: "Motion Graphics", category: "Video Editing" },
  { id: 6, title: "Product Creatives", category: "Design" },
  { id: 7, title: "Website Banners", category: "Web Design" },
  { id: 8, title: "Print Media Design", category: "Print" },
];

export default function Expertise() {
  return (
    <section className="relative z-10 bg-[#121212] px-8 py-32 text-white md:px-24">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-16 text-3xl font-bold md:text-5xl">Design Expertise</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EXPERTISE.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group cursor-default rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10"
            >
              <h4 className="mb-2 text-2xl font-semibold">{item.title}</h4>
              <p className="text-gray-400">{item.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
