import LogoItem from "./LogoItem";

const logos = [
  {
    name: "figma",
    icon: "/images/stack/figma.svg",
    text: "#UI/UX design",
  },
  {
    name: "webflow",
    icon: "/images/stack/webflow.svg",
    text: "#Web design",
  },
  {
    name: "framer",
    icon: "/images/stack/framer.svg",
    text: "#Web design",
  },
  {
    name: "wix",
    icon: "/images/stack/wix.svg",
    text: "#Web design",
  },
  {
    name: "illustrator",
    icon: "/images/stack/ai.svg",
    text: "#Illustrations",
  },
  {
    name: "photoshop",
    icon: "/images/stack/ps.svg",
    text: "#Photo edit",
  },
];

const TableWithLogos = () => {
  return (
    <div className="container">
      <h2 className="title mb-[135px]">My stack</h2>
      <div className="grid grid-cols-3 border border-solid border-white rounded-[20px]">
        {logos?.map((logo, i, arr) => (
          <div
            key={`stack-item-${i}`}
            className={`${i % 3 !== 0 && "border-l"} ${
              i < arr.length - 3 && "border-b"
            }`}
          >
            <LogoItem name={logo?.name} icon={logo?.icon} text={logo?.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableWithLogos;
