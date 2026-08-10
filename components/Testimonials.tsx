"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Adarsh has an exceptional eye for design. His social media creatives significantly boosted our brand engagement.",
    name: "Rahul Sharma",
    designation: "Marketing Manager, Centurion Defence Academy"
  },
  {
    id: 2,
    quote: "His creativity and attention to detail in logo design truly sets him apart from others.",
    name: "Priya Verma",
    designation: "Business Owner, Lucknow"
  },
  {
    id: 3,
    quote: "Professional, punctual, and highly skilled. Adarsh delivered outstanding thumbnails that grew our channel.",
    name: "Amit Tiwari",
    designation: "YouTube Content Creator"
  }
];

export default function Testimonials() {
  return (
    <div className="w-full py-6">
      <div className="mb-12 flex flex-col items-center justify-center text-center">
        <h3 className="text-3xl font-extrabold tracking-tight md:text-5xl text-[#16150F] dark:text-[#F2F0ED]">What People Say</h3>
        <p className="mt-4 text-[#6B6862] dark:text-[#8A8A8F] text-lg">Feedback from clients and collaborators.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial, i) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
            className="flex flex-col justify-between bg-white dark:bg-[#141416] border border-black/[0.08] dark:border-white/[0.08] rounded-xl p-6 transition-all duration-300 group-hover:-translate-y-1"
          >
            <div>
              <Quote className="h-9 w-9 text-[#C2410C] dark:text-[#FF7A18] mb-6 opacity-90" />
              <p className="text-[#6B6862] dark:text-[#8A8A8F] leading-relaxed mb-8 text-[15px] font-normal">
                "{testimonial.quote}"
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#16150F] dark:text-[#F2F0ED] text-base tracking-tight">{testimonial.name}</h4>
              <p className="text-xs text-[#C2410C] dark:text-[#FF7A18] mt-1 font-bold uppercase tracking-wider">{testimonial.designation}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
