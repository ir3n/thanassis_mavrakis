import React from "react";

function ButtonFill({ show }: { show: boolean }) {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full origin-bottom bg-accent transition duration-300 rounded-full ${
        show ? "scale-none" : "scale-y-0"
      }`}
    ></div>
  );
}

export default ButtonFill;
