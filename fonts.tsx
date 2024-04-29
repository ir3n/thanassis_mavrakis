import { Oswald, Montserrat } from "next/font/google";

export const heading = Oswald({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--heading",
});

export const body = Montserrat({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--body",
});
