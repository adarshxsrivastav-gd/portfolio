"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

const LOGO_DESIGNS = [
  {
    src: "/images/media__1773563365931.png",
    alt: "Yoga Studio Logo Design",
    title: "Yoga Studio Brand Identity",
  },
  {
    src: "/images/media__1773563365952.png",
    alt: "Savvy Style Fashion Logo",
    title: "Savvy Style Boutique",
  },
  {
    src: "/images/media__1773563366006.png",
    alt: "Sunset Gym Fitness Logo",
    title: "Sunset Gym Crest",
  },
  {
    src: "/images/media__1773563366019.png",
    alt: "Sarthak Foundation Emblem",
    title: "Sarthak Foundation Emblem",
  },
];

export default function LogoDesignPage() {
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
            Logo Design
          </h1>
          <p className="max-w-3xl text-lg text-gray-700 dark:text-gray-300 md:text-xl mb-12">
            Distinctive, memorable brand identities crafted to establish profound trust, recognition, and long-term market authority.
          </p>
        </motion.div>

        <ImageGallery images={LOGO_DESIGNS} aspectRatio="aspect-square" objectFit="object-contain" />
      </div>
    </main>
  );
}
