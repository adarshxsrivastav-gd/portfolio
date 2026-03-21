"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

interface ImageGalleryProps {
  images: { src: string; alt: string; title: string }[];
  aspectRatio?: string;
  objectFit?: string;
}

export function ImageGallery({ images, aspectRatio = "aspect-[4/3]", objectFit = "object-cover" }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 h-full w-full"
            onClick={() => setSelectedImage(img.src)}
          >
            <CardContainer className="h-full w-full" containerClassName="h-full w-full p-0">
              <CardBody className="relative h-[100%] w-full rounded-2xl">
                <GlowingEffect
                  blur={0}
                  borderWidth={2}
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="relative z-10 w-full rounded-2xl overflow-hidden h-full flex flex-col">
                  <CardItem translateZ="50" className={`w-full relative ${aspectRatio} flex-grow`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className={`${objectFit} transition-transform duration-500 group-hover:scale-105`}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
                      <CardItem translateZ="80" as="h4" className="text-xl font-semibold text-gray-900 dark:text-white drop-shadow-md">
                        {img.title}
                      </CardItem>
                    </div>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}

        {/* Global "Coming Soon" Placeholder Card appended to the end of every gallery automatically */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: images.length * 0.1, duration: 0.5 }}
          className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 h-full w-full cursor-default transition-all duration-300 hover:brightness-110"
        >
          <CardContainer className="h-full w-full" containerClassName="h-full w-full p-0">
            <CardBody className="relative h-[100%] w-full rounded-2xl">
              {/* Subtle tracking glow */}
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="relative z-10 w-full rounded-2xl overflow-hidden h-full flex flex-col">
                <CardItem translateZ="50" className={`w-full relative ${aspectRatio} flex-grow flex items-center justify-center overflow-hidden`}>
                  
                  {/* Heavily Blurred Background Graphic borrowing from the category's first image */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    {images.length > 0 && (
                      <Image
                        src={images[0].src}
                        alt="Coming Soon placeholder background"
                        fill
                        className="object-cover blur-[12px] opacity-40 scale-110"
                      />
                    )}
                    {/* Linear Gradient Overlay (Blue to Purple) */}
                    <div 
                      className="absolute inset-0" 
                      style={{ background: "linear-gradient(135deg, rgba(10, 20, 60, 0.75), rgba(100, 60, 180, 0.55))" }}
                    />
                  </div>

                  {/* Centered Typography */}
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
                    <CardItem translateZ="80" as="h4" className="text-[18px] font-bold text-white leading-tight" style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.4)" }}>
                      Coming Soon
                    </CardItem>
                  </div>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 rounded-full bg-black/10 dark:bg-white/10 p-2 text-gray-900 dark:text-white hover:bg-black/20 dark:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged preview"
                className="h-auto w-full max-h-[85vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
