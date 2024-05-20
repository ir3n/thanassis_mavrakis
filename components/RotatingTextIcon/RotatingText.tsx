import { useRef } from "react";
import { useGsap } from "@/hooks/useGsap";

const RotatingText = ({ title }: { title: string }) => {
  const rotatingRef = useRef(null);

  const gsapSettings = {
    scrollTriggerEl: rotatingRef,
    elRef: rotatingRef,
    start: "top bottom",
    fromObj: {
      rotation: "0",
      ease: "none",
      repeat: -1,
    },
    toObj: {
      rotation: "360",
      ease: "none",
      duration: 6,
      repeat: -1,
    },
  };

  useGsap({ ...gsapSettings });

  return (
    <svg
      ref={rotatingRef}
      id="rotatingText"
      viewBox="0 0 200 200"
      width="200"
      height="200"
    >
      <defs>
        <path
          id="circle"
          d="M 100, 100
            m -75, 0
            a 75, 75 0 1, 0 150, 0
            a 75, 75 0 1, 0 -150, 0
            "
        ></path>
      </defs>
      <text width="400">
        <textPath
          xlinkHref="#circle"
          className="text-[0.875rem] tracking-[1rem] uppercase font-light"
          fill="#ffffff"
        >
          {title}
          {title}
        </textPath>
      </text>
    </svg>
  );
};

export default RotatingText;
