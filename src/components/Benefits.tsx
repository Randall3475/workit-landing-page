export default function Benefits() {
  return (
    <>
      <section className="desktop:mt-[-17rem] tablet:mt-[-9rem] md:pl-[97px] md:pr-[98px] px-4 flex flex-col mt-[-6rem] pb-[5rem] relative after:absolute after:z-[-1] after:bg-sr-ghost-white after:bottom-0 after:w-full after:h-full after:rounded-b-full after:scale-x-[2.5] overflow-hidden">
        <div className="container mx-auto flex flex-col items-center">
          <img
            className="desktop:w-[767px] tablet:w-[520px] w-[320px] isolate"
            src="./images/image-hero.webp"
            alt="Tilted image of a smartphone"
          />
          <dl className="desktop:grid desktop:grid-cols-3 desktop:gap-x-[26px] flex flex-col gap-y-10 mt-16">
            <div className="desktop:gap-y-14 desktop:flex-col desktop:text-center tablet:max-w-[573px] max-w-[343px] tablet:flex-row tablet:text-start tablet:gap-x-9 text-center flex gap-y-6 flex-col items-center">
              <div className="min-h-[46px] min-w-[48px] text-[20px] leading-[36px] border border-black rounded-full flex items-center justify-center font-heading">
                1
              </div>
              <div className="flex flex-col gap-y-7">
                <dt className="font-heading leading-9 text-[28px]">
                  Actionable insights
                </dt>
                <dd className="font-body text-davys-gray desktop:text-body leading-7 text-[16px]">
                  Optimize your products, improve customer satisfaction and stay
                  ahead of the competition with our product data analytics.
                </dd>
              </div>
            </div>
            <div className="desktop:gap-y-14 desktop:flex-col desktop:text-center tablet:max-w-[573px] max-w-[343px] tablet:flex-row tablet:text-start tablet:gap-x-9 text-center flex gap-y-6 flex-col items-center">
              <div className="min-h-[46px] min-w-[48px] text-[20px] leading-[36px] border border-black rounded-full flex items-center justify-center font-heading">
                2
              </div>
              <div className="flex flex-col gap-y-7">
                <dt className="font-heading leading-9 text-[28px]">
                  Data-driven decisions
                </dt>
                <dd className="font-body text-davys-gray desktop:text-body leading-7 text-[16px]">
                  Make data-driven decisions with our product data analytics.
                  Our AI-generated reports help you unlock insights hidden in
                  your product data.
                </dd>
              </div>
            </div>
            <div className="desktop:gap-y-14 desktop:flex-col desktop:text-center tablet:max-w-[573px] max-w-[343px] tablet:flex-row tablet:text-start tablet:gap-x-9 text-center flex gap-y-6 flex-col items-center">
              <div className="min-h-[46px] min-w-[48px] text-[20px] leading-[36px] border border-black rounded-full flex items-center justify-center font-heading">
                3
              </div>
              <div className="flex flex-col gap-y-7">
                <dt className="font-heading leading-9 text-[28px]">
                  Always affordable
                </dt>
                <dd className="font-body text-davys-gray desktop:text-body leading-7 text-[16px]">
                  Always affordable pricing that scales with your business. Get
                  top-quality product data analytics services without hidden
                  costs or unexpected fees.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
