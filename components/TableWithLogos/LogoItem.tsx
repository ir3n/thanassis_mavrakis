import Image from "next/image";
import ShowAnimation from "../Animations/ShowOnScroll";
import Text from "../Typography/Text";

const LogoItem = ({ name, icon, text }: StackItemType) => {
  return (
    <div
      className="flex pt-[30px] lg:pt-[80px] pb-[30px] lg:pb-[40px] px-[20px] lg:grayscale hover:grayscale-0 transition duration-500"
      data-cursor-text={name}
    >
      <ShowAnimation animation="popIn" full={true}>
        <div className="max-w-[80px] lg:max-w-[130px] mb-[10px] lg:mb-[35px] m-auto">
          <Image src={icon} width={130} height={130} alt={name} />
        </div>

        <Text size="sm">
          <p className="hidden lg:block text-center">{text}</p>
          <p className="lg:hidden text-center">{name}</p>
        </Text>
      </ShowAnimation>
    </div>
  );
};

export default LogoItem;
