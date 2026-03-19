"use client";

import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Link from "next/link";

const EXPERTISE = [
  { 
    id: 1, 
    title: "Social Media Creatives", 
    category: "Design",
    description: "Data-driven visuals designed to maximize audience engagement and rapidly scale brand presence across social platforms."
  },
  { 
    id: 3, 
    title: "Logo Design", 
    category: "Marketing",
    description: "Distinctive, memorable brand identities crafted to establish profound trust, recognition, and long-term market authority."
  },
  { 
    id: 4, 
    title: "YouTube Thumbnails", 
    category: "Content Creation",
    description: "High-CTR, click-optimized thumbnail layouts built strategically to capture viewer attention and drive massive channel growth."
  },
  { 
    id: 5, 
    title: "Video & Motions", 
    category: "Video Editing", 
    externalLink: "https://www.behance.net/gallery/246104735/Motions-Video",
    description: "Dynamic motion graphics and seamless video edits that transform static ideas into captivating, immersive visual stories."
  },
  { 
    id: 6, 
    title: "Product Creatives", 
    category: "Design",
    description: "Conversion-focused product imagery elegantly tailored to spotlight key features and accelerate digital e-commerce sales."
  },
  { 
    id: 7, 
    title: "Website Banners", 
    category: "Web Design",
    description: "Strategic web visuals engineered to enhance overall user experience, highlight crucial promotions, and improve digital conversions."
  },
  { 
    id: 8, 
    title: "Print Media Design", 
    category: "Print",
    description: "Premium, typography-focused print-ready layouts designed to leave a lasting tactile impression and elevate real-world marketing."
  },
];

export default function Expertise() {
  return (
    <section id="design-expertise" className="relative z-10 bg-gray-50 transition-colors duration-300 dark:bg-[#121212] px-8 py-32 text-gray-900 dark:text-white md:px-24">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-16 text-3xl font-bold md:text-5xl">Design Expertise</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EXPERTISE.map((item, i) => {
            // Convert title to a URL-friendly slug (e.g., "Motion Graphics" -> "/motion-graphics")
            const currentRoute = item.externalLink || `/${item.title.toLowerCase().replace(/\s+/g, '-')}`;

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
                  className="relative z-10 h-full w-full rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-black/10 dark:bg-white/10"
                >
                  <h4 className="mb-2 text-2xl font-semibold">{item.title}</h4>
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">{item.category}</p>
                </motion.div>
              </>
            );

            return (
              <Link
                href={currentRoute}
                key={item.id}
                className="relative group rounded-2xl block"
                {...(item.externalLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {CardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
