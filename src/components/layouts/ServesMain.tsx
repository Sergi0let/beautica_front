import { ANCHORS, signUpAnchors } from "@/constants";
import Image from "next/image";
import { BtnOrLink } from "../elements";
import { StarReview } from "../icons";

interface Props {
  name: string;
  description: string;
  imgUrl: string;
}

const ServesMain = ({ name, description, imgUrl }: Props) => {
  return (
    <div className="wrap my-4 grid gap-4 md:my-5 md:grid-cols-2 md:gap-5 xl:min-h-[527px]">
      <div className="bg-accent-lighter md:6 w-fit p-4 md:rounded-[32px] lg:p-12">
        <div className="mb-6 text-center md:text-left">
          <div
            data-fade
            className="inline-flex flex-wrap items-center gap-[10px] rounded-[32px] border border-solid bg-white px-3 py-2 md:p-3"
          >
            <div className="flex gap-1 overflow-hidden">
              {Array.from({ length: 4 }, (_, i) => (
                <StarReview key={i} className="size-4" id={i + 1} />
              ))}
            </div>
            <span className="text-sm uppercase md:text-base">124 клієнти задоволені</span>
          </div>
        </div>

        <h1
          data-fade
          style={{ transitionDelay: "0.3s" }}
          id={ANCHORS.procedure}
          className="text-accent-foreground font-source-serif-pro mb-2 scroll-mt-[194px] text-center text-[32px] delay-300 sm:text-4xl md:text-left lg:mb-6 lg:scroll-mt-[223px] lg:text-5xl xl:text-7xl"
        >
          {name}
        </h1>
        <p data-fade style={{ transitionDelay: "0.6s" }} className="text-center text-sm md:text-left md:text-base">
          {description}
        </p>
        <div className="mt-4 md:mt-12 md:text-left">
          <BtnOrLink
            data-fade
            style={{ transitionDelay: "0.9s" }}
            anchor={signUpAnchors.link}
            type="button"
            className="mx-auto h-14 max-w-[253px] text-sm font-bold uppercase md:mx-0 md:h-20 md:max-w-[400px] md:text-xl"
            title={signUpAnchors.name}
          />
        </div>
      </div>
      <figure className="h-auto max-h-[538px] overflow-hidden rounded-2xl md:rounded-[32px]">
        <Image
          priority={true}
          src={imgUrl}
          alt={name}
          className="h-auto w-full object-cover"
          width={770}
          height={538}
        />
      </figure>
    </div>
  );
};

export { ServesMain };
