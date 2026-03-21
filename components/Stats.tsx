"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ from, to }: { from: number; to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.round(value).toString();
        },
      });
      return () => controls.stop();
    }
  }, [from, to, inView]);

  return <span ref={nodeRef}>{from}</span>;
}

const STATS_DATA = [
  { num: 350, label: "Projects Completed" },
  { num: 2, label: "Years of Experience" },
  { num: 15, label: "Happy Clients" },
  { num: 7, label: "Design Categories" },
];

export default function Stats() {
  return (
    <section className="relative z-10 w-full bg-gray-50 transition-colors duration-300 dark:bg-[#121212] py-20 px-8 md:px-24">
      {/* Glowing Horizontal Separators */}
      <div className="absolute top-0 left-0 h-[1px] w-full bg-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS_DATA.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center justify-center rounded-[12px] border border-cyan-500/30 bg-gray-800 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] dark:bg-white/5"
            >
              <div className="mb-2 flex items-center text-4xl font-bold text-cyan-400 md:text-5xl">
                <Counter from={0} to={stat.num} />
                <span className="ml-1">+</span>
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
