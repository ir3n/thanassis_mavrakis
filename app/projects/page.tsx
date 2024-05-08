import ProjectTeaser from "@/components/Projects/ProjectTeaser";

const data = {
  title: "Projects",
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
        alt: "Transience website",
      },
      subtitle: "#UI/UX Design",
      title: "Transience website design",
    },
    {
      link: "",
      image: {
        src: "/images/projects/retool-teaser.png",
        alt: "Transience website",
      },
      subtitle: "#UI/UX Design",
      title: "Transience website design",
    },
  ],
};

export default function Projects() {
  const { title, projects } = data;

  return (
    <div className="container pt-[140px] md:pt-[200px] lg:pt-[250px] md:pb-[400px] lg:pb-[500px]">
      <h1 className="title-lg mb-[100px] lg:mb-[200px]">{title}</h1>
      <div className="md:grid md:grid-cols-2 gap-y-[100px] md:gap-x-[100px] lg:gap-x-[190px]">
        {projects?.map((proj, i) => (
          <div
            key={`project-${i}`}
            className={`mb-[70px] md:mb-0 ${
              i % 2 !== 0 && "md:translate-y-[200px] lg:translate-y-[300px]"
            }`}
          >
            <ProjectTeaser
              link={proj?.link}
              imageSrc={proj?.image?.src}
              imageAlt={proj?.image?.alt}
              subtitle={proj?.subtitle}
              title={proj?.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
