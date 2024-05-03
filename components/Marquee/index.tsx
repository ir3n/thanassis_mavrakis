"use client";

import { useEffect } from "react";
import { Reeller, ScrollerPlugin } from "reeller";
import gsap from "gsap";

const text = ["Thanassis Mavrakis", "UI/UX Designer", "No code Developer"];

const Marquee = () => {
  useEffect(() => {
    Reeller.registerGSAP(gsap);
    Reeller.use(ScrollerPlugin);

    const reeler = new Reeller({
      container: ".reel",
      wrapper: ".reel-wrap",
      itemSelector: ".reel-item",
      speed: 20,
      plugins: {
        scroller: {
          speed: 1,
          multiplier: 0.5,
          threshold: 1,
        },
      },
    });

    return () => {
      reeler.destroy();
    };
  }, []);

  return (
    <div className="reel overflow-hidden">
      <div className="reel-wrap flex width-fit">
        {text?.map((el, i) => (
          <div key={`reel-item-${i}`} className="reel-item">
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
    </div>
  );
};

export default Marquee;
