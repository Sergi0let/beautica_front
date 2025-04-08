"use client";

import { Drawer, DrawerClose, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { beforAfterData } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const BeforeAfter = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const endIndices = [3, 4, 7, 11, 15];
  const emptySlots = [4, 10];

  const filteredData = beforAfterData.filter((_, i) => !emptySlots.includes(i));

  const renderContent = (elem: { name: string; imgUrl: string; slug: string }) => (
    <span className="w-[140px] cursor-pointer sm:w-[140px] lg:w-[180px]">
      <Image src={`/${elem.imgUrl}`} alt={elem.name} width={180} height={93} className="object-cover" />
      <span className="mt-2 line-clamp-2 text-[9px] font-medium uppercase lg:mt-3 lg:text-xs">{elem.name}</span>
    </span>
  );

  const paginate = (dir: number) => {
    setDirection(dir);
    setActiveIndex((prev) => (prev + dir + beforAfterData.length) % beforAfterData.length);
  };

  // Find the index in the filteredData array that corresponds to the current activeIndex in the original array
  const getFilteredIndex = (originalIndex: number) => {
    return filteredData.findIndex((item) => item === beforAfterData[originalIndex]);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      paginate(1);
      console.log("swiped left");
    },
    onSwipedRight: () => {
      paginate(-1);
      console.log("swiped right");
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 920);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 920);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="wrap-secondary bg-accent-lighter rounded-4xl">
      <div className="mb-2 px-2 pt-10 pb-16 xl:pt-14">
        <h2
          id="before-after"
          className="font-source-serif-pro text-accent-foreground scroll-mt-16 text-center text-2xl leading-none sm:text-5xl md:scroll-mt-20 lg:flex lg:text-left xl:text-[60px]"
        >
          <span className="hidden w-[35%] lg:block" />
          <span className="block -translate-x-4 lg:translate-x-2">До та після</span>
        </h2>

        <ul className="grid grid-cols-2 gap-x-2 gap-y-4 pt-6 min-[420px]:grid-cols-3 min-[920px]:grid-cols-[35%_28.4%_20%_14%] lg:pt-12 xl:grid-cols-[33.3%_27.3%_18%_13.1%] xl:gap-8">
          {beforAfterData.map((elem, i) => {
            if (emptySlots.includes(i)) {
              if (!isDesktop && mounted) return null;
              return <li key={`empty-${i}`} className="bg-transparent" />;
            }

            const isEnd = endIndices.includes(i);

            return (
              <li
                key={i}
                className={`${!isDesktop ? "justify-self-center" : "justify-self-start"} ${isEnd && isDesktop ? "justify-self-end" : ""}`}
              >
                {isDesktop && mounted && (
                  <div className="hidden min-[920px]:block">
                    <Tooltip>
                      <TooltipTrigger>{renderContent(elem)}</TooltipTrigger>
                      <TooltipContent sideOffset={-200} className="bg-secondary rounded-none border p-2">
                        <Image
                          src={`/${elem.imgUrl}`}
                          alt={`${elem.name} №${i + 1}`}
                          width={300}
                          height={280}
                          title={`${elem.name} №${i + 1}`}
                          className="object-cover"
                        />
                        <p className="mt-2 text-center text-2xl font-medium uppercase">{elem.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                )}
                {mounted && !isDesktop && (
                  <div className="min-[920px]:hidden">
                    <Drawer onOpenChange={(open) => setActiveIndex(open ? i : 0)}>
                      <DrawerTrigger aria-controls={`drawer-${i}`}>{renderContent(elem)}</DrawerTrigger>
                      <DrawerContent id={`drawer-${i}`} forceMount {...handlers}>
                        <DrawerClose className="absolute top-2 right-3">
                          <XIcon className="text-light-secondary size-4" />
                        </DrawerClose>
                        <div className="flex-center min-h-[clamp(340px, 10vw, 420px)]">
                          <AnimatePresence custom={direction} mode="wait">
                            <motion.div
                              key={activeIndex}
                              custom={direction}
                              variants={variants}
                              initial="enter"
                              animate="center"
                              exit="exit"
                              transition={{ duration: 0.2, delay: 0.3 }}
                              className="flex w-full flex-col items-center px-2 pt-6 pb-10"
                            >
                              <Image
                                src={`/${beforAfterData[activeIndex].imgUrl}`}
                                alt={beforAfterData[activeIndex].name}
                                width={500}
                                height={320}
                                className="size-full max-w-[520px] object-cover"
                              />
                              <DrawerTitle className="mt-2 text-center text-sm font-medium uppercase">
                                {beforAfterData[activeIndex].name}
                              </DrawerTitle>
                            </motion.div>
                          </AnimatePresence>

                          {/* Dot Pagination */}
                          <div className="absolute right-0 bottom-4 left-0 flex justify-center gap-2">
                            {filteredData.map((_, index) => {
                              const currentFilteredIndex = getFilteredIndex(activeIndex);
                              return (
                                <button
                                  key={index}
                                  onClick={() => {
                                    const originalIndex = beforAfterData.findIndex(
                                      (item) => item === filteredData[index],
                                    );
                                    const newDirection = originalIndex > activeIndex ? 1 : -1;
                                    setDirection(newDirection);
                                    setActiveIndex(originalIndex);
                                  }}
                                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                                    currentFilteredIndex === index ? "bg-accent-foreground h-1 w-1" : "bg-red-100"
                                  }`}
                                  aria-label={`Go to image ${index + 1}`}
                                />
                              );
                            })}
                          </div>
                        </div>
                      </DrawerContent>
                    </Drawer>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export { BeforeAfter };
