import { ANCHORS, faqs1 } from "@/constants";

interface Props {
  type?: string;
}
const Faq = ({ type = "generalType" }: Props) => {
  return (
    <section className="wrap mb-16 md:mb-20">
      <div>
        <h2
          id={ANCHORS.faq}
          data-fade
          className="font-source-serif-pro text-accent-foreground mt-6 mb-6 scroll-mt-[96px] text-center text-2xl leading-none sm:text-5xl lg:mb-12 lg:flex lg:scroll-mt-28 lg:text-left xl:text-[60px]"
        >
          <span className="hidden w-[34.5%] lg:block" />
          <span className="block -translate-x-4 lg:translate-x-2">Поширені питання</span>
        </h2>

        <ul className="border-t border-solid">
          {faqs1[type].map(({ id, question, answer }, index) => (
            <li
              key={id}
              data-fade
              style={{ transitionDelay: `0.${index * 0.1}s` }}
              className="accordion group border-b border-solid"
            >
              <span className="accordion-count">{+id < 10 ? `0${id}` : id}</span>
              <details className="accordion-details accordion-hook">
                <summary className="accordion-summary">
                  <span />
                  <span className="accordion-title group-hover:text-accent-foreground" role="term">
                    {question}
                  </span>
                </summary>
              </details>
              <div className="accordion-content" role="definition">
                <span />
                <p className="accordion-content-body">{answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Faq };
