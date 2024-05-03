import Image from "next/image";

interface LogoProps {
  name: string;
  icon: string;
  text: string;
}
const LogoItem = ({ name, icon, text }: LogoProps) => {
  return (
    <div
      className="flex flex-col items-center pt-[90px] pb-[30px] px-[20px] grayscale hover:grayscale-0 transition duration-500"
      data-cursor-text={name}
    >
      <Image src={icon} width={130} height={130} alt={name} />
      <p className="text-sm pt-[10px]">{text}</p>
    </div>
  );
};

export default LogoItem;
