"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { TRANSLATIONS, Lang, TranslationKey } from "@/lib/i18n";

type TransitionStage = "idle" | "out" | "in";

interface LanguageContextValue {
  lang: Lang;
  isTransitioning: boolean;
  transitionStage: TransitionStage;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  isTransitioning: false,
  transitionStage: "idle",
  setLang: () => {},
  t: (key) => TRANSLATIONS.en[key],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Website ALWAYS initializes in English on every fresh page load / reload
  const [lang, setLangState] = useState<Lang>("en");
  const [transitionStage, setTransitionStage] = useState<TransitionStage>("idle");

  useEffect(() => {
    // Clean up any stale localStorage/sessionStorage key from prior versions
    try {
      if (typeof window !== "undefined") {
        localStorage.removeItem("lang");
        sessionStorage.removeItem("lang");
      }
    } catch {
      // Storage access blocked or restricted
    }

    // Explicitly sync the DOM attributes for English default
    document.documentElement.lang = "en";
    document.documentElement.setAttribute("data-lang", "en");
  }, []);

  const setLang = (nextLang: Lang) => {
    if (nextLang === lang) return;

    // Respect user's motion preferences
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setLangState(nextLang);
      document.documentElement.lang = nextLang;
      document.documentElement.setAttribute("data-lang", nextLang);
      return;
    }

    // Step 1: Smooth micro fade down & shift 4px (approx 80ms)
    setTransitionStage("out");

    setTimeout(() => {
      // Step 2: Switch language content in-memory for this session only (no persistence)
      setLangState(nextLang);
      document.documentElement.lang = nextLang;
      document.documentElement.setAttribute("data-lang", nextLang);

      // Step 3: Enter with subtle upward movement & fade up (approx 130ms)
      setTransitionStage("in");

      setTimeout(() => {
        setTransitionStage("idle");
      }, 130);
    }, 80);
  };

  const t = (key: TranslationKey): string => {
    const dict = TRANSLATIONS[lang];
    return dict[key] ?? TRANSLATIONS.en[key];
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        isTransitioning: transitionStage !== "idle",
        transitionStage,
        setLang,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function LanguageContentWrapper({ children }: { children: ReactNode }) {
  const { transitionStage } = useContext(LanguageContext);

  return (
    <div
      className={`lang-content-wrapper ${
        transitionStage === "out"
          ? "lang-transition-out"
          : transitionStage === "in"
          ? "lang-transition-in"
          : ""
      }`}
    >
      {children}
    </div>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
