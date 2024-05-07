"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Social {
  name: string;
  image: string;
  link: string;
}

const SocialLink = ({ name, image, link }: Social) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-[60px] lg:w-[100px] h-[60px] lg:h-[100px] rounded-full overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`absolute w-full h-full left-0 top-0 bg-gradient-to-br from-white from-[-70%] backdrop-blur transition-all duration-500 rounded-full opacity-50 ${
          hover ? "rotate-90" : "transform-none"
        }`}
      ></div>
      <Link
        href={link || "#"}
        target="_blank"
        className="w-full h-full relative z-1 flex items-center justify-center rounded-full p-[18px]"
      >
        <span className="hidden">{name}</span>
        <Image src={image} width={38} height={38} alt={name} />
      </Link>
    </div>
  );
};

export default SocialLink;
