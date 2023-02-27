import {Bonheur_Royale} from "@next/font/google";

const BonheurRoyale: any = Bonheur_Royale({weight: '400', subsets: ['latin'], variable: '--font-bonheur-royale'});

export default function Navigation() {
    return (
        <nav>
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex relative items-center justify-between h-24
                bg-opacity-80 bg-clip-padding backdrop-filter-blur">
                    <a href="#" target="_blank" rel="noopener noreferrer"
                       className={`${BonheurRoyale.variable} font-signature text-5xl text-gray-500 hover:text-gray-700`}>
                        Proboskis
                    </a>
                </div>
            </div>
        </nav>
    )
}