"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Container from "./Container";
import MyLink from "./MyLink";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    <MyLink key="home" href={"/"}>
      Home
    </MyLink>,
    <MyLink key="about" href={"/about-us"}>
      About Us
    </MyLink>,
    <MyLink key="services" href={"/services"}>
      Services
    </MyLink>,
    <MyLink key="blog" href={"/blog"}>
      Blog
    </MyLink>,
    <MyLink key="contact" href={"/contact"}>
      Contact
    </MyLink>,
  ];

  return (
    <Container>
      <div className="flex items-center justify-between h-16 shadow-2xl px-2">
        <div>
          <Logo></Logo>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-2 lg:gap-4 text-md">
            {links.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-2 items-center">
          <Link
            href={"/"}
            className="border border-primary px-4 py-2 rounded-md"
          >
            Login
          </Link>
          <button className="hidden lg:block bg-secondary px-4 py-3 text-base-100 cursor-pointer rounded-md">
            Book Appoinment
          </button>

          <div className="md:hidden ">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className=" cursor-pointer relative z-50 text-black"
            >
              {menuOpen ? (
                <RxCross2 className="text-xl " />
              ) : (
                <CiMenuFries className="text-xl " />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu  */}
      <div
        className={`md:hidden absolute top-0  py-20 bg-primary w-full min-h-screen z-30 transition-transform duration-500  ${
          menuOpen ? "left-0" : "-left-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-2 lg:gap-4 text-md">
          {links.map((link, index) => (
            <li onClick={() => setMenuOpen(!menuOpen)} key={index}>
              {link}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Navbar;
