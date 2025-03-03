import Head from 'next/head';
import Card from './components/Card';
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

const fetcher = (input: RequestInfo) => 
  fetch(input, {
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_API_KEY as string,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json());

export default function ProjectsPage() {
  const { data, error } = useSWR<Projects>('/api/projects', fetcher);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-xl">Erro ao carregar os projetos.</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <NextNProgress />
        <p className="text-gray-600">Carregando projetos...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Projetos - Portfólio</title>
      </Head>
      <div className="min-h-screen bg-gray-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-800">Meus Projetos</h1>
            <p className="mt-2 text-lg text-gray-600">
              Confira alguns dos projetos que desenvolvi.
            </p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.data.map((project) => (
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
        </div>
      </div>
    </>
  );
}
