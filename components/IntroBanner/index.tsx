import Link from "next/link";
import Image from "next/image";
import CircleButton from "../CircleButton";

interface IntroData {
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
  link?: string;
  linkText?: string;
}

const IntroBanner = ({
  title,
  text,
  image,
  imageAlt,
  link,
  linkText,
}: IntroData) => {
  return (
    <div className=" relative">
      <Link
        href={link || "#"}
        className="pointer-events-none lg:pointer-events-auto"
      >
        <div
          data-cursor-text={linkText || ""}
          className={`pb-[35px] lg:pb-[100px] ${
            image && "w-1/2 max-w-[636px]"
          }`}
        >
          <h1 className="title-lg mb-[30px]">{title}</h1>
          <div
            className="text-lg max-w-[635px]"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        </div>
      </Link>
      {link ? (
        <div className="lg:hidden">
          <CircleButton text={linkText} url={link} />
        </div>
      ) : null}

      {image ? (
        <div className="absolute right-[50px] bottom-[-20px] w-5/12">
          <Image
            src={image}
            width={675}
            height={815}
            alt={imageAlt || ""}
            style={{ marginLeft: "auto" }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default IntroBanner;
