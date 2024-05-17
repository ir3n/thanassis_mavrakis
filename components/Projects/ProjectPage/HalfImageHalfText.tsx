import Image from "next/image";
import ShowAnimation from "../../ShowAnimation";

type Props = { text: string; image: ImageType };

function HalfImageHalfText({ text, image }: Props) {
  return (
    <div className="md:flex md:items-center">
      <div className="flex-1 pr-[20px]">
        <ShowAnimation animation="fromBelow">
          <div
            className="font-body text-lg max-w-[645px] mb-[60px] md:mb-0"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        </ShowAnimation>
      </div>
      <div className="flex-1 ">
        <ShowAnimation animation="fromBelow" delay={1}>
          <div className="rounded">
            <Image src={image?.src} width={820} height={479} alt={image?.alt} />
          </div>
        </ShowAnimation>
      </div>
    </div>
  );
}

export default HalfImageHalfText;
