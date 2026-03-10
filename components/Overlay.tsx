"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Section 1: 0% to 25% (fades out early so it disappears completely)
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  // Section 2: 30% to 45% (Appears very quickly, vanishes almost immediately)
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.35, 0.4, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.45], [50, -50]);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 flex h-screen w-full flex-col justify-center px-8 md:px-24">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
      >
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Adarsh Srivastav.
        </h1>
        <p className="mt-4 text-xl tracking-wide text-gray-400 md:text-3xl">
          Graphic Designer & Video Editor.
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center pl-8 text-left text-white md:pl-32"
      >
        <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          FROM DREAM TO SCREEN
        </h2>
        <p className="max-w-3xl text-lg tracking-wide text-gray-400 md:text-xl leading-relaxed">
          Transforming creative ideas into powerful visuals that connect with people and build strong digital presence.
        </p>
      </motion.div>
    </div>
  );
}
