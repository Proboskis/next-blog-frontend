import {Bonheur_Royale} from "@next/font/google";

const BonheurRoyale: any = Bonheur_Royale({weight: '400', subsets: ['latin'], variable: '--font-bonheur-royale'});

export default function Navigation() {
    return (
        <nav>
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex relative items-center justify-between h-24
                bg-opacity-80 bg-clip-padding backdrop-filter-blur">
                    <a href="#" target="_blank" rel="noopener noreferrer"
                       className={`${BonheurRoyale.variable} font-signature text-5xl text-gray-500`}>
                        <span className="text-orange-600">P</span>
                        <span>roboskis</span>
                    </a>
                    <div className="hidden w-full md:block md:ml-6">
                        <div className="flex justify-end">
                            <a href="#" className="block px-4 py-2 mx-1 text-lg font-medium leading-5 text-gray-700
                            border-l-4 border-transparent transition duration-150 ease-in-out rounded-sm
                            hover:bg-gray-100 border-solid border-orange-600
                            focus:outline-none focus:bg-gray-100 5xl:text-3xl bg-gray-100">
                                Home
                            </a>
                            <a href="#" className="block px-4 py-2 mx-1 text-lg font-medium leading-5 text-gray-700
                            border-l-4 border-transparent transition duration-150 ease-in-out rounded-sm
                            hover:bg-gray-100
                            focus:outline-none focus:bg-gray-100 5xl:text-3xl">
                                About
                            </a>
                            <a href="#" className="block px-4 py-2 mx-1 text-lg font-medium leading-5 text-gray-700
                            border-l-4 border-transparent transition duration-150 ease-in-out rounded-sm
                            hover:bg-gray-100
                            focus:outline-none focus:bg-gray-100 5xl:text-3xl">
                                Contacts
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}