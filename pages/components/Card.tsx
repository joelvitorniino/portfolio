import Image from "next/image";
import Link from "next/link";

export default function Card() {
    return (
        <div className="flex justify-center items-center flex-col pl-2em pr-1em mb-2em w-23% border-r-1em border-2 border-solid border-redPersonally shadow-solid bg-black-smooth text-white">
            <Image src="/image/portfolio.svg" width="120" height="120" alt="Portfolio Image" />
            <p className="ml-4 mr-0 bg-redPersonally border-r-5 p-1.5 text-white flex justify-center items-center">1</p>
            <h1 className="capitalize mb-4 text-sm-extra">Test</h1>
            <Link href="#" className="no-underline bg-white text-blackLight pr-.7em pl-1.2em border-r-5 font-bold duration-0.4s hover:bg-redPersonally hover:text-white">Details</Link>
        </div>
    );
}