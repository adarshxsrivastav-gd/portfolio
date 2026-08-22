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
  const [activeLightbox, setActiveLightbox] = useState<"claude" | "newspaper" | null>(null);
  const [newspaperImageError, setNewspaperImageError] = useState(false);
  const [newspaperImageLoaded, setNewspaperImageLoaded] = useState(false);
  const [claudeImageError, setClaudeImageError] = useState(false);
  const [claudeImageLoaded, setClaudeImageLoaded] = useState(false);

  const newspaperImgSrc = "/images/recognition/mr-up-uk-2k19-dainik-jagran.webp";
  const claudeImgSrc = "/images/recognition/claude-101-certificate.webp";

  // Handle ESC key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveLightbox(null);
      }
    };
    if (activeLightbox) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeLightbox]);

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

            {/* Certifications & Recognition */}
            <div>
              <h4 className="mb-6 text-xl font-bold text-[#16150F] dark:text-[#F2F0ED]">
                Certifications & Recognition
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Card 1: Claude 101 Certificate */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#141416] p-6 flex flex-col justify-between h-full space-y-4"
                >
                  <div className="flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h5 className="text-lg font-bold text-[#16150F] dark:text-[#F2F0ED]">
                        Claude 101 — Certificate of Completion
                      </h5>
                      <p className="mt-1 text-sm text-[#6B6862] dark:text-[#8A8A8F]">
                        Anthropic Academy · 2026
                      </p>
                      <p className="mt-2 text-sm text-[#6B6862] dark:text-[#8A8A8F]">
                        Foundational certification in working with Claude across research, content production and creative workflows.
                      </p>
                    </div>

                    {/* Certificate 4:3 Image Slot */}
                    <div className="pt-2">
                      <div
                        onClick={() => setActiveLightbox("claude")}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setActiveLightbox("claude");
                          }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-label="View Claude 101 Certificate of Completion from Anthropic Academy"
                        className="group relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-[#FAF8F5] dark:bg-[#0B0B0C] p-1.5 sm:p-2 cursor-pointer transition-all hover:border-[#C2410C]/40 dark:hover:border-[#FF7A18]/40 focus:outline-none focus:ring-2 focus:ring-[#FF7A18]/50"
                      >
                        <div className="relative w-full h-full overflow-hidden rounded-md bg-white dark:bg-[#1C1C1E] flex items-center justify-center">
                          {!claudeImageError && (
                            <Image
                              src={claudeImgSrc}
                              alt="Claude 101 Certificate of Completion from Anthropic Academy"
                              fill
                              className={`object-cover object-top transition-transform duration-300 group-hover:scale-105 ${
                                claudeImageLoaded ? "opacity-100" : "opacity-0"
                              }`}
                              onError={() => setClaudeImageError(true)}
                              onLoad={() => setClaudeImageLoaded(true)}
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                            />
                          )}

                          {(!claudeImageLoaded || claudeImageError) && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center select-none bg-[#FAF8F5] dark:bg-[#141416]">
                              <span className="text-xs sm:text-sm font-medium text-[#6B6862] dark:text-[#8A8A8F]">
                                Claude 101 — Certificate of Completion
                              </span>
                            </div>
                          )}

                          {/* Desktop Hover Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 rounded-md">
                            <span className="flex items-center gap-1.5 text-xs font-medium text-white bg-black/70 px-3 py-1.5 rounded-full border border-white/10 shadow-xs">
                              <Maximize2 className="h-3.5 w-3.5 text-[#FF7A18]" />
                              <span>View certificate</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="mt-2 text-xs text-[#6B6862] dark:text-[#8A8A8F]">
                        Issued by Anthropic
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2: MR. UP-UK 2K19 — Winner */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#141416] p-6 flex flex-col justify-between h-full space-y-4"
                >
                  <div className="flex-1 flex flex-col justify-between space-y-4">
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
                        onClick={() => setActiveLightbox("newspaper")}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setActiveLightbox("newspaper");
                          }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-label="View Dainik Jagran 2019 newspaper coverage for MR. UP-UK 2K19 Winner Adarsh Srivastav"
                        className="group relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-black/[0.08] dark:border-white/[0.08] bg-[#FAF8F5] dark:bg-[#0B0B0C] cursor-pointer transition-all hover:border-[#C2410C]/40 dark:hover:border-[#FF7A18]/40 focus:outline-none focus:ring-2 focus:ring-[#FF7A18]/50"
                      >
                        {!newspaperImageError && (
                          <Image
                            src={newspaperImgSrc}
                            alt="Dainik Jagran 2019 newspaper coverage for MR. UP-UK 2K19 Winner Adarsh Srivastav"
                            fill
                            className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                              newspaperImageLoaded ? "opacity-100" : "opacity-0"
                            }`}
                            onError={() => setNewspaperImageError(true)}
                            onLoad={() => setNewspaperImageLoaded(true)}
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                          />
                        )}

                        {(!newspaperImageLoaded || newspaperImageError) && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center select-none">
                            <span className="text-xs sm:text-sm font-medium text-[#6B6862] dark:text-[#8A8A8F]">
                              MR. UP-UK 2K19 — Newspaper Clipping
                            </span>
                          </div>
                        )}

                        <div className="absolute top-2 right-2 rounded-md bg-black/60 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                          <Maximize2 className="h-4 w-4" />
                        </div>
                      </div>

                      <p className="mt-2 text-xs text-[#6B6862] dark:text-[#8A8A8F]">
                        Dainik Jagran, 2019
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightbox(null)}
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
                onClick={() => setActiveLightbox(null)}
                className="absolute top-3 right-3 z-10 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-black"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-[4/3] w-[85vw] max-w-[800px] h-auto overflow-hidden rounded-lg bg-[#0B0B0C]">
                {activeLightbox === "claude" ? (
                  !claudeImageError ? (
                    <Image
                      src={claudeImgSrc}
                      alt="Claude 101 Certificate of Completion from Anthropic Academy"
                      fill
                      className="object-contain"
                      priority
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center text-[#8A8A8F]">
                      <p className="text-base font-semibold text-white mb-2">
                        Claude 101 — Certificate of Completion
                      </p>
                      <p className="text-sm">
                        Anthropic Academy · 2026
                      </p>
                      <p className="mt-4 text-xs text-[#8A8A8F]">
                        Image file will display here once added to <br />
                        <code className="text-xs text-[#FF7A18]">public/images/recognition/claude-101-certificate.webp</code>
                      </p>
                    </div>
                  )
                ) : (
                  !newspaperImageError ? (
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
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
