"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

const PRINT_MEDIA = [
  {
    src: "/images/media__1773563674653.jpg",
    alt: "Eat n Talk Restaurant Menu Cover",
    title: "Restaurant Menu Cover",
  },
  {
    src: "/images/media__1773563674689.jpg",
    alt: "Tea & Coffee Cafe Menu Design",
    title: "Cafe Beverage Menu",
  },
  {
    src: "/images/media__1773563674760.jpg",
    alt: "Fast Food Combos Menu Layout",
    title: "Fast Food Combos Layout",
  },
  {
    src: "/images/media__1773563674803.jpg",
    alt: "Burger Joint Menu Design",
    title: "Burger Joint Menu",
  },
  {
    src: "/images/media__1773563675045.png",
    alt: "Sarthak Foundation Kraft Paper Bag Packaging",
    title: "Kraft Bag Packaging",
  },
  {
    src: "/images/media__1773563815606.png",
    alt: "Sunset Gym T-Shirt Mockup",
    title: "Gym Apparel T-Shirt",
  },
  {
    src: "/images/media__1773563814803.png",
    alt: "Indian Wedding Invitation Card",
    title: "Wedding Invitation Card",
  },
];

export default function PrintMediaPage() {
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
            Print Media Design
          </h1>
          <p className="max-w-3xl text-lg text-gray-300 md:text-xl mb-12">
            Beautifully precise printable designs including brochures, flyers, business cards, and outdoor marketing hoardings tailored for physical layouts.
          </p>
        </motion.div>

        <ImageGallery images={PRINT_MEDIA} aspectRatio="aspect-[3/4]" objectFit="object-cover" />
      </div>
    </main>
  );
}
