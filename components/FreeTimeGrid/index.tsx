import Image from "next/image";

const data = {
  title: "Free time",
  text: "When I'm not designing, I'm hanging out with my best friend Rukia. I also enjoy playing and making music, watching anime, and practicing karate.",
  images: [
    {
      image: "/images/free-time/rukia.png",
      name: "Rukia",
    },
    {
      image: "/images/free-time/guitar.png",
      name: "Guitar",
    },
    {
      image: "/images/free-time/anime.png",
      name: "Anime",
    },
    {
      image: "/images/free-time/karate.png",
      name: "Karate",
    },
  ],
};

interface FreeTime {
  title: string;
  text: string;
  images: FreeTimeImage[];
}

interface FreeTimeImage {
  image: string;
  name: string;
}

const FreeTimeGrid = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-[40px]">
        <div className="h-[36rem]">
          <div className="h-full flex flex-col justify-center">
            <h2 className="title mb-[40px]">{data?.title}</h2>
            <p className="text-lg">{data?.text}</p>
          </div>
        </div>
        {data?.images?.map((el, i) => (
          <div
            key={`grid-images-${i}`}
            className={`rounded-[20px] overflow-hidden ${
              i === 0 ? "col-span-2" : "col-span-1 h-[27rem]"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={el.image}
                fill
                alt={el.name}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeTimeGrid;
