"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

const YOUTUBE_THUMBNAILS = [
  {
    src: "/images/media__1773560314641.jpg",
    alt: "Decoding Tejas Fighter Jet Analysis Thumbnail",
    title: "Tejas Jet Analysis",
  },
  {
    src: "/images/media__1773560314692.jpg",
    alt: "Failure to Success Strategies Thumbnail",
    title: "Success Strategies Story",
  },
  {
    src: "/images/media__1773560314719.jpg",
    alt: "Career Advice Early Start at 18 Thumbnail",
    title: "Career Advice Discussion",
  },
  {
    src: "/images/media__1773560319377.jpg",
    alt: "Major General's Blueprint to Officer Thumbnail",
    title: "Officer Blueprint Guide",
  },
  {
    src: "/images/media__1773560319759.jpg",
    alt: "Bonding Beyond Classrooms Student Life Thumbnail",
    title: "Academy Student Life",
  },
  {
    src: "/images/media__1773561070100.jpg",
    alt: "Saudi-Pak Ties Analysis Thumbnail",
    title: "Saudi-Pak Ties Analysis",
  },
  {
    src: "/images/media__1773561071250.png",
    alt: "MK-1 Tejas Roars Episode 50 Thumbnail",
    title: "MK-1 Tejas Episode",
  },
];

export default function YouTubeThumbnailsPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <div className="mx-auto max-w-7xl px-8 py-24 md:px-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
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
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            YouTube Thumbnails
          </h1>
          <p className="max-w-3xl text-lg text-gray-300 md:text-xl">
            A showcase of high-converting, visually engaging YouTube thumbnails. 
            Each design is strategically crafted to maximize Click-Through Rate (CTR), 
            capture viewer attention, and clearly communicate the core message of the video.
          </p>
        </motion.div>

        <ImageGallery 
          images={YOUTUBE_THUMBNAILS} 
          aspectRatio="aspect-video" 
          objectFit="object-contain" 
        />
      </div>
    </main>
  );
}
