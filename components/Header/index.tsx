"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { useScroll } from "@/hooks/useScroll";
import Menu from "./Menu";
import Logo from "./Logo";
import Burger from "./Burger";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const path = usePathname();

  const { isTop } = useScroll();

  useEffect(() => {
    setOpenMenu(false);
  }, [path]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 md:px-[20px]`}>
      <div
        className={`relative md:mt-[20px] lg:mt-[30px] w-full h-full px-[20px] md:px-[40px] py-[20px]`}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full md:rounded-[20px] bg-gradient-to-br from-dark from-[-50%] backdrop-blur transition-all duration-700 ${
            isTop ? "scale-x-0 opacity-0" : "scale-x-100 opacity-1"
          }`}
        ></div>
        <div className="flex items-center relative z-1">
          <Logo />
          <Menu openMenu={openMenu} />
          <Burger openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
