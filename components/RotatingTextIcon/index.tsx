"use client";

import { useState } from "react";

import RotatingText from "./RotatingText";

const RotatingTextIcon = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className="block rounded-full relative overflow-hidden"
    >
      <div
        className={`${
          hover ? "opacity-100 scale-100" : "opacity-0 scale-50"
        } transition-all duration-500 `}
      >
        <RotatingText title={name} />
      </div>
      <div className="lg:absolute lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%]">
        {children}
      </div>
    </div>
  );
};

export default RotatingTextIcon;
