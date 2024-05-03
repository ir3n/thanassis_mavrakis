import Link from "next/link";
import { ArrowDown } from "lucide-react";

import RotatingTextIcon from "@/components/RotatingTextIcon";
import ProjectTeaser from "@/components/ProjectTeaser";

import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <section className="container">
        <Link href="/about">
          <div data-cursor-text="about me" className="pb-[100px]">
            <h1 className="title-lg mb-[10px]">UI/UX Designer</h1>
            <p className="text-lg max-w-[635px]">
              Hello, I am Thanassis Mavrakis. A UI/UX designer and no code
              developer creating beautiful websites that are easy to use and
              accessible to everyone.
            </p>
          </div>
        </Link>

        <div className="mt-[100px] mb-[125px] w-fit mx-auto">
          <Link href="#projects">
            <RotatingTextIcon name="scrolldown">
              <ArrowDown size={68} color="white" />
            </RotatingTextIcon>
          </Link>
        </div>
      </section>
      <section id="projects" className="container pb-[100px]">
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
