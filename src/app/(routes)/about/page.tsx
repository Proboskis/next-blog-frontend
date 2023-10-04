"use client";

import {Link} from "@nextui-org/link";
import NextLink from "next/link";

import {Accordion, AccordionItem} from "@nextui-org/accordion";

export default function AboutPage() {
  const answer1 = "I use React.js on the frontend, Node.js on the backend and CDK to provision and manage my AWS infrastructure. I write all my code using TypeScript.";
  const answer2 = "You can contact me by emailing me at nikolasurla17@gmail.com";
  const answer3 = "Currently I am not looking for work.";

  return (
    <div className="container relative py-12 mx-auto overflow-hidden">
      <div className="flex justify-center flex-col md:mx-40 lg:mx-80">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mt-2 mb-8 text-md lg:text-lg max-w-prose">
            <h1 className="break-words text-left text-2xl font-extrabold leading-9 tracking-tight text-gray-800
                sm:text-3xl 5xl:text-5xl sm:leading-10">
              Hi! I&apos;m Nikola Surla 👋
            </h1>
          </div>
          <div className="prose text-left text-default-500 lg:prose-md 5xl:prose-2xl">
            <p>
              I&apos;ve been programing for the past 8 years
            </p>
            <p>
              I try to learn from everyone. I write down everything that makes sense to me and
              could potentially benefit me and increase my productivity.
            </p>
            <p>
              My view has been - I don&apos;t have enough time to figure out a lot of these things
              on my own, so I&apos;ve decided to abandon my ego and try to learn as much as possible from
              others.
            </p>
            <p>
              I like finding new ways to save myself time - automating things, solving problems,
              writing clean code. The code for the articles is available on my
              <Link href="#" underline="always" className="ml-1 text-indigo-600" as={NextLink}>
                Github
              </Link>.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <div className="bg-gray-50">
            <div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                <h2 className="mb-12 text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
                  Frequently asked questions
                </h2>
                <Accordion
                  motionProps={{
                    variants: {
                      enter: {
                        y: 0,
                        opacity: 1,
                        height: "auto",
                        transition: {
                          height: {
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                            duration: 1,
                          },
                          opacity: {
                            easings: "ease",
                            duration: 1,
                          },
                        },
                      },
                      exit: {
                        y: -10,
                        opacity: 0,
                        height: 0,
                        transition: {
                          height: {
                            easings: "ease",
                            duration: 0.25,
                          },
                          opacity: {
                            easings: "ease",
                            duration: 0.3,
                          },
                        },
                      },
                    },
                  }}
                >
                  <AccordionItem key="1" aria-label="Accordion 1" title="What is my tech stack?">
                    {answer1}
                  </AccordionItem>
                  <AccordionItem key="2" aria-label="Accordion 2" title="How to contact me?">
                    {answer2}
                  </AccordionItem>
                  <AccordionItem key="3" aria-label="Accordion 3" title="Am I looking for a job?">
                    {answer3}
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}