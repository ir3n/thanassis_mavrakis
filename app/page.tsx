import Link from "next/link";

import { ArrowDown } from "lucide-react";

import IntroBanner from "@/components/IntroBanner";
import RotatingTextIcon from "@/components/RotatingTextIcon";
import Projects from "@/components/Projects/PromotedProjects";
import Services from "@/components/Services";

import { serverGetData } from "@/services/serverGetData";

type HomeData = {
  title: string;
  text: string;
  link: LinkType;
};

async function getData() {
  const data = await serverGetData("homeIntro");

  return data;
}

const Home = async () => {
  const data: HomeData = await getData();
  const { title, text, link } = data;

  return (
    <>
      <section className="container full-height-section">
        <IntroBanner title={title} text={text} link={link} />
        <div className="hidden lg:block xxl:mt-[100px] w-fit mx-auto">
          <Link href={`#work`} aria-label="Scroll down">
            <RotatingTextIcon name="scrolldown">
              <ArrowDown size={68} color="white" />
            </RotatingTextIcon>
          </Link>
        </div>
      </section>

      <section
        id="work"
        className="container pt-[70px] xl:pt-[150px] pb-[100px] relative"
      >
        <Projects />
      </section>
      <section>
        <Services />
      </section>
    </>
  );
};

export default Home;
