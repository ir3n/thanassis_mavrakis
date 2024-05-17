import Link from "next/link";
import Image from "next/image";

import data from "@/data/header.json";
import MenuItem from "./MenuItem";
import GhostButton from "../Buttons/GhostButton";
import Text from "../Typography/Text";

const Menu = ({ openMenu }: { openMenu: boolean }) => {
  const { menu, cta } = data;

  return (
    <div
      className={`fixed top-[-100%] left-0 w-full h-full md:relative flex-1 md:flex md:justify-between md:items-center  md:top-auto md:left-auto md:w-auto md:h-auto bg-[url('/images/mobile-menu-bg.png')] bg-no-repeat bg-cover md:bg-none text-center md:text-left pt-[150px] md:pt-0 transition duration-500 ${
        openMenu ? "translate-y-[100%]" : "transform-none"
      }`}
    >
      <nav className="m-auto">
        <ul className="md:flex items-center gap-[80px]">
          <li className="md:hidden mb-[50px] md:mb-0">
            <Link href="/">
              <Text size="lg">Home</Text>
            </Link>
          </li>
          {menu?.map((item, i) => (
            <li key={`menu-item-${i}`} className="mb-[50px] md:mb-0">
              <MenuItem link={item?.link} name={item?.name} />
            </li>
          ))}
        </ul>
      </nav>

      {cta && <GhostButton link={cta?.link} name={cta?.name} />}

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
