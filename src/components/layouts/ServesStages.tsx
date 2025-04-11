interface Props {
  stages: { id: number; title: string; description: string }[];
}

const ServesStages = ({ stages }: Props) => {
  return (
    <section className="wrap mb-10 md:mb-20">
      <div className="rounded-4xl bg-(image:--bg-pattern)">
        <div className="px-4 py-[40px] md:px-2 lg:py-[80px]">
          <div className="w-full">
            <h2
              id="stages"
              className="font-source-serif-pro scroll-mt-16 text-center text-2xl leading-none text-white sm:text-5xl md:scroll-mt-20 xl:text-[60px]"
            >
              Етапи проведення
            </h2>
          </div>

          <div className="relative flex flex-col items-center lg:block">
            <div className="stage-decor" />
            <ul className="stage-list">
              {stages.map((item, index) => (
                <li key={index} className="stage-item">
                  <div>
                    <div className="stage-count_wrapper">
                      <div>
                        <span className="stage-count">0{index + 1}</span>
                      </div>
                      <h3>{item.title}</h3>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 lg:block lg:gap-2">
                      <div className="flex-center lg:hidden">
                        <div className="h-full w-[2px] bg-white" />
                      </div>
                      <p className="mt-2 text-xs font-normal text-white md:mt-4 lg:text-base">{item.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ServesStages };
