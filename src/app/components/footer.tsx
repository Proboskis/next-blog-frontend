import {Link} from "@nextui-org/link";
import NextLink from "next/link";
import {Button, ButtonGroup} from "@nextui-org/button";

import {BsGithub, BsTwitter} from "react-icons/bs";
import {SiLinkedin} from "react-icons/si";

export default function Footer() {
  return (
    <footer className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center -mx-5 -my-2">
        <Link className="px-5 py-2" href="#" color="foreground">About</Link>
        <Link className="px-5 py-2" href="#" color="foreground">Contacts</Link>
        <Link className="px-5 py-2" href="#" color="foreground">Policy</Link>
        <Link className="px-5 py-2" href="#" color="foreground">Terms &#38; Conditions</Link>
      </div>
      <div className="flex justify-center mt-8 space-x-6">
        <Button isIconOnly color="none" aria-label="twitter">
          <BsTwitter className="inline-block text-gray-600 hover:text-gray-500 w-7 h-7 rounded"/>
        </Button>
        <Button isIconOnly color="none" aria-label="github">
          <BsGithub className="inline-block text-gray-600 hover:text-gray-500 w-7 h-7 rounded"/>
        </Button>
        <Button isIconOnly color="none" aria-label="linkedin">
          <SiLinkedin className="inline-block text-gray-600 hover:text-gray-500 w-7 h-7 rounded"/>
        </Button>
      </div>
      <p className="mt-8 text-base text-center text-gray-500">
        Copyright &copy; Nikola Surla
      </p>
    </footer>
  );
}