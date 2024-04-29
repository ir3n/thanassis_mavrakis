import { useEffect, useState } from "react";

export const useScroll = () => {
  const [isTop, setIsTop] = useState(true);

  const throttle = (fun: (...args: any[]) => void, delay: number) => {
    let flag = true;
    return function () {
      if (flag) {
        fun();
        flag = false;
        setTimeout(() => (flag = true), delay);
      }
    };
  };

  useEffect(() => {
    const detectTop = () => {
      if (typeof window !== "undefined") {
        setIsTop(window.scrollY < 20);
      }
    };

    const onScroll = () => {
      detectTop();
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { isTop };
};
