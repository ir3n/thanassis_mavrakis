import HalfImageHalfText from "@/components/Projects/ProjectPage/HalfImageHalfText";
import NextProject from "@/components/Projects/ProjectPage/NextProject";
import ProjectBanner from "@/components/Projects/ProjectPage/ProjectBanner";
import ThreeImages from "@/components/Projects/ProjectPage/ThreeImages";
import TwoImages from "@/components/Projects/ProjectPage/TwoImages";
import ShowAnimation from "@/components/Animations/ShowOnScroll";
import Title from "@/components/Typography/Title";

import { serverGetData } from "@/services/serverGetData";

type Project = {
  id: string;
  title: string;
  link: string;
  date: string;
  services: string[];
  banner: string;
  text: string;
  halfImage: { src: string; alt: string };
  twoImages: { src: string; alt: string }[];
  threeImages: { src: string; alt: string }[];
  nextProject: string;
};

type Props = {
  project: Project;
  nextProject: NextProject | null;
};

export async function generateStaticParams() {
  const data = await serverGetData("fullProjects");

  const ids = data?.map((proj: Project) => proj?.id);
  const paths = ids?.map((id: string) => ({
    id: id,
  }));

  return paths;
}

async function getPost(params: Params) {
  const projects = await serverGetData("fullProjects");
  const project = projects?.find((proj: Project) => proj.id === params?.slug);

  const projectTeasers = await serverGetData("projectListing");
  const nextProject = projectTeasers?.projects?.find(
    (proj: ProjTeaser) => proj.id === project?.nextProject
  );

  return {
    project,
    nextProject,
  };
}

const Page = async ({ params }: { params: Params }) => {
  const props: Props = await getPost(params);
  const { project, nextProject } = props;

  return (
    <div className="container pt-[140px] md:pt-[200px] lg:pt-[250px] pb-[80px] lg:pb-[150px]">
      <ShowAnimation>
        <Title size="project">
          <h1 className="mb-[40px] lg:mb-[125px]">{project?.title}</h1>
        </Title>
      </ShowAnimation>

      <section className="mb-[60px] md:mb-[150px] lg:mb-[250px]">
        <ProjectBanner
          title={project?.title ?? ""}
          link={project?.link ?? "#"}
          date={project?.date ?? ""}
          services={project?.services ?? []}
          banner={project?.banner ?? ""}
        />
      </section>

      <section className="mb-[60px] md:mb-[150px] lg:mb-[250px]">
        <HalfImageHalfText
          text={project?.text ?? ""}
          image={project?.halfImage ?? { src: "", alt: "" }}
        />
      </section>

      <section className="mb-[60px] md:mb-[150px] lg:mb-[250px]">
        <TwoImages images={project?.twoImages ?? []} />
        <ThreeImages images={project?.threeImages ?? []} />
      </section>

      <section>{nextProject && <NextProject project={nextProject} />}</section>
    </div>
  );
};

export default Page;
