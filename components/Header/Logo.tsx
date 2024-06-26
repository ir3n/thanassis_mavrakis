import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="block max-w-[62px] md:max-w-[85px] relative z-50">
      <Link href="/">
        <div magnetic-element="true">
          <Image
            src="/images/logo.svg"
            width={84}
            height={60}
            alt="Thanassis Mavrakis Logo"
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
