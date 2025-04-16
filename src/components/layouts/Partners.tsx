import { partnersData, signUpAnchors } from "@/constants";
import Image from "next/image";
import { BtnOrLink } from "../elements";
import { StarIcon } from "../icons";

const Partners = () => {
  return (
    <section className="wrap mb-16 md:mb-[120px]">
      <div>
        <header className="mb-6 flex flex-col-reverse items-center justify-center gap-4 lg:mb-9 lg:grid lg:grid-cols-3 lg:gap-5">
          <div data-fade className="flex w-full items-center justify-center md:gap-4 md:justify-self-start">
            <StarIcon className="size-6" />
            <p className="text-accent-foreground text-center text-base leading-tight font-semibold xl:text-xl">
              У своїй роботі я використовую
              <br /> косметику цих брендів
            </p>
            <StarIcon className="size-6" />
          </div>
          <div className="flex items-center justify-center">
            <h2
              data-fade
              id="partners"
              className="font-source-serif-pro text-accent-foreground scroll-mt-[96px] text-center text-2xl leading-none text-nowrap sm:text-5xl lg:flex lg:scroll-mt-28 lg:text-left xl:text-[60px]"
            >
              <span className="block xl:-translate-x-6">Наші партнери</span>
            </h2>
          </div>
          <div className="hidden w-4/5 items-center justify-self-end lg:flex">
            <BtnOrLink
              anchor={signUpAnchors.link}
              className="h-16 w-[280px] font-bold uppercase xl:h-20 xl:w-[380px] xl:text-xl"
              title="Записатись на прийом"
            />
          </div>
        </header>

        <ul
          data-fade
          className="md:bg-accent-foreground grid h-full grid-cols-2 gap-[1px] bg-[#ffb6b6] p-[1px] md:grid-cols-4 md:gap-0.5 md:p-0.5"
        >
          {partnersData.map((partner, index) => (
            <li
              key={index}
              className="flex aspect-video items-center justify-center bg-white md:aspect-[12/9] lg:aspect-[14/9] xl:aspect-video"
            >
              {partner.src ? (
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex max-h-[80%] max-w-[80%] items-center justify-center"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    className="h-auto max-h-full w-auto max-w-[60%] object-contain contrast-0 transition-all duration-500 ease-in-out group-hover:contrast-100 sm:max-w-[80%]"
                    width={200}
                    height={100}
                  />
                </a>
              ) : null}
            </li>
          ))}
        </ul>

        <footer className="mt-6 flex items-center justify-center lg:hidden">
          <BtnOrLink
            anchor={signUpAnchors.link}
            className="h-[53px] max-w-[256px] px-4 text-sm font-bold uppercase"
            title="Записатись на прийом"
          />
        </footer>
      </div>
    </section>
  );
};
export { Partners };
