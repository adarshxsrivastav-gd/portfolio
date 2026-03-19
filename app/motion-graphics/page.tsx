"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

const MOTION_GRAPHICS = [
  {
    src: "/images/media__1773554044425.png",
    alt: "Placeholder Motion Graphic 1",
    title: "Dynamic Promo Intro",
  },
  {
    src: "/images/media__1773554045679.jpg",
    alt: "Placeholder Motion Graphic 2",
    title: "Explainer Video Assets",
  },
];

export default function MotionGraphicsPage() {
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
            className="mb-8 inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
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
            Motion Graphics
          </h1>
          <p className="max-w-3xl text-lg text-gray-700 dark:text-gray-300 md:text-xl mb-12">
            Dynamic motion graphics and seamless video edits that transform static ideas into captivating, immersive visual stories.
          </p>
        </motion.div>

        <ImageGallery images={MOTION_GRAPHICS} aspectRatio="aspect-video" objectFit="object-contain" />
      </div>
    </main>
  );
}
