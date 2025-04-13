"use client";

import { ArrowIcon, BtnOrLink } from "@/components";
import { signUpAnchors } from "@/constants";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialsSlider = () => {
  // Use useState with useEffect for client-side detection to avoid hydration mismatch
  const [isMobile, setIsMobile] = useState(false);
  const [isTabletOrLarger, setIsTabletOrLarger] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set mounted state to true
    setIsMounted(true);

    // Check if mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTabletOrLarger(window.innerWidth >= 1024);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Default to desktop values for server-side rendering
  const spaceBetween = isTabletOrLarger ? 20 : 15;
  const slidesPerView = 1.25;

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={{ nextEl: ".testim-next", prevEl: ".testim-prev" }}
      scrollbar={{
        draggable: true,
        dragClass: "testim-progress",
        horizontalClass: "testim-progress-horizontal",
      }}
      breakpoints={{
        540: {
          slidesPerView: 2.25,
        },
        1024: {
          slidesPerView: 3.25,
        },
      }}
      style={{ overflow: "visible" }}
      wrapperClass="testim-wrapper"
    >
      {Array.from({ length: 11 }, (_, index) => (
        <SwiperSlide key={index} className="testim-slide overflow-hidden">
          <TestimonialImage
            src={`/testimonials/${index + 1}.webp`}
            alt={`Коментарь № ${index + 1}`}
            isMounted={isMounted}
            isMobile={isMobile}
          />
          <div className="py-4"></div>
        </SwiperSlide>
      ))}

      <SwiperSlide className="testim-slide">
        <div className="flex h-full flex-col justify-between px-2 pt-8 lg:pt-14">
          <h3 className="font-source-serif-pro text-center text-2xl leading-tight font-normal text-white md:text-4xl xl:text-5xl">
            Запишіться і підкресліть свою красу!
          </h3>
          <BtnOrLink
            className="mx-4 my-10 line-clamp-1 h-[53px] overflow-clip text-center text-sm font-bold text-nowrap uppercase md:h-20 lg:mx-9 xl:text-xl"
            anchor={signUpAnchors.link}
            title={signUpAnchors.name}
          />
        </div>
      </SwiperSlide>

      <button className="testim-prev">
        <ArrowIcon />
      </button>
      <button className="testim-next">
        <ArrowIcon />
      </button>
    </Swiper>
  );
};

const TestimonialImage = ({
  src,
  alt,
  isMobile,
  isMounted,
}: {
  src: string;
  alt: string;
  isMobile: boolean;
  isMounted: boolean;
}) => {
  const containerRef = useRef(null) as React.MutableRefObject<HTMLDivElement | null>;
  const imageRef = useRef(null) as React.MutableRefObject<HTMLImageElement | null>;

  // Use a default height for server-side rendering to avoid hydration mismatch
  // Only apply the responsive height after client-side mounting
  const containerHeight = isMounted ? (isMobile ? 320 : 420) : 420;

  useEffect(() => {
    if (!isMounted) return;

    const checkImageSize = () => {
      const container = containerRef.current;
      const image = imageRef.current;

      if (!container || !image) return;

      // Reset any previous classes
      container.classList.remove("needs-scroll");

      // Get the natural dimensions of the image
      const { naturalWidth, naturalHeight } = image;

      // Calculate what the rendered height would be at container width
      const containerWidth = container.clientWidth;
      const expectedHeight = (naturalHeight / naturalWidth) * containerWidth;

      // If the expected height is greater than container height, it needs to scroll
      if (expectedHeight > containerHeight) {
        container.classList.add("needs-scroll");

        // Calculate how much to scroll and set it as a CSS variable
        const scrollAmount = expectedHeight - containerHeight;
        container.style.setProperty("--scroll-amount", `${scrollAmount}px`);
      }
    };

    // Check when image loads
    const image = imageRef.current;
    if (image) {
      if (image.complete) {
        checkImageSize();
      } else {
        image.onload = checkImageSize;
      }
    }

    // Also check on window resize
    window.addEventListener("resize", checkImageSize);
    return () => window.removeEventListener("resize", checkImageSize);
  }, [containerHeight, src, isMounted]);

  return (
    <div ref={containerRef} className="group testimonial-container" style={{ height: `${containerHeight}px` }}>
      <div className="testimonial-image-wrapper">
        <Image
          ref={imageRef}
          src={src || "/placeholder.svg"}
          alt={alt}
          width={455}
          height={800}
          className="testimonial-image"
        />
      </div>
    </div>
  );
};

export { TestimonialsSlider };

// <SwiperSlide key={id} className="testim-slide overflow-hidden">
//   <div className="group">
//     <figure className="relative h-[420px] w-full overflow-hidden">
//       <div className="h-full w-full transition-transform duration-5000 ease-linear group-hover:translate-y-[calc(-100%+420px)]">
//         <Image
//           src={imgUrl || "/placeholder.svg"}
//           alt={name}
//           width={455}
//           height={420}
//           className="size-full object-contain group-hover:object-cover"
//         />
//       </div>
//     </figure>
//   </div>
//   <div className="py-4"></div>

//   <div className="flex items-center px-4 py-3 xl:px-6 xl:py-5">
//     <div className="mr-2 sm:mr-4 md:mr-6">
//       <figure className="border-action size-[60px] overflow-hidden rounded-full border-2 md:size-[80px] lg:size-[100px]">
//         <Image src={avatar} alt={name} width={100} height={100} className="size-full object-cover" />
//       </figure>
//     </div>
//     <div className="space-y-2">
//       <h3 className="text-action text-xl font-semibold lg:text-2xl">{name}</h3>
//       <time className="text-white/90 md:text-lg lg:text-xl" dateTime={date}>
//         {formatDate(date)}
//       </time>
//     </div>
//   </div>
// </SwiperSlide>
