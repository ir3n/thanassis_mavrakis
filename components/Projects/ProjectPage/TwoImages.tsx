import Image from "next/image";
import ParallaxElements from "@/components/Animations/ParallaxElements";

function TwoImages({ images }: { images: ImageType[] }) {
  return (
    <div className="md:flex md:gap-[20px] lg:gap-[40px] md:items-start mb-[60px] md:mb-[150px] lg:mb-[250px]">
      {images?.map((img, i) => (
        <ParallaxElements key={`two-images-${i}`} index={i}>
          <div className={`rounded ${i % 2 === 0 && "mb-[60px] md:mb-0"}`}>
            <Image src={img?.src} width={780} height={1218} alt={img?.alt} />
          </div>
        </ParallaxElements>
      ))}
    </div>
  );
}

export default TwoImages;
