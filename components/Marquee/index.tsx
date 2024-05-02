"use client";

import { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 30000, easing: (t: number) => t };

const text = ["Thanassis Mavrakis", "UI/UX Designer", "No code Developer"];

const Marquee = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document
        .querySelectorAll<HTMLDivElement>("#marquee-slider .keen-slider__slide")
        .forEach((el) => {
          const h2Element = el.querySelector("h2");
          if (h2Element) {
            el.style.width = `${h2Element.getBoundingClientRect().width}px`;
          }
        });
    }
  }, []);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    // drag: false,
    mode: "snap",
    rtl: false,
    slides: { perView: "auto" },
    // created(s) {
    //   s.moveToIdx(5, true, animation);
    // },
    // updated(s) {
    //   s.moveToIdx(s.track.details.abs + 5, true, animation);
    // },
    // animationEnded(s) {
    //   s.moveToIdx(s.track.details.abs + 5, true, animation);
    // },
  });
  return (
    <div ref={sliderRef} className="keen-slider" id="marquee-slider">
      {text?.map((el, i) => (
        <div className="keen-slider__slide">
          <div className="flex items-center w-fit">
            <span className="bg-accent rounded-full w-[1.6875rem] h-[1.6875rem] inline-block mt-3 flex-shrink-0 mx-[40px]"></span>
            <h2
              key={`marquee-${i}`}
              className="font-heading text-[6rem] leading-[1.2] whitespace-nowrap"
            >
              {el}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Marquee;
