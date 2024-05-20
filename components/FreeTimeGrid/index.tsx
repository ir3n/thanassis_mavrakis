import Image from "next/image";

import ShowAnimation from "../Animations/ShowOnScroll";
import Title from "../Typography/Title";
import Text from "../Typography/Text";

import { serverGetData } from "@/services/serverGetData";

type FreeTimeData = {
  title: string;
  text: string;
  images: ImageType[];
};

const FreeTimeGrid = async () => {
  const data: FreeTimeData = await serverGetData("freeTime");
  const { title, text, images } = data;

  return (
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-[15px] lg:gap-[40px]">
        <div className="col-span-2 md:col-span-1 mb-[10px] md:mb-0">
          <div className="h-full flex flex-col justify-center ">
            <ShowAnimation>
              <Title>
                <h2 className="mb-[20px] lg:mb-[40px]">{title}</h2>
              </Title>
            </ShowAnimation>
            <ShowAnimation index={1}>
              <Text size="lg">
                <div dangerouslySetInnerHTML={{ __html: text }}></div>
              </Text>
            </ShowAnimation>
          </div>
        </div>
        {images?.map((el, i) => (
          <div
            key={`grid-images-${i}`}
            className={`rounded ${
              i === 0
                ? "col-span-2 h-[220px] md:h-[25rem] lg:h-[30rem] xl:h-[36rem]"
                : "col-span-1 h-[220px] md:h-[15rem] lg:h-[27rem]"
            } ${i === 1 && "col-span-2 md:col-span-1"}`}
          >
            <ShowAnimation animation="popIn" index={i} full={true}>
              <div className="relative w-full h-full rounded">
                <Image
                  src={el.src}
                  fill
                  alt={el.alt}
                  className="object-cover"
                />
              </div>
            </ShowAnimation>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeTimeGrid;
