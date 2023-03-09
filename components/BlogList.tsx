import urlFor from "@/lib/urlFor";
import { Post } from "@/typings";
import {
  CalendarDaysIcon,
  NewspaperIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  post: Post[];
};

function BlogList({ post }: Props) {
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
    <div id="blog" className="w-full lg:h-screen p-2 px-4">
      <div className="max-w-[1040px] md:pl-20 p-4 py-16 m-auto flex flex-col justify-center h-full">
        <div
          className="my-5 w-20 sm:w-40 h-1 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-red-200 via-orange-200 to-red-200
         rounded-full"
        ></div>
        <h1 className="text-3xl font-extrabold tracking-widest uppercase text-[#fb8500] pb-5">
          Blog
        </h1>

        <p
          key={post?.[0]._id}
          className="py-2 mb-10 text-gray-600 dark:text-white"
        >
          {post?.[0].postsParagraph}
        </p>

        <div className=" flex justify-center items-center pl-4">
          <div className="flex overflow-x-scroll py-5 w-full scrollbar-hide space-x-5">
            {post?.map((posts) => (
              <div key={posts?._id} className="max-w-sm min-w-[350px]  ">
                <div className="items-center shadow-sm shadow-gray-400 rounded-xl group cursor-pointer   ">
                  <Image
                    key={posts?._id}
                    className="rounded-xl "
                    src={urlFor(posts?.mainImage).width(500).height(500).url()}
                    alt={posts?.title}
                    width={500}
                    height={500}
                  />

                  <div className="hidden group-hover:block relative top-5 bottom-5 py-5 px-5 ">
                    <p
                      key={posts?._id}
                      className={`relative top-0 py-2 bg-${posts?.tagBgColor}-500 text-gray-800 font-bold  rounded-br-lg rounded-tl-lg`}
                    >
                      <span className="ml-5"> {posts?.postTag}</span>
                    </p>
                    <h1
                      className={`mb-3 mt-4 text-2xl font-bold text-${posts?.titelColor}-500`}
                    >
                      {posts?.title}
                    </h1>
                    <p className="mt-4 mb-5 italic text-gray-800 line-clamp-2 dark:text-gray-300 text-base font-light">
                      {posts?.postDescription}
                    </p>
                    <div className="flex items-center space-x-4 mt-3 mb-3">
                      <div key={posts?._id} className="flex items-center">
                        <div className="flex items-center space-x-1">
                          <CalendarDaysIcon
                            width={20}
                            height={20}
                            className="mr-3"
                          />
                          <span className="font-mono">
                            {new Date(posts?._createdAt).toLocaleDateString(
                              "en-US",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              }
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-3 mb-3">
                      <div key={posts?._id} className="flex items-center">
                        <div className="flex items-center space-x-1">
                          <UserIcon width={20} height={20} className="mr-3" />
                          <span className="font-mono">
                            {posts?.author.name}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ClientSideRoute
                      key={posts?._id}
                      route={`/post/${posts?.slug.current}`}
                    >
                      <button
                        className="flex items-center justify-center right-0 p-2 mt-4 mb-4 text-sm font-bold w-full text-white bg-blue-500 py-2 
                rounded-lg shadow-lg hover:bg-blue-400 hover:scale-105 ease-in duration-300"
                      >
                        <span className="mr-3 my-1">
                          Read more about {""}
                          {posts?.title}
                        </span>
                        <NewspaperIcon width={20} height={20} />
                      </button>
                    </ClientSideRoute>
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

export default BlogList;
