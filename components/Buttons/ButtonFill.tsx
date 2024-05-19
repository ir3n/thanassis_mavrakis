import React from "react";

interface Props {
  show: boolean;
  color?: "white" | "accent";
}

function ButtonFill({ show, color = "white" }: Props) {
  const background = color === "accent" ? "bg-accent" : "bg-white";
  return (
    <div
      className={`hidden lg:block absolute top-0 left-0 w-full h-full origin-bottom transition duration-300 rounded-full ${
        show ? "scale-none" : "scale-y-0"
      } ${background}`}
    ></div>
  );
}

export default ButtonFill;
