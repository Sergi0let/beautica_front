import { StarIcon } from "@/components/icons";
import { sertificateData } from "@/data";
import { SertificationSlider } from "./SertificationSlider";

const Sertification = () => {
  return (
    <section>
      <div className="wrap mt-10 mb-16 md:mb-20">
        <div data-fade className="flex w-full items-center justify-center">
          <h2
            data-fade
            className="font-source-serif-pro text-accent-foreground mb-6 scroll-mt-16 text-justify indent-[58px] text-2xl leading-none sm:text-5xl md:mb-[50px] md:w-[67%] md:scroll-mt-20 lg:indent-[158px] xl:indent-[258px] xl:text-[60px]"
          >
            Кожен сертифікат та диплом є підтвердженням моєї кваліфікації та відданості вашій природній красі
          </h2>
        </div>
        <div className="relative mx-auto flex flex-col-reverse sm:mr-0 md:flex-row md:pr-4">
          <ul className="relative mt-12 grid grid-cols-2 md:z-10 md:mt-0 md:block md:w-2/12 md:bg-white">
            {sertificateData.amouts.map(({ id, value, name }, index) => (
              <li key={id} className="">
                <span
                  data-fade
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  className="font-source-serif-pro text-accent-foreground relative text-[64px] leading-none md:text-[140px]"
                >
                  {value} <StarIcon className="absolute top-4 -right-6 size-6 md:-right-10 md:size-10" />
                </span>
                <span data-fade style={{ transitionDelay: `${index * 0.1}s` }} className="block text-xs md:text-xl">
                  {name}
                </span>
              </li>
            ))}
          </ul>
          <SertificationSlider />
        </div>
      </div>
    </section>
  );
};

export { Sertification };
