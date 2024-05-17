import ProjectTeaser from "../ProjectTeaser";
import CircleButton from "../../Buttons/CircleButton";
import ShowAnimation from "../../ShowAnimation";

import data from "@/data/promotedProjects.json";
import projectListing from "@/data/projectListing.json";

const PromotedProjects = () => {
  const { title, button, projects } = data;
  const allProjects = projectListing?.projects;

  const promotedProjects = allProjects?.filter((proj) =>
    projects.includes(proj.id)
  );

  return (
    <>
      <div className="flex items-center justify-between mb-[50px] md:mb-[72px] ">
        <h2 className="title">
          <ShowAnimation animation="fromBelow">{title}</ShowAnimation>
        </h2>
        <div className="absolute left-0 md:left-auto right-0 md:right-auto bottom-0 md:bottom-auto mx-auto md:mx-0 md:relative w-fit">
          <CircleButton text={button?.text} url={button?.url} />
        </div>
      </div>
      <div className="md:flex gap-[50px] lg:gap-[90px] justify-between">
        {promotedProjects?.map((proj, i) => (
          <ShowAnimation animation="popIn" delay={i}>
            <ProjectTeaser
              key={`project-${i}`}
              link={`/projects/${proj?.id}`}
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
