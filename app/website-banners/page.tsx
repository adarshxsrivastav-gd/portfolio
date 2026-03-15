"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

const WEBSITE_BANNERS = [
  {
    src: "/images/media__1773555643427.jpg",
    alt: "Placeholder Banner 1",
    title: "Homepage Hero Banner",
  },
  {
    src: "/images/media__1773555643550.jpg",
    alt: "Placeholder Banner 2",
    title: "Promotional Banner Design",
  },
];

export default function WebsiteBannersPage() {
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
            Website Banners
          </h1>
          <p className="max-w-3xl text-lg text-gray-300 md:text-xl mb-12">
            Engaging, high-conversion website banners and header hero images formatted across various device aspect ratios.
          </p>
        </motion.div>

        <ImageGallery images={WEBSITE_BANNERS} aspectRatio="aspect-[21/9]" objectFit="object-cover" />
      </div>
    </main>
  );
}
