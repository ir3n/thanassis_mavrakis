"use client";

import { useState } from "react";
import Link from "next/link";

import ButtonText from "../ButtonText";
import ButtonFill from "../ButtonFill";

function GhostButton({ link, name }: LinkType) {
  const [hover, setHover] = useState(false);

  return (
    <div magnetic-element="true">
      <Link
        href={link}
        className="block text-lg px-[20px] py-[10px] border border-solid border-white rounded-full hover:lg:border-accent relative overflow-hidden"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ButtonFill show={hover} />
        <ButtonText text={name} hover={hover} />
      </Link>
    </div>
  );
}

export default GhostButton;
