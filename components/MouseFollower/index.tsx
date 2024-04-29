"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import MouseFollower from "mouse-follower";
import "mouse-follower/dist/mouse-follower.min.css";
import { useWindowWidth } from "@/hooks/useWindowWidth";

const MouseFollowerComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
  }, [isDesktop]);

  return <div className="mf-container">{children}</div>;
};

export default MouseFollowerComponent;
