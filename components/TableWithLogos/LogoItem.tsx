import Image from "next/image";

interface LogoProps {
  name: string;
  icon: string;
  text: string;
}
const LogoItem = ({ name, icon, text }: LogoProps) => {
  return (
    <div
      className="flex flex-col items-center pt-[30px] lg:pt-[80px] pb-[30px] lg:pb-[40px] px-[20px] lg:grayscale hover:grayscale-0 transition duration-500"
      data-cursor-text={name}
    >
      <div className="max-w-[80px] lg:max-w-[130px] mb-[10px] lg:mb-[35px]">
        <Image src={icon} width={130} height={130} alt={name} />
      </div>

      <p className="text-sm hidden lg:block">{text}</p>
      <p className="text-sm lg:hidden">{name}</p>
    </div>
  );
};

export default LogoItem;
