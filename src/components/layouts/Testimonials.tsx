import { ANCHORS } from "@/constants";
import { TestimonialsSlider } from "./TestimonialsSlider";

const Testimonials = () => {
  return (
    <section className="wrap-secondary mb-16 md:mb-20 lg:mb-[120px]">
      <div className="rounded-4xl bg-(image:--bg-pattern) pt-8 pb-8 md:pt-12 md:pb-20 lg:pt-20">
        <h2
          id={ANCHORS.reviews}
          data-fade
          className="font-source-serif-pro mt-6 mb-6 scroll-mt-[96px] text-center text-2xl leading-none text-white sm:text-5xl lg:mb-10 lg:flex lg:scroll-mt-28 lg:text-left xl:text-[60px]"
        >
          <span className="hidden w-[35%] lg:block" />
          <span className="block -translate-x-4 lg:translate-x-2">Відгуки клієнтів</span>
        </h2>
        <div className="overflow-x-hidden px-3">
          <TestimonialsSlider />
        </div>
      </div>
    </section>
  );
};

export { Testimonials };
