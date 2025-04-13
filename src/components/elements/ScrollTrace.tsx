"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";

interface IntersectionObserverOptions {
  threshold: number;
  rootMargin: string;
}

export const ScrollTrace = () => {
  const pathname = usePathname();

  const createIntersectionObserver = useCallback(
    (elements: NodeListOf<Element>, option: IntersectionObserverOptions) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // Set data-visible attribute based on intersection
          entry.target.setAttribute("data-visible", entry.isIntersecting.toString());

          // Add/remove class for styling when in viewport
          if (entry.isIntersecting) {
            entry.target.classList.add("in-viewport");
          } else {
            entry.target.classList.remove("in-viewport");
          }
        });
      }, option);

      elements.forEach((el) => observer.observe(el));
      return () => {
        elements.forEach((el) => observer.unobserve(el));
        observer.disconnect();
      };
    },
    [],
  );

  const setupAccordion = useCallback(() => {
    const accordions = document.querySelectorAll<HTMLDetailsElement>(".accordion-hook");
    const summaries = document.querySelectorAll<HTMLElement>(".accordion-hook summary");

    // Open the first accordion by default
    if (accordions.length > 0) {
      accordions[0].setAttribute("open", "");
    }
    const closeOtherAccordions = (currentSummary: HTMLElement) => {
      accordions.forEach((accordion) => {
        if (accordion !== currentSummary.closest(".accordion-hook")) {
          accordion.removeAttribute("open");
        }
      });
    };
    const handleClick = (e: Event) => {
      const summary = e.currentTarget as HTMLElement;
      closeOtherAccordions(summary);
    };

    summaries.forEach((summary) => {
      summary.addEventListener("click", handleClick);
    });

    return () => {
      summaries.forEach((summary) => {
        summary.removeEventListener("click", handleClick);
      });
    };
  }, []);

  useEffect(() => {
    // Reset scroll position when navigating between pages
    window.scrollTo(0, 0);
    history.scrollRestoration = "manual";

    const initializeElements = () => {
      // Setup animations for elements with data attributes
      const fadeElements = document.querySelectorAll("[data-fade]");
      const growElements = document.querySelectorAll("[data-grow]");
      const viewportElements = document.querySelectorAll("[data-viewport]");

      const observerOptions: IntersectionObserverOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px", // Slightly offset to trigger before fully in viewport
      };

      const cleanupFunctions = [
        createIntersectionObserver(fadeElements, observerOptions),
        createIntersectionObserver(growElements, observerOptions),
        createIntersectionObserver(viewportElements, observerOptions),
        setupAccordion(),
      ];

      return () => cleanupFunctions.forEach((cleanup) => cleanup?.());
    };

    // Initialize elements when DOM is ready
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
  }, [pathname, createIntersectionObserver, setupAccordion]);

  return null;

  // useEffect(() => {
  //   // Скидаємо скрол при зміні сторінки
  //   window.scrollTo(0, 0);
  //   history.scrollRestoration = "manual";

  //   const handleFadeElements = (elements: NodeListOf<Element>) => {
  //     const observerOptions: IntersectionObserverOptions = {
  //       threshold: 0.1,
  //     };

  //     const observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         entry.target.setAttribute("data-visible", entry.isIntersecting.toString());
  //       });
  //     }, observerOptions);

  //     elements.forEach((el) => observer.observe(el));
  //     return () => elements.forEach((el) => observer.unobserve(el));
  //   };

  //   const handleAccordion = () => {
  //     const faq = document.querySelector(".accordion-details");
  //     const faqSummaries = document.querySelectorAll<HTMLElement>(".accordion-details summary");

  //     if (faq) {
  //       faq.setAttribute("open", "");
  //     }

  //     const closeOtherAccordions = (currentSummary: HTMLElement) => {
  //       const openAccordions = document.querySelectorAll(".accordion-details[open]");
  //       openAccordions.forEach((accordion) => {
  //         if (accordion !== currentSummary.parentElement) {
  //           accordion.removeAttribute("open");
  //         }
  //       });
  //     };

  //     faqSummaries.forEach((summary) => {
  //       summary.addEventListener("click", () => closeOtherAccordions(summary));
  //     });

  //     return () => {
  //       faqSummaries.forEach((summary) => {
  //         summary.removeEventListener("click", () => closeOtherAccordions(summary));
  //       });
  //     };
  //   };

  //   const initializeElements = () => {
  //     const fadeElements = document.querySelectorAll("[data-fade]");
  //     const growElements = document.querySelectorAll("[data-grow]");

  //     const cleanup = [handleFadeElements(fadeElements), handleFadeElements(growElements), handleAccordion()];

  //     return () => cleanup.forEach((cleanupFn) => cleanupFn?.());
  //   };

  //   let cleanup: (() => void) | undefined;

  //   if (document.readyState === "loading") {
  //     const handler = () => {
  //       cleanup = initializeElements();
  //       document.removeEventListener("DOMContentLoaded", handler);
  //     };
  //     document.addEventListener("DOMContentLoaded", handler);
  //   } else {
  //     cleanup = initializeElements();
  //   }

  //   return () => cleanup?.();
  // }, [pathname]);

  // return null;
};
