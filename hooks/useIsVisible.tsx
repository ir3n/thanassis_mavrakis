import { RefObject, useEffect, useState } from "react";

export const useIsVisible = (
  elementRef: RefObject<HTMLDivElement>
): boolean => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const elementToAnimate = elementRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(true);
        } else {
          setShow(false);
        }
      });
    });

    elementToAnimate && observer.observe(elementToAnimate);

    return () => {
      elementToAnimate && observer.unobserve(elementToAnimate);
    };
  }, [elementRef]);

  return show;
};
