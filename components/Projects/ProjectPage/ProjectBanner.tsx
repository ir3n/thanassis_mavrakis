"use client";

import { useRef } from "react";
import LinkDesktopNolinkMobile from "../../LinkDesktopNolinkMobile";
import Image from "next/image";
import CircleButton from "../../Buttons/CircleButton";
import Text from "@/components/Typography/Text";

import { useWindowWidth } from "@/hooks/useWindowWidth";

type Props = {
  title: string;
  link: string;
  date: string;
  services: string[];
  banner: string;
};

function ProjectBanner({ title, link, date, services, banner }: Props) {
  const desk = useWindowWidth() > 1024;

  const ref = useRef(null);

  return (
    <div ref={ref}>
      <LinkDesktopNolinkMobile
        url={link || "#"}
        text={link ? "Visit site" : ""}
      >
        <div
          className={"bg-secondary rounded flex flex-col-reverse md:flex-row"}
        >
          <div
            className={`p-[20px] pb-[40px] lg:p-[40px] xl:p-[60px] md:w-1/3 transition duration-[2500ms] `}
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
                <div className="w-fit ml-4 md:ml-0 md:mt-8">
                  <CircleButton text={"Visit site"} url={link} filled={true} />
                </div>
              )}
            </div>
          </div>
          <div className="rounded md:w-2/3 relative z-1">
            <Image
              src={banner}
              width={1053}
              height={644}
              alt={title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </LinkDesktopNolinkMobile>
    </div>
  );
}

export default ProjectBanner;
