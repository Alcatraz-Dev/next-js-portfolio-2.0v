import urlFor from "@/lib/urlFor";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Code from "./Code";

const colors = [
  "bg-yellow-600",
  "bg-red-600",
  "bg-blue-600",
  "bg-green-600",
  "bg-violet-600",
  "bg-orange-600",
  "bg-zinc-600",
  "bg-lime-600",
  "bg-gray-600",
  //hover colors
  "bg-yellow-300",
  "bg-red-300",
  "bg-blue-300",
  "bg-green-300",
  "bg-violet-300",
  "bg-orange-300",
  "bg-zinc-300",
  "bg-lime-300",
  "bg-gray-300",
];
export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="flex items-center justify-center mt-5 mb-5 ">
          <Image
            className="object-cover rounded-xl  "
            src={urlFor(value).maxWidth(500).maxHeight(500).url()}
            alt="Blog Post Image"
            width={600}
            height={400}
          />
        </div>
      );
    },
    videoEmbad: ({ value }: any) => {
      const url = `https://www.youtube.com/embed/${value.id}`;
      return (
        <div className="flex items-center justify-center mt-5 mb-5 min-w-[250px] max-sm:space-x-2">
          <iframe
            className="rounded-xl"
            width={600}
            height={400}
            src={url}
            title="YouTube"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      );
    },
    customButton: ({ value }: any) => {
      const href = `${value.url}`;
      const rel = !href ? "noreferrer noopener" : undefined;
      return (
        <div className="flex items-center justify-start mt-3 mb-3 mx-2">
          <Link href={href} rel={rel} target={"_blank"}>
            <div
              className={`flex items-center justify-center right-0 p-3 py-3 mt-4 mb-4 text-xs font-bold w-auto h-auto text-white bg-${value.buttonBgColor}-600 py-2 
                rounded-lg shadow-lg hover:bg-${value.buttonBgColor}-300 hover:scale-105 ease-in duration-300`}
            >
              <span className="mr-3">{value.buttonTitle}</span>
              <Image
                src={urlFor(value?.mainImage).url()}
                alt={value?.buttonTitle}
                width={20}
                height={20}
                className={value?.className}
              />
            </div>
          </Link>
        </div>
      );
    },
    assetFile: ({ value }: any) => {
      return (
        <div className="flex items-center justify-start mt-3 mb-3 mx-2">
          <a
            href={`https://cdn.sanity.io/files/g8tq43y4/cms/${value.fileId}?dl`}
            download
          >
            <div
              className={`flex items-center justify-center right-0 p-3 py-3 mt-4 mb-4 text-xs font-bold w-auto h-auto text-white bg-${value.buttonBgColor}-600 py-2 
                rounded-lg shadow-lg hover:bg-${value.buttonBgColor}-300 hover:scale-105 ease-in duration-300`}
            >
              <span className="mr-3">{value.name}</span>
              <Image
                src={urlFor(value?.mainImage).url()}
                alt={value?.name}
                width={20}
                height={20}
                className={value?.className}
              />
            </div>
          </a>
        </div>
      );
    },
    codeInput: ({ value }: any) => {
      return <Code value={value} />;
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold mx-8">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold mx-8">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold mx-8">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold mx-8">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#fb8500] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href ? "noreferrer noopener" : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          target={"_blank"}
          className=" underline  decoration-[#99e000] hover:decoration-[#ceff65] hover:cursor-pointer"
        >
          {children}
        </Link>
      );
    },
  },
};
