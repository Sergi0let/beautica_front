import { CertificateIcon, FlowerIcon, StarsIcon } from "@/components";
import Image from "next/image";
import ParallaxMask from "../elements/ParallaxMask";

const About = () => {
  return (
    <section className="wrap-secondary mb-16 overflow-hidden md:mb-20">
      <div className="relative h-[700px] rounded-lg bg-blue-50 bg-(image:--bg-pattern) px-3 pt-8 text-white lg:h-[800px] lg:px-5 lg:pt-14">
        <div className="grid lg:grid-cols-[0.91fr_0.78fr_0.9fr]">
          <div className="order-2 px-8 pt-3 pr-10 text-center text-sm md:text-lg lg:order-1 lg:px-0 lg:pt-0 lg:text-left">
            <p className="[&_i]:text-primary inline lg:block [&_i]:not-italic">
              Я - Вікторія, консультант з краси й здоров&apos;я твоєї шкіри. Здобула{" "}
              <i>медичну та вищу фармацевтичну освіту</i>. Тренер <i>Alma lesers Ukraine</i>.{" "}
            </p>
            <p className="[&_i]:text-primary inline lg:mt-5 lg:block [&_i]:not-italic">
              Працюю в косметології <i>понад 10 років</i>, тому знаю, як підкреслити твою вроду та зберегти її на довгі
              роки.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-source-serif-pro text-center text-2xl lg:text-5xl xl:text-[60px]">Про мене</h2>
          </div>
        </div>

        <div data-fade className="absolute bottom-0 left-1/2 w-[295px] -translate-x-1/2 lg:w-[398px]">
          <Image src="/about/1.webp" alt="Photo Viki" width={398} height={703} className="relative z-10" />
          <ParallaxMask />
        </div>

        <ul className="absolute right-5 bottom-5 left-5 grid gap-2 text-sm md:grid-cols-3 lg:text-xl xl:gap-16">
          <li
            data-fade
            style={{ transitionDelay: "0.3s" }}
            className="flex items-center gap-2 rounded-xl border border-white/30 px-5 py-4 backdrop-blur-md xl:px-6 xl:py-7"
          >
            <CertificateIcon className="w-8 shrink-0 xl:w-16" />
            <p>Сертифікований спеціаліст із глибокими знаннями та практикою.</p>
          </li>
          <li
            data-fade
            style={{ transitionDelay: "0.6s" }}
            className="flex items-center gap-2 rounded-xl border border-white/30 px-5 py-4 backdrop-blur-md xl:px-6 xl:py-7"
          >
            <StarsIcon className="w-8 shrink-0 xl:w-16" />
            <p>Забезпечення безпеки та зручності кожної процедури.</p>
          </li>
          <li
            data-fade
            style={{ transitionDelay: "0.9s" }}
            className="flex items-center gap-2 rounded-xl border border-white/30 px-5 py-4 backdrop-blur-md xl:px-6 xl:py-7"
          >
            <FlowerIcon className="w-8 shrink-0 xl:w-16" />
            <p>Природний вигляд без зайвих змін, завдяки сучасним технікам.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { About };
