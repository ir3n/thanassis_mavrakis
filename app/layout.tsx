import type { Metadata } from "next";
import Image from "next/image";

import MouseFollowerComponent from "@/components/MouseFollower";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Copyrights from "@/components/Copyrights";
import BrushStroke from "@/components/BrushStroke";

import "@/styles/globals.css";

import { heading, body } from "@/fonts";
import MagneticHover from "@/components/MagneticHover";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thanassis-mavrakis.com"),
  title: "Thanassis Mavrakis | UI/UX Designer, No-code Developer",
  description:
    "UI/UX Designer and No-Code Developer creating beautiful, user-friendly websites.",
  openGraph: {
    images: "/opengraph-image.png",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${heading.variable} ${body.variable} relative bg-gradient-to-br from-secondary from-[-20%] to-dark to-50% bg-fixed overflow-x-hidden`}
      >
        <MouseFollowerComponent>
          <MagneticHover>
            <div className="fixed top-0 right-0 bottom-0 left-0">
              <Image
                src="/images/noise.png"
                width={1920}
                height={1080}
                alt="Background noise"
                className="w-full h-full object-cover"
              />
            </div>
            <BrushStroke
              image="/images/splash.svg"
              width={690}
              height={960}
              className="absolute top-0 right-0 w-3/5 md:w-1/2 lg:w-1/3"
            />
            <BrushStroke
              image="/images/bottom-splash.svg"
              width={547}
              height={880}
              className="absolute bottom-0 left-0 hidden lg:block lg:w-1/4"
            />
            <Header />
            <main className="relative z-1">{children}</main>
            <footer className="relative z-1">
              <Contact />
              <Copyrights />
            </footer>
          </MagneticHover>
        </MouseFollowerComponent>
      </body>
    </html>
  );
};

export default RootLayout;
