"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const useIsActive = (link: string): boolean => {
  const [active, setActive] = useState(false);
  const path = usePathname();

  useEffect(() => {
    if (!link) {
      return;
    }

    setActive(link === path);
  }, [link, path]);

  return active;
};
