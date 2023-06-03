import Navigation from "../navigation";
import Footer from "../footer";
import {IoIosArrowUp} from "react-icons/Io";
import AvatarCard from "../avatarCard";

export default function Home() {
    return (
        <div className="bg-white">
            <Navigation />
            <div style={{minHeight: "calc(100vh - 96px - 232px)"}}>
                <div className="container relative py-12 mx-auto overflow-hidden">
                    <div>
                        <div className="flex justify-center">
                        <div className="relative px-4 sm:px-6 lg:px-8">
                            <div className="mt-2 mb-8 text-md lg:text-lg max-w-prose">
                                <div className="text-left">
                                    <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-800
                                        sm:text-3xl 5xl:text-5xl sm:leading-10">
                                        Hi! I&amp;apos;m Nikola Surla 👋
                                    </h1>
                                </div>
                            </div>
                            <div>
                                <div className="prose text-left text-gray-500 lg:prose-lg 5xl:prose-2xl">
                                <p>I&amp;apos;ve been programing for the past 8 years</p>
                                <p>I try to learn from everyone. I write down everything that makes sense to me and
                                    could potentially benefit me and increase my productivity.</p>
                                <p>My view has been - I don&amp;apos;t have enough time to figure out a lot of these things
                                on my own, so I&amp;apos;ve decided to abandon my ego and try to learn as much as possible from
                                others.</p>
                                <p>I like finding new ways to save myself time - automating things, solving problems,
                                    writing clean code. The code for the articles is available on my
                                    <a href="#" target="_blank" rel="noopener noreferrer"
                                       className="ml-1 text-indigo-600">Github</a>.
                                </p>
                                </div>
                            </div>
                            <div className="mt-10">
                                <div className="bg-gray-50">
                                    <div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
                                        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                                            <h2 className="text-3xl font-extrabold text-center text-gray-900
                                        sm:text-4xl">
                                                Frequently asked questions
                                            </h2>
                                            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                                                <div className="pt-6">
                                                    <dt className="text-xl 5xl:text-2xl">
                                                        <button type="button" className="flex items-center
                                                    justify-between w-full text-left text-gray-400
                                                    focus:outline-none">
                                                        <span className="font-medium text-gray-900">
                                                            What is my tech stack?
                                                        </span>
                                                            <span className="flex items-center ml-6 h-7">
                                                            <IoIosArrowUp/>
                                                        </span>
                                                        </button>
                                                    </dt>
                                                    <dd className="pr-12 mt-2">
                                                        <p className="text-lg text-gray-700 5xl:text-xl">
                                                            I use React.js on the frontend, Node.js on the backend
                                                            and CDK to provision and manage my AWS infrastructure.
                                                            I write all my code using TypeScript.
                                                        </p>
                                                    </dd>
                                                </div>
                                                <div className="pt-6">
                                                    <dt className="text-xl 5xl:text-2xl">
                                                        <button type="button" className="flex items-center
                                                            justify-between w-full text-left text-gray-400
                                                            focus:outline-none">
                                                        <span className="font-medium text-gray-900">
                                                            How to contact me?
                                                        </span>
                                                            <span className="flex items-center ml-6 h-7">
                                                            <IoIosArrowUp/>
                                                        </span>
                                                        </button>
                                                    </dt>
                                                    <dd className="pr-12 mt-2">
                                                        <p className="text-lg text-gray-700 5xl:text-xl">
                                                            You can contact me by emailing me at nikolasurla17@gmail.com
                                                        </p>
                                                    </dd>
                                                </div>
                                                <div className="pt-6">
                                                    <dt className="text-xl 5xl:text-2xl">
                                                        <button type="button" className="flex items-center
                                                    justify-between w-full text-left text-gray-400
                                                    focus:outline-none">
                                                        <span className="font-medium text-gray-900">
                                                            Am I looking for a job?
                                                        </span>
                                                            <span className="flex items-center ml-6 h-7">
                                                            <IoIosArrowUp/>
                                                        </span>
                                                        </button>
                                                    </dt>
                                                    <dd className="pr-12 mt-2">
                                                        <p className="text-lg text-gray-700 5xl:text-xl">
                                                            Currently I am not looking for work.
                                                        </p>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden w-full max-w-xs ml-6 lg:block">
                            <AvatarCard />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
