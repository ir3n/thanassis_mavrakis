import Link from "next/link";

import HalfImageHalfText from "@/components/Projects/ProjectPage/HalfImageHalfText";
import NextProject from "@/components/Projects/ProjectPage/NextProject";
import ProjectBanner from "@/components/Projects/ProjectPage/ProjectBanner";
import ThreeImages from "@/components/Projects/ProjectPage/ThreeImages";
import TwoImages from "@/components/Projects/ProjectPage/TwoImages";
import ShowAnimation from "@/components/Animations/ShowOnScroll";
import Title from "@/components/Typography/Title";
import Text from "@/components/Typography/Text";

import { serverGetData } from "@/services/serverGetData";

type Project = {
  id: string;
  title: string;
  link?: string;
  date?: string;
  services?: string[];
  banner?: string;
  text?: string;
  halfImage?: { src: string; alt: string };
  twoImages?: { src: string; alt: string }[];
  threeImages?: { src: string; alt: string }[];
  nextProject?: string;
};

type Props = {
  project: Project;
  nextProject: NextProject | null;
};

export async function generateStaticParams() {
  try {
    const data = await serverGetData("fullProjects");

    const ids = data?.map((proj: Project) => proj?.id);
    const paths = ids?.map((id: string) => ({
      id: id,
    }));

    return paths;
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

async function getPost(params: Params) {
  try {
    const projects = await serverGetData("fullProjects");
    const project = projects?.find((proj: Project) => proj.id === params?.slug);
    if (!project) {
      return { project: null, nextProject: null };
    }

    const projectTeasers = await serverGetData("projectListing");
    const nextProject = projectTeasers?.projects?.find(
      (proj: ProjTeaser) => proj.id === project?.nextProject
    );

    return {
      project,
      nextProject: nextProject || null,
    };
  } catch (error) {
    console.error("Error fetching post data:", error);
    return { project: null, nextProject: null };
  }
}

const Page = async ({ params }: { params: Params }) => {
  const props: Props = await getPost(params);
  const { project, nextProject } = props;

  if (!project) {
    return (
      <div className="container pt-[240px] md:pt-[300px] lg:pt-[350px] pb-[150px] lg:min-h-screen">
        <Text size="lg">
          <p>Oops! I could not find the project that you are looking for.</p>
          <p>
            Please <Link href="/projects">go back to projects</Link> and try
            again.
          </p>
        </Text>
      </div>
    );
  }

  return (
    <div className="container pt-[140px] md:pt-[200px] lg:pt-[250px] pb-[80px] lg:pb-[150px]">
      <ShowAnimation>
        <Title size="project">
          <h1 className="mb-[40px] lg:mb-[125px]">{project?.title}</h1>
        </Title>
      </ShowAnimation>
      {project?.banner && (
        <section className="mb-[60px] md:mb-[150px] lg:mb-[250px]">
          <ProjectBanner
            title={project?.title ?? ""}
            link={project?.link ?? "#"}
            date={project?.date ?? ""}
            services={project?.services ?? []}
            banner={project?.banner}
          />
        </section>
      )}
      {(project?.text || project?.halfImage) && (
        <section className="mb-[60px] md:mb-[150px] lg:mb-[250px]">
          <HalfImageHalfText
            text={project?.text ?? ""}
            image={project?.halfImage ?? { src: "", alt: "" }}
          />
        </section>
      )}
      {(project?.twoImages || project?.threeImages) && (
        <section className="mb-[60px] md:mb-[150px] lg:mb-[250px]">
          <TwoImages images={project?.twoImages ?? []} />
          <ThreeImages images={project?.threeImages ?? []} />
        </section>
      )}
      {nextProject && (
        <section>
          <NextProject project={nextProject} />
        </section>
      )}
    </div>
  );
};

export default Page;
