import Image from "next/image";

function ThreeImages({ images }: { images: ImageType[] }) {
  return (
    <div className="md:flex md:gap-[20px] lg:gap-[40px] items-start">
      {images?.map((img, i) => (
        <div
          key={`three-images-${i}`}
          className={`rounded w-10/12 md:w-full ${
            i !== 1 ? "md:mt-[100px]" : "ml-auto md:ml-0 my-[60px] md:my-0"
          }`}
        >
          <Image src={img?.src} width={506} height={823} alt={img?.alt} />
        </div>
      ))}
    </div>
  );
}

export default ThreeImages;
