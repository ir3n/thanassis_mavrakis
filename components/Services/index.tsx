"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import ServiceItem from "./ServiceItem";
import ShowAnimation from "../Animations/ShowOnScroll";
import Title from "../Typography/Title";

import data from "@/data/services.json";

const Services = () => {
  const { title, services } = data;

  const animation = { duration: 35000, easing: (t: number) => t };

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    renderMode: "performance",
    rubberband: false,
    slides: {
      perView: "auto",
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 1025px)": {
        slides: { perView: "auto", spacing: 40 },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div className="pt-[40px] xl:pt-[100px] pb-[80px] lg:pb-[150px] xl:pb-[250px]">
      <ShowAnimation>
        <Title>
          <h2 className="container mb-[40px] lg:mb-[100px]">{title}</h2>
        </Title>
      </ShowAnimation>
      <div
        className="keen-slider items-stretch"
        ref={sliderRef}
        data-cursor-text="Drag"
      >
        {services?.map((item, i) => (
          <div
            key={`service-item-${i}`}
            className="keen-slider__slide shrink-0 max-w-[17rem] md:max-w-[30rem] lg:max-w-[40rem] h-auto"
          >
            <ServiceItem title={item?.title} text={item?.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
