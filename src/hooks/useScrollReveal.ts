"use client";
import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children";
    const elements = document.querySelectorAll(selectors);

    // Immediately reveal elements that are already in the viewport
    const checkElements = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 200) {
          el.classList.add("visible");
        }
      });
    };

    // Run immediately and after a short tick for layout completion
    checkElements();
    const timer = setTimeout(checkElements, 250);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.02, rootMargin: "100px 0px 100px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", checkElements, { passive: true });
    window.addEventListener("resize", checkElements, { passive: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("scroll", checkElements);
      window.removeEventListener("resize", checkElements);
    };
  }, []);
}
