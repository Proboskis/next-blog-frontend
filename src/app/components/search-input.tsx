"use client";

import {Input} from "@nextui-org/input";
import {FcSearch} from "react-icons/fc";

export default function SearchInput() {
  return (
    <div
      className="flex justify-center items-center mt-3 w-full"
    >
      <Input
        isClearable
        size="lg"
        type="text"
        label={
          <div className="flex">
            <FcSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
            <span className="mt-0.5">Try to search....</span>
          </div>
        }
        labelPlacement="outside"
        variant="bordered"
        onClear={() => console.log("input cleared")}
        className="mx-6 sm:mx-24 lg:w-full xl:w-3/12 xl:mx-0"
      />
    </div>
  );
}