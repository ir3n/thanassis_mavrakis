import type { Metadata } from "next";
import Image from "next/image";

import MouseFollowerComponent from "@/components/MouseFollower";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Copyrights from "@/components/Copyrights";

import "@/styles/globals.css";

import { heading, body } from "@/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thanassis-mavrakis.com"),
  title: "Thanassis Mavrakis | UI/UX Designer, No-code Developer",
  description:
    "UI/UX designer and No-code developer creating beautiful websites that are easy to use and accessible to everyone.",
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${heading.variable} ${body.variable} relative bg-gradient-to-br from-secondary from-[-20%] to-dark to-50% bg-fixed`}
      >
        <MouseFollowerComponent>
          <div className="fixed top-0 right-0 bottom-0 left-0">
            <Image
              src="/images/noise.png"
              width={1920}
              height={1080}
              alt="Background noise"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="absolute top-0 right-0 w-3/5 md:w-1/2 lg:w-1/3">
            <Image
              src="/images/splash.svg"
              width={690}
              height={960}
              alt="Splash"
              style={{ width: "100%" }}
            />
          </div>
          <Header />
          <main className="relative z-1">{children}</main>
          <footer className="relative z-1">
            <Contact />
            <Copyrights />
          </footer>
        </MouseFollowerComponent>
      </body>
    </html>
  );
}
