import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/images/portfolio.ico"
          type="image/x-icon"
        />
      </Head>
      <Navbar />
      <main className="min-h-vh">{children}</main>
      <Footer />
    </>
  );
}
