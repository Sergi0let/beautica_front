"use client";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { ArrowIcon, BtnOrLink } from "@/components";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import { testimonialsData } from "@/data";
import { formatDate } from "@/lib/utils";

type TestimonialProps = {
  id: number;
  name: string;
  avatar: string;
  comment: string;
  date: string;
  imgUrl: string;
};

const TestimonialsSlider = () => {
  const isTabletOrLarger = useMediaQuery({ minWidth: 1024 });

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={isTabletOrLarger ? 20 : 15}
      slidesPerView={1.25}
      navigation={{ nextEl: ".testim-next", prevEl: ".testim-prev" }}
      scrollbar={{ draggable: true, dragClass: "testim-progress", horizontalClass: "testim-progress-horizontal" }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
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
      {testimonialsData.map(({ id, avatar, name, date, imgUrl }: TestimonialProps) => (
        <SwiperSlide key={id} className="testim-slide overflow-hidden">
          <div className="flex-1">
            <figure>
              <Image src={imgUrl} alt={name} width={455} height={420} className="size-full object-contain" />
            </figure>
          </div>

          <div className="flex items-center px-4 py-3 xl:px-6 xl:py-5">
            <div className="mr-2 sm:mr-4 md:mr-6">
              <figure className="border-action size-[60px] overflow-hidden rounded-full border-2 md:size-[80px] lg:size-[100px]">
                <Image src={avatar} alt={name} width={100} height={100} className="size-full object-cover" />
              </figure>
            </div>
            <div className="space-y-2">
              <h3 className="text-action text-xl font-semibold lg:text-2xl">{name}</h3>
              <time className="text-white/90 md:text-lg lg:text-xl" dateTime={date}>
                {formatDate(date)}
              </time>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <SwiperSlide className="testim-slide">
        <div className="flex h-full flex-col justify-between px-2 pt-8 lg:pt-14">
          <h3 className="font-source-serif-pro text-center text-2xl leading-tight font-normal text-white md:text-4xl xl:text-5xl">
            Запишіться і підкресліть свою красу!
          </h3>
          <BtnOrLink
            className="mx-4 my-10 line-clamp-1 h-[53px] overflow-clip text-center text-sm font-bold text-nowrap uppercase md:h-20 lg:mx-9 xl:text-xl"
            anchor="/"
            title="Записатись на прийом"
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

export { TestimonialsSlider };
