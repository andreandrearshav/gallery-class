"use client";

import { useEffect } from "react";

export default function Reveal() {
  useEffect(() => {
    const reveal = document.querySelectorAll(".reveal, .reveal-scale");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      {
        threshold: 0.2,
      },
    );
    reveal.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
