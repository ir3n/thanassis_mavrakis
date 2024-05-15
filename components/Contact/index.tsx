"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import SocialLink from "./SocialLink";
import CircleButton from "../CircleButton/CircleButton";

import data from "@/data/footer.json";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const { subtitle, title, button, social } = data;
  const path = usePathname();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".box",
          start: "70% bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });

      timeline.fromTo(
        ".inner",
        {
          width: "200px",
          height: "200px",
          borderRadius: "50%",
        },
        {
          width: "100%",
          height: "100%",
          borderRadius: "14px",
        }
      );
    });

    return () => ctx.revert();
  }, [path]);

  return (
    <div className="relative">
      <div className="box absolute top-0 left-[20px] lg:left-[50px] right-[20px] lg:right-[50px] bottom-0 rounded overflow-hidden flex items-center justify-center">
        <div className="inner bg-secondary backdrop-blur origin-center"></div>
      </div>
      <div className="container py-[40px] lg:py-[110px] relative z-1">
        <div className="flex justify-between gap-20 px-[20px] md:px-[0] relative pb-[150px] md:pb-0">
          <div>
            <div className="text-lg text-accent lg:mb-[20px]">{subtitle}</div>
            <h2 className="title mb-[50px] lg:mb-[100px]">{title}</h2>
            <div className="flex items-center">
              <ul className="flex">
                {social?.map((item) => (
                  <li
                    key={`social-${item?.name}`}
                    className="mr-[25px] lg:mr-[45px]"
                  >
                    <SocialLink
                      name={item?.name}
                      image={item?.image}
                      link={item?.link}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="absolute md:relative bottom-0 md:bottom-auto">
            <CircleButton text={button?.title} url={button?.link} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
