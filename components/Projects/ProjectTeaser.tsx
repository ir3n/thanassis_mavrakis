"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Text from "../Typography/Text";

type ProjTeaser = {
  link: string;
  image: ImageType;
  subtitle: string;
  title: string;
};

const ProjectTeaser = ({ link, image, subtitle, title }: ProjTeaser) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="max-w-[660px] mx-auto mb-[60px] md:mb-0 flex-1">
      <Link href={link} data-cursor-text="View">
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="px-[10px] md:px-0"
        >
          <div className="relative mb-[20px] lg:mb-[40px]">
            <div
              className={`bg-secondary rounded absolute top-0 left-0 w-full h-full transition duration-500 ${
                hover ? "rotate-[7deg]" : "rotate-[7deg] lg:rotate-0"
              }`}
            ></div>
            <div
              className={`rounded overflow-hidden relative z-1 transition duration-500 ${
                hover ? "lg:rotate-0" : "lg:rotate-[7deg]"
              }`}
            >
              <Image
                src={image?.src}
                width={660}
                height={698}
                alt={image?.alt}
              />
            </div>
          </div>
          <div
            className={`transition duration-500 ${
              hover
                ? "transform-none opacity-1"
                : "lg:translate-y-[-50%] lg:opacity-0"
            }`}
          >
            <Text size="sm">{subtitle}</Text>
          </div>
          <h3
            className={`text-[1.625rem] lg:text-[2rem]  leading-[1.2] lg:leading-[1.3] font-semibold font-heading transition duration-500 delay-100 ${
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
