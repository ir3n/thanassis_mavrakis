"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface ProjTeaser {
  link: string;
  imageSrc: string;
  imageAlt: string;
  subtitle: string;
  title: string;
}

const ProjectTeaser = ({
  link,
  imageSrc,
  imageAlt,
  subtitle,
  title,
}: ProjTeaser) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="max-w-[450px] mx-auto mb-[60px] md:mb-0 flex-1">
      <Link href={link} data-cursor-text="View">
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="px-[10px] md:px-0"
        >
          <div className="relative mb-[10px] lg:mb-[40px]">
            <div
              className={`bg-secondary rounded-[20px] absolute top-0 left-0 w-full h-full transition duration-500 ${
                hover ? "rotate-[7deg]" : "rotate-[7deg] lg:rotate-0"
              }`}
            ></div>
            <div
              className={`rounded-[20px] overflow-hidden relative z-1 transition duration-500 ${
                hover ? "lg:rotate-0" : "lg:rotate-[7deg]"
              }`}
            >
              <Image src={imageSrc} width={452} height={478} alt={imageAlt} />
            </div>
          </div>
          <div
            className={`text-sm transition duration-500 ${
              hover
                ? "transform-none opacity-1"
                : "lg:translate-y-[-50%] lg:opacity-0"
            }`}
          >
            {subtitle}
          </div>
          <h3
            className={`title-xs transition duration-500 delay-100 ${
              hover
                ? "transform-none opacity-1"
                : "lg:translate-y-[-50%] lg:opacity-0"
            }`}
          >
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default ProjectTeaser;
