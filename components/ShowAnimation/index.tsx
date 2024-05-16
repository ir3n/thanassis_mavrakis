"use client";

import { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";

function ShowAnimation({ children, animation, delay = 0 }: AnimationType) {
  const ref = useRef(null);
  const show = useIsVisible(ref);

  const delayClasses = ["delay-100", "delay-200", "delay-300"];
  const transition =
    animation === "fromBelow" ? "translate-y-[50px]" : "scale-75";

  return (
    <div
      ref={ref}
      className={`w-full h-full transition duration-1000 origin-center ${
        delayClasses[delay]
      } ${show ? "opacity-1 transform-none" : transition + " opacity-0"}`}
    >
      {children}
    </div>
  );
}

export default ShowAnimation;
