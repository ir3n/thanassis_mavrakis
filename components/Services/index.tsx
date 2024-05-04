"use client";

import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import ServiceItem from "./ServiceItem";

const carousel: KeenSliderPlugin = (slider) => {
  const z = 600;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

const animation = { duration: 50000, easing: (t: number) => t };

const Services = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
      created(s) {
        s.moveToIdx(5, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
    },
    [carousel]
  );

  return (
    <div className="container pt-[100px] pb-[250px]">
      <h2 className="title mb-[100px]">Services</h2>
      {/* <div className="flex justify-center">
        <div className="scene">
          <div
            className="carousel keen-slider"
            ref={sliderRef}
            data-cursor-text="drag"
          >
            <div className="carousel__cell number-slide1">
              <ServiceItem />
            </div>
            <div className="carousel__cell number-slide2">
              <ServiceItem />
            </div>
            <div className="carousel__cell number-slide3">
              <ServiceItem />
            </div>
            <div className="carousel__cell number-slide4">
              <ServiceItem />
            </div>
            <div className="carousel__cell number-slide5">
              <ServiceItem />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Services;
