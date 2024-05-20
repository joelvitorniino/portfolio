import Head from "next/head";
import Card from "./components/Card";
import useSWR from 'swr'

type SafeNumber = number | `${number}`;

interface Project {
  title: string;
  description: string;
  url: string;
  imageLink: string;
  height: SafeNumber;
  width: SafeNumber;
  repository: string;
}

interface Projects {
  data: Project[];
}

export default function Projects() {
  const fetcher = (input: RequestInfo, init?: RequestInit) => fetch(input, init).then(res => res.json())
  const { data, error } = useSWR<Projects>('/api/projects', fetcher)

  if (error) {
    return (
      <div>
        <p>Erro ao carregar os projetos.</p>
      </div>
    )
  }

  if (!data) {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Projects Page</title>
      </Head>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 justify-between md:justify-end items-center md:items-stretch max-w-5.3 ml-0 mr-auto">
        {data.data.map(project => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
            imageLink={project.imageLink}
            height={project.height}
            width={project.width}
            repository={project.repository}
          />
        ))}
      </div>
    </>
  );
}
