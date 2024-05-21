"use client";

import Link from "next/link";

import { useWindowWidth } from "@/hooks/useWindowWidth";

type Props = {
  url?: string;
  text: string;
  external?: boolean;
  children: React.ReactNode;
};

const LinkDesktopNolinkMobile = ({
  url,
  text,
  external = false,
  children,
}: Props) => {
  const isDesk = useWindowWidth() > 1024;

  return (
    <>
      {url && isDesk ? (
        <Link
          href={url}
          data-cursor-text={text}
          target={external ? "_blank" : ""}
        >
          {children}
        </Link>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default LinkDesktopNolinkMobile;
