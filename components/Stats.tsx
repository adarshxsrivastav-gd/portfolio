"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to }: { to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(0, to, {
        duration: 1.8,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.round(value).toString();
        },
      });
      return () => controls.stop();
    }
  }, [to, inView]);

  return <span ref={nodeRef}>{to}</span>;
}

const STATS_DATA = [
  { num: 350, label: "Projects Completed" },
  { num: 2, label: "Years of Experience" },
  { num: 15, label: "Happy Clients" },
  { num: 7, label: "Design Categories" },
];

export default function Stats() {
  return (
    <section className="relative z-10 w-full min-h-[160px] bg-[#FAF8F5] transition-colors duration-300 dark:bg-[#0B0B0C] py-20 px-8 md:px-24 border-y border-black/[0.08] dark:border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/[0.08] dark:divide-white/[0.08]">
          {STATS_DATA.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="mb-2 flex items-baseline text-4xl font-extrabold tracking-tight text-[#16150F] dark:text-[#F2F0ED] md:text-6xl">
                <Counter to={stat.num} />
                <span className="ml-1 text-2xl md:text-4xl text-[#C2410C] dark:text-[#FF7A18] font-bold">+</span>
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-[#6B6862] dark:text-[#8A8A8F]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
