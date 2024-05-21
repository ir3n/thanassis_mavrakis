"use client";

import Image from "next/image";
import { useWindowWidth } from "@/hooks/useWindowWidth";

const NoiseBg = () => {
  const mobile = useWindowWidth() < 768;
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-gradient-to-br from-secondary from-[-20%] to-dark to-50% bg-cover">
      {mobile ? (
        <Image
          src="/images/mobile-noise.png"
          width={768}
          height={1024}
          alt="Background noise"
          className="w-full h-full object-cover md:hidden"
          loading="eager"
        />
      ) : (
        <Image
          src="/images/noise.png"
          width={1920}
          height={1080}
          alt="Background noise"
          className="w-full h-full object-cover hidden md:block"
          loading="eager"
        />
      )}
    </div>
  );
};

export default NoiseBg;
