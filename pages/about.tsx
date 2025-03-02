import Head from "next/head";
import {
  FaDocker,
  FaGit,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaReact,
  FaJava
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <div className="bg-gray-200 p-8">
        <h1 className="text-3xl font-bold">About</h1>
        <div className="mt-4">
          <p className="text-xl font-semibold">
            Olá me chamo Joel Vitor, tenho 18 anos e estou em busca de uma nova
            oportunidade na programação! Já estudo programação a 5 anos. Atualmente curso Ciência da Computação na Universidade Estácio de Sá.
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold">Conhecimentos:</h2>
          <span className="inline-block m-1">
            <FaReact size={51} className="inline" />
            <p className="inline ml-2 font-bold">
              React - <span className="font-extrabold"> (Básico)</span>
            </p>
          </span>

          <span className="flex m-2">
            <SiTypescript size={45} className="inline" />
            <p className="inline ml-2 font-bold">
              TypeScript -{" "}
              <span className="font-extrabold"> (Intermediário)</span>
            </p>
          </span>

          <span className="flex m-2">
            <FaNodeJs size={45} className="inline" />
            <p className="inline ml-2 font-bold">
              NodeJs - <span className="font-extrabold"> (Intermediário)</span>
            </p>
          </span>

          <span className="flex m-2">
            <TbBrandNextjs size={45} className="inline" />
            <p className="inline ml-2 font-bold">
              NextJS - <span className="font-extrabold"> (Intermediário)</span>
            </p>
          </span>

          <span className="flex m-2">
            <SiExpress size={45} className="inline" />
            <p className="inline ml-2 font-bold">
              Express - <span className="font-extrabold"> (Intermediário)</span>
            </p>
          </span>

          <span className="flex m-2">
            <FaJava size={45} className="inline" />
            <p className="inline ml-2 font-bold">
              Java - <span className="font-extrabold"> (Básico)</span>
            </p>
          </span>

          <span className="flex m-2">
            <SiSpringboot size={45} className="inline" />
            <p className="inline ml-2 font-bold">
              Spring Boot - <span className="font-extrabold"> (Básico)</span>
            </p>
          </span>

          <span className="flex m-2">
            <FaPython size={45} className="inline" />
            <p className="inline ml-2 font-bold">
              Python - <span className="font-extrabold"> (Básico)</span>
            </p>
          </span>

          <span className="flex m-2">
            <SiJavascript size={45} className="inline" />
            <p className="inline ml-2 font-bold">
              Javascript - <span className="font-extrabold"> (Avançado)</span>
            </p>
          </span>
        </div>

        <div className="mt-7 sm:inline-block">
          <h2 className="text-xl font-bold">Adicionais:</h2>
          <span className="flex m-2">
            <FaDocker size={45} className="inline" />
            <p className="inline ml-2 font-bold">Docker</p>
          </span>

          <span className="flex m-2">
            <FaGit size={45} className="inline" />
            <p className="inline ml-2 font-bold">Git</p>
          </span>

          <span className="flex m-2">
            <FaGithub size={45} className="inline" />
            <p className="inline ml-2 font-bold">Github</p>
          </span>
        </div>

        <div className="mt-7">
          <h2 className="text-xl font-bold">Currículo:</h2>
          <span className="flex m-2">
            <GrUserWorker size={45} className="inline" />
            <Link href="/pdf/cv_joelvitor.pdf">
              <p className="inline ml-2 font-bold">Download Currículo</p>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
