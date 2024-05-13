import Image from "next/image";

function TwoImages({ images }: { images: ImageType[] }) {
  return (
    <div className="md:flex md:gap-[20px] lg:gap-[40px] md:items-start mb-[60px] lg:mb-[250px]">
      {images?.map((img, i) => (
        <div
          key={`two-images-${i}`}
          className={`rounded ${i !== 0 && "mt-[60px] md:mt-[100px]"}`}
        >
          <Image src={img?.src} width={780} height={1218} alt={img?.alt} />
        </div>
      ))}
    </div>
  );
}

export default TwoImages;
