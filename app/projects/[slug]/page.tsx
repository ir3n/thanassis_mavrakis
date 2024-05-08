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
    <div className="container pt-[140px] md:pt-[200px] lg:pt-[250px] pb-[20px] lg:pb-[150px]">
      <h1 className="project-title mb-[125px]">{title}</h1>
      <section className="mb-[250px]">
        <Link href={link || "#"} data-cursor-text={link ? "Visit site" : ""}>
          <div className="bg-secondary rounded flex justify-between">
            <div className="p-[60px] flex-1">
              <div className="text-[18px] font-light font-body">{date}</div>
              <h2 className="mt-[145px] font-heading text-[64px] mb-[15px]">
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
            <div className="rounded">
              <Image src={banner} width={1053} height={644} alt={title} />
            </div>
          </div>
        </Link>
      </section>

      <section className="mb-[250px]">
        <div className="flex items-center">
          <div className="flex-1 pr-[20px]">
            <div
              className="font-body text-lg max-w-[645px]"
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
      <section className="mb-[250px]">
        <div className="flex gap-[40px] items-start mb-[250px]">
          {twoImages?.map((img, i) => (
            <div
              key={`two-images-${i}`}
              className={`rounded ${i !== 0 && "mt-[100px]"}`}
            >
              <Image src={img?.src} width={780} height={1218} alt={img?.alt} />
            </div>
          ))}
        </div>
        <div className="flex gap-[40px] items-start">
          {threeImages?.map((img, i) => (
            <div
              key={`three-images-${i}`}
              className={`rounded ${i !== 1 && "mt-[100px]"}`}
            >
              <Image src={img?.src} width={506} height={823} alt={img?.alt} />
            </div>
          ))}
        </div>
      </section>
      <section>
        <Link
          href={`/projects/${nextProject?.id}`}
          data-cursor-text="View project"
        >
          <div className="flex gap-[40px]">
            <div className="flex-1 rounded relative flex flex-col items-center justify-center px-[40px]">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white from-[-100%] opacity-50"></div>
              <div className="max-w-[933px] w-full font-heading">
                <h3 className="text-[3rem]">Next Project</h3>
                <h4 className="project-title">{nextProject?.title}</h4>
              </div>
            </div>
            <div className=" rounded">
              <Image
                src={nextProject?.image?.src}
                width={507}
                height={536}
                alt={nextProject?.image?.alt}
              />
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
