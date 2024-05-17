import ProjectTeaser from "@/components/Projects/ProjectTeaser";
import ShowAnimation from "@/components/ShowAnimation/ShowOnScroll";
import Title from "@/components/Typography/Title";

import data from "@/data/projectListing.json";

export default function Projects() {
  const { title, projects } = data;

  return (
    <div className="container pt-[140px] md:pt-[200px] lg:pt-[250px] md:pb-[400px] lg:pb-[500px]">
      <ShowAnimation>
        <Title size="lg">
          <h1 className="mb-[100px] lg:mb-[200px]">{title}</h1>
        </Title>
      </ShowAnimation>

      <div className="md:grid md:grid-cols-2 gap-y-[100px] md:gap-x-[100px] lg:gap-x-[190px]">
        {projects?.map((proj, i) => (
          <div
            key={`project-${i}`}
            className={`mb-[70px] md:mb-0 ${
              i % 2 !== 0 && "md:translate-y-[200px] lg:translate-y-[300px]"
            }`}
          >
            <ShowAnimation animation={"popIn"}>
              <ProjectTeaser
                link={`/projects/${proj?.id}`}
                image={proj?.image}
                subtitle={proj?.subtitle}
                title={proj?.title}
              />
            </ShowAnimation>
          </div>
        ))}
      </div>
    </div>
  );
}
