"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface ExpertiseItem {
  id: number;
  title: string;
  category: string;
  image: string;
  externalLink?: string;
  route?: string;
}

const EXPERTISE: ExpertiseItem[] = [
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
    route: "/video-and-motions",
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
    <section id="design-expertise" className="relative z-10 bg-[#FAF8F5] transition-colors duration-300 dark:bg-[#0B0B0C] px-6 sm:px-8 py-24 md:py-32 md:px-24">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-16 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-[#16150F] dark:text-[#F2F0ED]">
          Design Expertise
        </h3>
        
        {/* CSS Grid: 4 cols at 1440px+ (xl:grid-cols-4), 3 cols laptop (lg:grid-cols-3), 2 cols tablet (md:grid-cols-2), 1 col mobile (grid-cols-1). Gap: 20px */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
          {EXPERTISE.map((item, i) => {
            const currentRoute = item.route || item.externalLink || `/${item.title.toLowerCase().replace(/\s+/g, '-')}`;

            return (
              <Link
                href={currentRoute}
                key={item.id}
                className="group block h-full select-none"
                {...(item.externalLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col h-full w-full overflow-hidden rounded-[12px] border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#141416] transition-all duration-300"
                >
                  {/* Image Container: 4:3 Aspect Ratio, TRUE COLOURS */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF8F5] dark:bg-[#0B0B0C]">
                    {/* Image element only has blur applied on desktop (@media hover/md). On mobile touch screens, blur is 0 to avoid mobile GPU filter repainting on scroll! */}
                    <div className="relative h-full w-full overflow-hidden">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-cover transition-all duration-400 ease-out blur-none md:blur-[8px] md:group-hover:blur-0 group-hover:scale-[1.03] will-change-[filter,transform]" 
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
                      />
                    </div>

                    {/* View Work Label at bottom-right of image (sharp, non-blurred) */}
                    <div className="absolute bottom-3 right-3 z-10 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="rounded-full border border-white/20 bg-black/70 px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
                        View Work
                      </span>
                    </div>
                  </div>

                  {/* Text Content Area: Fixed min-height for uniform card row height */}
                  <div className="flex flex-col justify-between p-4 flex-grow min-h-[115px] bg-white dark:bg-[#141416]">
                    <div>
                      {/* Category Pill */}
                      <div className="mb-2 w-fit rounded-full border border-[#C2410C]/20 dark:border-[#FF7A18]/20 bg-[#C2410C]/10 dark:bg-[#FF7A18]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#C2410C] dark:text-[#FF7A18]">
                        {item.category}
                      </div>
                      
                      {/* Card Title */}
                      <h4 className="text-base font-bold text-[#16150F] dark:text-[#F2F0ED] tracking-tight line-clamp-2">
                        {item.title}
                      </h4>
                    </div>

                    {/* 2px accent line animates from left to right on hover using GPU scaleX transform instead of width reflow */}
                    <div className="mt-3 h-[2px] w-full scale-x-0 group-hover:scale-x-100 origin-left bg-[#C2410C] dark:bg-[#FF7A18] transition-transform duration-300 ease-out" />
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
