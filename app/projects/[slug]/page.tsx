import CircleButton from "@/components/CircleButton";
import LinkDesktopNolinkMobile from "@/components/LinkDesktopNolinkMobile";
import Image from "next/image";
import Link from "next/link";

const data = {
  id: "papaioannou",
  title: "P & A Papaioannou O.E",
  date: "February 2023",
  services: ["#UI/UX design ", "#Web design"],
  banner: "/images/projects/papaioannou/banner.png",
  link: "/",
  text: "<p>P & A Papaioannou O.E. is a car service company that approached me to redesign their website with a more professional and modern look.</p><p>After conducting extensive research into the car service field and their target audience, I developed a fresh and modern design that perfectly fits their brand image.</p><p> The new design effectively showcases their services and provides an exceptional user experience, helping them stand out in their industry.</p>",
  halfImage: {
    src: "/images/projects/papaioannou/banner.png",
    alt: "Desktop hero banner",
  },
  twoImages: [
    {
      src: "/images/projects/papaioannou/banner.png",
      alt: "Services",
    },
    {
      src: "/images/projects/papaioannou/banner.png",
      alt: "Contact",
    },
  ],
  threeImages: [
    {
      src: "/images/projects/papaioannou/banner.png",
      alt: "Mobile hero banner",
    },
    {
      src: "/images/projects/papaioannou/banner.png",
      alt: "Mobile services",
    },
    {
      src: "/images/projects/papaioannou/banner.png",
      alt: "Mobile menu",
    },
  ],
  nextProject: {
    title: "Retool website design",
    id: "retool",
    image: {
      src: "/images/projects/retool-teaser.png",
      alt: "Retool",
    },
  },
};

export default function Page({ params }: { params: { slug: string } }) {
  const {
    title,
    date,
    services,
    banner,
    link,
    text,
    halfImage,
    twoImages,
    threeImages,
    nextProject,
  } = data;

  return (
    <div className="container pt-[140px] md:pt-[200px] lg:pt-[250px] pb-[80px] lg:pb-[150px]">
      <h1 className="project-title mb-[40px] lg:mb-[125px]">{title}</h1>
      <section className="mb-[60px] lg:mb-[250px]">
        <LinkDesktopNolinkMobile
          url={link || "#"}
          text={link ? "Visit site" : ""}
        >
          <div className="bg-secondary rounded flex flex-col-reverse md:flex-row">
            <div className="p-[20px] pb-[40px] lg:p-[40px] xl:p-[60px] md:w-1/3">
              <div className="text-[0.75rem] lg:text-[1.125rem] font-light font-body">
                {date}
              </div>
              <div className="flex items-end md:block">
                <div className="flex-1">
                  <h2 className="mt-[30px] lg:mt-[50px] min-[1300px]:mt-[145px] font-heading text-[1.75rem] lg:text-[3rem] xl:text-[4rem] mb-[15px]">
                    Services
                  </h2>

                  {services?.map((item, i) => (
                    <div
                      key={`service-${i}`}
                      className="mb-[5px] text-lg font-light font-body"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="lg:hidden w-fit ml-4 md:ml-0 md:mt-8">
                  <CircleButton text={"Visit site"} url={link} filled={true} />
                </div>
              </div>
            </div>
            <div className="rounded md:w-2/3">
              <Image
                src={banner}
                width={1053}
                height={644}
                alt={title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </LinkDesktopNolinkMobile>
      </section>

      <section className="mb-[60px] lg:mb-[250px]">
        <div className="md:flex md:items-center">
          <div className="flex-1 pr-[20px]">
            <div
              className="font-body text-lg max-w-[645px] mb-[60px] md:mb-0"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
          </div>
          <div className="flex-1 rounded">
            <Image
              src={halfImage?.src}
              width={820}
              height={479}
              alt={halfImage?.alt}
            />
          </div>
        </div>
      </section>
      <section className="mb-[60px] lg:mb-[250px]">
        <div className="md:flex md:gap-[20px] lg:gap-[40px] md:items-start mb-[60px] lg:mb-[250px]">
          {twoImages?.map((img, i) => (
            <div
              key={`two-images-${i}`}
              className={`rounded ${i !== 0 && "mt-[60px] md:mt-[100px]"}`}
            >
              <Image src={img?.src} width={780} height={1218} alt={img?.alt} />
            </div>
          ))}
        </div>
        <div className="md:flex md:gap-[20px] lg:gap-[40px] items-start">
          {threeImages?.map((img, i) => (
            <div
              key={`three-images-${i}`}
              className={`rounded w-10/12 md:w-full ${
                i !== 1 ? "md:mt-[100px]" : "ml-auto md:ml-0 my-[60px] md:my-0"
              }`}
            >
              <Image src={img?.src} width={506} height={823} alt={img?.alt} />
            </div>
          ))}
        </div>
      </section>
      <section>
        <LinkDesktopNolinkMobile
          url={`/projects/${nextProject?.id}`}
          text="View project"
        >
          <div className="md:flex md:gap-[20px] lg:gap-[40px] max-w-[500px] mx-auto md:max-w-full">
            <div className="md:w-2/3 rounded relative flex flex-col items-center justify-center px-[20px] pt-[40px] pb-[20px] md:p-[40px] mb-[20px] md:mb-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white from-[-100%] opacity-50"></div>
              <div className="max-w-[933px] w-full font-heading">
                <h3 className="text-[1.25rem] lg:text-[3rem]">Next Project</h3>
                <h4 className="project-title mb-4 lg:mb-0">
                  {nextProject?.title}
                </h4>
                <div className="lg:hidden w-fit ml-auto md:ml-0">
                  <CircleButton
                    text="View project"
                    url={`/projects/${nextProject?.id}`}
                    filled={true}
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/3 rounded">
              <Image
                src={nextProject?.image?.src}
                width={507}
                height={536}
                alt={nextProject?.image?.alt}
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
              />
            </div>
          </div>
        </LinkDesktopNolinkMobile>
      </section>
    </div>
  );
}
