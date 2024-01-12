"use client";

import {Avatar} from "@nextui-org/avatar";
import {Button} from "@nextui-org/button";
import {BsGithub, BsTwitter} from "react-icons/bs";
import {SiLinkedin} from "react-icons/si";

 export const AvatarMain = () => {
  return (
    <div className="space-y-4">
      <Avatar
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        className="w-36 h-36 text-large mx-auto"
      />
      <div className="space-y-2">
        <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
          <h3 className="text-white">
            Nikola Surla
          </h3>
          <p className="text-indigo-300">
            Web Developer
          </p>
          <div className="flex justify-center mt-8 space-x-4">
            <Button isIconOnly color="none" aria-label="twitter">
              <BsTwitter className="inline-block text-gray-400 hover:text-gray-200 w-7 h-7 rounded"/>
            </Button>
            <Button isIconOnly color="none" aria-label="github">
              <BsGithub className="inline-block text-gray-400 hover:text-gray-200 w-7 h-7 rounded"/>
            </Button>
            <Button isIconOnly color="none" aria-label="linkedin">
              <SiLinkedin className="inline-block text-gray-400 hover:text-gray-200 w-7 h-7 rounded"/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}