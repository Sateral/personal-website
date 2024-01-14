"use client";

import { useState } from "react";
import Image from "next/image";

import close from "@/public/close.svg";
import menu from "@/public/menu.svg";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about me",
    title: "About me",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="fixed left-0 w-full z-[51] bg-black bg-opacity-5 bg-clip-padding blur-backdrop-filter text-white">
      <nav className="flex max-w-[1280px] mx-auto px-8 py-3 justify-between items-center navbar">
        <a className="logo text-offWhite" href="#home">
          <h1 className="font-krona ss:text-[24px]">Daniel</h1>
          <h1 className="font-lexend tracking-[13px] ss:text-[24px] text-[13px] ss:-mt-2 -mt-1 ss:-ml-[0.1rem] -ml-[0.08rem]">
            KOP
          </h1>
        </a>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-normal cursor-pointer text-[16px] text-offWhite ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-secondary absolute md:top-10 top-14 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[60]`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1 bg-[#111] bg-opacity-70 p-4 rounded-lg">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-quicksand font-normal cursor-pointer text-[16px] text-offWhite ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  }`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
