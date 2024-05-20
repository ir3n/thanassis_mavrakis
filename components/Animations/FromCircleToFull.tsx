"use client";

import { useRef } from "react";

import { useGsap } from "@/hooks/useGsap";

const FromCircleToFull = () => {
  const parentRef = useRef(null);
  const innerRef = useRef(null);

  const gsapSettings = {
    scrollTriggerEl: parentRef,
    elRef: innerRef,
    start: "70% bottom",
    end: "bottom bottom",
    scrub: true,
    fromObj: {
      width: "200px",
      height: "200px",
      borderRadius: "50%",
    },
    toObj: {
      width: "100%",
      height: "100%",
      borderRadius: "14px",
    },
  };

  useGsap({ ...gsapSettings });

  return (
    <div
      ref={parentRef}
      className="absolute top-0 left-[20px] lg:left-[50px] right-[20px] lg:right-[50px] bottom-0 rounded overflow-hidden flex items-center justify-center transition"
    >
      <div
        ref={innerRef}
        className="bg-secondary backdrop-blur origin-center"
      ></div>
    </div>
  );
};

export default FromCircleToFull;
