"use client";

import { useState } from "react";
import Image from "next/image";

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  label: string;
  aspectRatio?: string; // e.g. "aspect-[16/9]" or "aspect-square"
  className?: string;
  priority?: boolean;
}

export function ImagePlaceholder({
  src,
  alt,
  label,
  aspectRatio = "aspect-[16/9]",
  className = "",
  priority = false,
}: ImagePlaceholderProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[12px] border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#141416] transition-all duration-300 ${aspectRatio} ${className}`}
    >
      {!hasError && (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={`object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onError={() => setHasError(true)}
          onLoad={() => setIsLoaded(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      )}

      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center select-none bg-[#FAF8F5]/60 dark:bg-[#0B0B0C]/60">
          <span className="text-xs sm:text-sm font-medium tracking-wide text-[#6B6862] dark:text-[#8A8A8F]">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
