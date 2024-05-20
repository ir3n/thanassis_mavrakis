"use client";

import { useState } from "react";
import Link from "next/link";
import ButtonFill from "../ButtonFill";
import ButtonText from "../ButtonText";

type Cta = {
  text: string;
  url: string;
  filled?: boolean;
};

const CircleButton = ({ text, url, filled = false }: Cta) => {
  const [hover, setHover] = useState(false);

  return (
    <div magnetic-element="true" data-cursor="-opacity">
      <Link
        href={url || "#"}
        className={`font-body font-semibold text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem] leading-[1.2] w-[6.875rem] lg:w-[10rem] xl:w-[12.5rem] h-[6.875rem] lg:h-[10rem] xl:h-[12.5rem] px-[20px] rounded-full flex items-center justify-center text-center overflow-hidden relative hover:lg:text-dark ${
          filled ? "bg-accent" : " border border-solid border-white"
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ButtonFill show={hover} />
        <ButtonText text={text} hover={hover} />
      </Link>
    </div>
  );
};

export default CircleButton;
