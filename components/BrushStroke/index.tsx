"use client";

import Image from "next/image";

interface Props {
  image: string;
  className: string;
  width: number;
  height: number;
}

function BrushStroke({ image, className, width, height }: Props) {
  return (
    <div className={`stroke ${className}`}>
      <Image
        src={image}
        alt="Brush stroke"
        width={width}
        height={height}
        loading="eager"
        className="w-full"
      />
    </div>
  );
}

export default BrushStroke;
