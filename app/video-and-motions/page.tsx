"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

const VIDEO_MOTIONS = [
  {
    src: "/images/video_motions_custom.png",
    alt: "Video & Motions Showcase 1",
    title: "Brand Motion Film & Showreel",
  },
  {
    src: "/images/media__1773554044425.png",
    alt: "Video & Motions Showcase 2",
    title: "Campaign Motion Graphic & Promo",
  },
  {
    src: "/images/media__1773554045679.jpg",
    alt: "Video & Motions Showcase 3",
    title: "Channel Explainer & Intro Graphics",
  },
];

export default function VideoAndMotionsPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <div className="mx-auto max-w-7xl px-8 py-24 md:px-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#design-expertise"
            className="mb-8 inline-flex items-center gap-2 text-[#6B6862] dark:text-[#8A8A8F] transition-colors hover:text-[#C2410C] dark:hover:text-[#FF7A18] font-medium"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl text-[#16150F] dark:text-[#F2F0ED]">
            Video & Motions
          </h1>
          <p className="max-w-3xl text-lg text-[#6B6862] dark:text-[#8A8A8F] md:text-xl mb-12">
            Dynamic motion graphics and video editing projects crafted to elevate brand storytelling across digital and broadcast channels.
          </p>
        </motion.div>

        <ImageGallery images={VIDEO_MOTIONS} aspectRatio="aspect-video" objectFit="object-cover" />

        <div className="mt-16 pt-8 border-t border-black/[0.08] dark:border-white/[0.08] flex justify-center">
          <a
            href="https://www.behance.net/gallery/246104735/Motions-Video"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#C2410C] hover:bg-[#9A3412] dark:bg-[#FF7A18] dark:hover:bg-[#FF9147] text-white dark:text-[#0B0B0C] px-8 py-4 text-base font-bold transition-all shadow-sm"
          >
            <span>View more on Behance</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </main>
  );
}
