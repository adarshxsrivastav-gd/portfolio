"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

const SOCIAL_MEDIA_IMAGES = [
  {
    src: "/images/media__1773255387478.jpg",
    alt: "Defense Academy Uniform Campaign",
    title: "Uniform Motivation Campaign",
  },
  {
    src: "/images/media__1773255388246.jpg",
    alt: "Defense Academy Physical Training Layout",
    title: "Physical Training Showcase",
  },
  {
    src: "/images/media__1773255390396.jpg",
    alt: "NDA Mock Test Promotional Creative",
    title: "Mock Test Promotional Design",
  },
  {
    src: "/images/media__1773255390669.jpg",
    alt: "Indian Air Force Day Creative",
    title: "Air Force Day Celebration",
  },
  {
    src: "/images/media__1773255391027.jpg",
    alt: "New Year Defense Academy Sale Ad",
    title: "New Year Sale Activation",
  },
];

export default function SocialMediaCreativesPage() {
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
            Social Media Creatives
          </h1>
          <p className="max-w-3xl text-lg text-gray-300 md:text-xl">
            A showcase of my expertise in designing engaging social media posts,
            vibrant Instagram creatives, eye-catching YouTube thumbnails, and
            conversion-focused digital marketing visuals. Each piece is crafted
            to capture attention instantly and leave a lasting impression.
          </p>
        </motion.div>

        <ImageGallery images={SOCIAL_MEDIA_IMAGES} />
      </div>
    </main>
  );
}
