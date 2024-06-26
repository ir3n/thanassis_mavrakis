import type { Metadata } from "next";

import MouseFollowerComponent from "@/components/MouseFollower";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Copyrights from "@/components/Copyrights";
import BrushStroke from "@/components/BrushStroke";
import NoiseBg from "@/components/NoiseBg";

import "@/styles/globals.css";

import { heading, body } from "@/fonts";
import MagneticHover from "@/components/MagneticHover";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thanassis-mavrakis.com"),
  title: "Thanassis Mavrakis | UI/UX Designer, No-code Developer",
  description:
    "Self-taught UI/UX designer and no-code developer. I love making websites that look great and are easy for everyone to use. But I didn't stop at just designing. I wanted to offer more, so I learned tools like Webflow and Wix for building websites without needing to code. Staying curious and keeping up with the latest trends and technologies is my thing.",
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
        className={`${heading.variable} ${body.variable} relative overflow-x-hidden bg-dark`}
      >
        <NoiseBg fixed={true} />
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
        <div className="relative z-[1]">
          <MouseFollowerComponent>
            <MagneticHover>
              <Header />
              <main>{children}</main>
              <footer>
                <Contact />
                <Copyrights />
              </footer>
            </MagneticHover>
          </MouseFollowerComponent>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
