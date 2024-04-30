"use client";

import Link from "next/link";
import Image from "next/image";
import { useScroll } from "@/hooks/useScroll";

const Header = () => {
  const { isTop } = useScroll();

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 px-[20px]`}>
      <div
        className={`relative mt-[30px] w-full h-full px-[40px] py-[20px]   `}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full rounded-[20px] bg-gradient-to-br from-dark from-[-50%] backdrop-blur transition-all duration-700 ${
            isTop ? "scale-x-0 opacity-0" : "scale-x-100 opacity-1"
          }`}
        ></div>
        <div className="flex items-center justify-between relative z-1">
          <div>
            <Link href="/">
              <Image
                src="/images/logo.svg"
                width={84}
                height={60}
                alt="Thanassis Mavrakis Logo"
              />
            </Link>
          </div>
          <div>
            <nav>
              <ul className="flex items-center gap-[80px]">
                <li>
                  <Link href="/projects" className="text-lg">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-lg">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <Link
              href="mailto:thanassis.mavrakis@gmail.com"
              className="text-lg ghost-cta"
            >
              Available for hire
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
