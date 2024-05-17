"use client";

import { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";

function ShowAnimation({
  children,
  animation = "fromBelow",
  delay = 0,
  full,
}: AnimationType) {
  const ref = useRef(null);
  const show = useIsVisible(ref);

  const delayClasses = ["delay-100", "delay-200", "delay-300"];
  const transition = animation === "popIn" ? "scale-75" : "translate-y-[50px]";

  return (
    <div
      ref={ref}
      className={`transition duration-1000 origin-center ${
        delayClasses[delay]
      } ${full && "w-full h-full"} ${
        show ? "opacity-1 transform-none" : transition + " opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

export default ShowAnimation;
