"use client";
import urlFor from "@/lib/urlFor";
import { Skills } from "@/typings";
import Image from "next/image";
import React from "react";

type Props = {
  skill: Skills[];
};
function Skill({ skill }: Props) {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 px-4">
      <div className="max-w-[1040px] md:pl-20 p-4 py-16 m-auto flex flex-col justify-center h-full">
        <div
          className="my-5 w-20 sm:w-40 h-1 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-red-200 via-orange-200 to-red-200
         rounded-full"
        ></div>
        <p className="mb-5 text-3xl font-extrabold tracking-widest uppercase text-[#fb8500] pb-5">
          Skills
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skill?.map((items) => (
            <div
              key={items?._id}
              className="p-6 shadow-sm shadow-gray-400 hover:shadow-orange-300 rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={urlFor(items?.mainImage).url()}
                    alt={items?.title}
                    width={64}
                    height={64}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="font-bold">{items?.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
