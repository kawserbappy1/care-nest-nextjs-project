import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h1 className="text-2xl capitalize font-bold">
        care <span className="text-secondary">nest</span>
      </h1>
    </Link>
  );
};

export default Logo;
