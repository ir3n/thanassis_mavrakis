"use client";

import { useState } from "react";

import RotatingText from "./RotatingText";

function RotatingTextIcon({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
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
        } hidden lg:block transition-all duration-500 `}
      >
        <RotatingText title={name} />
      </div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {children}
      </div>
    </div>
  );
}

export default RotatingTextIcon;
