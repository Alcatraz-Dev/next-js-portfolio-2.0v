"use client";
import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineIdcard,
  AiOutlineMail,
} from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import { TfiGallery } from "react-icons/tfi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BsPostcard } from "react-icons/bs";
import { TbTools } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GiSkills } from "react-icons/gi";
import DarkModeButton from "./DarkModeButton";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "../public/FoxLogo.png";

function SideNav() {
  const [nav, setNav] = useState(false);

  const handelNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <HiMenuAlt2
        size={25}
        onClick={handelNav}
        className="absolute top-4 right-4 z-[99] md:hidden text-black dark:text-white cursor-pointer"
      />
      <Link
        href={"/"}
        className="absolute top-2 left-4 z-[99]  text-black dark:text-white "
      >
        <Image
          src={LogoImage}
          alt={"Logo"}
          width={100}
          height={100}
          className="hover:scale-105 duration-300 transition-transform ease-in-out"
        />
      </Link>
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 dark:bg-black/90">
          <a
            onClick={handelNav}
            href="#home"
            className="w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-100 shadow-gray-400 dark:bg-zinc-800
 dark:text-white dark:hover:text-orange-500 hover:text-orange-500  m-2 p-4 cursor-pointer hover:scale-x-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handelNav}
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-100 shadow-gray-400
            dark:bg-zinc-800
            dark:text-white dark:hover:text-orange-500 hover:text-orange-500 m-2 p-4 cursor-pointer hover:scale-x-110 ease-in duration-200"
          >
            <AiOutlineIdcard size={20} />
            <span className="pl-4">About</span>
          </a>
          <a
            onClick={handelNav}
            href="#videos"
            className="w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-100 shadow-gray-400
            dark:bg-zinc-800
            dark:text-white dark:hover:text-orange-500 hover:text-orange-500 m-2 p-4 cursor-pointer hover:scale-x-110 ease-in duration-200"
          >
            <MdOutlineOndemandVideo size={20} />
            <span className="pl-4">Videos</span>
          </a>
          <a
            onClick={handelNav}
            href="#blog"
            className="w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-100 shadow-gray-400
            dark:bg-zinc-800
            dark:text-white dark:hover:text-orange-500 hover:text-orange-500 m-2 p-4 cursor-pointer hover:scale-x-110 ease-in duration-200"
          >
            <BsPostcard size={20} />
            <span className="pl-4">Blog</span>
          </a>
          <a
            onClick={handelNav}
            href="#assets"
            className="w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-100 shadow-gray-400
            dark:bg-zinc-800
            dark:text-white dark:hover:text-orange-500 hover:text-orange-500 m-2 p-4 cursor-pointer hover:scale-x-110 ease-in duration-200"
          >
            <TbTools size={20} />
            <span className="pl-4">Assets</span>
          </a>
          <a
            onClick={handelNav}
            href="#gallery"
            className="w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-100 shadow-gray-400
            dark:bg-zinc-800
            dark:text-white dark:hover:text-orange-500 hover:text-orange-500 m-2 p-4 cursor-pointer hover:scale-x-110 ease-in duration-200"
          >
            <TfiGallery size={20} />
            <span className="pl-4">Gallery</span>
          </a>
          <a
            onClick={handelNav}
            href="#community"
            className="w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-100 shadow-gray-400
            dark:bg-zinc-800
            dark:text-white dark:hover:text-orange-500 hover:text-orange-500 m-2 p-4 cursor-pointer hover:scale-x-110 ease-in duration-200"
          >
            <HiOutlineUserGroup size={20} />
            <span className="pl-4">Community</span>
          </a>
          <a
            onClick={handelNav}
            href="#skills"
            className="w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-100 shadow-gray-400
            dark:bg-zinc-800
            dark:text-white dark:hover:text-orange-500 hover:text-orange-500 m-2 p-4 cursor-pointer hover:scale-x-110 ease-in duration-200"
          >
            <GiSkills size={20} />
            <span className="pl-4">Skills</span>
          </a>
          <a
            onClick={handelNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-100 shadow-gray-400
            dark:bg-zinc-800
            dark:text-white dark:hover:text-orange-500 hover:text-orange-500 m-2 p-4 cursor-pointer hover:scale-x-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>

          <p
            className="w-[20%] flex justify-center items-center rounded-full shadow-sm bg-gray-100 shadow-gray-400
            dark:bg-zinc-800
            dark:text-white m-2 p-4 cursor-pointer hover:scale-x-110 ease-in duration-200"
          >
            <DarkModeButton />
          </p>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#home"
            className=" rounded-full shadow-sm bg-gray-100 shadow-gray-400
            dark:bg-zinc-800
            dark:text-white dark:hover:text-orange-500 hover:text-orange-500 m-2 p-4 cursor-pointer hover:scale-x-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#about"
            className=" rounded-full shadow-sm bg-gray-100 shadow-gray-400
            dark:bg-zinc-800
            dark:text-white dark:hover:text-orange-500 hover:text-orange-500 m-2 p-4 cursor-pointer hover:scale-x-110 ease-in duration-200"
          >
            <AiOutlineIdcard size={20} />
          </a>
          <a
            href="#videos"
            className=" rounded-full shadow-sm bg-gray-100 shadow-gray-400
            dark:bg-zinc-800
            dark:text-white dark:hover:text-orange-500 hover:text-orange-500 m-2 p-4 cursor-pointer hover:scale-x-110 ease-in duration-200"
          >
            <MdOutlineOndemandVideo size={20} />
          </a>
          <a
            href="#blog"
            className=" rounded-full shadow-sm bg-gray-100 shadow-gray-400
            dark:bg-zinc-800
            dark:text-white dark:hover:text-orange-500 hover:text-orange-500 m-2 p-4 cursor-pointer hover:scale-x-110 ease-in duration-200"
          >
            <BsPostcard size={20} />
          </a>
          <a
            href="#assets"
            className=" rounded-full shadow-sm bg-gray-100 shadow-gray-400
            dark:bg-zinc-800
            dark:text-white dark:hover:text-orange-500 hover:text-orange-500 m-2 p-4 cursor-pointer hover:scale-x-110 ease-in duration-200"
          >
            <TbTools size={20} />
          </a>
          <a
            href="#gallery"
            className=" rounded-full shadow-sm bg-gray-100 shadow-gray-400
            dark:bg-zinc-800
            dark:text-white dark:hover:text-orange-500 hover:text-orange-500 m-2 p-4 cursor-pointer hover:scale-x-110 ease-in duration-200"
          >
            <TfiGallery size={20} />
          </a>
          <a
            href="#community"
            className=" rounded-full shadow-sm bg-gray-100 shadow-gray-400
            dark:bg-zinc-800
            dark:text-white dark:hover:text-orange-500 hover:text-orange-500 m-2 p-4 cursor-pointer hover:scale-x-110 ease-in duration-200"
          >
            <HiOutlineUserGroup size={20} />
          </a>
          <a
            href="#skills"
            className=" rounded-full shadow-sm bg-gray-100 shadow-gray-400
            dark:bg-zinc-800
            dark:text-white dark:hover:text-orange-500 hover:text-orange-500 m-2 p-4 cursor-pointer hover:scale-x-110 ease-in duration-200"
          >
            <GiSkills size={20} />
          </a>
          <a
            href="#contact"
            className=" rounded-full shadow-sm bg-gray-100 shadow-gray-400
            dark:bg-zinc-800
            dark:text-white dark:hover:text-orange-500 hover:text-orange-500 m-2 p-4 cursor-pointer hover:scale-x-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
          </a>
          <p
            className=" rounded-full shadow-sm bg-gray-100 shadow-gray-400
            dark:bg-zinc-800
            dark:text-white m-2 p-4 cursor-pointer hover:scale-x-110 ease-in duration-200"
          >
            <DarkModeButton />
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
