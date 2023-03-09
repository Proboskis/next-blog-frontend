import {BsGithub, BsLinkedin, BsTwitter} from "react-icons/bs";

export default function AvatarCard() {
    return (
        <div className="px-6 py-5 mx-1 mt-10 mb-6 text-center bg-gray-800 rounded-lg
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
    );
}