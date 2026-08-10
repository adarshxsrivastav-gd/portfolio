"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

const PRODUCT_CREATIVES = [
  {
    src: "/images/media__1773943874639.png",
    alt: "Corise Pro-Heal About Us Trifold Brochure",
    title: "Product Information Brochure",
  },
  {
    src: "/images/media__1773943874084.png",
    alt: "Corise Pro-Heal Product Benefits Details",
    title: "Feature Highlight Poster",
  },
  {
    src: "/images/media__1773943873840.png",
    alt: "Corise Pro-Heal Packaging Box Design",
    title: "Packaging Design Showcase",
  },
  {
    src: "/images/media__1773943873345.png",
    alt: "Corise Pro-Heal Label Die Line Architecture",
    title: "Product Label Blueprint",
  },
  {
    src: "/images/media__1773943871967.png",
    alt: "Corise Pro-Heal Model Promotion Poster",
    title: "Lifestyle Branding Poster",
  },
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
            Product Creatives
          </h1>
          <p className="max-w-3xl text-lg text-[#6B6862] dark:text-[#8A8A8F] md:text-xl mb-12">
            Conversion-focused product imagery elegantly tailored to spotlight key features and accelerate digital e-commerce sales.
          </p>
        </motion.div>

        <ImageGallery images={PRODUCT_CREATIVES} aspectRatio="aspect-[4/3]" objectFit="object-contain" />
      </div>
    </main>
  );
}
