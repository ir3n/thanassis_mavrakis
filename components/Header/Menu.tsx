import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import MenuItem from "./MenuItem";
import GhostButton from "../Buttons/GhostButton";
import Text from "../Typography/Text";

import data from "@/data/header.json";
import NoiseBg from "../NoiseBg";

const Menu = ({ openMenu }: { openMenu: boolean }) => {
  const { menu, cta } = data;

  const path = usePathname();

  return (
    <div
      className={`fixed top-0 left-[100%] w-screen h-screen md:relative flex-1 md:top-auto md:left-auto md:h-auto md:w-auto text-center md:text-left  transition duration-500 bg-dark md:bg-opacity-0 ${
        openMenu ? "translate-x-[-100%]" : "transform-none"
      }`}
    >
      <div className="w-full h-full md:flex md:justify-between md:items-center relative md:w-auto md:h-auto">
        <div className="md:hidden">
          <NoiseBg />
        </div>
        <nav className="m-auto pt-[150px] md:pt-0  relative z-[1]">
          <ul className="md:flex items-center gap-[80px]">
            <li className="md:hidden mb-[50px] md:mb-0">
              <Link
                href="/"
                className={`${
                  path === "/"
                    ? "text-accent pointer-events-none"
                    : "text-white"
                }`}
              >
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

        {cta && (
          <div className="flex justify-center md:block relative z-[1]">
            <GhostButton link={cta?.link} name={cta?.name} />
          </div>
        )}

        <div className="md:hidden absolute bottom-0 left-0 right-0">
          <Image
            src="/images/mobile-menu-splash.svg"
            width={767}
            height={565}
            alt="Splash"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
