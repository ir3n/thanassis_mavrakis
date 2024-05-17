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

function ProjectBanner({ title, link, date, services, banner }: Props) {
  const desk = useWindowWidth() > 1024;

  const parentRef = useRef(null);
  const innerRef = useRef(null);

  // const gsapSettings = {
  //   scrollTriggerEl: parentRef,
  //   elRef: innerRef,
  //   start: "50% bottom",
  //   fromObj: {
  //     x: "50%",
  //     opacity: 0,
  //   },
  //   toObj: {
  //     x: "0%",
  //     opacity: 1,
  //     duration: 1,
  //   },
  // };

  // useGsap({ ...gsapSettings });

  return (
    <div>
      <LinkDesktopNolinkMobile
        url={link || "#"}
        text={link ? "Visit site" : ""}
      >
        <div
          ref={parentRef}
          className={"bg-secondary rounded flex flex-col-reverse md:flex-row"}
        >
          <div
            className={`p-[20px] pb-[40px] lg:p-[40px] xl:p-[60px] md:w-1/3`}
          >
            <div className="text-[0.75rem] lg:text-[1.125rem] font-light font-body">
              {date}
            </div>
            <div className="flex items-end md:block">
              <div className="flex-1">
                <h2 className="mt-[30px] lg:mt-[50px] min-[1300px]:mt-[145px] font-heading text-[1.75rem] lg:text-[3rem] xl:text-[4rem] mb-[15px]">
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
          <div ref={innerRef} className="rounded md:w-2/3 relative z-1 ">
            <Image
              src={banner}
              width={1053}
              height={644}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </LinkDesktopNolinkMobile>
    </div>
  );
}

export default ProjectBanner;
