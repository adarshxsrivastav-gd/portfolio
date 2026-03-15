"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

const PRODUCT_CREATIVES = [
  {
    src: "/images/media__1773555878411.jpg",
    alt: "Placeholder Product Creative 1",
    title: "Premium Product Reveal",
  },
  {
    src: "/images/media__1773555877635.jpg",
    alt: "Placeholder Product Creative 2",
    title: "Product Feature Highlight",
  },
];

export default function ProductCreativesPage() {
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
            Product Creatives
          </h1>
          <p className="max-w-3xl text-lg text-gray-300 md:text-xl mb-12">
            High-fidelity product mockups, 3D renderings, and lifestyle composites that highlight key features and drive e-commerce engagement.
          </p>
        </motion.div>

        <ImageGallery images={PRODUCT_CREATIVES} />
      </div>
    </main>
  );
}
