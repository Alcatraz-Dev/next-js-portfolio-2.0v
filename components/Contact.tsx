import React from "react";
import { Contact } from "@/typings";
import { BsArrowUpCircle } from "react-icons/bs";
type Props = {
  contact: Contact[];
};
const Contact = ({ contact }: Props) => {
  const colors = [
    "bg-yellow-500",
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-violet-500",
    "bg-orange-500",
    "bg-zinc-500",
    "bg-lime-500",
  ];
  return (
    <div id="contact" className="w-full lg:h-screen p-2 px-4">
      <div className="max-w-[1040px] md:pl-20 p-4 py-16 m-auto flex flex-col justify-center h-full">
        <div
          className="my-5 w-20 sm:w-40 h-1 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-red-200 via-orange-200 to-red-200
       rounded-full"
        ></div>
        <h1 className="text-3xl font-extrabold tracking-widest uppercase text-[#fb8500] pb-5">
          Contact
        </h1>
        {contact?.map((ph) => (
          <div key={ph?._id}>
            <p className="py-2 mb-10 text-gray-600 dark:text-white">
              {ph?.contactParagraph}
            </p>
          </div>
        ))}
        {contact?.map((form) => (
          <form
            key={form?._id}
            action={form?.url}
            method="POST"
            encType="multipart/form-data"
          >
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <div className="flex flex-col">
                <label className="uppercase font-bold text-sm py-2">
                  {" "}
                  First Name
                </label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-400  bg-slate-100 dark:bg-zinc-600"
                  type="text"
                  name="first name"
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase font-bold text-sm py-2">
                  Last Name
                </label>
                <input
                  className="border-2 rounded-lg p-3 flex bg-slate-100 border-gray-400 dark:bg-zinc-600"
                  type="text"
                  name="last name"
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase font-bold text-sm py-2">Email</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-400 bg-slate-100 dark:bg-zinc-600"
                type="email"
                name="email"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase font-bold text-sm py-2">
                Subject
              </label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-400 bg-slate-100 dark:bg-zinc-600"
                type="text"
                name="subject"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase  py-2 font-bold text-sm">
                Message
              </label>
              <textarea
                className="border-2 rounded-lg p-3 border-gray-400 bg-slate-100 dark:bg-zinc-600"
                rows={10}
                name="message"
              ></textarea>
            </div>
            <button className="font-bold text-base bg-orange-600 rounded-lg w-full p-4 text-gray-100 mt-4 hover:bg-orange-500 hover:scale-105 ease-in-out duration-300 ">
              Send Message
            </button>
          </form>
        ))}
        <div className="my-10 flex items-center justify-center">
          <a
            href="#home"
            className=" rounded-full shadow-sm bg-gray-100 shadow-gray-400
            dark:bg-zinc-800
            dark:text-white dark:hover:text-orange-500 hover:text-orange-500 m-2 p-4 cursor-pointer hover:scale-x-105 ease-in-out duration-300 "
          >
            <BsArrowUpCircle size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
