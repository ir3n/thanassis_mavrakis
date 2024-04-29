import Link from "next/link";
import { ArrowDown } from "lucide-react";

import RotatingTextIcon from "@/components/RotatingTextIcon";

export default function Home() {
  return (
    <div className="container">
      <Link href="/about">
        <div data-cursor-text="about me" className="pb-[100px]">
          <h1 className="title-lg mb-[10px]">UI/UX Designer</h1>
          <p className="text-lg max-w-[635px]">
            Hello, I am Thanassis Mavrakis. A UI/UX designer and no code
            developer creating beautiful websites that are easy to use and
            accessible to everyone.
          </p>
        </div>
      </Link>

      <div className="mt-[100px] mb-[125px] w-fit mx-auto">
        <Link href="#projects">
          <RotatingTextIcon name="scrolldown">
            <ArrowDown size={68} color="white" />
          </RotatingTextIcon>
        </Link>
      </div>
    </div>
  );
}
