"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#141416] transition-all duration-300 group-hover:-translate-y-1.5 h-full w-full"
            onClick={() => setSelectedImage(img.src)}
          >
            <CardContainer className="h-full w-full" containerClassName="h-full w-full p-0">
              <CardBody className="relative h-full w-full rounded-xl flex flex-col">
                <div className="relative z-10 w-full rounded-xl overflow-hidden h-full flex flex-col bg-white dark:bg-[#141416]">
                  {/* True color image thumbnail */}
                  <CardItem translateZ="30" className={`w-full relative ${aspectRatio} flex-grow bg-gray-100 dark:bg-[#1c1c1f]`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={`${objectFit} transition-transform duration-400 ease-out group-hover:scale-[1.03]`}
                    />
                    
                    {/* Subtle bottom edge gradient only where text sits over image on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6 pointer-events-none">
                      <CardItem translateZ="50" as="h4" className="text-lg font-bold text-white tracking-tight drop-shadow-md">
                        {img.title}
                      </CardItem>
                    </div>
                  </CardItem>

                  <div className="p-5 flex flex-col justify-between bg-white dark:bg-[#141416]">
                    <h4 className="text-base font-bold text-[#16150F] dark:text-[#F2F0ED] tracking-tight">
                      {img.title}
                    </h4>
                    <div className="mt-2 h-[2px] w-0 bg-[#C2410C] dark:bg-[#FF7A18] transition-all duration-300 group-hover:w-full" />
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}

        {/* Global "Coming Soon" Placeholder Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: images.length * 0.05, duration: 0.4 }}
          className="group relative overflow-hidden rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#141416] h-full w-full cursor-default transition-all duration-300"
        >
          <CardContainer className="h-full w-full" containerClassName="h-full w-full p-0">
            <CardBody className="relative h-full w-full rounded-xl">
              <div className="relative z-10 w-full rounded-xl overflow-hidden h-full flex flex-col bg-white dark:bg-[#141416]">
                <CardItem translateZ="30" className={`w-full relative ${aspectRatio} flex-grow flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-[#1c1c1f]`}>
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    {images.length > 0 && (
                      <Image
                        src={images[0].src}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover blur-[12px] opacity-30 scale-110"
                      />
                    )}
                    <div 
                      className="absolute inset-0 bg-[#16150F]/70 dark:bg-[#0B0B0C]/80" 
                    />
                  </div>
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
                    <CardItem translateZ="50" as="h4" className="text-lg font-bold text-white tracking-widest uppercase">
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
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
              <Image
                src={selectedImage}
                alt={images.find((i) => i.src === selectedImage)?.title ? `${images.find((i) => i.src === selectedImage)?.title} design showcase preview` : "Enlarged design work preview"}
                width={1200}
                height={800}
                className="h-auto w-full max-h-[85vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
