import Image from "next/image";
import CircleButton from "../CircleButton";
import LinkDesktopNolinkMobile from "../LinkDesktopNolinkMobile";
import ShowAnimation from "../ShowAnimation";

interface IntroData {
  title: string;
  text: string;
  image?: ImageType;
  link?: string;
  linkText?: string;
}

const IntroBanner = ({ title, text, image, link, linkText }: IntroData) => {
  return (
    <div
      className={`relative ${
        image ? "flex flex-col-reverse lg:block" : "block"
      }`}
    >
      <LinkDesktopNolinkMobile url={link} text={linkText || ""}>
        <div
          className={`pb-[35px] lg:pb-[100px] ${
            image && "lg:w-1/2 lg:max-w-[636px]"
          }`}
        >
          <h1 className="title-lg mb-[30px]">
            <ShowAnimation animation="fromBelow">{title}</ShowAnimation>
          </h1>
          <ShowAnimation animation="fromBelow" delay={1}>
            <div
              className="text-lg max-w-[635px]"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
          </ShowAnimation>
        </div>
      </LinkDesktopNolinkMobile>
      {link ? (
        <div className="lg:hidden">
          <CircleButton text={linkText || "View"} url={link} />
        </div>
      ) : null}

      {image ? (
        <div className="my-[-50px] lg:my-0 lg:absolute lg:right-[50px] lg:bottom-[-20px] lg:w-5/12 max-w-[245px] lg:max-w-full">
          <ShowAnimation animation="fromBelow" delay={2}>
            <Image
              src={image?.src}
              width={675}
              height={815}
              alt={image?.alt}
              style={{ marginLeft: "auto" }}
            />
          </ShowAnimation>
        </div>
      ) : null}
    </div>
  );
};

export default IntroBanner;
