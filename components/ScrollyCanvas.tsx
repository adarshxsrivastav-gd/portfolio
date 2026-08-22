"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function ScrollyCanvas({ frameCount = 90 }: { frameCount?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload first frame immediately, defer remaining frames to avoid network saturation during LCP
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = new Array(frameCount);

    // 1. Load first frame immediately for fast FCP/LCP
    const firstImg = new Image();
    firstImg.src = "/sequence/frame_000.png";
    firstImg.onload = () => {
      loadedImages[0] = firstImg;
      renderFrame(0, loadedImages);
    };

    // 2. Defer preloading the rest of the 3D frame sequence after page load / main thread idle
    const loadRemainingFrames = () => {
      for (let i = 0; i < frameCount; i++) {
        if (i === 0) continue;
        const img = new Image();
        const paddedIndex = i.toString().padStart(3, "0");
        img.src = `/sequence/frame_${paddedIndex}.png`;
        img.onload = () => {
          loadedImages[i] = img;
        };
      }
      setImages(loadedImages);
    };

    let timer: NodeJS.Timeout;
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(() => {
        timer = setTimeout(loadRemainingFrames, 300);
      });
    } else {
      timer = setTimeout(loadRemainingFrames, 500);
    }

    const handleResize = () => {
      if (loadedImages[0]) {
        const currentProgress = scrollYProgress.get();
        const index = Math.min(frameCount - 1, Math.max(0, Math.floor(currentProgress * frameCount)));
        renderFrame(index, loadedImages);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameCount]);

  const renderFrame = (index: number, imgs: HTMLImageElement[] = images) => {
    if (!canvasRef.current) return;
    const img = imgs[index] || imgs[0];
    if (!img) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;

    const frameIndex = Math.min(
      frameCount - 1,
      Math.max(0, Math.floor(latest * frameCount))
    );

    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-gray-50 transition-colors duration-300 dark:bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="h-full w-full block"
        />
      </div>
    </div>
  );
}
