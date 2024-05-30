import Head from "next/head";
import Card from "./components/Card";
import useSWR from 'swr';
import NextNProgress from 'nextjs-progressbar';

interface Project {
  title: string;
  description: string;
  url: string;
  imageLink: string;
  repository: string;
}

interface Projects {
  data: Project[];
}

const fetcher = (input: RequestInfo) => fetch(input, {
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY as string,
    'Content-Type': 'application/json'
  }
}).then(res => res.json());

export default function Projects() {
  const { data, error } = useSWR<Projects>('/api/projects', fetcher);

  console.log(data?.data);

  if (error) {
    return (
      <div>
        <p>Erro ao carregar os projetos.</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <NextNProgress />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Projects Page</title>
      </Head>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4 max-w-5xl mx-auto p-4">
        {data.data.map(project => (
          

          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
            imageLink={project.imageLink}
            repository={project.repository}
          />
        ))}
      </div>
    </>
  );
}
