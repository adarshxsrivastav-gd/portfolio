"use client";

import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Link from "next/link";

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
          {EXPERTISE.map((item, i) => {
            const isClickable = item.title === "Social Media Creatives";
            const CardContent = (
              <>
                <GlowingEffect
                  blur={0}
                  borderWidth={2}
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                  className="relative z-10 h-full w-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10"
                >
                  <h4 className="mb-2 text-2xl font-semibold">{item.title}</h4>
                  <p className="text-gray-400">{item.category}</p>
                </motion.div>
              </>
            );

            return isClickable ? (
              <Link href="/social-media-creatives" key={item.id} className="relative group rounded-2xl block">
                {CardContent}
              </Link>
            ) : (
              <div key={item.id} className="relative group rounded-2xl">
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
