"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const EXPERTISE = [
  { 
    id: 1, 
    title: "Social Media Creatives", 
    category: "Design",
    image: "/images/centurion_app.jpg",
  },
  { 
    id: 3, 
    title: "Logo Design", 
    category: "Marketing",
    image: "/images/media__1773563365931.png",
  },
  { 
    id: 4, 
    title: "YouTube Thumbnails", 
    category: "Content Creation",
    image: "/images/yt_thumb_1.jpg",
  },
  { 
    id: 5, 
    title: "Video & Motions", 
    category: "Video Editing", 
    image: "/images/video_motions_custom.png",
    externalLink: "https://www.behance.net/gallery/246104735/Motions-Video",
  },
  { 
    id: 6, 
    title: "Product Creatives", 
    category: "Design",
    image: "/images/product_creatives_custom.png",
  },
  { 
    id: 7, 
    title: "Website Banners", 
    category: "Web Design",
    image: "/images/website_banners_custom.jpg",
  },
  { 
    id: 8, 
    title: "Print Media Design", 
    category: "Print",
    image: "/images/media__1773563674653.jpg",
  },
];

export default function Expertise() {
  return (
    <section id="design-expertise" className="relative z-10 bg-gray-50 transition-colors duration-300 dark:bg-[#121212] px-8 py-32 md:px-24">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-16 text-3xl font-bold md:text-5xl text-gray-900 dark:text-white">
          Design Expertise
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERTISE.map((item, i) => {
            const currentRoute = item.externalLink || `/${item.title.toLowerCase().replace(/\s+/g, '-')}`;

            return (
              <Link
                href={currentRoute}
                key={item.id}
                className="group block"
                {...(item.externalLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col h-[280px] w-full overflow-hidden rounded-[12px] border border-black/10 dark:border-white/10 transition-all duration-300 group-hover:-translate-y-[6px] group-hover:border-cyan-500 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] bg-[#1a2535]"
                >
                  {/* Image Area: Top 60% */}
                  <div className="relative h-[60%] w-full overflow-hidden bg-gray-900">
                    
                    {/* Underlying Image Array */}
                    <div className="absolute inset-0">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-cover opacity-[0.35] blur-[1.5px] transition-all duration-500 group-hover:blur-0 group-hover:scale-105" 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Dark Blue Wash Overlay matching rgba(15, 25, 50) */}
                    <div className="absolute inset-0 z-10 transition-colors duration-500 bg-[#0f1932]/[0.55] group-hover:bg-[#0f1932]/30 pointer-events-none" />

                    {/* View Work Badge */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                      <span className="rounded-full border border-white/40 bg-black/50 px-6 py-2 text-sm font-semibold text-white backdrop-blur-md transition-transform duration-500 scale-95 group-hover:scale-100">
                        View Work
                      </span>
                    </div>
                  </div>

                  {/* Text Content Area: Bottom 40% */}
                  <div className="flex h-[40%] flex-col justify-center px-6 relative z-30 bg-[#1a2535]">
                    <h4 className="text-[16px] font-bold text-white mb-2">{item.title}</h4>
                    <div className="w-fit rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                      {item.category}
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
