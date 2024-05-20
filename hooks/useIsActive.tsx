"use client";

import { RefObject, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const useIsActive = (
  elementRef: RefObject<HTMLAnchorElement>
): boolean => {
  const [active, setActive] = useState(false);

  const path = usePathname();

  useEffect(() => {
    if (!elementRef) {
      return;
    }

    const link = elementRef.current;

    setActive(link?.href.includes(path) as boolean);
  }, [elementRef, path]);

  return active;
};
