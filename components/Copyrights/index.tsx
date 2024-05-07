import Link from "next/link";

const Copyrights = () => {
  return (
    <div className="px-[20px] py-[40px] lg:py-[60px] text-center text-sm font-light">
      <p className="mb-[5px]">{`© ${new Date().getFullYear()} All rights reserved`}</p>
      <p>
        <span>Designed by Thanassis Mavrakis.</span>{" "}
        <span className="block md:inline-block mt-[5px]">
          Coded by{" "}
          <Link
            href="https://www.ireneborada.com"
            target="_blank"
            className="hover:text-accent transition duration-500"
          >
            Irene Borada.
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Copyrights;
