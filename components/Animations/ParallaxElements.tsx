"use client";

import { useRef } from "react";
import { useGsap } from "@/hooks/useGsap";

import { useWindowWidth } from "@/hooks/useWindowWidth";

const ParallaxElements = ({ children, index = 0 }: AnimationType) => {
  const ref = useRef(null);

  const mobile = useWindowWidth() < 768;

  let from;
  let to;

  if (!mobile) {
    from = index % 2 === 0 ? "-30px" : "30px";
    to = index % 2 === 0 ? "30px" : "-30px";
  } else {
    from = "0";
    to = "0";
  }

  const gsapSettings = {
    scrollTriggerEl: ref,
    elRef: ref,
    start: "top bottom",
    end: "bottom bottom",
    scrub: mobile ? false : true,
    fromObj: {
      y: from,
      opacity: mobile ? "0" : "1",
    },
    toObj: {
      y: to,
      opacity: 1,
      duration: 1,
    },
  };

  useGsap({ ...gsapSettings });

  return <div ref={ref}>{children}</div>;
};

export default ParallaxElements;
