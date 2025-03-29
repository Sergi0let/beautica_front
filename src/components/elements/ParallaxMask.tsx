"use client";

import useParallax from "@/hooks/useParallax";
import Image from "next/image";

const ParallaxMask = () => {
  const translate = useParallax(10);

  return (
    <Image
      src="/about/mask.webp"
      className="absolute bottom-0 left-0 transition-transform duration-300 ease-out"
      alt="Mask Viki"
      width={488}
      height={688}
      style={{ transform: translate }}
    />
  );
};

export default ParallaxMask;
