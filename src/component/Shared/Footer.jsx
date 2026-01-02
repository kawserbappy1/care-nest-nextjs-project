import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { SiPaypal } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa";
import { SiPayoneer } from "react-icons/si";
import { FaApplePay } from "react-icons/fa6";
import MyLink from "./MyLink";
import img1 from "../../Assests/img1.jpg";
import img2 from "../../Assests/img2.jpg";
import img3 from "../../Assests/img3.jpg";
import img4 from "../../Assests/img4.jpg";
import img5 from "../../Assests/img5.jpg";
import img6 from "../../Assests/img6.jpg";
import img7 from "../../Assests/img7.jpg";
import img8 from "../../Assests/img8.jpg";
import img9 from "../../Assests/img9.jpg";
import Image from "next/image";

const Footer = () => {
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
      <div className="bg-base-200 px-2 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <Logo></Logo>
          <p className="max-w-sm">
            Revolutionizing home care services with professional and reliable
            solutions.
          </p>

          <div className=" flex items-center gap-3 my-5">
            <Link
              href={"/"}
              className="w-10 h-10 grid place-items-center border rounded-full bg-secondary text-white transition-all duration-500 hover:bg-primary"
            >
              <FaFacebookF />
            </Link>
            <Link
              href={"/"}
              className="w-10 h-10 grid place-items-center border rounded-full bg-secondary text-white transition-all duration-500 hover:bg-primary"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href={"/"}
              className="w-10 h-10 grid place-items-center border rounded-full bg-secondary text-white transition-all duration-500 hover:bg-primary"
            >
              <FaXTwitter />
            </Link>
            <Link
              href={"/"}
              className="w-10 h-10 grid place-items-center border rounded-full bg-secondary text-white transition-all duration-500 hover:bg-primary"
            >
              <CiInstagram />
            </Link>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="w-16 h-12 grid place-items-center bg-primary text-secondary rounded-sm">
                <SiPaypal />
              </span>
              <span className="w-16 h-12 grid place-items-center bg-primary text-secondary rounded-sm text-3xl">
                <FaGooglePay />
              </span>
              <span className="w-16 h-12 grid place-items-center bg-primary text-secondary rounded-sm ">
                <SiPayoneer />
              </span>
              <span className="w-16 h-12 grid place-items-center bg-primary text-secondary rounded-sm text-3xl">
                <FaApplePay />
              </span>
            </div>
          </div>
        </div>
        <div>
          <h2 className=" relative border-b border-b-primary before:absolute before:left-0 before:-bottom-1 before:w-10 before:h-1 before:bg-secondary">
            Links
          </h2>
          <div>
            {
              <ul className="flex flex-col gap-2  text-md mt-5">
                {links.map((link, index) => (
                  <li
                    className=" transition-all duration-500 hover:translate-x-2"
                    key={index}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            }
          </div>
        </div>
        <div>
          <h2 className=" relative border-b border-b-primary before:absolute before:left-0 before:-bottom-1 before:w-10 before:h-1 before:bg-secondary">
            Important Links
          </h2>
          {
            <ul className="flex flex-col gap-2  text-md mt-5">
              {links.map((link, index) => (
                <li
                  className=" transition-all duration-500 hover:translate-x-2"
                  key={index}
                >
                  {link}
                </li>
              ))}
            </ul>
          }
        </div>
        <div>
          <h2 className=" relative border-b border-b-primary before:absolute before:left-0 before:-bottom-1 before:w-10 before:h-1 before:bg-secondary">
            Inatagram
          </h2>
          <div className="grid grid-cols-3 gap-1 mt-5">
            <Image src={img1} className="w-28 h-16 " alt="home-care"></Image>
            <Image src={img2} className="w-28 h-16" alt="home-care"></Image>
            <Image src={img3} className="w-28 h-16" alt="home-care"></Image>
            <Image src={img4} className="w-28 h-16" alt="home-care"></Image>
            <Image src={img5} className="w-28 h-16" alt="home-care"></Image>
            <Image src={img6} className="w-28 h-16" alt="home-care"></Image>
            <Image src={img7} className="w-28 h-16" alt="home-care"></Image>
            <Image src={img8} className="w-28 h-16" alt="home-care"></Image>
            <Image src={img9} className="w-28 h-16" alt="home-care"></Image>
          </div>
        </div>
      </div>
      <div className="bg-base-200 pb-5 border-t border-t-primary/20 pt-3">
        <p className="text-center">
          All rights reserved :{" "}
          <span className="text-secondary">care nest</span>
        </p>
      </div>
    </Container>
  );
};

export default Footer;
