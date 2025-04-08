"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface IntersectionObserverOptions {
  threshold: number;
}

export const ScrollTrace = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Скидаємо скрол при зміні сторінки
    window.scrollTo(0, 0);
    history.scrollRestoration = "manual";

    const handleFadeElements = (elements: NodeListOf<Element>) => {
      const observerOptions: IntersectionObserverOptions = {
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          entry.target.setAttribute("data-visible", entry.isIntersecting.toString());
        });
      }, observerOptions);

      elements.forEach((el) => observer.observe(el));
      return () => elements.forEach((el) => observer.unobserve(el));
    };

    const handleAccordion = () => {
      const faq = document.querySelector(".accordion-details");
      const faqSummaries = document.querySelectorAll<HTMLElement>(".accordion-details summary");

      if (faq) {
        faq.setAttribute("open", "");
      }

      const closeOtherAccordions = (currentSummary: HTMLElement) => {
        const openAccordions = document.querySelectorAll(".accordion-details[open]");
        openAccordions.forEach((accordion) => {
          if (accordion !== currentSummary.parentElement) {
            accordion.removeAttribute("open");
          }
        });
      };

      faqSummaries.forEach((summary) => {
        summary.addEventListener("click", () => closeOtherAccordions(summary));
      });

      return () => {
        faqSummaries.forEach((summary) => {
          summary.removeEventListener("click", () => closeOtherAccordions(summary));
        });
      };
    };

    const initializeElements = () => {
      const fadeElements = document.querySelectorAll("[data-fade]");
      const growElements = document.querySelectorAll("[data-grow]");

      const cleanup = [handleFadeElements(fadeElements), handleFadeElements(growElements), handleAccordion()];

      return () => cleanup.forEach((cleanupFn) => cleanupFn?.());
    };

    let cleanup: (() => void) | undefined;

    if (document.readyState === "loading") {
      const handler = () => {
        cleanup = initializeElements();
        document.removeEventListener("DOMContentLoaded", handler);
      };
      document.addEventListener("DOMContentLoaded", handler);
    } else {
      cleanup = initializeElements();
    }

    return () => cleanup?.();
  }, [pathname]);

  return null;
};
