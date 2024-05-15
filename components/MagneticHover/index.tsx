"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "mouse-follower/dist/mouse-follower.min.css";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { MagneticElementsController } from "@toon.rombaut/magnetic-elements";

const MagneticHover = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isDesktop = useWindowWidth() > 1024;

  useEffect(() => {
    if (!isDesktop) {
      return;
    }

    const magneticElementsController = new MagneticElementsController({
      triggerArea: 70,
      magneticForce: 0.8,
      interpolationFactor: 0.4,
    });

    return () => {
      magneticElementsController.destroy();
    };
  }, [pathname, isDesktop]);

  return <>{children}</>;
};

export default MagneticHover;
