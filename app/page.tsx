import Link from "next/link";

import IntroBanner from "@/components/IntroBanner";
import { ArrowDown } from "lucide-react";
import RotatingTextIcon from "@/components/RotatingTextIcon";
import ProjectTeaser from "@/components/ProjectTeaser";

import Services from "@/components/Services";

const homeIntro = {
  title: "UI/UX Designer",
  text: "Hello, I am Thanassis Mavrakis. A UI/UX designer and no code developer creating beautiful websites that are easy to use and accessible to everyone.",
  link: "/about",
  linkText: "About me",
};

export default function Home() {
  const { title, text, link, linkText } = homeIntro;

  return (
    <>
      <section className="container full-height-section">
        <IntroBanner
          title={title}
          text={text}
          link={link}
          linkText={linkText}
        />
        <div className="hidden lg:block xxl:mt-[100px] w-fit mx-auto">
          <Link href={`#projects`}>
            <RotatingTextIcon name="scrolldown">
              <ArrowDown size={68} color="white" />
            </RotatingTextIcon>
          </Link>
        </div>
      </section>

      <section id="projects" className="container pt-[150px] pb-[100px]">
        <div className="flex items-center justify-between mb-[72px]">
          <h2 className="title">Projects</h2>
          <Link href="/projects" className="text-lg ghost-cta-circle">
            All projects
          </Link>
        </div>
        <div className="flex gap-[50px] justify-between">
          <ProjectTeaser />
          <ProjectTeaser />
          <ProjectTeaser />
        </div>
      </section>
      <section>
        <Services />
      </section>
    </>
  );
}
