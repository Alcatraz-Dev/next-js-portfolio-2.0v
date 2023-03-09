import urlFor from "@/lib/urlFor";
import { ProfileInfo } from "@/typings";
import Image from "next/image";

import React from "react";

type Props = {
  profileInfo: ProfileInfo[];
};
function About({ profileInfo }: Props) {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 px-8"
    >
      <div className="max-w-[1040px] md:pl-20 p-4 py-16 m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div
            className="my-5 w-20 sm:w-40 h-1 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-red-200 via-orange-200 to-red-200
         rounded-full"
          ></div>
          <p className="uppercase text-3xl font-extrabold tracking-widest text-[#fb8500] pb-5">
            About
          </p>
          {/* <h3 className="py-4 ">Who I Am</h3> */}
          {profileInfo?.map((ph) => (
            <p
              key={ph?._id}
              className="py-2 mb-10 text-gray-600 dark:text-white"
            >
              {ph?.aboutParagraph}
            </p>
          ))}
        </div>
        <div className="w-full h-auto m-auto shadow-sm shadow-slate-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          {profileInfo?.map((info) => (
            <Image
              key={info?._id}
              src={urlFor(info?.aboutImage).url()}
              className="rounded-xl"
              alt="about image"
              width={2000}
              height={2000}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
