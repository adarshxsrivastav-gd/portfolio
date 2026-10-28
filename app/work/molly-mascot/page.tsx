"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { useLanguage } from "@/components/LanguageProvider";

const PERSONAS = [
  {
    id: "doctor-molly",
    name: "Doctor Molly",
    descKey: "molly.persona.doctor.desc" as const,
    imageLabel: "Doctor Molly — Persona Image",
    imagePath: "/images/work/molly-mascot/doctor-molly.webp",
    alt: "Doctor Molly mascot persona",
  },
  {
    id: "mata-molly",
    name: "Mata Molly",
    descKey: "molly.persona.mata.desc" as const,
    imageLabel: "Mata Molly — Persona Image",
    imagePath: "/images/work/molly-mascot/mata-molly.webp",
    alt: "Mata Molly mascot persona",
  },
  {
    id: "didi-molly",
    name: "Didi Molly",
    descKey: "molly.persona.didi.desc" as const,
    imageLabel: "Didi Molly — Persona Image",
    imagePath: "/images/work/molly-mascot/didi-molly.webp",
    alt: "Didi Molly mascot persona",
  },
  {
    id: "modern-molly",
    name: "Modern Molly",
    descKey: "molly.persona.modern.desc" as const,
    imageLabel: "Modern Molly — Persona Image",
    imagePath: "/images/work/molly-mascot/modern-molly.webp",
    alt: "Modern Molly mascot persona",
  },
];

export default function MollyMascotCaseStudy() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#FAF8F5] transition-colors duration-300 dark:bg-[#0B0B0C] px-6 sm:px-8 py-16 md:py-24 text-[#16150F] dark:text-[#F2F0ED]">
      <div className="mx-auto max-w-[700px]">
        {/* Navigation: Back to work */}
        <div className="mb-8 md:mb-12">
          <Link
            href="/#selected-work"
            className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-[#6B6862] dark:text-[#8A8A8F] transition-colors hover:text-[#C2410C] dark:hover:text-[#FF7A18] group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>{t("molly.backToWork")}</span>
          </Link>
        </div>

        {/* Header Title & Subtitle */}
        <header className="mb-8 md:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#16150F] dark:text-[#F2F0ED] mb-3 md:mb-4">
            {t("molly.title")}
          </h1>
          <p className="text-base sm:text-lg text-[#6B6862] dark:text-[#8A8A8F] font-medium">
            {t("molly.subtitle")}
          </p>
        </header>

        {/* Hero Image Container */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center justify-center rounded-[16px] border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#141416] p-4 sm:p-6 md:p-8 lg:p-10">
            <Image
              src="/images/work/molly-mascot/molly-character-sheet.webp"
              alt="Molly mascot character system sheet for Gyandhara"
              width={1024}
              height={576}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Editorial Body Content */}
        <article className="text-[16px] md:text-[17px] lg:text-[19px] leading-[1.7] space-y-12 md:space-y-16">
          {/* Section: The problem */}
          <section className="space-y-4">
            <div className="border-t border-[#C2410C]/40 dark:border-[#FF7A18]/40 pt-6 md:pt-8 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#16150F] dark:text-[#F2F0ED]">
                {t("molly.section.problem")}
              </h2>
            </div>
            <p className="text-[#16150F] dark:text-[#F2F0ED]">
              {t("molly.body.problem1")}
            </p>
            <p className="text-[#16150F] dark:text-[#F2F0ED]">
              {t("molly.body.problem2")}
            </p>
          </section>

          {/* Section: Understanding the brief */}
          <section className="space-y-4">
            <div className="border-t border-[#C2410C]/40 dark:border-[#FF7A18]/40 pt-6 md:pt-8 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#16150F] dark:text-[#F2F0ED]">
                {t("molly.section.brief")}
              </h2>
            </div>
            <p className="text-[#16150F] dark:text-[#F2F0ED]">
              {t("molly.body.brief1")}
            </p>
          </section>

          {/* Section: The decision */}
          <section className="space-y-6">
            <div className="border-t border-[#C2410C]/40 dark:border-[#FF7A18]/40 pt-6 md:pt-8 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#16150F] dark:text-[#F2F0ED]">
                {t("molly.section.decision")}
              </h2>
            </div>
            <p className="text-[#16150F] dark:text-[#F2F0ED]">
              {t("molly.body.decision1")}
            </p>
            <p className="text-[#16150F] dark:text-[#F2F0ED]">
              {t("molly.body.decision2")}
            </p>

            {/* Persona 2x2 Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 md:my-10">
              {PERSONAS.map((persona) => (
                <ImagePlaceholder
                  key={persona.id}
                  src={persona.imagePath}
                  alt={persona.alt}
                  label={persona.imageLabel}
                  aspectRatio="aspect-square"
                />
              ))}
            </div>

            {/* Persona Descriptions */}
            <div className="space-y-6 pt-2">
              {PERSONAS.map((persona) => (
                <div key={persona.id} className="text-[#16150F] dark:text-[#F2F0ED]">
                  <span className="font-bold text-[#C2410C] dark:text-[#FF7A18]">
                    {persona.name}
                  </span>{" "}
                  {t(persona.descKey)}
                </div>
              ))}
            </div>
          </section>

          {/* Section: The outcome */}
          <section className="space-y-4">
            <div className="border-t border-[#C2410C]/40 dark:border-[#FF7A18]/40 pt-6 md:pt-8 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#16150F] dark:text-[#F2F0ED]">
                {t("molly.section.outcome")}
              </h2>
            </div>
            <p className="text-[#16150F] dark:text-[#F2F0ED]">
              {t("molly.body.outcome1")}
            </p>
            <p className="text-[#16150F] dark:text-[#F2F0ED]">
              {t("molly.body.outcome2")}
            </p>
          </section>
        </article>

        {/* Footer Navigation: Back to home */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-black/[0.08] dark:border-white/[0.08]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-[#6B6862] dark:text-[#8A8A8F] transition-colors hover:text-[#C2410C] dark:hover:text-[#FF7A18] group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>{t("molly.backToHome")}</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
