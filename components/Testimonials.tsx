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
        <h3 className="text-3xl font-bold md:text-5xl text-gray-900 dark:text-white">What People Say</h3>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Feedback from clients and collaborators.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial, i) => (
          /* Replace with actual testimonial */
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
            className="flex flex-col justify-between bg-gray-800 dark:bg-white/5 border border-cyan-500/30 rounded-[12px] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10"
          >
            <div>
              <Quote className="h-10 w-10 text-cyan-500 mb-6 drop-shadow-sm opacity-90" />
              <p className="text-gray-100 dark:text-gray-200 font-light leading-relaxed mb-8 text-[15px]">
                "{testimonial.quote}"
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white text-lg tracking-wide">{testimonial.name}</h4>
              <p className="text-sm text-cyan-400 mt-1 font-medium">{testimonial.designation}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
