import HalfImageHalfText from "@/components/ProjectPageComponents/HalfImageHalfText";
import NextProject from "@/components/ProjectPageComponents/NextProject";
import ProjectBanner from "@/components/ProjectPageComponents/ProjectBanner";
import ThreeImages from "@/components/ProjectPageComponents/ThreeImages";
import TwoImages from "@/components/ProjectPageComponents/TwoImages";
import ShowAnimation from "@/components/ShowAnimation";
import allProjects from "@/data/fullProjects.json";

import projectTeasers from "@/data/projectListing.json";

type Params = { slug: string };

export async function generateStaticParams() {
  const ids = allProjects?.map((proj) => proj?.id);
  const paths = ids?.map((id) => ({
    id: id,
  }));

  return paths;
}

async function getPost(params: Params) {
  const data = allProjects?.find((proj) => proj.id === params?.slug);
  return data;
}

export default async function Page({ params }: { params: Params }) {
  const data = await getPost(params);

  const next = projectTeasers?.projects?.find(
    (proj) => proj.id === data?.nextProject
  );

  return (
    <div className="container pt-[140px] md:pt-[200px] lg:pt-[250px] pb-[80px] lg:pb-[150px]">
      <h1 className="project-title mb-[40px] lg:mb-[125px]">{data?.title}</h1>

      <section className="mb-[60px] lg:mb-[250px]">
        <ProjectBanner
          title={data?.title ?? ""}
          link={data?.link ?? "#"}
          date={data?.date ?? ""}
          services={data?.services ?? []}
          banner={data?.banner ?? ""}
        />
      </section>

      <section className="mb-[60px] lg:mb-[250px]">
        <HalfImageHalfText
          text={data?.text ?? ""}
          image={data?.halfImage ?? { src: "", alt: "" }}
        />
      </section>

      <section className="mb-[60px] lg:mb-[250px]">
        <TwoImages images={data?.twoImages ?? []} />
        <ThreeImages images={data?.threeImages ?? []} />
      </section>

      <section>{next && <NextProject project={next} />}</section>
    </div>
  );
}
