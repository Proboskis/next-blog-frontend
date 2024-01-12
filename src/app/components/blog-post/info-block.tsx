"use client";

import {BsFillInfoCircleFill} from "react-icons/bs";

const InfoBlock = () => {
  return (
    <div className="mx-auto my-4 max-w-7xl">
      <div className="max-w-5xl mx-auto">
        <div className="p-4 rounded-md bg-blue-50">
          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <BsFillInfoCircleFill className="text-blue-700 text-xl"/>
            </div>
            <div className="ml-3">
              <div className="font-medium text-blue-700">
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

export default InfoBlock;