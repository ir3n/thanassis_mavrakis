"use client";

import { useEffect, useState } from "react";

export const useWindowWidth = (): number => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    calculateWidth();

    window.addEventListener("resize", calculateWidth);

    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  const calculateWidth = () => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  };

  return width;
};
