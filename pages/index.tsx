import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Head from "next/head";

const compliments = [
  "Me chamo Joel Vitor",
  "Sou Programador Full Stack",
  "Meu grande sonho é me tornar um desenvolvedor de excelência!",
  "Estudo programação há 5 anos!",
  `Conheça mais sobre mim <a href="/about" class="underline hover:font-bold">aqui</a>`,
  `Veja meus projetos <a href="/projects" class="underline hover:font-bold">aqui</a>`,
  "Obrigado por visitar meu portfólio!",
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Portfólio Joel Vitor</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-10 max-w-xl mx-auto text-center">
          <div className="flex flex-col items-center">
            <Image 
              src="/images/profile.jpg"
              alt="Foto de perfil"
              width={128}
              height={128}
              className="rounded-full mb-4"
            />
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Joel Vitor</h1>
            <div className="text-lg text-gray-700 mb-6">
              <Typewriter 
                options={{
                  strings: compliments,
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link href="https://github.com/joelvitorniino" passHref target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                <BsGithub className="w-6 h-6" />
                Github
            </Link>
            <Link href="https://www.linkedin.com/in/joel-vitor-niino-campos-b319ba238/" passHref target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                <FaLinkedin className="w-6 h-6" />
                Linkedin
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
