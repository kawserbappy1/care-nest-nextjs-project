import React from "react";
import Container from "./Container";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import img from "../../Assests/banner.jpg";
import Image from "next/image";
const Banner = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row items-center gap-2 min-h-[80vh]">
        <div className="flex-1">
          <button className=" bg-secondary/10 text-secondary px-4 py-1 rounded-full shadow-md capitalize text-xs font-bold mb-5">
            Best care service in the country
          </button>
          <h1 className="text-3xl capitalize font-bold md:text-4xl lg:text-6xl md:leading-10 lg:leading-16 mb-5">
            Find the perfect caregiver for your{" "}
            <span className="text-secondary underline">loved one</span>
          </h1>
          <p className="w-full max-w-lg mb-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
            dolores consectetur. Odio qui fugiat non, quasi pariatur quas animi
            ipsam minima eos..
          </p>
          <div className="flex items-center gap-5">
            <Link
              href={"/"}
              className=" capitalize textarea-md bg-primary text-white px-6 py-3 rounded-md tracking-wider"
            >
              get started
            </Link>
            <Link href={"/"} className="flex items-center gap-2">
              <span className="w-13 h-13 border-l-4 border-l-gray-500 rounded-full grid place-items-center">
                <span className="w-12 h-12 bg-secondary text-white grid place-items-center rounded-full">
                  <FaPlay />
                </span>
              </span>
              <span>watch video</span>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={img}
            alt="care nest"
            className="w-full h-[60vh] md:h-[80vh] "
          ></Image>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
