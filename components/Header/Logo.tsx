import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <div className="block max-w-[62px] md:max-w-[85px] relative z-50 transition duration-500 hover:scale-[1.1]">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          width={84}
          height={60}
          alt="Thanassis Mavrakis Logo"
        />
      </Link>
    </div>
  );
}

export default Logo;
