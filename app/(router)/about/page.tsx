import FreeTimeGrid from "@/components/FreeTimeGrid";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import TableWithLogos from "@/components/TableWithLogos";
import IntroBanner from "@/components/IntroBanner";

import { getLocalData } from "@/services/getLocalData";

type AboutData = {
  title: string;
  text: string;
  image: ImageType;
  marquee: string[];
};

async function getData() {
  const data = await getLocalData("aboutIntro");

  return data;
}

const About = async () => {
  const data: AboutData = await getData();
  const { title, text, image, marquee } = data;

  return (
    <>
      <section className="full-height-section">
        <div className="container">
          <IntroBanner title={title} text={text} image={image} />
        </div>
        {marquee && <Marquee text={marquee} />}
      </section>
      <section>
        <Services />
      </section>
      <section className="pb-[40px] lg:pb-[150px]">
        <TableWithLogos />
      </section>
      <section className="pt-[40px] lg:pt-[100px] pb-[80px] md:pb-[150px] xl:pb-[250px]">
        <FreeTimeGrid />
      </section>
    </>
  );
};

export default About;
