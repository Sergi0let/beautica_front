import { faqs } from "@/data";

export const Faq = () => {
  return (
    <section className="wrap mb-16 md:mb-20">
      <div>
        <h2
          id="faq"
          data-fade
          className="font-source-serif-pro text-accent-foreground mt-6 mb-6 scroll-mt-16 text-center text-2xl leading-none sm:text-5xl md:scroll-mt-20 lg:mb-12 lg:flex lg:text-left xl:text-[60px]"
        >
          <span className="hidden w-[34.5%] lg:block" />
          <span className="block -translate-x-4 lg:translate-x-2">Поширені питання</span>
        </h2>

        <ul className="border-t">
          {faqs["main-faq"].map(({ id, question, answer }, index) => (
            <li
              key={id}
              data-fade
              style={{ animationDelay: `0.${(index + 1) * 5}s` }}
              className="accordion group border-b"
            >
              <span className="accordion-count">{id < 10 ? `0${id}` : id}</span>
              <details className="accordion-details">
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
