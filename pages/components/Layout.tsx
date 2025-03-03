import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Portfolio de Joel Vitor - Desenvolvedor Full Stack</title>
        <meta
          name="description"
          content="Conheça o portfólio de Joel Vitor, um desenvolvedor Full Stack e estudante de Ciência da Computação. Veja seus projetos, experiências e habilidades."
        />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Portfolio de Joel Vitor" />
        <meta
          property="og:description"
          content="Conheça o portfólio de Joel Vitor, um desenvolvedor Full Stack e estudante de Ciência da Computação. Veja seus projetos, experiências e habilidades."
        />
        <meta property="og:image" content="https://seu-dominio.com/images/portfolio-preview.png" />
        <meta property="og:url" content="https://seu-dominio.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio de Joel Vitor" />
        <meta
          name="twitter:description"
          content="Conheça o portfólio de Joel Vitor, um desenvolvedor Full Stack e estudante de Ciência da Computação. Veja seus projetos, experiências e habilidades."
        />
        <meta name="twitter:image" content="https://seu-dominio.com/images/portfolio-preview.png" />
        <link
          rel="shortcut icon"
          href="/images/portfolio.ico"
          type="image/x-icon"
        />
      </Head>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
