"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import MouseFollower from "mouse-follower";
import "mouse-follower/dist/mouse-follower.min.css";
import { useWindowWidth } from "@/hooks/useWindowWidth";

const MouseFollowerComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isDesktop = useWindowWidth() > 1024;

  useEffect(() => {
    if (!isDesktop) {
      return;
    }

    MouseFollower.registerGSAP(gsap);

    const cursor = new MouseFollower({
      skewing: 4,
      speed: 0.8,
    });

    return () => {
      cursor.destroy();
    };
  }, [pathname, isDesktop]);

  return <div className="mf-container">{children}</div>;
};

export default MouseFollowerComponent;
