import Image from "next/image";
import ShowAnimation from "../../Animations/ShowOnScroll";
import Text from "@/components/Typography/Text";

type Props = { text: string; image: ImageType };

const HalfImageHalfText = ({ text, image }: Props) => {
  return (
    <div className="md:flex md:items-center">
      <div className="flex-1 md:pr-[20px] lg:pr-[40px]">
        <ShowAnimation animation="fromBelow">
          <Text size="lg">
            <div
              className="max-w-[645px] mb-[60px] md:mb-0"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
          </Text>
        </ShowAnimation>
      </div>
      <div className="flex-1 ">
        <ShowAnimation animation="fromBelow" index={1}>
          <div className="rounded">
            <Image src={image?.src} width={820} height={479} alt={image?.alt} />
          </div>
        </ShowAnimation>
      </div>
    </div>
  );
};

export default HalfImageHalfText;
