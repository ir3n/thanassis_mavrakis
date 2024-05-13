import Image from "next/image";

type Props = { text: string; image: ImageType };

function HalfImageHalfText({ text, image }: Props) {
  return (
    <div className="md:flex md:items-center">
      <div className="flex-1 pr-[20px]">
        <div
          className="font-body text-lg max-w-[645px] mb-[60px] md:mb-0"
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </div>
      <div className="flex-1 rounded">
        <Image src={image?.src} width={820} height={479} alt={image?.alt} />
      </div>
    </div>
  );
}

export default HalfImageHalfText;
