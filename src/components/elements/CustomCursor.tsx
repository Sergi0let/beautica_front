"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const section = document.querySelector("#services-section");

    const updatePosition = (e: MouseEvent) => {
      if (section?.contains(e.target as Node)) {
        setPosition({ x: e.clientX - 40, y: e.clientY - 40 });
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      if (section?.contains(e.target as Node)) {
        setVisible(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (section?.contains(e.target as Node)) {
        setVisible(false);
      }
    };

    section?.addEventListener("mousemove", updatePosition as EventListener);
    section?.addEventListener("mouseenter", handleMouseEnter as EventListener);
    section?.addEventListener("mouseleave", handleMouseLeave as EventListener);

    return () => {
      section?.removeEventListener("mousemove", updatePosition as EventListener);
      section?.removeEventListener("mouseenter", handleMouseEnter as EventListener);
      section?.removeEventListener("mouseleave", handleMouseLeave as EventListener);
    };
  }, [mounted]);

  if (!mounted || isMobile) return null;

  return (
    <div
      className={`bg-primary pointer-events-none fixed top-0 left-0 z-50 hidden size-16 flex-col items-center justify-center rounded-full text-sm transition-opacity duration-300 md:flex xl:size-[120px] ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <span className="font-semibold uppercase">Детальніше</span>
      <ArrowUpRight size={24} />
    </div>
  );
};

export { CustomCursor };
