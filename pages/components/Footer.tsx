import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left text-sm hover:underline">
          &copy; {year}{" "}
          <Link href="https://www.linkedin.com/in/joel-vitor-niino-campos-b319ba238/">
            Joel Vitor
          </Link>
        </div>
        <div className="mt-4 md:mt-0">
          <Link
            href="https://www.linkedin.com/in/joel-vitor-niino-campos-b319ba238/"
            passHref  target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
          >
              <FaLinkedin size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
