interface TextType {
  children: React.ReactNode;
  size?: "lg" | "normal" | "sm";
}

const Text = ({ children, size = "normal" }: TextType) => {
  let classes = "";

  switch (size) {
    case "lg":
      classes =
        "font-light text-[1.125rem] lg:text-[1.2rem] xl:text-[1.5rem] leading-[1.4]";
      break;
    case "sm":
      classes = "text-[0.875rem] lg:text-[1rem] leading-[1.3] font-light";
      break;
    default:
      classes = "lg:text-[1.125rem] leading-[1.4]";
  }

  return <div className={`font-body text ${classes}`}>{children}</div>;
};

export default Text;
