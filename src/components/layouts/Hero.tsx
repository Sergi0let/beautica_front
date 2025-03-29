import Image from "next/image";
import { BtnOrLink } from "../elements";

const Hero = () => {
  return (
    <div className="wrap mb-16 md:mb-20">
      <div className="hero-title mb-4 md:mb-10 lg:mb-16">
        <h1 data-fade>
          <span className="indent-30">Тонке підкреслення Вашої</span> <span>природної краси</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:h-[305px] lg:grid-cols-[0.91fr_0.78fr_0.9fr]">
        <div className="order-2 pr-1 md:pr-2 lg:order-1 lg:col-span-1 lg:pr-0">
          <div className="relative h-full max-w-full lg:max-h-[201px] lg:max-w-[259px]">
            <Image
              data-grow
              style={{ transitionDelay: "0.9s" }}
              priority={true}
              src="/hero/1.webp"
              width={259}
              height={201}
              alt="hero image"
              className="size-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 col-span-2 mx-auto mb-10 max-w-[256px] text-pretty sm:max-w-[456px] md:pr-4 lg:order-2 lg:col-span-1 lg:mb-0 lg:max-w-full xl:pr-10">
          <p style={{ transitionDelay: "0.3s" }} data-fade className="text-sm md:text-base xl:text-lg">
            Ми не змінюємо вашу природну красу — ми допомагаємо її розкрити та підкреслити! Завдяки сучасним методам і
            передовим косметологічним технологіям ви зможете виглядати впевнено, доглянуто та гармонійно.
          </p>
          <BtnOrLink
            data-fade
            style={{ transitionDelay: "0.6s" }}
            anchor="/"
            className="mx-auto mt-4 h-14 max-w-[256px] text-sm font-bold uppercase md:mt-10 lg:h-20 lg:max-w-full lg:text-xl"
            type="button"
            title="Записатися на прийом"
          />
        </div>
        <div className="order-3 pl-1 md:pl-2 lg:order-2 lg:pl-0">
          <div className="relative h-full max-w-full lg:max-h-[305px] lg:max-w-[530px]">
            <Image
              data-grow
              style={{ transitionDelay: "1.2s" }}
              priority={true}
              src="/hero/2.webp"
              width={530}
              height={305}
              alt="hero image"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
