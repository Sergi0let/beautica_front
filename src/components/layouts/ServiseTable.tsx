import { InfoIcon } from "@/components/icons";
import { discountPercentage, formatPrice } from "@/lib/utils";
import type { PriceTable } from "@/types";
import { ChevronDown, MoveDown } from "lucide-react";
import Image from "next/image";

interface Props {
  priceTable: PriceTable[];
  name: string;
}

const ServiseTable = ({ priceTable, name }: Props) => {
  const priceName = {
    Ботулінотерапія: "Ботулінотерапію",
    Біоревіталізація: "Біоревіталізацію",
    "Контурна пластика губ": "Контурну пластику губ",
    Мезотерапія: "Мезотерапію",
    "Контурна пластика обличчя": "Контурну пластику обличчя",
  };

  return (
    <section className="wrap mt-10 mb-10 md:mt-14 md:mb-20 lg:mt-16 xl:mt-20">
      <h2
        id=""
        className="font-source-serif-pro text-accent-foreground scroll-mt-16 text-center text-2xl leading-none sm:text-4xl md:scroll-mt-20 lg:flex lg:text-left xl:text-[60px]"
      >
        <span className="hidden w-[35%] lg:block" />
        <span className="block">Ціни на {priceName[name as keyof typeof priceName]}</span>
      </h2>

      <div>
        <ul className="mt:mb-8 mt-6 border-t">
          {priceTable.map(({ id, title, imgUrl, description, prices }, index) => (
            <li
              key={id}
              data-fade
              style={{ animationDelay: `0.${(index + 1) * 5}s` }}
              className="accordion-service group border-b"
            >
              <details className="peer">
                <summary className="flex">
                  <span className="hidden w-[35%] lg:block" />
                  <span className="group-hover:text-accent-foreground block py-6" role="term">
                    {title}
                  </span>
                  <MoveDown className="accordion-service-arrow" />
                </summary>
              </details>
              <div className="accordion-service-content" role="definition">
                <div className="accordion-service-content-body">
                  <div className="accardion-drug mb-4 lg:mx-auto lg:p-5">
                    <details>
                      <summary className="flex justify-start">
                        <InfoIcon className="w-5" />
                        <span className="!px-2 !text-base font-semibold" role="term">
                          Про препарат {title}
                        </span>
                        <ChevronDown className="accardion-drug-arrow text-secondary" />
                      </summary>
                    </details>
                    <div
                      className="accardion-drug_content bg-accent-lighter mx-auto mt-2 flex max-w-[335px] flex-col"
                      role="definition"
                    >
                      <div className="accardion-drug_content-body">
                        <figure className="px-4 pt-4">
                          <div>
                            <Image
                              src={imgUrl}
                              alt={title}
                              className="size-full object-cover"
                              width={303}
                              height={160}
                            />
                          </div>
                          <figcaption className="mt-5 text-2xl font-bold">{title}</figcaption>
                        </figure>
                        <p className="p-4 pt-2">{description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="table-price">
                    <table>
                      <thead>
                        <tr>
                          <th>Зона обличчя</th>
                          <th>Ціна, грн</th>
                        </tr>
                      </thead>
                      <tbody>
                        {prices.listingPrice.map(({ id, title, price, newPrice }) => (
                          <tr key={id}>
                            <td>
                              {title}{" "}
                              {newPrice && (
                                <span className="bg-action ml-3 rounded px-1.5 py-1 text-xs font-bold md:px-[10px] md:py-[6px] md:text-base">{`-${discountPercentage(price, newPrice)}%`}</span>
                              )}
                            </td>
                            <td>
                              <b className="text-nowrap">{formatPrice(newPrice ? newPrice : price)}</b>
                              {newPrice && <span>{formatPrice(newPrice)}</span>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { ServiseTable };
