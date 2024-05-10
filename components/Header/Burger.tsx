import { Dispatch, SetStateAction } from "react";

interface BurgerProps {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

function Burger({ openMenu, setOpenMenu }: BurgerProps) {
  return (
    <button
      onClick={() => setOpenMenu(!openMenu)}
      className="py-[10px] md:hidden ml-auto relative z-50"
    >
      <div
        className={`h-[2px] w-[27px] bg-white transition duration-500 ${
          openMenu ? "translate-x-[9px] rotate-45" : "transform-none"
        }`}
      ></div>
      <div
        className={`h-[2px] w-[27px] bg-white ml-[8px] mt-[10px] transition duration-500 ${
          openMenu
            ? "translate-x[2px] translate-y-[-12px] rotate-[-45deg]"
            : "transform-none"
        }`}
      ></div>
    </button>
  );
}

export default Burger;
