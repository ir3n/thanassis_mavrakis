"use client";

import { useRef, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function ShowOnScroll({
  children,
  animation = "fromBelow",
  delay = 0,
  full,
}: AnimationType) {
  const ref = useRef(null);

  const path = usePathname();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "30% bottom",
        },
      });

      timeline.fromTo(
        ref.current,
        {
          opacity: 0,
          transform: animation === "popIn" ? "scale(0.75)" : "translateY(50px)",
        },
        {
          opacity: 1,
          transform: "none",
          duration: 1,
          delay: delay / 5,
        }
      );
    });

    return () => ctx.revert();
  }, [path]);

  return (
    <div ref={ref} className={`opacity-0 ${full && "w-full h-full"}`}>
      {children}
    </div>
  );
}

export default ShowOnScroll;
