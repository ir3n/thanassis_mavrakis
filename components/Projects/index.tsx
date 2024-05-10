import ProjectTeaser from "./ProjectTeaser";
import CircleButton from "../CircleButton";

import data from "@/data/promotedProjects.json";
import projectListing from "@/data/projectListing.json";

const Projects = () => {
  const { title, button, projects } = data;
  const allProjects = projectListing?.projects;

  const promotedProjects = allProjects?.filter((proj) =>
    projects.includes(proj.id)
  );

  return (
    <>
      <div className="flex items-center justify-between mb-[50px] md:mb-[72px] ">
        <h2 className="title">{title}</h2>
        <div className="absolute left-0 md:left-auto right-0 md:right-auto bottom-0 md:bottom-auto mx-auto md:mx-0 md:relative w-fit">
          <CircleButton text={button?.text} url={button?.url} />
        </div>
      </div>
      <div className="md:flex gap-[50px] justify-between">
        {promotedProjects?.map((proj, i) => (
          <ProjectTeaser
            key={`project-${i}`}
            link={`/projects/${proj?.id}`}
            imageSrc={proj?.image?.src}
            imageAlt={proj?.image?.alt}
            subtitle={proj?.subtitle}
            title={proj?.title}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
