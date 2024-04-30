const ServiceItem = () => {
  return (
    <div className="relative rounded-[20px] overflow-hidden  p-[60px] w-[645px] shadow-lg">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white from-[-150%] to-dark"></div>
      <h3 className="min-h-[10.375rem] title-sm mb-[45px] relative z-1">
        Interactive Prototyping
      </h3>
      <p className="text relative z-1">
        Offering interactive prototyping services to create functional models of
        your website or app. It's like a test-drive for your digital product,
        allowing users to click and interact, ensuring it meets your needs and
        delights your audience.
      </p>
    </div>
  );
};

export default ServiceItem;
