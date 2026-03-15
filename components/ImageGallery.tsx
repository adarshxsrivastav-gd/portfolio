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
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 h-full w-full"
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
                      <CardItem translateZ="80" as="h4" className="text-xl font-semibold text-white drop-shadow-md">
                        {img.title}
                      </CardItem>
                    </div>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
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
                className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
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
