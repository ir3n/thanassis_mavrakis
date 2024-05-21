import Image from "next/image";
import CircleButton from "../Buttons/CircleButton";
import LinkDesktopNolinkMobile from "../LinkDesktopNolinkMobile";
import ShowAnimation from "../Animations/ShowOnScroll";
import Title from "../Typography/Title";
import Text from "../Typography/Text";

type IntroData = {
  title: string;
  text: string;
  image?: ImageType;
  link?: LinkType;
};

const IntroBanner = ({ title, text, image, link }: IntroData) => {
  return (
    <div
      className={`relative ${
        image ? "flex flex-col-reverse lg:block" : "block"
      }`}
    >
      <LinkDesktopNolinkMobile url={link?.link} text={link?.name || ""}>
        <div
          className={`pb-[35px] lg:pb-[100px] ${
            image && "lg:w-1/2 lg:max-w-[636px] relative z-[1]"
          }`}
        >
          <ShowAnimation>
            <Title size="lg">
              <h1 className="mb-[30px]">{title}</h1>
            </Title>
          </ShowAnimation>
          <ShowAnimation index={1}>
            <Text size="lg">
              <div
                className="max-w-[635px]"
                dangerouslySetInnerHTML={{ __html: text }}
              ></div>
            </Text>
          </ShowAnimation>
        </div>
      </LinkDesktopNolinkMobile>
      {link ? (
        <div className="lg:hidden">
          <CircleButton text={link?.name || "View"} url={link?.link} />
        </div>
      ) : null}

      {image ? (
        <div className="my-[-50px] lg:my-0 lg:absolute lg:right-[50px] lg:bottom-[-20px] lg:w-5/12 max-w-[245px] lg:max-w-full">
          <ShowAnimation animation="fromBelow" index={2}>
            <Image
              src={image?.src}
              width={675}
              height={815}
              alt={image?.alt}
              loading="eager"
              className="ml-auto"
            />
          </ShowAnimation>
        </div>
      ) : null}
    </div>
  );
};

export default IntroBanner;
