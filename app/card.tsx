import Image from "next/image";
import alps from "../public/alps.jpg";

export default function card() {
    return (
        <div className="flex flex-col overflow-hidden rounded-md shadow-lg min-h-full">
            <div className="flex-shrink-0">
                <div>
                    <a href="#">
                        <div className="relative pb-64">
                            <div className="absolute inset-0">
                                <Image src={alps} alt="image" loading="lazy" className="w-full h-full
                                object-cover bg-gray-500" />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                    <div className="flex flex-col flex-1">
                        <a href="#" className="block">
                            <p className=" ml-1 font-medium text-gray-400">
                                01.01.2023
                            </p>
                            <h3 className="mt-2 mb-4 mx-3 text-lg font-semibold leading-7 text-gray-900
                            hover:underline md:text-2xl">
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                            </h3>
                        </a>
                        <div className="mt-auto">
                            <p className="mx-4 pl-4 text-sm md:mx-12 md:border-l-4 md:border-gray-200 md:text-xl">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquam amet at,
                                consequuntur dolorem ipsum laborum maiores minima omnis provident quas quo quod
                                repudiandae sapiente totam voluptatum? Deleniti, dignissimos?
                            </p>
                            <span className="ml-2">
                              <span className="inline-flex items-center px-3 py-1 my-6 rounded-full
                              text-xs font-medium leading-4 bg-red-50 text-gray-800 md:my-8">
                                lorem
                              </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}