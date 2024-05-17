import Link from "next/link";
import ShowAnimation from "../ShowAnimation/ShowOnScroll";
import Text from "../Typography/Text";

const Copyrights = () => {
  return (
    <div className="px-[20px] py-[40px] lg:py-[60px] text-center">
      <Text size="sm">
        <ShowAnimation animation="fromBelow">
          <p className="mb-[5px]">
            {`© ${new Date().getFullYear()} All rights reserved`}
          </p>
        </ShowAnimation>
        <ShowAnimation animation="fromBelow" delay={1}>
          <p>
            <span>Designed by Thanassis Mavrakis.</span>{" "}
            <span className="block md:inline-block mt-[5px]">
              Coded by{" "}
              <Link
                href="https://www.ireneborada.com"
                target="_blank"
                className="transition duration-500"
                data-cursor="-scale"
              >
                Irene Borada.
              </Link>
            </span>
          </p>
        </ShowAnimation>
      </Text>
    </div>
  );
};

export default Copyrights;
