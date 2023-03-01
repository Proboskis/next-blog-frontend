import Image from "next/image";

export default function card() {
    return (
        <div className="flex flex-col overflow-hidden rounded-sm shadow-lg">
            <div className="flex-shrink-0">
                <div>
                    <a href="#">
                        <div className="relative pb-20">
                            <div className="absolute inset-0">
                                <Image src="#" alt="image" loading="lazy" className="w-full h-full
                                object-cover p-0 bg-gray-500" />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                    <div className="flex flex-col flex-1">
                        <a href="#" className="block hover:underline">
                            <h3 className="mt-2 mb-4 text-lg font-semibold leading-7 text-gray-900 md:text-xl">
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                            </h3>
                        </a>
                        <div className="mt-auto">
                            <span className="ml-1">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full
                              text-xs font-medium leading-4 bg-red-50 text-gray-800">
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