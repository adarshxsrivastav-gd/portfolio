"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

const SOCIAL_MEDIA_IMAGES = [
  // TIER 1 - Maximum Impact: UI Mockups & Modern App Designs
  {
    src: "/images/centurion_app.jpg",
    alt: "Centurion Defence Academy App Dashboard Complete",
    title: "App Download Campaign",
  },
  {
    src: "/images/mock_test.jpg",
    alt: "All India Mock Test Scholarship 3D Typography",
    title: "Mock Test Scholarship Banner",
  },
  {
    src: "/images/portfolio_creative_8.jpg",
    alt: "Centurion Defence Academy App Dashboard",
    title: "App Dashboard Showcase",
  },
  {
    src: "/images/portfolio_creative_1.jpg",
    alt: "All-in-One Defence Exam Portal Mockup",
    title: "Platform UI Showcase",
  },
  {
    src: "/images/portfolio_creative_5.jpg",
    alt: "Comprehensive Prep App Multi-device",
    title: "Multi-Platform App Intro",
  },
  {
    src: "/images/portfolio_creative_12.jpg",
    alt: "Centurion Digital App Multi-device preview",
    title: "Device Mockup Creative",
  },
  
  // TIER 2 - High Fidelity 3D Product Mockups
  {
    src: "/images/media__1773943477865.png",
    alt: "Orancia Herbal Hair Oil Front Product View",
    title: "Product Showcase Design",
  },
  {
    src: "/images/media__1773943477825.png",
    alt: "Why Choose Orancia Hair Oil Value Poster",
    title: "Brand Value Promotion",
  },
  {
    src: "/images/media__1773943553985.jpg",
    alt: "Orancia Body Wash Stones Outdoor Concept",
    title: "Outdoor Product Campaign",
  },
  {
    src: "/images/media__1773943553965.jpg",
    alt: "Orancia Body Wash Pink Platform Studio",
    title: "Studio Product Promo",
  },
  {
    src: "/images/portfolio_creative_6.jpg",
    alt: "Defence Academy Shudh Ghee Product Focus",
    title: "Product Highlight Banner",
  },
  {
    src: "/images/media__1773943477725.png",
    alt: "Orancia Key Ingredients Educational Map",
    title: "Ingredient Infographic Post",
  },
  
  // TIER 3 - Strong Graphics & Infographics Context
  {
    src: "/images/portfolio_creative_9.jpg",
    alt: "Desi Ghee Family Traditional Breakfast",
    title: "Lifestyle Branding Creative",
  },
  {
    src: "/images/portfolio_creative_11.jpg",
    alt: "NDA Jaguar Features Promotion",
    title: "Feature Highlight Banner",
  },
  {
    src: "/images/media__1773943013451.jpg",
    alt: "Centurion Digital App Launch Campaign",
    title: "App Launch Campaign",
  },
  {
    src: "/images/portfolio_creative_13.jpg",
    alt: "Territorial Army 2025 Mobile Mockup",
    title: "Recruitment Ad Campaign",
  },
  {
    src: "/images/media__1773943013359.jpg",
    alt: "Navratri Defense Academy Festive Branding",
    title: "Festive Brand Awareness",
  },
  {
    src: "/images/portfolio_creative_14.jpg",
    alt: "Multi Layer Defence In Action Infographic",
    title: "Defense Infographic Post",
  },
  {
    src: "/images/portfolio_creative_10.jpg",
    alt: "Desi Ghee Bilona Process Description",
    title: "Educational Infographic Post",
  },
  
  // TIER 4 - Standard Marketing, Testimonials & Ads
  {
    src: "/images/portfolio_creative_2.png",
    alt: "Student Success Testimonials Post",
    title: "Student Success Testimonial",
  },
  {
    src: "/images/media__1773255390396.jpg",
    alt: "NDA Mock Test Promotional Creative",
    title: "Exam Prep Promotion",
  },
  {
    src: "/images/portfolio_creative_3.jpg",
    alt: "Online Crash Course App View",
    title: "Online Course Promotion",
  },
  {
    src: "/images/media__1773255391027.jpg",
    alt: "New Year Defense Academy Sale Ad",
    title: "Festive Sale Creative",
  },
  {
    src: "/images/media__1773255390669.jpg",
    alt: "Indian Air Force Day Creative",
    title: "Event Awareness Design",
  },
  {
    src: "/images/portfolio_creative_15.jpg",
    alt: "Favourite Defence Coach Promotion",
    title: "Instructor Profile Banner",
  },
  
  // TIER 5 - Basic Photography & Clean Layouts 
  {
    src: "/images/media__1773255387478.jpg",
    alt: "Defense Academy Uniform Campaign",
    title: "Motivational Branding Post",
  },
  {
    src: "/images/media__1773255388246.jpg",
    alt: "Defense Academy Physical Training Layout",
    title: "Training Awareness Campaign",
  },
  {
    src: "/images/portfolio_creative_4.jpg",
    alt: "Offline Batch Launch Classroom Creative",
    title: "Classroom Training Ad",
  },
  {
    src: "/images/portfolio_creative_7.jpg",
    alt: "Defence Academy Offline Crash Course Promotion",
    title: "Crash Course Promotion",
  },
];

export default function SocialMediaCreativesPage() {
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
            Social Media Creatives
          </h1>
          <p className="max-w-3xl text-lg text-[#6B6862] dark:text-[#8A8A8F] md:text-xl mb-12">
            Data-driven visuals designed to maximize audience engagement and rapidly scale brand presence across social platforms.
          </p>
        </motion.div>

        <ImageGallery images={SOCIAL_MEDIA_IMAGES} aspectRatio="aspect-square" objectFit="object-contain" />
      </div>
    </main>
  );
}
