"use client";

import { useEffect } from "react";

export function ScrollRestorer() {
  useEffect(() => {
    const savedScroll = sessionStorage.getItem("portfolioScrollY");
    if (savedScroll) {
      // Add a slight delay to allow Next.js to finish its initial route painting
      const timeoutId = setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedScroll, 10),
          behavior: "smooth"
        });
        // Clear it so it doesn't trigger on regular refreshes unless navigating back
        sessionStorage.removeItem("portfolioScrollY");
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  return null;
}
