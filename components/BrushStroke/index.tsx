"use client";

import Image from "next/image";

interface Props {
  image: string;
  className: string;
  width: number;
  height: number;
  from: "left" | "right";
}

function BrushStroke({ image, className, width, height, from }: Props) {
  return (
    <div className={`stroke ${className}`}>
      <Image
        src={image}
        alt="Brush stroke"
        width={width}
        height={height}
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default BrushStroke;
