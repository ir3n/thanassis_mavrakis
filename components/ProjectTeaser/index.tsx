"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectTeaser = () => {
  const [hover, setHover] = useState(false);
  return (
    <Link href={"/"} data-cursor-text="view">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className=""
      >
        <div className="relative mb-[40px]">
          <div
            className={`bg-secondary rounded-[20px] absolute top-0 left-0 w-full h-full transition duration-500 ${
              hover ? "rotate-[7deg]" : "rotate-0"
            }`}
          ></div>
          <div
            className={`rounded-[20px] overflow-hidden relative z-1 transition duration-500 ${
              hover ? "rotate-0" : "rotate-[7deg]"
            }`}
          >
            <Image
              src={"/images/projects/retool-teaser.png"}
              width={452}
              height={478}
              alt={"Retool Website"}
            />
          </div>
        </div>
        <div
          className={`text-sm transition duration-500 ${
            hover ? "transform-none opacity-1" : "translate-y-[-50%] opacity-0"
          }`}
        >
          #UI/UX Design
        </div>
        <h3
          className={`title-xs transition duration-500 delay-100 ${
            hover ? "transform-none opacity-1" : "translate-y-[-50%] opacity-0"
          }`}
        >
          Retool website design
        </h3>
      </div>
    </Link>
  );
};

export default ProjectTeaser;
