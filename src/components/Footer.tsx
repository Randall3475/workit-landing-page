import Logo from './Logo';
import FacebookIcon from './FacebookIcon';
import TwitterIcon from './TwitterIcon';
import InstagramIcon from './InstagramIcon';
export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center pt-[74px] pb-[64px] gap-y-[64px]">
        <Logo inverted />
        <div className="flex gap-x-8">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </footer>
    </>
  );
}
