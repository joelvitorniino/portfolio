import Head from 'next/head'
import Link from 'next/link'
import { 
  FaDocker, FaGit, FaGithub, FaNodeJs, FaPython, FaReact, FaJava 
} from 'react-icons/fa'
import { 
  SiExpress, SiJavascript, SiSpringboot, SiTypescript 
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { GrUserWorker } from 'react-icons/gr'

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre Joel Vitor - Portfólio</title>
      </Head>
      <main className="bg-gray-100 min-h-screen p-8">
        <section className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
          {/* Cabeçalho com Nome e Profissão */}
          <header className="mb-6">
            <h1 className="text-4xl font-bold text-gray-800">Joel Vitor Niino Campos</h1>
            <p className="text-lg text-gray-600 mt-2">Programador | Estudante de Ciência da Computação</p>
          </header>

          {/* Sobre Mim */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b pb-2">Sobre Mim</h2>
            <p className="mt-4 text-gray-700">
              Olá, sou Joel Vitor, tenho 18 anos e estudo programação há 5 anos. Atualmente curso Ciência da Computação na Universidade Estácio de Sá.
              Ao longo desse período, tive a oportunidade de atuar em estágios que me permitiram crescer tecnicamente e profissionalmente. Sou dedicado, colaborativo e sempre em busca de novos desafios.
            </p>
          </section>

          {/* Experiências Profissionais */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b pb-2">Experiências Profissionais</h2>
            <div className="mt-4 space-y-4">
              <article>
                <h3 className="text-xl font-semibold">Bravo Studios — Estagiário em Desenvolvimento</h3>
                <span className="text-gray-500">Outubro 2024 - Fevereiro 2025</span>
                <p className="mt-2 text-gray-700">
                  Atuação no desenvolvimento de aplicações utilizando NodeJS, NestJS, PHP e TypeScript.
                </p>
              </article>
              <article>
                <h3 className="text-xl font-semibold">ADDAF — Estagiário em TI</h3>
                <span className="text-gray-500">Maio 2024 - Outubro 2024</span>
                <p className="mt-2 text-gray-700">
                  Desenvolvimento de aplicações com Delphi e PHP, suporte interno (Windows Server 2012) e manutenção de computadores, além da criação de websites com WordPress.
                </p>
              </article>
            </div>
          </section>

          {/* Educação */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b pb-2">Educação</h2>
            <div className="mt-4">
              <article>
                <h3 className="text-xl font-semibold">Universidade Estácio de Sá</h3>
                <span className="text-gray-500">Bacharelado em Ciência da Computação (2° período) — Setembro 2024 - Dezembro 2028</span>
              </article>
            </div>
          </section>

          {/* Projetos Voluntários */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b pb-2">Projetos Voluntários</h2>
            <div className="mt-4">
              <article>
                <h3 className="text-xl font-semibold">Igreja XV de Novembro — Website</h3>
                <span className="text-gray-500">Fevereiro 2023</span>
                <p className="mt-2 text-gray-700">
                  Desenvolvimento voluntário de um website para a Igreja XV de Novembro.
                </p>
              </article>
            </div>
          </section>

          {/* Competências Técnicas */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b pb-2">Competências Técnicas</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <FaReact size={40} className="mr-3 text-blue-500" />
                <span className="font-semibold">React (Básico)</span>
              </div>
              <div className="flex items-center">
                <SiTypescript size={40} className="mr-3 text-blue-600" />
                <span className="font-semibold">TypeScript (Intermediário)</span>
              </div>
              <div className="flex items-center">
                <FaNodeJs size={40} className="mr-3 text-green-500" />
                <span className="font-semibold">NodeJS (Intermediário)</span>
              </div>
              <div className="flex items-center">
                <TbBrandNextjs size={40} className="mr-3" />
                <span className="font-semibold">Next.js (Intermediário)</span>
              </div>
              <div className="flex items-center">
                <SiExpress size={40} className="mr-3 text-gray-700" />
                <span className="font-semibold">Express (Intermediário)</span>
              </div>
              <div className="flex items-center">
                <FaJava size={40} className="mr-3 text-red-500" />
                <span className="font-semibold">Java (Básico)</span>
              </div>
              <div className="flex items-center">
                <SiSpringboot size={40} className="mr-3 text-green-700" />
                <span className="font-semibold">Spring Boot (Básico)</span>
              </div>
              <div className="flex items-center">
                <FaPython size={40} className="mr-3 text-yellow-500" />
                <span className="font-semibold">Python (Básico)</span>
              </div>
              <div className="flex items-center">
                <SiJavascript size={40} className="mr-3 text-yellow-600" />
                <span className="font-semibold">JavaScript (Avançado)</span>
              </div>
            </div>
          </section>

          {/* Ferramentas & Adicionais */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b pb-2">Ferramentas & Adicionais</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center">
                <FaDocker size={40} className="mr-3 text-blue-400" />
                <span className="font-semibold">Docker</span>
              </div>
              <div className="flex items-center">
                <FaGit size={40} className="mr-3 text-red-400" />
                <span className="font-semibold">Git</span>
              </div>
              <div className="flex items-center">
                <FaGithub size={40} className="mr-3 text-gray-800" />
                <span className="font-semibold">Github</span>
              </div>
            </div>
          </section>

          {/* Idiomas */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold border-b pb-2">Idiomas</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="font-semibold">Japonês:</span> Intermediário
              </div>
              <div>
                <span className="font-semibold">Inglês:</span> Intermediário
              </div>
              <div>
                <span className="font-semibold">Espanhol:</span> Intermediário
              </div>
              <div>
                <span className="font-semibold">Mandarim:</span> Básico
              </div>
            </div>
          </section>

          {/* Download do Currículo */}
          <section className="text-center">
            <Link href="/pdf/cv_joelvitor.pdf" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded">
                Download Currículo
            </Link>
          </section>
        </section>
      </main>
    </>
  )
}
