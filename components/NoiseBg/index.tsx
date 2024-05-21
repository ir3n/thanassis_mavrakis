"use client";
import Image from "next/image";
import { useWindowWidth } from "@/hooks/useWindowWidth";

const NoiseBg = ({ fixed = false }) => {
  const mobile = useWindowWidth() < 768;
  return (
    <div
      className={`${
        fixed ? "fixed" : "absolute"
      } top-0 left-0 w-screen h-screen bg-gradient-to-br from-secondary from-[-20%] to-dark to-50%`}
    >
      {mobile ? (
        <Image
          src="/images/mobile-noise.png"
          width={768}
          height={1024}
          alt="Background noise"
          className="w-full h-full object-cover md:hidden"
        />
      ) : (
        <Image
          src="/images/noise.png"
          width={1920}
          height={1080}
          alt="Background noise"
          className="w-full h-full object-cover hidden md:block"
        />
      )}
    </div>
  );
};
export default NoiseBg;
