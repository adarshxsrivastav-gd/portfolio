"use client";

import { useSyncExternalStore } from "react";
import { useLanguage } from "./LanguageProvider";

const emptySubscribe = () => () => {};

export function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  // Exact same-size placeholder before hydration to prevent any layout shift
  if (!mounted) {
    return <div className="h-12 w-[104px] flex-shrink-0" aria-hidden="true" />;
  }

  const isEn = lang === "en";

  return (
    <div
      role="group"
      aria-label={t("header.ariaChangeLanguage")}
      className="relative flex h-12 w-[104px] flex-shrink-0 items-center justify-between rounded-xl border border-black/[0.15] bg-white/90 p-1 shadow-xs backdrop-blur-md dark:border-white/[0.15] dark:bg-[#141416]/90 select-none"
    >
      {/* Sliding pill indicator */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1 bottom-1 w-[46px] rounded-lg bg-black/[0.06] dark:bg-white/[0.1] transition-transform duration-200 ease-out motion-reduce:transition-none"
        style={{
          transform: isEn ? "translateX(0px)" : "translateX(48px)",
        }}
      />

      {/* English option */}
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={isEn}
        aria-label="Switch to English"
        className={`relative z-10 flex h-full w-[46px] min-w-[44px] items-center justify-center rounded-lg text-xs transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C2410C] dark:focus-visible:ring-[#FF7A18] ${
          isEn
            ? "font-bold text-[#C2410C] dark:text-[#FF7A18]"
            : "font-medium text-[#6B6862]/70 dark:text-[#8A8A8F]/70 hover:text-[#16150F] dark:hover:text-[#F2F0ED]"
        }`}
      >
        EN
      </button>

      {/* Hairline Divider */}
      <span
        aria-hidden="true"
        className="pointer-events-none relative z-0 h-4 w-px flex-shrink-0 bg-black/[0.12] dark:bg-white/[0.12]"
      />

      {/* Hindi option */}
      <button
        type="button"
        onClick={() => setLang("hi")}
        aria-pressed={!isEn}
        aria-label="हिन्दी में बदलें"
        className={`relative z-10 flex h-full w-[46px] min-w-[44px] items-center justify-center rounded-lg text-xs transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C2410C] dark:focus-visible:ring-[#FF7A18] ${
          !isEn
            ? "font-bold text-[#C2410C] dark:text-[#FF7A18]"
            : "font-medium text-[#6B6862]/70 dark:text-[#8A8A8F]/70 hover:text-[#16150F] dark:hover:text-[#F2F0ED]"
        }`}
      >
        हिन्दी
      </button>
    </div>
  );
}
