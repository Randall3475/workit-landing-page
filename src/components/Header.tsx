import Logo from './Logo';
import SecondaryButton from './SecondaryButton';
export default function Header() {
  return (
    <>
      <header className="absolute w-full z-50 desktop:pt-14 tablet:pt-8 tablet:px-[39px] px-4 pt-8">
        <div className="flex justify-between container mx-auto">
          <Logo />
          <SecondaryButton text="Apply for access" />
        </div>
      </header>
    </>
  );
}
