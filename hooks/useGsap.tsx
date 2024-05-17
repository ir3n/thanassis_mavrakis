"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { MutableRefObject } from "react";

interface GsapType {
  scrollTriggerEl?: MutableRefObject<null>;
  elRef: MutableRefObject<null>;
  start: string;
  end?: string;
  scrub?: boolean;
  fromObj: GSAPTimelineVars;
  toObj: GSAPTimelineVars;
}

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
    let ctx = gsap.context(() => {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: scrollTriggerEl ? scrollTriggerEl.current : elRef.current,
          start: start,
          end: end || "",
          scrub: scrub || false,
        },
      });

      timeline.fromTo(elRef.current, fromObj, toObj);
    });

    return () => ctx.revert();
  }, [path]);
};
