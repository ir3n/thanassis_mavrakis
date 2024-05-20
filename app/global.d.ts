declare module "@toon.rombaut/magnetic-elements";

type ImageType = {
  src: string;
  alt: string;
};
type LinkType = {
  link: string;
  name: string;
};
type AnimationType = {
  children: React.ReactNode;
  animation?: "fromBelow" | "popIn" = "fromBelow";
  index?: number = 0;
  full?: boolean;
};

type NextProject = {
  id: string;
  title: string;
  image: ImageType;
};
