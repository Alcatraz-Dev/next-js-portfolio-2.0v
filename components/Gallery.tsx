import urlFor from "@/lib/urlFor";
import { Gallery } from "@/typings";
import {
  CalendarDaysIcon,
  FolderOpenIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  gallery: Gallery[];
};

function Gallerys({ gallery }: Props) {
  return (
    <div id="gallery" className="w-full lg:h-screen p-2 px-4">
      <div className="max-w-[1040px] md:pl-20 p-4 py-16 m-auto flex flex-col justify-center h-full">
        <div
          className="my-5 w-20 sm:w-40 h-1 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-red-200 via-orange-200 to-red-200
       rounded-full"
        ></div>
        <h1 className="text-3xl font-extrabold tracking-widest uppercase text-[#fb8500] pb-5">
          Gallery
        </h1>

        <div key={gallery?.[0]._id}>
          <p className="py-2 mb-10 text-gray-600 dark:text-white">
            {gallery?.[0].galleysParagraph}
          </p>
        </div>
        <div className=" flex justify-center items-center pl-4">
          <div className="flex overflow-y-scroll py-5 w-full scrollbar-hide space-x-5">
            <div className="columns-3 lg:columns-6 gap-3 mx-auto space-y-3 pb-28">
              {gallery?.map((img) => (
                <div
                  key={img?._id}
                  className="items-center shadow-sm shadow-gray-400 rounded-xl group cursor-pointer   "
                >
                  <div className="break-inside-avoid-column">
                    <Image
                      src={urlFor(img?.mainImage).url()}
                      alt={img?.title}
                      width={5000}
                      height={5000}
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallerys;
