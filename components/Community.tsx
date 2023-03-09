import urlFor from "@/lib/urlFor";
import { Community } from "@/typings";
import {
  CalendarDaysIcon,
  CheckBadgeIcon,
  FolderOpenIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  community: Community[];
};

function Communitys({ community }: Props) {
  const colors = [
    "text-yellow-500",
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-violet-500",
    "text-orange-500",
    "text-zinc-500",
    "text-lime-500",
  ];
  return (
    <div id="community" className="w-full lg:h-screen p-2 px-4">
      <div className="max-w-[1040px] md:pl-20 p-4 py-16 m-auto flex flex-col justify-center h-full">
        <div
          className="my-5 w-20 sm:w-40 h-1 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-red-200 via-orange-200 to-red-200
         rounded-full"
        ></div>
        <h1 className="text-3xl font-extrabold tracking-widest uppercase text-[#fb8500] pb-5">
          Community
        </h1>

        <p
          key={community?.[0]._id}
          className="py-2 mb-10 text-gray-600 dark:text-white"
        >
          {community?.[0].communityParagraph}
        </p>

        <div className=" flex justify-center items-center pl-4">
          <div className="flex overflow-x-scroll py-5 w-full scrollbar-hide space-x-5">
            {community?.map((communitys) => (
              <div key={communitys?._id} className="max-w-sm min-w-[350px]  ">
                <div className="items-center shadow-sm shadow-gray-400 rounded-xl group cursor-pointer   ">
                  <Image
                    className="rounded-xl "
                    src={urlFor(communitys?.mainImage)
                      .width(500)
                      .height(500)
                      .url()}
                    alt={communitys?.title}
                    width={500}
                    height={500}
                  />

                  <div className="hidden group-hover:block relative top-5 bottom-5 py-5 px-5 ">
                    <p
                      className={`relative top-0 py-2 bg-${communitys?.tagBgColor}-500 text-gray-800 font-bold  rounded-br-lg rounded-tl-lg`}
                    >
                      <span className="ml-5"> {communitys?.communityTag}</span>
                    </p>
                    <h1
                      className={`mb-3 mt-4 text-2xl font-bold text-${communitys?.titelColor}-500`}
                    >
                      {communitys?.title}
                    </h1>
                    <Link
                      href={communitys?.communityUrl}
                      target={"_blank"}
                      className="flex items-center justify-center  p-2 mt-5 mb-4 text-sm font-bold w-full text-zinc-500 dark:text-white border border-cyan-600 py-2 
                rounded-lg shadow-lg hover:border-cyan-300 hover:scale-105 ease-in duration-300"
                    >
                      <span className="mr-3">
                        Join Us On {""}
                        {communitys?.title}
                      </span>
                      <CheckBadgeIcon width={20} height={20} />
                    </Link>
                    <p className="mt-4 mb-5 italic text-gray-800 line-clamp-2 dark:text-gray-300 text-base font-light">
                      {communitys?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Communitys;
