"use client";

import { useEffect } from "react";
import { Reeller, ScrollerPlugin } from "reeller";
import gsap from "gsap";

type Marquee = string[];

const Marquee = ({ text }: { text: Marquee }) => {
  useEffect(() => {
    Reeller.registerGSAP(gsap);
    Reeller.use(ScrollerPlugin);

    const reeler = new Reeller({
      container: ".reel",
      wrapper: ".reel-wrap",
      itemSelector: ".reel-item",
      speed: 20,
      paused: false,
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
    <div className="reel overflow-hidden pb-[10px] lg:pb-[150px]">
      <div className="reel-wrap flex width-fit">
        {text?.map((el, i) => (
          <div key={`reel-item-${i}`} className="reel-item">
            <div className="flex items-center w-fit">
              <span className="bg-accent rounded-full w-4 lg:w-[1.5rem] h-4 lg:h-[1.5rem] inline-block mt-3 lg:mt-4 flex-shrink-0 mx-[20px] lg:mx-[40px]"></span>
              <h2
                key={`marquee-${i}`}
                className="font-heading text-[2.5rem] md:text-[4rem] xl:text-[6rem] leading-[1.2] whitespace-nowrap"
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
