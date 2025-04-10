"use client";

import { ArrowIcon } from "@/components";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { sertificateData } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useSwipeable } from "react-swipeable";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Motion variants for drawer animations
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

// Certificate thumbnail component
const CertificateThumbnail = ({ title, imgUrl }: { title: string; imgUrl: string }) => (
  <div className="flex h-full cursor-pointer flex-col items-start justify-start transition-transform duration-300 ease-in-out hover:z-50 hover:scale-110">
    <div className="z-50 w-full">
      <Image src={imgUrl} alt={title} width={220} height={300} className="size-full object-cover" />
    </div>
  </div>
);

// Certificate drawer content for mobile view
const CertificateDrawerContent = ({
  activeIndex,
  direction,
  certificates,
  handlers,
}: {
  activeIndex: number;
  direction: number;
  certificates: typeof sertificateData.diploms;
  handlers: ReturnType<typeof useSwipeable>;
}) => (
  <div className="flex-center min-h-[clamp(340px, 10vw, 420px)]" {...handlers}>
    <DrawerClose className="absolute top-2 right-3">
      <XIcon className="text-light-secondary size-4" />
    </DrawerClose>

    <AnimatePresence custom={direction} mode="wait">
      <motion.div
        key={activeIndex}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.2, delay: 0.3 }}
        className="flex w-full flex-col items-center px-2 pt-6 pb-10"
      >
        <Image
          src={certificates[activeIndex].imgUrl}
          alt={certificates[activeIndex].title}
          width={500}
          height={320}
          className="size-full max-w-[520px] object-contain"
        />
        <DrawerTitle className="mt-2 text-center text-sm font-medium uppercase">
          {certificates[activeIndex].title}
        </DrawerTitle>
        <DrawerDescription className="sr-only">Detailed view of the certificate</DrawerDescription>
      </motion.div>
    </AnimatePresence>

    <PaginationDots total={certificates.length} activeIndex={activeIndex} />
  </div>
);

// Pagination dots component
const PaginationDots = ({ total, activeIndex }: { total: number; activeIndex: number }) => (
  <div className="absolute right-0 bottom-4 left-0 flex justify-center gap-2">
    {Array.from({ length: total }).map((_, index) => (
      <button
        key={index}
        onClick={() => {}} // This should be connected to change the active index
        className={`h-2 w-2 rounded-full transition-all duration-300 ${
          activeIndex === index ? "bg-accent-foreground h-1 w-1" : "bg-red-100"
        }`}
        aria-label={`Go to image ${index + 1}`}
      />
    ))}
  </div>
);

const SertificationSlider = () => {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Swipe handlers for mobile view
  const handlers = useSwipeable({
    onSwipedLeft: () => paginate(1),
    onSwipedRight: () => paginate(-1),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const paginate = (dir: number) => {
    setDirection(dir);
    setActiveIndex((prev) => (prev + dir + sertificateData.diploms.length) % sertificateData.diploms.length);
  };

  // Check if component is mounted and detect screen size
  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 920);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Used for responsive Swiper settings
  const isTabletOrLarger = useMediaQuery({ minWidth: 1024 });

  if (!mounted) return null;

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={isTabletOrLarger ? 35 : 20}
      slidesPerView={2.5}
      navigation={{
        nextEl: ".testim-next",
        prevEl: ".testim-prev",
      }}
      scrollbar={{
        draggable: true,
        dragClass: "testim-progress",
        horizontalClass: "sertificate-progress-horizontal",
      }}
      breakpoints={{
        540: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      className="sertificate-slider"
      wrapperClass="sertificate-wrapper pl-4"
    >
      {sertificateData.diploms.map(({ id, title, imgUrl }, index) => (
        <SwiperSlide key={id} className="sertificate-slide h-full">
          {isDesktop ? (
            <CertificateThumbnail title={title} imgUrl={imgUrl} />
          ) : (
            <Drawer onOpenChange={(open) => open && setActiveIndex(index)}>
              <DrawerTrigger aria-controls={`sertificate-drawer-${index}`}>
                <CertificateThumbnail title={title} imgUrl={imgUrl} />
              </DrawerTrigger>

              <DrawerContent id={`sertificate-drawer-${index}`} forceMount>
                <CertificateDrawerContent
                  activeIndex={activeIndex}
                  direction={direction}
                  certificates={sertificateData.diploms}
                  handlers={handlers}
                />
              </DrawerContent>
            </Drawer>
          )}
        </SwiperSlide>
      ))}

      {/* Navigation buttons */}
      <button className="testim-prev">
        <ArrowIcon />
      </button>
      <button className="testim-next">
        <ArrowIcon />
      </button>
    </Swiper>
  );
};

export { SertificationSlider };
