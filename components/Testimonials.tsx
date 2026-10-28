"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { TranslationKey } from "@/lib/i18n";

const TESTIMONIALS: {
  id: number;
  quoteKey: TranslationKey;
  nameKey: TranslationKey;
  designationKey: TranslationKey;
}[] = [
  {
    id: 1,
    quoteKey: "testimonials.t1.quote",
    nameKey: "testimonials.t1.name",
    designationKey: "testimonials.t1.designation",
  },
  {
    id: 2,
    quoteKey: "testimonials.t2.quote",
    nameKey: "testimonials.t2.name",
    designationKey: "testimonials.t2.designation",
  },
  {
    id: 3,
    quoteKey: "testimonials.t3.quote",
    nameKey: "testimonials.t3.name",
    designationKey: "testimonials.t3.designation",
  },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <div className="w-full py-6">
      <div className="mb-12 flex flex-col items-center justify-center text-center">
        <h3 className="text-3xl font-extrabold tracking-tight md:text-5xl text-[#16150F] dark:text-[#F2F0ED]">{t("testimonials.heading")}</h3>
        <p className="mt-4 text-[#6B6862] dark:text-[#8A8A8F] text-lg">{t("testimonials.subtitle")}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial, i) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
            className="editorial-card-hover flex flex-col justify-between bg-white dark:bg-[#141416] border border-black/[0.08] dark:border-white/[0.08] rounded-xl p-6"
          >
            <div>
              <Quote className="h-9 w-9 text-[#C2410C] dark:text-[#FF7A18] mb-6 opacity-90" />
              <p className="text-[#6B6862] dark:text-[#8A8A8F] leading-relaxed mb-8 text-[15px] font-normal">
                &ldquo;{t(testimonial.quoteKey)}&rdquo;
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#16150F] dark:text-[#F2F0ED] text-base tracking-tight">{t(testimonial.nameKey)}</h4>
              <p className="text-xs text-[#C2410C] dark:text-[#FF7A18] mt-1 font-bold uppercase tracking-wider">{t(testimonial.designationKey)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
