"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Maximize2 } from "lucide-react";

const HARD_SKILLS = [
  { name: "Photoshop", icon: "/icons/ps.svg" },
  { name: "Canva", icon: "/icons/canva.svg" },
  { name: "Premiere Pro", icon: "/icons/pr.svg" },
  { name: "Illustrator", icon: "/icons/ai.svg" },
  { name: "CorelDRAW", icon: "/icons/cd.svg" },
  { name: "After Effects", icon: "/icons/ae.svg" },
  { name: "InDesign", icon: "/icons/id.svg" },
];

const SOFT_SKILLS = ["Teamwork", "Leadership", "Problem Solving", "Creative Thinking"];
const LANGUAGES = ["Hindi", "English"];

export default function Skills() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const newspaperImgSrc = "/images/recognition/mr-up-uk-2k19-dainik-jagran.webp";

  // Handle ESC key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };
    if (isLightboxOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isLightboxOpen]);

  return (
    <section className="relative z-10 min-h-[400px] bg-[#FAF8F5] transition-colors duration-300 dark:bg-[#0B0B0C] px-6 sm:px-8 py-24 md:py-32 text-[#16150F] dark:text-[#F2F0ED] md:px-24 border-b border-black/[0.08] dark:border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-16 text-3xl font-extrabold tracking-tight md:text-5xl text-[#16150F] dark:text-[#F2F0ED]">
          Skills & Proficiencies
        </h3>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Hard Skills */}
          <div>
            <h4 className="mb-6 text-xl font-bold text-[#16150F] dark:text-[#F2F0ED]">
              Hard Skills
            </h4>
            <div className="flex flex-wrap gap-3 pt-2">
              {HARD_SKILLS.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#141416] px-4 py-2 text-sm font-medium text-[#16150F] dark:text-[#F2F0ED] shadow-xs"
                >
                  <div className="relative h-4 w-4 flex-shrink-0">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={16}
                      height={16}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {/* Soft Skills */}
            <div>
              <h4 className="mb-6 text-xl font-bold text-[#16150F] dark:text-[#F2F0ED]">
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {SOFT_SKILLS.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#141416] px-5 py-2 text-sm font-medium text-[#16150F] dark:text-[#F2F0ED]"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h4 className="mb-6 text-xl font-bold text-[#16150F] dark:text-[#F2F0ED]">
                Languages
              </h4>
              <div className="flex flex-wrap gap-3">
                {LANGUAGES.map((lang, index) => (
                  <motion.div
                    key={lang}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#141416] px-5 py-2 text-sm font-medium text-[#16150F] dark:text-[#F2F0ED]"
                  >
                    {lang}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recognition (formerly Awards) */}
            <div>
              <h4 className="mb-6 text-xl font-bold text-[#16150F] dark:text-[#F2F0ED]">
                Recognition
              </h4>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#141416] p-6 max-w-lg space-y-4"
              >
                <div>
                  <h5 className="text-lg font-bold text-[#16150F] dark:text-[#F2F0ED]">
                    MR. UP-UK 2K19 — Winner
                  </h5>
                  <p className="mt-1 text-sm text-[#6B6862] dark:text-[#8A8A8F]">
                    V.V.N Enterprises · Kanpur · 2019
                  </p>
                  <p className="mt-2 text-sm text-[#6B6862] dark:text-[#8A8A8F]">
                    Covered in Dainik Jagran.
                  </p>
                </div>

                {/* Newspaper 4:3 Image Slot */}
                <div className="pt-2">
                  <div
                    onClick={() => setIsLightboxOpen(true)}
                    className="group relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-[#FAF8F5] dark:bg-[#0B0B0C] cursor-pointer transition-all hover:border-[#C2410C]/40 dark:hover:border-[#FF7A18]/40"
                  >
                    {!imageError && (
                      <Image
                        src={newspaperImgSrc}
                        alt="Dainik Jagran 2019 newspaper coverage for MR. UP-UK 2K19 Winner Adarsh Srivastav"
                        fill
                        className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                          imageLoaded ? "opacity-100" : "opacity-0"
                        }`}
                        onError={() => setImageError(true)}
                        onLoad={() => setImageLoaded(true)}
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                    )}

                    {(!imageLoaded || imageError) && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center select-none">
                        <span className="text-xs sm:text-sm font-medium text-[#6B6862] dark:text-[#8A8A8F]">
                          MR. UP-UK 2K19 — Newspaper Clipping
                        </span>
                      </div>
                    )}

                    <div className="absolute top-2 right-2 rounded-md bg-black/60 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100">
                      <Maximize2 className="h-4 w-4" />
                    </div>
                  </div>

                  <p className="mt-2 text-xs text-[#6B6862] dark:text-[#8A8A8F]">
                    Dainik Jagran, 2019
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8 backdrop-blur-sm cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-xl border border-white/10 bg-[#141416] p-2 sm:p-4 text-white shadow-2xl cursor-default"
            >
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-3 right-3 z-10 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-black"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-[4/3] w-[85vw] max-w-[800px] h-auto overflow-hidden rounded-lg bg-[#0B0B0C]">
                {!imageError ? (
                  <Image
                    src={newspaperImgSrc}
                    alt="Full size Dainik Jagran 2019 newspaper clipping"
                    fill
                    className="object-contain"
                    priority
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center text-[#8A8A8F]">
                    <p className="text-base font-semibold text-white mb-2">
                      MR. UP-UK 2K19 — Newspaper Clipping
                    </p>
                    <p className="text-sm">
                      Dainik Jagran, 2019
                    </p>
                    <p className="mt-4 text-xs text-[#8A8A8F]">
                      Image file will display here once added to <br />
                      <code className="text-xs text-[#FF7A18]">public/images/recognition/mr-up-uk-2k19-dainik-jagran.webp</code>
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
