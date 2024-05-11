import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Head from "next/head";

const compliments = [
  "Me chamo Joel Vitor",
  "Sou Programador Full Stack",
  "Meu grande sonho é se tornar um grande desenvolvedor!",
  "Estudo programação há 4 anos!",
  `<a href="/about" class="hover:font-bold">Caso queira saber mais sobre mim clique aqui!</a>`,
  `<a href="/projects" class="hover:font-bold">Caso queira saber mais sobre os projetos que eu já desenvolvi clique aqui!</a>`,
  "Obrigado por ler até o fim!",
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center mb-10">
          <Image
            src="/images/profile.jpeg"
            width="128"
            height="128"
            alt="Foto de perfil"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h1 className="text-4xl font-bold mb-4">Joel Vitor</h1>
          <h1 className="text-xl iphone:text-center text-gray-700 mb-10">
            <Typewriter
              options={{
                strings: compliments,
                autoStart: true,
                loop: true
              }}
            />
          </h1>
        </div>
        <div className="flex flex-col md:flex-row iphone:grid iphone:grid-cols-2 justify-between w-64">
          <Link
            href="https://github.com/joelvitorniino"
            className="bg-gray-300 py-2 px-4 relative -top-12 mr-2 rounded-lg md:mb-0 hover:bg-gray-400"
          >
            <BsGithub className="w-7 h-7 inline-block" />
            <span className="ml-2">Github</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/joel-vitor-niino-campos-b319ba238/"
            className="bg-gray-300 py-2 px-4 relative -top-12 rounded-lg hover:bg-gray-400"
          >
            <FaLinkedin className="w-7 h-7 inline-block" />
            <span className="ml-2">Linkedin</span>
          </Link>
        </div>
      </div>
    </>
  );
}
