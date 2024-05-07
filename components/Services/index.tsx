"use client";

import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import ServiceItem from "./ServiceItem";

const data = {
  title: "Services",
  services: [
    {
      title: "UI/UX Design",
      text: "I specialize in designing websites and apps to be easy to use and look great. Whether you're starting from scratch or want to improve what you already have, I'll make sure your digital stuff is top-notch and user-friendly.",
    },
    {
      title: "Interactive Prototyping",
      text: "Offering interactive prototyping services to create functional models of your website or app. It's like a test-drive for your digital product, allowing users to click and interact, ensuring it meets your needs and delights your audience.",
    },
    {
      title: "Branding",
      text: "Providing branding services to give your business a unique identity. From logos to color schemes, I'll help you stand out in the crowd and make a lasting impression on your audience.",
    },
    {
      title: "No Code Development",
      text: "Offering no-code development services using tools like Webflow, Framer, and Wix. This means faster, more cost-effective solutions for your website or app projects.",
    },
  ],
};

const Services = () => {
  const { title, services } = data;

  const animation = { duration: 20000, easing: (t: number) => t };

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
    <>
      <h2 className="container title mb-[40px] lg:mb-[100px]">{title}</h2>
      <div
        className="keen-slider items-stretch"
        ref={sliderRef}
        data-cursor-text="drag"
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
    </>
  );
};

export default Services;
