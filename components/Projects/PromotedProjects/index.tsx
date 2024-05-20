import ProjectTeaser from "../ProjectTeaser";
import CircleButton from "../../Buttons/CircleButton";
import ShowAnimation from "../../Animations/ShowOnScroll";
import Title from "@/components/Typography/Title";

import { serverGetData } from "@/services/serverGetData";

const PromotedProjects = async () => {
  const data = await serverGetData("promotedProjects");
  const { title, button, projects } = data;

  const projectListing = await serverGetData("projectListing");
  const allProjects = projectListing?.projects;

  const promotedProjects = allProjects?.filter((proj: ProjTeaser) =>
    projects.includes(proj.id)
  );

  return (
    <>
      <div className="flex items-center justify-between mb-[50px] md:mb-[72px] ">
        <ShowAnimation>
          <Title>
            <h2>{title}</h2>
          </Title>
        </ShowAnimation>
        <div className="absolute left-0 md:left-auto right-0 md:right-auto bottom-0 md:bottom-auto mx-auto md:mx-0 md:relative w-fit">
          <CircleButton text={button?.text} url={button?.url} />
        </div>
      </div>
      <div className="md:flex gap-[50px] lg:gap-[90px] justify-between">
        {promotedProjects?.map((proj: ProjTeaser, i: number) => (
          <ShowAnimation animation="popIn" index={i} key={`project-${i}`}>
            <ProjectTeaser
              id={proj?.id}
              image={proj?.image}
              subtitle={proj?.subtitle}
              title={proj?.title}
            />
          </ShowAnimation>
        ))}
      </div>
    </>
  );
};

export default PromotedProjects;
