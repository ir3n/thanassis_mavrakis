"use client";

import { useState } from "react";
import Link from "next/link";

import TextsForButton from "../Buttons/ButtonText";
import Text from "../Typography/Text";

function MenuItem({ link, name }: LinkType) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={link}
      data-cursor="-scale"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Text size="lg">
        <div magnetic-element="true">
          <TextsForButton text={name} hover={hover} />
        </div>
      </Text>
    </Link>
  );
}

export default MenuItem;
