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
  {
    src: "/images/social_media_creative_1_1773251424221.png",
    alt: "Centurion Digital Learning App Features",
    title: "Digital Learning App Showcase",
  },
  {
    src: "/images/social_media_creative_2_1773251443148.png",
    alt: "NDA Crack Kit Book Combo",
    title: "NDA Crack Kit Preparation",
  },
  {
    src: "/images/social_media_creative_3_1773251460500.png",
    alt: "Student Portal Mobile App Interface",
    title: "Student Portal Mobile App",
  },
  {
    src: "/images/social_media_creative_4_1773251475375.png",
    alt: "Defence Exam Prep All-in-One Portal",
    title: "All-in-One Prep Portal",
  },
  {
    src: "/images/portfolio_creative_1.jpg",
    alt: "All-in-One Defence Exam Portal Mockup",
    title: "Defence Platform Interface",
  },
  {
    src: "/images/portfolio_creative_2.png",
    alt: "Student Success Testimonials Post",
    title: "Academy Success Stories",
  },
  {
    src: "/images/portfolio_creative_3.jpg",
    alt: "Online Crash Course App View",
    title: "Digital Learning Campaign",
  },
  {
    src: "/images/portfolio_creative_4.jpg",
    alt: "Offline Batch Launch Classroom Creative",
    title: "Classroom Training Promotion",
  },
  {
    src: "/images/portfolio_creative_5.jpg",
    alt: "Comprehensive Prep App Multi-device",
    title: "Multi-Platform App Showcase",
  },
  {
    src: "/images/portfolio_creative_6.jpg",
    alt: "Defence Academy Shudh Ghee Product Focus",
    title: "Shudh Ghee Product Shot",
  },
  {
    src: "/images/portfolio_creative_7.jpg",
    alt: "Defence Academy Offline Crash Course Promotion",
    title: "Offline Crash Course Promo",
  },
  {
    src: "/images/portfolio_creative_8.jpg",
    alt: "Centurion Defence Academy App Dashboard",
    title: "Digital App Dashboard",
  },
  {
    src: "/images/portfolio_creative_9.jpg",
    alt: "Desi Ghee Family Traditional Breakfast",
    title: "Family Tradition Lifestyle",
  },
  {
    src: "/images/portfolio_creative_10.jpg",
    alt: "Desi Ghee Bilona Process Description",
    title: "Bilona Process Infographic",
  },
  {
    src: "/images/portfolio_creative_11.jpg",
    alt: "NDA Jaguar Features Promotion",
    title: "NDA Jaguar Features",
  },
  {
    src: "/images/portfolio_creative_12.jpg",
    alt: "Centurion Digital App Multi-device preview",
    title: "Digital App Multi-Device",
  },
  {
    src: "/images/portfolio_creative_13.jpg",
    alt: "Territorial Army 2025 Mobile Mockup",
    title: "Territorial Army Campaign",
  },
  {
    src: "/images/portfolio_creative_14.jpg",
    alt: "Multi Layer Defence In Action Infographic",
    title: "Missile Defence Infographic",
  },
  {
    src: "/images/portfolio_creative_15.jpg",
    alt: "Favourite Defence Coach Promotion",
    title: "Defence Coach Promotion",
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
