"use client";
import urlFor from "@/lib/urlFor";
import { ProfileInfo } from "@/typings";

import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { TypeAnimation } from "react-type-animation";

type Props = {
  profileInfo: ProfileInfo[];
};
function HomeSection({ profileInfo }: Props) {
  return (
    <div
      id="home"
      className="w-full h-screen bg-white bg-opacity-50 backdrop-blur-2xl dark:bg-black dark:bg-opacity-50"
    >
      {profileInfo?.map((info) => (
        <Image
          key={info?._id}
          className=" w-full h-full object-cover absolute mix-blend-overlay "
          src={urlFor(info?.mainImage).url()}
          alt={info?.name}
          fill
        />
      ))}
      {profileInfo?.map((info) => (
        <div
          key={info?._id}
          className="max-w-[700px] m-auto h-full flex flex-col justify-center  items-center"
        >
          <h1 className="text-zinc-800 sm:text-5xl text-4xl font-bold dark:text-slate-300 z-10">
            {` I'm ${info?.name}`}
          </h1>

          <h2 className="flex  text-zinc-800 sm:text-3xl text-2xl pt-4 dark:text-slate-300  z-10">
            I'm a
            <TypeAnimation
              sequence={[
                `${info?.skillOne}`, // Types 'One'
                3000, // Waits 1s
                `${info?.skillTow}`, // Deletes 'One' and types 'Two'
                3000, // Waits 2s
                `${info?.skillThree}`, // Types 'Three' without deleting 'Two'
                3000,
              ]}
              wrapper="div"
              cursor={false}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between items-center pt-6 ">
            {info?.socialIcons.map((icon) => (
              <SocialIcon
                key={icon._id}
                className="mx-2 mt-5 rounded-full shadow-sm bg-gray-100 shadow-gray-400
                dark:bg-zinc-800
                dark:text-white m-2 p-4 cursor-pointer hover:scale-x-110 ease-in duration-200"
                url={icon?.url}
                bgColor={`${icon?.bgcolor}`}
                fgColor={`${icon?.fgcolor}`}
                style={{ width: 50, height: 50 }}
                target={"_blank"}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeSection;
