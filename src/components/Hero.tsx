import PrimaryButton from './PrimaryButton';
export default function Hero() {
  return (
    <>
      <section className="flex desktop:h-[730px] tablet:h-[540px] md:h-[540px] h-[480px] overflow-hidden flex-col px-4 relative after:absolute after:bg-pr-purple after:bottom-0 after:w-full after:h-full after:rounded-b-full after:scale-x-[2.2]">
        <div className="container mx-auto relative flex flex-col items-center">
          <img
            className="z-50 desktop:left-[-9rem] desktop:top-[8rem] tablet:left-[-15rem] tablet:top-[4rem] tablet:flex hidden absolute"
            src="../public/images/bg-pattern-1.svg"
            alt="Pattern"
          />
          <div className="z-50 text-center pb-12 desktop:max-w-[635px] desktop:mt-36 tablet:max-w-[32rem] tablet:mt-32 mt-[130px] max-w-[343px]">
            <h1 className="desktop:text-heading-l font-heading font-semibold tablet:text-[60px] tablet:leading-[1] leading-[2.825rem] text-[42px] text-white text-center pb-8 z-50">
              Data{' '}
              <span className="underline decoration-[.185rem] decoration-pr-green underline-offset-8">
                tailored
              </span>{' '}
              to your needs.
            </h1>
            <PrimaryButton text="Learn more" />
          </div>
          <img
            className="z-50 desktop:right-[-3rem] desktop:top-[20rem] tablet:right-[-7rem] tablet:top-[14rem] tablet:flex absolute hidden"
            src="../public/images/bg-pattern-2.svg"
            alt="Pattern"
          />
        </div>
      </section>
    </>
  );
}
