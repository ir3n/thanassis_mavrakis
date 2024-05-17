"use client";

import { useRef } from "react";
import { useGsap } from "@/hooks/useGsap";

function ShowOnScroll({
  children,
  animation = "fromBelow",
  index = 0,
  full,
}: AnimationType) {
  const ref = useRef(null);

  const gsapSettings = {
    scrollTriggerEl: ref,
    elRef: ref,
    start: "30% bottom",
    fromObj: {
      opacity: 0,
      transform: animation === "popIn" ? "scale(0.75)" : "translateY(50px)",
    },
    toObj: {
      opacity: 1,
      transform: "none",
      duration: 1,
      delay: index / 5,
    },
  };

  useGsap({ ...gsapSettings });

  return (
    <div ref={ref} className={`opacity-0 ${full && "w-full h-full"}`}>
      {children}
    </div>
  );
}

export default ShowOnScroll;
