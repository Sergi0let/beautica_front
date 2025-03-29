"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const ScrollTrace = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
    history.scrollRestoration = "manual";

    const handleDOMContentLoaded = () => {
      const elements = document.querySelectorAll("[data-fade]");
      const growElements = document.querySelectorAll("[data-grow]");
      // const faq = document.querySelector(".accordion-details");

      // if (faq) {
      //   faq.setAttribute("open", "");
      // }
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.setAttribute("data-visible", "true");
            } else {
              entry.target.setAttribute("data-visible", "false");
            }
          });
        },
        {
          threshold: 0.1, // Відсоток видимості для активації
        },
      );

      // const growObserver = new IntersectionObserver(
      //   (entries) => {
      //     entries.forEach((entry) => {
      //       if (entry.isIntersecting) {
      //         entry.target.setAttribute("data-grow", "true");
      //       } else {
      //         entry.target.setAttribute("data-grow", "false");
      //       }
      //     });
      //   },
      //   {
      //     threshold: 0.1, // Відсоток видимості для активації
      //   },
      // );

      [...elements, ...growElements].forEach((el) => observer.observe(el));
      // growElements.forEach((el) => growObserver.observe(el));

      return () => {
        [...elements, ...growElements].forEach((el) => observer.unobserve(el));
        // growElements.forEach((el) => growObserver.unobserve(el));
      };
    };

    // Перевіряємо, чи DOM вже завантажений
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
    } else {
      handleDOMContentLoaded();
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
    };
  }, [pathname]);

  return null; // Компонент не рендерить нічого в DOM
};
