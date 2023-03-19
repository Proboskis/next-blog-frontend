import Navigation from "../navigation";
import {FaUserCircle, RiLockPasswordFill} from "react-icons/all";
import Footer from "../footer";


export default function login() {
    return (
        <div style={{minHeight: "calc(100vh - 96px - 232px)"}}>
            <div className="bg-white">
                <Navigation />
                    <div className="grid place-items-center h-screen overflow-hidden rounded-md min-h-full p-4">
                        <div className="flex flex-center overflow-hidden rounded-md min-h-full w-1/2 px-6 py-8">
                            <div className="flex-shrink-0 w-full h-full">
                                <div className="flex flex-col justify-center items-center mt-3 mb-6">
                                    <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-800 mb-6
                                            sm:text-3xl 5xl:text-5xl sm:leading-10">Account login</h1>
                                    <div className="relative items-center w-full max-w-lg mt-6 rounded-md sm:w-2/3 my-6">
                                        <div className="relative mt-1 rounded-md shadow-sm">
                                            <div className="flex absolute inset-y-0 left-0 items-center pl-4
                                                pointer-events-none text-3xl">
                                                <FaUserCircle className="text-gray-400 active:text-gray-500" />
                                            </div>
                                            <input type="text" placeholder="Search for articles" className="pl-14 block w-full
                                        py-4 border border-gray-300 rounded-md shadow-sm appearance-none
                                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                                                   autoComplete="off" autoCorrect="off" autoCapitalize="none" spellCheck="false" />
                                        </div>
                                    </div>
                                    <div className="relative items-center w-full max-w-lg mt-6 rounded-md sm:w-2/3 my-6">
                                        <div className="relative mt-1 rounded-md shadow-sm">
                                            <div className="flex absolute inset-y-0 left-0 items-center pl-4
                                                pointer-events-none text-3xl">
                                                <RiLockPasswordFill className="text-gray-400 active:text-gray-500" />
                                            </div>
                                            <input type="text" placeholder="Search for articles" className="pl-14 block w-full
                                        py-4 border border-gray-300 rounded-md shadow-sm appearance-none
                                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                                                   autoComplete="off" autoCorrect="off" autoCapitalize="none" spellCheck="false" />
                                        </div>
                                    </div>
                                    <div className="relative items-center w-full max-w-lg mt-6 sm:w-2/3 py-6">
                                        <div className="flex flex-row">
                                            <input className="h-6 w-6 ml-1" type="checkbox"/>
                                            <span className="mb-4 ml-4 ">Stay logged in</span>
                                        </div>
                                    </div>
                                    <div className="relative items-center w-full max-w-lg mt-6 rounded-md sm:w-2/3 my-6 bg-orange-600">
                                        <button className="w-full h-full px-1 py-3">
                                            login
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        </div>
    )
}