import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center pl-4 pr-1.2em mb-8 bg-black-smooth text-white">
            <div className="flex justify-center items-center">
                <Image src="/images/portfolio.svg" width="40" height="40" alt="Portfolio Joel Vitor" className="iphone:w-0 iphone:h-0 lg:w-10 lg:h-10 md:w-10 md:h-10 sm:w-10 sm:h-10" />
                <h1 className="lg:ml-2 md:ml-3em sm:ml-3em iphone:-ml-3">Portfolio</h1>
            </div>
            <ul className="flex list-none">
                <li className="lg:mr-1.3em max-sm:mr-2 iphone:mr-0 iphone:ml-7">
                    <Link href="/" className="text-white no-underline p-1 transition border border-b-2 border-solid border-transparent hover:border-white">Home</Link>
                </li>
                <li className="lg:mr-1.3em max-sm:mr-2 iphone:mr-0">
                    <Link href="/projects" className="text-white no-underline p-1 transition border border-b-2 border-solid border-transparent hover:border-white">Projects</Link>
                </li>
                <li className="lg:mr-1.3em max-sm:mr-1 iphone:mr-0 iphone:-ml-1">
                    <Link href="/about" className="text-white no-underline p-1 transition border border-b-2 border-solid border-transparent hover:border-white">About</Link>
                </li>
                <li className="lg:mr-1.3em max-sm:-mr-2 iphone:-ml-1">
                    <Link href="/" className="text-white no-underline p-1 transition border border-b-2 border-solid border-transparent hover:border-white">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}