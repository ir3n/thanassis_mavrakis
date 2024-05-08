import Link from "next/link";

interface Cta {
  text: string;
  url: string;
  filled?: boolean;
}

const CircleButton = ({ text, url, filled = false }: Cta) => {
  return (
    <div>
      <Link
        href={url || "#"}
        className={`font-body font-semibold text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem] leading-[1.2] w-[6.875rem] lg:w-[10rem] xl:w-[12.5rem] h-[6.875rem] lg:h-[10rem] xl:h-[12.5rem] px-[20px] rounded-full flex items-center justify-center text-center ${
          filled ? "bg-accent" : " border border-solid border-white"
        }`}
      >
        {text || "View"}
      </Link>
    </div>
  );
};

export default CircleButton;
