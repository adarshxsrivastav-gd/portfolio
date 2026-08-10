"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

const WEBSITE_BANNERS = [
  {
    src: "/images/media__1774126151975.png",
    alt: "Defence Academy Admissions Campaign Banner",
    title: "Admissions Campaign Header",
  },
  {
    src: "/images/media__1774126168812.png",
    alt: "Centurion Digital App Launch Promo Banner",
    title: "App Download Hero Banner",
  }
];

export default function WebsiteBannersPage() {
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
            Website Banners
          </h1>
          <p className="max-w-3xl text-lg text-[#6B6862] dark:text-[#8A8A8F] md:text-xl mb-12">
            Engaging, high-conversion website banners and header hero images formatted across various device aspect ratios.
          </p>
        </motion.div>

        <ImageGallery images={WEBSITE_BANNERS} aspectRatio="aspect-[21/9]" objectFit="object-contain" />
      </div>
    </main>
  );
}
