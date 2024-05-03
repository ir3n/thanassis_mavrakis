import FreeTimeGrid from "@/components/FreeTimeGrid";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import TableWithLogos from "@/components/TableWithLogos";
import IntroBanner from "@/components/IntroBanner";

const aboutIntro = {
  title: "About me",
  text: "<p>I am a UI/UX designer and no code developer based in Athens, Greece. I love making websites that look great and are easy for everyone to use. But I didn't stop at just designing.</p><p>I wanted to offer more, so I learned tools like Webflow and Wix for building websites without needing to code. <em>Staying curious and keeping up with the latest trends and technologies is my thing.</em></p>",
  image: "/images/thanassis.png",
  imageAlt: "Thanassis Mavrakis Portrait",
};

const About = () => {
  const { title, text, image, imageAlt } = aboutIntro;
  return (
    <>
      <section className="full-height-section">
        <div className="container">
          <IntroBanner
            title={title}
            text={text}
            image={image}
            imageAlt={imageAlt}
          />
        </div>
        <Marquee />
      </section>
      <section>
        <Services />
      </section>
      <section className="pb-[150px]">
        <TableWithLogos />
      </section>
      <section className="pt-[100px] pb-[250px]">
        <FreeTimeGrid />
      </section>
    </>
  );
};

export default About;
