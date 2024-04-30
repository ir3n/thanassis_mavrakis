import Link from "next/link";

const Copyrights = () => {
  return (
    <div className="p-[60px] text-center text-sm font-light">
      <p className="mb-[10px]">{`© ${new Date().getFullYear()} All rights reserved`}</p>
      <p className="">
        Designed by Thanassis Mavrakis. Coded by{" "}
        <Link
          href="https://www.ireneborada.com/"
          target="_blank"
          className="hover:text-accent transition duration-500"
        >
          Irene Borada
        </Link>
      </p>
    </div>
  );
};

export default Copyrights;