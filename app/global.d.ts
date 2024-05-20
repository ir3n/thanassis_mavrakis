declare module "@toon.rombaut/magnetic-elements";

type Params = { slug: string };

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
type ProjTeaser = {
  id: string;
  image: ImageType;
  subtitle: string;
  title: string;
};
type Social = {
  name: string;
  image: string;
  link: string;
};
type StackItemType = {
  name: string;
  icon: string;
  text: string;
};
