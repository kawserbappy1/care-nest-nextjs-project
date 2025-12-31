"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({ onClick, href, children }) => {
  const pathName = usePathname();
  return (
    <Link
      onClick={onClick}
      href={href}
      className={`${pathName.startsWith(href) && "text-secondary underline"}`}
    >
      {children}
    </Link>
  );
};

export default MyLink;
