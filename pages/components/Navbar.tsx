import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center pl-4 pr-1.2em mb-8 bg-black-smooth text-white">
            <div className="flex justify-center items-center">
                <Image src="/images/portfolio.svg" width="40" height="40" alt="Portfolio Joel Vitor" />
                <h1 className="ml-3em">Portfolio</h1>
            </div>
            <ul className="flex list-none">
                <li className="mr-1.3em">
                    <Link href="/" className="text-white no-underline p-1 transition border border-b-2 border-solid border-transparent hover:border-white">Home</Link>
                </li>
                <li className="mr-1.3em">
                    <Link href="/projects" className="text-white no-underline p-1 transition border border-b-2 border-solid border-transparent hover:border-white">Projects</Link>
                </li>
                <li className="mr-1.3em">
                    <Link href="/" className="text-white no-underline p-1 transition border border-b-2 border-solid border-transparent hover:border-white">About</Link>
                </li>
                <li className="mr-1.3em">
                    <Link href="/" className="text-white no-underline p-1 transition border border-b-2 border-solid border-transparent hover:border-white">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}