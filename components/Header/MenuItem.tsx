"use client";

import { useState } from "react";
import Link from "next/link";

import ButtonText from "../Buttons/ButtonText";
import Text from "../Typography/Text";

const MenuItem = ({ link, name }: LinkType) => {
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
          <ButtonText text={name} hover={hover} />
        </div>
      </Text>
    </Link>
  );
};

export default MenuItem;
