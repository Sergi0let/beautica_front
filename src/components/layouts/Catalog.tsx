import { servicesData } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CustomCursor } from "../elements";

const Catalog = () => {
  return (
    <section className="relative mb-16 pt-20 md:mb-14">
      <div className="wrap">
        <h2
          data-fade
          id="services"
          className="font-source-serif-pro text-accent-foreground scroll-mt-20 text-center text-2xl leading-none lg:flex lg:scroll-mt-24 lg:text-left lg:text-5xl xl:text-[60px]"
        >
          <span className="hidden w-1/3 lg:block"></span>
          <span className="block -translate-x-4 lg:translate-x-2">Ми робимо</span>
        </h2>
      </div>
      <CustomCursor />
      <ul id="services-section" className="mt-5">
        {servicesData.map((service, index) => (
          <li key={index} className="service-item group">
            <Link href={service.pageUrl}>
              <div className="service-item-link-mob bg-action">
                <ArrowUpRight size={16} />
              </div>
              <div className="wrap -mx-4 border-t border-solid md:-mx-0">
                <div className="flex">
                  <div className="service-icon relative z-10 md:group-hover:scale-100">
                    <figure>
                      <Image src={service.imgUrl} alt={service.name} width={372} height={448} />
                    </figure>
                  </div>

                  <div className="service-content">
                    <h3 className="md:group-hover:text-white">{service.name}</h3>
                    <p className="pr-4 md:md:group-hover:text-white">від {service.price}грн</p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="wrap">
        <div className="h-[1px] border-t border-solid" />
      </div>
    </section>
  );
};

export { Catalog };
