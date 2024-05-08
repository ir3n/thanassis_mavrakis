"use client";

import Link from "next/link";

import { useWindowWidth } from "@/hooks/useWindowWidth";

interface Props {
  url?: string;
  text: string;
  children: React.ReactNode;
}

const LinkDesktopNolinkMobile = ({ url, text, children }: Props) => {
  const isDesk = useWindowWidth() > 1024;

  return (
    <>
      {url && isDesk ? (
        <Link href={url} data-cursor-text={text}>
          {children}
        </Link>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default LinkDesktopNolinkMobile;
