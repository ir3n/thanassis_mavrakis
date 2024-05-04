import Link from "next/link";
import Image from "next/image";

const Menu = ({ openMenu }) => {
  return (
    <div
      className={`fixed top-[-100%] left-0 w-full h-full md:relative flex-1 md:flex md:justify-between md:items-center  md:top-auto md:left-auto md:w-auto md:h-auto bg-[url('/images/mobile-menu-bg.png')] bg-no-repeat bg-cover md:bg-none text-center md:text-left pt-[150px] md:pt-0 transition duration-500 ${
        openMenu ? "translate-y-[100%]" : "transform-none"
      }`}
    >
      <nav className="m-auto">
        <ul className="md:flex items-center gap-[80px]">
          <li className="mb-[50px] md:mb-0">
            <Link href="/projects" className="text-lg">
              Projects
            </Link>
          </li>
          <li className="mb-[50px] md:mb-0">
            <Link href="/about" className="text-lg">
              About
            </Link>
          </li>
        </ul>
      </nav>

      <Link
        href="mailto:thanassis.mavrakis@gmail.com"
        className="text-lg ghost-cta"
      >
        Available for hire
      </Link>
      <div className="md:hidden absolute bottom-0 left-0 right-0 z-[-1]">
        <Image
          src="/images/mobile-menu-splash.svg"
          width={767}
          height={565}
          alt="Splash"
        />
      </div>
    </div>
  );
};

export default Menu;
