import LogoItem from "./LogoItem";
import ShowAnimation from "../ShowAnimation/ShowOnScroll";
import Title from "../Typography/Title";

import data from "@/data/stack.json";

const TableWithLogos = () => {
  return (
    <div className="container">
      <ShowAnimation>
        <Title>
          <h2 className="mb-[40px] lg:mb-[100px]">{data?.title}</h2>
        </Title>
      </ShowAnimation>
      <div className="grid grid-cols-2 min-[500px]:grid-cols-3 border border-solid border-light rounded">
        {data?.logos?.map((logo, i, arr) => (
          <div
            key={`stack-item-${i}`}
            className={`${
              i % 3 !== 0 && "min-[500px]:border-l min-[500px]:border-light"
            } ${
              i < arr.length - 3 &&
              "min-[500px]:border-b min-[500px]:border-light"
            } ${
              i % 2 !== 0 && "max-[499px]:border-l max-[499px]:border-light"
            } ${
              i < arr.length - 2 &&
              "max-[499px]:border-b max-[499px]:border-light"
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
