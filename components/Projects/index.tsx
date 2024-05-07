import ProjectTeaser from "./ProjectTeaser";
import CircleButton from "../CircleButton";

const data = {
  title: "Projects",
  button: {
    text: "All projects",
    url: "/projects",
  },
  projects: [
    {
      link: "",
      image: {
        src: "/images/projects/retool-teaser.png",
        alt: "Retool Website",
      },
      subtitle: "#UI/UX Design",
      title: "Retool website design",
    },
    {
      link: "",
      image: {
        src: "/images/projects/retool-teaser.png",
        alt: "P&A Papaioannou O.E.",
      },
      subtitle: "#UI/UX design, #Web design",
      title: "P&A Papaioannou O.E. website design & development",
    },
    {
      link: "",
      image: {
        src: "/images/projects/retool-teaser.png",
        alt: "Retool Website",
      },
      subtitle: "#UI/UX Design",
      title: "Transience website design",
    },
  ],
};

const Projects = () => {
  const { title, button, projects } = data;

  return (
    <>
      <div className="flex items-center justify-between mb-[50px] md:mb-[72px] ">
        <h2 className="title">{title}</h2>
        <div className="absolute left-0 md:left-auto right-0 md:right-auto bottom-0 md:bottom-auto mx-auto md:mx-0 md:relative w-fit">
          <CircleButton text={button?.text} url={button?.url} />
        </div>
      </div>
      <div className="md:flex gap-[50px] justify-between">
        {projects?.map((proj, i) => (
          <ProjectTeaser
            key={`project-${i}`}
            link={proj?.link}
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
