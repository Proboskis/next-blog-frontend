"use client";

import {RiErrorWarningFill} from "react-icons/ri";

const WarningBlock = () => {
  return (
    <div className="mx-auto my-4 max-w-7xl">
      <div className="max-w-5xl mx-auto">
        <div className="p-4 rounded-md bg-red-50">
          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <RiErrorWarningFill className="text-red-700 text-2xl"/>
            </div>
            <div className="ml-3">
              <div className="font-medium text-red-700">
                <div className="break-words">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nesciunt, sequi. Assumenda at
                  doloribus eius eligendi error.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarningBlock;