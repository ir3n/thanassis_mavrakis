"use client";

import { useRef } from "react";
import LinkDesktopNolinkMobile from "../../LinkDesktopNolinkMobile";
import Image from "next/image";
import CircleButton from "../../Buttons/CircleButton";
import Text from "@/components/Typography/Text";

import { useWindowWidth } from "@/hooks/useWindowWidth";
import { useGsap } from "@/hooks/useGsap";

type Props = {
  title: string;
  link: string;
  date: string;
  services: string[];
  banner: string;
};

const ProjectBanner = ({ title, link, date, services, banner }: Props) => {
  const desk = useWindowWidth() > 1024;
  const mobile = useWindowWidth() < 768;

  const parentRef = useRef(null);
  const innerRef = useRef(null);

  const gsapSettings = {
    scrollTriggerEl: parentRef,
    elRef: innerRef,
    start: "50% bottom",
    fromObj: {
      width: "100%",
    },
    toObj: {
      width: mobile ? "100%" : "65%",
      duration: 1,
    },
  };

  useGsap({ ...gsapSettings });

  return (
    <div>
      <LinkDesktopNolinkMobile
        url={link || "#"}
        text={link ? "Visit site" : ""}
        external={true}
      >
        <div
          ref={parentRef}
          className={
            "bg-secondary md:bg-transparent relative rounded flex flex-col-reverse md:flex-row lg:min-h-[450px] xl:min-h-[640px]"
          }
        >
          <div
            className={`md:bg-secondary p-[20px] pb-[40px] lg:p-[40px] xl:p-[60px] md:w-[40%] md:flex md:flex-col`}
          >
            <div className="text-[0.75rem] lg:text-[1.125rem] font-light font-body">
              {date}
            </div>
            <div className="flex items-end md:block mt-[30px] lg:mt-auto lg:h-[65%]">
              <div className="flex-1">
                <h2 className="font-heading text-[1.75rem] lg:text-[3rem] xl:text-[4rem] mb-[15px]">
                  Services
                </h2>

                {services?.map((item, i) => (
                  <div key={`service-${i}`} className="mb-[5px]">
                    <Text size="lg">{item}</Text>
                  </div>
                ))}
              </div>
              {!desk && (
                <div className="w-fit ml-4 md:ml-0 md:mt-8 lg:hidden">
                  <CircleButton text={"Visit site"} url={link} filled={true} />
                </div>
              )}
            </div>
          </div>
          <div
            ref={innerRef}
            className="rounded relative w-full md:absolute md:right-0 z-1 h-full"
          >
            <Image
              src={banner}
              width={1600}
              height={978}
              alt={title}
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </LinkDesktopNolinkMobile>
    </div>
  );
};

export default ProjectBanner;
