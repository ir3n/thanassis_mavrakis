"use client";

import Image from "next/image";

import LinkDesktopNolinkMobile from "../../LinkDesktopNolinkMobile";
import CircleButton from "../../Buttons/CircleButton";
import Title from "@/components/Typography/Title";
import ShowOnScroll from "@/components/Animations/ShowOnScroll";

import { useWindowWidth } from "@/hooks/useWindowWidth";

const NextProject = ({ project }: { project: NextProject }) => {
  const desk = useWindowWidth() > 1024;

  return (
    <ShowOnScroll>
      <LinkDesktopNolinkMobile url={`/work/${project?.id}`} text="View">
        <div className="md:flex md:gap-[20px] xl:gap-[40px] max-w-[500px] mx-auto md:max-w-full">
          <div className="md:w-2/3 rounded relative flex flex-col items-center justify-center px-[20px] pt-[40px] pb-[20px] md:p-[40px] mb-[20px] md:mb-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white from-[-100%] opacity-50"></div>
            <div className="max-w-[933px] w-full font-heading">
              <h3 className="text-[1.25rem] lg:text-[3rem]">Next</h3>
              <Title size="project">
                <h4 className="mb-4 lg:mb-0">{project?.title}</h4>
              </Title>

              {!desk && (
                <div className="w-fit ml-auto md:ml-0 lg:hidden">
                  <CircleButton
                    text="View project"
                    url={`/projects/${project?.id}`}
                    filled={true}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="md:w-1/3 rounded">
            <Image
              src={project?.image?.src || ""}
              width={507}
              height={536}
              alt={project?.image?.alt || ""}
              className="rounded w-full h-full object-cover"
            />
          </div>
        </div>
      </LinkDesktopNolinkMobile>
    </ShowOnScroll>
  );
};

export default NextProject;
