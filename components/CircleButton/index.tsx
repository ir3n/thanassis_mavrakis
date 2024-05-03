import Link from "next/link";

interface Cta {
  text: string;
  url: string;
}

const CircleButton = ({ text, url }: Cta) => {
  return (
    <div>
      <Link href={url} className="text-lg ghost-cta-circle">
        {text}
      </Link>
    </div>
  );
};

export default CircleButton;
