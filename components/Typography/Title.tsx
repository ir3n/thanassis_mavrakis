interface TitleType {
  children: React.ReactNode;
  size?: "lg" | "normal" | "project";
}

const Title = ({ children, size = "normal" }: TitleType) => {
  let classes = "";

  switch (size) {
    case "lg":
      classes =
        "text-[4rem] lg:text-[7rem] xl:text-[9.375rem] leading-[1.1] lg:leading-[1.3]";
      break;
    case "project":
      classes = "text-[2.5rem] lg:text-[4rem] xl:text-[6rem] leading-[1.2]";
      break;
    default:
      classes = "text-[3.375rem] lg:text-[5.5rem] xl:text-[8rem] leading-[1.3]";
  }

  return (
    <div className={`font-heading font-semibold ${classes}`}>{children}</div>
  );
};

export default Title;
