import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo e título */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/portfolio.svg" 
            alt="Portfolio Logo" 
            width={40} 
            height={40} 
          />
          <span className="ml-2 text-xl font-bold">Portfolio</span>
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-300 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Botão do menu Mobile */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black text-white">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link 
                href="/" 
                className="hover:text-gray-300 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                className="hover:text-gray-300 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="hover:text-gray-300 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="hover:text-gray-300 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
