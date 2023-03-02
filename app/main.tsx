import Card from "./card";
import {BsGithub, BsLinkedin, BsTwitter} from "react-icons/bs";
import Image from "next/image";
import {FcSearch} from "react-icons/Fc";

export default function main() {
    return (
        <main style={{minHeight: "calc(100vh - 96px - 232px)"}}>
            <div className="px-4 pt-8 pb-20 sm:px-6 lg:pt-12 lg:pb-28 lg:px-8">
                <div className="relative max-w-full mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-700
                        sm:text-3xl 5xl:text-5xl sm:leading-10">
                            Welcome to the blog
                        </h1>
                        <h2 className="mx-auto mt-3 text-lg leading-7 text-gray-500 md:text-xl 5xl:text-3xl max-w1-xl
                        sm:mt-4">
                            I write articles about Web Development and Cloud Computing.
                        </h2>
                        <div className="flex justify-center items-center mt-3 mb-6">
                            <div className="relative items-center w-full max-w-lg mt-3 rounded-md sm:w-2/3">
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3
                                    pointer-events-none">
                                        <FcSearch/>
                                    </div>
                                    <input type="text" placeholder="Search for Articles" className="pl-10 block w-full
                                    py-2 border-2 border-gray-300 rounded-md shadow-sm appearance-none
                                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    autoComplete="off" autoCorrect="off" autoCapitalize="none" spellCheck="false" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row">
                    <div className="grid w-full max-w-lg gap-5 mt-12 md:grid-cols-1 md:max-w-lg
                    lg:grid-cols-2 lg:max-w-6xl 2xl:grid-cols-3 2xl:max-w-7xl" id="card-container">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="hidden w-full max-w-xs mt-12 sm:ml-10 lg:block">
                        <div className="px-6 py-5 mx-1 mt-10 mb-6 text-center bg-gray-900 rounded-lg
                        lg:mt-0 xl:px-10">
                            <div className="space-y-4">
                                <img src="#" alt="author avatar" className="mx-auto rounded-full h-36 w-36 bg-white"/>
                                <div className="space-y-6">
                                    <div className="flex justify-center items-center flex-col space-y-3 text-lg
                                    font-medium leading-6">
                                        <h3 className="text-white">Nikola Surla</h3>
                                        <p className="text-indigo-300">Software Engineer</p>
                                        <div className="flex justify-center mt-5 space-x-5">
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                <BsTwitter className="w-6 h-6 text-gray-400 hover:text-gray-100" />
                                            </a>
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                <BsGithub className="w-6 h-6 text-gray-400 hover:text-gray-100" />
                                            </a>
                                            <a href="#" target="_blank" rel="noopener noreferrer">
                                                <BsLinkedin className="w-6 h-6 text-gray-400 hover:text-gray-100" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}