declare module "@toon.rombaut/magnetic-elements";

interface ImageType {
  src: string;
  alt: string;
}
interface LinkType {
  link: string;
  name: string;
}
interface AnimationType {
  children: React.ReactNode;
  animation?: "fromBelow" | "popIn" = "fromBelow";
  index?: number = 0;
  full?: boolean;
}
