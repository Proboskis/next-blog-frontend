import {BsGithub, BsLinkedin, BsTwitter} from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="shadow mt-60 mv-stop">
            <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center -mx-5 -my-2">
                    <div className="px-8 py-2">
                        <a className="text-base text-gray-500 hover:text-gray-900 font-medium" href="/about">
                            About
                        </a>
                    </div>
                    <div className="px-8 py-2">
                        <a className="text-base text-gray-500 hover:text-gray-900 font-medium" href="/contacts">
                            Contacts
                        </a>
                    </div>
                    <div className="px-8 py-2">
                        <a className="text-base text-gray-500 hover:text-gray-900 font-medium" href="/privacy-policy">
                            Privacy policy
                        </a>
                    </div>
                    <div className="px-8 py-2">
                        <a className="text-base text-gray-500 hover:text-gray-900 font-medium" href="/terms-and-conditions">
                            Terms &amp; Conditions
                        </a>
                    </div>
                </div>
                <div className="flex justify-center mt-8 space-x-6">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <BsTwitter className="w-6 h-6 text-orange-600 hover:text-orange-400" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <BsGithub className="w-6 h-6 text-orange-600 hover:text-orange-400" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className="w-6 h-6 text-orange-600 hover:text-orange-400" />
                    </a>
                </div>
                <p className="mt-8 text-base text-center text-gray-500">
                    Copyright &#169;
                    2023
                    Nikola Surla
                </p>
            </div>
        </footer>
    );
}