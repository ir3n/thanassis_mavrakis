"use client";

import SocialLink from "./SocialLink";
import CircleButton from "../Buttons/CircleButton";
import ShowAnimation from "../Animations/ShowOnScroll";
import Title from "../Typography/Title";
import Text from "../Typography/Text";
import FromCircleToFull from "../Animations/FromCircleToFull";

import data from "@/data/footer.json";

const Contact = () => {
  const { subtitle, title, button, social } = data;

  return (
    <div className="relative">
      <div className="container py-[40px] lg:py-[110px] relative z-1">
        <FromCircleToFull />
        <div className="flex justify-between gap-20 px-[20px] md:px-[0] relative pb-[150px] md:pb-0">
          <div>
            <ShowAnimation>
              <Text size="lg">
                <div className="text-accent lg:mb-[20px]">{subtitle}</div>
              </Text>
            </ShowAnimation>
            <ShowAnimation delay={1}>
              <Title>
                <h2 className="mb-[50px] lg:mb-[100px]">{title}</h2>
              </Title>
            </ShowAnimation>
            <div className="flex items-center">
              <ul className="flex">
                {social?.map((item, i) => (
                  <li
                    key={`social-${item?.name}`}
                    className="mr-[25px] lg:mr-[45px]"
                  >
                    <ShowAnimation animation="popIn" delay={i}>
                      <SocialLink
                        name={item?.name}
                        image={item?.image}
                        link={item?.link}
                      />
                    </ShowAnimation>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="absolute md:relative bottom-0 md:bottom-auto">
            <CircleButton text={button?.title} url={button?.link} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
