import Image from "next/image";

import data from "@/data/freeTime.json";

interface FreeTime {
  title: string;
  text: string;
  images: FreeTimeImage[];
}

interface FreeTimeImage {
  image: string;
  name: string;
}

const FreeTimeGrid = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-[15px] lg:gap-[40px]">
        <div className="col-span-2 md:col-span-1 mb-[10px] md:mb-0">
          <div className="h-full flex flex-col justify-center ">
            <h2 className="title mb-[20px] lg:mb-[40px]">{data?.title}</h2>
            <p className="text-lg">{data?.text}</p>
          </div>
        </div>
        {data?.images?.map((el, i) => (
          <div
            key={`grid-images-${i}`}
            className={`rounded ${
              i === 0
                ? "col-span-2 h-[220px] md:h-[25rem] lg:h-[30rem] xl:h-[36rem]"
                : "col-span-1 h-[220px] md:h-[15rem] lg:h-[27rem]"
            } ${i === 1 && "col-span-2 md:col-span-1"}`}
          >
            <div className="relative w-full h-full">
              <Image
                src={el.image}
                fill
                alt={el.name}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeTimeGrid;
