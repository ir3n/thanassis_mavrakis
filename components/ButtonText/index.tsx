import React from "react";

interface Props {
  text: string;
  hover: boolean;
}

function ButtonText({ text, hover }: Props) {
  return (
    <div className={`overflow-hidden relative`}>
      <div
        className={`${
          hover ? "lg:translate-y-[-100%]" : "transform-none"
        } transition duration-500 delay-300"`}
      >
        {text}
      </div>
      <div
        className={`hidden lg:block absolute transition duration-500 bottom-0 ${
          hover ? "transform-none" : "translate-y-[100%]"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

export default ButtonText;
