"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SocialLink = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-[100px] h-[100px] rounded-full overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`absolute w-full h-full left-0 top-0 bg-gradient-to-br from-white from-[-70%] backdrop-blur transition-all duration-500 rounded-full ${
          hover ? "transform-none" : "[transform:rotateY(90deg)]"
        }`}
      ></div>
      <Link
        href="/"
        target="_blank"
        className="w-full h-full relative z-1 flex items-center justify-center border border-solid border-white rounded-full"
      >
        <span className="hidden">LinkedIn</span>
        <Image
          src={"/images/social/linkedin.svg"}
          width={38}
          height={38}
          alt={"linkedin"}
        />
      </Link>
    </div>
  );
};

export default SocialLink;
