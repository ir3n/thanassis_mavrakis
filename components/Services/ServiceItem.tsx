interface ServiceItem {
  title: string;
  text: string;
}

const ServiceItem = ({ title, text }: ServiceItem) => {
  return (
    <div className="relative rounded-[14px] lg:rounded-[20px] overflow-hidden p-[20px] md:p-[40px] lg:p-[60px] shadow-lg h-full flex flex-col">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white from-[-200%] backdrop-blur"></div>
      <h3 className="title-sm mb-[40px] lg:mb-[45px] relative z-1">{title}</h3>
      <p className="text relative z-1 mt-auto">{text}</p>
    </div>
  );
};

export default ServiceItem;
