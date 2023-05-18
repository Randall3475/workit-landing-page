import PrimaryButton from './PrimaryButton';
export default function CTA() {
  return (
    <>
      <section className="md:px-[40px] tablet:pb-[61px] desktop:px-4 tablet:px-[40px] mt-28 px-4">
        <div className="container mx-auto relative tablet:block flex flex-col items-center">
          <img
            className="desktop:w-[477px] w-[281px]"
            src="../public/images/image-founder.webp"
            alt="Portrait of founder"
          />
          <div className="bg-pr-purple flex flex-col tablet:items-start isolate desktop:ml-auto desktop:mt-[-18rem] desktop:p-16 desktop:gap-y-8 desktop:max-w-[730px] tablet:mt-[-8rem] tablet:gap-y-6 tablet:px-14 tablet:pt-12 tablet:pb-14 tablet:text-start tablet:max-w-[514px] tablet:ml-auto p-8 items-center gap-y-4 text-center mt-[-3rem] w-full">
            <h2 className="font-heading text-white desktop:text-heading-m text-[32px] heading-[48px]">
              Be the first to test
            </h2>
            <p className="font-body desktop:text-body text-[16px] leading-[28px] text-white whitespace-break-spaces max-w-[282px]">
              Hi, I'm Louis Graham, the founder of the company. Book a demo call
              with me to become a beta tester for our app and kickstart your
              company. Apply for access below and I’ll be in touch to schedule a
              call.
            </p>
            <PrimaryButton text="Apply for access" />
          </div>
          <img
            className="absolute desktop:bottom-[-4rem] desktop:right-[4rem] tablet:bottom-[-6rem] tablet:right-[1rem] tablet:flex hidden"
            src="../public/images/bg-pattern-3.svg"
            alt="Pattern"
          />
        </div>
      </section>
    </>
  );
}
