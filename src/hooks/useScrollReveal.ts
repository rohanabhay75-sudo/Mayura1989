"use client";
import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(selectors).forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
