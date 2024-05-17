import Text from "../Typography/Text";

interface ServiceItem {
  title: string;
  text: string;
}

const ServiceItem = ({ title, text }: ServiceItem) => {
  return (
    <div className="relative rounded p-[20px] md:p-[40px] lg:p-[60px] h-full flex flex-col">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white from-[-100%] backdrop-blur opacity-50"></div>
      <h3 className="mb-[40px] lg:mb-[45px] relative z-1 text-[1.75rem] lg:text-[4rem] leading-[1.2] font-semibold font-heading">
        {title}
      </h3>
      <div className="z-1 mt-auto relative">
        <Text>
          <p>{text}</p>
        </Text>
      </div>
    </div>
  );
};

export default ServiceItem;
