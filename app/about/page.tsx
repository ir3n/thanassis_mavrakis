import Marquee from "@/components/Marquee";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative">
      <div className="container pb-[150px]">
        <h1 className="title-lg mb-10">About me</h1>
        <div className="text-lg w-1/2 max-w-[636px]">
          <p>
            I am a UI/UX designer and no code developer based in Athens, Greece.
            I love making websites that look great and are easy for everyone to
            use. But I didn't stop at just designing.
          </p>
          <p>
            I wanted to offer more, so I learned tools like Webflow and Wix for
            building websites without needing to code.{" "}
            <em>
              Staying curious and keeping up with the latest trends and
              technologies is my thing.
            </em>
          </p>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-2/3">
        <Image
          src="/images/thanassis.png"
          width={1166}
          height={866}
          alt="Thanassis Mavrakis"
          style={{ marginLeft: "auto" }}
        />
      </div>
      <Marquee />
    </div>
  );
};

export default About;
