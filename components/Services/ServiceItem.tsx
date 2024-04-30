const ServiceItem = () => {
  return (
    <div className="relative rounded-[20px] overflow-hidden bg-dark p-[60px] w-[645px]">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white from-[-80%]"></div>
      <h3 className="min-h-[10.375rem] title-sm mb-[45px]">
        Interactive Prototyping
      </h3>
      <p className="text">
        Offering interactive prototyping services to create functional models of
        your website or app. It's like a test-drive for your digital product,
        allowing users to click and interact, ensuring it meets your needs and
        delights your audience.
      </p>
    </div>
  );
};

export default ServiceItem;
