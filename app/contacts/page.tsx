import Navigation from "../navigation";
import Footer from "../footer";
import mail_envelope from "./mail_envelope.png";
import Image from "next/image";

export default function Home() {
    return (
        <div className="bg-white">
            <Navigation />
            <div style={{minHeight: "calc(100vh - 96px - 232px)"}}>
                <div className="container relative flex flex-row justify-center mx-auto bg-white">
                    <div className="relative px-4 pt-10 pb-16 sm:pt-12 sm:px-6 lg:px-8 lg:max-w-7xl">
                        <div className="w-full lg:pr-8">
                            <div className="max-w-md mx-auto xl:max-w-3xl 5xl:max-w-5xl">
                                <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-800
                                    sm:text-3xl 5xl-text-5xl sm:leading-10">
                                    Feedback
                                </h1>
                                <div className="text-left">
                                    <h2 className="mx-auto mt-3 text-lg leading-7 text-gray-500 md:text-xl
                                        5xl:text-5xl max-w-1xl sm:mt-4">
                                        You can send me feedback, suggestions and questions by emailing me at
                                        <a href="#" className="ml-2 font-bold text-indigo-500 border-b border-blue-300
                                        hover:border-blue-400">nikolasurla17@gmail.com</a>
                                    </h2>
                                    <h2 className="mx-auto mt-3 text-lg leading-7 text-gray-500 md:text-xl
                                        5xl:text-5xl max-w-1xl sm:mt-4">
                                        Alternatively you can message me at<a href="#" className="ml-2 font-bold
                                        text-indigo-500 border-b border-blue-300 hover:border-blue-400">
                                        Twitter</a> or<a href="#" className="ml-2 font-bold text-indigo-500
                                        border-b border-blue-300 hover:border-blue-400">LinkedIn</a>.
                                    </h2>
                                    <h2 className="mx-auto mt-3 text-lg leading-7 text-gray-500 md:text-xl
                                        5xl:text-5xl max-w-1xl sm:mt-4">
                                        If you spot outdated information in any of my articles, send me the link and
                                        I'll make sure to update the article ASAP.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:inline-block">
                        <Image width={1024} height={1024} src={mail_envelope} alt="mail envelope" className="object-contain w-full"/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
