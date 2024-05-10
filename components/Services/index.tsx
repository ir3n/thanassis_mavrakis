"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import ServiceItem from "./ServiceItem";

import data from "@/data/services.json";

const Services = () => {
  const { title, services } = data;

  const animation = { duration: 30000, easing: (t: number) => t };

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    renderMode: "performance",
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
      <h2 className="container title mb-[40px] lg:mb-[100px]">{title}</h2>
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
