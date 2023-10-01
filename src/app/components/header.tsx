"use client";

import SearchInput from "@next-blog/app/components/search-input";
import {FcIdea} from "react-icons/fc";

export default function Header() {
  return (
    <header className="mt-24">
      <div className="w-full flex flex-col items-center">
        <h1 className="flex items-center break-words text-center text-2xl font-extrabold leading-9 tracking-tight
            text-gray-800 sm:text-4xl 5xl:text-5xl sm:leading-10 font-sans">
          proboskis blog <FcIdea className="ml-2 text-5xl"/>
        </h1>
        <h2 className="break-words text-center mx-auto my-9 text-lg leading-7 text-gray-500 mx-2 sm:mx-0 md:text-xl
            5xl:text-3xl sm:mt-4">
          I write articles about Web Development and Cloud Computing.
        </h2>
        <SearchInput/>
      </div>
    </header>
  );
}