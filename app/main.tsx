import Card from "./card";
import {BsGithub, BsLinkedin, BsTwitter} from "react-icons/bs";
import Image from "next/image";

export default function main() {
    return (
        <main style={{minHeight: "calc(100vh - 96px - 232px)"}}>
            <div className="px-4 pt-8 pb-20 sm:px-6 lg:pt-12 lg:pb-28 lg:px-4">
                <div className="relative max-w-full mx-auto">

                </div>
                <div className="flex flex-col justify-center items-center lg:items-start  lg:flex-row">
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
                        <div className="px-6 py-5 mx-2 mt-10 mb-6 text-center bg-gray-800 rounded-sm
                        lg:mt-0 xl:px-10">
                            <div className="space-y-4">
                                <Image src="#" alt="author avatar" className="mx-auto rounded-full h-36 w-36 bg-white"/>
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