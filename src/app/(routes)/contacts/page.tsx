"use client";

import {Link} from "@nextui-org/link";
import NextLink from "next/link";

export default function AboutPage() {
  return (
    <div className="container relative flex flex-row justify-center mx-auto mb-64">
      <div className="relative px-4 pt-10 pb-16 sm:pt-12 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="w-full lg:pr-8">
          <div className="max-w-md mx-auto xl:max-w-3xl 5xl:max-w-5xl">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-800
                sm:text-3xl 5xl-text-5xl sm:leading-10"
            >
              Feedback
            </h1>
            <div className="prose text-left text-default-500 lg:prose-xl 5xl:prose-2xl">
              <p
                className="break-words mx-auto mt-3 leading-7 text-gray-500 max-w-1xl sm:mt-4"
              >
                You can send me feedback, suggestions and questions by emailing me at
                <Link
                  href="#"
                  className="ml-2 text-xl font-xl font-bold text-indigo-500 border-b border-blue-300 hover:border-blue-400"
                >
                  nikolasurla17@gmail.com
                </Link>
              </p>
              <p
                className="break-words mx-auto mt-3 leading-7 text-gray-500 max-w-1xl sm:mt-4"
              >
                Alternatively you can message me at
                <Link
                  href="#"
                  className="ml-2 text-xl font-bold text-indigo-500 border-b border-blue-300 hover:border-blue-400"
                >
                  Twitter
                </Link> or
                <Link
                  href="#"
                  className="ml-2 text-xl  font-bold text-indigo-500 border-b border-blue-300 hover:border-blue-400"
                >
                  LinkedIn
                </Link>.
              </p>
              <p
                className="break-words mx-auto mt-3 leading-7 text-gray-500 max-w-1xl sm:mt-4">
                If you spot outdated information in any of my articles, send me the link and
                I&apos;ll make sure to update the article ASAP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}