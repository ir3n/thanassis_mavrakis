"use client";

import { useState, useRef } from "react";
import Link from "next/link";

import ButtonText from "../Buttons/ButtonText";
import Text from "../Typography/Text";

import { useIsActive } from "@/hooks/useIsActive";

const MenuItem = ({ link, name }: LinkType) => {
  const [hover, setHover] = useState(false);

  const linkRef = useRef(null);

  const active = useIsActive(linkRef);

  return (
    <Link
      href={link}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      ref={linkRef}
      className={`${active ? "text-accent pointer-events-none" : "text-white"}`}
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
