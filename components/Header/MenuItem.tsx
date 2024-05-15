"use client";

import { useState } from "react";
import Link from "next/link";

import TextsForButton from "../ButtonText";

function MenuItem({ link, name }: LinkType) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={link}
      className="text-lg"
      data-cursor="-scale"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div magnetic-element="true">
        <TextsForButton text={name} hover={hover} />
      </div>
    </Link>
  );
}

export default MenuItem;
