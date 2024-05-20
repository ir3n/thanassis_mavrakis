import Image from "next/image";

import ParallaxElements from "@/components/Animations/ParallaxElements";

const ThreeImages = ({ images }: { images: ImageType[] }) => {
  return (
    <div className="md:flex md:gap-[20px] lg:gap-[40px] items-start">
      {images?.map((img, i) => (
        <ParallaxElements key={`three-images-${i}`} index={i}>
          <div
            className={`rounded w-10/12 md:w-full ${
              i % 2 !== 0 ? "ml-auto md:ml-0" : "my-[60px] md:my-0"
            }`}
          >
            <Image src={img?.src} width={506} height={823} alt={img?.alt} />
          </div>
        </ParallaxElements>
      ))}
    </div>
  );
};

export default ThreeImages;
