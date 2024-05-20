"use client";

import { useLayoutEffect, MutableRefObject } from "react";
import { usePathname } from "next/navigation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type GsapType = {
  scrollTriggerEl?: MutableRefObject<null>;
  elRef: MutableRefObject<null>;
  start: string;
  end?: string;
  scrub?: boolean;
  fromObj: GSAPTimelineVars;
  toObj: GSAPTimelineVars;
};

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGsap = ({
  scrollTriggerEl,
  elRef,
  start,
  end,
  scrub,
  fromObj,
  toObj,
}: GsapType) => {
  const path = usePathname();

  useLayoutEffect(() => {
    if (!elRef.current) return;

    let ctx = gsap.context(() => {
      gsap.fromTo(elRef.current, fromObj, {
        ...toObj,
        scrollTrigger: {
          trigger: scrollTriggerEl ? scrollTriggerEl.current : elRef.current,
          start: start,
          end: end || "bottom top",
          scrub: scrub || false,
        },
      });
    });

    return () => ctx.revert();
  }, [path, scrollTriggerEl, elRef, start, end, scrub, fromObj, toObj]);
};
